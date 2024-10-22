import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';

import VotingPillar from './VotingPillar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <VotingPillar
        walletApi={null}
        apiUrl={process.env.API_URL || ''}
        validationApiUrl={process.env.VALIDATION_API_URL || ''}
        openFeedbackWindow={() => {
          throw new Error('Function not implemented.');
        }}
        isVotingOnGovernanceActionEnabled={(proposalType: string) => {
          throw new Error(`Function not implemented. ${proposalType}`);
        }}
        epochParams={undefined}
        addSuccessAlert={(message: string) => {
          throw new Error(`Function not implemented. ${message}`);
        }}
        validateMetadata={(url: string, hash: string) => {
          throw new Error(`Function not implemented. ${url} ${hash}`);
        }}
        generateMetadata={() => {
          throw new Error('Function not implemented.');
        }}
        createJsonLD={(data: unknown) => {
          throw new Error(`Function not implemented. ${data}`);
        }}
        createHash={(json: unknown) => {
          throw new Error(`Function not implemented. ${json}`);
        }}
      />
    </BrowserRouter>
  </React.StrictMode>
);
