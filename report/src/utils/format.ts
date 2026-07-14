export const valueOrNull = (value: unknown) => {
  if (value === null || value === undefined) return null;

  const text = String(value).trim();

  if (
    text === "" ||
    text.toLowerCase() === "unknown" ||
    text.toLowerCase() === "n/a"
  ) {
    return null;
  }

  return text;
};

export const formatPhone = (phone?: string) => {
  if (!phone) return null;

  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`;
  }

  return phone;
};

export const formatDate = (date?: string) => {
  if (!date) return null;

  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return date;
  }
};

export const formatAmount = (raw?: string | null) => {
  if (!raw?.trim()) return null;

  const cleaned = raw.replace(/[$,\s]/g, "");
  const amount = Number.parseFloat(cleaned);

  if (Number.isNaN(amount)) {
    return raw.trim();
  }

  return `$${amount.toLocaleString("en-US", {
    maximumFractionDigits: 2,
  })}`;
};
