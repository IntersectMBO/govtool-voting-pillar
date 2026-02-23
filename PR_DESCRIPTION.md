# PR: Add survey linkage/tally APIs and survey-response vote metadata support

## Summary
This PR adds survey support to the voting pillar for Info Actions by implementing:
1. Backend APIs to resolve linked survey data and compute tally results.
2. Frontend request/query/model wiring for those APIs.
3. Governance Action details UI for linked survey and tally display.
4. Vote flow support to optionally attach `surveyResponse` metadata (label `17`) to vote transactions.

Behavior decisions aligned with this branch:
- Blank survey answers are allowed; when no answers are provided, vote submission proceeds without `surveyResponse` metadata.
- If survey metadata attachment is requested but wallet context cannot build auxiliary metadata, submission fails explicitly.

## Why
Voting pillar needed parity with GovTool survey-link behavior so consumers of the pillar can:
- discover and render linked surveys for Info Actions,
- display tally outputs,
- and submit survey responses as part of governance vote transactions.

## Backend changes

### New proposal survey endpoints
Added in `backend/src/proposal/proposal.controller.ts`:
- `GET /proposal/survey/:proposalId`
- `GET /proposal/survey/:proposalId/tally?weighting=CredentialBased|StakeBased`

### Proposal service survey implementation
Extended `backend/src/proposal/proposal.service.ts` with:
- proposal id parsing (`<txHash>#<index>`)
- Info Action lifecycle derivation
- survey link resolution and validation
- survey details validation (built-in methods + custom schema integrity checks)
- survey response validation and dedupe
- tally generation with weighting modes

### New SQL files
Added:
- `backend/src/sql/get-proposal-survey-link.sql`
- `backend/src/sql/get-survey-details.sql`
- `backend/src/sql/get-survey-responses.sql`

## Frontend changes

### Survey API integration
Added request + query hooks:
- `frontend/src/services/requests/getProposalSurvey.ts`
- `frontend/src/services/requests/getProposalSurveyTally.ts`
- `frontend/src/hooks/queries/useGetProposalSurveyQuery.ts`
- `frontend/src/hooks/queries/useGetProposalSurveyTallyQuery.ts`

Updated exports and query keys:
- `frontend/src/services/requests/index.ts`
- `frontend/src/hooks/queries/index.ts`
- `frontend/src/consts/queryKeys.ts`

### Survey models
Extended `frontend/src/models/ProposalData.ts` with survey types:
- `SurveyRef`, `SurveyQuestion`, `SurveyDetails`
- `ProposalSurveyResponse`, `ProposalSurveyTallyResponse`

### Governance Action details page
Updated `frontend/src/components/pages/GovernanceActionDetails.tsx` to:
- fetch linked survey for Info Actions,
- show survey validation errors,
- display tally results with weighting toggle.

### Vote flow changes
Updated:
- `frontend/src/components/organisms/VoteActionForm.tsx`
- `frontend/src/hooks/useVoteActionForm.ts`

Behavior:
- Collect survey answers by method type.
- If at least one valid answer exists, attach `surveyResponse` via metadata label `17`.
- If no answers exist, submit normal governance vote without survey metadata.
- Invalid custom JSON answer blocks submission until corrected.

### Context/type compatibility for metadata
Updated:
- `frontend/src/context/pillarContext.tsx`
- `frontend/src/types/global.d.ts`

Added optional typing support for:
- `auxiliaryData` in `buildSignSubmitConwayCertTx`
- `buildMetadataAuxiliaryData(label, payload)` wallet helper

If `buildMetadataAuxiliaryData` is missing while survey metadata is needed, the flow returns a clear error.

## Behavior decisions in this PR
- Blank survey = no survey metadata payload attached.
- Non-empty valid answers = attach survey metadata.
- Missing wallet metadata builder for non-empty survey response = fail explicitly.

## Compatibility and risk
- Existing consumers that only vote without survey metadata remain compatible.
- Survey features require host wallet context to support metadata auxiliary data if responses are included.
- Main risk is runtime integration with host wallet implementations; explicit error paths were added for unsupported metadata builder cases.

## Testing
### What was verified
- Endpoint/query/type/UI wiring inspected end-to-end.
- `git diff --check` clean.

### Not verified in this environment
- Full TypeScript/Nest compile and runtime tests were not executable here due missing local dependencies and restricted network package access.

Recommended checks in CI or host integration app:
1. Load Info Action with linked survey and confirm survey/tally rendering.
2. Submit vote with at least one survey answer and verify metadata attachment.
3. Submit vote with no survey answers and verify vote still succeeds without `surveyResponse` metadata.
4. Validate explicit error path when host wallet context does not provide metadata builder support.
