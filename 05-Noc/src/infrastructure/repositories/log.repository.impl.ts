import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import { LogRepository } from "../../domain/repositories/log.repository";

export class LogRepositoryImpl implements LogRepository {

    private readonly logDaraSource: LogDatasource;

    constructor(logDaraSource: LogDatasource) {
        this.logDaraSource = logDaraSource;
    }

    async saveLogs(log: LogEntity): Promise<void> {
        return this.logDaraSource.saveLogs(log);
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
        return this.logDaraSource.getLogs(severityLevel);
    }

}