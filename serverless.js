module.exports = (functionsBuilder) =>
    functionsBuilder
        .addWebFunction('GET', '/say-hay', async () => {
            return `Hello! Today, ${new Date().toLocaleDateString("en-US")}`;
        });