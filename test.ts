import { handle } from "./dist/server/mod.ts"
const input = {
  streamOutput: {
    "document": {
      "__": {
        "alternateLanguageFields": [
          "slug"
        ],
        "entityPageSet": {
          "plugin": {}
        },
        "name": "product",
        "streamId": "products",
        "templateType": "JS",
      },
      "name": "Product 1",
      "slug": "product-1",
    }
  },
  feature: "product",
}

const req = new Request("http://localhost:8085/")

const res = await handle(input)

console.log(res.content);