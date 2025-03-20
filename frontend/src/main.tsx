import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import VotingPillar from './VotingPillar';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VotingPillar
      walletApi={null}
      apiUrl={import.meta.env.VITE_API_URL as string}
      validationApiUrl={import.meta.env.VITE_VALIDATION_API_URL as string}
      validateMetadata={() => {}}
      voter={undefined}
      isVotingOnGovernanceActionEnabled={() => true}
      epochParams={{}}
      openFeedbackWindow={() => {}}
      addSuccessAlert={() => {}}
      cExplorerBaseUrl={import.meta.env.VITE_C_EXPLORER_BASE_URL as string}
      generateMetadata={() => {}}
      createJsonLD={() => {}}
      createHash={() => ''}
    />
  </StrictMode>
);
