export default class TestUtils {
    private static logs: string[] = [];

    public static getLogs(): string[] {
        return TestUtils.logs;
    }

    public static appendLogs(...data: any[]) {
        TestUtils.logs.push(data[0].join(" "));
    }

    public static clearLogs() {
        TestUtils.logs = [];
    }
}
