import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { valueOrNull } from "../../utils/format";

type CemeterySectionProps = {
  plan: PompPlan;
};

function CemeteryField({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div>
      <p
        style={{
          letterSpacing: 2,
          color: colors.muted,
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          margin: 0,
          marginBottom: 4,
        }}
      >
        {label}
      </p>

      <p
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: colors.darkBrown,
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {valueOrNull(value) || "Not recorded"}
      </p>
    </div>
  );
}

export function CemeterySection({ plan }: CemeterySectionProps) {
  const cemetery = plan.cemetery;
  const remainsNotes = valueOrNull(cemetery.remains_notes);

  return (
    <section
      style={{
        background: colors.cream,
        padding: 64,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
        }}
      >
        <CemeteryField
          label="Cemetery"
          value={cemetery.cemetery_name}
        />

        <CemeteryField
          label="Location"
          value={cemetery.cemetery_location}
        />

        <CemeteryField
          label="Interment Type"
          value={cemetery.interment_type}
        />

        <CemeteryField
          label="Remains Container"
          value={cemetery.remains_container}
        />

        <CemeteryField
          label="Section"
          value={cemetery.cemetery_section}
        />

        <CemeteryField
          label="Lot"
          value={cemetery.cemetery_lot}
        />

        <CemeteryField
          label="Grave"
          value={cemetery.cemetery_grave_number}
        />

        <CemeteryField
          label="Urn Preference"
          value={cemetery.urn_preference}
        />
      </div>

      {remainsNotes && (
        <div
          style={{
            marginTop: 32,
            background: colors.stone,
            padding: 24,
            borderLeft: `4px solid ${colors.mediumBrown}`,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: colors.muted,
              marginBottom: 8,
            }}
          >
            Client Notes
          </div>

          <div
            style={{
              fontSize: 13,
              fontStyle: "italic",
              color: colors.darkBrown,
              lineHeight: 1.7,
              whiteSpace: "pre-line",
            }}
          >
            {remainsNotes}
          </div>
        </div>
      )}
    </section>
  );
}