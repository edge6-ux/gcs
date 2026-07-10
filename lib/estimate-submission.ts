import {
  calculateCommercialEstimate,
  calculateResidentialEstimate,
} from "@/lib/pricing";
import { resolveTimeSlotLabels } from "@/lib/time-slots";

export type EstimateVariant = "residential" | "commercial";

export type ResidentialSubmission = {
  serviceType: "standard" | "deep";
  deepCleanNotes: string;
  frequency: "one-time" | "recurring";
  recurringInterval: "weekly" | "biweekly" | "monthly" | "";
  bedrooms: string;
  bathrooms: string;
  sqft: string;
  motivation: "no-time" | "unable" | "higher-standard" | "other";
  motivationOther: string;
  walkthrough: "virtual" | "in-person";
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type CommercialSubmission = {
  facilityType: "office" | "retail" | "medical" | "restaurant";
  sqft: string;
  frequency: "oneTime" | "weekly" | "biweekly" | "monthly" | "nightly";
  supplies: "standard" | "specific";
  suppliesNotes: string;
  walkthrough: "virtual" | "in-person";
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
};

export type SubmitEstimatePayload = {
  variant: EstimateVariant;
  residential?: ResidentialSubmission;
  commercial?: CommercialSubmission;
  timeSlotIds: string[];
};

function serviceLabel(value: ResidentialSubmission["serviceType"]) {
  return value === "deep" ? "Deep Cleaning" : "Standard Cleaning";
}

function freqLabelResidential(data: ResidentialSubmission) {
  if (data.frequency === "one-time") return "One-time";
  if (data.recurringInterval === "weekly") return "Recurring — Weekly";
  if (data.recurringInterval === "biweekly") return "Recurring — Bi-weekly";
  if (data.recurringInterval === "monthly") return "Recurring — Monthly";
  return "Recurring";
}

function motivationLabel(data: ResidentialSubmission) {
  switch (data.motivation) {
    case "no-time":
      return "I don't have time";
    case "unable":
      return "I'm not able to clean myself";
    case "higher-standard":
      return "I want a consistently higher standard";
    case "other":
      return data.motivationOther || "Other";
  }
}

function facilityLabel(value: CommercialSubmission["facilityType"]) {
  switch (value) {
    case "office":
      return "Office";
    case "retail":
      return "Retail & Storefront";
    case "medical":
      return "Medical & Professional";
    case "restaurant":
      return "Restaurant & Food Service";
  }
}

function freqLabelCommercial(value: CommercialSubmission["frequency"]) {
  switch (value) {
    case "oneTime":
      return "One-time";
    case "weekly":
      return "Weekly";
    case "biweekly":
      return "Bi-weekly";
    case "monthly":
      return "Monthly";
    case "nightly":
      return "Nightly";
  }
}

function walkthroughLabel() {
  return "In-person walkthrough";
}

export function calculateEstimateFromPayload(payload: SubmitEstimatePayload): number {
  if (payload.variant === "residential" && payload.residential) {
    const data = payload.residential;
    return calculateResidentialEstimate({
      serviceType: data.serviceType,
      frequency: data.frequency,
      recurringInterval:
        data.frequency === "recurring" && data.recurringInterval
          ? data.recurringInterval
          : undefined,
      bedrooms: Number(data.bedrooms),
      bathrooms: Number(data.bathrooms),
      sqft: Number(data.sqft),
    });
  }

  if (payload.variant === "commercial" && payload.commercial) {
    return calculateCommercialEstimate({
      sqft: Number(payload.commercial.sqft),
      frequency: payload.commercial.frequency,
    });
  }

  throw new Error("Invalid submission payload");
}

export function getContactName(payload: SubmitEstimatePayload): string {
  if (payload.variant === "residential" && payload.residential) {
    return payload.residential.name;
  }
  if (payload.variant === "commercial" && payload.commercial) {
    return payload.commercial.name;
  }
  return "Customer";
}

export function buildServiceDetailRows(
  payload: SubmitEstimatePayload,
): Array<{ label: string; value: string }> {
  if (payload.variant === "residential" && payload.residential) {
    const data = payload.residential;
    const rows = [
      { label: "Service type", value: serviceLabel(data.serviceType) },
      { label: "Frequency", value: freqLabelResidential(data) },
      { label: "Bedrooms", value: data.bedrooms },
      { label: "Bathrooms", value: data.bathrooms },
      { label: "Square footage", value: data.sqft },
      { label: "What matters most", value: motivationLabel(data) },
      { label: "Walkthrough", value: walkthroughLabel() },
    ];

    if (data.deepCleanNotes.trim()) {
      rows.splice(1, 0, {
        label: "Deep clean notes",
        value: data.deepCleanNotes,
      });
    }

    return rows;
  }

  if (payload.variant === "commercial" && payload.commercial) {
    const data = payload.commercial;
    const rows = [
      { label: "Facility type", value: facilityLabel(data.facilityType) },
      { label: "Square footage", value: data.sqft },
      { label: "Frequency", value: freqLabelCommercial(data.frequency) },
      {
        label: "Supplies",
        value:
          data.supplies === "specific"
            ? `Specific products — ${data.suppliesNotes}`
            : "Standard supplies",
      },
      { label: "Walkthrough", value: walkthroughLabel() },
    ];

    return rows;
  }

  return [];
}

export function buildContactRows(
  payload: SubmitEstimatePayload,
): Array<{ label: string; value: string }> {
  if (payload.variant === "residential" && payload.residential) {
    const data = payload.residential;
    return [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email },
      { label: "Phone", value: data.phone },
      { label: "Address", value: data.address },
    ];
  }

  if (payload.variant === "commercial" && payload.commercial) {
    const data = payload.commercial;
    return [
      { label: "Name", value: data.name },
      { label: "Company", value: data.company },
      { label: "Email", value: data.email },
      { label: "Phone", value: data.phone },
      { label: "Facility address", value: data.address },
    ];
  }

  return [];
}

