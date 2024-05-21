import { getProposals } from "@/lib/api";
import { GovernanceActionPage } from "@/components/GovernanceActionPage";

export default async function GovernanceActions() {
  const proposals = await getProposals();
  return <GovernanceActionPage proposals={proposals} />;
}
