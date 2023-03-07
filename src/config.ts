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
    env: {
      GITHUB_ACTION: process.env.GITHUB_ACTION,
      GITHUB_RUN_ID: process.env.GITHUB_RUN_ID,
      GITHUB_REF: process.env.GITHUB_REF,
      GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY,
      GITHUB_SHA: process.env.GITHUB_SHA,
      GITHUB_HEAD_REF: process.env.GITHUB_HEAD_REF || "",
    },
  };
  return config;
};
