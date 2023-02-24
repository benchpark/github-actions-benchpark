import { ActionConfig } from "./types";
import { getInput } from "@actions/core";

export const getConfig = (): ActionConfig => {
  const config: ActionConfig = {
    tool: getInput("tool"),
    url: getInput("url"),
    token: getInput("token"),
    file: getInput("file"),
  };
  return config;
};
