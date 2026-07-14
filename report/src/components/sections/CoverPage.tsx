import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";
import { formatDate } from "../../utils/format";

type CoverPageProps = {
  plan: PompPlan;
};

export function CoverPage({ plan }: CoverPageProps) {
  const updated = formatDate(plan.last_updated_at);

  return (
    <section
      className="pomp-cover"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: colors.forestGreen,
        color: colors.white,
        padding: "72px 64px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {/* Accent Bar */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          background: `linear-gradient(
            90deg,
            ${colors.lightBrown},
            ${colors.burntOrange} 45%,
            ${colors.mediumBrown} 75%,
            ${colors.lightBrown}
          )`,
        }}
      />

      {/* Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 40,
          bottom: 40,
          fontFamily: typography.fontSans,
          fontWeight: typography.weightBold,
          fontSize: 180,
          lineHeight: 1,
          color: "rgba(255,255,255,0.035)",
          letterSpacing: 8,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        POMP
      </div>

      {/* Main Content */}
      <div>
        <p
          style={{
            color: colors.lightBrown,
            letterSpacing: "4px",
            fontSize: 12,
            fontFamily: typography.fontSans,
            fontWeight: typography.weightBold,
            textTransform: "uppercase",
          }}
        >
          PEACE OF MIND PLANNING · PERSONAL RECORD
        </p>

        <h1
          style={{
            fontFamily: typography.fontSans,
            fontWeight: typography.weightLight,
            fontSize: 72,
            lineHeight: 0.95,
            letterSpacing: "-1px",
            marginTop: 80,
            marginBottom: 0,
          }}
        >
          {plan.person.first_name}
          <br />
          <em
            style={{
              color: "rgba(255,255,255,.65)",
              fontStyle: "normal",
            }}
          >
            {plan.person.last_name}
          </em>
        </h1>
      </div>

      {/* Bottom Metadata */}
      <div>
        <div
          style={{
            width: 48,
            height: 1,
            background: colors.lightBrown,
            marginBottom: 28,
          }}
        />

        <div
          style={{
            display: "flex",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                color: colors.lightBrown,
                fontFamily: typography.fontSans,
                fontWeight: typography.weightBold,
                fontSize: 8,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Prepared By
            </div>

            <div
              style={{
                fontFamily: typography.fontSans,
                fontSize: 14,
                color: colors.white,
              }}
            >
              Peace of Mind Planning
            </div>
          </div>

          <div>
            <div
              style={{
                color: colors.lightBrown,
                fontFamily: typography.fontSans,
                fontWeight: typography.weightBold,
                fontSize: 8,
                letterSpacing: 3,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Last Updated
            </div>

            <div
              style={{
                fontFamily: typography.fontSans,
                fontSize: 14,
                color: colors.white,
              }}
            >
              {updated}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 32,
            color: "rgba(255,255,255,.25)",
            letterSpacing: 3,
            fontSize: 9,
            fontFamily: typography.fontSans,
            textTransform: "uppercase",
          }}
        >
          Confidential
        </div>
      </div>
    </section>
  );
}