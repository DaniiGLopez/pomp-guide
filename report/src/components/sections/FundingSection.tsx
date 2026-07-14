import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { valueOrNull } from "../../utils/format";

type FundingSectionProps = {
  plan: PompPlan;
};

export function FundingSection({ plan }: FundingSectionProps) {
  const funding = plan.funding;

  return (
    <section style={{ background: colors.cream, padding: 64 }}>
      <div
        style={{
          background: colors.white,
          border: `1px solid ${colors.border}`,
          padding: 24,
        }}
      >
        <p style={{ letterSpacing: 2, color: colors.muted, fontSize: 11 }}>
          FUNDING APPROACH
        </p>

        <h3 style={{ color: colors.forestGreen, fontSize: 26 }}>
          {valueOrNull(funding.funding_approach) || "Not recorded"}
        </h3>

        <p style={{ marginTop: 20 }}>
          <strong>Would like help reviewing:</strong>{" "}
          {valueOrNull(funding.would_like_help_reviewing) || "Not recorded"}
        </p>
      </div>
    </section>
  );
}