"use client";

import { useMemo, useState } from "react";
import TimeSlotPicker from "@/components/TimeSlotPicker";
import type { SubmitEstimatePayload } from "@/lib/estimate-submission";
import {
  calculateCommercialEstimate,
  calculateResidentialEstimate,
  formatEstimateCopy,
} from "@/lib/pricing";

type Variant = "residential" | "commercial";

type ResidentialData = {
  serviceType: "" | "standard" | "deep";
  deepCleanNotes: string;
  frequency: "" | "one-time" | "recurring";
  recurringInterval:
    | ""
    | "weekly"
    | "everyTwoWeeks"
    | "everyThreeWeeks"
    | "monthly"
    | "other";
  bedrooms: string;
  bathrooms: string;
  sqft: string;
  motivation: "" | "no-time" | "unable" | "higher-standard" | "other";
  motivationOther: string;
  name: string;
  email: string;
  phone: string;
  address: string;
};

type CommercialData = {
  facilityType: "" | "office" | "retail" | "medical";
  sqft: string;
  frequency: "" | "oneTime" | "weekly" | "biweekly" | "monthly" | "nightly";
  supplies: "" | "standard" | "specific";
  suppliesNotes: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
};

const initialResidential: ResidentialData = {
  serviceType: "",
  deepCleanNotes: "",
  frequency: "",
  recurringInterval: "",
  bedrooms: "",
  bathrooms: "",
  sqft: "",
  motivation: "",
  motivationOther: "",
  name: "",
  email: "",
  phone: "",
  address: "",
};

const initialCommercial: CommercialData = {
  facilityType: "",
  sqft: "",
  frequency: "",
  supplies: "",
  suppliesNotes: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  address: "",
};

const inputClass =
  "w-full rounded-md border border-line bg-cream px-4 py-3 font-body text-[14px] text-ink focus:border-gold focus:outline-none";

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-2 block font-body text-sm font-medium text-ink">
      {children}
    </label>
  );
}

