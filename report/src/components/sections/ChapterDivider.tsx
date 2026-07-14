import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

type ChapterDividerProps = {
  number: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function ChapterDivider({
  number,
  eyebrow,
  title,
  subtitle,
}: ChapterDividerProps) {
  return (
    <section
      className="pomp-chapter"
      style={{
        background: colors.darkBrown,
        color: colors.white,
        minHeight: 320,
        padding: "80px 64px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        fontFamily: typography.fontSans,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 56,
          top: 36,
          fontFamily: typography.fontSerif,
          fontWeight: typography.weightLight,
          fontSize: 120,
          lineHeight: 1,
          color: "rgba(255,255,255,0.08)",
          pointerEvents: "none",
        }}
      >
        {number}
      </div>

      <div
        aria-hidden="true"
        style={{
          width: 40,
          height: 1,
          background: colors.lightBrown,
          marginBottom: 20,
        }}
      />

      <div
        style={{
          color: colors.lightBrown,
          fontFamily: typography.fontSans,
          fontWeight: typography.weightBold,
          fontSize: 9,
          letterSpacing: 4,
          lineHeight: 1.4,
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        {eyebrow}
      </div>

      <h2
        style={{
          margin: 0,
          fontFamily: typography.fontSerif,
          fontWeight: typography.weightLight,
          fontSize: 58,
          lineHeight: 1,
          color: colors.white,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            maxWidth: 500,
            margin: "20px 0 0",
            fontFamily: typography.fontSans,
            fontWeight: typography.weightLight,
            fontSize: 13,
            lineHeight: 1.7,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.42)",
          }}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
}
