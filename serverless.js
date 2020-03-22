const {expect} = require('chai');
const axios = require('axios');
const {app} = require('@wix/serverless-testkit');

describe('hello world', () => {

    const scope = 'meow';
    const testkit = app(scope);

    testkit.beforeAndAfter(10000);

    it('should say hello', async () => {
        const result = await axios.get(testkit.getUrl('/say-hi'));
        expect(result.data).to.deep.equal(`Hello! Today is ${new Date().toLocaleDateString("en-US")}`);
    });
});