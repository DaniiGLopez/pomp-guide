import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { valueOrNull } from "../../utils/format";
import { Field } from "../layout/Field";

type LegalSectionProps = {
  plan: PompPlan;
};

export function LegalSection({ plan }: LegalSectionProps) {
  const legal = plan.legal;

  return (
    <section
      style={{
        background: colors.cream,
        padding: 64,
      }}
    >
      <div
        style={{
          background: colors.stone,
          border: `1px solid ${colors.border}`,
          padding: "14px 20px",
          marginBottom: 32,
          fontSize: 12,
          color: colors.muted,
          display: "flex",
          alignItems: "center",
          gap: 10,
          lineHeight: 1.5,
        }}
      >
        <span aria-hidden="true">🔒</span>

        <span>
          This section contains sensitive personal information. Share only with
          authorized parties.
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
        }}
      >
        <Field
          label="Legal Name"
          value={valueOrNull(legal.legal_name)}
        />

        <Field
          label="Sex"
          value={valueOrNull(legal.sex)}
        />

        <Field
          label="Date of Birth"
          value={valueOrNull(legal.dob)}
        />

        <Field
          label="Place of Birth"
          value={valueOrNull(legal.place_of_birth)}
        />

        <Field
          label="County"
          value={valueOrNull(legal.county)}
        />

        <Field
          label="Hispanic Origin"
          value={valueOrNull(legal.hispanic_origin)}
        />

        <Field
          label="Father's Legal Name"
          value={valueOrNull(legal.father_legal_name)}
        />

        <Field
          label="Mother's Maiden Name"
          value={valueOrNull(legal.mother_maiden_name)}
        />

        <Field
          label="Veteran Status"
          value={valueOrNull(legal.veteran_status)}
        />

        <Field
          label="Veteran Notes"
          value={valueOrNull(legal.veteran_notes)}
        />

        <Field
          label="Flag Presented To"
          value={valueOrNull(legal.flag_presented_to)}
        />

        <Field
          label="DD-214 Location"
          value={valueOrNull(legal.dd214_location)}
        />
      </div>
    </section>
  );
}
