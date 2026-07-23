/**
 * Design-system token guardrail (Phase 1 — DESIGN-SYSTEM.md §1E / §3.1).
 *
 * Intentionally focused: it enforces ONE rule — brand colors must resolve to a
 * token via color-mix(), never a raw hex or rgb()/rgba()/hsl(). It deliberately
 * does NOT extend stylelint-config-standard, because the verbatim-ported, densely
 * packed legacy stylesheets would generate hundreds of purely-stylistic errors
 * that have nothing to do with color discipline and would make the guardrail
 * noise rather than signal.
 *
 * The `overrides` below are a SHRINKING allowlist: each entry exempts a file that
 * still carries sanctioned or not-yet-tokenized literals. Every `TODO(phase-2)`
 * entry should be deleted as Phase 2 tokenizes that file (see §11.4). The two
 * non-TODO entries (globals.css, containers.css) are permanent by design — they
 * are the sanctioned homes for the base-token hexes and the --shadow-* rgba
 * values respectively.
 *
 * @type {import('stylelint').Config}
 */
const HEX_MSG =
  "Raw hex is not allowed — use a design token (var(--color-*)) or color-mix(in oklab, <token> X%, transparent). See DESIGN-SYSTEM.md §3.1.";
const FN_MSG =
  "rgb()/rgba()/hsl() are not allowed for brand colors — use color-mix(in oklab, var(--token) X%, transparent). See DESIGN-SYSTEM.md §3.1.";

export default {
  rules: {
    "color-no-hex": [true, { message: HEX_MSG }],
    "function-disallowed-list": [["rgb", "rgba", "hsl", "hsla"], { message: FN_MSG }],
  },
  overrides: [
    // Permanent — the base-token hex definitions live here (the one sanctioned home for raw hex).
    { files: ["app/globals.css"], rules: { "color-no-hex": null } },
    // Permanent — the three --shadow-* tokens legitimately use rgba (DESIGN-SYSTEM.md §3.5),
    // and the mask-image radial-gradients use functional black stops (mask luminance, not a
    // brand color). Neither is a design-system color decision.
    { files: ["styles/containers.css"], rules: { "color-no-hex": null, "function-disallowed-list": null } },

    // TODO(phase-2): tokenize legacy.css — every sub-page's shared stylesheet (§11.4).
    { files: ["styles/legacy.css"], rules: { "color-no-hex": null, "function-disallowed-list": null } },
    // TODO(phase-2): residual white/black hex + rgba in home.css (§11.4).
    { files: ["styles/home.css"], rules: { "color-no-hex": null, "function-disallowed-list": null } },
    // TODO(phase-2): residual mint-crosshatch / white-alpha rgba (hex already tokenized in Phase 1).
    { files: ["styles/pages.css", "styles/dental.css"], rules: { "function-disallowed-list": null } },
    // TODO(phase-2): nav-panel shadow/background rgba at chrome.css:45-46 (§11.4).
    { files: ["components/site/chrome.css"], rules: { "function-disallowed-list": null } },
  ],
};
