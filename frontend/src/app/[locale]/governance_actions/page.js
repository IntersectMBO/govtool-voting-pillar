import { getProposals } from "@/lib/api";

// These imports are not existing yet, just a showcase of what we would need to import
import { useWallet } from "govtool-assembly";
import { GovernanceActionPage } from "govtool-voting-pillar";

// This might be treated as a wrapper for the page providing pillar logic and passing it into the component that is the complete page
export default async function GovernanceActions() {
  // Fetch proposals from any backend
  const proposals = await getProposals();
  // UseWallet hook to interact with the wallet - that is provided inside the pillar when used on its own
  // (From the exported govtool-asssembly package)
  const walletApi = useWallet();

  // By extracting these into properties, we can easily export that component and use it in the govtool-assembly super app,
  // And that would give us 2 benefits - of using the pillar on its own and also - by the components - inside the super app (govtool-assembly)
  return <GovernanceActionPage proposals={proposals} walletApi={walletApi} />;
}
