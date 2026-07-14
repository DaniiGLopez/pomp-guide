import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { formatPhone, valueOrNull } from "../../utils/format";

type ServicesSectionProps = {
  plan: PompPlan;
};

function ServiceCard({
  title,
  locationName,
  address,
  phone,
  notes,
}: {
  title: string;
  locationName?: string;
  address?: string;
  phone?: string;
  notes?: string;
}) {
  return (
    <div style={{ background: colors.white, border: `1px solid ${colors.border}`, padding: 24 }}>
      <p style={{ letterSpacing: 3, color: colors.muted, fontSize: 11 }}>{title}</p>
      <h3 style={{ fontSize: 26, margin: "8px 0", color: colors.forestGreen }}>
        {valueOrNull(locationName) || "To be determined"}
      </h3>
      {valueOrNull(address) && <p>{address}</p>}
      {valueOrNull(phone) && <p>{formatPhone(phone)}</p>}
      {valueOrNull(notes) && (
        <p style={{ marginTop: 16, fontStyle: "italic", color: colors.darkBrown }}>{notes}</p>
      )}
    </div>
  );
}

export function ServicesSection({ plan }: ServicesSectionProps) {
  const { viewing, memorial, celebration, service_mood, special_requests } = plan.services;

  return (
    <section style={{ background: colors.cream, padding: 64 }}>
      <div style={{ display: "grid", gap: 20 }}>
        {plan.services.services_selected.includes("viewing") && (
          <ServiceCard
            title="VIEWING"
            locationName={viewing.location_name}
            address={viewing.location_address}
            phone={viewing.location_phone}
            notes={viewing.spiritual_traditions_notes}
          />
        )}

        {plan.services.services_selected.includes("memorial") && (
          <ServiceCard
            title="MEMORIAL"
            locationName={memorial.location_name}
            address={memorial.location_address}
            phone={memorial.location_phone}
            notes={memorial.spiritual_traditions_notes}
          />
        )}

        {plan.services.services_selected.includes("celebration") && (
          <ServiceCard
            title="CELEBRATION OF LIFE"
            locationName={celebration.location_name}
            address={celebration.location_address}
            phone={celebration.location_phone}
            notes={celebration.spiritual_traditions_notes}
          />
        )}

        {valueOrNull(service_mood) && (
          <div style={{ background: colors.stone, padding: 24, borderLeft: `4px solid ${colors.oliveGreen}` }}>
            <strong>Desired mood:</strong> {service_mood}
          </div>
        )}

        {valueOrNull(special_requests) && (
          <div style={{ background: colors.stone, padding: 24, borderLeft: `4px solid ${colors.burntOrange}` }}>
            <strong>Special requests:</strong> {special_requests}
          </div>
        )}
      </div>
    </section>
  );
}
