import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { formatPhone, valueOrNull } from "../../utils/format";

type ContactsSectionProps = {
  plan: PompPlan;
};

export function ContactsSection({ plan }: ContactsSectionProps) {
  return (
    <section style={{ background: colors.cream, padding: 64 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
        }}
      >
        {plan.contacts.map((contact) => (
          <div
            key={contact.name}
            style={{
              background: colors.white,
              border: `1px solid ${colors.border}`,
              padding: 24,
            }}
          >
            <h3 style={{ color: colors.forestGreen, fontSize: 24 }}>
              {contact.name}
            </h3>

            <p style={{ letterSpacing: 2, color: colors.muted, fontSize: 11 }}>
              {contact.relationship}
            </p>

            {valueOrNull(contact.phone) && <p>{formatPhone(contact.phone)}</p>}
            {valueOrNull(contact.email) && <p>{contact.email}</p>}
            {valueOrNull(contact.address) && <p>{contact.address}</p>}

            {valueOrNull(contact.notes) && (
              <p style={{ marginTop: 16, fontStyle: "italic" }}>
                {contact.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
