export const samplePlanFull = {
  client_id: "pomp_demo_full",
  submission_source: "planning",
  schema_version: 4,
  created_at: "2026-07-06T12:48:57.911Z",
  last_updated_at: "2026-07-06T13:02:01.798Z",

  person: {
    full_name: "Paulette Charlene Holder",
    first_name: "Paulette",
    middle_name: "Charlene",
    last_name: "Holder",
    phone: "4198107811",
    email: "polly@example.com",
    address: "123 Wallaby Way",
    city: "Sydney",
    state: "TN",
    zip: "37064",
  },

  services: {
    disposition: "burial",
    disposition_other: "",
    services_selected: ["viewing", "memorial", "celebration"],

    viewing: {
      location_type: "funeral_home",
      location_name: "Mike Jones Funeral Parlor",
      location_address: "123 Main St",
      location_phone: "2813308004",
      location_other: "",
      jewelry_notes: "Earrings — stays on",
      clothing_notes: "Something new, all-white",
      spiritual_traditions_notes: "Private family viewing first",
    },

    memorial: {
      location_type: "funeral_home",
      location_name: "Mike Jones Funeral Home",
      location_address: "123 Main St",
      location_phone: "2813308004",
      location_other: "",
      spiritual_traditions_notes: "Prayer service",
    },

    celebration: {
      location_type: "funeral_home",
      location_name: "Mike Jones Funeral Home",
      location_address: "123 Main St",
      location_phone: "2813308004",
      location_other: "",
      spiritual_traditions_notes: "Music played throughout",
      production_details: {
        flowers: "Red roses",
        slideshow: "Yes, prepared already",
        mc: "Pastor Mike",
        prayer_leader: "Pastor Charles",
        music_live: "Banjo player",
        catering_notes: "Potluck with open bar",
        decor_theme: "Lemons",
      },
    },

    service_mood: "Relaxed and cost effective",
    special_requests: "Ashes spread same week",
  },

  contacts: [
    {
      name: "Jack Dempsey",
      relationship: "Father",
      phone: "4191810199",
      email: "jack@example.com",
      address: "Nashville, TN",
      notes: "Primary beneficiary",
    },
    {
      name: "Max Payne",
      relationship: "Brother",
      phone: "3236758945",
      email: "max@example.com",
      address: "Los Angeles, CA",
      notes: "Contingent beneficiary",
    },
  ],

  insurance: [
    {
      insured_name: "Paulette Holder",
      carrier: "LHLIC",
      policy_number: "DEMO-3789847",
      policy_type: "Universal Life",
      face_amount: "$1.2M",
      beneficiaries: "Jack Dempsey",
      riders: "$500K AD&D",
      owner_relationship: "Self",
      payor_relationship: "Self",
    },
  ],

  music: [
    {
      title: "Livin on a Prayer",
      artist: "Bon Jovi",
      notes: "Played in beginning",
    },
  ],

  legal: {
    legal_name: "Paulette Charlene Holder",
    sex: "Female",
    social_security_number: "***-**-6789",
    dob: "08/03/1964",
    place_of_birth: "Los Angeles",
    county: "Los Angeles",
    veteran_status: "Yes",
    veteran_notes: "USMC",
    flag_presented_to: "Son",
    dd214_location: "In gun safe",
    hispanic_origin: "",
    father_legal_name: "Donald G. Lemon",
    mother_maiden_name: "Patricia H. Cakes",
  },

  cemetery: {
    cemetery_name: "Mt. Charles Cemetery",
    cemetery_location: "Mt. Charles, TN",
    cemetery_section: "104",
    cemetery_lot: "3",
    cemetery_grave_number: "2",
    interment_type: "Ground",
    timing_of_services_and_disposition: "After",
    remains_container: "Urn",
    remains_out_of_state: "Yes",
    remains_notes: "Companion burial with husband",
    ashes_instructions: "Inter",
    urn_preference: "No preference",
    scattering_location: "",
  },

  funding: {
    funding_approach: "",
    would_like_help_reviewing: "",
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
} as const;
