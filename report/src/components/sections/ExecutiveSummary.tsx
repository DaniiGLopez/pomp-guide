import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { formatPhone, valueOrNull } from "../../utils/format";

type ExecutiveSummaryProps = {
  plan: PompPlan;
};

function SummaryField({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <div
      style={{
        background: colors.white,
        padding: 20,
      }}
    >
      <div
        style={{
          fontSize: 10,
          letterSpacing: 2,
          color: colors.muted,
          textTransform: "uppercase",
          fontWeight: 700,
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: 16,
          marginTop: 6,
          color: colors.darkBrown,
          fontWeight: 600,
        }}
      >
        {value || "Not recorded"}
      </div>
    </div>
  );
}

export function ExecutiveSummary({ plan }: ExecutiveSummaryProps) {
  const primaryContacts = plan.contacts.filter((contact) =>
    (contact.notes ?? "").toLowerCase().includes("primary"),
  );

  return (
    <section
      className="pomp-exec"
      style={{
        background: colors.stone,
        padding: 64,
      }}
    >
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
        AT A GLANCE
      </p>

      <h2
        style={{
          fontSize: 40,
          color: colors.darkBrown,
          marginTop: 8,
          marginBottom: 32,
        }}
      >
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
        <SummaryField
          label="LEGAL NAME"
          value={valueOrNull(plan.legal.legal_name)}
        />

        <SummaryField
          label="DATE OF BIRTH"
          value={valueOrNull(plan.legal.dob)}
        />

        <SummaryField
          label="DISPOSITION"
          value={valueOrNull(plan.services.disposition)}
        />

        <SummaryField
          label="CEMETERY"
          value={valueOrNull(plan.cemetery.cemetery_name)}
        />

        <SummaryField
          label="SERVICES"
          value={
            plan.services.services_selected.length > 0
              ? plan.services.services_selected.join(", ")
              : null
          }
        />

        <SummaryField
          label="POLICIES"
          value={
            plan.insurance.length > 0
              ? `${plan.insurance.length} on file`
              : null
          }
        />
      </div>

      {primaryContacts.length > 0 && (
        <div style={{ marginTop: 32 }}>
          <p
            style={{
              letterSpacing: 3,
              color: colors.muted,
              fontSize: 12,
              fontWeight: 700,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            PRIMARY CONTACTS
          </p>

          {primaryContacts.map((contact, index) => {
            const relationship = valueOrNull(contact.relationship);
            const phone = valueOrNull(contact.phone);

            return (
              <div
                key={`${contact.name ?? "contact"}-${contact.phone ?? index}`}
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  color: colors.darkBrown,
                }}
              >
                <strong>{contact.name || "Unnamed contact"}</strong>

                {(relationship || phone) && (
                  <span style={{ color: colors.muted }}>
                    {relationship ? ` · ${relationship}` : ""}
                    {phone ? ` · ${formatPhone(phone)}` : ""}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}