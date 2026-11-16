import type { ObituaryRecord } from "../types/plan";

export type ObituaryView = {
  name: string | null;
  publications: string | null;
  tone: string | null;
  familyList: string | null;
  draftText: string | null;
  /** `null` means the preference was never set; `false` is an explicit No. */
  includeServiceDetails: boolean | null;
  photoUrl: string | null;
};

/** Trimmed text, or null when blank. Unlike valueOrNull, wording is never
 * second-guessed ("Unknown" can be someone's actual draft). */
function text(value: unknown): string | null {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed === "" ? null : trimmed;
  }
  if (Array.isArray(value)) {
    const items = value
      .map((item) => text(item))
      .filter((item): item is string => item !== null);
    return items.length > 0 ? items.join(", ") : null;
  }
  return null;
}

/** First non-blank value, in the same order as Secure's hydrateObituary. */
function firstText(...values: unknown[]): string | null {
  for (const value of values) {
    const found = text(value);
    if (found) return found;
  }
  return null;
}

function yesNo(value: unknown): boolean | null {
  if (value === true) return true;
  if (value === false) return false;
  if (typeof value !== "string") return null;

  const normalized = value.trim().toLowerCase();
  if (normalized === "yes" || normalized === "true") return true;
  if (normalized === "no" || normalized === "false") return false;
  return null;
}

/** Only http(s) links are shown; anything else (javascript:, data:, a bare
 * word) is dropped rather than rendered as a link. */
export function safeHttpUrl(value: unknown): string | null {
  const candidate = text(value);
  if (!candidate) return null;

  try {
    const url = new URL(candidate);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.href
      : null;
  } catch {
    return null;
  }
}

/**
 * Reads `snapshot.obituary` the way Secure's hydrateObituary does, including
 * the legacy aliases. Returns null when nothing meaningful was saved, so the
 * Report can hide the section entirely.
 */
export function getObituaryView(
  obituary: ObituaryRecord | null | undefined,
): ObituaryView | null {
  if (!obituary || typeof obituary !== "object") return null;

  const view: ObituaryView = {
    name: firstText(
      obituary.name,
      obituary.obituary_name,
      obituary.name_to_use,
    ),
    publications: firstText(
      obituary.publications,
      obituary.publication_list,
      obituary.publication,
    ),
    tone: firstText(obituary.tone, obituary.preferred_tone),
    familyList: firstText(
      obituary.family_list,
      obituary.family_members,
      obituary.family_notes,
    ),
    draftText: firstText(
      obituary.draft_text,
      obituary.draft,
      obituary.text,
      obituary.notes,
    ),
    includeServiceDetails: yesNo(obituary.include_service_details),
    photoUrl:
      safeHttpUrl(obituary.photo_url) ?? safeHttpUrl(obituary.photo_link),
  };

  const hasContent =
    view.name !== null ||
    view.publications !== null ||
    view.tone !== null ||
    view.familyList !== null ||
    view.draftText !== null ||
    view.includeServiceDetails !== null ||
    view.photoUrl !== null;

  return hasContent ? view : null;
}
