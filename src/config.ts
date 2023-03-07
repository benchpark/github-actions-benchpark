import { ActionConfig } from "./types";
import { getInput } from "@actions/core";
import { resolve } from "path";

export const getConfig = (): ActionConfig => {
  const config: ActionConfig = {
    tool: getInput("tool"),
    url: getInput("url"),
    token: getInput("token"),
    // process.env.GITHUB_WORKSPACE
    file: resolve(process.cwd(), getInput("file")),
    action: process.env.GITHUB_ACTION,
    run_id: process.env.GITHUB_RUN_ID,
    ref: process.env.GITHUB_REF,
    repository: process.env.GITHUB_REPOSITORY,
    sha: process.env.GITHUB_SHA,
    head_ref: process.env.GITHUB_HEAD_REF || "",
  };
  return config;
};
