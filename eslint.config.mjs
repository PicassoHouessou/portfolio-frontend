// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
    ignores: [
        "public/assets/**/*",
        "src/assets/**/*"],
    rules: {
        "vue/multi-word-component-names": "off",
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        "vue/first-attribute-linebreak": "off",
        "no-console": "error",
    },
});
