import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { formatDate } from "../../utils/format";

type CoverPageProps = {
  plan: PompPlan;
};

export function CoverPage({ plan }: CoverPageProps) {
  const updated = formatDate(plan.last_updated_at);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: colors.forestGreen,
        color: colors.white,
        padding: "72px 64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p style={{ color: colors.lightBrown, letterSpacing: "4px", fontSize: 12 }}>
          PEACE OF MIND PLANNING · PERSONAL RECORD
        </p>

        <h1 style={{ fontSize: 72, lineHeight: 1, marginTop: 80 }}>
          {plan.person.first_name}
          <br />
          <em style={{ color: "rgba(255,255,255,.6)" }}>{plan.person.last_name}</em>
        </h1>
      </div>

      <div>
        <p>Prepared by Peace of Mind Planning</p>
        <p>Last updated: {updated}</p>
        <p style={{ color: "rgba(255,255,255,.25)", letterSpacing: "3px" }}>
          CONFIDENTIAL
        </p>
      </div>
    </section>
  );
}
