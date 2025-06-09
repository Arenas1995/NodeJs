import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repositories/log.repository";

interface CheckServiceUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallBack = () => void;
type ErrorCallBack = (error: string) => void;

export class CheckService implements CheckServiceUseCase {

    constructor(private readonly logRepository: LogRepository,
        private readonly successCallBack: SuccessCallBack, 
        private readonly errorCallBack: ErrorCallBack) {}

    async execute(url: string): Promise<boolean> {

        try {

            const req = await fetch(url);

            if (!req.ok) {
                throw new Error(`Error on check service ${url}`);
            }

            const logs = new LogEntity({
                message: `Service ${url} working`, 
                level: LogSeverityLevel.low,
                origin: 'check-service.usecases.ts'
            });

            this.logRepository.saveLogs(logs);
            this.successCallBack();

            return true;
        } catch (error) {

            const errorMessage = `${url} is not ok. ${error}` ;
            const logs = new LogEntity({
                message: errorMessage, 
                level: LogSeverityLevel.high,
                origin: 'check-sercie.usecases.ts'
            });

            this.logRepository.saveLogs(logs);
            this.errorCallBack(`${error}`);

            return false;
        }
    }
}