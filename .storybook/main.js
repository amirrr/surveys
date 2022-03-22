module.exports = {
  "stories": [
    "../src/*.stories.mdx",
    "../src/*.stories.@(js|jsx|ts|tsx)",
    "../src/surveys/*.stories.@(mdx|js|jsx|ts|tsx)",
    "../surveys/*.stories.mdx",
    "../surveys/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}