import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { valueOrNull } from "../../utils/format";
import {
  FUNDING_APPROACH_LABELS,
  YES_NO_UNSURE_LABELS,
  formatChoice,
} from "../../utils/choices";

type FundingSectionProps = {
  plan: PompPlan;
};

export function FundingSection({ plan }: FundingSectionProps) {
  const funding = plan.funding;

  return (
    <section style={{ background: colors.cream, padding: 64 }}>
      <div
        className="pomp-keep"
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
          {formatChoice(funding.funding_approach, FUNDING_APPROACH_LABELS) ||
            "Not recorded"}
        </h3>

        <p style={{ marginTop: 20 }}>
          <strong>Would like help reviewing:</strong>{" "}
          {formatChoice(
            valueOrNull(funding.would_like_help_reviewing) ??
              funding.funding_help_requested,
            YES_NO_UNSURE_LABELS,
          ) || "Not recorded"}
        </p>
      </div>
    </section>
  );
}