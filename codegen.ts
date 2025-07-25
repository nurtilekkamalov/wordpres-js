import { CodegenConfig } from "@graphql-codegen/cli";
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
  documents: ["src/**/*.ts", "src/**/*.tsx"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
