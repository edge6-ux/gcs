/**
 * PLACEHOLDER PRICING
 * -------------------
 * All rates below are estimates for development purposes only and have
 * NOT been confirmed by the business owner. Do not treat these as final.
 * When real rates are provided, update the constants in this file only —
 * nothing elsewhere in the app should need to change.
 */

export const RESIDENTIAL_PRICING = {
  baseFee: 50,
  perSqFt: 0.08,
  perBedroom: 15,
  perBathroom: 20,
  deepCleanMultiplier: 1.35,
  minimumCharge: 75,
  recurringDiscount: {
    oneTime: 1.0,
    weekly: 0.9,
    biweekly: 0.95,
    monthly: 0.97,
  },
};

export const COMMERCIAL_PRICING = {
  perSqFt: 0.1,
  minimumCharge: 150,
  frequencyMultiplier: {
    oneTime: 1.0,
    monthly: 1.0,
    biweekly: 0.95,
    weekly: 0.9,
    nightly: 0.85,
  },
};

export type ResidentialPricingInput = {
  serviceType: "standard" | "deep";
  frequency: "one-time" | "recurring";
  recurringInterval?: "weekly" | "biweekly" | "monthly";
  bedrooms: number;
  bathrooms: number;
  sqft: number;
};

export type CommercialPricingInput = {
  sqft: number;
  frequency: "oneTime" | "weekly" | "biweekly" | "monthly" | "nightly";
};

export function calculateResidentialEstimate(data: ResidentialPricingInput): number {
  const {
    baseFee,
    perSqFt,
    perBedroom,
    perBathroom,
    deepCleanMultiplier,
    minimumCharge,
    recurringDiscount,
  } = RESIDENTIAL_PRICING;

  let subtotal =
    baseFee +
    data.sqft * perSqFt +
    data.bedrooms * perBedroom +
    data.bathrooms * perBathroom;

  if (data.serviceType === "deep") {
    subtotal *= deepCleanMultiplier;
  }

  const discountKey =
    data.frequency === "one-time"
      ? "oneTime"
      : data.recurringInterval ?? "monthly";

  subtotal *= recurringDiscount[discountKey];

  return Math.round(Math.max(subtotal, minimumCharge));
}

export function calculateCommercialEstimate(data: CommercialPricingInput): number {
  const { perSqFt, minimumCharge, frequencyMultiplier } = COMMERCIAL_PRICING;

  let subtotal = data.sqft * perSqFt;
  subtotal *= frequencyMultiplier[data.frequency];

  return Math.round(Math.max(subtotal, minimumCharge));
}

export function formatEstimateCopy(amount: number): string {
  return `Estimated at $${amount.toLocaleString()} — a starting estimate using placeholder rates, confirmed after your walkthrough.`;
}
