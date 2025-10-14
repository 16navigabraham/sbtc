import { TurnkeyClient } from '@turnkey/http';

export const turnkeyConfig = {
  apiBaseUrl: import.meta.env.VITE_TURNKEY_API_BASE_URL,
  organizationId: import.meta.env.VITE_TURNKEY_ORGANIZATION_ID,
};

export const createTurnkeyClient = () => {
  return new TurnkeyClient(turnkeyConfig);
};