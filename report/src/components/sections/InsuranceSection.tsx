import type { PompPlan } from "../../types/plan";
import { colors } from "../../theme/colors";
import { valueOrNull } from "../../utils/format";

type InsuranceSectionProps = {
  plan: PompPlan;
};

function PolicyCard({
  carrier,
  amount,
  type,
  beneficiary,
  policyNumber,
}: {
  carrier?: string;
  amount?: string;
  type?: string;
  beneficiary?: string;
  policyNumber?: string;
}) {
  return (
    <div
      style={{
        border: `1px solid ${colors.border}`,
        background: colors.white,
        marginBottom: 20,
      }}
    >
      <div
        style={{
          background: colors.blue,
          color: colors.white,
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>
            {carrier || "Unknown Carrier"}
          </div>

          <div style={{ opacity: 0.8 }}>
            {type || "Unknown Policy Type"}
          </div>
        </div>

        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          {amount || "—"}
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
          <strong>Policy Number</strong>
          <div>{valueOrNull(policyNumber) || "Not recorded"}</div>
        </div>

        <div>
          <strong>Beneficiary</strong>
          <div>{valueOrNull(beneficiary) || "Not recorded"}</div>
        </div>
      </div>
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
          key={index}
          carrier={policy.carrier}
          amount={policy.face_amount}
          type={policy.policy_type}
          beneficiary={policy.beneficiaries}
          policyNumber={policy.policy_number}
        />
      ))}
    </section>
  );
}