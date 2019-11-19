const { App } = require('@slack/bolt');

const app = new App({
    signingSecret: '',
    token: ''
});

(async () => {
    const port = process.env.port || 3000;
    await app.start(port);
    console.log(`⚡️ Bolt app is running on port ${port}!`);
})();