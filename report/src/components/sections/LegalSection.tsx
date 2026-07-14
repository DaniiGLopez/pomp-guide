import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { valueOrNull } from "../../utils/format";

type LegalSectionProps = {
  plan: PompPlan;
};

function LegalField({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p style={{ letterSpacing: 2, color: colors.muted, fontSize: 11 }}>
        {label}
      </p>
      <p style={{ fontSize: 16, color: colors.darkBrown }}>
        {valueOrNull(value) || "Not recorded"}
      </p>
    </div>
  );
}

export function LegalSection({ plan }: LegalSectionProps) {
  const legal = plan.legal;

  return (
    <section style={{ background: colors.cream, padding: 64 }}>
      <div
        style={{
          background: colors.stone,
          border: `1px solid ${colors.border}`,
          padding: 20,
          marginBottom: 32,
        }}
      >
        🔒 This section contains sensitive personal information. Share only with authorized parties.
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <LegalField label="LEGAL NAME" value={legal.legal_name} />
        <LegalField label="SEX" value={legal.sex} />
        <LegalField label="DATE OF BIRTH" value={legal.dob} />
        <LegalField label="PLACE OF BIRTH" value={legal.place_of_birth} />
        <LegalField label="COUNTY" value={legal.county} />
        <LegalField label="HISPANIC ORIGIN" value={legal.hispanic_origin} />
        <LegalField label="FATHER'S LEGAL NAME" value={legal.father_legal_name} />
        <LegalField label="MOTHER'S MAIDEN NAME" value={legal.mother_maiden_name} />
        <LegalField label="VETERAN STATUS" value={legal.veteran_status} />
        <LegalField label="VETERAN NOTES" value={legal.veteran_notes} />
        <LegalField label="FLAG PRESENTED TO" value={legal.flag_presented_to} />
        <LegalField label="DD-214 LOCATION" value={legal.dd214_location} />
      </div>
    </section>
  );
}