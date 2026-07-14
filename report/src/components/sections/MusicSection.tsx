import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { valueOrNull } from "../../utils/format";

type MusicSectionProps = {
  plan: PompPlan;
};

export function MusicSection({ plan }: MusicSectionProps) {
  return (
    <section style={{ background: colors.cream, padding: 64 }}>
      {plan.music.map((track, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            gap: 24,
            padding: "18px 0",
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <div style={{ color: colors.lightBrown, fontSize: 24 }}>
            {String(index + 1).padStart(2, "0")}
          </div>

          <div>
            <h3 style={{ margin: 0, color: colors.darkBrown }}>
              {valueOrNull(track.title) || "Untitled"}
            </h3>

            {valueOrNull(track.artist) && <p>{track.artist}</p>}
            {valueOrNull(track.notes) && (
              <p style={{ fontStyle: "italic" }}>{track.notes}</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}