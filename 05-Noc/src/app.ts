import { envs } from "./config/plugins/envs.plugin";
import { ServerApp } from "./presentation/server-app";


(async () => {
    await main();
})();

async function main() {

    ServerApp.run();
    // console.log(envs);
}