export function buildSubmissionEmailHtml(payload: SubmitEstimatePayload): string {
  const estimate = calculateEstimateFromPayload(payload);
  const contactRows = buildContactRows(payload);
  const serviceRows = buildServiceDetailRows(payload);
  const timeLabels = resolveTimeSlotLabels(payload.timeSlotIds);

  const section = (title: string, rows: Array<{ label: string; value: string }>) =>
    `<h2 style="font-family: Georgia, serif; font-size: 18px; margin: 24px 0 8px;">${title}</h2>` +
    rows
      .map(
        (row) =>
          `<p style="margin: 4px 0; font-family: sans-serif; font-size: 14px;"><strong>${row.label}:</strong> ${row.value}</p>`,
      )
      .join("");

  const timesHtml = timeLabels
    .map(
      (label) =>
        `<li style="margin: 4px 0; font-family: sans-serif; font-size: 14px;">${label}</li>`,
    )
    .join("");

  return `
    <div style="color: #2C2A26; line-height: 1.6;">
      ${section("Contact info", contactRows)}
      ${section("Service details", serviceRows)}
      <h2 style="font-family: Georgia, serif; font-size: 18px; margin: 24px 0 8px;">Estimated price</h2>
      <p style="margin: 4px 0; font-family: sans-serif; font-size: 14px;"><strong>Estimate:</strong> $${estimate.toLocaleString()}</p>
      <p style="margin: 4px 0; font-family: sans-serif; font-size: 13px; color: #8A8172;">Placeholder rates — confirm real pricing before quoting the customer.</p>
      <h2 style="font-family: Georgia, serif; font-size: 18px; margin: 24px 0 8px;">Requested times</h2>
      <ul style="padding-left: 20px; margin: 0;">${timesHtml}</ul>
    </div>
  `.trim();
}
