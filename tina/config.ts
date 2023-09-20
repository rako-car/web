import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: ".",
    },
  },
  schema: {
    collections: [
      {
        name: "services",
        label: "Serwisy",
        path: "_services",
        format: 'md',
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
            indexed: true,
          },
          {
            type: "number",
            name: "weight",
            label: "Kolejność wyświetlania",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
