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
      />
    </BrowserRouter>
  </React.StrictMode>
);
