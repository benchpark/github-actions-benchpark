import { ActionConfig } from "./types";
import { getInput } from "@actions/core";
import { resolve } from "path";

export const getConfig = (): ActionConfig => {
  const config: ActionConfig = {
    tool: getInput("tool"),
    url: getInput("url"),
    token: getInput("token"),
    file: resolve(process.env.GITHUB_WORKSPACE, getInput("file")),
  };
  return config;
};
