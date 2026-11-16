import type { ReactNode } from "react";
import { colors } from "../../theme/colors";
import { textStyles } from "../../theme/textStyles";
import { Field } from "../layout/Field";
import type { ObituaryView } from "../../utils/obituary";

type ObituarySectionProps = {
  obituary: ObituaryView;
};

function TextBlock({
  label,
  caption,
  accent,
  keepTogether = false,
  children,
}: {
  label: string;
  caption: string;
  accent: string;
  keepTogether?: boolean;
  children: string;
}) {
  return (
    <div
      className={keepTogether ? "pomp-keep" : undefined}
      style={{
        background: colors.stone,
        padding: 24,
        textAlign: "left",
        borderLeft: `4px solid ${accent}`,
      }}
    >
      <div
        style={{
          ...textStyles.eyebrow,
          marginBottom: 4,
        }}
      >
        {label}
      </div>

      <div
        style={{
          ...textStyles.mutedBody,
          fontSize: 12,
          fontStyle: "italic",
          marginBottom: 12,
        }}
      >
        {caption}
      </div>

      {/* pre-wrap keeps the author's paragraphs and line breaks */}
      <div
        style={{
          fontSize: 14,
          lineHeight: 1.7,
          color: colors.darkBrown,
          whiteSpace: "pre-wrap",
          overflowWrap: "anywhere",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function LinkField({
  label,
  href,
}: {
  label: string;
  href: ReactNode;
}) {
  return (
    <div>
      <p style={{ ...textStyles.eyebrow, margin: 0, marginBottom: 4 }}>
        {label}
      </p>

      <p
        style={{
          ...textStyles.fieldValue,
          margin: 0,
          overflowWrap: "anywhere",
        }}
      >
        {href}
      </p>
    </div>
  );
}

export function ObituarySection({ obituary }: ObituarySectionProps) {
  const {
    name,
    publications,
    tone,
    familyList,
    draftText,
    includeServiceDetails,
    photoUrl,
  } = obituary;

  const hasDetails =
    name !== null ||
    publications !== null ||
    tone !== null ||
    includeServiceDetails !== null ||
    photoUrl !== null;

  return (
    <section
      className="pomp-obituary"
      style={{
        background: colors.cream,
        padding: 64,
      }}
    >
      {hasDetails && (
        <div
          className="pomp-keep"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
        >
          {name && <Field label="Name to Use in the Obituary" value={name} />}

          {tone && <Field label="Preferred Tone" value={tone} />}

          {publications && (
            <Field label="Publications or Websites" value={publications} />
          )}

          {includeServiceDetails !== null && (
            <Field
              label="Include Service Details in the Obituary?"
              value={includeServiceDetails ? "Yes" : "No"}
            />
          )}

          {photoUrl && (
            <LinkField
              label="Obituary Photo Link"
              href={
                <a
                  href={photoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: colors.blue }}
                >
                  {photoUrl}
                </a>
              }
            />
          )}
        </div>
      )}

      {(familyList || draftText) && (
        <div
          style={{
            display: "grid",
            gap: 20,
            marginTop: hasDetails ? 32 : 0,
          }}
        >
          {familyList && (
            <TextBlock
              label="Family Members and Relationships"
              caption="Family notes written by the client."
              accent={colors.mediumBrown}
              keepTogether
            >
              {familyList}
            </TextBlock>
          )}

          {draftText && (
            <TextBlock
              label="Obituary Draft or Notes"
              caption="A draft or notes written by the client, not a finished obituary."
              accent={colors.blue}
            >
              {draftText}
            </TextBlock>
          )}
        </div>
      )}
    </section>
  );
}
