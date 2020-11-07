const PROD_URL = 'https://api.jotno.net';
const DEV_URL = 'http://staging1.jotno.net/';

export const PRODUCTION: boolean = false;

export default {
  URL: PRODUCTION ? PROD_URL : DEV_URL,
};
