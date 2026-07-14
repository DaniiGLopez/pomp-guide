import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { formatPhone, valueOrNull } from "../../utils/format";

type ServicesSectionProps = {
  plan: PompPlan;
};

type ProductionDetails = {
  flowers?: string;
  slideshow?: string;
  mc?: string;
  prayer_leader?: string;
  music_live?: string;
  catering_notes?: string;
  decor_theme?: string;
};

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: colors.muted,
          marginBottom: 4,
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: 13,
          color: colors.darkBrown,
          lineHeight: 1.5,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  locationName,
  address,
  phone,
  notes,
  productionDetails,
}: {
  title: string;
  locationName?: string;
  address?: string;
  phone?: string;
  notes?: string;
  productionDetails?: ProductionDetails;
}) {
  const productionItems = productionDetails
    ? [
        {
          label: "Flowers",
          value: valueOrNull(productionDetails.flowers),
        },
        {
          label: "Slideshow",
          value: valueOrNull(productionDetails.slideshow),
        },
        {
          label: "Master of Ceremonies",
          value: valueOrNull(productionDetails.mc),
        },
        {
          label: "Prayer Leader",
          value: valueOrNull(productionDetails.prayer_leader),
        },
        {
          label: "Live Music",
          value: valueOrNull(productionDetails.music_live),
        },
        {
          label: "Catering",
          value: valueOrNull(productionDetails.catering_notes),
        },
        {
          label: "Decor Theme",
          value: valueOrNull(productionDetails.decor_theme),
        },
      ].filter(
        (
          item,
        ): item is {
          label: string;
          value: string;
        } => Boolean(item.value),
      )
    : [];

  const resolvedAddress = valueOrNull(address);
  const resolvedPhone = valueOrNull(phone);
  const resolvedNotes = valueOrNull(notes);

  return (
    <div
      className="loc"
      style={{
        background: colors.white,
        border: `1px solid ${colors.border}`,
        padding: 24,
      }}
    >
      <p
        style={{
          letterSpacing: 3,
          color: colors.muted,
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          margin: 0,
          marginBottom: 8,
        }}
      >
        {title}
      </p>

      <h3
        style={{
          fontSize: 26,
          lineHeight: 1.1,
          margin: 0,
          marginBottom: 12,
          color: colors.forestGreen,
        }}
      >
        {valueOrNull(locationName) || "To be determined"}
      </h3>

      {resolvedAddress && (
        <p
          style={{
            fontSize: 13,
            color: colors.muted,
            margin: "4px 0",
            lineHeight: 1.5,
          }}
        >
          {resolvedAddress}
        </p>
      )}

      {resolvedPhone && (
        <p
          style={{
            fontSize: 13,
            color: colors.muted,
            margin: "4px 0",
          }}
        >
          {formatPhone(resolvedPhone)}
        </p>
      )}

      {resolvedNotes && (
        <p
          style={{
            margin: "16px 0 0",
            paddingTop: 16,
            borderTop: `1px solid ${colors.border}`,
            fontStyle: "italic",
            fontSize: 13,
            lineHeight: 1.5,
            color: colors.darkBrown,
          }}
        >
          {resolvedNotes}
        </p>
      )}

      {productionItems.length > 0 && (
        <div
          style={{
            marginTop: 16,
            paddingTop: 16,
            borderTop: `1px solid ${colors.border}`,
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {productionItems.map((item) => (
            <Detail
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ServicesSection({ plan }: ServicesSectionProps) {
  const {
    viewing,
    memorial,
    celebration,
    service_mood,
    special_requests,
  } = plan.services;

  const resolvedMood = valueOrNull(service_mood);
  const resolvedRequests = valueOrNull(special_requests);

  return (
    <section
      style={{
        background: colors.cream,
        padding: 64,
      }}
    >
      <div
        style={{
          display: "grid",
          gap: 20,
        }}
      >
        {plan.services.services_selected.includes("viewing") && (
          <ServiceCard
            title="Viewing"
            locationName={viewing.location_name}
            address={viewing.location_address}
            phone={viewing.location_phone}
            notes={viewing.spiritual_traditions_notes}
          />
        )}

        {plan.services.services_selected.includes("memorial") && (
          <ServiceCard
            title="Memorial"
            locationName={memorial.location_name}
            address={memorial.location_address}
            phone={memorial.location_phone}
            notes={memorial.spiritual_traditions_notes}
          />
        )}

        {plan.services.services_selected.includes("celebration") && (
          <ServiceCard
            title="Celebration of Life"
            locationName={celebration.location_name}
            address={celebration.location_address}
            phone={celebration.location_phone}
            notes={celebration.spiritual_traditions_notes}
            productionDetails={celebration.production_details}
          />
        )}

        {resolvedMood && (
          <div
            style={{
              background: colors.stone,
              padding: 24,
              borderLeft: `4px solid ${colors.oliveGreen}`,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: colors.muted,
                marginBottom: 6,
              }}
            >
              Desired Mood
            </div>

            <div
              style={{
                fontSize: 14,
                lineHeight: 1.5,
                color: colors.darkBrown,
              }}
            >
              {resolvedMood}
            </div>
          </div>
        )}

        {resolvedRequests && (
          <div
            style={{
              background: colors.stone,
              padding: 24,
              borderLeft: `4px solid ${colors.burntOrange}`,
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: colors.muted,
                marginBottom: 6,
              }}
            >
              Special Requests
            </div>

            <div
              style={{
                fontSize: 14,
                lineHeight: 1.5,
                color: colors.darkBrown,
                whiteSpace: "pre-line",
              }}
            >
              {resolvedRequests}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}