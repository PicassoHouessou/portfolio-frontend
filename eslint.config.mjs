// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
    rules: {
        //'@typescript-eslint/explicit-module-boundary-types': 'off',
        //'@typescript-eslint/dot-notation': 'off',
        //'@typescript-eslint/no-explicit-any': 'off',
        //'@typescript-eslint/ban-ts-comment': 'off',
        "no-console": "error",
    },
});
