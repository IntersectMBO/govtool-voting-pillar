import { GovernanceActionCard } from "@/components/GovernanceActionCard";
import { Box } from "@mui/material";
import { useTranslations } from "next-intl"; // Import hook for loading translated strings.
import { unstable_setRequestLocale } from "next-intl/server"; // Import function to set the request-specific locale (unstable API).

const sections = [
  {
    label: "Abstract",
    text: "This is a test 1",
    dataTestId: "test-card",
    isSliderCard: true,
  },
  {
    label: "Motivation",
    text: "This is a test 2",
    dataTestId: "test-card",
  },
  {
    label: "Rationale",
    text: "This is a test 3",
    dataTestId: "test-card",
    isSliderCard: true,
    textVariant: "pill",
  },
];

export default function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale); // Sets the locale for the request. Use cautiously due to its unstable nature.
  const t = useTranslations("Index"); // Use the useTranslations hook to load translations for the "Index" namespace.

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          alignItems: "center",
        }}
      >
        {/*Render the translated title. */}
        <GovernanceActionCard
          title="I Love GovTool!"
          sections={[]}
          isVoteSubmitted
        />
        <Box sx={{ height: 20 }} />

        <GovernanceActionCard
          title="I Love GovTool!"
          sections={[]}
          isInProgress
        />
        <Box sx={{ height: 20 }} />
        <GovernanceActionCard
          title="I Love GovTool!"
          sections={sections}
          isError
        />
      </div>
    </main>
  );
}
