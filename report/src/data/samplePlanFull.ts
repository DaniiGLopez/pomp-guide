import type { PompPlan } from "../types/plan";

export const samplePlanFull: PompPlan = {
  client_id: "pomp_1775065764719_2uzq",
  submission_source: "planning",
  schema_version: 4,
  created_at: "2026-04-01T17:49:24.719Z",
  last_updated_at: "2026-04-10T14:26:57.929Z",

  person: {
    full_name: "Mary O Papin",
    first_name: "Mary",
    middle_name: "O",
    last_name: "Papin",
    phone: "(248) 996-5121",
    email: "MayBurd@Bex.net",
    address: "4029 W Bancroft St Apt A",
    city: "Toledo",
    state: "OH",
    zip: "43606",
  },

  services: {
    disposition: "burial",
    disposition_other: "",
    services_selected: ["viewing", "memorial", "celebration"],

    viewing: {
      location_type: "funeral_home",
      location_name: "O. H. Pye, III Funeral Home",
      location_address: "17600 Plymouth Rd, Detroit, MI 48227",
      location_phone: "(313) 838-9770",
      location_other: "",
      jewelry_notes: "",
      clothing_notes: "",
      spiritual_traditions_notes: "Closed Casket",
    },

    memorial: {
      location_type: "church",
      location_name: "Church of God",
      location_address: "UNKNOWN, Midland, MI",
      location_phone: "",
      location_other: "",
      spiritual_traditions_notes: "",
    },

    celebration: {
      location_type: "church",
      location_name: "Church of God",
      location_address: "Parkside in Midland, address unknown",
      location_phone: "",
      location_other: "",
      spiritual_traditions_notes: "",

      production_details: {
        flowers: "",
        slideshow: "",
        mc: "",
        prayer_leader: "",
        music_live: "",
        catering_notes: "",
        decor_theme: "",
      },
    },

    service_mood: "",
    special_requests: "",
  },

  contacts: [
    {
      name: "Lonnie Ollison",
      relationship: "Son",
      phone: "(419) 902-3375",
      email: "",
      address: "Dorr St, Toledo, OH",
      notes: "Primary Beneficiary",
    },
    {
      name: "Charles Lee",
      relationship: "Cousin",
      phone: "",
      email: "",
      address: "",
      notes: "Contingent Beneficiary",
    },
  ],

  insurance: [
    {
      insured_name: "Mary Papin",
      carrier: "LHLIC",
      policy_number: "3258925",
      policy_type: "Final Expense",
      face_amount: "2,000",
      beneficiaries: "Lonnie Ollison",
      riders: "0u",
      owner_relationship: "Self",
      payor_relationship: "Self",
    },
    {
      insured_name: "Mary Papin",
      carrier: "LHLIC",
      policy_number: "",
      policy_type: "Final Expense",
      face_amount: "7,000",
      beneficiaries: "Lonnie Ollison",
      riders: "4u ($20k AD&D)",
      owner_relationship: "Self",
      payor_relationship: "Self",
    },
    {
      insured_name: "Mary Papin",
      carrier: "MOO",
      policy_number: "UR2555878",
      policy_type: "Whole Life",
      face_amount: "5,000",
      beneficiaries: "",
      riders: "",
      owner_relationship: "Self",
      payor_relationship: "Self",
    },
  ],

  music: [],

  legal: {
    legal_name: "Mary O Papin",
    sex: "Female",
    social_security_number: "381-36-8420",
    dob: "08/22/1938",
    place_of_birth: "MI",
    county: "",
    veteran_status: "",
    veteran_notes: "",
    flag_presented_to: "",
    dd214_location: "",
    hispanic_origin: "No",
    father_legal_name: "",
    mother_maiden_name: "",
  },

  cemetery: {
    cemetery_name: "Woodlawn Cemetery",
    cemetery_location: "19975 Woodward Ave, Detroit, MI 48203",
    cemetery_section: "Sec 29",
    cemetery_lot: "",
    cemetery_grave_number: "Gr 5",
    interment_type: "",
    timing_of_services_and_disposition: "",
    remains_container:
      "102 - Praying Hands Casket 18ga Mid Bronze Shaded Finish - White Velvet",
    remains_out_of_state: "Yes",
    remains_notes:
      "Basic Concrete Rough Box (vault), opening/closing — PAID IN FULL\nWants Bronze Marker",
    ashes_instructions: "",
    urn_preference: "",
    scattering_location: "",
  },

  funding: {
    funding_approach: "self",
    would_like_help_reviewing: "no",
  },

  obituary: {
    obituary_name: "",
    publications: [],
    draft_text: "",
    tone: "",
    family_list: "",
    include_service_details: false,
    photo_url: "",
  },
};
