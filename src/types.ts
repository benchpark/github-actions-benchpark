export interface ActionConfig {
  tool: string;
  url: string;
  token: string;
  file: string;
  env: {
    GITHUB_ACTION: string;
    GITHUB_RUN_ID: string;
    GITHUB_REF: string;
    GITHUB_REPOSITORY: string;
    GITHUB_SHA: string;
    GITHUB_HEAD_REF: string;
  };
}
