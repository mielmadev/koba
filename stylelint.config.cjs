module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-order", "stylelint-selector-bem-pattern"],
  rules: {
    // Orden recomendado para propiedades CSS/SCSS
    "order/properties-order": [
      [
        // Posicionamiento
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",
        // Caja modelo
        "display",
        "flex",
        "flex-direction",
        "flex-wrap",
        "flex-flow",
        "justify-content",
        "align-items",
        "align-content",
        "order",
        "float",
        "clear",
        "box-sizing",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        // Bordes
        "border",
        "border-width",
        "border-style",
        "border-color",
        "border-radius",
        // Fondo
        "background",
        "background-color",
        "background-image",
        "background-position",
        "background-size",
        "background-repeat",
        "background-origin",
        "background-clip",
        "background-attachment",
        // Tipografía
        "color",
        "font",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "font-size-adjust",
        "font-stretch",
        "font-effect",
        "font-emphasize",
        "font-emphasize-position",
        "font-emphasize-style",
        "font-smooth",
        "line-height",
        "direction",
        "letter-spacing",
        "white-space",
        "text-align",
        "text-align-last",
        "text-transform",
        "text-decoration",
        "text-emphasis",
        "text-emphasis-color",
        "text-emphasis-style",
        "text-emphasis-position",
        "text-indent",
        "text-justify",
        "text-outline",
        "text-wrap",
        "text-overflow",
        "text-overflow-ellipsis",
        "text-overflow-mode",
        "text-shadow",
        "vertical-align",
        "word-spacing",
        "word-wrap",
        "word-break",
        "tab-size",
        "hyphens",
        // Otros
        "opacity",
        "visibility",
        "overflow",
        "overflow-x",
        "overflow-y",
        "cursor",
        "pointer-events",
        "user-select",
        // Animaciones y transiciones
        "transition",
        "transition-delay",
        "transition-timing-function",
        "transition-duration",
        "transition-property",
        "transform",
        "animation",
        "animation-name",
        "animation-duration",
        "animation-play-state",
        "animation-timing-function",
        "animation-delay",
        "animation-iteration-count",
        "animation-direction"
      ],
      { unspecified: "bottomAlphabetical" }
    ],
    // Ordenar mixins SCSS generales y mixins *-bp después de las declaraciones CSS (mejor práctica)
    "order/order": [
      [
        "custom-properties",
        "dollar-variables",
        "declarations",
        {
          type: "at-rule",
          name: "include",
          hasBlock: false,
          parameter: "/^(?!.*-bp).*/"
        },
        {
          type: "at-rule",
          name: "include",
          hasBlock: false,
          parameter: "/.*-bp/"
        },
        {
          type: "at-rule",
          name: "media"
        },
        "rules"
      ]
    ],
    // BEM pattern para selectores
    "plugin/selector-bem-pattern": {
      "preset": "bem",
      "componentName": "[A-Z][a-zA-Z0-9]+", // Bloques en PascalCase o puedes cambiar a kebab-case
      "componentSelectors": {
        "initial": "^\.{componentName}(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$"
      }
    }
  }
}
