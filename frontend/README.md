# @intersect.mbo/govtool-voting-pillar

The `@intersect.mbo/govtool-voting-pillar` is a React.js package that provides the essential logic and UI components for managing and conducting voting mechanisms within a Cardano governance.

## Table of content:

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Running locally](#running-locally)

## Installation

To install this pacakge, use npm or yarn:

### `npm install @intersect.mbo/govtool-voting-pillar`

or

### `yarn add @intersect.mbo/govtool-voting-pillar`

## Usage

After installation, you can import the component and use it in your project.

#### This is an example of implementing a package in a [NextJs](https://nextjs.org/) application

```tsx
'use client';
import dynamic from 'next/dynamic';
import { useAppContext } from '@/context';

const VotingPillar = dynamic(
  () => import('@intersect.mbo/govtool-voting-pillar'),
  {
    ssr: false,
  }
);

export default function Page() {
  const {
    walletApi,
    openFeedbackWindow,
    addSuccessAlert,
    validateMetadata,
    generateMetadata,
    createJsonLD,
    createHash,
    isVotingOnGovernanceActionEnabled,
    epochParams,
    ...context
    // Or from any other context you need
  } = useAppContext();

  return (
    <VotingPillar
      walletApi={walletApi}
      apiUrl={process.env.NEXT_PUBLIC_VOTING_API_URL}
      validationApiUrl={process.env.NEXT_PUBLIC_VALIDATION_API_URL}
      cExplorerBaseUrl={process.env.NEXT_PUBLIC_CEXPLORER_BASE_URL}
      openFeedbackWindow={openFeedbackWindow}
      isVotingOnGovernanceActionEnabled={isVotingOnGovernanceActionEnabled}
      epochParams={epochParams}
      addSuccessAlert={addSuccessAlert}
      validateMetadata={validateMetadata}
      generateMetadata={generateMetadata}
      createJsonLD={createJsonLD}
      createHash={createHash}
    />
  );
}
```

#### Example of Implementing a Package Using CommonJS Modules (CJS):

```tsx
import React from 'react';
import { useAppContext } from '@/context';

const VotingPillar = React.lazy(
  () => import('@intersect.mbo/govtool-voting-pillar/cjs')
);

export const VotingComponent = () => {
  const {
    walletApi,
    openFeedbackWindow,
    addSuccessAlert,
    validateMetadata,
    generateMetadata,
    createJsonLD,
    createHash,
    isVotingOnGovernanceActionEnabled,
    epochParams,
    ...context
    // Or from any other context you need
  } = useAppContext();

  return (
    <VotingPillar
      walletApi={walletApi}
      apiUrl={process.env.NEXT_PUBLIC_VOTING_API_URL}
      validationApiUrl={process.env.NEXT_PUBLIC_VALIDATION_API_URL}
      cExplorerBaseUrl={process.env.NEXT_PUBLIC_CEXPLORER_BASE_URL}
      openFeedbackWindow={openFeedbackWindow}
      isVotingOnGovernanceActionEnabled={isVotingOnGovernanceActionEnabled}
      epochParams={epochParams}
      addSuccessAlert={addSuccessAlert}
      validateMetadata={validateMetadata}
      generateMetadata={generateMetadata}
      createJsonLD={createJsonLD}
      createHash={createHash}
    />
  );
};
```

## Project Structure

```govtool-voting-pillar/frontend
├── dist
├── jest.config.cjs
├── node_modules
├── package.json
├── package-lock.json
├── public
├── README.md
├── rollup.config.mjs
├── setupTests.ts
├── src
│   ├── components
│   ├── consts
│   ├── context
│   ├── hooks
│   ├── index.tsx
│   ├── models
│   ├── react-app-env.d.ts
│   ├── services
│   ├── stories
│   ├── theme
│   ├── types
│   ├── utils
│   └── VotingPillar.tsx
├── tsconfig.json
└── yarn.lock
```

- **components/**: The `@intersect.mbo/govtool-voting-pillar` components.
- **context/**: Context for global application state.
- **hooks/**: Custom hooks.
- **models/**: Typescript models.
- **services/**: Services for fetching data.
- **stories/**: Storybook stories.
- **theme/**: Theme configuration.
- **types/**: Typescript types.
- **utils/**: Utility functions.
- **rollup.config.js**: Configuration for the Rollup bundler.

## Prerequisites

Before starting, please ensure you have the following:

- Node.js and npm - Latest versions. You can download them from [here](https://nodejs.org/en/download/).

## Running locally

To run the application locally, you need to have Node.js installed.
Copy `.env.example` to `.env` and fill in the required environment variables.

Run the Voting Pillar backend server.

Start the frontend server:

```bash
npm install
npm start
```
