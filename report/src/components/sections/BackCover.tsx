import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";

type BackCoverProps = {
  plan: PompPlan;
};

export function BackCover({ plan }: BackCoverProps) {
  return (
    <section
      style={{
        background: colors.darkBrown,
        color: colors.white,
        padding: 80,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: colors.lightBrown,
          }}
        >
          P
        </div>
      </div>

      <div>
        <div
          style={{
            letterSpacing: 4,
            textTransform: "uppercase",
            color: colors.lightBrown,
            marginBottom: 12,
          }}
        >
          Peace of Mind Planning
        </div>

        <div style={{ opacity: 0.6 }}>
          yourpomp.com
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 12,
            opacity: 0.4,
          }}
        >
          {plan.client_id}
          <br />
          Schema v{plan.schema_version}
        </div>
      </div>
    </section>
  );
}