module.exports = {
  extends: ["airbnb-typescript-prettier", "plugin:@next/next/recommended"],
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        // allow omitting "import React from 'react'"
        "react/react-in-jsx-scope": "off",
        // allow flexible function component definitions
        "react/function-component-definition": "off",
        // allow use of <></> without restriction
        "react/jsx-no-useless-fragment": "off",
        // allow use of index in list keys
        "react/no-array-index-key": "off",
        // allow prop spreading ({...props})
        "react/jsx-props-no-spreading": "off",
      },
    },
    {
      files: ["*.tsx", "*.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
    // if using storybook, uncomment below to prevent issues
    // {
    //   files: ["*.stories.tsx"],
    //   rules: {
    //     "import/no-extraneous-dependencies": "off",
    //   },
    // },
  ],
};
