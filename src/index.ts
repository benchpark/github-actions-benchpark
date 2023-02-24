import { debug, info, setFailed } from "@actions/core";
import { getConfig } from "./config";
import { uploadBenchmark } from "./upload";

async function main() {
  const config = getConfig();
  debug(`Config: url=${config.url}, tool=${config.tool}, file=${config.file}`);

  await uploadBenchmark(config);
  info("Benchmark successfully uploaded!");
}

main().catch((e) => setFailed(e.message));
