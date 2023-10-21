import { handle } from "./dist/server/mod.ts"
const input = {
  "feature": "product",
  "site": {
      "branchId": "12302",
      "businessId": "3249768",
      "businessName": "Astro Adapter",
      "commitHash": "4d411790768f13fe41f7e6e1e3798ed6f1b3cac4",
      "commitMessage": "remove shim banner using Deno global",
      "deployId": "ifpzihzde6",
      "platformUrl": "https://sandbox.yext.com/s/3249768/yextsites/156511/branch/12302/deploy/ifpzihzde6/details",
      "previewDomain": "https://ifpzihzde6-156511-d.sbx.preview.pagescdn.com",
      "productionDomain": "wondrous-eligible-lamb.sbx.pgsdemo.com",
      "repoBranchName": "debug",
      "repoBranchUrl": "https://github.com/bhainesva/astro-adapter/tree/debug",
      "repoUrl": "https://github.com/bhainesva/astro-adapter",
      "siteId": "156511",
      "siteName": "Astro Adapter",
      "stagingDomain": "debug-wondrous--eligible--lamb-sbx-pgsdemo-com.sbx.preview.pagescdn.com",
      "yextUniverse": "sandbox"
  },
  "streamOutput": {
      "__": {
          "entityPageSet": {
              "plugin": {}
          },
          "name": "product",
          "streamId": "products",
          "templateType": "JS"
      },
      "businessId": 3249768,
      "id": "4166194465884960950",
      "locale": "en",
      "meta": {
          "entityType": {
              "id": "product",
              "uid": 30000
          },
          "locale": "en"
      },
      "name": "Cool Hat",
      "primaryPhoto": {
          "image": {
              "height": 1636,
              "url": "https://a.mktgcdn.com/p-sandbox/efHm740cSBq3mK40oN0VkhCP2WiO_s9UrokYGATtsm0/1654x1636.jpg",
              "width": 1654
          }
      },
      "richTextDescriptionV2": {
          "json": {
              "root": {
                  "children": [
                      {
                          "children": [
                              {
                                  "detail": 0,
                                  "format": 0,
                                  "mode": "normal",
                                  "style": "",
                                  "text": "Busey  ipsum dolor sit amet. The best way to communicate is compatible.  Compatible communication is listening with open ears and an open mind,  and not being fearful or judgemental about what you're hearing.I would  like to give you a backstage pass to my imagination.The magic Indian is a  mysterious spiritual force, and we're going to Cathedral Rock, and  that's the vortex of the heart. ",
                                  "type": "text",
                                  "version": 1
                              },
                              {
                                  "type": "linebreak",
                                  "version": 1
                              },
                              {
                                  "type": "linebreak",
                                  "version": 1
                              },
                              {
                                  "detail": 0,
                                  "format": 0,
                                  "mode": "normal",
                                  "style": "",
                                  "text": " You gotta go through it to see  there ain't nothing to it.I would like to give you a backstage pass to  my imagination.The best way to communicate is compatible. Compatible  communication is listening with open ears and an open mind, and not  being fearful or judgemental about what you're hearing. ",
                                  "type": "text",
                                  "version": 1
                              },
                              {
                                  "type": "linebreak",
                                  "version": 1
                              },
                              {
                                  "type": "linebreak",
                                  "version": 1
                              },
                              {
                                  "detail": 0,
                                  "format": 0,
                                  "mode": "normal",
                                  "style": "",
                                  "text": " Listen  to the silence. And when the silence is deafening, you're in the center  of your own universe.I wrestled a bear once. A 750lbs black bear.Go with  the feeling of the nature. Take it easy. Know why you're here. And  remember to balance your internal energy with the environment. ",
                                  "type": "text",
                                  "version": 1
                              },
                              {
                                  "type": "linebreak",
                                  "version": 1
                              },
                              {
                                  "type": "linebreak",
                                  "version": 1
                              },
                              {
                                  "detail": 0,
                                  "format": 0,
                                  "mode": "normal",
                                  "style": "",
                                  "text": " ",
                                  "type": "text",
                                  "version": 1
                              }
                          ],
                          "direction": "ltr",
                          "format": "",
                          "indent": 0,
                          "type": "paragraph",
                          "version": 1
                      }
                  ],
                  "direction": "ltr",
                  "format": "",
                  "indent": 0,
                  "type": "root",
                  "version": 1
              }
          }
      },
      "siteDomain": "",
      "siteId": 156511,
      "siteInternalHostName": "",
      "slug": "1-cool-hat",
      "uid": 48632894
  }
}

const req = new Request("http://localhost:8085/")

const res = await handle(input)

console.log(res.content);