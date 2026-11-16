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

/** A field counts as saved when the key is present with any value but null,
 * including "" or []: that is how Secure records a field the user cleared. */
function isPresent(record: ObituaryRecord, key: keyof ObituaryRecord) {
  return (
    Object.prototype.hasOwnProperty.call(record, key) &&
    record[key] !== undefined &&
    record[key] !== null
  );
}

/**
 * Reads the current field when it is present, even if it is empty, so a
 * cleared field stays cleared. The older alias keys are only used when the
 * current key is absent (records saved before the current shape existed).
 */
function currentOrLegacy(
  record: ObituaryRecord,
  current: keyof ObituaryRecord,
  ...legacy: (keyof ObituaryRecord)[]
): string | null {
  if (isPresent(record, current)) return text(record[current]);

  for (const key of legacy) {
    const found = text(record[key]);
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
 * Reads `snapshot.obituary`. Current keys win whenever they are present;
 * legacy aliases (the ones Secure's hydrateObituary still knows) fill in only
 * when the current key is absent. Returns null when nothing meaningful is
 * saved, so the Report can hide the section entirely.
 */
export function getObituaryView(
  obituary: ObituaryRecord | null | undefined,
): ObituaryView | null {
  if (!obituary || typeof obituary !== "object") return null;

  const photoRaw = isPresent(obituary, "photo_url")
    ? obituary.photo_url
    : obituary.photo_link;

  const view: ObituaryView = {
    name: currentOrLegacy(obituary, "obituary_name", "name", "name_to_use"),
    publications: currentOrLegacy(
      obituary,
      "publications",
      "publication_list",
      "publication",
    ),
    tone: currentOrLegacy(obituary, "tone", "preferred_tone"),
    familyList: currentOrLegacy(
      obituary,
      "family_list",
      "family_members",
      "family_notes",
    ),
    draftText: currentOrLegacy(
      obituary,
      "draft_text",
      "draft",
      "text",
      "notes",
    ),
    includeServiceDetails: yesNo(obituary.include_service_details),
    photoUrl: safeHttpUrl(photoRaw),
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
