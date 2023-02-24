import { HttpClient } from "@actions/http-client";
import { ActionConfig } from "./types";
import { createReadStream } from "fs";
import FormData from "form-data";

export const uploadBenchmark = async (config: ActionConfig) => {
  const client = new HttpClient("github-actions");

  const formData = new FormData();
  formData.append("benchmark", createReadStream(config.file));
  formData.append("tool", config.tool);
  formData.append("commit", process.env.GITHUB_SHA);
  formData.append("branch", process.env.GITHUB_REF);

  client.post(config.url, "", {
    ...formData.getHeaders(),
    "Content-Length": formData.getLengthSync(),
    "x-api-key": config.token,
  });
};
