import { ActionConfig } from "./types";
import { createReadStream } from "fs";
import FormData from "form-data";
import fetch from "node-fetch";
export const uploadBenchmark = async (config: ActionConfig) => {
  const file = createReadStream(config.file);

  const formData = new FormData();

  formData.append("benchmark", file);
  formData.append("tool", config.tool);
  formData.append("action", config.action);
  formData.append("run_id", config.run_id);
  formData.append("repository", config.repository);
  formData.append("sha", config.sha);
  formData.append("head_ref", config.head_ref);
  formData.append("ref", config.ref);

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
