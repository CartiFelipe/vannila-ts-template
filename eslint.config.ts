import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended, {
  rules,
} from "eslint-plugin-prettier/recommended";

export default [
  // Configuração base do JavaScript
  js.configs.recommended,

  // Configurações recomendadas do TypeScript ESLint
  ...tseslint.configs.recommended,

  // Configuração para arquivos TypeScript/JavaScript
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },

  // Integração com Prettier (DEVE ser o último)
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": 0,
    },
  },
];
