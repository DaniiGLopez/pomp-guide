import { valueOrNull } from "./format";

/**
 * Labels for fields where Secure stores a choice value (a <select> option's
 * `value`) rather than text the author typed. Each map mirrors the option
 * labels in Secure's form (`secure/index.html` in pomp-planning). Only fields
 * that really store choices belong here; free text must never go through a map.
 */
export type ChoiceLabels = Readonly<Record<string, string>>;

export const DISPOSITION_LABELS: ChoiceLabels = {
  burial: "Burial",
  cremation: "Cremation",
  cremation_with_burial: "Cremation with burial of the ashes",
  // Legacy value Secure keeps so older plans still display.
  both: "Cremation with burial of the ashes",
  not_sure: "Not sure",
  other: "Other",
};

export const FUNDING_APPROACH_LABELS: ChoiceLabels = {
  self: "Personally",
  family: "Family",
  mixed: "Mixed",
  unsure: "Not sure",
};

export const YES_NO_UNSURE_LABELS: ChoiceLabels = {
  yes: "Yes",
  no: "No",
  unsure: "Not sure",
  not_sure: "Not sure",
};

/**
 * Keys of `plan.services.services_selected`. Secure derives them from the
 * saved service events; the labels match the card titles in the Services
 * section so the summary and the section read the same way.
 */
export const SERVICE_LABELS: ChoiceLabels = {
  viewing: "Viewing",
  memorial: "Memorial",
  celebration: "Celebration of Life",
  celebration_of_life: "Celebration of Life",
};

// A stored code, e.g. `green_burial` or `not-sure`: one lowercase token,
// optionally joined with underscores or hyphens. Anything with spaces or
// capitals is treated as text someone wrote, and left alone.
const CODE_LIKE = /^[a-z][a-z0-9]*(?:[_-][a-z0-9]+)*$/;

function choiceKey(value: string): string {
  return value.trim().toLowerCase().replace(/[\s-]+/g, "_");
}

/**
 * Turns a stored choice value into reader-facing text.
 *
 * - Known values use the explicit label map.
 * - Readable legacy text ("Cremation, then scattering") is kept as written.
 * - An unfamiliar stored code ("green_burial") becomes sentence case
 *   ("Green burial") so raw keys never reach the page.
 * - Empty values return null so callers can show their own placeholder.
 */
export function formatChoice(
  value: unknown,
  labels: ChoiceLabels,
): string | null {
  const text = valueOrNull(value);
  if (!text) return null;

  const known = labels[choiceKey(text)];
  if (known) return known;

  if (CODE_LIKE.test(text)) {
    const words = text.replace(/[_-]+/g, " ");
    return words.charAt(0).toUpperCase() + words.slice(1);
  }

  return text;
}

/**
 * Disposition label. `other` shows the saved description when there is one;
 * a leftover description is ignored for every other choice.
 */
export function formatDisposition(
  disposition: unknown,
  disposition_other?: unknown,
): string | null {
  const label = formatChoice(disposition, DISPOSITION_LABELS);
  if (!label) return null;

  if (choiceKey(String(disposition)) === "other") {
    return valueOrNull(disposition_other) ?? label;
  }

  return label;
}

export function formatServicesSelected(selected: unknown): string | null {
  if (!Array.isArray(selected)) return null;

  const labels = selected
    .map((item) => formatChoice(item, SERVICE_LABELS))
    .filter((label): label is string => Boolean(label));

  const unique = [...new Set(labels)];
  return unique.length > 0 ? unique.join(", ") : null;
}
