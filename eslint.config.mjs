import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Design-system scope boundary (DESIGN-SYSTEM.md §2.2 / §4.11): the landing-page-only
  // decorative primitives must never be imported into a category/sub-page. The home page
  // is app/page.tsx (its content lives in components/home/**, outside app/**), so it is
  // exempt; every other page under app/**/*.tsx is a sub-page and is restricted.
  {
    files: ["app/**/*.tsx"],
    ignores: ["app/page.tsx"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "**/StyledContainer",
                "**/SoftAurora",
                "**/ColorBends",
                "**/CardCurveBackground",
                "**/SpeedLatticeBackground",
                "**/TiltParallax",
              ],
              message:
                "Landing-page-only primitive — not allowed on a category/sub-page. See DESIGN-SYSTEM.md §2.2/§4.11.",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