function SelectCard({
  selected,
  onClick,
  variant,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  variant: Variant;
  children: React.ReactNode;
}) {
  const selectedClass =
    variant === "commercial"
      ? "border-gold bg-slate text-cream"
      : "border-gold bg-gold-tint/20 text-ink";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-md border p-4 text-left font-body text-[14px] transition-colors ${
        selected
          ? selectedClass
          : "border-line bg-cream text-body hover:border-gold/60"
      }`}
    >
      {children}
    </button>
  );
}

function StepProgress({
  total,
  current,
  variant,
}: {
  total: number;
  current: number;
  variant: Variant;
}) {
  return (
    <div className="mb-10 flex items-center gap-2">
      {Array.from({ length: total }, (_, i) => {
        const filled = i <= current;
        if (variant === "commercial") {
          return (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full border transition-colors ${
                filled
                  ? "border-gold bg-gold"
                  : "border-slate/40 bg-transparent"
              }`}
              aria-hidden="true"
            />
          );
        }
        return (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              filled ? "bg-gold" : "bg-line"
            }`}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-3 last:border-b-0 sm:flex-row sm:justify-between">
      <span className="font-body text-[13px] font-medium text-taupe">{label}</span>
      <span className="font-body text-[14px] text-ink sm:max-w-[60%] sm:text-right">
        {value || "—"}
      </span>
    </div>
  );
}

function ReviewSection({
  title,
  stepIndex,
  onEdit,
  children,
}: {
  title: string;
  stepIndex: number;
  onEdit: (step: number) => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-md border border-line bg-stone/40 p-5">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="font-display text-[16px] text-ink">{title}</h3>
        <button
          type="button"
          onClick={() => onEdit(stepIndex)}
          className="font-body text-[13px] text-gold underline decoration-transparent hover:decoration-gold"
        >
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}

function ConfirmationScreen({ name }: { name: string }) {
  return (
    <div className="mx-auto max-w-xl px-6 py-16 text-center md:px-8 md:py-24">
      <div
        className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-gold-tint/20"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12.5l2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="font-display text-[26px] font-normal text-ink">
        Request received.
      </h1>
      <p className="mx-auto mt-4 max-w-md font-body text-[15px] leading-relaxed text-body">
        Thanks, {name} — Shawn will reach out shortly to confirm your time.
      </p>
      <p className="mt-6 font-body text-[13px] text-taupe">
        Questions in the meantime? Call{" "}
        <a
          href="tel:7705190618"
          className="text-ink underline decoration-transparent hover:decoration-gold"
        >
          (770) 519-0618
        </a>
        .
      </p>
    </div>
  );
}

export default function EstimateForm({ variant }: { variant: Variant }) {
  const isResidential = variant === "residential";
  const formSteps = 5;
  const totalSteps = formSteps + 1;

  const [step, setStep] = useState(0);
  const [residential, setResidential] = useState(initialResidential);
  const [commercial, setCommercial] = useState(initialCommercial);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const setR = <K extends keyof ResidentialData>(
    key: K,
    value: ResidentialData[K],
  ) => setResidential((prev) => ({ ...prev, [key]: value }));

  const setC = <K extends keyof CommercialData>(
    key: K,
    value: CommercialData[K],
  ) => setCommercial((prev) => ({ ...prev, [key]: value }));

  const canProceed = useMemo(() => {
    if (isResidential) {
      switch (step) {
        case 0:
          return residential.serviceType !== "";
        case 1:
          return (
            residential.frequency !== "" &&
            (residential.frequency === "one-time" ||
              residential.recurringInterval !== "")
          );
        case 2:
          return (
            residential.bedrooms !== "" &&
            residential.bathrooms !== "" &&
            residential.sqft !== "" &&
            Number(residential.bedrooms) >= 0 &&
            Number(residential.bathrooms) >= 0 &&
            Number(residential.sqft) > 0
          );
        case 3:
          return (
            residential.motivation !== "" &&
            (residential.motivation !== "other" ||
              residential.motivationOther.trim() !== "")
          );
        case 4:
          return (
            residential.name.trim() !== "" &&
            residential.email.trim() !== "" &&
            residential.phone.trim() !== "" &&
            residential.address.trim() !== ""
          );
        default:
          return true;
      }
    }

    switch (step) {
      case 0:
        return commercial.facilityType !== "";
      case 1:
        return commercial.sqft !== "" && Number(commercial.sqft) > 0;
      case 2:
        return commercial.frequency !== "";
      case 3:
        return (
          commercial.supplies !== "" &&
          (commercial.supplies !== "specific" ||
            commercial.suppliesNotes.trim() !== "")
        );
      case 4:
        return (
          commercial.name.trim() !== "" &&
          commercial.company.trim() !== "" &&
          commercial.email.trim() !== "" &&
          commercial.phone.trim() !== "" &&
          commercial.address.trim() !== ""
        );
      default:
        return true;
    }
  }, [step, isResidential, residential, commercial]);

  const estimateAmount = useMemo(() => {
    if (isResidential) {
      if (
        !residential.serviceType ||
        !residential.frequency ||
        !residential.bedrooms ||
        !residential.bathrooms ||
        !residential.sqft
      ) {
        return null;
      }
      return calculateResidentialEstimate({
        serviceType: residential.serviceType,
        frequency: residential.frequency,
        recurringInterval:
          residential.frequency === "recurring"
            ? (residential.recurringInterval as
                | "weekly"
                | "everyTwoWeeks"
                | "everyThreeWeeks"
                | "monthly"
                | "other")
            : undefined,
        bedrooms: Number(residential.bedrooms),
        bathrooms: Number(residential.bathrooms),
        sqft: Number(residential.sqft),
      });
    }

    if (!commercial.sqft || !commercial.frequency) {
      return null;
    }

    return calculateCommercialEstimate({
      sqft: Number(commercial.sqft),
      frequency: commercial.frequency,
    });
  }, [isResidential, residential, commercial]);

  const serviceLabel = (value: ResidentialData["serviceType"]) =>
    value === "deep" ? "Deep Cleaning" : value === "standard" ? "Standard Cleaning" : "";

  const freqLabelResidential = () => {
    if (residential.frequency === "one-time") return "One-time";
    if (residential.recurringInterval === "weekly") return "Recurring — Weekly";
    if (residential.recurringInterval === "everyTwoWeeks")
      return "Recurring — Every Two Weeks";
    if (residential.recurringInterval === "everyThreeWeeks")
      return "Recurring — Every Three Weeks";
    if (residential.recurringInterval === "monthly") return "Recurring — Monthly";
    if (residential.recurringInterval === "other") return "Recurring — Other";
    return "";
  };

  const motivationLabel = (value: ResidentialData["motivation"]) => {
    switch (value) {
      case "no-time":
        return "I don't have time";
      case "unable":
        return "I'm not able to clean myself";
      case "higher-standard":
        return "I want a consistently higher standard";
      case "other":
        return residential.motivationOther || "Other";
      default:
        return "";
    }
  };

  const facilityLabel = (value: CommercialData["facilityType"]) => {
    switch (value) {
      case "office":
        return "Office";
      case "retail":
        return "Retail & Storefront";
      case "medical":
        return "Medical & Professional";
      default:
        return "";
    }
  };

  const freqLabelCommercial = (value: CommercialData["frequency"]) => {
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
      default:
        return "";
    }
  };

  const goNext = () => {
    if (canProceed && step < totalSteps - 1) {
      setStep((s) => s + 1);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  const contactName = isResidential ? residential.name : commercial.name;

  const buildPayload = (): SubmitEstimatePayload | null => {
    if (isResidential) {
      if (
        !residential.serviceType ||
        !residential.frequency ||
        !residential.motivation
      ) {
        return null;
      }

      return {
        variant: "residential",
        residential: {
          serviceType: residential.serviceType,
          deepCleanNotes: residential.deepCleanNotes,
          frequency: residential.frequency,
          recurringInterval: residential.recurringInterval,
          bedrooms: residential.bedrooms,
          bathrooms: residential.bathrooms,
          sqft: residential.sqft,
          motivation: residential.motivation,
          motivationOther: residential.motivationOther,
          walkthrough: "in-person",
          name: residential.name,
          email: residential.email,
          phone: residential.phone,
          address: residential.address,
        },
        timeSlotIds: selectedTimeSlots,
      };
    }

    if (
      !commercial.facilityType ||
      !commercial.frequency ||
      !commercial.supplies
    ) {
      return null;
    }

    return {
      variant: "commercial",
      commercial: {
        facilityType: commercial.facilityType,
        sqft: commercial.sqft,
        frequency: commercial.frequency,
        supplies: commercial.supplies,
        suppliesNotes: commercial.suppliesNotes,
        walkthrough: "in-person",
        name: commercial.name,
        company: commercial.company,
        email: commercial.email,
        phone: commercial.phone,
        address: commercial.address,
      },
      timeSlotIds: selectedTimeSlots,
    };
  };

  const handleSubmit = async () => {
    const payload = buildPayload();
    if (!payload || selectedTimeSlots.length !== 3) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/submit-estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitSuccess(true);
    } catch {
      setSubmitError(
        "Something went wrong sending your request. Please try again, or call us directly at (770) 519-0618.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return <ConfirmationScreen name={contactName} />;
  }

  const stepHeading = isResidential
    ? [
        "What kind of cleaning do you need?",
        "How often would you like service?",
        "Tell us about your home",
        "What matters most to you?",
        "How can we reach you?",
        "Review your estimate",
      ][step]
    : [
        "What type of facility is this?",
        "How large is the space?",
        "How often do you need cleaning?",
        "Supplies & products",
        "How can we reach you?",
        "Review your quote",
      ][step];

  const stepSupport = isResidential
    ? [
        "Choose the service that best fits your home today.",
        "Select how frequently you'd like us to visit.",
        "Rough numbers are fine — we'll confirm details on your walkthrough.",
        "This helps us understand what you're looking for.",
        "We'll follow up to schedule your in-person walkthrough.",
        "Make sure everything looks right before scheduling.",
      ][step]
    : [
        "Select the category that best describes your workspace.",
        "Your final rate is confirmed after a walkthrough.",
        "Frequency affects your placeholder estimate.",
        "We bring standard supplies unless you specify otherwise.",
        "We'll follow up to schedule your in-person walkthrough.",
        "Make sure everything looks right before scheduling.",
      ][step];

  return (
    <div className="mx-auto max-w-xl px-6 py-12 md:px-8 md:py-16">
      <StepProgress total={totalSteps} current={step} variant={variant} />

      <h1 className="font-display text-[22px] font-normal text-ink md:text-[24px]">
        {stepHeading}
      </h1>
      <p className="mt-2 font-body text-[14px] leading-relaxed text-body">
        {stepSupport}
      </p>

      <div className="mt-8 space-y-5">
        {isResidential && step === 0 && (
          <>
            <div className="grid gap-3">
              <SelectCard
                variant={variant}
                selected={residential.serviceType === "standard"}
                onClick={() => setR("serviceType", "standard")}
              >
                Standard Cleaning
              </SelectCard>
              <SelectCard
                variant={variant}
                selected={residential.serviceType === "deep"}
                onClick={() => setR("serviceType", "deep")}
              >
                Deep Cleaning
              </SelectCard>
            </div>
            {residential.serviceType === "deep" && (
              <div>
                <FieldLabel>
                  What does a &ldquo;deep clean&rdquo; mean for your home? (optional
                  but helpful)
                </FieldLabel>
                <textarea
                  value={residential.deepCleanNotes}
                  onChange={(e) => setR("deepCleanNotes", e.target.value)}
                  placeholder="e.g. inside the oven, baseboards, grout..."
                  rows={3}
                  className={`${inputClass} resize-y`}
                />
              </div>
            )}
          </>
        )}

        {isResidential && step === 1 && (
          <>
            <div className="grid gap-3">
              <SelectCard
                variant={variant}
                selected={residential.frequency === "one-time"}
                onClick={() => {
                  setR("frequency", "one-time");
                  setR("recurringInterval", "");
                }}
              >
                One-time
              </SelectCard>
              <SelectCard
                variant={variant}
                selected={residential.frequency === "recurring"}
                onClick={() => setR("frequency", "recurring")}
              >
                Recurring
              </SelectCard>
            </div>
            {residential.frequency === "recurring" && (
              <div>
                <FieldLabel>How often?</FieldLabel>
                <select
                  value={residential.recurringInterval}
                  onChange={(e) =>
                    setR(
                      "recurringInterval",
                      e.target.value as ResidentialData["recurringInterval"],
                    )
                  }
                  className={inputClass}
                >
                  <option value="">Select frequency</option>
                  <option value="weekly">Weekly</option>
                  <option value="everyTwoWeeks">Every Two Weeks</option>
                  <option value="everyThreeWeeks">Every Three Weeks</option>
                  <option value="monthly">Monthly</option>
                  <option value="other">Other</option>
                </select>
              </div>
            )}
          </>
        )}

        {isResidential && step === 2 && (
          <>
            <div>
              <FieldLabel>Bedrooms</FieldLabel>
              <input
                type="number"
                min={0}
                value={residential.bedrooms}
                onChange={(e) => setR("bedrooms", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <FieldLabel>Bathrooms</FieldLabel>
              <input
                type="number"
                min={0}
                step={0.5}
                value={residential.bathrooms}
                onChange={(e) => setR("bathrooms", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <FieldLabel>Approximate square footage</FieldLabel>
              <input
                type="number"
                min={1}
                value={residential.sqft}
                onChange={(e) => setR("sqft", e.target.value)}
                className={inputClass}
              />
            </div>
          </>
        )}

        {isResidential && step === 3 && (
          <>
            <div className="grid gap-3">
              {(
                [
                  ["no-time", "I don't have time"],
                  ["unable", "I'm not able to clean myself"],
                  ["higher-standard", "I want a consistently higher standard"],
                  ["other", "Other"],
                ] as const
              ).map(([value, label]) => (
                <SelectCard
                  key={value}
                  variant={variant}
                  selected={residential.motivation === value}
                  onClick={() => setR("motivation", value)}
                >
                  {label}
                </SelectCard>
              ))}
            </div>
            {residential.motivation === "other" && (
              <div>
                <FieldLabel>Tell us a little more</FieldLabel>
                <input
                  type="text"
                  value={residential.motivationOther}
                  onChange={(e) => setR("motivationOther", e.target.value)}
                  className={inputClass}
                />
              </div>
            )}
          </>
        )}

        {isResidential && step === 4 && (
          <>
            <div>
              <FieldLabel>Name</FieldLabel>
              <input
                type="text"
                value={residential.name}
                onChange={(e) => setR("name", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <FieldLabel>Email</FieldLabel>
              <input
                type="email"
                value={residential.email}
                onChange={(e) => setR("email", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <FieldLabel>Phone</FieldLabel>
              <input
                type="tel"
                value={residential.phone}
                onChange={(e) => setR("phone", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <FieldLabel>Address</FieldLabel>
              <input
                type="text"
                value={residential.address}
                onChange={(e) => setR("address", e.target.value)}
                placeholder="Street, city, zip"
                className={inputClass}
              />
            </div>
          </>
        )}

        {!isResidential && step === 0 && (
          <div className="grid gap-3">
            {(
              [
                ["office", "Office"],
                ["retail", "Retail & Storefront"],
                ["medical", "Medical & Professional"],
              ] as const
            ).map(([value, label]) => (
              <SelectCard
                key={value}
                variant={variant}
                selected={commercial.facilityType === value}
                onClick={() => setC("facilityType", value)}
              >
                {label}
              </SelectCard>
            ))}
          </div>
        )}

        {!isResidential && step === 1 && (
          <div>
            <FieldLabel>Approximate square footage</FieldLabel>
            <input
              type="number"
              min={1}
              value={commercial.sqft}
              onChange={(e) => setC("sqft", e.target.value)}
              className={inputClass}
            />
          </div>
        )}

        {!isResidential && step === 2 && (
          <div className="grid gap-3">
            {(
              [
                ["oneTime", "One-time"],
                ["weekly", "Weekly"],
                ["biweekly", "Bi-weekly"],
                ["monthly", "Monthly"],
                ["nightly", "Nightly"],
              ] as const
            ).map(([value, label]) => (
              <SelectCard
                key={value}
                variant={variant}
                selected={commercial.frequency === value}
                onClick={() => setC("frequency", value)}
              >
                {label}
              </SelectCard>
            ))}
          </div>
        )}

        {!isResidential && step === 3 && (
          <>
            <div className="grid gap-3">
              <SelectCard
                variant={variant}
                selected={commercial.supplies === "standard"}
                onClick={() => setC("supplies", "standard")}
              >
                Use your standard supplies
              </SelectCard>
              <SelectCard
                variant={variant}
                selected={commercial.supplies === "specific"}
                onClick={() => setC("supplies", "specific")}
              >
                We have specific products we&apos;d like used
              </SelectCard>
            </div>
            {commercial.supplies === "specific" && (
              <div>
                <FieldLabel>
                  What products or requirements should we know about?
                </FieldLabel>
                <textarea
                  value={commercial.suppliesNotes}
                  onChange={(e) => setC("suppliesNotes", e.target.value)}
                  rows={3}
                  className={`${inputClass} resize-y`}
                />
              </div>
            )}
          </>
        )}

        {!isResidential && step === 4 && (
          <>
            <div>
              <FieldLabel>Name</FieldLabel>
              <input
                type="text"
                value={commercial.name}
                onChange={(e) => setC("name", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <FieldLabel>Company name</FieldLabel>
              <input
                type="text"
                value={commercial.company}
                onChange={(e) => setC("company", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <FieldLabel>Email</FieldLabel>
              <input
                type="email"
                value={commercial.email}
                onChange={(e) => setC("email", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <FieldLabel>Phone</FieldLabel>
              <input
                type="tel"
                value={commercial.phone}
                onChange={(e) => setC("phone", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <FieldLabel>Facility address</FieldLabel>
              <input
                type="text"
                value={commercial.address}
                onChange={(e) => setC("address", e.target.value)}
                placeholder="Street, city, zip"
                className={inputClass}
              />
            </div>
          </>
        )}

        {step === formSteps && (
          <div className="space-y-6">
            {estimateAmount !== null && (
              <div
                className={`rounded-md border p-5 ${
                  isResidential
                    ? "border-gold bg-gold-tint/20"
                    : "border-gold bg-slate text-cream"
                }`}
              >
                <p
                  className={`font-display text-[18px] leading-snug ${
                    isResidential ? "text-ink" : "!text-cream"
                  }`}
                >
                  {formatEstimateCopy(estimateAmount)}
                </p>
              </div>
            )}

            {isResidential ? (
              <>
                <ReviewSection title="Service" stepIndex={0} onEdit={setStep}>
                  <ReviewRow label="Service type" value={serviceLabel(residential.serviceType)} />
                  {residential.deepCleanNotes && (
                    <ReviewRow label="Deep clean notes" value={residential.deepCleanNotes} />
                  )}
                </ReviewSection>
                <ReviewSection title="Frequency" stepIndex={1} onEdit={setStep}>
                  <ReviewRow label="Frequency" value={freqLabelResidential()} />
                </ReviewSection>
                <ReviewSection title="Home details" stepIndex={2} onEdit={setStep}>
                  <ReviewRow label="Bedrooms" value={residential.bedrooms} />
                  <ReviewRow label="Bathrooms" value={residential.bathrooms} />
                  <ReviewRow label="Square footage" value={residential.sqft} />
                </ReviewSection>
                <ReviewSection title="What matters most" stepIndex={3} onEdit={setStep}>
                  <ReviewRow label="Priority" value={motivationLabel(residential.motivation)} />
                </ReviewSection>
                <ReviewSection title="Contact" stepIndex={4} onEdit={setStep}>
                  <ReviewRow label="Name" value={residential.name} />
                  <ReviewRow label="Email" value={residential.email} />
                  <ReviewRow label="Phone" value={residential.phone} />
                  <ReviewRow label="Address" value={residential.address} />
                </ReviewSection>
              </>
            ) : (
              <>
                <ReviewSection title="Facility" stepIndex={0} onEdit={setStep}>
                  <ReviewRow label="Type" value={facilityLabel(commercial.facilityType)} />
                </ReviewSection>
                <ReviewSection title="Space" stepIndex={1} onEdit={setStep}>
                  <ReviewRow label="Square footage" value={commercial.sqft} />
                </ReviewSection>
                <ReviewSection title="Frequency" stepIndex={2} onEdit={setStep}>
                  <ReviewRow
                    label="Frequency"
                    value={freqLabelCommercial(commercial.frequency)}
                  />
                </ReviewSection>
                <ReviewSection title="Supplies" stepIndex={3} onEdit={setStep}>
                  <ReviewRow
                    label="Supplies"
                    value={
                      commercial.supplies === "specific"
                        ? `Specific products — ${commercial.suppliesNotes}`
                        : "Standard supplies"
                    }
                  />
                </ReviewSection>
                <ReviewSection title="Contact" stepIndex={4} onEdit={setStep}>
                  <ReviewRow label="Name" value={commercial.name} />
                  <ReviewRow label="Company" value={commercial.company} />
                  <ReviewRow label="Email" value={commercial.email} />
                  <ReviewRow label="Phone" value={commercial.phone} />
                  <ReviewRow label="Address" value={commercial.address} />
                </ReviewSection>
              </>
            )}

            <TimeSlotPicker
              variant={variant}
              selectedSlots={selectedTimeSlots}
              onChange={setSelectedTimeSlots}
            />

            {submitError && (
              <p className="font-body text-[14px] leading-relaxed text-body" role="alert">
                {submitError}
              </p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={selectedTimeSlots.length !== 3 || isSubmitting}
              className={`rounded-[6px] px-6 py-3 font-body text-[14px] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                isResidential
                  ? "bg-gold text-ink hover:bg-gold/90"
                  : "border border-gold bg-slate text-cream hover:bg-gold hover:text-ink"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit request"}
            </button>
          </div>
        )}
      </div>

      {step < formSteps && (
        <div className="mt-10 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 0}
            className="font-body text-[14px] text-taupe transition-colors hover:text-ink disabled:invisible"
          >
            Back
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={!canProceed}
            className={`rounded-[6px] px-6 py-3 font-body text-[14px] font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
              isResidential
                ? "bg-gold text-ink hover:bg-gold/90"
                : "border border-gold bg-slate text-cream hover:bg-gold hover:text-ink"
            }`}
          >
            Next
          </button>
        </div>
      )}

      {step === formSteps && (
        <div className="mt-10">
          <button
            type="button"
            onClick={goBack}
            className="font-body text-[14px] text-taupe transition-colors hover:text-ink"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
