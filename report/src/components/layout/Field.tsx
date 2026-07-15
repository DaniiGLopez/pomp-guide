import { textStyles } from "../../theme/textStyles";

type FieldProps = {
  label: string;
  value?: string | null;
};

export function Field({
  label,
  value,
}: FieldProps) {
  return (
    <div>
      <p
        style={{
          ...textStyles.eyebrow,
          margin: 0,
          marginBottom: 4,
        }}
      >
        {label}
      </p>

      <p
        style={{
          ...textStyles.fieldValue,
          margin: 0,
        }}
      >
        {value || "Not recorded"}
      </p>
    </div>
  );
}