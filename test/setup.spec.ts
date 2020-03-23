import TestUtils from "./test-utils";

before(function () {
    // Intercept all console.log calls
    console.log = (...data) => TestUtils.appendLogs(data)
});

afterEach(function () {
    TestUtils.clearLogs();
});
