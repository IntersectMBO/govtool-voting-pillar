import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

import { voltaireTheme } from './theme';
import { DataActionsBarProvider, PillarProvider } from './context';
import {
  GovernanceActionsPage,
  GovernanceActionDetails,
  GovernanceActionsCategory,
} from './components/pages';
import { PATHS } from './consts';

type VotingPillarProps = {
  walletApi: WalletApi | null;
  apiUrl: string;
  validationApiUrl: string;
};

const VotingPillar = ({
  walletApi,
  apiUrl,
  validationApiUrl,
}: VotingPillarProps) => (
  <PillarProvider
    walletApi={walletApi}
    apiUrl={apiUrl}
    validationApiUrl={validationApiUrl}
  >
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider theme={voltaireTheme}>
        <DataActionsBarProvider>
          <Routes>
            <Route
              path={PATHS.governanceActions}
              element={<GovernanceActionsPage />}
            />
            <Route
              path={PATHS.governanceActionsAction}
              element={<GovernanceActionDetails />}
            />
            <Route
              path={PATHS.governanceActionsCategory}
              element={<GovernanceActionsCategory />}
            />
          </Routes>
        </DataActionsBarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </PillarProvider>
);

export default VotingPillar;
