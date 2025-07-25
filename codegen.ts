import { CodegenConfig } from "@graphql-codegen/cli";
const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: https://worldnomad.iprofiit.pro/graphql
  documents: ["src/**/*.tsx", "src/**/*.ts"], // <--- ВОТ ВАЖНОЕ ИЗМЕНЕНИЕ
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
