import environment from 'src/config/environment';

import showIp from './showIp';

const {APP_VERSION, IS_PRODUCTION, SERVER_PORT} = environment;

const IP = showIp()[0];

const {log} = console;

const logWelcome = (): void => {
  log('\n\nđĄī¸ ############################################đĄī¸');
  log('\n\n âšī¸  Server is listening to:\n');

  if (!IS_PRODUCTION) log(`\t đ ${IP}`);

  log(
    `\t đ¨ Build ver: ${APP_VERSION}`,
    `\n\t đŗ ${IS_PRODUCTION ? 'Production' : 'Development'} mode`
  );

  log('\n âšī¸  Server end-points:\n');
  log(`\t âī¸  http://localhost:${SERVER_PORT}/changelog`);
  if (!IS_PRODUCTION) {
    log(`\t âī¸  http://localhost:${SERVER_PORT}/graphql`);
  }

  log('\n\nđĄī¸ ############################################đĄī¸');
};

export default logWelcome;
