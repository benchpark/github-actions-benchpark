import { debug, info, setFailed } from "@actions/core";
import { existsSync } from "fs";
import { getConfig } from "./config";
import { uploadBenchmark } from "./upload";

async function main() {
  const config = getConfig();
  debug(`Config: url=${config.url}, tool=${config.tool}, file=${config.file}`);

  if (!config.url) {
    setFailed("No URL provided");
    return;
  }
  if (!config.tool) {
    setFailed("No tool provided");
    return;
  }
  if (!config.file) {
    setFailed("No file provided");
    return;
  }
  if (!config.token) {
    setFailed("No token provided");
    return;
  }
  if (!existsSync(config.file)) {
    setFailed(`File ${config.file} does not exist`);
    return;
  }

  await uploadBenchmark(config);
  info("Benchmark successfully uploaded!");
}

main().catch((e) => setFailed(e.message));
