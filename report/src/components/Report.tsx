import type { PompPlan } from "../types/plan";
import { CoverPage } from "./sections/CoverPage";
import { ExecutiveSummary } from "./sections/ExecutiveSummary";
import { ChapterDivider } from "./sections/ChapterDivider";
import { ServicesSection } from "./sections/ServicesSection";
import { CemeterySection } from "./sections/CemeterySection";
import { InsuranceSection } from "./sections/InsuranceSection";
import { FundingSection } from "./sections/FundingSection";
import { ContactsSection } from "./sections/ContactsSection";
import { MusicSection } from "./sections/MusicSection";
import { LegalSection } from "./sections/LegalSection";
import { BackCover } from "./sections/BackCover";

type ReportProps = {
  plan: PompPlan;
};

export function Report({ plan }: ReportProps) {
  return (
    <>
      <CoverPage plan={plan} />
      <ExecutiveSummary plan={plan} />

      <ChapterDivider
        number="I"
        eyebrow="Final Wishes"
        title="Services & Farewell"
        subtitle="How the client wishes to be remembered."
      />
      <ServicesSection plan={plan} />

      <ChapterDivider
        number="II"
        eyebrow="Final Resting Place"
        title="Interment & Remains"
        subtitle="Instructions for the care and placement of remains."
      />
      <CemeterySection plan={plan} />

      <ChapterDivider
        number="III"
        eyebrow="Financial Protection"
        title="Insurance & Coverage"
        subtitle="Policies and funding information recorded in the plan."
      />
      <InsuranceSection plan={plan} />
      <FundingSection plan={plan} />

      <ChapterDivider
        number="IV"
        eyebrow="Key People"
        title="Contacts & Beneficiaries"
        subtitle="The people involved in carrying out these wishes."
      />
      <ContactsSection plan={plan} />

      <ChapterDivider
        number="V"
        eyebrow="Musical Selections"
        title="Music"
        subtitle="Songs selected for the service or celebration."
      />
      <MusicSection plan={plan} />

      <ChapterDivider
        number="VI"
        eyebrow="Official Record"
        title="Vital Statistics"
        subtitle="Information used for official filings and records."
      />
      <LegalSection plan={plan} />

      <BackCover plan={plan} />
    </>
  );
}
