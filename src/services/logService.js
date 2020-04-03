import * as Sentry from '@sentry/browser';

function init() {
  Sentry.init({ dsn: 'https://d0ceff7dfcd24286a59cda79d91f4752@sentry.io/5186000' });
}

function log(error) {
  Sentry.captureException(error);
  console.error(error);
}

export default {
  init,
  log
};
