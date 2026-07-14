import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { formatPhone, valueOrNull } from "../../utils/format";

type ExecutiveSummaryProps = {
  plan: PompPlan;
};

function SummaryField({ label, value }: { label: string; value: string | null }) {
  return (
    <div style={{ background: colors.white, padding: 20 }}>
      <div style={{ fontSize: 11, letterSpacing: 2, color: colors.muted }}>
        {label}
      </div>
      <div style={{ fontSize: 20, marginTop: 8, color: colors.darkBrown }}>
        {value || "Not recorded"}
      </div>
    </div>
  );
}

export function ExecutiveSummary({ plan }: ExecutiveSummaryProps) {
  const primaryContacts = plan.contacts.filter((contact) =>
 (contact.notes ?? "").toLowerCase().includes("primary")
  );

  return (
    <section style={{ background: colors.stone, padding: 64 }}>
      <p style={{ letterSpacing: 4, color: colors.muted, fontSize: 12 }}>
        AT A GLANCE
      </p>

      <h2 style={{ fontSize: 40, color: colors.darkBrown, marginBottom: 32 }}>
        Everything a Funeral Director Needs to Know
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          background: colors.border,
        }}
      >
        <SummaryField label="LEGAL NAME" value={valueOrNull(plan.legal.legal_name)} />
        <SummaryField label="DATE OF BIRTH" value={valueOrNull(plan.legal.dob)} />
        <SummaryField label="DISPOSITION" value={valueOrNull(plan.services.disposition)} />
        <SummaryField label="CEMETERY" value={valueOrNull(plan.cemetery.cemetery_name)} />
        <SummaryField label="SERVICES" value={plan.services.services_selected.join(", ")} />
        <SummaryField label="POLICIES" value={`${plan.insurance.length} on file`} />
      </div>

      {primaryContacts.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <p style={{ letterSpacing: 3, color: colors.muted, fontSize: 12 }}>
            PRIMARY CONTACTS
          </p>

          {primaryContacts.map((contact) => (
            <p key={contact.name} style={{ marginTop: 8 }}>
              <strong>{contact.name}</strong> · {contact.relationship} ·{" "}
              {formatPhone(contact.phone)}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
