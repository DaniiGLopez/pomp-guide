import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { valueOrNull } from "../../utils/format";

type CemeterySectionProps = {
  plan: PompPlan;
};

function CemeteryField({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p style={{ letterSpacing: 2, color: colors.muted, fontSize: 11 }}>
        {label}
      </p>
      <p style={{ fontSize: 18, color: colors.darkBrown }}>
        {valueOrNull(value) || "Not recorded"}
      </p>
    </div>
  );
}

export function CemeterySection({ plan }: CemeterySectionProps) {
  const cemetery = plan.cemetery;

  return (
    <section style={{ background: colors.cream, padding: 64 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <CemeteryField label="CEMETERY" value={cemetery.cemetery_name} />
        <CemeteryField label="LOCATION" value={cemetery.cemetery_location} />
        <CemeteryField label="INTERMENT TYPE" value={cemetery.interment_type} />
        <CemeteryField label="REMAINS CONTAINER" value={cemetery.remains_container} />
        <CemeteryField label="SECTION" value={cemetery.cemetery_section} />
        <CemeteryField label="LOT" value={cemetery.cemetery_lot} />
        <CemeteryField label="GRAVE" value={cemetery.cemetery_grave_number} />
        <CemeteryField label="URN PREFERENCE" value={cemetery.urn_preference} />
      </div>

      {valueOrNull(cemetery.remains_notes) && (
        <div
          style={{
            marginTop: 32,
            background: colors.stone,
            padding: 24,
            borderLeft: `4px solid ${colors.mediumBrown}`,
          }}
        >
          <strong>Client notes:</strong> {cemetery.remains_notes}
        </div>
      )}
    </section>
  );
}