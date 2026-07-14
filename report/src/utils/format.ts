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
