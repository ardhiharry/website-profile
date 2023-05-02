import Home from '../../index.js';

const homepage = {
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    const home = Home;
    return h.response(home).type('text/html');

  }
}

export default homepage;