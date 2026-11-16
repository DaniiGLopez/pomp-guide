import type { PompPlan } from "../types/plan";
import { CoverPage } from "./sections/CoverPage";
import { OpeningNote } from "./sections/OpeningNote";
import { ExecutiveSummary } from "./sections/ExecutiveSummary";
import { ChapterDivider } from "./sections/ChapterDivider";
import { ServicesSection } from "./sections/ServicesSection";
import { ObituarySection } from "./sections/ObituarySection";
import { CemeterySection } from "./sections/CemeterySection";
import { InsuranceSection } from "./sections/InsuranceSection";
import { FundingSection } from "./sections/FundingSection";
import { ContactsSection } from "./sections/ContactsSection";
import { MusicSection } from "./sections/MusicSection";
import { LegalSection } from "./sections/LegalSection";
import { BackCover } from "./sections/BackCover";
import { getObituaryView } from "../utils/obituary";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

type ReportProps = {
  plan: PompPlan;
};

export function Report({ plan }: ReportProps) {
  // The Obituary chapter only exists when the plan has obituary data, so the
  // chapters after it are numbered from this offset.
  const obituary = getObituaryView(plan.obituary);
  const chapter = (base: number) => ROMAN[base - 1 + (obituary ? 1 : 0)];

  return (
    <>
      <CoverPage plan={plan} />
      <OpeningNote />
      <ExecutiveSummary plan={plan} />

      <ChapterDivider
        number="I"
        eyebrow="Final Wishes"
        title="Services & Farewell"
        subtitle="How the client wishes to be remembered."
      />
      <ServicesSection plan={plan} />

      {obituary && (
        <>
          <ChapterDivider
            number="II"
            eyebrow="Remembering a Life"
            title="Obituary Planning"
            subtitle="Preferences, family details, and draft wording for the obituary."
          />
          <ObituarySection obituary={obituary} />
        </>
      )}

      <ChapterDivider
        number={chapter(2)}
        eyebrow="Final Resting Place"
        title="Interment & Remains"
        subtitle="Instructions for the care and placement of remains."
      />
      <CemeterySection plan={plan} />

      <ChapterDivider
        number={chapter(3)}
        eyebrow="Financial Protection"
        title="Insurance & Coverage"
        subtitle="Policies and funding information recorded in the plan."
      />
      <InsuranceSection plan={plan} />
      <FundingSection plan={plan} />

      <ChapterDivider
        number={chapter(4)}
        eyebrow="Key People"
        title="Contacts & Beneficiaries"
        subtitle="The people involved in carrying out these wishes."
      />
      <ContactsSection plan={plan} />

      <ChapterDivider
        number={chapter(5)}
        eyebrow="Musical Selections"
        title="Music"
        subtitle="Songs selected for the service or celebration."
      />
      <MusicSection plan={plan} />

      <ChapterDivider
        number={chapter(6)}
        eyebrow="Official Record"
        title="Vital Statistics"
        subtitle="Information used for official filings and records."
      />
      <LegalSection plan={plan} />

      <BackCover plan={plan} />
    </>
  );
}
