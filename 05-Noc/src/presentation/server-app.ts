import { CheckService } from "../domain/use-cases/checks/check-service.usecase";
import { CronService } from "./cron/cron-service";

export class ServerApp {
    static run() {
        console.log('Server running...');

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com';
                new CheckService(
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error)
                ).execute(url);
                // new CheckService().execute('http://localhost:3000/posts');
            }
        );
    }
}