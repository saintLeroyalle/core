module.exports ={
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "bracketSameLine": true,
  "printWidth": 100,
  "arrowParens": "avoid",
  "importOrder": [
    "<THIRD_PARTY_MODULES>",
    "^@nestjs/(.*)$",
    "^@prisma/(.*)$",
    "^@/(.*)$",
    "^\\.\\./(.*)$",
    "^\\./(.*)$"
  ],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "importOrderCaseInsensitive": true,
  "importOrderParserPlugins": ["classProperties", "decorators-legacy", "typescript"],
  "plugins": ["@trivago/prettier-plugin-sort-imports"]

}