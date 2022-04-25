const API = {
  /* auth API Constants */
  LOGIN: 'v1/auth/login',
  USER_METADATA: 'v1/auth/metadata',
  VALIDATE_USER: 'v1/auth/validate',
  REGISTER: 'v1/auth/register',
  FORGOT_PASSWORD: 'v1/auth/forgot-password',
  RESET_PASSWORD: 'v1/auth/reset-password',
  LOGOUT: 'v1/auth/logout',
  USERS: 'v1/users',
  GET_ACCOUNT_BALANCE: '/balance',
  /* Players API Constants */
  TOURNAMENTS_GAMES: 'v1/tournaments/games',
  TEAMS: '/teams',
  /* Tournaments API Constants */
  TOURNAMENTS: 'v1/tournaments',
  TOURNAMENTS_METADATA: 'v1/tournaments/metadata',
  TOURNAMENTS_MY_CONTESTS: 'v1/tournaments/entered-contests',
  ENTRANTS: '/entrants',
  STANDINGS: '/standings',
  RESULTS: 'v1/tournaments/results',
  GAMES: '/games',
  SELECTIONS: '/selections',
  JOIN: '/join',
  PAYOUT: 'v1/payout-structures',
  /* Transactions API Constants */
  TRANSACTIONS: 'v1/transactions',
  GET_WITHDEAWALS: 'v1/transactions/metadata',
};

// TODO pass path as a parameter.
const createParamsURL = (params) => {
  if (params && Object.keys(params).length > 0) {
    return Object.entries(params).reduce((url, [key, value], index) => {
      return url + `${index ? '&' : '?'}${key}=${value}`;
    }, '');
  }
  return '';
};

export {API, createParamsURL};
