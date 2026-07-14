import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { formatAmount, valueOrNull } from "../../utils/format";

type InsuranceSectionProps = {
  plan: PompPlan;
};

function Label({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  );
}

function PolicyCard({
  carrier,
  amount,
  type,
  beneficiary,
  policyNumber,
  riders,
  isLast,
}: {
  carrier?: string;
  amount?: string;
  type?: string;
  beneficiary?: string;
  policyNumber?: string;
  riders?: string;
  isLast?: boolean;
}) {
  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        background: colors.white,
        marginBottom: isLast ? 0 : 20,
      }}
    >
      <div
        style={{
          background: colors.blue,
          color: colors.white,
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            {carrier || "Unknown Carrier"}
          </div>

          <div
            style={{
              opacity: 0.8,
              marginTop: 4,
            }}
          >
            {type || "Unknown Policy Type"}
          </div>
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          {formatAmount(amount) || "—"}
        </div>
      </div>

      <div
        style={{
          padding: 24,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        <div>
          <Label>Policy Number</Label>
          <div
            style={{
              fontSize: 14,
              color: colors.darkBrown,
            }}
          >
            {valueOrNull(policyNumber) || "Not recorded"}
          </div>
        </div>

        <div>
          <Label>Beneficiary</Label>
          <div
            style={{
              fontSize: 14,
              color: colors.darkBrown,
            }}
          >
            {valueOrNull(beneficiary) || "Not recorded"}
          </div>
        </div>
      </div>

      {valueOrNull(riders) && (
        <div
          style={{
            borderTop: `1px solid ${colors.border}`,
            padding: "12px 24px",
            fontSize: 13,
            color: colors.muted,
          }}
        >
          <span
            style={{
              fontWeight: 700,
              textTransform: "uppercase",
              fontSize: 10,
              letterSpacing: 2,
            }}
          >
            Riders
          </span>{" "}
          {riders}
        </div>
      )}
    </div>
  );
}

export function InsuranceSection({
  plan,
}: InsuranceSectionProps) {
  return (
    <section
      style={{
        background: colors.cream,
        padding: 64,
      }}
    >
      {plan.insurance.map((policy, index) => (
        <PolicyCard
          key={`${policy.policy_number ?? "policy"}-${index}`}
          carrier={policy.carrier}
          amount={policy.face_amount}
          type={policy.policy_type}
          beneficiary={policy.beneficiaries}
          policyNumber={policy.policy_number}
          riders={policy.riders}
          isLast={index === plan.insurance.length - 1}
        />
      ))}
    </section>
  );
}