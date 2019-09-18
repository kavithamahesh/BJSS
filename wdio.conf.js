
exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/wd/hub',
    specs: ['./src/test/features/ui/*.feature','./src/test/features/api/*.feature'],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        
        },
    ],
    logLevel: 'trace',
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'https://the-internet.herokuapp.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: [
        'dot',
        'spec',
        // [
        //     'allure',
        //     {
        //         outputDir: './test-report/allure-result/',
        //         disableWebdriverStepsReporting: false,
        //         disableWebdriverScreenshotsReporting: false,
        //     },
        // ],
        // ['timeline', { outputDir: './test-report/timeline' }],
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        require: ['./src/test/steps/*.steps.js'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 60000,
        ignoreUndefinedDefinitions: false,
    },
    services: [
        ['selenium-standalone'],
    ],
    before() {
        browser.setWindowSize(1920, 1080);
    },
};
