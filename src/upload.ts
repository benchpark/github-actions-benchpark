import { ActionConfig } from "./types";
import { createReadStream, existsSync } from "fs";
import FormData from "form-data";
import fetch from "node-fetch";
import { resolve } from "path";
import { debug } from "@actions/core";
export const uploadBenchmark = async (config: ActionConfig) => {
  if (existsSync(config.file)) {
    //file exists
  }

  const filePath = resolve(__dirname, config.file);
  debug(`uploading benchmark file ${filePath}`);
  const file = createReadStream(filePath);

  const formData = new FormData();

  formData.append("benchmark", file);
  formData.append("tool", config.tool);
  formData.append("commit", process.env.GITHUB_SHA);
  formData.append("branch", process.env.GITHUB_REF);

  // Hack https://github.com/node-fetch/node-fetch/issues/102#issuecomment-209820954
  formData.getLengthSync = null;

  fetch(config.url, {
    method: "POST",
    headers: {
      ...formData.getHeaders(),
      "x-api-key": config.token,
    },
    body: formData,
  });
};
