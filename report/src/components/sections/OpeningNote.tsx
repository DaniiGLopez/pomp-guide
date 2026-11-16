import { colors } from "../../theme/colors";

// Draft wording supplied by Daniel; adjust here if the copy changes.
const OPENING_NOTE =
  "This plan records your wishes so the people you love have a clear place to turn when the time comes. It brings your service preferences, important details, and the people to contact together in one place. You can update it as your wishes change.";

export function OpeningNote() {
  return (
    <section
      className="pomp-note"
      style={{
        background: colors.cream,
        padding: "56px 64px 48px",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          width: 40,
          height: 1,
          background: colors.lightBrown,
          margin: "0 auto 20px",
        }}
      />

      <p
        style={{
          letterSpacing: 4,
          color: colors.muted,
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        ABOUT THIS PLAN
      </p>

      <p
        style={{
          maxWidth: 560,
          margin: "16px auto 0",
          fontSize: 16,
          lineHeight: 1.7,
          color: colors.darkBrown,
        }}
      >
        {OPENING_NOTE}
      </p>
    </section>
  );
}
