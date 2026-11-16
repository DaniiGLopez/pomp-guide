import type { PompPlan } from "../types/plan";

/**
 * Fully synthetic, sparse plan shaped like an older record: legacy
 * `disposition: "both"`, obituary saved under older alias keys, and most
 * sections empty. Every name and number here is invented.
 */
export const samplePlanLegacy: PompPlan = {
  client_id: "pomp_0000000000001_test",
  submission_source: "fixture",
  schema_version: 3,
  created_at: "2025-02-01T12:00:00.000Z",
  last_updated_at: "2025-02-01T12:00:00.000Z",

  person: { full_name: "Casey Morgan Doyle" },

  services: {
    disposition: "both",
    disposition_other: "Left over from an earlier choice",
    services_selected: ["memorial"],
    viewing: {},
    memorial: { location_name: "Example Chapel" },
    celebration: { production_details: {} },
  },

  contacts: [],
  insurance: [],
  music: [],
  legal: { legal_name: "Casey Morgan Doyle" },
  cemetery: {},
  funding: { funding_approach: "family", funding_help_requested: "yes" },

  obituary: {
    name_to_use: "Casey M. Doyle",
    publication_list: "Example Gazette, funeral home website",
    preferred_tone: "Traditional",
    family_members: "Wife: Pat Doyle\nDaughter: Quinn Doyle",
    draft: "Casey enjoyed fishing.\n\nCasey will be missed.",
    include_service_details: "yes",
    photo_link: "javascript:alert(1)",
  },
};
