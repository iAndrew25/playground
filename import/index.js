const wf = require('./fetch');
wf.setMiddleware(() => console.log('INIT'))
const s = require('./use');
