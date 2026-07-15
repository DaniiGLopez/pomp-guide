import { colors } from "./colors";

export const textStyles = {
  eyebrow: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 2,
    textTransform: "uppercase" as const,
    color: colors.muted,
  },

  fieldValue: {
    fontSize: 14,
    fontWeight: 600,
    color: colors.darkBrown,
    lineHeight: 1.5,
  },

  cardTitle: {
    fontSize: 26,
    fontWeight: 600,
    color: colors.forestGreen,
    lineHeight: 1.1,
  },

  sectionTitle: {
    fontSize: 40,
    color: colors.darkBrown,
  },

  mutedBody: {
    fontSize: 13,
    color: colors.muted,
    lineHeight: 1.5,
  },
} as const;
