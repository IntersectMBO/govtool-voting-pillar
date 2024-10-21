import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

import { voltaireTheme } from './theme';
import {
  DataActionsBarProvider,
  PillarProvider,
  PillarProviderProps,
} from './context';
import {
  GovernanceActionsPage,
  GovernanceActionDetails,
  GovernanceActionsCategory,
} from './components/pages';
import { PATHS } from './consts';

const VotingPillar = ({
  walletApi,
  apiUrl,
  validationApiUrl,
  ...props
}: PillarProviderProps) => (
  <PillarProvider
    {...props}
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

// That exports pages of the VotingPillar component
export * from './components';

export default VotingPillar;
