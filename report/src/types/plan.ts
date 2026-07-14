export type MusicTrack = {
  title?: string;
  artist?: string;
  notes?: string;
};

export type Contact = {
  name?: string;
  relationship?: string;
  phone?: string;
  email?: string;
  address?: string;
  notes?: string;
};

export type InsurancePolicy = {
  insured_name?: string;
  carrier?: string;
  policy_number?: string;
  policy_type?: string;
  face_amount?: string;
  beneficiaries?: string;
  riders?: string;
  owner_relationship?: string;
  payor_relationship?: string;
};

export type PompPlan = {
  client_id: string;
  submission_source: string;
  schema_version: number;
  created_at: string;
  last_updated_at: string;

  person: {
    full_name: string;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
  };

  services: {
    disposition?: string;
    disposition_other?: string;
    services_selected: string[];

    viewing: {
      location_type?: string;
      location_name?: string;
      location_address?: string;
      location_phone?: string;
      location_other?: string;
      jewelry_notes?: string;
      clothing_notes?: string;
      spiritual_traditions_notes?: string;
    };

    memorial: {
      location_type?: string;
      location_name?: string;
      location_address?: string;
      location_phone?: string;
      location_other?: string;
      spiritual_traditions_notes?: string;
    };

    celebration: {
      location_type?: string;
      location_name?: string;
      location_address?: string;
      location_phone?: string;
      location_other?: string;
      spiritual_traditions_notes?: string;
      production_details: {
        flowers?: string;
        slideshow?: string;
        mc?: string;
        prayer_leader?: string;
        music_live?: string;
        catering_notes?: string;
        decor_theme?: string;
      };
    };

    service_mood?: string;
    special_requests?: string;
  };

  contacts: Contact[];
  insurance: InsurancePolicy[];
  music: MusicTrack[];

  legal: {
    legal_name?: string;
    sex?: string;
    social_security_number?: string;
    dob?: string;
    place_of_birth?: string;
    county?: string;
    veteran_status?: string;
    veteran_notes?: string;
    flag_presented_to?: string;
    dd214_location?: string;
    hispanic_origin?: string;
    father_legal_name?: string;
    mother_maiden_name?: string;
  };

  cemetery: {
    cemetery_name?: string;
    cemetery_location?: string;
    cemetery_section?: string;
    cemetery_lot?: string;
    cemetery_grave_number?: string;
    interment_type?: string;
    timing_of_services_and_disposition?: string;
    remains_container?: string;
    remains_out_of_state?: string;
    remains_notes?: string;
    ashes_instructions?: string;
    urn_preference?: string;
    scattering_location?: string;
  };

  funding: {
    funding_approach?: string;
    would_like_help_reviewing?: string;
    funding_help_requested?: string;
  };

  obituary?: {
    obituary_name?: string;
    publications?: string[];
    draft_text?: string;
    tone?: string;
    family_list?: string;
    include_service_details?: boolean;
    photo_url?: string;
  };
};
