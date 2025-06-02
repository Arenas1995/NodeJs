import { ServerApp } from "./presentation/server-app";


(async () => {
    await main();
})();

async function main() {

    ServerApp.run();
}