import type { PompPlan } from "../types/plan";

/**
 * Fully synthetic, populated plan for previewing and checking the Report.
 * Every name, number, and address here is invented.
 *
 * Exercises: disposition `other` with a description, multiline obituary text,
 * an explicit "No" for service details, an optional photo link, and a
 * contact marked "primary".
 */
export const samplePlanSynthetic: PompPlan = {
  client_id: "pomp_0000000000000_test",
  submission_source: "fixture",
  schema_version: 4,
  created_at: "2026-01-05T15:00:00.000Z",
  last_updated_at: "2026-03-18T16:30:00.000Z",

  person: {
    full_name: "Jordan Avery Whitlock",
    first_name: "Jordan",
    middle_name: "Avery",
    last_name: "Whitlock",
    phone: "(555) 010-0142",
    email: "jordan@example.test",
    address: "100 Example Lane",
    city: "Springfield",
    state: "OH",
    zip: "45000",
  },

  services: {
    disposition: "other",
    disposition_other: "Green burial in the family orchard, no embalming",
    services_selected: ["viewing", "memorial", "celebration"],

    viewing: {
      location_type: "funeral_home",
      location_name: "Example Family Funeral Home",
      location_address: "200 Sample Street, Springfield, OH 45000",
      location_phone: "(555) 010-0170",
      spiritual_traditions_notes: "Open casket for the first hour only.",
    },

    memorial: {
      location_type: "place_of_worship",
      location_name: "Example Community Chapel",
      location_address: "300 Placeholder Avenue, Springfield, OH 45000",
      location_phone: "(555) 010-0171",
      spiritual_traditions_notes: "",
    },

    celebration: {
      location_type: "private_home",
      location_name: "The Whitlock family home",
      location_address: "100 Example Lane, Springfield, OH 45000",
      location_phone: "",
      spiritual_traditions_notes: "",
      production_details: {
        flowers: "Sunflowers and wild grasses",
        slideshow: "Yes, photos from the lake trips",
        mc: "Sam Whitlock",
        prayer_leader: "",
        music_live: "Acoustic guitar",
        catering_notes: "Potluck, with the peach cobbler recipe on file",
        decor_theme: "Garden party",
      },
    },

    service_mood: "Warm and relaxed. Please keep it short.",
    special_requests:
      "No dark colors, please.\nDonations to the county library in place of flowers.",
    family_message:
      "Thank you for being here.\n\nPlay the music loud, tell the stories twice,\n  and please don't let anyone cry over the casserole.\n\nI love you all. - J.",
  },

  contacts: [
    {
      name: "Sam Whitlock",
      relationship: "Sibling",
      phone: "5550100143",
      email: "sam@example.test",
      address: "101 Example Lane, Springfield, OH",
      notes: "Primary contact",
    },
    {
      name: "Riley Okafor",
      relationship: "Friend",
      phone: "(555) 010-0144",
      email: "",
      address: "",
      notes: "Has a copy of the music list",
    },
  ],

  insurance: [
    {
      insured_name: "Jordan Avery Whitlock",
      carrier: "Example Mutual",
      policy_number: "EX-000-0000",
      policy_type: "Whole life",
      face_amount: "15000",
      beneficiaries: "Sam Whitlock",
      riders: "",
    },
  ],

  music: [
    { title: "Here Comes the Sun", artist: "Example Band", notes: "Opening" },
    { title: "Amazing Grace", artist: "", notes: "" },
  ],

  legal: {
    legal_name: "Jordan Avery Whitlock",
    sex: "Other",
    dob: "1950-06-15",
    place_of_birth: "Springfield, OH",
    county: "Clark",
    veteran_status: "No",
    hispanic_origin: "No",
    father_legal_name: "Robert Whitlock",
    mother_maiden_name: "Dana Pruitt",
  },

  cemetery: {
    cemetery_name: "Whitlock Family Orchard",
    cemetery_location: "Springfield, OH",
    interment_type: "Natural ground burial",
    remains_container: "Biodegradable shroud",
    cemetery_section: "",
    cemetery_lot: "",
    cemetery_grave_number: "",
    urn_preference: "",
    remains_notes: "Beside the oldest apple tree.",
  },

  funding: {
    funding_approach: "mixed",
    would_like_help_reviewing: "unsure",
  },

  obituary: {
    obituary_name: "Jordan A. Whitlock",
    publications: ["Springfield Courier", "Example Community Chapel website"],
    tone: "Warm, with a little humor",
    family_list:
      "Survived by brother Sam Whitlock.\nPreceded in death by parents Robert and Dana.",
    draft_text:
      "Jordan Whitlock loved gardens, long drives, and a good argument about baseball.\n\nJordan taught shop class for 31 years and never once lost a tape measure.\n\nIn lieu of flowers, please give to the county library.",
    include_service_details: false,
    photo_url: "https://photos.example.test/jordan-whitlock",
  },
};
