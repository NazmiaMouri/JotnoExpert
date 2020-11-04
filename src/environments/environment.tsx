const PROD_URL = 'https://api.jotno.net';
const DEV_URL = 'http://103.218.25.166:9999';

export const PRODUCTION: boolean = false;

export default {
  URL: PRODUCTION ? PROD_URL : DEV_URL,
};
