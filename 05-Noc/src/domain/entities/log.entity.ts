export enum LogSeverityLevel {
    low = 'low',
    midium = 'midium',
    high = 'high'
}

export interface LogEntityOptions {
    level: string;
    message: string;
    createdAt?: Date;
    origin: string;
}

export class LogEntity {
    public level: string;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor(options: LogEntityOptions) {

        const { message, level, createdAt = new Date(), origin } = options;
        this.message = message;
        this.level = level;
        this.createdAt = createdAt;
        this.origin = origin;
    }

    static fromJson = (json: string): LogEntity => {

        const { message, level, createdAt } = JSON.parse(json);
        const log = new LogEntity({message, level, createdAt, origin});
        log.createdAt = new Date(createdAt);

        return log;
    }
}