/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 158: 
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      /* harmony export */      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */      });
      /* harmony import */      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */      var _node_modules_css_loader_dist_cjs_js_themes_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(520);
      // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
      ___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_css__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */ .Z);
      // Module
            ___CSS_LOADER_EXPORT___.push([ module.id, "@charset \"UTF-8\";\n\n*:lang(en),\n*:lang(fr),\n*:lang(es) {\n  /* Meiryo renders more crisply than Arial on Windows */\n  font-family: Meiryo, sans-serif;\n}\n\n:host {\n  /*\n   * The following is because there appears to be some (yet unidentified) add-on\n   * that sets `position: absolute` on various div elements. As a result, our\n   * popup will end up being positioned at the very end of the page unless we\n   * ensure we set left/top ourselves.\n   *\n   * See: https://github.com/birchill/10ten-ja-reader/issues/947\n   */\n  position: revert !important;\n\n  /*\n   * However, supposing our rule above loses out to the interfering add-on?\n   *\n   * Assuming said add-on sets `position: absolute` on the popup we can make it\n   * work for us by setting the left/top/bottom/right properties.\n   */\n  position: absolute !important;\n  left: 0 !important;\n  top: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  pointer-events: none !important;\n\n  /*\n   * It's conceivable add-ons might interfere with our z-index too so make sure\n   * that's covered.\n   */\n  z-index: 2147483647 !important;\n}\n\n.container {\n  position: absolute;\n  left: var(--left, auto);\n  top: var(--top, auto);\n\n  /*\n   * Use the empirical maximum z-index since some sites (e.g. TimeTree) use this\n   * for their popups.\n   */\n  z-index: 2147483647;\n\n  /* Make sure the drop shadow on the window doesn't get cut off */\n  padding-right: 4px;\n  padding-bottom: 4px;\n\n  overflow-y: visible;\n  pointer-events: all;\n}\n\n.container:not(.interactive) {\n  pointer-events: none;\n}\n\n/*\n * Variation on the interactive container when it is not yet actually\n * interactive.\n */\n.container.interactive.ghost {\n  pointer-events: none;\n}\n\n.container.interactive.ghost .window {\n  border-style: dashed;\n}\n\n.container.hidden {\n  display: none;\n}\n\n.-inline > .container {\n  position: revert;\n  z-index: revert;\n  pointer-events: revert;\n}\n\n/*\n * When the popup is interactive we make the window scrollable, but for\n * non-interactive cases we just fade it out.\n *\n * To make the window scrollable we need to set the max-height on the\n * window itself.\n *\n * For the fade-effect, however, we set the max-height and fade effect\n * on the container so that the mask doesn't end up clipping the drop shadow\n * on the popup.\n */\n.container.interactive .window {\n  max-height: var(--max-height, none);\n}\n\n.container:not(.interactive) {\n  max-height: var(--max-height, none);\n  -webkit-mask-image: linear-gradient(\n    to bottom,\n    black calc(var(--max-height) - 5px),\n    transparent\n  );\n  mask-image: linear-gradient(\n    to bottom,\n    black calc(var(--max-height) - 5px),\n    transparent\n  );\n}\n\n.container .window {\n  min-height: var(--min-height, none);\n}\n\n.window {\n  max-width: var(--max-width, 600px);\n  max-width: var(--max-width, min(600px, calc(100vw - 30px)));\n\n  contain: content;\n  border-radius: 5px;\n  box-shadow: 0px 0.5px 0.5px rgba(100, 100, 100, 0.15),\n    1px 2px 1px rgba(100, 100, 100, 0.15), 2px 4px 8px rgba(100, 100, 100, 0.15);\n  font: normal 14px sans-serif;\n\n  color: var(--text-color);\n  background: var(--bg-color);\n  border: 1px solid var(--border-color);\n}\n\n/* When the tabs are shown on top, make the window have a consistent width\n   so the tabs don't jump around. */\n.window[data-tab-side='top'] {\n  display: flex;\n  max-width: none;\n  /* Fallback for the below */\n  width: 500px;\n  /* The 30px here is to accommodate scrollbars on Windows plus a bit of\n     padding. */\n  width: min(500px, calc(100vw - 30px));\n}\n\n.container:not(.hidden) .window {\n  display: flex;\n  flex-direction: column;\n}\n\n.container.interactive .content {\n  overflow: auto;\n  overscroll-behavior: contain;\n}\n\n@supports (scrollbar-width: thin) {\n  .window .content {\n    scrollbar-width: thin;\n    scrollbar-color: var(--scrollbar-fg) var(--scrollbar-bg);\n  }\n}\n\n@supports not (scrollbar-width: thin) {\n  .window .content::-webkit-scrollbar {\n    width: 5px;\n    background-color: var(--scrollbar-bg);\n  }\n\n  .window .content::-webkit-scrollbar-thumb {\n    background-color: var(--scrollbar-fg);\n  }\n}\n\n.window .status-bar-wrapper {\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.window .status-bar-wrapper > :first-child {\n  flex-grow: 1;\n}\n\n.window .status-bar-wrapper > .status-bar {\n  flex-shrink: 0;\n}\n\n.window .content {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.window .content > :first-child {\n  flex-grow: 1;\n}\n\n/* Tab bar */\n\n.tab-bar {\n  flex-shrink: 0;\n\n  display: flex;\n  padding: 0;\n  margin: 0;\n  /* Safari appears to need the following */\n  overflow: hidden;\n\n  background: var(--cell-highlight-bg);\n  color: var(--cell-highlight-fg);\n\n  /* Make sure we are above the content area. This is mostly needed when we are\n   * showing the copy overlay since the entry data might overflow its region in\n   * that case. */\n  z-index: 1;\n}\n\n.tabs {\n  flex-grow: 1;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n\n.tabs .tab {\n  flex-grow: 1;\n  list-style: none;\n  font-size: 0.8em;\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.container.interactive .tabs .tab {\n  font-size: 1em;\n}\n\n.tabs .tab button {\n  /* Reset button styles */\n  -webkit-appearance: none;\n  appearance: none;\n  background: transparent;\n  margin: 0;\n  border: 0;\n  font: inherit;\n  color: inherit;\n  cursor: pointer;\n\n  opacity: 0.7;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 0.5em 18px;\n  line-height: 1;\n  text-decoration: none;\n}\n\n@media (max-width: 400px) {\n  .window[data-tab-side='top'] .tabs .tab button span:lang(en) {\n    font-size: 0.7em;\n  }\n}\n\n@media (max-width: 350px) {\n  .window[data-tab-side='top'] .tabs .tab {\n    flex-grow: 0;\n  }\n  .window[data-tab-side='top'] .tabs .tab button span {\n    display: none;\n  }\n  .window[data-tab-side='top'] .tabs .tab button .icon {\n    margin-right: 0px;\n  }\n}\n\n.container.interactive .tabs .tab button {\n  padding: 0.7em 18px;\n}\n\n.tabs .tab button .icon {\n  display: block;\n  width: 12px;\n  height: 12px;\n  margin-right: 5px;\n  /* Push the icon up a little so it looks more aligned with the text */\n  margin-bottom: 1px;\n  fill: currentcolor;\n}\n\n.container.interactive .tabs .tab button .icon {\n  width: 14px;\n  height: 14px;\n}\n\n.tabs .tab[aria-selected] {\n  background: var(--bg-color);\n}\n\n.tabs .tab[aria-selected] button {\n  color: var(--text-color);\n}\n\n.tabs .tab:not([aria-selected]) button {\n  opacity: 0.8;\n  color: var(--cell-highlight-fg);\n}\n\n.tabs .tab:not([aria-selected]):hover {\n  filter: brightness(1.1);\n}\n\n.tabs .tab:not([aria-selected]):hover button {\n  opacity: 1;\n}\n\n.tabs .tab.disabled {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.container:not(.interactive) .settings,\n.container:not(.interactive) .pin,\n.container:not(.interactive) .close {\n  display: none;\n}\n\n.tab-bar .settings,\n.tab-bar .pin,\n.tab-bar .close {\n  flex-shrink: 0;\n  align-self: center;\n  margin: 2px;\n}\n\n.window .close-button-wrapper {\n  flex-grow: 1;\n\n  display: flex;\n  overflow: auto;\n}\n\n.window .close-button-wrapper .close {\n  z-index: 1;\n  flex: 0 0 auto;\n  margin: 4px;\n  /* Drop margin since the meta element should have sufficient padding */\n  margin-left: 0px;\n}\n\n/*\n * The following uses .close .close-button because we have two configurations:\n * a) The close button is a child of the tab bar\n * b) The close button is a child of the close-button-wrapper\n */\n.settings-button,\n.pin-button,\n.close .close-button {\n  appearance: none;\n  border: none;\n  line-height: 1;\n  padding: 6px;\n  border-radius: 20px;\n  color: var(--text-color);\n}\n\n.settings-button,\n.pin-button {\n  cursor: pointer;\n  background: transparent;\n}\n\n.settings-button:hover,\n.pin-button:hover,\n.close .close-button {\n  background: var(--bg-color);\n}\n\n.settings-button:hover,\n.pin-button:hover,\n.close .close-button:hover {\n  filter: brightness(1.1);\n}\n\n.settings-button svg,\n.pin-button svg,\n.close .close-button svg {\n  display: block;\n  width: 15px;\n  height: 15px;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  stroke-opacity: 0.7;\n  fill-opacity: 0.7;\n  fill: none;\n}\n\n.settings-button svg,\n.pin-button svg {\n  stroke-width: 2px;\n}\n\n.close .close-button svg {\n  stroke-width: 5px;\n}\n\n.settings-button:hover svg,\n.pin-button:hover svg,\n.close .close-button:hover svg {\n  stroke-opacity: 1;\n  fill-opacity: 1;\n}\n\n.container.pinned .pin-button svg path {\n  fill: currentColor;\n}\n\n/* Tab bar on the side */\n\n.container:not(.hidden) .window[data-tab-side='left'],\n.container:not(.hidden) .window[data-tab-side='right'] {\n  display: flex;\n  flex-direction: row;\n}\n\n.container .window[data-tab-side='left'] .tab-bar,\n.container .window[data-tab-side='right'] .tab-bar {\n  flex-direction: column;\n  overflow: visible;\n}\n\n.container .window[data-tab-side='right'] .tab-bar {\n  order: 1;\n}\n\n.container .window[data-tab-side='left'] .tab-bar .tabs,\n.container .window[data-tab-side='right'] .tab-bar .tabs {\n  display: flex;\n  flex-direction: column;\n}\n\n.container .window[data-tab-side='left'] .tab-bar .settings,\n.container .window[data-tab-side='right'] .tab-bar .settings {\n  margin-bottom: 0.5em;\n}\n\n.container .window[data-tab-side='top'] .tab-bar .close {\n  margin-left: 1em;\n}\n\n.container .window[data-tab-side='left'] .tab-bar .close,\n.container .window[data-tab-side='right'] .tab-bar .close {\n  order: -1;\n  margin-top: 0.5em;\n  margin-bottom: 1em;\n}\n\n.container .window[data-tab-side='left'] .tabs .tab,\n.container .window[data-tab-side='right'] .tabs .tab {\n  flex-grow: 0;\n}\n\n.container .window[data-tab-side='left'] .tabs .tab button,\n.container .window[data-tab-side='right'] .tabs .tab button {\n  padding: 0.7em;\n}\n\n.container .window[data-tab-side='left'] .tabs .tab button svg,\n.container .window[data-tab-side='right'] .tabs .tab button svg {\n  margin: 0;\n}\n\n.container .window[data-tab-side='left'] .tabs .tab button span,\n.container .window[data-tab-side='right'] .tabs .tab button span {\n  display: none;\n}\n\n/* Word display */\n\n.wordlist {\n  display: flex;\n  flex-direction: column;\n}\n\n.entry,\n.more {\n  margin-top: 3px;\n  margin-bottom: 3px;\n  padding: 4px 14px;\n}\n\n.wordlist > .entry:first-child {\n  margin-top: 8px;\n}\n\n.wordlist > .entry:last-child {\n  margin-bottom: 8px;\n}\n\n.entry,\n.entry * {\n  line-height: 1.3;\n}\n\n.w-kanji {\n  font-size: 18px;\n  margin-right: 0.7em;\n  color: var(--primary-highlight);\n}\n\n.w-kanji .dimmed,\n.w-kanji .separator,\n.w-kana .dimmed,\n.w-kana .separator {\n  opacity: 0.6;\n}\n\n.w-kana {\n  font-size: 18px;\n  margin-right: 0.3em;\n}\n\n.w-kana > .w-heiban {\n  border-top: 1.5px dotted currentcolor !important;\n}\n\n.w-kana > .w-binary {\n  /* Add a gap below so the border doesn't overlap with the definition */\n  display: inline-block;\n  margin-bottom: 0.2em;\n}\n\n.w-kana > .w-binary > * {\n  /* Drop gaps between borders */\n  margin: 0;\n  /* Make room for the borders\n   * (and to compensate for the extra margin we added to the wrapper above) */\n  font-size: 90%;\n  border: 0 dotted currentcolor;\n  --border-width: 1.5px;\n}\n\n.w-kana > .w-binary.-hi-contrast > * {\n  border-color: var(--hi-contrast-pitch-accent);\n  --border-width: 2px;\n}\n\n.w-kana > .w-binary > .h-l {\n  border-top-width: var(--border-width);\n  border-right-width: var(--border-width);\n}\n\n.w-kana > .w-binary > .l-h {\n  border-bottom-width: var(--border-width);\n  border-right-width: var(--border-width);\n}\n\n.w-kana > .w-binary > .h {\n  border-top-width: var(--border-width);\n}\n\n.w-kana > .w-binary > .l {\n  border-bottom-width: var(--border-width);\n}\n\n.w-romaji {\n  font-size: 14px;\n  margin-right: 0.3em;\n}\n\n.w-kana + .w-romaji {\n  margin-left: 0.3em;\n}\n\n.w-kana,\n.w-romaji {\n  color: var(--reading-highlight);\n}\n\n.w-kanji .w-head-info,\n.w-kana .w-head-info {\n  margin-left: 0.3em;\n  font-size: 10px;\n}\n\n.w-kanji .svgicon,\n.w-kana .svgicon {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin-left: 3px;\n  margin-right: 3px;\n  fill: currentcolor;\n}\n\n.w-kanji .svgicon path,\n.w-kana .svgicon path {\n  fill: currentcolor;\n}\n\n.w-conj {\n  font-size: 12px;\n  color: var(--conj-color);\n}\n\n.w-def {\n  font-size: 13px;\n}\n\n.w-def .w-inf {\n  font-size: 12px;\n}\n\n/* Give group headings a bit more space. They typically consist of a series of\n * which can easily look cramped when there are tags on the line above or below\n * it. */\n.w-def .w-group-head {\n  margin-top: 2px;\n  margin-bottom: 3px;\n}\n\n/* Especially when we have group headings amongst other definitions, we want a\n * bit more vertical space before they start. */\n.w-def ol + .w-group-head {\n  margin-top: 6px;\n}\n\n.w-def ul {\n  padding-left: 1.5em;\n  margin: 0;\n}\n\n/* Add a little breathing space between native language definitions and\n * subsequent English definitions. */\n.w-def ul + .w-group-head,\n.w-def ul + ol {\n  margin-top: 6px;\n}\n\n.w-def ol {\n  padding-left: 1.5em;\n  list-style-type: decimal !important;\n  margin: 0;\n}\n\n.w-def ol li {\n  list-style-type: decimal !important;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.w-def ul li {\n  list-style-type: circle !important;\n  font-size: 13px;\n  line-height: 1.5;\n}\n\n.w-def.foreign,\n.w-def .foreign {\n  opacity: 0.85;\n}\n\n.w-def .w-type {\n  font-size: 12px;\n}\n\n.w-def .tag {\n  font-size: 10px;\n  border: 1px solid var(--tag-border) !important;\n  border-radius: 3px;\n  margin-left: 0.5em;\n  padding: 0px 3px;\n  white-space: nowrap;\n}\n\n.w-def .tag-fem {\n  background: var(--tag-pink);\n}\n\n.w-def .tag-masc {\n  background: var(--tag-blue);\n}\n\n.w-def .tag-place {\n  background: var(--tag-green);\n}\n\n.w-def .w-field {\n  background: var(--tag-green);\n}\n\n.w-def .w-misc {\n  background: var(--tag-blue);\n}\n\n.w-def .w-dial {\n  background: var(--tag-pink);\n}\n\n.w-def .w-pos,\n.w-def .w-field,\n.w-def .w-misc,\n.w-def .w-dial {\n  margin-left: 0em;\n  margin-right: 0.5em;\n}\n\n.w-def .w-lsrc,\n.w-def .w-lsrc * {\n  font-size: 12px;\n}\n\n.window:not(.-has-overlay) .entry.-selected {\n  color: var(--selected-highlight);\n  background: var(--selected-bg);\n  border-radius: 2px;\n}\n\n@media (hover) {\n  .container.interactive .entry:not(:hover) {\n    transition: background-color 0.08s ease-out;\n  }\n  .container.interactive .entry:hover {\n    color: var(--selected-highlight);\n    background: var(--hover-bg);\n    border-radius: 2px;\n    cursor: pointer;\n  }\n  .container.interactive .entry.-selected:hover {\n    background: var(--selected-bg);\n  }\n}\n\n.window .entry.-selected .w-def .tag {\n  color: var(--selected-tag-color);\n  border-color: var(--selected-tag-border) !important;\n}\n\n@media (hover) {\n  .container.interactive .entry:hover .w-def .tag {\n    color: var(--selected-tag-color);\n    border-color: var(--selected-tag-border) !important;\n  }\n}\n\n.window .entry.-selected .w-kanji {\n  color: var(--selected-highlight);\n}\n\n@media (hover) {\n  .container.interactive .entry:hover .w-kanji {\n    color: var(--selected-highlight);\n  }\n}\n\n.window .entry.-selected .w-kana,\n.window .entry.-selected .w-romaji {\n  color: var(--selected-reading-highlight);\n}\n\n@media (hover) {\n  .container.interactive .entry:hover .w-kana,\n  .container.interactive .entry:hover .w-romaji {\n    color: var(--selected-reading-highlight);\n  }\n}\n\n.window .entry.-selected .w-def,\n.window .entry.-selected .w-def * {\n  color: var(--selected-def-color);\n}\n\n@media (hover) {\n  .container.interactive .entry:hover .w-def,\n  .container.interactive .entry:hover .w-def * {\n    color: var(--selected-def-color);\n  }\n}\n\n.window .entry.-selected .w-conj {\n  color: var(--selected-conj-color);\n}\n\n@media (hover) {\n  .container.interactive .entry:hover .w-conj {\n    color: var(--selected-conj-color);\n  }\n}\n\n.window .entry.-flash {\n  animation: tenten-ja-flash 0.5s;\n}\n\n@keyframes tenten-ja-flash {\n  from {\n    background: white;\n    color: white;\n  }\n}\n\n.title {\n  background: var(--title-bg);\n  color: var(--title-fg);\n  font-size: 10px;\n  padding: 10px 14px 6px;\n  border-radius: 5px 5px 0 0;\n  margin-bottom: 3px;\n}\n\n.name-table {\n  padding-bottom: 6px;\n  margin-top: 8px;\n}\n\n.name-table.-multicol {\n  column-count: 2;\n  column-gap: 1em;\n}\n\n.name-table.-multicol .entry {\n  /* Avoid column breaks within an entry */\n  page-break-inside: avoid;\n  break-inside: avoid;\n}\n\n.name-table.-multicol .meta {\n  column-span: all;\n}\n\n.name-table .entry {\n  /*\n   * Something goes funny with the margins in multicol so that the entries\n   * no longer line up.\n   */\n  margin-top: 0;\n}\n\n.name-table .w-def div {\n  margin-bottom: 2px;\n}\n\n/* Kanji display */\n\n.kanji-table {\n  padding: 10px 18px;\n}\n\n/* kanji: top part of the kanji table */\n\n.kanji-table .top-part {\n  display: flex;\n  margin-bottom: 12px;\n}\n\n.kanji-table .top-part > *:nth-child(2) {\n  flex-grow: 1;\n}\n\n/* kanji: character itself */\n\n.kanji-table .kanji {\n  color: var(--primary-highlight);\n  line-height: 1;\n  font-size: 60px;\n  font-family: serif;\n  text-align: center;\n  margin-inline-end: 20px;\n  padding-top: 0.1em;\n  text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 4px;\n}\n\n@media (hover) {\n  .container.interactive .kanji:not(:hover) {\n    transition: background-color 0.1s ease-out;\n  }\n  .container.interactive .kanji:hover {\n    color: var(--selected-highlight);\n    background: var(--hover-bg);\n    border-radius: 2px;\n    cursor: pointer;\n  }\n}\n\n.window:not(.-has-overlay).-copy-active .kanji-table .kanji {\n  color: var(--selected-highlight);\n  background: var(--selected-bg);\n  border-radius: 2px;\n}\n\n.window:not(.-has-overlay).-copy-finished .kanji-table .kanji,\n.window:not(.-has-overlay).-copy-error .kanji-table .kanji {\n  animation: tenten-ja-flash 0.5s;\n}\n\n/* kanji: readings */\n\n.kanji-table .readings {\n  color: var(--reading-highlight);\n  font-size: 14px;\n  margin-top: 4px;\n  margin-bottom: 10px;\n}\n\n.kanji-table .okurigana {\n  color: var(--okurigana-color);\n}\n\n.kanji-table .nanorilabel {\n  color: var(--reading-label);\n  font-size: 11px;\n}\n\n/* kanji: meta */\n\n.kanji-table .meta {\n  margin-left: -5px;\n  margin-bottom: 4px;\n}\n\n.kanji-table .meta .tag {\n  font-size: 12px;\n  border: 1px solid currentcolor !important;\n  border-radius: 3px;\n  padding: 2px;\n  margin: 2px;\n}\n\n/* kanji: meanings */\n\n.kanji-table .meanings {\n  font-size: 14px;\n  margin-bottom: 10px;\n}\n\n/* kanji: grade, freq, strokes */\n\n.kanji-table .misc {\n  display: flex;\n}\n\n.kanji-table .misc > * {\n  flex-grow: 1;\n  display: flex;\n  align-items: baseline;\n}\n\n.kanji-table .misc > :not(:first-child) {\n  margin-left: 12px;\n}\n\n.kanji-table .misc .strokes span,\n.kanji-table .misc .freq span,\n.kanji-table .misc .grade span {\n  font-size: 13px;\n}\n\n.kanji-table .misc .freq .denom {\n  font-size: 9px;\n}\n\n.kanji-table .misc .svgicon {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin-right: 6px;\n  fill: currentcolor;\n}\n\n/* kanji: components */\n\n.kanji-table .components {\n  margin-block-start: 10px;\n  /* Subtract the padding at the start of the row so the text lines up */\n  margin-inline-start: -1em;\n}\n\n.kanji-table .components table {\n  border-collapse: collapse;\n\n  /*\n   * There's something odd in Firefox where, when you're viewing a text/plain\n   * document, the .window { color: white } rule doesn't inherit into the\n   * table so we have to explicitly re-establish the color there.\n   */\n  color: var(--text-color);\n}\n\n.kanji-table .components .char,\n.kanji-table .components .reading,\n.kanji-table .components .meaning,\n.kanji-table .components .-baseradical td {\n  vertical-align: top;\n  font-size: 11px;\n  padding-top: 0.3em;\n  padding-bottom: 0.3em;\n  padding-left: 1em;\n  padding-right: 1em;\n}\n\n.kanji-table .components .reading {\n  padding-left: 0.5em;\n  padding-right: 0.5em;\n}\n\n.kanji-table .components .-radical * {\n  background: var(--cell-highlight-bg);\n  color: var(--cell-highlight-fg);\n}\n\n.kanji-table .components .-radical .char {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n\n.kanji-table .components .-radical .meaning {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.kanji-table .components .-baseradical td {\n  color: var(--cell-highlight-fg);\n  font-style: italic;\n}\n\n/* kanji: references */\n\n.references {\n  --bg-overhang: 8px;\n  margin-top: 12px;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(200px, 1fr));\n  grid-column-gap: 0.5em;\n  margin-left: calc(-1 * var(--bg-overhang));\n  margin-right: calc(-1 * var(--bg-overhang));\n  width: calc(100% + 2 * var(--bg-overhang));\n}\n\n@media (max-width: 450px) {\n  .references {\n    grid-template-columns: revert;\n  }\n}\n\n.references .ref {\n  display: flex;\n  padding: 2px var(--bg-overhang);\n  border-radius: 0.5em;\n  justify-content: space-between;\n}\n\n.references .ref.-highlight {\n  background: var(--cell-highlight-bg);\n}\n\n.references .ref.-highlight * {\n  color: var(--cell-highlight-fg);\n}\n\n.references .name,\n.references .value {\n  font-size: 12px;\n}\n\n.references .value {\n  margin-left: 0.5em;\n}\n\n/*\n * Status bar\n */\n\n.status-bar {\n  position: relative;\n  width: 100%;\n  background: var(--status-bg);\n  max-height: 3em;\n}\n\n.status-bar > * {\n  padding: 5px 8px 5px;\n}\n\n.status-bar.-subdued {\n  opacity: 0.7;\n}\n\n.status-bar kbd {\n  color: rgb(10, 10, 10);\n  font-size: 0.8rem;\n  font-family: monospace;\n  height: 1.2rem;\n  padding: 0.2rem;\n  border-radius: 0.2rem;\n  background: white;\n  border: 1px solid #909090 !important;\n}\n\n.status-bar .spinner {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  margin-right: 7px;\n  fill: currentcolor;\n  animation: spin-ccw 0.8s linear infinite;\n}\n\n.window.-copy-finished .status-bar > .keys,\n.window.-copy-error .status-bar > .keys {\n  animation: fade-out 0.4s linear forwards;\n}\n\n.window.-copy-finished .status-bar > .status {\n  opacity: 0;\n  animation: fade-in 0.4s linear forwards, fade-out 0.3s 0.9s forwards;\n}\n\n.window.-copy-finished .status-bar {\n  animation: roll-up 0.3s 1s forwards;\n}\n\n@keyframes fade-out {\n  to {\n    opacity: 0;\n  }\n}\n\n@keyframes fade-in {\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes roll-up {\n  to {\n    max-height: 0;\n  }\n}\n\n@keyframes spin-ccw {\n  to {\n    transform: rotate(-360deg);\n  }\n}\n\n.window.-copy-error .status-bar > .status {\n  opacity: 0;\n  animation: fade-in 0.4s linear forwards;\n  background: rgba(255, 204, 204, 0.8);\n  color: #b43e3e;\n}\n\n/*\n * Onboarding\n */\n\n.onboarding {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  background: var(--status-bg);\n  padding: 14px 14px 18px;\n  transition: opacity 0.25s;\n}\n\n.onboarding.dismissed {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.onboarding .explanation {\n  line-height: 1.7;\n}\n\n.onboarding a {\n  color: var(--text-color);\n}\n\n.onboarding .button-group {\n  margin-top: 15px;\n  display: flex;\n  gap: 10px;\n}\n\n.onboarding button {\n  -webkit-appearance: none;\n  appearance: none;\n  background: transparent;\n  margin: 0;\n  border: 0;\n  font: inherit;\n  cursor: pointer;\n  border-radius: 20px;\n  border: 1px solid var(--status-button-color);\n  color: var(--status-button-color);\n  padding: 6px 15px;\n  min-width: 4.5em;\n}\n\n.onboarding button.primary {\n  background: var(--status-button-color);\n  color: var(--status-button-primary-text-color);\n}\n\n.onboarding button:hover {\n  filter: brightness(1.1);\n}\n\n.onboarding .image-and-text-container {\n  display: flex;\n  gap: 10px;\n}\n\n.onboarding .icon {\n  align-self: center;\n  width: 200px;\n}\n\n.onboarding .icon svg {\n  filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.15));\n}\n\n/*\n * Bonus name\n */\n\n.wordlist .bonus-name {\n  margin-top: 8px;\n  margin-bottom: 3px;\n  background: var(--meta-bg);\n}\n\n.wordlist .bonus-name .more {\n  padding: 0px 14px;\n}\n\n/*\n * Meta information\n */\n\n.wordlist .meta,\n.name-table .meta {\n  margin-top: 8px;\n  margin-bottom: 3px;\n  padding: 3px 14px;\n  background: var(--meta-bg);\n}\n\n.wordlist .meta:last-child,\n.name-table .meta:last-child {\n  margin-bottom: 8px;\n}\n\n.wordlist .meta.-metaonly {\n  background: transparent;\n}\n\n.wordlist .meta.era,\n.wordlist .meta.measure > *,\n.name-table .meta.era,\n.name-table .meta.measure > * {\n  display: flex;\n  align-items: baseline;\n}\n\n.wordlist .meta .equals,\n.name-table .meta .equals {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n/* Meta: currency */\n\n.meta.currency > .main {\n  font-size: 18px;\n}\n\n.meta.currency > .main .equation-part {\n  display: inline-flex;\n  align-items: baseline;\n}\n\n.meta.currency .main .curr {\n  opacity: 0.6;\n  font-size: 14px;\n  margin-right: 0.3em;\n}\n\n.meta.currency > .timestamp {\n  opacity: 0.6;\n  font-size: 10px;\n}\n\n/* Meta: era */\n\n.meta.era .era-name,\n.meta.era .era-name ruby,\n.meta.era .equals,\n.meta.era .seireki {\n  font-size: 22px;\n}\n\n.meta.era .era-name,\n.meta.era .era-name * {\n  color: var(--primary-highlight);\n}\n\n.meta.era .era-name rt {\n  font-size: 12px;\n}\n\n.meta.era .seireki {\n  color: var(--reading-highlight);\n}\n\n/* Meta: measure */\n\n.meta.measure .main {\n  font-size: 18px;\n}\n\n.meta.measure .unit {\n  padding-left: 3px;\n}\n\n.meta.measure .alt {\n  opacity: 0.6;\n  margin-top: 3px;\n}\n\n/* Meta: number */\n\n.meta.number {\n  line-height: 1;\n  padding-bottom: 6px;\n  padding-top: 6px;\n}\n\n/* Meta: shogi */\n\n.meta.shogi .label {\n  font-size: 10px;\n  border: 1px solid var(--tag-border) !important;\n  border-radius: 3px;\n  margin-right: 0.5em;\n  padding: 0px 3px;\n  white-space: nowrap;\n}\n\n/*\n * Copy overlay for when the popup is interactive\n */\n.copy-overlay {\n  box-sizing: border-box;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  /* It's important to align to the top so that if the popup is very long we\n   * don't end up putting the copy buttons off screen somewhere. */\n  justify-content: start;\n  align-items: center;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  isolation: isolate;\n  overflow: hidden;\n\n  /* We fade the background so we always want a dark foreground color here,\n   * regardless of the theme. */\n  color: #1d1a19;\n}\n\n/* Blurring for the entry area when the copy overlay is showing */\n.window.-has-overlay .content .grid-stack > :first-child {\n  pointer-events: none;\n  filter: blur(20px);\n  transition: filter 0.3s ease-in-out;\n}\n\n.window.-has-overlay .content .grid-stack > .copy-overlay {\n  background: hsla(0, 0%, 97%, 0.6);\n  transition: background-color 0.3s ease-in-out;\n}\n\n/* If the overlay is showing, don't constrain the window height since it might\n * mean that the buttons on the overlay get cut off. */\n.window.-has-overlay {\n  max-height: none;\n}\n\n/* Let the size of the overlay determine the overall size of the popup contents.\n *\n * This prevents the window from suddenly getting very large when we drop the\n * max-height definition above.\n *\n * Ideally we'd only do this if we were actually going to constrain the height\n * anyway, but that's hard to detect so we just do this unconditionally and so\n * far it seems to work ok. */\n.window.-has-overlay .content .grid-stack > .entry-data {\n  position: absolute;\n  width: 100%;\n}\n\n.copy-overlay .copy-heading {\n  opacity: 0.8;\n}\n\n.copy-overlay .copy-options {\n  max-width: 90%;\n  list-style: none;\n  margin: 0 8px;\n  padding: 0;\n}\n\n.copy-overlay .copy-options li {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\n/* Reset some button styles */\n.copy-overlay button {\n  -webkit-appearance: none;\n  appearance: none;\n  background: transparent;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font: inherit;\n  color: inherit;\n  cursor: pointer;\n}\n\n.copy-overlay .copy-options li button {\n  font-size: 16px;\n  font-weight: 600;\n  width: 100%;\n  min-height: 60px;\n  background: white;\n  padding: 8px 32px;\n  border-radius: 16px;\n  --shadow-color: 0deg 0% 0%;\n  box-shadow: 0.2px 0.6px 0.5px hsl(var(--shadow-color) / 0.12),\n    0.4px 1.2px 1.1px -1.5px hsl(var(--shadow-color) / 0.09),\n    1.4px 3.7px 3.3px -3px hsl(var(--shadow-color) / 0.06),\n    3.8px 10.3px 9.1px -4.4px hsl(var(--shadow-color) / 0.04);\n  border: 0.1px solid hsla(0deg, 0%, 0%, 0.1);\n}\n\n.copy-overlay .copy-options .copy-preview {\n  margin-top: 4px;\n  display: flex;\n  white-space: nowrap;\n  color: #817470;\n  font-size: 12px;\n  font-weight: 400;\n  max-width: 200px;\n  overflow: hidden;\n  -webkit-mask-image: linear-gradient(to right, black 180px, transparent);\n  mask-image: linear-gradient(to right, black 180px, transparent);\n}\n\n.copy-overlay .copy-options .copy-preview .icon {\n  flex-shrink: 0;\n  width: 1.2em;\n  height: 1.2em;\n  margin-right: 6px;\n  opacity: 0.6;\n}\n\n.copy-overlay .copy-options .copy-preview span {\n  min-width: 0;\n}\n\n.copy-overlay .copy-options button.-icon-label,\n.copy-overlay .cancel-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.copy-overlay .copy-options button.-icon-label .icon,\n.copy-overlay .cancel-button .icon {\n  width: 1.2em;\n  height: 1.2em;\n  margin-right: 6px;\n  margin-top: -0.2em;\n  opacity: 0.6;\n}\n\n.copy-overlay .cancel-button {\n  padding: 12px 36px;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n/*\n * Utility: grid stack\n */\n\n.grid-stack,\n.-stack {\n  display: grid;\n  grid-template-rows: [stack-start] auto [stack-end];\n}\n\n.grid-stack > *,\n.-stack > * {\n  grid-column: 1 / -1;\n  grid-row: stack-start / stack-end;\n}\n\n/*\n * Arrow\n */\n.arrow {\n  position: absolute;\n  overflow: hidden;\n\n  /* Desired width of the arrow */\n  --arrow-width: 20px;\n\n  /*\n   * Amount of room to allow for the shadow.\n   */\n  --shadow-radius: 8px;\n  --shadow-margin: calc(var(--shadow-radius) / 2);\n\n  /*\n   * Crop the arrow region to show half the arrow plus allow room for margins.\n   */\n  width: calc(var(--arrow-width) + 2 * var(--shadow-margin));\n  height: calc(var(--arrow-width) / 2 + var(--shadow-margin));\n\n  z-index: 2147483647;\n}\n\n.arrow.-left,\n.arrow.-right {\n  width: calc(var(--arrow-width) / 2 + var(--shadow-margin));\n  height: calc(var(--arrow-width) + 2 * var(--shadow-margin));\n}\n\n.arrow::before {\n  position: absolute;\n  content: '';\n\n  /* Make sure the border is included in the size. */\n  box-sizing: border-box;\n\n  /* Don't inherit any rounded corners. */\n  border-radius: 0;\n\n  /*\n   * When the box is rotated, it should have width <arrow-width>. That makes the\n   * length of one side of the box equal to:\n   *\n   *    (<arrow-width> / 2) / sin 45\n   */\n  --sin-45: 0.707106781;\n  --square-side: calc(var(--arrow-width) / 2 / var(--sin-45));\n  width: var(--square-side);\n  height: var(--square-side);\n\n  /*\n   * The rotated square will overshoot the left / top side and need to be\n   * shifted in by:\n   *\n   *   (<arrow-width> - <square side>) / 2\n   *\n   * But we also want to shift it in so that the box-shadow is not clipped when\n   * we clip the parent so we add a suitable margin for that.\n   */\n  --overhang: calc((var(--arrow-width) - var(--square-side)) / 2);\n  margin-left: calc(var(--overhang) + var(--shadow-margin));\n  margin-top: calc(var(--overhang) + var(--shadow-margin));\n\n  background: var(--bg-color);\n  border: 1px solid var(--border-color);\n}\n\n.arrow.-bottom {\n  margin-top: -1px;\n}\n\n.arrow.-bottom::before {\n  transform: rotate(45deg);\n  margin-top: calc(var(--square-side) / -2);\n  box-shadow: 0px 0.5px 0.5px rgba(100, 100, 100, 0.15),\n    2px 2px 1px rgba(100, 100, 100, 0.15),\n    4px 4px 8px rgba(100, 100, 100, 0.15);\n}\n\n.arrow.-top {\n  margin-top: 1px;\n}\n\n.arrow.-top::before {\n  transform: rotate(225deg);\n  box-shadow: 0px 0.5px 0.5px rgba(100, 100, 100, 0.15),\n    -1px 2px 1px rgba(100, 100, 100, 0.15);\n}\n\n.arrow.-right {\n  margin-left: -1px;\n}\n\n.arrow.-right::before {\n  transform: rotate(225deg);\n  margin-left: calc(var(--square-side) / -2);\n  box-shadow: 0px 0.5px 0.5px rgba(100, 100, 100, 0.15),\n    -2px 2px 1px rgba(100, 100, 100, 0.15),\n    -2px 2px 8px rgba(100, 100, 100, 0.15);\n}\n\n.arrow.-left {\n  margin-left: 1px;\n}\n\n.arrow.-left::before {\n  transform: rotate(45deg);\n}\n", "" ]);
      // Exports
      /* harmony default export */      const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      /***/    },
    /***/ 889: 
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      /* harmony export */      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */      });
      /* harmony import */      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */      var _node_modules_css_loader_dist_cjs_js_themes_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(520);
      // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
      ___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_themes_css__WEBPACK_IMPORTED_MODULE_2__ /* ["default"] */ .Z);
      // Module
            ___CSS_LOADER_EXPORT___.push([ module.id, '@charset "UTF-8";\n\n:root,\n:host {\n  --tenten-puck-safe-area-inset-top: env(safe-area-inset-top, 0px);\n  --tenten-puck-safe-area-inset-right: env(safe-area-inset-right, 0px);\n  --tenten-puck-safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);\n  --tenten-puck-safe-area-inset-left: env(safe-area-inset-left, 0px);\n}\n\n.puck {\n  position: fixed;\n  top: 0;\n  left: 0;\n  /*\n   * Use the same z-index as the popup. This is the empirical maximum value. Because\n   * we ensure the popup appears before the puck in the DOM, even though we use\n   * the same z-index, the puck should appear on top.\n   */\n  z-index: 2147483647;\n  /* Stops the screen scrolling on touch devices while dragging the puck around. */\n  touch-action: none;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.1s ease-in-out;\n\n  --target-x-offset: 0px;\n  --target-y-offset: 0px;\n\n  --rest-x-offset: -20px;\n  --rest-y-offset: -20px;\n}\n.puck.lookup-inactive {\n  opacity: 0.65;\n}\n\n.earth,\n.moon {\n  background: var(--bg-color);\n  background: radial-gradient(\n    farthest-side at 25% 25%,\n    var(--puck-bg-highlight) 0%,\n    var(--puck-bg) 100%\n  );\n\n  border: 1px solid var(--border-color);\n  border-radius: 100px;\n  box-sizing: border-box;\n  box-shadow: 1px 2px 1px rgba(100, 100, 100, 0.2);\n  box-shadow: 0px 0.5px 0.5px rgba(100, 100, 100, 0.1),\n    1px 2px 1px rgba(100, 100, 100, 0.1), 1.5px 3px 4px rgba(100, 100, 100, 0.1);\n}\n\n.earth {\n  width: 50px;\n  height: 50px;\n  transition: transform 0.3s;\n  --scale-factor-when-dragging: 1.2;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.earth .logo {\n  width: 25px;\n  height: 25px;\n  color: var(--border-color);\n  opacity: 0.5;\n  transition: opacity 0.1s ease-in-out;\n}\n\n.earth .logo * {\n  fill: currentColor;\n}\n\n.puck.lookup-inactive .earth .logo {\n  opacity: 0;\n}\n\n.puck.dragging .earth {\n  transform: scale(var(--scale-factor-when-dragging));\n}\n\n.moon {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n\n  /*\n   * Given that:\n   * - the earth has 50px width and height\n   * - the moon has 10px width and height\n   * Place the centre of the moon at the centre of the the earth (before transformations are applied).\n   * (50px / 2) - (10px / 2) = 20px\n   */\n  top: 20px;\n  left: 20px;\n\n  /*\n   * Given that:\n   * - the earth has 50px width and height\n   * - the moon has 10px width and height\n   * - they both have box-sizing: border-box\n   * - their centres are lined up (before any transformations are applied)\n   * At this offsetY value, the moon will be just touching the earth.\n   * (50px / 2) + (10px / 2) = 30px\n   */\n  --minimum-moon-offset-y: 30px;\n\n  /*\n   * Depending on whether the moon is above or below the earth, some extra\n   * altitude needs to be added to the orbit so that the thumb doesn\'t cover it.\n   */\n  --extra-altitude-to-clear-above-thumb: 30px;\n  --extra-altitude-to-clear-below-thumb: 60px;\n\n  /*\n   * By adding this extra clearance, we avoid the iOS 15 Safari full-size URL\n   * bar springing back into place when dragging the puck too far into the\n   * bottom of the viewport. Hopefully this covers the worst-case scenario.\n   * @see https://github.com/shirakaba/10ten-ja-reader/pull/5#issuecomment-877794905\n   */\n  --extra-altitude-to-clear-ios-15-safari-safe-area-activation-zone: 30px;\n\n  transform: translate(var(--rest-x-offset), var(--rest-y-offset));\n  transition: transform 0.1s, opacity 0.3s;\n\n  pointer-events: none;\n}\n\n.puck.dragging:not(.lookup-inactive) .moon,\n.puck.hold-position .moon {\n  transform: translate(var(--target-x-offset), var(--target-y-offset));\n}\n\n.puck.hold-position:not(.dragging) .moon {\n  opacity: 0.75;\n}\n', "" ]);
      // Exports
      /* harmony default export */      const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      /***/    },
    /***/ 71: 
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      /* harmony export */      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */      });
      /* harmony import */      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
      // Module
            ___CSS_LOADER_EXPORT___.push([ module.id, '@charset "UTF-8";\n\n:root,\n:host {\n  --tenten-safe-area-inset-top: env(safe-area-inset-top, 0px);\n  --tenten-safe-area-inset-right: env(safe-area-inset-right, 0px);\n  --tenten-safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);\n  --tenten-safe-area-inset-left: env(safe-area-inset-left, 0px);\n}\n\n.safe-area-provider {\n  position: fixed;\n  top: var(--tenten-safe-area-inset-top, 0px);\n  right: var(--tenten-safe-area-inset-right, 0px);\n  bottom: var(--tenten-safe-area-inset-bottom, 0px);\n  left: var(--tenten-safe-area-inset-left, 0px);\n  box-sizing: border-box;\n  touch-action: none;\n  pointer-events: none;\n  visibility: hidden;\n}\n', "" ]);
      // Exports
      /* harmony default export */      const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      /***/    },
    /***/ 520: 
    /***/ (module, __webpack_exports__, __webpack_require__) => {
      "use strict";
      /* harmony export */      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__
        /* harmony export */      });
      /* harmony import */      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(352);
      /* harmony import */      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =  __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
      // Imports
            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());
      // Module
            ___CSS_LOADER_EXPORT___.push([ module.id, '@charset "UTF-8";\n\n:root,\n:host {\n  --tag-green: #43a047aa;\n  --tag-pink: #f24b59aa;\n  --tag-blue: #2698fbaa;\n\n  --selected-highlight: var(--primary-highlight);\n  --selected-bg: #fffde5;\n  --selected-reading-highlight: #2e7d32;\n  --selected-conj-color: #fc7600;\n  --selected-def-color: #1a1d1f;\n  --selected-tag-color: #1a1d1f;\n  --selected-tag-border: rgba(0, 0, 0, 0.3);\n}\n\n/*\n * Theme - light\n */\n\n.theme-light {\n  --text-color: #1d1a19;\n  --bg-color: #fefef2;\n  --border-color: #b1ad96;\n\n  --primary-highlight: #c11f2a;\n  --reading-highlight: #615f52;\n  --conj-color: #ad565c;\n\n  --tag-border: rgba(0, 0, 0, 0.3);\n\n  --title-fg: var(--text-color);\n  --title-bg: #ede7c9;\n\n  --reading-label: #918d7b;\n  --okurigana-color: #ad565c;\n  --hi-contrast-pitch-accent: var(--primary-highlight);\n  --cell-highlight-bg: #ede7c9;\n  --cell-highlight-fg: #3e3a39;\n\n  --selected-bg: #fff8bf;\n  --hover-bg: rgb(255, 250, 210);\n  --selected-reading-highlight: #3e3a39;\n\n  --meta-bg: var(--cell-highlight-bg);\n  --status-bg: var(--cell-highlight-bg);\n\n  --scrollbar-fg: var(--cell-highlight-bg);\n  --scrollbar-bg: var(--bg-color);\n\n  --puck-bg: var(--title-bg);\n  --puck-bg-highlight: var(--bg-color);\n\n  --status-button-color: #615f52;\n  --status-button-primary-text-color: var(--status-bg);\n}\n\n.window.theme-light .w-def .tag-fem,\n.window.theme-light .w-def .w-dial {\n  background: #f24b5922;\n  color: #7a282f;\n  --tag-border: #f24b5966;\n}\n\n.window.theme-light .w-def .tag-masc,\n.window.theme-light .w-def .w-misc {\n  background: #2698fb22;\n  color: #144977;\n  --tag-border: #2698fbaa;\n}\n\n.window.theme-light .w-def .tag-place,\n.window.theme-light .w-def .w-field {\n  background: #43a04722;\n  color: #215723;\n  --tag-border: #43a047aa;\n}\n\n/*\n * Theme - blue\n */\n\n.theme-blue {\n  --text-color: white;\n  --bg-color: #446ea0;\n  --border-color: #17588e;\n\n  --primary-highlight: #bcdffe;\n  --reading-highlight: #c0ffc0;\n  --conj-color: #fff394;\n\n  --tag-border: rgba(255, 255, 255, 0.4);\n\n  --title-bg: var(--cell-highlight-bg);\n  --title-fg: var(--text-color);\n\n  --reading-label: #e7ffe7;\n  --okurigana-color: #a8cfef;\n  --hi-contrast-pitch-accent: white;\n  --cell-highlight-bg: #17588e;\n  --cell-highlight-fg: var(--primary-highlight);\n\n  --selected-highlight: var(--bg-color);\n  --selected-bg: rgb(220, 225, 255);\n  --hover-bg: rgb(233, 238, 255, 0.8);\n\n  --status-bg: rgba(255, 255, 255, 0.2);\n  --meta-bg: rgba(255, 255, 255, 0.2);\n\n  --scrollbar-fg: var(--cell-highlight-bg);\n  --scrollbar-bg: var(--bg-color);\n\n  --puck-bg: var(--bg-color);\n  --puck-bg-highlight: #5f87bb;\n\n  --status-button-color: white;\n  --status-button-primary-text-color: var(--bg-color);\n}\n\n/*\n * Theme - black\n */\n\n.theme-black {\n  --text-color: white;\n  --bg-color: #1d1a19;\n  --border-color: #999493;\n\n  --primary-highlight: #3fa8de;\n  --reading-highlight: #7beb7e;\n  --conj-color: #c1a4a0;\n\n  --tag-border: rgba(255, 255, 255, 0.4);\n\n  --title-bg: #3e3a39;\n  --title-fg: #ede8e6;\n\n  --reading-label: #e7ffe7;\n  --okurigana-color: #ede8e6;\n  --hi-contrast-pitch-accent: white;\n  --cell-highlight-bg: #504c4b;\n  --cell-highlight-fg: #f0ecea;\n\n  --selected-bg: #555;\n  --hover-bg: #484844;\n\n  /* Reset selection styles */\n  --selected-highlight: var(--primary-highlight);\n  --selected-reading-highlight: var(--reading-highlight);\n  --selected-def-color: var(--text-color);\n  --selected-tag-color: var(--text-color);\n  --selected-tag-border: var(--tag-border);\n\n  --status-bg: rgba(255, 255, 255, 0.2);\n  --meta-bg: rgba(255, 255, 255, 0.2);\n\n  --scrollbar-fg: var(--cell-highlight-bg);\n  --scrollbar-bg: var(--bg-color);\n\n  --puck-bg: var(--bg-color);\n  --puck-bg-highlight: #555;\n\n  --status-button-color: white;\n  --status-button-primary-text-color: var(--bg-color);\n}\n\n.window.theme-black .w-def .tag-masc,\n.window.theme-black .w-def .w-misc {\n  --tag-blue: #2698fb88;\n  --tag-border: rgba(255, 255, 255, 0.3);\n}\n\n.window.theme-black .kanji-table:not(.-copy) .kanji {\n  text-shadow: rgba(255, 255, 255, 0.2) 1px 1px 4px;\n}\n\n/*\n * Theme - lightblue\n */\n\n.theme-lightblue {\n  --text-color: #1d1a19;\n  --bg-color: #e3f2fe;\n  --border-color: #65b7fc;\n\n  --primary-highlight: #17588e;\n  --reading-highlight: #2e7d32;\n  --conj-color: #817470;\n\n  --tag-border: rgba(0, 0, 0, 0.3);\n\n  --title-fg: var(--text-color);\n  --title-bg: #bcdffe;\n\n  --reading-label: #1b5e20;\n  --okurigana-color: #706c6b;\n  --hi-contrast-pitch-accent: var(--primary-highlight);\n  --cell-highlight-bg: #cae6fc;\n  --cell-highlight-fg: var(--primary-highlight);\n\n  --selected-highlight: var(--primary-highlight);\n  --selected-bg: #fffac5;\n  --hover-bg: #fffde5;\n\n  --meta-bg: var(--cell-highlight-bg);\n  --status-bg: var(--cell-highlight-bg);\n\n  --scrollbar-fg: var(--cell-highlight-bg);\n  --scrollbar-bg: var(--bg-color);\n\n  --puck-bg: #c5e0f5;\n  --puck-bg-highlight: var(--bg-color);\n\n  --status-button-color: var(--primary-highlight);\n  --status-button-primary-text-color: var(--bg-color);\n}\n\n/*\n * Theme - yellow\n */\n\n.theme-yellow {\n  --text-color: #1d1a19;\n  --bg-color: #fff8bf;\n  --border-color: #ffd600;\n\n  --primary-highlight: #17588e;\n  --reading-highlight: #2e7d32;\n  --conj-color: #fc7600;\n\n  --tag-border: rgba(0, 0, 0, 0.3);\n\n  --title-bg: #fffde5;\n  --title-fg: var(--text-color);\n\n  --reading-label: #1b5e20;\n  --okurigana-color: #fc7600;\n  --hi-contrast-pitch-accent: var(--primary-highlight);\n  --cell-highlight-bg: #fffde5;\n  --cell-highlight-fg: #3e3a39;\n\n  --selected-bg: #e3f2fe;\n  --hover-bg: #fdfdf4;\n  --selected-highlight: var(--primary-highlight);\n\n  --meta-bg: var(--cell-highlight-bg);\n  --status-bg: var(--cell-highlight-bg);\n\n  --scrollbar-fg: var(--cell-highlight-bg);\n  --scrollbar-bg: var(--bg-color);\n\n  --puck-bg: #ffeeaa;\n  --puck-bg-highlight: var(--bg-color);\n\n  --status-button-color: var(--primary-highlight);\n  --status-button-primary-text-color: var(--status-bg);\n}\n', "" ]);
      // Exports
      /* harmony default export */      const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      /***/    },
    /***/ 666: 
    /***/ (__unused_webpack_module, exports) => {
      "use strict";
      ({
        value: true
      });
      void 0;
      function jsonEqualish(actual, expected) {
        if (Object.is(actual, expected)) return true;
        // For non-objects, use Object.is. This will cause 'undefined' and 'null' to
        // be different, as desired.
                if (!actual || !expected || "object" !== typeof actual && "object" !== typeof expected) 
        // Except for numbers, since we want '-0' and '+0' to be equivalent
        // (We should really just use JSON.stringify here. Might be slower but would
        // it matter?)
        return "number" === typeof actual ? actual === expected : Object.is(actual, expected);
        return objEquiv(actual, expected);
      }
      jsonEqualish;
      function objEquiv(a, b) {
        if (typeof a !== typeof b) return false;
        if (a instanceof Date) return b instanceof Date && a.getTime() == b.getTime();
        if (Array.isArray(a) !== Array.isArray(b)) return false;
        // We only deal with POD at the moment.
                if (a.constructor && a.constructor !== Object && a.constructor !== Array || b.constructor && b.constructor !== Object && b.constructor !== Array) throw new Error("Trying to compare something fancy");
        const aKeys = definedKeys(a);
        const bKeys = definedKeys(b);
        if (aKeys.length !== bKeys.length) return false;
        aKeys.sort();
        bKeys.sort();
        // Compare keys first
                for (let i = 0; i < aKeys.length; ++i) if (aKeys[i] != bKeys[i]) return false;
        // Compare values
                for (const key of aKeys) if (!jsonEqualish(a[key], b[key])) return false;
        return true;
      }
      function definedKeys(a) {
        return Object.keys(a).filter((key => "undefined" !== typeof a[key]));
      }
      jsonEqualish;
      /***/    },
    /***/ 352: 
    /***/ module => {
      "use strict";
      /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/      module.exports = function(cssWithMappingToString) {
        var list = [];
        // return the list of modules as css string
                list.toString = function() {
          return this.map((function(item) {
            var content = "";
            var needLayer = "undefined" !== typeof item[5];
            if (item[4]) content += "@supports (".concat(item[4], ") {");
            if (item[2]) content += "@media ".concat(item[2], " {");
            if (needLayer) content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
            content += cssWithMappingToString(item);
            if (needLayer) content += "}";
            if (item[2]) content += "}";
            if (item[4]) content += "}";
            return content;
          })).join("");
        };
        // import a list of modules into the list
                list.i = function(modules, media, dedupe, supports, layer) {
          if ("string" === typeof modules) modules = [ [ null, modules, void 0 ] ];
          var alreadyImportedModules = {};
          if (dedupe) for (var k = 0; k < this.length; k++) {
            var id = this[k][0];
            if (null != id) alreadyImportedModules[id] = true;
          }
          for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) continue;
            if ("undefined" !== typeof layer) if ("undefined" === typeof item[5]) item[5] = layer; else {
              item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
              item[5] = layer;
            }
            if (media) if (!item[2]) item[2] = media; else {
              item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
              item[2] = media;
            }
            if (supports) if (!item[4]) item[4] = "".concat(supports); else {
              item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
              item[4] = supports;
            }
            list.push(item);
          }
        };
        return list;
      };
      /***/    },
    /***/ 402: 
    /***/ module => {
      "use strict";
      module.exports = function(i) {
        return i[1];
      };
      /***/    },
    /***/ 739: 
    /***/ (__unused_webpack_module, exports, __webpack_require__) => {
      "use strict";
      ({
        value: true
      });
      exports.browser = __webpack_require__(935);
      /***/    },
    /***/ 935: 
    /***/ function(module, exports) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
      (function(global, factory) {
        if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ module ], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, 
        __WEBPACK_AMD_DEFINE_RESULT__ = "function" === typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, 
        void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else ;
      })("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self && self, (function(module) {
        /* webextension-polyfill - v0.8.0 - Tue Apr 20 2021 11:27:38 */
        /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
        /* vim: set sts=2 sw=2 et tw=80: */
        /* This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
        "use strict";
        if ("undefined" === typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
          const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
          const SEND_RESPONSE_DEPRECATION_WARNING = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)";
 // Wrapping the bulk of this polyfill in a one-time-use function is a minor
          // optimization for Firefox. Since Spidermonkey does not fully parse the
          // contents of a function until the first time it's called, and since it will
          // never actually need to be called, this allows the polyfill to be included
          // in Firefox nearly for free.
                    const wrapAPIs = extensionAPIs => {
            // NOTE: apiMetadata is associated to the content of the api-metadata.json file
            // at build time by replacing the following "include" with the content of the
            // JSON file.
            const apiMetadata = {
              alarms: {
                clear: {
                  minArgs: 0,
                  maxArgs: 1
                },
                clearAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              bookmarks: {
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getChildren: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getRecent: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getSubTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTree: {
                  minArgs: 0,
                  maxArgs: 0
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeTree: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              browserAction: {
                disable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                enable: {
                  minArgs: 0,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                getBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getBadgeText: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                openPopup: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setBadgeBackgroundColor: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setBadgeText: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              browsingData: {
                remove: {
                  minArgs: 2,
                  maxArgs: 2
                },
                removeCache: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCookies: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeDownloads: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFormData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeHistory: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeLocalStorage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePasswords: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removePluginData: {
                  minArgs: 1,
                  maxArgs: 1
                },
                settings: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              commands: {
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              contextMenus: {
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              cookies: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAllCookieStores: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              devtools: {
                inspectedWindow: {
                  eval: {
                    minArgs: 1,
                    maxArgs: 2,
                    singleCallbackArg: false
                  }
                },
                panels: {
                  create: {
                    minArgs: 3,
                    maxArgs: 3,
                    singleCallbackArg: true
                  },
                  elements: {
                    createSidebarPane: {
                      minArgs: 1,
                      maxArgs: 1
                    }
                  }
                }
              },
              downloads: {
                cancel: {
                  minArgs: 1,
                  maxArgs: 1
                },
                download: {
                  minArgs: 1,
                  maxArgs: 1
                },
                erase: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFileIcon: {
                  minArgs: 1,
                  maxArgs: 2
                },
                open: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                pause: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeFile: {
                  minArgs: 1,
                  maxArgs: 1
                },
                resume: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              extension: {
                isAllowedFileSchemeAccess: {
                  minArgs: 0,
                  maxArgs: 0
                },
                isAllowedIncognitoAccess: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              history: {
                addUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                deleteRange: {
                  minArgs: 1,
                  maxArgs: 1
                },
                deleteUrl: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getVisits: {
                  minArgs: 1,
                  maxArgs: 1
                },
                search: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              i18n: {
                detectLanguage: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAcceptLanguages: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              identity: {
                launchWebAuthFlow: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              idle: {
                queryState: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              management: {
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getSelf: {
                  minArgs: 0,
                  maxArgs: 0
                },
                setEnabled: {
                  minArgs: 2,
                  maxArgs: 2
                },
                uninstallSelf: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              notifications: {
                clear: {
                  minArgs: 1,
                  maxArgs: 1
                },
                create: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPermissionLevel: {
                  minArgs: 0,
                  maxArgs: 0
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              },
              pageAction: {
                getPopup: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getTitle: {
                  minArgs: 1,
                  maxArgs: 1
                },
                hide: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setIcon: {
                  minArgs: 1,
                  maxArgs: 1
                },
                setPopup: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                setTitle: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                },
                show: {
                  minArgs: 1,
                  maxArgs: 1,
                  fallbackToNoCallback: true
                }
              },
              permissions: {
                contains: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 0
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                request: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              runtime: {
                getBackgroundPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getPlatformInfo: {
                  minArgs: 0,
                  maxArgs: 0
                },
                openOptionsPage: {
                  minArgs: 0,
                  maxArgs: 0
                },
                requestUpdateCheck: {
                  minArgs: 0,
                  maxArgs: 0
                },
                sendMessage: {
                  minArgs: 1,
                  maxArgs: 3
                },
                sendNativeMessage: {
                  minArgs: 2,
                  maxArgs: 2
                },
                setUninstallURL: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              sessions: {
                getDevices: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getRecentlyClosed: {
                  minArgs: 0,
                  maxArgs: 1
                },
                restore: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              storage: {
                local: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                },
                managed: {
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  }
                },
                sync: {
                  clear: {
                    minArgs: 0,
                    maxArgs: 0
                  },
                  get: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  getBytesInUse: {
                    minArgs: 0,
                    maxArgs: 1
                  },
                  remove: {
                    minArgs: 1,
                    maxArgs: 1
                  },
                  set: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              },
              tabs: {
                captureVisibleTab: {
                  minArgs: 0,
                  maxArgs: 2
                },
                create: {
                  minArgs: 1,
                  maxArgs: 1
                },
                detectLanguage: {
                  minArgs: 0,
                  maxArgs: 1
                },
                discard: {
                  minArgs: 0,
                  maxArgs: 1
                },
                duplicate: {
                  minArgs: 1,
                  maxArgs: 1
                },
                executeScript: {
                  minArgs: 1,
                  maxArgs: 2
                },
                get: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 0
                },
                getZoom: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getZoomSettings: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goBack: {
                  minArgs: 0,
                  maxArgs: 1
                },
                goForward: {
                  minArgs: 0,
                  maxArgs: 1
                },
                highlight: {
                  minArgs: 1,
                  maxArgs: 1
                },
                insertCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                move: {
                  minArgs: 2,
                  maxArgs: 2
                },
                query: {
                  minArgs: 1,
                  maxArgs: 1
                },
                reload: {
                  minArgs: 0,
                  maxArgs: 2
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                removeCSS: {
                  minArgs: 1,
                  maxArgs: 2
                },
                sendMessage: {
                  minArgs: 2,
                  maxArgs: 3
                },
                setZoom: {
                  minArgs: 1,
                  maxArgs: 2
                },
                setZoomSettings: {
                  minArgs: 1,
                  maxArgs: 2
                },
                update: {
                  minArgs: 1,
                  maxArgs: 2
                }
              },
              topSites: {
                get: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              webNavigation: {
                getAllFrames: {
                  minArgs: 1,
                  maxArgs: 1
                },
                getFrame: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              webRequest: {
                handlerBehaviorChanged: {
                  minArgs: 0,
                  maxArgs: 0
                }
              },
              windows: {
                create: {
                  minArgs: 0,
                  maxArgs: 1
                },
                get: {
                  minArgs: 1,
                  maxArgs: 2
                },
                getAll: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getCurrent: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getLastFocused: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                update: {
                  minArgs: 2,
                  maxArgs: 2
                }
              }
            };
            if (0 === Object.keys(apiMetadata).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
            /**
       * A WeakMap subclass which creates and stores a value for any key which does
       * not exist when accessed, but behaves exactly as an ordinary WeakMap
       * otherwise.
       *
       * @param {function} createItem
       *        A function which will be called in order to create the value for any
       *        key which does not exist, the first time it is accessed. The
       *        function receives, as its only argument, the key being created.
       */            class DefaultWeakMap extends WeakMap {
              constructor(createItem, items = void 0) {
                super(items);
                this.createItem = createItem;
              }
              get(key) {
                if (!this.has(key)) this.set(key, this.createItem(key));
                return super.get(key);
              }
            }
            /**
       * Returns true if the given object is an object with a `then` method, and can
       * therefore be assumed to behave as a Promise.
       *
       * @param {*} value The value to test.
       * @returns {boolean} True if the value is thenable.
       */            const isThenable = value => value && "object" === typeof value && "function" === typeof value.then;
            /**
       * Creates and returns a function which, when called, will resolve or reject
       * the given promise based on how it is called:
       *
       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
       *   the promise is rejected with that value.
       * - If the function is called with exactly one argument, the promise is
       *   resolved to that value.
       * - Otherwise, the promise is resolved to an array containing all of the
       *   function's arguments.
       *
       * @param {object} promise
       *        An object containing the resolution and rejection functions of a
       *        promise.
       * @param {function} promise.resolve
       *        The promise's resolution function.
       * @param {function} promise.reject
       *        The promise's rejection function.
       * @param {object} metadata
       *        Metadata about the wrapped method which has created the callback.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function}
       *        The generated callback function.
       */            const makeCallback = (promise, metadata) => (...callbackArgs) => {
              if (extensionAPIs.runtime.lastError) promise.reject(new Error(extensionAPIs.runtime.lastError.message)); else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && false !== metadata.singleCallbackArg) promise.resolve(callbackArgs[0]); else promise.resolve(callbackArgs);
            };
            const pluralizeArguments = numArgs => 1 == numArgs ? "argument" : "arguments"
            /**
       * Creates a wrapper function for a method with the given name and metadata.
       *
       * @param {string} name
       *        The name of the method which is being wrapped.
       * @param {object} metadata
       *        Metadata about the method being wrapped.
       * @param {integer} metadata.minArgs
       *        The minimum number of arguments which must be passed to the
       *        function. If called with fewer than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {integer} metadata.maxArgs
       *        The maximum number of arguments which may be passed to the
       *        function. If called with more than this number of arguments, the
       *        wrapper will raise an exception.
       * @param {boolean} metadata.singleCallbackArg
       *        Whether or not the promise is resolved with only the first
       *        argument of the callback, alternatively an array of all the
       *        callback arguments is resolved. By default, if the callback
       *        function is invoked with only a single argument, that will be
       *        resolved to the promise, while all arguments will be resolved as
       *        an array if multiple are given.
       *
       * @returns {function(object, ...*)}
       *       The generated wrapper function.
       */;
            const wrapAsyncFunction = (name, metadata) => function(target, ...args) {
              if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              return new Promise(((resolve, reject) => {
                if (metadata.fallbackToNoCallback) 
                // This API method has currently no callback on Chrome, but it return a promise on Firefox,
                // and so the polyfill will try to call it with a callback first, and it will fallback
                // to not passing the callback if the first call fails.
                try {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                } catch (cbError) {
                  console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
                  target[name](...args);
 // Update the API method metadata, so that the next API calls will not try to
                  // use the unsupported callback anymore.
                                    metadata.fallbackToNoCallback = false;
                  metadata.noCallback = true;
                  resolve();
                } else if (metadata.noCallback) {
                  target[name](...args);
                  resolve();
                } else target[name](...args, makeCallback({
                  resolve,
                  reject
                }, metadata));
              }));
            };
            /**
       * Wraps an existing method of the target object, so that calls to it are
       * intercepted by the given wrapper function. The wrapper function receives,
       * as its first argument, the original `target` object, followed by each of
       * the arguments passed to the original method.
       *
       * @param {object} target
       *        The original target object that the wrapped method belongs to.
       * @param {function} method
       *        The method being wrapped. This is used as the target of the Proxy
       *        object which is created to wrap the method.
       * @param {function} wrapper
       *        The wrapper function which is called in place of a direct invocation
       *        of the wrapped method.
       *
       * @returns {Proxy<function>}
       *        A Proxy object for the given method, which invokes the given wrapper
       *        method in its place.
       */            const wrapMethod = (target, method, wrapper) => new Proxy(method, {
              apply(targetMethod, thisObj, args) {
                return wrapper.call(thisObj, target, ...args);
              }
            });
            let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
            /**
       * Wraps an object in a Proxy which intercepts and wraps certain methods
       * based on the given `wrappers` and `metadata` objects.
       *
       * @param {object} target
       *        The target object to wrap.
       *
       * @param {object} [wrappers = {}]
       *        An object tree containing wrapper functions for special cases. Any
       *        function present in this object tree is called in place of the
       *        method in the same location in the `target` object tree. These
       *        wrapper methods are invoked as described in {@see wrapMethod}.
       *
       * @param {object} [metadata = {}]
       *        An object tree containing metadata used to automatically generate
       *        Promise-based wrapper functions for asynchronous. Any function in
       *        the `target` object tree which has a corresponding metadata object
       *        in the same location in the `metadata` tree is replaced with an
       *        automatically-generated wrapper function, as described in
       *        {@see wrapAsyncFunction}
       *
       * @returns {Proxy<object>}
       */            const wrapObject = (target, wrappers = {}, metadata = {}) => {
              let cache = Object.create(null);
              let handlers = {
                has(proxyTarget, prop) {
                  return prop in target || prop in cache;
                },
                get(proxyTarget, prop, receiver) {
                  if (prop in cache) return cache[prop];
                  if (!(prop in target)) return;
                  let value = target[prop];
                  if ("function" === typeof value) 
                  // This is a method on the underlying object. Check if we need to do
                  // any wrapping.
                  if ("function" === typeof wrappers[prop]) 
                  // We have a special-case wrapper for this method.
                  value = wrapMethod(target, target[prop], wrappers[prop]); else if (hasOwnProperty(metadata, prop)) {
                    // This is an async method that we have metadata for. Create a
                    // Promise wrapper for it.
                    let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                    value = wrapMethod(target, target[prop], wrapper);
                  } else 
                  // This is a method that we don't know or care about. Return the
                  // original method, bound to the underlying object.
                  value = value.bind(target); else if ("object" === typeof value && null !== value && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) 
                  // This is an object that we need to do some wrapping for the children
                  // of. Create a sub-object wrapper for it with the appropriate child
                  // metadata.
                  value = wrapObject(value, wrappers[prop], metadata[prop]); else if (hasOwnProperty(metadata, "*")) 
                  // Wrap all properties in * namespace.
                  value = wrapObject(value, wrappers[prop], metadata["*"]); else {
                    // We don't need to do any wrapping for this property,
                    // so just forward all access to the underlying object.
                    Object.defineProperty(cache, prop, {
                      configurable: true,
                      enumerable: true,
                      get() {
                        return target[prop];
                      },
                      set(value) {
                        target[prop] = value;
                      }
                    });
                    return value;
                  }
                  cache[prop] = value;
                  return value;
                },
                set(proxyTarget, prop, value, receiver) {
                  if (prop in cache) cache[prop] = value; else target[prop] = value;
                  return true;
                },
                defineProperty(proxyTarget, prop, desc) {
                  return Reflect.defineProperty(cache, prop, desc);
                },
                deleteProperty(proxyTarget, prop) {
                  return Reflect.deleteProperty(cache, prop);
                }
              };
 // Per contract of the Proxy API, the "get" proxy handler must return the
              // original value of the target if that value is declared read-only and
              // non-configurable. For this reason, we create an object with the
              // prototype set to `target` instead of using `target` directly.
              // Otherwise we cannot return a custom object for APIs that
              // are declared read-only and non-configurable, such as `chrome.devtools`.
              
              // The proxy handlers themselves will still use the original `target`
              // instead of the `proxyTarget`, so that the methods and properties are
              // dereferenced via the original targets.
                            let proxyTarget = Object.create(target);
              return new Proxy(proxyTarget, handlers);
            };
            /**
       * Creates a set of wrapper functions for an event object, which handles
       * wrapping of listener functions that those messages are passed.
       *
       * A single wrapper is created for each listener function, and stored in a
       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
       * retrieve the original wrapper, so that  attempts to remove a
       * previously-added listener work as expected.
       *
       * @param {DefaultWeakMap<function, function>} wrapperMap
       *        A DefaultWeakMap object which will create the appropriate wrapper
       *        for a given listener function when one does not exist, and retrieve
       *        an existing one when it does.
       *
       * @returns {object}
       */            const wrapEvent = wrapperMap => ({
              addListener(target, listener, ...args) {
                target.addListener(wrapperMap.get(listener), ...args);
              },
              hasListener(target, listener) {
                return target.hasListener(wrapperMap.get(listener));
              },
              removeListener(target, listener) {
                target.removeListener(wrapperMap.get(listener));
              }
            });
            const onRequestFinishedWrappers = new DefaultWeakMap((listener => {
              if ("function" !== typeof listener) return listener;
              /**
         * Wraps an onRequestFinished listener function so that it will return a
         * `getContent()` property which returns a `Promise` rather than using a
         * callback API.
         *
         * @param {object} req
         *        The HAR entry object representing the network request.
         */              return function(req) {
                const wrappedReq = wrapObject(req, {}
                /* wrappers */ , {
                  getContent: {
                    minArgs: 0,
                    maxArgs: 0
                  }
                });
                listener(wrappedReq);
              };
            }));
 // Keep track if the deprecation warning has been logged at least once.
                        let loggedSendResponseDeprecationWarning = false;
            const onMessageWrappers = new DefaultWeakMap((listener => {
              if ("function" !== typeof listener) return listener;
              /**
         * Wraps a message listener function so that it may send responses based on
         * its return value, rather than by returning a sentinel value and calling a
         * callback. If the listener function returns a Promise, the response is
         * sent when the promise either resolves or rejects.
         *
         * @param {*} message
         *        The message sent by the other end of the channel.
         * @param {object} sender
         *        Details about the sender of the message.
         * @param {function(*)} sendResponse
         *        A callback which, when called with an arbitrary argument, sends
         *        that value as a response.
         * @returns {boolean}
         *        True if the wrapped listener returned a Promise, which will later
         *        yield a response. False otherwise.
         */              return function(message, sender, sendResponse) {
                let didCallSendResponse = false;
                let wrappedSendResponse;
                let sendResponsePromise = new Promise((resolve => {
                  wrappedSendResponse = function(response) {
                    if (!loggedSendResponseDeprecationWarning) {
                      console.warn(SEND_RESPONSE_DEPRECATION_WARNING, (new Error).stack);
                      loggedSendResponseDeprecationWarning = true;
                    }
                    didCallSendResponse = true;
                    resolve(response);
                  };
                }));
                let result;
                try {
                  result = listener(message, sender, wrappedSendResponse);
                } catch (err) {
                  result = Promise.reject(err);
                }
                const isResultThenable = true !== result && isThenable(result);
 // If the listener didn't returned true or a Promise, or called
                // wrappedSendResponse synchronously, we can exit earlier
                // because there will be no response sent from this listener.
                                if (true !== result && !isResultThenable && !didCallSendResponse) return false;
 // A small helper to send the message if the promise resolves
                // and an error if the promise rejects (a wrapped sendMessage has
                // to translate the message into a resolved promise or a rejected
                // promise).
                                const sendPromisedResult = promise => {
                  promise.then((msg => {
                    // send the message value.
                    sendResponse(msg);
                  }), (error => {
                    // Send a JSON representation of the error if the rejected value
                    // is an instance of error, or the object itself otherwise.
                    let message;
                    if (error && (error instanceof Error || "string" === typeof error.message)) message = error.message; else message = "An unexpected error occurred";
                    sendResponse({
                      __mozWebExtensionPolyfillReject__: true,
                      message
                    });
                  })).catch((err => {
                    // Print an error on the console if unable to send the response.
                    console.error("Failed to send onMessage rejected reply", err);
                  }));
                };
 // If the listener returned a Promise, send the resolved value as a
                // result, otherwise wait the promise related to the wrappedSendResponse
                // callback to resolve and send it as a response.
                                if (isResultThenable) sendPromisedResult(result); else sendPromisedResult(sendResponsePromise);
 // Let Chrome know that the listener is replying.
                                return true;
              };
            }));
            const wrappedSendMessageCallback = ({reject, resolve}, reply) => {
              if (extensionAPIs.runtime.lastError) 
              // Detect when none of the listeners replied to the sendMessage call and resolve
              // the promise to undefined as in Firefox.
              // See https://github.com/mozilla/webextension-polyfill/issues/130
              if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) resolve(); else reject(new Error(extensionAPIs.runtime.lastError.message)); else if (reply && reply.__mozWebExtensionPolyfillReject__) 
              // Convert back the JSON representation of the error into
              // an Error instance.
              reject(new Error(reply.message)); else resolve(reply);
            };
            const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
              if (args.length < metadata.minArgs) throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              if (args.length > metadata.maxArgs) throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              return new Promise(((resolve, reject) => {
                const wrappedCb = wrappedSendMessageCallback.bind(null, {
                  resolve,
                  reject
                });
                args.push(wrappedCb);
                apiNamespaceObj.sendMessage(...args);
              }));
            };
            const staticWrappers = {
              devtools: {
                network: {
                  onRequestFinished: wrapEvent(onRequestFinishedWrappers)
                }
              },
              runtime: {
                onMessage: wrapEvent(onMessageWrappers),
                onMessageExternal: wrapEvent(onMessageWrappers),
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 1,
                  maxArgs: 3
                })
              },
              tabs: {
                sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
                  minArgs: 2,
                  maxArgs: 3
                })
              }
            };
            const settingMetadata = {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            };
            apiMetadata.privacy = {
              network: {
                "*": settingMetadata
              },
              services: {
                "*": settingMetadata
              },
              websites: {
                "*": settingMetadata
              }
            };
            return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
          };
          if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
 // The build process adds a UMD wrapper around this file, which makes the
          // `module` variable available.
                    module.exports = wrapAPIs(chrome);
        } else module.exports = browser;
      }));
      /***/    }
    /******/  };
  /************************************************************************/
  /******/ // The module cache
  /******/  var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/  function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/    if (void 0 !== cachedModule) 
    /******/ return cachedModule.exports;
    /******/
    /******/ // Create a new module (and put it into the cache)
    /******/    var module = __webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/    };
    /******/
    /******/ // Execute the module function
    /******/    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Return the exports of the module
    /******/    return module.exports;
    /******/  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/  (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = module => {
      /******/ var getter = module && module.__esModule ? 
      /******/ () => module["default"]
      /******/ : () => module
      /******/;
      __webpack_require__.d(getter, {
        a: getter
      });
      /******/      return getter;
      /******/    };
    /******/  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/  (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) 
      /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) 
      /******/ Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key]
      });
      /******/
      /******/
      /******/    };
    /******/  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/  (() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/;
  })();
  /******/
  /************************************************************************/  
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";
    // UNUSED EXPORTS: ContentHandler, default, isTouchClickEvent
        // CONCATENATED MODULE: ./node_modules/superstruct/dist/index.mjs
    /**
 * A `StructFailure` represents a single specific failure in validation.
 */
    /**
 * `StructError` objects are thrown (or returned) when validation fails.
 *
 * Validation logic is design to exit early for maximum performance. The error
 * represents the first error encountered during validation. For more detail,
 * the `error.failures` property is a generator function that can be run to
 * continue validation and receive all the failures in the data.
 */
    class StructError extends TypeError {
      constructor(failure, failures) {
        let cached;
        const {message, explanation, ...rest} = failure;
        const {path} = failure;
        const msg = 0 === path.length ? message : `At path: ${path.join(".")} -- ${message}`;
        super(explanation ?? msg);
        if (null != explanation) this.cause = msg;
        Object.assign(this, rest);
        this.name = this.constructor.name;
        this.failures = () => cached ?? (cached = [ failure, ...failures() ]);
      }
    }
    /**
 * Check if a value is an iterator.
 */    function isIterable(x) {
      return isObject(x) && "function" === typeof x[Symbol.iterator];
    }
    /**
 * Check if a value is a plain object.
 */    function isObject(x) {
      return "object" === typeof x && null != x;
    }
    /**
 * Check if a value is a plain object.
 */    
    /**
 * Return a value as a printable string.
 */
    function print(value) {
      if ("symbol" === typeof value) return value.toString();
      return "string" === typeof value ? JSON.stringify(value) : `${value}`;
    }
    /**
 * Shifts (removes and returns) the first value from the `input` iterator.
 * Like `Array.prototype.shift()` but for an `Iterator`.
 */    function shiftIterator(input) {
      const {done, value} = input.next();
      return done ? void 0 : value;
    }
    /**
 * Convert a single validation result to a failure.
 */    function toFailure(result, context, struct, value) {
      if (true === result) return; else if (false === result) result = {}; else if ("string" === typeof result) result = {
        message: result
      };
      const {path, branch} = context;
      const {type} = struct;
      const {refinement, message = `Expected a value of type \`${type}\`${refinement ? ` with refinement \`${refinement}\`` : ""}, but received: \`${print(value)}\``} = result;
      return {
        value,
        type,
        refinement,
        key: path[path.length - 1],
        path,
        branch,
        ...result,
        message
      };
    }
    /**
 * Convert a validation result to an iterable of failures.
 */    function* toFailures(result, context, struct, value) {
      if (!isIterable(result)) result = [ result ];
      for (const r of result) {
        const failure = toFailure(r, context, struct, value);
        if (failure) yield failure;
      }
    }
    /**
 * Check a value against a struct, traversing deeply into nested values, and
 * returning an iterator of failures or success.
 */    function* run(value, struct, options = {}) {
      const {path = [], branch = [ value ], coerce = false, mask = false} = options;
      const ctx = {
        path,
        branch
      };
      if (coerce) {
        value = struct.coercer(value, ctx);
        if (mask && "type" !== struct.type && isObject(struct.schema) && isObject(value) && !Array.isArray(value)) for (const key in value) if (void 0 === struct.schema[key]) delete value[key];
      }
      let status = "valid";
      for (const failure of struct.validator(value, ctx)) {
        failure.explanation = options.message;
        status = "not_valid";
        yield [ failure, void 0 ];
      }
      for (let [k, v, s] of struct.entries(value, ctx)) {
        const ts = run(v, s, {
          path: void 0 === k ? path : [ ...path, k ],
          branch: void 0 === k ? branch : [ ...branch, v ],
          coerce,
          mask,
          message: options.message
        });
        for (const t of ts) if (t[0]) {
          status = null != t[0].refinement ? "not_refined" : "not_valid";
          yield [ t[0], void 0 ];
        } else if (coerce) {
          v = t[1];
          if (void 0 === k) value = v; else if (value instanceof Map) value.set(k, v); else if (value instanceof Set) value.add(v); else if (isObject(value)) if (void 0 !== v || k in value) value[k] = v;
        }
      }
      if ("not_valid" !== status) for (const failure of struct.refiner(value, ctx)) {
        failure.explanation = options.message;
        status = "not_refined";
        yield [ failure, void 0 ];
      }
      if ("valid" === status) yield [ void 0, value ];
    }
    /**
 * `Struct` objects encapsulate the validation logic for a specific type of
 * values. Once constructed, you use the `assert`, `is` or `validate` helpers to
 * validate unknown input data against the struct.
 */    class Struct {
      constructor(props) {
        const {type, schema, validator, refiner, coercer = value => value, entries = function*() {}} = props;
        this.type = type;
        this.schema = schema;
        this.entries = entries;
        this.coercer = coercer;
        if (validator) this.validator = (value, context) => {
          const result = validator(value, context);
          return toFailures(result, context, this, value);
        }; else this.validator = () => [];
        if (refiner) this.refiner = (value, context) => {
          const result = refiner(value, context);
          return toFailures(result, context, this, value);
        }; else this.refiner = () => [];
      }
      /**
     * Assert that a value passes the struct's validation, throwing if it doesn't.
     */      assert(value, message) {
        return assert(value, this, message);
      }
      /**
     * Create a value with the struct's coercion logic, then validate it.
     */      create(value, message) {
        return create(value, this, message);
      }
      /**
     * Check if a value passes the struct's validation.
     */      is(value) {
        return is(value, this);
      }
      /**
     * Mask a value, coercing and validating it, but returning only the subset of
     * properties defined by the struct's schema.
     */      mask(value, message) {
        return mask(value, this, message);
      }
      /**
     * Validate a value with the struct's validation logic, returning a tuple
     * representing the result.
     *
     * You may optionally pass `true` for the `withCoercion` argument to coerce
     * the value before attempting to validate it. If you do, the result will
     * contain the coerced result when successful.
     */      validate(value, options = {}) {
        return validate(value, this, options);
      }
    }
    /**
 * Assert that a value passes a struct, throwing if it doesn't.
 */    function assert(value, struct, message) {
      const result = validate(value, struct, {
        message
      });
      if (result[0]) throw result[0];
    }
    /**
 * Create a value with the coercion logic of struct and validate it.
 */    function create(value, struct, message) {
      const result = validate(value, struct, {
        coerce: true,
        message
      });
      if (result[0]) throw result[0]; else return result[1];
    }
    /**
 * Mask a value, returning only the subset of properties defined by a struct.
 */    function mask(value, struct, message) {
      const result = validate(value, struct, {
        coerce: true,
        mask: true,
        message
      });
      if (result[0]) throw result[0]; else return result[1];
    }
    /**
 * Check if a value passes a struct.
 */    function is(value, struct) {
      const result = validate(value, struct);
      return !result[0];
    }
    /**
 * Validate a value against a struct, returning an error if invalid, or the
 * value (with potential coercion) if valid.
 */    function validate(value, struct, options = {}) {
      const tuples = run(value, struct, options);
      const tuple = shiftIterator(tuples);
      if (tuple[0]) {
        const error = new StructError(tuple[0], (function*() {
          for (const t of tuples) if (t[0]) yield t[0];
        }));
        return [ error, void 0 ];
      } else {
        const v = tuple[1];
        return [ void 0, v ];
      }
    }
    function dist_assign(...Structs) {
      const isType = "type" === Structs[0].type;
      const schemas = Structs.map((s => s.schema));
      const schema = Object.assign({}, ...schemas);
      return isType ? type(schema) : object(schema);
    }
    /**
 * Define a new struct type with a custom validation function.
 */    function dist_define(name, validator) {
      return new Struct({
        type: name,
        schema: null,
        validator
      });
    }
    /**
 * Create a new struct based on an existing struct, but the value is allowed to
 * be `undefined`. `log` will be called if the value is not `undefined`.
 */    
    /**
 * Ensure that a value is a boolean.
 */
    function dist_boolean() {
      return dist_define("boolean", (value => "boolean" === typeof value));
    }
    /**
 * Ensure that a value is a valid `Date`.
 *
 * Note: this also ensures that the value is *not* an invalid `Date` object,
 * which can occur when parsing a date fails but still returns a `Date`.
 */    function enums(values) {
      const schema = {};
      const description = values.map((v => print(v))).join();
      for (const key of values) schema[key] = key;
      return new Struct({
        type: "enums",
        schema,
        validator(value) {
          return values.includes(value) || `Expected one of \`${description}\`, but received: ${print(value)}`;
        }
      });
    }
    /**
 * Ensure that a value is a function.
 */    function literal(constant) {
      const description = print(constant);
      const t = typeof constant;
      return new Struct({
        type: "literal",
        schema: "string" === t || "number" === t || "boolean" === t ? constant : null,
        validator(value) {
          return value === constant || `Expected the literal \`${description}\`, but received: ${print(value)}`;
        }
      });
    }
    /**
 * Ensure that no value ever passes validation.
 */
    function never() {
      return dist_define("never", (() => false));
    }
    /**
 * Augment an existing struct to allow `null` values.
 */    
    /**
 * Ensure that a value is a number.
 */
    function number() {
      return dist_define("number", (value => "number" === typeof value && !isNaN(value) || `Expected a number, but received: ${print(value)}`));
    }
    function object(schema) {
      const knowns = schema ? Object.keys(schema) : [];
      const Never = never();
      return new Struct({
        type: "object",
        schema: schema ? schema : null,
        * entries(value) {
          if (schema && isObject(value)) {
            const unknowns = new Set(Object.keys(value));
            for (const key of knowns) {
              unknowns.delete(key);
              yield [ key, value[key], schema[key] ];
            }
            for (const key of unknowns) yield [ key, value[key], Never ];
          }
        },
        validator(value) {
          return isObject(value) || `Expected an object, but received: ${print(value)}`;
        },
        coercer(value) {
          return isObject(value) ? {
            ...value
          } : value;
        }
      });
    }
    /**
 * Augment a struct to allow `undefined` values.
 */    function optional(struct) {
      return new Struct({
        ...struct,
        validator: (value, ctx) => void 0 === value || struct.validator(value, ctx),
        refiner: (value, ctx) => void 0 === value || struct.refiner(value, ctx)
      });
    }
    /**
 * Ensure that a value is an object with keys and values of specific types, but
 * without ensuring any specific shape of properties.
 *
 * Like TypeScript's `Record` utility.
 */    
    /**
 * Ensure that a value is a string.
 */
    function string() {
      return dist_define("string", (value => "string" === typeof value || `Expected a string, but received: ${print(value)}`));
    }
    /**
 * Ensure that a value is a tuple of a specific length, and that each of its
 * elements is of a specific type.
 */    
    /**
 * Ensure that a value has a set of known properties of specific types.
 *
 * Note: Unrecognized properties are allowed and untouched. This is similar to
 * how TypeScript's structural typing works.
 */
    function type(schema) {
      const keys = Object.keys(schema);
      return new Struct({
        type: "type",
        schema,
        * entries(value) {
          if (isObject(value)) for (const k of keys) yield [ k, value[k], schema[k] ];
        },
        validator(value) {
          return isObject(value) || `Expected an object, but received: ${print(value)}`;
        },
        coercer(value) {
          return isObject(value) ? {
            ...value
          } : value;
        }
      });
    }
    /**
 * Ensure that a value matches one of a set of types.
 */    function union(Structs) {
      const description = Structs.map((s => s.type)).join(" | ");
      return new Struct({
        type: "union",
        schema: null,
        coercer(value) {
          for (const S of Structs) {
            const [error, coerced] = S.validate(value, {
              coerce: true
            });
            if (!error) return coerced;
          }
          return value;
        },
        validator(value, ctx) {
          const failures = [];
          for (const S of Structs) {
            const [...tuples] = run(value, S, ctx);
            const [first] = tuples;
            if (!first[0]) return []; else for (const [failure] of tuples) if (failure) failures.push(failure);
          }
          return [ `Expected the value to satisfy a union of \`${description}\`, but received: ${print(value)}`, ...failures ];
        }
      });
    }
    /**
 * Ensure that any value passes validation, without widening its type to `any`.
 */    
    // EXTERNAL MODULE: ./node_modules/webextension-polyfill-ts/lib/index.js
    var lib = __webpack_require__(739);
    // CONCATENATED MODULE: ./node_modules/@birchill/discriminator/dist/index.js
    // Similar to assign() but only takes two arguments and if the first argument
    // is a discriminator(), it merges the properties of an object() or type()
    // into the discriminator()'s various branches.
    // Needed for supporting nested discriminator() types.
    function extend(a, b) {
      if ("discriminator" === a.type) {
        const discriminatorSchema = a.schema;
        const mapping = {};
        for (const [key, value] of Object.entries(discriminatorSchema.mapping)) mapping[key] = dist_assign(value, b);
        return discriminator(a.schema.field, mapping);
      }
      return dist_assign(a, b);
    }
    // This is a slight tweak on what superstruct does because printing "[Object
    // object]" is rarely useful.
        function dist_print(value) {
      // If the value is a string we use JSON.stringify for the quotes.
      // For objects we use JSON.stringify as a cheap pretty-print function unless
      // the object includes its own toString() method.
      if ("string" === typeof value || "object" === typeof value && value.toString === Object.prototype.toString) return JSON.stringify(value);
      return `${value}`;
    }
    function dist_isObject(a) {
      return "object" === typeof a && null !== a && !Array.isArray(a);
    }
    const discriminator = (field, mapping) => {
      const keys = Object.keys(mapping);
      const getStructForValue = value => {
        if (!dist_isObject(value) || "string" !== typeof value[field] || !keys.includes(value[field])) return;
        const branch = value[field];
        const branchStruct = mapping[branch];
        if (!branchStruct) return;
        return extend(branchStruct, object({
          [field]: literal(branch)
        }));
      };
      return new Struct({
        type: "discriminator",
        schema: {
          field,
          mapping
        },
        * entries(value, context) {
          const struct = getStructForValue(value);
          if (struct) yield* struct.entries(value, context);
        },
        validator(value, context) {
          if (!dist_isObject(value)) return `Expected an object, but received: ${dist_print(value)}`;
          if (!(field in value) || "string" !== typeof value[field]) return `Expected an object with '${field}' property, but received: ${dist_print(value)}`;
          if (!keys.includes(value[field])) return `Expected '${field}' to be one of ${keys.map((key => `'${key}'`)).join(", ")}, but received: '${value[field]}'`;
          const struct = getStructForValue(value);
          if (!struct) return true;
          return struct.validator(value, context);
        }
      });
    };
    // CONCATENATED MODULE: ./src/content/popup-state.ts
    const PopupStateSchema = type({
      // Record the position of the window
      pos: optional(type({
        // The frame to which the coordinates are relative.
        frameId: number(),
        // Page coordinates
        x: number(),
        y: number(),
        width: number(),
        height: number(),
        direction: enums([ "vertical", "horizontal", "disjoint" ]),
        side: enums([ "before", "after", "disjoint" ]),
        // Reference lookup point we should use for determining if a mouse move is
        // "between" the lookup point and the popup.
        lookupPoint: optional(type({
          // Page coordinates
          x: number(),
          y: number(),
          // Area around the lookup point that should be treated as being "on"
          // the point.
          // For example, when the lookup point is the center of a text
          // character, we want to treat the whole the bbox of the character as
          // being part of the "point'.
          // This is only needed when the popup transitions from hover -> ghost
          // display mode and hold-to-show keys are configured (but no longer
          // pressed, hence the transition). Without this, we can easily get
          // mousemove events that are outside the lookup point and not on the
          // path to the popup but where we really don't want to close the
          // popup since they're still in roughly the same place.
          // When we _don't_ have hold-to-show keys configured this is not
          // a problem because, provided the mouse is still inside the character
          // that triggered the lookup, we'll keep showing the popup.
          // This is expressed as a margin simply so that we don't have to
          // convert it when transferring between frames.
          marginX: number(),
          marginY: number()
        }))
      })),
      // The type of content the popup is positioned relative to.
      contentType: enums([ "text", "image" ]),
      // The particular appearance and behavior of the popup
      display: discriminator("mode", {
        // static: no interactivity, small tabs, no close button etc.
        static: type({}),
        // ghost: not interactive yet, shows tabs etc. but has a dotted outline,
        // has no pointer events, and no arrow. Used while scanning using the mouse
        // before settling on a word to lookup.
        ghost: discriminator("trigger", {
          // Transition to hover when the timeout expires
          timeout: type({
            timeout: number()
          }),
          // Transition to hover when the following keys are no longer held
          keys: type({
            keyType: number()
          })
        }),
        // hover: interactive using the mouse by hovering over it. Shows an arrow
        // to the lookup point.
        hover: type({}),
        // pinned: similar to hover but remains visible even if the mouse moves
        // outside the popup.
        pinned: type({}),
        // touch: interactive using touch events. Has no arrow to the lookup point
        // and does not allowing hovering over using the mouse.
        touch: type({})
      })
    });
    function clearPopupTimeout(popupState) {
      if ("ghost" === (null === popupState || void 0 === popupState ? void 0 : popupState.display.mode) && "timeout" === popupState.display.trigger) window.clearTimeout(popupState.display.timeout);
    }
    // CONCATENATED MODULE: ./src/background/background-message.ts
    const BackgroundMessageSchema = discriminator("type", {
      disable: type({
        frame: literal("*")
      }),
      enable: type({
        // We don't validate the contents of the config object yet
        config: type({}),
        id: optional(number()),
        frame: literal("*")
      }),
      isTopMost: type({
        frame: number()
      }),
      // Relayed messages from other content scripts
      // Popup showing status
      popupShown: type({
        frame: union([ literal("children"), number() ]),
        state: PopupStateSchema
      }),
      popupHidden: type({
        frame: literal("children")
      }),
      isPopupShowing: type({
        frameId: number(),
        frame: literal("top")
      }),
      // Text highlighting
      highlightText: type({
        length: number(),
        frame: number()
      }),
      clearTextHighlight: type({
        frame: number()
      }),
      // Lookup-related messages
      lookup: type({
        dictMode: enums([ "default", "kanji" ]),
        // We don't validate the contents of meta (yet)
        meta: optional(type({})),
        point: type({
          x: number(),
          y: number()
        }),
        // Likewise, we don't validate target props (yet)
        targetProps: type({}),
        text: string(),
        wordLookup: dist_boolean(),
        // Parameters for designating the iframe source
        source: type({
          frameId: number(),
          initialSrc: optional(string()),
          currentSrc: string(),
          dimensions: type({
            width: number(),
            height: number()
          })
        }),
        frame: literal("top")
      }),
      pinPopup: type({
        frame: literal("top")
      }),
      unpinPopup: type({
        frame: literal("top")
      }),
      commitPopup: type({
        frame: literal("top")
      }),
      clearResult: type({
        frame: literal("top")
      }),
      nextDictionary: type({
        frame: literal("top")
      }),
      toggleDefinition: type({
        frame: literal("top")
      }),
      movePopup: type({
        direction: enums([ "up", "down" ]),
        frame: literal("top")
      }),
      // Copy mode messages
      enterCopyMode: type({
        frame: literal("top")
      }),
      exitCopyMode: type({
        frame: literal("top")
      }),
      nextCopyEntry: type({
        frame: literal("top")
      }),
      copyCurrentEntry: type({
        copyType: enums([ "entry", "tab", "word" ]),
        frame: literal("top")
      })
    });
    // CONCATENATED MODULE: ./src/common/copy-keys.ts
    // Various common definitions used for the keys supported in copy mode.
    const CopyKeys = [ {
      type: "entry",
      key: "e",
      optionsString: "options_popup_copy_entry",
      popupString: "content_copy_keys_entry_label"
    }, {
      type: "tab",
      key: "t",
      optionsString: "options_popup_copy_fields",
      popupString: "content_copy_keys_fields_label"
    }, {
      type: "word",
      key: "w",
      optionsString: "options_popup_copy_word_kanji",
      popupString: "content_copy_keys_word_label"
    } ];
    const CopyKanjiKeyStrings = {
      popupString: "content_copy_keys_kanji_label"
    };
    const CopyNextKeyStrings = {
      optionsString: "options_popup_copy_next",
      popupString: "content_copy_keys_next_label"
    };
    // CONCATENATED MODULE: ./src/utils/dom-utils.ts
    const SVG_NS = "http://www.w3.org/2000/svg";
    const HTML_NS = "http://www.w3.org/1999/xhtml";
    function dom_utils_empty(elem) {
      while (elem.firstChild) elem.firstChild.remove();
    }
    function isContentEditableNode(node) {
      if (!node) return false;
      const nodeOrParent = nodeOrParentElement(node);
      if (!(nodeOrParent instanceof HTMLElement)) return false;
      let currentNode = nodeOrParent;
      while (currentNode) {
        if ("true" === currentNode.contentEditable) return true; else if ("false" === currentNode.contentEditable) return false;
        currentNode = currentNode.parentElement;
      }
      return false;
    }
    function nodeOrParentElement(node) {
      return node.nodeType !== Node.ELEMENT_NODE ? node.parentElement : node;
    }
    function isEditableNode(node) {
      return isTextInputNode(node) || isContentEditableNode(node);
    }
    // Both HTMLElement and SVGElement interfaces have a focus() method but I guess
    // Edge doesn't currently support focus() on SVGElement so we just duck-type
    // this.
        function isFocusable(element) {
      return element && "function" === typeof element.focus && 0 === element.focus.length;
    }
    function isTextInputNode(node) {
      const allowedInputTypes = [ "button", "email", "search", "submit", "text", "url" ];
      return !!node && node.nodeType === Node.ELEMENT_NODE && ("INPUT" === node.tagName && allowedInputTypes.includes(node.type) || "TEXTAREA" === node.tagName);
    }
    const isTextNode = node => !!node && node.nodeType === Node.TEXT_NODE;
    function isSvg(node) {
      return node.nodeType === Node.ELEMENT_NODE ? node instanceof SVGElement : node.parentElement instanceof SVGElement;
    }
    function isVerticalText(node) {
      var _a;
      const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
      return !!element && !!(null === (_a = element.ownerDocument.defaultView) || void 0 === _a ? void 0 : _a.getComputedStyle(element).writingMode.startsWith("vertical"));
    }
    // CONCATENATED MODULE: ./src/utils/geometry.ts
    // Conversion utilities
    function addMarginToPoint(margin, point) {
      return {
        left: point.x - margin.left,
        top: point.y - margin.top,
        width: margin.left + margin.right,
        height: margin.top + margin.bottom
      };
    }
    function getMarginAroundPoint(point, rect) {
      return {
        left: Math.max(0, point.x - rect.left),
        top: Math.max(0, point.y - rect.top),
        right: Math.max(0, rect.left + rect.width - point.x),
        bottom: Math.max(0, rect.top + rect.height - point.y)
      };
    }
    // Geometry utils
        function geometry_union(a, b) {
      return {
        left: Math.min(a.left, b.left),
        top: Math.min(a.top, b.top),
        width: Math.max(a.left + a.width, b.left + b.width) - Math.min(a.left, b.left),
        height: Math.max(a.top + a.height, b.top + b.height) - Math.min(a.top, b.top)
      };
    }
    function bboxIncludesPoint({bbox, margin = 0, point}) {
      return bbox.left - margin <= point.x && bbox.right + margin >= point.x && bbox.top - margin <= point.y && bbox.bottom + margin >= point.y;
    }
    // CONCATENATED MODULE: ./src/utils/mod.ts
    // JS % operator is a _remainder_ operator
    function mod(a, n) {
      return (a % n + n) % n;
    }
    // CONCATENATED MODULE: ./src/utils/strip-fields.ts
    /**
 * A helper to strip certain fields from an object.
 */
    function stripFields(o, fields) {
      const result = {
        ...o
      };
      for (const field of fields) delete result[field];
      return result;
    }
    // CONCATENATED MODULE: ./src/utils/builder.ts
    // Little helper to simplify creating HTML elements that takes care of:
    // - Adding the HTML namespace (needed so the popup works in standalong SVG
    //   documents)
    // - Returning the correct type (TypeScript's lib.dom.d.ts has createElementNS
    //   returning an HTMLElement in all cases, unlike createElement).
    // - Setting attributes (for convenience)
    function html(tagName, attributes, ...children) {
      const elem = document.createElementNS(HTML_NS, tagName);
      if (attributes) for (const key in attributes) {
        const val = attributes[key];
        if ("undefined" !== typeof val) elem.setAttribute(key, val);
      }
      if (children) elem.append(...children);
      return elem;
    }
    function svg(tagName, attributes, ...children) {
      const elem = document.createElementNS(SVG_NS, tagName);
      if (attributes) for (const key in attributes) {
        const val = attributes[key];
        if ("undefined" !== typeof val) elem.setAttribute(key, val);
      }
      if (children) elem.append(...children);
      return elem;
    }
    // CONCATENATED MODULE: ./src/content/clipboard.ts
    async function copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        // Fallback for non-HTTPS pages
        // We generate a copy event and then fill in the data in the event handler
        let callbackCalled = false;
        const copy = function(event) {
          event.clipboardData.setData("text/plain", text);
          event.preventDefault();
          callbackCalled = true;
        };
        document.addEventListener("copy", copy);
        document.execCommand("copy");
        document.removeEventListener("copy", copy);
        if (callbackCalled) return;
        // However, on Safari (of course it's Safari), if there is no current
        // selection in the page, the copy event callback will not be fired.
        
        // In that case, try generating a selection to copy instead.
                const selection = document.getSelection();
        if (!selection) throw new Error("No selection to work with");
        // This isn't going to work if this is an SVG document but I'm quite happy
        // to accept that you can't copy text from SVG documents served over
        // insecure HTTP in Safari.
                const span = html("span", {}, text);
        (document.body || document.documentElement).append(span);
        // We would like to build up a specific Range here so we can cleanly remove
        // it later but Safari doesn't seem to handle `selection.addRange` properly.
        
        // (From the console it works, but only if we use document.createRange,
        // _not_ if we use the Range constructor. From code, however, it doesn't
        // seem to work with either approach, possibly because the selection is
        // updated async?)
        
        // Given that we only expect this to occur when there's no selection _and_
        // we're on an HTTP page it's probably not so bad if we end up moving the
        // selection.
                try {
          selection.selectAllChildren(span);
          document.execCommand("copy");
        } finally {
          // Tidy up
          // It turns out Safari doesn't support Selection.removeRange anyway so we're
          // stuck dropping all the ranges even if we could create them.
          selection.removeAllRanges();
          span.remove();
        }
      }
    }
    // CONCATENATED MODULE: ./src/common/refs.ts
    const SUPPORTED_REFERENCES = [ 
    // The radical for the kanji (number and character, from rad field)
    "radical", 
    // Nelson radical (from rad field)
    "nelson_r", 
    // Kanji kentei (from misc field)
    "kk", 
    // Pinyin reading
    "py", 
    // JLPT level (from misc field)
    "jlpt", 
    // Unicode codepoint (generated)
    "unicode", 
    // Conning, The Kodansha Kanji Learner's Course
    "conning", 
    // New Japanese-English Character Dictionary
    "halpern_njecd", 
    // Learners Dictionary 2nd ed.
    "halpern_kkld_2ed", 
    // Remembering the Kanji (6th ed.)
    "heisig6", 
    // A Guide To Remembering Japanese Characters
    "henshall", 
    // Kanji and Kana (2011 edition)
    "sh_kk2", 
    // Japanese For Busy People vols I-III
    "busy_people", 
    // Kanji in Context by Nishiguchi and Kono
    "kanji_in_context", 
    // the Kodansha Compact Kanji Guide
    "kodansha_compact", 
    // Yves Maniette's "Les Kanjis dans la tete" French adaptation of Heisig
    // (Only included for lang:fr)
    "maniette", 
    // "Classic" Nelson - Modern Reader's Japanese-English Character Dictionary
    "nelson_c", 
    // The New Nelson Japanese-English Character Dictionary
    "nelson_n", 
    // Halpern's SKIP (System of Kanji Indexing by Patterns)
    "skip", 
    // Descriptor codes for The Kanji Dictionary
    "sh_desc" ];
    // Note that when adding or modifying labels here, it is important that the full
    // and short versions sort roughly the same so that they appear to be in
    // alphabetical order in both the popup (where we use the short form) and
    // options page (where we use the long form).
    // We sort by the short label, where available, which enables, for example,
    // showing an initial "The" in the long label but still sorting by the short
    // label (which does not include the "The"). Such exceptions aside, however, the
    // full and short versions should generally start with the same first few words.
    const REFERENCE_LABELS = {
      conning: {
        full: "Conning - Kodansha Kanji Learner's Course",
        short: "Conning"
      },
      sh_kk2: {
        full: "Kanji & Kana (Hadamitzky, Tuttle, 2011)",
        short: "Kanji & Kana"
      },
      halpern_njecd: {
        full: "Halpern - New Japanese-English Character Dictionary",
        short: "Halpern"
      },
      halpern_kkld_2ed: {
        full: "Kanji Learner's Dictionary (Halpbern, Kodansha, 2nd ed.)",
        short: "Kanji Learner's Dictionary"
      },
      heisig6: {
        full: "Heisig - Rembering the Kanji (6th ed.)",
        short: "Heisig"
      },
      henshall: {
        full: "Henshall - A Guide to Remembering Japanese Characters",
        short: "Henshall"
      },
      busy_people: {
        full: "Japanese for Busy People"
      },
      kanji_in_context: {
        full: "Kanji in Context"
      },
      kodansha_compact: {
        full: "Compact Kanji Guide (Kodansha)",
        short: "Compact Kanji Guide"
      },
      maniette: {
        full: "Les Kanjis dans la tete"
      },
      nelson_c: {
        full: "Classic Nelson - Modern Reader's Japanese-English Character Dictionary",
        short: "Classic Nelson"
      },
      nelson_n: {
        full: "New Nelson Japanese-English Character Dictionary",
        short: "New Nelson"
      },
      py: {
        full: "Pinyin"
      },
      skip: {
        full: "SKIP"
      },
      sh_desc: {
        full: "The Kanji Dictionary (Spahn)",
        short: "Kanji Dictionary"
      }
    };
    function getSelectedReferenceLabels(selectedRefs) {
      const result = [];
      const selectedRefsSet = new Set(selectedRefs);
      for (const ref of SUPPORTED_REFERENCES) {
        if (!selectedRefsSet.has(ref)) continue;
        result.push({
          ref,
          ...getLabelForReference(ref)
        });
      }
      // Sort by short version first since this is what will be shown in the pop-up.
            result.sort(((a, b) => (a.short || a.full).localeCompare(b.short || b.full)));
      return result;
    }
    function getLabelForReference(ref) {
      switch (ref) {
       case "radical":
        return {
          full: lib.browser.i18n.getMessage("ref_label_radical")
        };

       case "nelson_r":
        return {
          full: lib.browser.i18n.getMessage("ref_label_nelson_r")
        };

       case "kk":
        return {
          full: lib.browser.i18n.getMessage("ref_label_kk")
        };

       case "jlpt":
        return {
          full: lib.browser.i18n.getMessage("ref_label_jlpt")
        };

       case "py":
        return {
          full: lib.browser.i18n.getMessage("ref_label_py")
        };

       case "unicode":
        return {
          full: lib.browser.i18n.getMessage("ref_label_unicode")
        };

       default:
        return REFERENCE_LABELS[ref];
      }
    }
    function getReferenceValue(entry, ref) {
      switch (ref) {
       case "nelson_r":
        // If the Nelson radical is empty, it means it's the same as the regular
        // radical so we should fall through to that branch.
        if (entry.rad.nelson) return `${entry.rad.nelson} ${String.fromCodePoint(entry.rad.nelson + 0x2eff)}`;

        // Fall through
               case "radical":
        {
          const {rad} = entry;
          const radChar = rad.base ? rad.base.b || rad.base.k : rad.b || rad.k;
          return `${rad.x} ${radChar}`;
        }

       case "kk":
        return renderKanKen(entry.misc.kk);

       case "jlpt":
        return entry.misc.jlpt ? String(entry.misc.jlpt) : "";

       case "py":
        return entry.r.py ? entry.r.py.join(", ") : "";

       case "unicode":
        return `U+${entry.c.codePointAt(0).toString(16).toUpperCase()}`;

       default:
        return entry.refs[ref] ? String(entry.refs[ref]) : "";
      }
    }
    function renderKanKen(level) {
      if (!level) return "—";
      if (15 === level) return lib.browser.i18n.getMessage("content_kanji_kentei_level_pre", [ "1" ]);
      if (25 === level) return lib.browser.i18n.getMessage("content_kanji_kentei_level_pre", [ "2" ]);
      return lib.browser.i18n.getMessage("content_kanji_kentei_level", [ String(level) ]);
    }
    // CONCATENATED MODULE: ./src/content/copy-text.ts
    function getTextToCopy({entry, copyType, kanjiReferences = [], showKanjiComponents = true}) {
      switch (copyType) {
       case "entry":
        return getEntryToCopy(entry, {
          kanjiReferences,
          showKanjiComponents
        });

       case "tab":
        return getFieldsToCopy(entry, {
          kanjiReferences,
          showKanjiComponents
        });

       case "word":
        return getWordToCopy(entry);
      }
    }
    function getWordToCopy(entry) {
      let result;
      switch (entry.type) {
       case "word":
        {
          let headwords = entry.data.k && entry.data.k.length ? entry.data.k.filter((k => {
            var _a;
            return !(null === (_a = k.i) || void 0 === _a ? void 0 : _a.includes("sK"));
          })) : entry.data.r.filter((r => {
            var _a;
            return !(null === (_a = r.i) || void 0 === _a ? void 0 : _a.includes("sk"));
          }));
          // Only show matches -- unless our only matches were search-only
          // terms -- in which case we want to include all headwords.
                    if (headwords.some((h => h.match))) headwords = headwords.filter((entry => entry.match));
          result = headwords.map((entry => entry.ent)).join(", ");
        }
        break;

       case "name":
        result = (entry.data.k || entry.data.r).join(", ");
        break;

       case "kanji":
        result = entry.data.c;
        break;
      }
      return result;
    }
    function getEntryToCopy(entry, {kanjiReferences = [], showKanjiComponents = true} = {}) {
      var _a;
      let result;
      switch (entry.type) {
       case "word":
        {
          const kanjiHeadwords = entry.data.k ? entry.data.k.filter((k => {
            var _a;
            return !(null === (_a = k.i) || void 0 === _a ? void 0 : _a.includes("sK"));
          })).map((k => k.ent)) : [];
          const kanaHeadwords = entry.data.r.filter((r => {
            var _a;
            return !(null === (_a = r.i) || void 0 === _a ? void 0 : _a.includes("sk"));
          })).map((r => r.ent));
          result = kanjiHeadwords.length ? `${kanjiHeadwords.join(", ")} [${kanaHeadwords.join(", ")}]` : kanaHeadwords.join(", ");
          if (null === (_a = entry.data.romaji) || void 0 === _a ? void 0 : _a.length) result += ` (${entry.data.romaji.join(", ")})`;
          result += " " + serializeDefinition(entry.data);
        }
        break;

       case "name":
        result = entry.data.k ? `${entry.data.k.join(", ")} [${entry.data.r.join(", ")}]` : entry.data.r.join(", ");
        for (const [i, tr] of entry.data.tr.entries()) {
          if (i) result += "; ";
          if (tr.type) result += ` (${tr.type.join(", ")})`;
          result += " " + tr.det.join(", ");
        }
        break;

       case "kanji":
        {
          const {c, r, m, rad, comp} = entry.data;
          result = c;
          const readings = getKanjiReadings(entry.data);
          if (readings) result += ` [${readings}]`;
          if (r.na && r.na.length) result += ` (${r.na.join("、")})`;
          result += ` ${m.join(", ")}`;
          const radicalLabel = lib.browser.i18n.getMessage("content_kanji_radical_label");
          result += `; ${radicalLabel}: ${rad.b || rad.k}（${rad.na.join("、")}）`;
          if (rad.base) {
            const baseChar = rad.base.b || rad.base.k;
            const baseReadings = rad.base.na.join("、");
            result += " " + lib.browser.i18n.getMessage("content_kanji_base_radical", [ baseChar, baseReadings ]);
          }
          if (showKanjiComponents && comp.length) {
            const componentsLabel = lib.browser.i18n.getMessage("content_kanji_components_label");
            const components = [];
            for (const component of comp) components.push(`${component.c} (${component.na.length ? component.na[0] + ", " : ""}${component.m.length ? component.m[0] : ""})`);
            result += `; ${componentsLabel}: ${components.join(", ")}`;
          }
          if (kanjiReferences.length) {
            const labels = getSelectedReferenceLabels(kanjiReferences);
            for (const label of labels) {
              if ("nelson_r" === label.ref && !rad.nelson && kanjiReferences.includes("radical")) continue;
              result += `; ${label.short || label.full} ${getReferenceValue(entry.data, label.ref) || "-"}`;
            }
          }
        }
        break;
      }
      return result;
    }
    function serializeDefinition(entry) {
      const senses = entry.s;
      if (senses.length > 1) {
        const nativeSenses = senses.filter((s => s.lang && "en" !== s.lang)).map((s => `• ${serializeSense(s)}`));
        const enSenses = senses.filter((s => !s.lang || "en" === s.lang)).map(((s, index) => `(${index + 1}) ${serializeSense(s)}`));
        return [ ...nativeSenses, ...enSenses ].join(" ");
      } else return serializeSense(senses[0]);
    }
    const glossTypes = {
      [1 /* GlossType.Expl */ ]: "expl",
      [2 /* GlossType.Lit */ ]: "lit",
      [3 /* GlossType.Fig */ ]: "fig",
      [4 /* GlossType.Tm */ ]: "tm",
      [0 /* GlossType.None */ ]: void 0
    };
    // Match the formatting in Edict
        const dialects = {
      bra: "bra:",
      ho: "hob:",
      tsug: "tsug:",
      th: "thb:",
      na: "nab:",
      kt: "ktb:",
      ks: "ksb:",
      ky: "kyb:",
      os: "osb:",
      ts: "tsb:",
      "9s": "kyu:",
      ok: "rkb:"
    };
    function serializeSense(sense) {
      let result = "";
      result += sense.pos ? `(${sense.pos.join(",")}) ` : "";
      result += sense.field ? `(${sense.field.join(",")}) ` : "";
      result += sense.misc ? `(${sense.misc.join(",")}) ` : "";
      result += sense.dial ? `(${sense.dial.map((dial => dial in dialects ? dialects[dial] : dial)).join(",")}) ` : "";
      const glosses = [];
      for (const g of sense.g) {
        let gloss = "";
        if (g.type && 4 /* GlossType.Tm */ !== g.type) {
          const glossTypeStr = lib.browser.i18n.getMessage(`gloss_type_short_${glossTypes[g.type]}`);
          if (glossTypeStr) gloss = `(${glossTypeStr}) `;
        }
        gloss += g.str;
        if (4 /* GlossType.Tm */ === g.type) gloss += "™";
        glosses.push(gloss);
      }
      result += glosses.join("; ");
      result += sense.lsrc ? ` (${sense.lsrc.map(serializeLangSrc).join(", ")})` : "";
      result += sense.inf ? ` (${sense.inf})` : "";
      return result;
    }
    function serializeLangSrc(lsrc) {
      const lang = lsrc.wasei ? "wasei" : lsrc.lang;
      const parts = [];
      if (lang) parts.push(lang);
      if (lsrc.src) parts.push(lsrc.src);
      return parts.join(": ");
    }
    function getFieldsToCopy(entry, {kanjiReferences = [], showKanjiComponents = true} = {}) {
      var _a;
      let result;
      switch (entry.type) {
       case "word":
        result = entry.data.k && entry.data.k.length ? entry.data.k.filter((k => {
          var _a;
          return !(null === (_a = k.i) || void 0 === _a ? void 0 : _a.includes("sK"));
        })).map((k => k.ent)).join("; ") : "";
        result += "\t" + entry.data.r.filter((r => {
          var _a;
          return !(null === (_a = r.i) || void 0 === _a ? void 0 : _a.includes("sk"));
        })).map((r => r.ent)).join("; ");
        if (null === (_a = entry.data.romaji) || void 0 === _a ? void 0 : _a.length) result += "\t" + entry.data.romaji.join("; ");
        result += "\t" + serializeDefinition(entry.data);
        break;

       case "name":
        {
          let definition = "";
          for (const [i, tr] of entry.data.tr.entries()) {
            if (i) definition += "; ";
            if (tr.type) definition += `(${tr.type.join(", ")}) `;
            definition += tr.det.join(", ");
          }
          // Split each kanji name out into a separate row
                    result = "";
          for (const [i, kanji] of (entry.data.k || [ "" ]).entries()) {
            if (i) result += "\n";
            result += `${kanji}\t${entry.data.r.join(", ")}\t${definition}`;
          }
        }
        break;

       case "kanji":
        {
          const {c, r, m, comp} = entry.data;
          result = c;
          const readings = getKanjiReadings(entry.data);
          result += `\t${readings}`;
          result += `\t${(r.na || []).join("、")}`;
          result += `\t${m.join(", ")}`;
          if (showKanjiComponents) {
            const components = comp.map((comp => comp.c)).join("");
            result += `\t${components}`;
          }
          if (kanjiReferences.length) {
            const labels = getSelectedReferenceLabels(kanjiReferences);
            for (const label of labels) 
            // For some common types we don't produce the label
            switch (label.ref) {
             case "radical":
             case "unicode":
             case "nelson_r":
              // All the above types also either always exist (radical,
              // unicode) or if they don't exist we want to produce an empty
              // value (not '-') hence why we don't include the ... || '-'
              // from the next block.
              result += "\t" + getReferenceValue(entry.data, label.ref);
              break;

             default:
              result += `\t${label.short || label.full} ${getReferenceValue(entry.data, label.ref) || "-"}`;
              break;
            }
          }
        }
        break;
      }
      return result;
    }
    function getKanjiReadings(kanji) {
      return [ ...kanji.r.on ? kanji.r.on : [], ...kanji.r.kun ? kanji.r.kun : [] ].join("、");
    }
    // CONCATENATED MODULE: ./src/content/gdocs-canvas.ts
    function injectGdocsStyles() {
      removeGdocsStyles();
      const style = document.createElement("style");
      style.id = "tenten-gdocs-styles";
      style.textContent = `.kix-canvas-tile-selection { pointer-events: none }\n.kix-canvas-tile-content g rect[aria-label] { pointer-events: all }\n#tenten-gdocs-highlight {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  opacity: 0.3;\n}\n#tenten-gdocs-highlight .box {\n  position: absolute;\n  pointer-events: none;\n  background-color: yellow;\n}\n#tenten-gdocs-highlight .box.blue {\n  background-color: #2698fb;\n}`;
      (document.head || document.documentElement).appendChild(style);
    }
    function removeGdocsStyles() {
      var _a;
      null === (_a = document.getElementById("tenten-gdocs-styles")) || void 0 === _a ? void 0 : _a.remove();
    }
    function getTextFromAnnotatedCanvas({maxLength, point}) {
      var _a;
      const elem = document.elementFromPoint(point.x, point.y);
      if (!elem || !isGdocsSpan(elem)) return {
        position: null,
        text: ""
      };
      let text = elem.getAttribute("aria-label");
      if (!text) return {
        position: null,
        text: ""
      };
      const font = elem.getAttribute("data-font-css");
      if (!font) return {
        position: null,
        text: ""
      };
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return {
        position: null,
        text: ""
      };
      const docScale = getDocScale(elem);
      // Do a binary search to find the start of the string
            const xPos = point.x - elem.getBoundingClientRect().left;
      ctx.font = font;
      let start = 0;
      let end = text.length;
      while (start < end && Math.abs(end - start) > 1) {
        const mid = Math.floor((start + end) / 2);
        const width = ctx.measureText(text.substring(0, mid)).width * docScale;
        if (width > xPos) end = mid; else if (width < xPos) start = mid; else {
          start = mid;
          break;
        }
      }
      // If maxLength is not set, we just stop at the end of the current span.
      
      // If it _is_ set and we don't have enough characters, look up subsequent
      // spans.
            let currentSpan = elem;
      while (maxLength && text.substring(start).length < maxLength) {
        const nextSpan = currentSpan.nextSibling;
        if (!isGdocsSpan(nextSpan)) break;
        const remainingLength = maxLength - text.substring(start).length;
        text += (null === (_a = nextSpan.getAttribute("aria-label")) || void 0 === _a ? void 0 : _a.substring(0, remainingLength)) || "";
        currentSpan = nextSpan;
      }
      return {
        position: {
          offset: start,
          offsetNode: elem
        },
        text
      };
    }
    function getDocScale(gdocsSpanElem) {
      const transform = gdocsSpanElem.getAttribute("transform");
      if (!transform) return 1;
      const matches = transform.match(/matrix\((.*)\)\s?/);
      if (!matches) return 1;
      const [, inner] = matches;
      const parts = inner.split(/\s*,\s*/);
      // We expect the document scale to be uniform (i.e. a =~ d) but we also happen
      // to know we only ever scale width (horizontal) values so we can just fetch
      // the horizontal scale value.
            if (!parts.length) return 1;
      const a = parseFloat(parts[0]);
      return a > 0 ? a : 1;
    }
    function isGdocsSpan(node) {
      return !!node && node.nodeType === Node.ELEMENT_NODE && node.namespaceURI === SVG_NS && "rect" === node.tagName && node.hasAttribute("aria-label");
    }
    function isGdocsOverlayElem(node) {
      return !!node && node.nodeType === Node.ELEMENT_NODE && node.namespaceURI === SVG_NS && ("g" === node.tagName || "rect" === node.tagName);
    }
    function getGdocsRangeBboxes({startSpan, offset, length}) {
      const boxes = [];
      const text = startSpan.getAttribute("aria-label");
      if (!text) return boxes;
      const font = startSpan.getAttribute("data-font-css");
      if (!font) return boxes;
      const ctx = document.createElement("canvas").getContext("2d");
      if (!ctx) return boxes;
      const docScale = getDocScale(startSpan);
      const {x, y: top, height} = startSpan.getBoundingClientRect();
      ctx.font = font;
      const leadingWidth = offset ? ctx.measureText(text.substring(0, offset)).width * docScale : 0;
      const width = ctx.measureText(text.substring(offset, offset + length)).width * docScale;
      boxes.push({
        left: x + leadingWidth,
        top,
        width,
        height
      });
      let currentSpan = startSpan;
      let accumulatedLength = text.length - offset;
      while (accumulatedLength < length) {
        if (!isGdocsSpan(currentSpan.nextSibling)) break;
        currentSpan = currentSpan.nextSibling;
        const text = currentSpan.getAttribute("aria-label");
        const font = currentSpan.getAttribute("data-font-css");
        if (!text || !font) continue;
        const lengthToMeasure = Math.min(length - accumulatedLength, text.length);
        accumulatedLength += lengthToMeasure;
        const {x: left, y: top, height} = currentSpan.getBoundingClientRect();
        ctx.font = font;
        const width = ctx.measureText(text.substring(0, lengthToMeasure)).width * docScale;
        boxes.push({
          left,
          top,
          width,
          height
        });
      }
      return boxes;
    }
    function highlightGdocsRange({startSpan, offset, length, style}) {
      let highlightContainer = document.getElementById("tenten-gdocs-highlight");
      if (highlightContainer) dom_utils_empty(highlightContainer);
      const boxes = getGdocsRangeBboxes({
        startSpan,
        offset,
        length
      });
      if (!boxes.length) return;
      if (!highlightContainer) {
        highlightContainer = document.createElement("div");
        highlightContainer.id = "tenten-gdocs-highlight";
        const parent = document.querySelector(".kix-appview-editor") || document.body;
        parent.append(highlightContainer);
      }
      const containerBbox = highlightContainer.getBoundingClientRect();
      for (const box of boxes) {
        const boxElem = document.createElement("div");
        boxElem.classList.add("box");
        boxElem.classList.toggle("blue", "blue" === style);
        boxElem.style.left = `${box.left - containerBbox.left}px`;
        boxElem.style.top = `${box.top - containerBbox.top}px`;
        boxElem.style.width = `${box.width}px`;
        boxElem.style.height = `${box.height}px`;
        highlightContainer.append(boxElem);
      }
    }
    function clearGdocsHighlight() {
      var _a;
      null === (_a = document.getElementById("tenten-gdocs-highlight")) || void 0 === _a ? void 0 : _a.remove();
    }
    // CONCATENATED MODULE: ./src/content/get-copy-entry.ts
    function getCopyEntryFromResult({series, result, index}) {
      var _a, _b, _c, _d, _e, _f;
      // Get the actual index to use.
            let numberOfCopyableEntries;
      if ("words" === series) {
        const {namePreview} = result;
        numberOfCopyableEntries = (null !== (_a = null === namePreview || void 0 === namePreview ? void 0 : namePreview.names.length) && void 0 !== _a ? _a : 0) + (null !== (_c = null === (_b = result.words) || void 0 === _b ? void 0 : _b.data.length) && void 0 !== _c ? _c : 0);
      } else if ("names" === series) numberOfCopyableEntries = null !== (_e = null === (_d = result.names) || void 0 === _d ? void 0 : _d.data.length) && void 0 !== _e ? _e : 0; else if ("kanji" === series) numberOfCopyableEntries = 1;
      if (!numberOfCopyableEntries) return null;
      const wrappedIndex = index % numberOfCopyableEntries;
      // Find the corresponding entry
            if ("words" === series) {
        const {namePreview} = result;
        const namesLength = null !== (_f = null === namePreview || void 0 === namePreview ? void 0 : namePreview.names.length) && void 0 !== _f ? _f : 0;
        const inNamePreviewRange = wrappedIndex < namesLength;
        if (inNamePreviewRange) return {
          type: "name",
          data: namePreview.names[wrappedIndex]
        };
        return result.words ? {
          type: "word",
          data: result.words.data[wrappedIndex - namesLength]
        } : null;
      } else if ("names" === series) return result.names ? {
        type: "name",
        data: result.names.data[wrappedIndex]
      } : null; else if ("kanji" === series) return result.kanji ? {
        type: "kanji",
        data: result.kanji.data
      } : null;
      return null;
    }
    // CONCATENATED MODULE: ./src/utils/char-range.ts
    const halfWidthNumbers = /[0-9]/;
    // U+FF01~U+FF5E is for full-width alphanumerics (includes some punctuation
    // like ＆ and ～ because they appear in the kanji headwords for some entries)
    
    // Note that U+FF5E is full-width tilde ～ (not 〜 which is a wave dash).
    
    // U+FF61~U+FF65 is some halfwidth ideographic symbols, e.g. ｡ but we skip them
    // (although previous rikai-tachi included them) since they're mostly going to
    // be delimiters
        const fullWidthAlphanumerics = /[\uff01-\uff5e]/;
    // On some platforms, Google Docs puts zero-width joiner characters between
    // _all_ the characters so we need to match on them in order to match runs of
    // characters.
        const zeroWidthNonJoiner = /[\u200c]/;
    // * U+25CB is 'white circle' often used to represent a blank
    //   (U+3007 is an ideographic zero that is also sometimes used for this
    //   purpose, but this is included in the U+3001~U+30FF range.)
        const whiteCircle = /[\u25cb]/;
    // * U+3000~U+3039 is ideographic punctuation but we skip:
    
    //    U+3000 (ideographic space),
    //    U+3001 (、 ideographic comma),
    //    U+3002 (。 ideographic full stop),
    //    U+3003 (〃 ditto mark),
    //    U+3008,U+3009 (〈〉),
    //    U+300A,U+300B (《》),
    //    U+300C,U+300D (「」 corner brackets for quotations),
    //                  [ENAMDICT actually uses this in one entry,
    //                  "ウィリアム「バッファロービル」コーディ", but I think we
    //                  can live without being able to recognize that)
    //    U+300E,U+300F (『 』), and
    //    U+3010,U+3011 (【 】),
    
    //   since these are typically only going to delimit words.
        const nonDelimitingIdeographicPunctuation = /[\u3004-\u3007\u3012-\u3039]/;
    // U+3041~U+309F is the hiragana range
        const hiragana = /[\u3041-\u309f\u{1b001}]/u;
    // U+30A0~U+30FF is the katakana range
        const katakana = /[\u30a0-\u30ff\u{1b000}]/u;
    // * U+3220~U+3247 is various enclosed characters like ㈵
    // * U+3280~U+32B0 is various enclosed characters like ㊞
    // * U+32D0~U+32FF is various enclosed characters like ㋐ and ㋿.
        const enclosedChars = /[\u3220-\u3247\u3280-\u32b0\u32d0-\u32ff]/;
    // U+3300~U+3357 is various shorthand characters from the CJK compatibility
    // block like ㍍
        const shorthandChars = /[\u3300-\u3357]/;
    // U+3358~U+3370 is numbers composed with 点 e.g. ㍘
        const tenChars = /[\u3358-\u3370]/;
    // U+337B~U+337E is various era names e.g. ㍻
        const eraChars = /[\u337B-\u337E]/;
    // U+337F is ㍿
        const kabushikiGaisha = /[\u337F]/;
    // U+4E00~U+9FFF is the CJK Unified Ideographs block ("the kanji")
        const kanji = /[\u4e00-\u9fff]/;
    // * U+3400~U+4DBF is the CJK Unified Ideographs Extension A block (rare
    //   kanji)
    // * U+F900~U+FAFF is the CJK Compatibility Ideographs block (random odd
    //   kanji, because standards)
    // * U+20000~U+2A6DF is CJK Unified Ideographs Extension B (more rare kanji)
        const rareKanji = /[\u3400-\u4dbf\uf900-\ufaff\u{20000}-\u{2a6df}]/u;
    // U+FF66~U+FF9F is halfwidth katakana
        const halfwidthKatakanaChar = /[\uff66-\uff9f]/;
    // U+1B002-U+1B0FF is hentaigana
        const hentaigana = /[\u{1b002}-\u{1b0ff}]/u;
    function getCombinedCharRange(ranges) {
      let source = "[";
      let flags = "";
      for (const range of ranges) {
        // Check we have a character class
        if (!isCharacterClassRange(range)) throw new Error(`Expected a character class range, got: ${range.source}`);
        // Check it is not negated
                if ("^" === range.source[1]) throw new Error(`Expected a non-negated character class range, got ${range.source}`);
        source += range.source.substring(1, range.source.length - 1);
        if (-1 !== range.flags.indexOf("u")) flags = "u";
      }
      source += "]";
      return new RegExp(source, flags);
    }
    // This is far from complete but all the RegExps we deal with are ones we've
    // written so hopefully it's a good-enough sanity check.
        function isCharacterClassRange(re) {
      return re.source.length >= 2 && re.source.startsWith("[") && re.source.endsWith("]");
    }
    // "Japanese" here simply means any character we treat as worth attempting to
    // translate, including full-width alphanumerics etc. but NOT characters that
    // typically delimit words.
        const japaneseChar = getCombinedCharRange([ fullWidthAlphanumerics, zeroWidthNonJoiner, whiteCircle, nonDelimitingIdeographicPunctuation, hiragana, katakana, enclosedChars, shorthandChars, tenChars, eraChars, kabushikiGaisha, kanji, rareKanji, halfwidthKatakanaChar, hentaigana ]);
    function getNegatedCharRange(range) {
      // Check if we got a character class range
      if (!isCharacterClassRange(range)) throw new Error(`Expected a character class range, got: ${range.source}`);
      const negated = "^" === range.source[1];
      const source = `[${negated ? "" : "^"}${range.source.substring(negated ? 2 : 1, range.source.length - 1)}]`;
      return new RegExp(source, range.flags);
    }
    const nonJapaneseChar = getNegatedCharRange(japaneseChar);
    const nonJapaneseCharOrNumber = getNegatedCharRange(getCombinedCharRange([ japaneseChar, halfWidthNumbers, /[,、.．]/ ]));
    function hasKatakana(text) {
      return katakana.test(text);
    }
    const numberStartRegex = /^[0-9０-９一二三四五六七八九十百]/;
    function startsWithNumber(input) {
      return !!input.length && numberStartRegex.test(input);
    }
    function isChromium() {
      return -1 !== navigator.userAgent.indexOf("Chrome/") || -1 !== navigator.userAgent.indexOf("Chromium/");
    }
    function isSafari() {
      return -1 !== navigator.userAgent.indexOf("Safari/") && !isChromium();
    }
    function isIOS() {
      return [ "iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod" ].includes(navigator.platform) || 
      // iPad on iOS 13 detection
      navigator.userAgent.includes("Mac") && "ontouchend" in document;
    }
    function isThunderbird() {
      return -1 !== navigator.userAgent.indexOf("Thunderbird/");
    }
    // CONCATENATED MODULE: ./src/content/content-type.ts
    function getContentType(elem) {
      return [ "IMG", "PICTURE", "VIDEO" ].includes(elem.tagName) ? "image" : "text";
    }
    // CONCATENATED MODULE: ./src/content/numbers.ts
    // The following is based heavily on:
    // http://ginstrom.com/scribbles/2009/04/28/converting-kanji-numbers-to-integers-with-python/
    // Following are the digits we recognize for numbers specified as a series of
    // digits e.g. 五六. We call this a transliterated number.
    const transliterateMap = new Map([ [ "〇", 0 ], [ "一", 1 ], [ "二", 2 ], [ "三", 3 ], [ "四", 4 ], [ "五", 5 ], [ "六", 6 ], [ "七", 7 ], [ "八", 8 ], [ "九", 9 ], [ "０", 0 ], [ "１", 1 ], [ "２", 2 ], [ "３", 3 ], [ "４", 4 ], [ "５", 5 ], [ "６", 6 ], [ "７", 7 ], [ "８", 8 ], [ "９", 9 ], [ "0", 0 ], [ "1", 1 ], [ "2", 2 ], [ "3", 3 ], [ "4", 4 ], [ "5", 5 ], [ "6", 6 ], [ "7", 7 ], [ "8", 8 ], [ "9", 9 ], [ ".", -1 ], [ "。", -1 ], [ "．", -1 ] ]);
    // Following are the digits we recognize for numbers that specify powers of 10,
    // e.g. 五十六.
        const kanjiToNumberMap = new Map([ [ "〇", 0 ], [ "一", 1 ], [ "二", 2 ], [ "三", 3 ], [ "四", 4 ], [ "五", 5 ], [ "六", 6 ], [ "七", 7 ], [ "八", 8 ], [ "九", 9 ], [ "０", 0 ], [ "１", 1 ], [ "２", 2 ], [ "３", 3 ], [ "４", 4 ], [ "５", 5 ], [ "６", 6 ], [ "７", 7 ], [ "８", 8 ], [ "９", 9 ], [ "0", 0 ], [ "1", 1 ], [ "2", 2 ], [ "3", 3 ], [ "4", 4 ], [ "5", 5 ], [ "6", 6 ], [ "7", 7 ], [ "8", 8 ], [ "9", 9 ], [ "十", 10 ], [ "百", 100 ], [ "千", 1000 ], [ "万", 10000 ], [ "億", 100000000 ], [ "兆", 1000000000000 ], [ ".", -1 ], [ "。", -1 ], [ "．", -1 ] ]);
    function parseNumber(inputText) {
      // Drop any commas in the string first
      const text = inputText.replace(/[,、]/g, "");
      // Try a transliterated number first since inputs like 二二一 would also be
      // found in kanjiToNumberMap.
            let digits = [ ...text ].map((ch => transliterateMap.get(ch)));
      if (digits.length && !digits.some((digit => "undefined" === typeof digit))) if (-1 === digits.indexOf(-1)) return parseInt(digits.join(""), 10); else return parseFloat(digits.map((digit => -1 === digit ? "." : digit)).join(""));
      // Otherwise, try processing as a number with powers of ten.
            digits = [ ...text ].map((ch => kanjiToNumberMap.get(ch)));
      if (!digits.length || digits.some((ch => "undefined" === typeof ch))) 
      // If that failed, it's not something we know how to parse as a number.
      return null;
      let numbers = digits;
      let result = 0;
      while (numbers.length > 1) {
        const [first, second, ...rest] = numbers;
        // Detect strings of digits and combine them
                if (first < 10 && second < 10) {
          let decimal = 0;
          while (numbers.length > 1 && numbers[1] < 10) if (-1 === numbers[1]) {
            if (decimal) return null;
            decimal = 1;
            numbers = [ numbers[0], ...numbers.slice(2) ];
          } else if (decimal) numbers = [ numbers[0] + numbers[1] * Math.pow(10, -decimal++), ...numbers.slice(2) ]; else numbers = [ 10 * numbers[0] + numbers[1], ...numbers.slice(2) ];
          continue;
        }
        if (!validSequence(first, second)) return null;
        if (second < first) 
        // Detected a step down, check if there are any multipliers on what we
        // currently have.
        if (rest.some((x => x > first))) numbers = breakDownNumbers(numbers); else {
          // No multipliers on what we currently have accumualated so store what
          // we have and process the remainder.
          result += first;
          numbers = [ second, ...rest ];
        } else numbers = [ first * second, ...rest ];
      }
      return result + (numbers.length ? numbers[0] : 0);
    }
    function validSequence(c1, c2) {
      // If we have xxx万, xxx億, xxx兆 then the only requirement is that xxx is less
      // than the 'base'.
      if (c2 >= 10000 && c1 < c2) return true;
      if (c1 >= 10000 && c2 <= 1000) return true;
      if (c1 >= 100 && c2 < c1 && c2 >= 10 && c2 <= 1000) return true;
      // Don't allow 一十 or 一百
            if (1 === c1 && (10 === c2 || 100 === c2)) return false;
      return c1 < 10 !== c2 < 10;
    }
    function breakDownNumbers(numbers) {
      // If this is called, we already know that second < first.
      // Furthermore, we know that there is something after 'second' that is
      // greater than 'first'.
      // Most often, the second value will be the 'unit' (i.e. value < 10) and the
      // third value will be the base-10 multiplier.
      // e.g. [300, 2, 10, 10000], i.e. 3,200,000
      // In this case we want to multiply the second and third values together
      // i.e. [300, 20, 10000]
      // There are two cases where we can't do this:
      // (a) When the third value is actually a multiplier not just on the second
      //     value, but on everything we've accumulated in the first value.
      //     In this case it will be greater than the first value.
      //     e.g. [300, 2, 10000], i.e. 3,020,000
      //     Here we can add the first two together and proceed.
      //     i.e. [302, 10000]
      // (b) When the third value is less than the second, i.e. is _not_ a
      //     multiplier on it.
      //     This mostly happens when lining up powers of 10 since they we don't
      //     need a 'unit' in this case.
      //     e.g. [1000, 100, 10, 10000], i.e. 11,100,000
      //     Here too we can just add the first two together and proceed.
      //     i.e. [1100, 10, 10000]
      const [first, second, third, ...rest] = numbers;
      if (first < third || third < second) return [ first + second, third, ...rest ]; else return [ first, second * third, ...rest ];
    }
    // This very long regex is really just trying to say: only recognize a number
    // that
    
    // - is at least two digits long, and
    // - has at least one kanji digit
    
        const numberRegex = /^([一二三四五六七八九十百千万億兆京][0-9.,０-９。．、〇一二三四五六七八九十百千万億兆京]+)|([0-9,０-９、]+([.。．][0-9０-９]+)?[〇一二三四五六七八九十百千万億兆京][0-9.,０-９。．、〇一二三四五六七八九十百千万億兆京]*)/;
    function extractNumberMetadata(text) {
      const matches = numberRegex.exec(text);
      if (!matches || 0 !== matches.index) return;
      const valueStr = matches[0];
      if (!valueStr) return;
      const value = parseNumber(valueStr);
      if (!value) return;
      return {
        type: "number",
        value,
        src: valueStr,
        matchLen: valueStr.length
      };
    }
    // CONCATENATED MODULE: ./src/content/currency.ts
    function lookForCurrency({nodeText, textDelimiter: originalTextDelimeter}) {
      // We only need to expand the search range if it starts with a currency
      // symbol. For the 8千円 case, the regular text lookup will find the necessary
      // text.
      if (nodeText.length && "¥" !== nodeText[0] && "￥" !== nodeText[0]) return null;
      const japaneseOrPrice = getCombinedCharRange([ getNegatedCharRange(originalTextDelimeter), halfWidthNumbers, /[¥￥\s,、.．。]/ ]);
      const textDelimiter = getNegatedCharRange(japaneseOrPrice);
      return {
        textDelimiter,
        textEnd: nodeText.search(textDelimiter)
      };
    }
    const currencyRegex = /([￥¥]\s*([0-9.,０-９。．、〇一二三四五六七八九十百千万億兆京]+))|(([0-9.,０-９。．、〇一二三四五六七八九十百千万億兆京]+)\s*円)/;
    function extractCurrencyMetadata(text) {
      var _a;
      const matches = currencyRegex.exec(text);
      if (!matches || 0 !== matches.index) return;
      const valueStr = null !== (_a = matches[2]) && void 0 !== _a ? _a : matches[4];
      if (!valueStr) return;
      const value = parseNumber(valueStr);
      if (!value) return;
      return {
        type: "currency",
        value,
        matchLen: matches[0].length
      };
    }
    // CONCATENATED MODULE: ./src/content/measure.ts
    function lookForMeasure({nodeText, textDelimiter: originalTextDelimeter}) {
      if (!startsWithNumber(nodeText)) return null;
      // getTextFromTextNode should already have expanded this range to include
      // half-width numbers and serparators so we just need to add the units and
      // space characters.
            const japaneseOrUnit = getCombinedCharRange([ getNegatedCharRange(originalTextDelimeter), /[\sm2㎡²]/ ]);
      const textDelimiter = getNegatedCharRange(japaneseOrUnit);
      return {
        textDelimiter,
        textEnd: nodeText.search(textDelimiter)
      };
    }
    const jouRegex = /([0-9.０-９。．〇一二三四五六七八九十百]+)\s*(畳|帖)(半?)/;
    const squareMeterRegex = /([0-9.０-９。．〇一二三四五六七八九十百千万]+)\s*(㎡|(?:m2)|(?:m²)|(?:平方メートル)|(?:平方ﾒｰﾄﾙ)|(?:平方㍍)|(?:平㍍)|(?:平米)|(?:平方米))/;
    function extractMeasureMetadata(text) {
      let type;
      // Try either of our regexs
            let matches = jouRegex.exec(text);
      if (matches && 0 === matches.index && 4 === matches.length) type = "jou"; else {
        matches = squareMeterRegex.exec(text);
        if (!matches || 0 !== matches.index || 3 !== matches.length) return;
        type = "m2";
      }
      // Parse value
            if ("string" !== typeof matches[1]) return;
      const valueStr = matches[1];
      let value = parseNumber(valueStr);
      if (null === value) return;
      // Parse unit
            let unit;
      if ("jou" === type) {
        if ("畳" !== matches[2] && "帖" !== matches[2]) return;
        unit = matches[2];
      } else unit = type;
      // Add final 半
            if ("jou" === type && "半" === matches[3]) value += 0.5;
      return {
        type: "measure",
        unit,
        value,
        matchLen: matches[0].length
      };
    }
    const alternateJouSizes = [ {
      type: "kyouma",
      label: "京間",
      ratio: 1.82405
    }, {
      type: "chuukyouma",
      label: "中京間",
      ratio: 1.6562
    }, {
      type: "edoma",
      label: "江戸間",
      ratio: 1.5488
    }, {
      type: "danchima",
      label: "団地間",
      ratio: 1.445
    } ];
    function convertMeasure(measure) {
      if ("m2" === measure.unit) return {
        unit: "帖",
        value: measure.value / 1.62,
        alt: alternateJouSizes.map((size => ({
          type: size.type,
          label: size.label,
          unit: "畳",
          value: measure.value / size.ratio
        })))
      };
      return {
        unit: "m2",
        value: 1.62 * measure.value,
        alt: 
        // Only show alternative sizes of the unit is 畳. If it's 帖 it
        // means 1.62m2.
        "畳" === measure.unit ? alternateJouSizes.map((size => ({
          type: size.type,
          label: size.label,
          unit: "m2",
          value: measure.value * size.ratio
        }))) : void 0
      };
    }
    // CONCATENATED MODULE: ./src/content/shogi.ts
    // ---------------------------------------------------------------------------
    // Parsing
    // ---------------------------------------------------------------------------
    function lookForShogi({nodeText, textDelimiter: originalTextDelimeter}) {
      if (!nodeText.length) return null;
      // If the test starts with one of the shogi side indicators, then we assume
      // that the text is a shogi move and we can use the shogi delimeter.
            if ([ "▲", "△", "☗", "☖" ].includes(nodeText[0])) return {
        textDelimiter: shogiDelimeter,
        textEnd: nodeText.search(shogiDelimeter)
      };
      // Otherwise, if it starts with an Arabic number followed by a kanji number
      // OR it starts with one of the characters meaning "same position" then
      // expand the delimeter range to include all the shogi characters.
            if (!unprefixedShogiStart.test(nodeText)) return null;
      const expandedDelimeter = getCombinedCharRange([ getNegatedCharRange(originalTextDelimeter), /[↑]/ ]);
      const textDelimiter = getNegatedCharRange(expandedDelimeter);
      return {
        textDelimiter,
        textEnd: nodeText.search(textDelimiter)
      };
    }
    // This needs to be kept in sync with the regexes below.
        const shogiDelimeter = /[^▲△☗☖1-9１-９一二三四五六七八九同仝－𠔼ド歩兵丶フゝ・香禾キ↑桂土銀ヨ角ク飛ヒ乙金人と成ナ馬マウ龍竜立リ玉王○打引寄上行入右左直行入不生]/u;
    const unprefixedShogiStart = /^[1-9１-９][一二三四五六七八九]|[同仝－𠔼ド]/u;
    // Based on https://devurandom.xyz/shogi_parser.html by @devurandom
    // which in turn is based on the description at
    // https://en.wikipedia.org/wiki/Shogi_notation#Japanese_notation
        const shogiRegex = /([▲△☗☖])([1-9１-９一二三四五六七八九][1-9１-９一二三四五六七八九][同仝－𠔼ド]?|[同仝－𠔼ド])(歩|兵|丶|フ|ゝ|・|香|禾|キ|↑|桂|土|銀|ヨ|角|ク|飛|ヒ|乙|金|人|と|成香|成禾|成キ|成↑|ナ香|ナ禾|ナキ|ナ↑|成桂|成土|ナ桂|ナ土|成銀|成ヨ|ナ銀|ナヨ|馬|マ|ウ|龍|竜|立|リ|玉|王|○)([打引寄上行入右左直行入]?)(成|ナ|不成|生|フナ|不ナ)?/u;
    const shogiWithoutPrefixRegex = /([1-9１-９][一二三四五六七八九][同仝－𠔼ド]?|[同仝－𠔼ド])(歩|兵|丶|フ|ゝ|・|香|禾|キ|↑|桂|土|銀|ヨ|角|ク|飛|ヒ|乙|金|人|と|成香|成禾|成キ|成↑|ナ香|ナ禾|ナキ|ナ↑|成桂|成土|ナ桂|ナ土|成銀|成ヨ|ナ銀|ナヨ|馬|マ|ウ|龍|竜|立|リ|玉|王|○)([打引寄上行入右左直行入]?)(成|ナ|不成|生|フナ|不ナ)?/u;
    const sides = new Map([ [ "▲", "black" ], [ "△", "white" ], [ "☗", "black" ], [ "☖", "white" ] ]);
    const sameDest = new Set([ "同", "仝", "－", "𠔼", "ド" ]);
    const pieces = new Map([ [ "歩", "p" ], [ "兵", "p" ], [ "丶", "p" ], [ "フ", "p" ], [ "ゝ", "p" ], [ "・", "p" ], [ "香", "l" ], [ "禾", "l" ], [ "キ", "l" ], [ "↑", "l" ], [ "桂", "n" ], [ "土", "n" ], [ "銀", "s" ], [ "ヨ", "s" ], [ "角", "b" ], [ "ク", "b" ], [ "飛", "r" ], [ "ヒ", "r" ], [ "乙", "r" ], [ "金", "g" ], [ "人", "g" ], [ "と", "pro_p" ], [ "成香", "pro_l" ], [ "成禾", "pro_l" ], [ "成キ", "pro_l" ], [ "成↑", "pro_l" ], [ "ナ香", "pro_l" ], [ "ナ禾", "pro_l" ], [ "ナキ", "pro_l" ], [ "ナ↑", "pro_l" ], [ "成桂", "pro_n" ], [ "成土", "pro_n" ], [ "ナ桂", "pro_n" ], [ "ナ土", "pro_n" ], [ "成銀", "pro_s" ], [ "成ヨ", "pro_s" ], [ "ナ銀", "pro_s" ], [ "ナヨ", "pro_s" ], [ "馬", "pro_b" ], [ "マ", "pro_b" ], [ "ウ", "pro_b" ], [ "龍", "pro_r" ], [ "竜", "pro_r" ], [ "立", "pro_r" ], [ "リ", "pro_r" ], [ "玉", "k" ], [ "王", "k" ], [ "○", "k" ] ]);
    const movements = new Map([ [ "打", "drop" ], [ "引", "down" ], [ "寄", "horiz" ], [ "上", "up" ], [ "行", "up" ], [ "入", "up" ], [ "右", "right" ], [ "左", "left" ], [ "直", "vert" ] ]);
    const promotions = new Set([ "成", "ナ" ]);
    const nonPromotions = new Set([ "不成", "生", "フナ", "不ナ" ]);
    function extractShogiMetadata(text) {
      let matches = shogiRegex.exec(text);
      if (!matches || 0 !== matches.index) {
        matches = shogiWithoutPrefixRegex.exec(text);
        if (!matches || 0 !== matches.index) return;
        // Lined up the match indices line up between the two regexes
                matches.splice(1, 0, "");
      }
      const [src, sideStr, destStr, pieceStr, movementStr, promotionStr] = matches;
      // Side
            const side = sideStr ? sides.get(sideStr) : void 0;
      // Destination
            let dest;
      if (!sameDest.has(destStr)) {
        const parts = destStr.split("");
        dest = parts.slice(0, 2).map(parseNumber);
        // Check for a "same" indication (we need to check for > 2 instead of === 3
        // because if the "same" character is 𠔼 the string will have length 4 since
        // that charater is non-BMP).
                if (parts.length > 2) dest.push(1);
      }
      // Piece
            const piece = pieces.get(pieceStr);
      // Movement
            const movement = movements.get(movementStr);
      // Promotion
            let promotion;
      if (promotions.has(promotionStr)) promotion = true; else if (nonPromotions.has(promotionStr)) promotion = false;
      return {
        type: "shogi",
        matchLen: src.length,
        side,
        dest,
        piece,
        movement,
        promotion
      };
    }
    // ---------------------------------------------------------------------------
    
    // Serialization
    
    // ---------------------------------------------------------------------------
        const standardPieceNotation = {
      p: "歩",
      l: "香",
      n: "桂",
      s: "銀",
      b: "角",
      r: "飛",
      g: "金",
      pro_p: "と",
      pro_l: "成香",
      pro_n: "成桂",
      pro_s: "成銀",
      pro_b: "馬",
      pro_r: "龍",
      k: "王"
    };
    const standardMovementNotation = {
      drop: "打",
      down: "引",
      horiz: "寄",
      up: "上",
      right: "右",
      left: "左",
      vert: "直"
    };
    function serializeShogi({side, dest, piece, movement, promotion}) {
      let result = "";
      if (side) result += "black" === side ? "☗" : "☖";
      if (dest) result += serializeShogiDest(dest);
      if (!dest || 3 === dest.length) result += "同";
      result += standardPieceNotation[piece];
      if (movement) result += standardMovementNotation[movement];
      if ("boolean" === typeof promotion) result += promotion ? "成" : "不成";
      return result;
    }
    const numberToKanji = [ "〇", "一", "二", "三", "四", "五", "六", "七", "八", "九" ];
    function serializeShogiDest(dest) {
      return `${String.fromCodePoint(dest[0] + 0xff10)}${numberToKanji[dest[1]]}`;
    }
    // CONCATENATED MODULE: ./src/content/years.ts
    const nonEraCharacter = /[^\s0-9０-９一二三四五六七八九十百元年]/;
    function lookForEra({currentText, nodeText, textEnd}) {
      if (textEnd < 0 || !startsWithEraName(currentText)) return null;
      const endOfEra = nodeText.substring(textEnd).search(nonEraCharacter);
      return {
        textDelimiter: nonEraCharacter,
        textEnd: -1 === endOfEra ? -1 : textEnd + endOfEra
      };
    }
    function startsWithEraName(text) {
      const maxEraLength = Math.max(...Array.from(yearMap.keys()).map((key => key.length)));
      for (let i = 1; i <= text.length && i <= maxEraLength; i++) if (yearMap.has(text.substring(0, i))) return true;
      return false;
    }
    const yearMap = new Map([ [ "大化", {
      reading: "たいか",
      start: 645,
      yomi: "Taika"
    } ], [ "白雉", {
      reading: "はくち",
      start: 650,
      yomi: "Hakuchi"
    } ], [ "朱鳥", {
      reading: "しゅちょう",
      start: 686,
      yomi: "Shuchō"
    } ], [ "大宝", {
      reading: "たいほう",
      start: 701,
      yomi: "Taihō"
    } ], [ "慶雲", {
      reading: "けいうん",
      start: 704,
      yomi: "Keiun"
    } ], [ "和銅", {
      reading: "わどう",
      start: 708,
      yomi: "Wadō"
    } ], [ "霊亀", {
      reading: "れいき",
      start: 715,
      yomi: "Reiki"
    } ], [ "養老", {
      reading: "ようろう",
      start: 717,
      yomi: "Yōrō"
    } ], [ "神亀", {
      reading: "じんき",
      start: 724,
      yomi: "Jinki"
    } ], [ "天平", {
      reading: "てんぴょう",
      start: 729,
      yomi: "Tempyō"
    } ], [ "天平感宝", {
      reading: "てんぴょうかんぽう",
      start: 749,
      yomi: "Tempyōkampō"
    } ], [ "天平勝宝", {
      reading: "てんぴょうしょうほう",
      start: 749,
      yomi: "Tempyōshōhō"
    } ], [ "天平宝字", {
      reading: "てんぴょうじょうじ",
      start: 757,
      yomi: "Tempyōjōji"
    } ], [ "天平神護", {
      reading: "てんぴょうじんご",
      start: 765,
      yomi: "Tempyōjingo"
    } ], [ "神護景雲", {
      reading: "じんごけいうん",
      start: 767,
      yomi: "Jingokeiun"
    } ], [ "宝亀", {
      reading: "ほうき",
      start: 770,
      yomi: "Hōki"
    } ], [ "天応", {
      reading: "てんおう",
      start: 781,
      yomi: "Ten'ō"
    } ], [ "延暦", {
      reading: "えんりゃく",
      start: 782,
      yomi: "Enryaku"
    } ], [ "大同", {
      reading: "だいどう",
      start: 806,
      yomi: "Daidō"
    } ], [ "弘仁", {
      reading: "こうにん",
      start: 810,
      yomi: "Kōnin"
    } ], [ "天長", {
      reading: "てんちょう",
      start: 823,
      yomi: "Tenchō"
    } ], [ "承和", {
      reading: "じょうわ",
      start: 834,
      yomi: "Jōwa"
    } ], [ "嘉祥", {
      reading: "かしょう",
      start: 848,
      yomi: "Kashō"
    } ], [ "仁寿", {
      reading: "にんじゅ",
      start: 851,
      yomi: "Ninju"
    } ], [ "斉衡", {
      reading: "さいこう",
      start: 855,
      yomi: "Saikō"
    } ], [ "天安", {
      reading: "てんあん",
      start: 857,
      yomi: "Ten'an"
    } ], [ "貞観", {
      reading: "じょうがん",
      start: 859,
      yomi: "Jōgan"
    } ], [ "元慶", {
      reading: "がんぎょう",
      start: 877,
      yomi: "Gangyō"
    } ], [ "仁和", {
      reading: "にんな",
      start: 885,
      yomi: "Ninna"
    } ], [ "寛平", {
      reading: "かんぴょう",
      start: 889,
      yomi: "Kampyō"
    } ], [ "昌泰", {
      reading: "しょうたい",
      start: 898,
      yomi: "Shōtai"
    } ], [ "延喜", {
      reading: "えんぎ",
      start: 901,
      yomi: "Engi"
    } ], [ "延長", {
      reading: "えんちょう",
      start: 923,
      yomi: "Enchō"
    } ], [ "承平", {
      reading: "じょうへい",
      start: 931,
      yomi: "Jōhei"
    } ], [ "天慶", {
      reading: "てんぎょう",
      start: 938,
      yomi: "Tengyō"
    } ], [ "天暦", {
      reading: "てんりゃく",
      start: 947,
      yomi: "Tenryaku"
    } ], [ "天徳", {
      reading: "てんとく",
      start: 957,
      yomi: "Tentoku"
    } ], [ "応和", {
      reading: "おうわ",
      start: 961,
      yomi: "Ōwa"
    } ], [ "康保", {
      reading: "こうほう",
      start: 964,
      yomi: "Kōhō"
    } ], [ "安和", {
      reading: "あんな",
      start: 968,
      yomi: "Anna"
    } ], [ "天禄", {
      reading: "てんろく",
      start: 970,
      yomi: "Tenroku"
    } ], [ "天延", {
      reading: "てんえん",
      start: 974,
      yomi: "Ten'en"
    } ], [ "貞元", {
      reading: "じょうげん",
      start: 976,
      yomi: "Jōgen"
    } ], [ "天元", {
      reading: "てんげん",
      start: 979,
      yomi: "Tengen"
    } ], [ "永観", {
      reading: "えいかん",
      start: 983,
      yomi: "Eikan"
    } ], [ "寛和", {
      reading: "かんな",
      start: 985,
      yomi: "Kanna"
    } ], [ "永延", {
      reading: "えいえん",
      start: 987,
      yomi: "Eien"
    } ], [ "永祚", {
      reading: "えいそ",
      start: 989,
      yomi: "Eiso"
    } ], [ "正暦", {
      reading: "しょうりゃく",
      start: 990,
      yomi: "Shōryaku"
    } ], [ "長徳", {
      reading: "ちょうとく",
      start: 995,
      yomi: "Chōtoku"
    } ], [ "長保", {
      reading: "ちょうほう",
      start: 999,
      yomi: "Chōhō"
    } ], [ "寛弘", {
      reading: "かんこう",
      start: 1004,
      yomi: "Kankō"
    } ], [ "長和", {
      reading: "ちょうわ",
      start: 1013,
      yomi: "Chōwa"
    } ], [ "寛仁", {
      reading: "かんにん",
      start: 1017,
      yomi: "Kannin"
    } ], [ "治安", {
      reading: "じあん",
      start: 1021,
      yomi: "Jian"
    } ], [ "万寿", {
      reading: "まんじゅ",
      start: 1024,
      yomi: "Manju"
    } ], [ "長元", {
      reading: "ちょうげん",
      start: 1028,
      yomi: "Chōgen"
    } ], [ "長暦", {
      reading: "ちょうりゃく",
      start: 1037,
      yomi: "Chōryaku"
    } ], [ "長久", {
      reading: "ちょうきゅう",
      start: 1040,
      yomi: "Chōkyū"
    } ], [ "寛徳", {
      reading: "かんとく",
      start: 1045,
      yomi: "Kantoku"
    } ], [ "永承", {
      reading: "えいしょう",
      start: 1046,
      yomi: "Eishō"
    } ], [ "天喜", {
      reading: "てんぎ",
      start: 1053,
      yomi: "Tengi"
    } ], [ "康平", {
      reading: "こうへい",
      start: 1058,
      yomi: "Kōhei"
    } ], [ "治暦", {
      reading: "じりゃく",
      start: 1065,
      yomi: "Jiryaku"
    } ], [ "延久", {
      reading: "えんきゅう",
      start: 1069,
      yomi: "Enkyū"
    } ], [ "承保", {
      reading: "じょうほう",
      start: 1074,
      yomi: "Jōhō"
    } ], [ "承暦", {
      reading: "じょうりゃく",
      start: 1078,
      yomi: "Jōryaku"
    } ], [ "永保", {
      reading: "えいほう",
      start: 1081,
      yomi: "Eihō"
    } ], [ "応徳", {
      reading: "おうとく",
      start: 1084,
      yomi: "Ōtoku"
    } ], [ "寛治", {
      reading: "かんじ",
      start: 1087,
      yomi: "Kanji"
    } ], [ "嘉保", {
      reading: "かほう",
      start: 1095,
      yomi: "Kahō"
    } ], [ "永長", {
      reading: "えいちょう",
      start: 1097,
      yomi: "Eichō"
    } ], [ "承徳", {
      reading: "じょうとく",
      start: 1098,
      yomi: "Jōtoku"
    } ], [ "康和", {
      reading: "こうわ",
      start: 1099,
      yomi: "Kōwa"
    } ], [ "長治", {
      reading: "ちょうじ",
      start: 1104,
      yomi: "Chōji"
    } ], [ "嘉承", {
      reading: "かじょう",
      start: 1106,
      yomi: "Kajō"
    } ], [ "天仁", {
      reading: "てんにん",
      start: 1108,
      yomi: "Tennin"
    } ], [ "天永", {
      reading: "てんねい",
      start: 1110,
      yomi: "Tennei"
    } ], [ "永久", {
      reading: "えいきゅう",
      start: 1113,
      yomi: "Eikyū"
    } ], [ "元永", {
      reading: "げんえい",
      start: 1118,
      yomi: "Gen'ei"
    } ], [ "保安", {
      reading: "ほうあん",
      start: 1120,
      yomi: "Hōan"
    } ], [ "天治", {
      reading: "てんじ",
      start: 1124,
      yomi: "Tenji"
    } ], [ "大治", {
      reading: "だいじ",
      start: 1126,
      yomi: "Daiji"
    } ], [ "天承", {
      reading: "てんしょう",
      start: 1131,
      yomi: "Tenshō"
    } ], [ "長承", {
      reading: "ちょうしょう",
      start: 1132,
      yomi: "Chōshō"
    } ], [ "保延", {
      reading: "ほうえん",
      start: 1135,
      yomi: "Hōen"
    } ], [ "永治", {
      reading: "えいじ",
      start: 1141,
      yomi: "Eiji"
    } ], [ "康治", {
      reading: "こうじ",
      start: 1142,
      yomi: "Kōji"
    } ], [ "天養", {
      reading: "てんよう",
      start: 1144,
      yomi: "Ten'yō"
    } ], [ "久安", {
      reading: "きゅうあん",
      start: 1145,
      yomi: "Kyūan"
    } ], [ "仁平", {
      reading: "にんぺい",
      start: 1151,
      yomi: "Nimpei"
    } ], [ "久寿", {
      reading: "きゅうじゅ",
      start: 1154,
      yomi: "Kyūju"
    } ], [ "保元", {
      reading: "ほうげん",
      start: 1156,
      yomi: "Hōgen"
    } ], [ "平治", {
      reading: "へいじ",
      start: 1159,
      yomi: "Heiji"
    } ], [ "永暦", {
      reading: "えいりゃく",
      start: 1160,
      yomi: "Eiryaku"
    } ], [ "応保", {
      reading: "おうほう",
      start: 1161,
      yomi: "Ōhō"
    } ], [ "長寛", {
      reading: "ちょうかん",
      start: 1163,
      yomi: "Chōkan"
    } ], [ "永万", {
      reading: "えいまん",
      start: 1165,
      yomi: "Eiman"
    } ], [ "仁安", {
      reading: "にんあん",
      start: 1166,
      yomi: "Nin'an"
    } ], [ "嘉応", {
      reading: "かおう",
      start: 1169,
      yomi: "Kaō"
    } ], [ "承安", {
      reading: "しょうあん",
      start: 1171,
      yomi: "Shōan"
    } ], [ "安元", {
      reading: "あんげん",
      start: 1175,
      yomi: "Angen"
    } ], [ "治承", {
      reading: "じしょう",
      start: 1177,
      yomi: "Jishō"
    } ], [ "養和", {
      reading: "ようわ",
      start: 1181,
      yomi: "Yōwa"
    } ], [ "寿永", {
      reading: "じゅえい",
      start: 1182,
      yomi: "Juei"
    } ], [ "元暦", {
      reading: "げんりゃく",
      start: 1184,
      yomi: "Genryaku"
    } ], [ "文治", {
      reading: "ぶんじ",
      start: 1185,
      yomi: "Bunji"
    } ], [ "建久", {
      reading: "けんきゅう",
      start: 1190,
      yomi: "Kenkyū"
    } ], [ "正治", {
      reading: "しょうじ",
      start: 1199,
      yomi: "Shōji"
    } ], [ "建仁", {
      reading: "けんにん",
      start: 1201,
      yomi: "Kennin"
    } ], [ "元久", {
      reading: "げんきゅう",
      start: 1204,
      yomi: "Genkyū"
    } ], [ "建永", {
      reading: "けんえい",
      start: 1206,
      yomi: "Ken'ei"
    } ], [ "承元", {
      reading: "じょうげん",
      start: 1207,
      yomi: "Jōgen"
    } ], [ "建暦", {
      reading: "けんりゃく",
      start: 1211,
      yomi: "Kenryaku"
    } ], [ "建保", {
      reading: "けんぽう",
      start: 1214,
      yomi: "Kempō"
    } ], [ "承久", {
      reading: "じょうきゅう",
      start: 1219,
      yomi: "Jōkyū"
    } ], [ "貞応", {
      reading: "じょうおう",
      start: 1222,
      yomi: "Jōō"
    } ], [ "元仁", {
      reading: "げんにん",
      start: 1225,
      yomi: "Gennin"
    } ], [ "嘉禄", {
      reading: "かろく",
      start: 1225,
      yomi: "Karoku"
    } ], [ "安貞", {
      reading: "あんてい",
      start: 1228,
      yomi: "Antei"
    } ], [ "寛喜", {
      reading: "かんき",
      start: 1229,
      yomi: "Kanki"
    } ], [ "貞永", {
      reading: "じょうえい",
      start: 1232,
      yomi: "Jōei"
    } ], [ "天福", {
      reading: "てんぷく",
      start: 1233,
      yomi: "Tempuku"
    } ], [ "文暦", {
      reading: "ぶんりゃく",
      start: 1235,
      yomi: "Bunryaku"
    } ], [ "嘉禎", {
      reading: "かてい",
      start: 1235,
      yomi: "Katei"
    } ], [ "暦仁", {
      reading: "りゃくにん",
      start: 1239,
      yomi: "Ryakunin"
    } ], [ "延応", {
      reading: "えんおう",
      start: 1239,
      yomi: "En'ō"
    } ], [ "仁治", {
      reading: "にんじ",
      start: 1240,
      yomi: "Ninji"
    } ], [ "寛元", {
      reading: "かんげん",
      start: 1243,
      yomi: "Kangen"
    } ], [ "宝治", {
      reading: "ほうじ",
      start: 1247,
      yomi: "Hōji"
    } ], [ "建長", {
      reading: "けんちょう",
      start: 1249,
      yomi: "Kenchō"
    } ], [ "康元", {
      reading: "こうげん",
      start: 1256,
      yomi: "Kōgen"
    } ], [ "正嘉", {
      reading: "しょうか",
      start: 1257,
      yomi: "Shōka"
    } ], [ "正元", {
      reading: "しょうげん",
      start: 1259,
      yomi: "Shōgen"
    } ], [ "文応", {
      reading: "ぶんおう",
      start: 1260,
      yomi: "Bun'ō"
    } ], [ "弘長", {
      reading: "こうちょう",
      start: 1261,
      yomi: "Kōchō"
    } ], [ "文永", {
      reading: "ぶんえい",
      start: 1264,
      yomi: "Bun'ei"
    } ], [ "健治", {
      reading: "けんじ",
      start: 1275,
      yomi: "Kenji"
    } ], [ "弘安", {
      reading: "こうあん",
      start: 1278,
      yomi: "Kōan"
    } ], [ "正応", {
      reading: "しょうおう",
      start: 1288,
      yomi: "Shōō"
    } ], [ "永仁", {
      reading: "えいにん",
      start: 1293,
      yomi: "Einin"
    } ], [ "正安", {
      reading: "しょうあん",
      start: 1299,
      yomi: "Shōan"
    } ], [ "乾元", {
      reading: "けんげん",
      start: 1303,
      yomi: "Kengen"
    } ], [ "嘉元", {
      reading: "かげん",
      start: 1303,
      yomi: "Kagen"
    } ], [ "徳治", {
      reading: "とくじ",
      start: 1307,
      yomi: "Tokuji"
    } ], [ "延慶", {
      reading: "えんきょう",
      start: 1308,
      yomi: "Enkyō"
    } ], [ "応長", {
      reading: "おうちょう",
      start: 1311,
      yomi: "Ōchō"
    } ], [ "正和", {
      reading: "しょうわ",
      start: 1312,
      yomi: "Shōwa"
    } ], [ "文保", {
      reading: "ぶんぽう",
      start: 1317,
      yomi: "Bumpō"
    } ], [ "元応", {
      reading: "げんおう",
      start: 1319,
      yomi: "Gen'ō"
    } ], [ "元亨", {
      reading: "げんこう",
      start: 1321,
      yomi: "Genkō"
    } ], [ "正中", {
      reading: "しょうちゅ",
      start: 1325,
      yomi: "Shōchu"
    } ], [ "嘉暦", {
      reading: "かりゃく",
      start: 1326,
      yomi: "Karyaku"
    } ], [ "元徳", {
      reading: "げんとく",
      start: 1329,
      yomi: "Gentoku"
    } ], [ "元弘", {
      reading: "げんこう",
      start: 1331,
      yomi: "Genkō (Southern)"
    } ], [ "正慶", {
      reading: "しょうけい",
      start: 1332,
      yomi: "Shōkei"
    } ], [ "建武", {
      reading: "けんむ",
      start: 1334,
      yomi: "Kemmu (Southern)"
    } ], [ "延元", {
      reading: "えいげん",
      start: 1336,
      yomi: "Eigen (Southern)"
    } ], [ "暦応", {
      reading: "りゃくおう",
      start: 1338,
      yomi: "Ryakuō"
    } ], [ "興国", {
      reading: "こうこく",
      start: 1340,
      yomi: "Kōkoku (Southern)"
    } ], [ "康永", {
      reading: "こうえい",
      start: 1342,
      yomi: "Kōei"
    } ], [ "貞和", {
      reading: "じょうわ",
      start: 1345,
      yomi: "Jōwa"
    } ], [ "正平", {
      reading: "しょうへい",
      start: 1347,
      yomi: "Shōhei (Southern)"
    } ], [ "観応", {
      reading: "かんおう",
      start: 1350,
      yomi: "Kan'ō"
    } ], [ "文和", {
      reading: "ぶんな",
      start: 1352,
      yomi: "Bunna"
    } ], [ "延文", {
      reading: "えんぶん",
      start: 1356,
      yomi: "Embun"
    } ], [ "康安", {
      reading: "こうあん",
      start: 1361,
      yomi: "Kōan"
    } ], [ "貞治", {
      reading: "じょうじ",
      start: 1362,
      yomi: "Jōji"
    } ], [ "応安", {
      reading: "おうあん",
      start: 1368,
      yomi: "Ōan"
    } ], [ "建徳", {
      reading: "けんとく",
      start: 1370,
      yomi: "Kentoku (Southern)"
    } ], [ "文中", {
      reading: "ぶんちゅう",
      start: 1372,
      yomi: "Bunchū (Southern)"
    } ], [ "永和", {
      reading: "えいわ",
      start: 1375,
      yomi: "Eiwa"
    } ], [ "天授", {
      reading: "てんじゅ",
      start: 1375,
      yomi: "Tenju (Southern)"
    } ], [ "康暦", {
      reading: "こうりゃく",
      start: 1379,
      yomi: "Kōryaku"
    } ], [ "永徳", {
      reading: "えいとく",
      start: 1381,
      yomi: "Eitoku"
    } ], [ "弘和", {
      reading: "こうわ",
      start: 1381,
      yomi: "Kōwa (Southern)"
    } ], [ "至徳", {
      reading: "しとく",
      start: 1384,
      yomi: "Shitoku"
    } ], [ "元中", {
      reading: "げんちゅう",
      start: 1384,
      yomi: "Genchū (Southern)"
    } ], [ "嘉慶", {
      reading: "かけい",
      start: 1387,
      yomi: "Kakei"
    } ], [ "康応", {
      reading: "こうおう",
      start: 1389,
      yomi: "Kōō"
    } ], [ "明徳", {
      reading: "めいとく",
      start: 1390,
      yomi: "Meitoku"
    } ], [ "応永", {
      reading: "おうえい",
      start: 1394,
      yomi: "Ōei"
    } ], [ "正長", {
      reading: "しょうちょう",
      start: 1428,
      yomi: "Shōchō"
    } ], [ "永享", {
      reading: "えいきょう",
      start: 1429,
      yomi: "Eikyō"
    } ], [ "嘉吉", {
      reading: "かきつ",
      start: 1441,
      yomi: "Kakitsu"
    } ], [ "文安", {
      reading: "ぶんあん",
      start: 1444,
      yomi: "Bun'an"
    } ], [ "宝徳", {
      reading: "ほうとく",
      start: 1449,
      yomi: "Hōtoku"
    } ], [ "享徳", {
      reading: "きょうとく",
      start: 1452,
      yomi: "Kyōtoku"
    } ], [ "康正", {
      reading: "こうしょう",
      start: 1455,
      yomi: "Kōshō"
    } ], [ "長禄", {
      reading: "ちょうろく",
      start: 1457,
      yomi: "Chōroku"
    } ], [ "寛正", {
      reading: "かんしょう",
      start: 1461,
      yomi: "Kanshō"
    } ], [ "文正", {
      reading: "ぶんしょう",
      start: 1466,
      yomi: "Bunshō"
    } ], [ "応仁", {
      reading: "おうにん",
      start: 1467,
      yomi: "Ōnin"
    } ], [ "文明", {
      reading: "ぶんめい",
      start: 1469,
      yomi: "Bummei"
    } ], [ "長享", {
      reading: "ちょうきょう",
      start: 1487,
      yomi: "Chōkyō"
    } ], [ "延徳", {
      reading: "えんとく",
      start: 1489,
      yomi: "Entoku"
    } ], [ "明応", {
      reading: "めいおう",
      start: 1492,
      yomi: "Meiō"
    } ], [ "文亀", {
      reading: "ぶんき",
      start: 1501,
      yomi: "Bunki"
    } ], [ "永正", {
      reading: "えいしょう",
      start: 1504,
      yomi: "Eishō"
    } ], [ "大永", {
      reading: "だいえい",
      start: 1521,
      yomi: "Daiei"
    } ], [ "享禄", {
      reading: "きょうろく",
      start: 1528,
      yomi: "Kyōroku"
    } ], [ "天文", {
      reading: "てんぶん",
      start: 1532,
      yomi: "Tembun"
    } ], [ "弘治", {
      reading: "こうじ",
      start: 1555,
      yomi: "Kōji"
    } ], [ "永禄", {
      reading: "えいろく",
      start: 1558,
      yomi: "Eiroku"
    } ], [ "元亀", {
      reading: "げんき",
      start: 1570,
      yomi: "Genki"
    } ], [ "天正", {
      reading: "てんしょう",
      start: 1573,
      yomi: "Tenshō"
    } ], [ "文禄", {
      reading: "ぶんろく",
      start: 1593,
      yomi: "Bunroku"
    } ], [ "慶長", {
      reading: "けいちょう",
      start: 1596,
      yomi: "Keichō"
    } ], [ "元和", {
      reading: "げんな",
      start: 1615,
      yomi: "Genna"
    } ], [ "寛永", {
      reading: "かんえい",
      start: 1624,
      yomi: "Kan'ei"
    } ], [ "正保", {
      reading: "しょうほう",
      start: 1645,
      yomi: "Shōhō"
    } ], [ "慶安", {
      reading: "けいあん",
      start: 1648,
      yomi: "Keian"
    } ], [ "承応", {
      reading: "じょうおう",
      start: 1652,
      yomi: "Jōō"
    } ], [ "明暦", {
      reading: "めいれき",
      start: 1655,
      yomi: "Meireki"
    } ], [ "万治", {
      reading: "まんじ",
      start: 1658,
      yomi: "Manji"
    } ], [ "寛文", {
      reading: "かんぶん",
      start: 1661,
      yomi: "Kambun"
    } ], [ "延宝", {
      reading: "えんぽう",
      start: 1673,
      yomi: "Empō"
    } ], [ "天和", {
      reading: "てんな",
      start: 1681,
      yomi: "Tenna"
    } ], [ "貞享", {
      reading: "じょうきょう",
      start: 1684,
      yomi: "Jōkyō"
    } ], [ "元禄", {
      reading: "げんろく",
      start: 1688,
      yomi: "Genroku"
    } ], [ "宝永", {
      reading: "ほうえい",
      start: 1704,
      yomi: "Hōei"
    } ], [ "正徳", {
      reading: "しょうとく",
      start: 1711,
      yomi: "Shōtoku"
    } ], [ "享保", {
      reading: "きょうほう",
      start: 1716,
      yomi: "Kyōhō"
    } ], [ "元文", {
      reading: "げんぶん",
      start: 1736,
      yomi: "Gembun"
    } ], [ "寛保", {
      reading: "かんぽう",
      start: 1741,
      yomi: "Kampō"
    } ], [ "延享", {
      reading: "えんきょう",
      start: 1744,
      yomi: "Enkyō"
    } ], [ "寛延", {
      reading: "かんえん",
      start: 1748,
      yomi: "Kan'en"
    } ], [ "宝暦", {
      reading: "ほうれき",
      start: 1751,
      yomi: "Hōreki"
    } ], [ "明和", {
      reading: "めいわ",
      start: 1764,
      yomi: "Meiwa"
    } ], [ "安永", {
      reading: "あんえい",
      start: 1773,
      yomi: "An'ei"
    } ], [ "天明", {
      reading: "てんめい",
      start: 1781,
      yomi: "Temmei"
    } ], [ "寛政", {
      reading: "かんせい",
      start: 1801,
      yomi: "Kansei"
    } ], [ "享和", {
      reading: "きょうわ",
      start: 1802,
      yomi: "Kyōwa"
    } ], [ "文化", {
      reading: "ぶんか",
      start: 1804,
      yomi: "Bunka"
    } ], [ "文政", {
      reading: "ぶんせい",
      start: 1818,
      yomi: "Bunsei"
    } ], [ "天保", {
      reading: "てんぽう",
      start: 1831,
      yomi: "Tempō"
    } ], [ "弘化", {
      reading: "こうか",
      start: 1845,
      yomi: "Kōka"
    } ], [ "嘉永", {
      reading: "かえい",
      start: 1848,
      yomi: "Kaei"
    } ], [ "安政", {
      reading: "あんせい",
      start: 1855,
      yomi: "Ansei"
    } ], [ "万延", {
      reading: "まんえい",
      start: 1860,
      yomi: "Man'ei"
    } ], [ "文久", {
      reading: "ぶんきゅう",
      start: 1861,
      yomi: "Bunkyū"
    } ], [ "元治", {
      reading: "げんじ",
      start: 1864,
      yomi: "Genji"
    } ], [ "慶応", {
      reading: "けいおう",
      start: 1865,
      yomi: "Keiō"
    } ], [ "明治", {
      reading: "めいじ",
      start: 1868,
      yomi: "Meiji"
    } ], [ "㍾", {
      reading: "めいじ",
      start: 1868,
      yomi: "Meiji"
    } ], [ "大正", {
      reading: "たいしょう",
      start: 1912,
      yomi: "Taishō"
    } ], [ "㍽", {
      reading: "たいしょう",
      start: 1912,
      yomi: "Taishō"
    } ], [ "昭和", {
      reading: "しょうわ",
      start: 1926,
      yomi: "Shōwa"
    } ], [ "㍼", {
      reading: "しょうわ",
      start: 1926,
      yomi: "Shōwa"
    } ], [ "平成", {
      reading: "へいせい",
      start: 1989,
      yomi: "Heisei"
    } ], [ "㍻", {
      reading: "へいせい",
      start: 1989,
      yomi: "Heisei"
    } ], [ "令和", {
      reading: "れいわ",
      start: 2019,
      yomi: "Reiwa"
    } ], [ "㋿", {
      reading: "れいわ",
      start: 2019,
      yomi: "Reiwa"
    } ] ]);
    // This is a bit complicated because for a numeric year we don't require the
    // 年 but for 元年 we do. i.e. '令和2' is valid but '令和元' is not.
        const yearRegex = /(?:([0-9０-９〇一二三四五六七八九十百]+)\s*年?|(?:元\s*年))/;
    function extractEraMetadata(text) {
      // Look for a year
      const matches = yearRegex.exec(text);
      if (!matches || 0 === matches.index) return;
      // Look for an era
            const era = text.substring(0, matches.index).trim();
      if (!isEraName(era)) return;
      // Parse year
            let year = 0;
      if ("undefined" !== typeof matches[1]) year = parseNumber(matches[1]);
      if (null === year) return;
      const matchLen = matches.index + matches[0].length;
      return {
        type: "era",
        era,
        year,
        matchLen
      };
    }
    function isEraName(text) {
      return yearMap.has(text);
    }
    function getEraInfo(text) {
      return yearMap.get(text);
    }
    // CONCATENATED MODULE: ./src/content/meta.ts
    function lookForMetadata({currentText, nodeText, matchCurrency, textEnd, textDelimiter}) {
      return (matchCurrency ? lookForCurrency({
        nodeText,
        textDelimiter
      }) : void 0) || lookForEra({
        currentText,
        nodeText,
        textEnd
      }) || lookForShogi({
        nodeText,
        textDelimiter
      }) || lookForMeasure({
        nodeText,
        textDelimiter
      }) || {
        textDelimiter,
        textEnd
      };
    }
    function extractGetTextMetadata({text, matchCurrency}) {
      return (matchCurrency ? extractCurrencyMetadata(text) : void 0) || extractEraMetadata(text) || extractShogiMetadata(text) || extractMeasureMetadata(text) || extractNumberMetadata(text);
    }
    // CONCATENATED MODULE: ./src/content/get-text.ts
    // Cache of previous result (since often the mouse position will change but
    // the cursor position will not).
    let previousResult;
    function getTextAtPoint({matchCurrency = true, matchText = true, matchImages = true, point, maxLength}) {
      var _a, _b;
      let position = matchText ? caretPositionFromPoint(point) : null;
      // Chrome not only doesn't support caretPositionFromPoint, but also
      // caretRangeFromPoint doesn't return text input elements. Instead it returns
      // one of their ancestors.
      
      // Chrome may one day support caretPositionFromPoint with the same buggy
      // behavior so check if we DIDN'T get a text input element but _should_ have.
            if (position && !isTextInputNode(position.offsetNode)) {
        const elemUnderCursor = document.elementFromPoint(point.x, point.y);
        if (isTextInputNode(elemUnderCursor)) {
          const offset = getOffsetFromTextInputNode({
            node: elemUnderCursor,
            point
          });
          position = null !== offset ? {
            offset,
            offsetNode: elemUnderCursor
          } : null;
        }
      }
      // By contrast, Safari simply always returns an offset of 0 for text boxes
       else if (position && position.usedCaretRangeFromPoint && 0 === position.offset && isTextInputNode(position.offsetNode)) {
        const offset = getOffsetFromTextInputNode({
          node: position.offsetNode,
          point
        });
        position = null !== offset ? {
          offset,
          offsetNode: position.offsetNode
        } : position;
      }
      // Check if we are dealing with Google docs annotated canvas
            let textToSynthesize = "";
      if (matchText && "docs.google.com" === document.location.host && position && isGdocsOverlayElem(position.offsetNode)) ({position, text: textToSynthesize} = getTextFromAnnotatedCanvas({
        maxLength,
        point
      }));
      if (position && position.offsetNode === (null === (_a = null === previousResult || void 0 === previousResult ? void 0 : previousResult.position) || void 0 === _a ? void 0 : _a.offsetNode) && position.offset === (null === (_b = null === previousResult || void 0 === previousResult ? void 0 : previousResult.position) || void 0 === _b ? void 0 : _b.offset)) return previousResult.result;
      // If we have a textual <input> node or a <textarea> we synthesize a
      // text node and use that for finding text since it allows us to re-use
      // the same handling for text nodes and 'value' attributes.
            let startNode = position ? position.offsetNode : null;
      if (isTextInputNode(startNode)) {
        // If we selected the end of the text, skip it.
        if (position.offset === startNode.value.length) {
          previousResult = void 0;
          return null;
        }
        startNode = document.createTextNode(startNode.value);
      } else if (textToSynthesize) 
      // Similarly, we synthesize a text node if we are dealing with Google docs
      // text.
      startNode = document.createTextNode(textToSynthesize);
      // Try handling as a text node
            if (isTextNode(startNode)) {
        // Due to line wrapping etc. sometimes caretPositionFromPoint can return
        // a point far away from the cursor.
        // We don't need to do this for synthesized text nodes, however, since we
        // assume we'll be within their bounds.
        const distanceResult = getDistanceFromTextNode(startNode, position.offset, point);
        let closeEnough = true;
        if (distanceResult) {
          // If we're more than about three characters away, don't show the
          // pop-up.
          const {distance, glyphExtent} = distanceResult;
          if (distance > 3 * glyphExtent) closeEnough = false;
        }
        if (closeEnough) {
          const result = getTextFromTextNode({
            startNode,
            startOffset: position.offset,
            point,
            matchCurrency,
            maxLength
          });
          if (result) {
            console.assert(!!result.textRange, "There should be a text range when getting text from a text node");
            // If we synthesized a text node, substitute the original node back in.
                        if (startNode !== position.offsetNode) {
              console.assert(1 === result.textRange.length, "When using a synthesized text node there should be a single range");
              console.assert(result.textRange[0].node === startNode, "When using a synthesized text node the range should start" + " from that node");
              result.textRange[0].node = position.offsetNode;
            }
            previousResult = {
              point,
              position,
              result
            };
            return result;
          }
        }
      }
      // See if we are dealing with a covering link
            const parentLink = getParentLink(startNode);
      if (parentLink) {
        const result = getTextFromCoveringLink({
          linkElem: parentLink,
          originalElem: startNode,
          point,
          matchCurrency,
          maxLength
        });
        if (result) {
          // Don't cache `position` since it's not the position we actually used.
          previousResult = {
            point,
            position: void 0,
            result
          };
          return result;
        }
      }
      // Otherwise just pull whatever text we can off the element
            const elem = document.elementFromPoint(point.x, point.y);
      if (elem) {
        const text = getTextFromRandomElement({
          elem,
          matchImages,
          matchText
        });
        if (text) {
          const result = {
            text,
            textRange: null
          };
          previousResult = {
            point,
            position: void 0,
            result
          };
          return result;
        }
      }
      // We haven't found anything, but if the cursor hasn't moved far we should
      // just re-use the last result so the user doesn't have try to keep the
      // mouse over the text precisely in order to read the result.
            if (previousResult) {
        const dx = previousResult.point.x - point.x;
        const dy = previousResult.point.y - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 4) return previousResult.result;
      }
      previousResult = void 0;
      return null;
    }
    // For unit testing
        function caretPositionFromPoint(point) {
      let result = rawCaretPositionFromPoint(point);
      if (!result) return result;
      // If the cursor is more than half way across a character,
      // caretPositionFromPoint will choose the _next_ character since that's where
      // the cursor would be placed if you clicked there and started editing the
      // text.
      
      // (Or something like that, it looks like when editing it's more like if the
      // character is 70% or so of the way across the character it inserts before
      // the next character. In any case, caretPositionFromPoint et. al appear to
      // consistently choose the next character after about the 50% mark in at least
      // Firefox and Chromium.)
      
      // For _looking up_ text, however, it's more intuitive if we look up starting
      // from the character you're pointing at.
      
      // Below we see if the point is within the bounding box of the _previous_
      // character in the inline direction and, if it is, start from there instead.
      
      // (We do this adjustment here, rather than in, say, getTextFromTextNode,
      // since it allows us to continue caching the position returned from this
      // method and returning early if it doesn't change. The disadvantage is that
      // because it only applies to text nodes, we don't do this adjustment for text
      // boxes.
      
      // If we did the adjustment inside getTextFromTextNode, however, it _would_
      // work for text boxes since we synthesize a text node for them before calling
      // getTextFromTextNode. As it is, we'll end up calling caretPositionFromPoint
      // on the mirrored element we create for text boxes in Chrome/Edge/Safari so
      // text boxes there will benefit from this adjustment already, it's just
      // Firefox that won't. One might say that when we're in text boxes it's better
      // to follow caretPositionFromPoint's behavior anyway.
      
      // In any case, for now, we do the adjustment here so we keep the early return
      // optimization and if it becomes important to apply this to text boxes too,
      // we'll work out a way to address them at that time.)
            const {offsetNode, offset} = result;
      if (isTextNode(offsetNode) && offset) {
        const range = new Range;
        range.setStart(offsetNode, offset - 1);
        range.setEnd(offsetNode, offset);
        const previousCharacterBbox = range.getBoundingClientRect();
        if (bboxIncludesPoint({
          bbox: previousCharacterBbox,
          point
        })) result = {
          offsetNode,
          offset: offset - 1,
          usedCaretRangeFromPoint: result.usedCaretRangeFromPoint
        };
      }
      return result;
    }
    function rawCaretPositionFromPoint(point) {
      if (document.caretPositionFromPoint) return document.caretPositionFromPoint(point.x, point.y);
      let range = document.caretRangeFromPoint(point.x, point.y);
      // Special handling for Safari which doesn't dig into nodes with
      // -webkit-user-select: none.
      
      // If we got an element (not a text node), try using elementFromPoint to see
      // if we get a better match.
            if (range && range.startContainer.nodeType === Node.ELEMENT_NODE) range = getRangeWithoutUserSelectNone({
        existingRange: range,
        point
      }) || range;
      // Another Safari-specific workaround
            range = adjustForRangeBoundary({
        range,
        point
      });
      return range ? {
        offsetNode: range.startContainer,
        offset: range.startOffset,
        usedCaretRangeFromPoint: true
      } : null;
    }
    // For Safari, try harder to get the caret position for nodes with
    // -webkit-user-select: none.
    
    // See notes in rawCaretPositionFromPoint for why we do this.
        function getRangeWithoutUserSelectNone({existingRange, point}) {
      const elemFromPoint = document.elementFromPoint(point.x, point.y);
      if (elemFromPoint === existingRange.startContainer || !(elemFromPoint instanceof HTMLElement) || !elemFromPoint.innerText.length) return null;
      // Check if (-webkit-)user-select: none is set on the element
            const cs = window.getComputedStyle(elemFromPoint);
      if ("none" !== cs.webkitUserSelect && "none" !== cs.userSelect) return null;
      // Try to temporarily disable the (-webkit-)user-select style.
            const styleElem = html("style", {}, "* { -webkit-user-select: all !important; user-select: all !important; }");
      document.head.append(styleElem);
      // Retry looking up
            const range = document.caretRangeFromPoint(point.x, point.y);
      styleElem.remove();
      // If we got a text node, prefer that to our previous result.
            return range && range.startContainer.nodeType === Node.TEXT_NODE ? range : null;
    }
    // On Safari, if you pass a point into caretRangeFromPoint that is less than
    // about 60~70% of the way across the first character in a text node it will
    // return the previous text node instead.
    
    // Here we try to detect that situation and return the "next" text node instead.
        function adjustForRangeBoundary({range, point}) {
      var _a;
      // Check we got a range with the offset set to the end of a text node
            if (!range || !range.startOffset || range.startContainer.nodeType !== Node.TEXT_NODE || range.startOffset !== (null === (_a = range.startContainer.textContent) || void 0 === _a ? void 0 : _a.length)) return range;
      // Check there is a _different_ text node under the cursor
            const elemFromPoint = document.elementFromPoint(point.x, point.y);
      if (!(elemFromPoint instanceof HTMLElement) || elemFromPoint === range.startContainer || !elemFromPoint.innerText.length) return range;
      // Check the first character in the new element is actually the one under the
      // cursor.
            const firstTextNode = Array.from(elemFromPoint.childNodes).find((elem => elem.nodeType === Node.TEXT_NODE));
      if (!firstTextNode) return range;
      const firstCharRange = new Range;
      firstCharRange.setStart(firstTextNode, 0);
      firstCharRange.setEnd(firstTextNode, 1);
      const firstCharBbox = firstCharRange.getBoundingClientRect();
      if (!bboxIncludesPoint({
        bbox: firstCharBbox,
        point
      })) return range;
      firstCharRange.setEnd(firstTextNode, 0);
      return firstCharRange;
    }
    function getOffsetFromTextInputNode({node, point}) {
      // This is only called when the platform APIs failed to give us the correct
      // result so we need to synthesize an element with the same layout as the
      // text area, read the text position, then drop it.
      var _a;
      // Create the element
            const mirrorElement = html("div", {}, node.value);
      // Set its styles to be the same
            const cs = document.defaultView.getComputedStyle(node);
      for (let i = 0; i < cs.length; i++) {
        const prop = cs.item(i);
        mirrorElement.style.setProperty(prop, cs.getPropertyValue(prop));
      }
      // Special handling for Chromium which does _not_ include the scrollbars in
      // the width/height when box-sizing is 'content-box'.
            if (isChromium() && "content-box" === cs.boxSizing) {
        const {paddingLeft, paddingRight, paddingTop, paddingBottom} = cs;
        const {borderLeftWidth, borderRightWidth, borderTopWidth, borderBottomWidth} = cs;
        const width = node.offsetWidth - parseFloat(paddingLeft) - parseFloat(paddingRight) - parseFloat(borderLeftWidth) - parseFloat(borderRightWidth);
        if (Number.isFinite(width)) mirrorElement.style.width = `${width}px`;
        const height = node.offsetHeight - parseFloat(paddingTop) - parseFloat(paddingBottom) - parseFloat(borderTopWidth) - parseFloat(borderBottomWidth);
        if (Number.isFinite(height)) mirrorElement.style.height = `${height}px`;
      }
      // Set its position in the document to be to be the same
            mirrorElement.style.position = "absolute";
      const bbox = node.getBoundingClientRect();
      // We need to factor in the document scroll position too
            const top = bbox.top + document.documentElement.scrollTop;
      const left = bbox.left + document.documentElement.scrollLeft;
      mirrorElement.style.top = top + "px";
      mirrorElement.style.left = left + "px";
      // Finally, make sure it is on top
            mirrorElement.style.zIndex = "10000";
      // Append the element to the document. We need to do this before adjusting
      // the scroll offset or else it won't update.
            document.documentElement.appendChild(mirrorElement);
      // Match the scroll position
            const {scrollLeft, scrollTop} = node;
      mirrorElement.scrollTo(scrollLeft, scrollTop);
      // Read the offset
            const position = caretPositionFromPoint(point);
      const result = null !== (_a = null === position || void 0 === position ? void 0 : position.offset) && void 0 !== _a ? _a : null;
      // Drop the element
            mirrorElement.remove();
      return result;
    }
    function getDistanceFromTextNode(startNode, startOffset, point) {
      // Ignore synthesized text nodes.
      if (!startNode.parentElement) return null;
      // Ignore SVG content (it doesn't normally need distance checking).
            if (startNode.parentElement.namespaceURI === SVG_NS) return null;
      // Get bbox of first character in range (since that's where we select from).
            const range = new Range;
      range.setStart(startNode, startOffset);
      range.setEnd(startNode, Math.min(startOffset + 1, startNode.length));
      const bbox = range.getBoundingClientRect();
      // Find the distance from the cursor to the closest edge of that character
      // since if we have a large font size the two distances could be quite
      // different.
            const xDist = Math.min(Math.abs(point.x - bbox.left), Math.abs(point.x - bbox.right));
      const yDist = Math.min(Math.abs(point.y - bbox.top), Math.abs(point.y - bbox.bottom));
      const distance = Math.sqrt(xDist * xDist + yDist * yDist);
      const glyphExtent = Math.sqrt(bbox.width * bbox.width + bbox.height * bbox.height);
      return {
        distance,
        glyphExtent
      };
    }
    function getTextFromTextNode({startNode, startOffset, point, matchCurrency, maxLength}) {
      const isRubyAnnotationElement = element => {
        if (!element) return false;
        const tag = element.tagName.toLowerCase();
        return "rp" === tag || "rt" === tag;
      };
      const isInline = element => {
        var _a;
        return element && (
        // We always treat <rb> and <ruby> tags as inline regardless of the
        // styling since sites like renshuu.org do faux-ruby styling where they
        // give these elements styles like 'display: table-row-group'.
        // We also make an exception for <span> because pdf.js uses
        // absolutely-positioned (and hence `display: block`) spans to lay out
        // characters in vertical text.
        // Furthermore, we treat inline-block as inline because YouTube puts
        // okurigana in a separate inline-block span when using ruby.
        // Finally, if an element's parent is inline-block, then the element will
        // still be laid out "inline" so we allow that too (and that appears to be
        // used by Kanshudo at least).
        // Given all these exceptions, I wonder if we should even both checking
        // the display property.
        [ "RB", "RUBY", "SPAN" ].includes(element.tagName) || [ "inline", "inline-block", "ruby", "ruby-base", "ruby-text" ].includes(getComputedStyle(element).display) || element.parentElement && "inline-block" === (null === (_a = getComputedStyle(element.parentElement)) || void 0 === _a ? void 0 : _a.display));
      };
      // Set up a check that each ancestor is visible and actually contains the
      // point we're looking up.
      
      // We need to do this for a few reasons:
      
      // Firstly, sometimes caretPositionFromPoint can be too helpful and can choose
      // an element far away.
      
      // (For this we used to simply check that `inlineAncestor` is an inclusive
      // ancestor of the result of document.elementFromPoint but using the bounding
      // box seems like it should be a bit more robust, especially if
      // caretPositionFromPoint is more clever than elementFromPoint in locating
      // covered-up text.)
      
      
      // Secondly, sites like asahi.com use "covering links" with the following
      // structure:
      
      // <div>
      //   <a href="/articles/" style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: 1">
      //     <span aria-hidden="true" style="display: block; width: 1px; height: 1px; overflow: hidden">
      //       あいうえお
      //     </span>
      //   </a>
      // </div>
      // <div>
      //   <div style="position: relative; width: 100%">
      //     <h2 style="z-index: auto">
      //       <a href="/articles/" id="innerLink">
      //         あいうえお
      //       </a>
      //     </h2>
      //   </div>
      // </div>
      
      // We will initially pick up the あういえお text from the <a> element, but
      // we want to ignore that it since it is "hidden" by giving it a width/height
      // of 1px.
      
      // Note that we can't just check for aria-hidden !== "true" because asahi.com
      // also has links marked as aria-hidden="true" that are definitely NOT hidden.
      
      // nikkei.com has a somewhat similar structure but without using or setting
      // width/height to 1px. Instead it uses an opacity of 0 to hide the covering
      // link so we need to check for that too.
            const isVisible = element => "0" !== getComputedStyle(element).opacity && (
      // If the element is display: contents the bounding box will be empty
      "contents" === getComputedStyle(element).display || bboxIncludesPoint({
        bbox: element.getBoundingClientRect(),
        margin: 5,
        point
      }));
      // Get the ancestor node for all inline nodes
            let inlineAncestor = startNode.parentElement;
      // Check the direct parent, if available, is visible.
      
      // If it is not, return null. This is particularly important for the "covering
      // link" case described above since it will give us a chance to search for the
      // real link text.
      
      // (Note that here, and below if there is no inline ancestor we do NOT want to
      // return null because we commonly encounter that case when using synthesized
      // text nodes.)
            if (inlineAncestor && !isVisible(inlineAncestor)) return null;
      while (isInline(inlineAncestor) && !isRubyAnnotationElement(inlineAncestor)) {
        inlineAncestor = inlineAncestor.parentElement;
        if (inlineAncestor && !isVisible(inlineAncestor)) return null;
      }
      // Skip ruby annotation elements when traversing. However, don't do that
      // if the inline ancestor is itself a ruby annotation element or else
      // we'll never be able to find the starting point within the tree walker.
            let filter;
      if (!isRubyAnnotationElement(inlineAncestor)) filter = {
        acceptNode: node => isRubyAnnotationElement(node.parentElement) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
      };
      // Setup a treewalker starting at the current node
            const treeWalker = document.createNodeIterator(inlineAncestor || startNode, NodeFilter.SHOW_TEXT, filter);
      while (treeWalker.referenceNode !== startNode && treeWalker.nextNode()) ;
      if (treeWalker.referenceNode !== startNode) {
        console.error("Could not find node in tree", startNode);
        return null;
      }
      // Look for start, skipping any initial whitespace
            let node = startNode;
      let offset = startOffset;
      do {
        const nodeText = node.data.substring(offset);
        const textStart = nodeText.search(/\S/);
        if (-1 !== textStart) {
          offset += textStart;
          break;
        }
        // Curiously with our synthesized text nodes, the next node can sometimes
        // be the same node. We only tend to reach that case, however, when our
        // offset corresponds to the end of the text so we just detect that case
        // earlier on and don't bother checking it here.
                node = treeWalker.nextNode();
        offset = 0;
      } while (node);
      // (This should probably not traverse block siblings but oh well)
            if (!node) return null;
      const result = {
        text: "",
        textRange: []
      };
      let textDelimiter = nonJapaneseChar;
      // Look for range ends
            do {
        const nodeText = node.data.substring(offset);
        let textEnd = nodeText.search(textDelimiter);
        // Check if we are looking at a special string that accepts a different
        // range of characters.
                if (textDelimiter === nonJapaneseChar) {
          const currentText = result.text + nodeText.substring(0, -1 === textEnd ? void 0 : textEnd);
          // If the source starts with a number, expand our text delimeter to allow
          // reading the rest of the number since it might be something like 5つ.
                    if (!currentText.length && startsWithNumber(nodeText)) textDelimiter = nonJapaneseCharOrNumber;
          // Check if we should further expand the set of allowed characters in
          // order to recognize certains types of metadata-type strings (e.g. years
          // or floor space measurements).
                    ({textDelimiter, textEnd} = lookForMetadata({
            currentText,
            matchCurrency,
            nodeText,
            textDelimiter,
            textEnd
          }));
        }
        if ("number" === typeof maxLength && maxLength >= 0) {
          const maxEnd = maxLength - result.text.length;
          if (-1 === textEnd) 
          // The >= here is important since it means that if the node has
          // exactly enough characters to reach the maxLength then we will
          // stop walking the tree at this point.
          textEnd = node.data.length - offset >= maxEnd ? maxEnd : -1; else textEnd = Math.min(textEnd, maxEnd);
        }
        if (0 === textEnd) 
        // There are no characters here for us.
        break; else if (-1 !== textEnd) {
          // The text node has disallowed characters mid-way through so
          // return up to that point.
          result.text += nodeText.substring(0, textEnd);
          result.textRange.push({
            node,
            start: offset,
            end: offset + textEnd
          });
          break;
        }
        // The whole text node is allowed characters, keep going.
                result.text += nodeText;
        result.textRange.push({
          node,
          start: offset,
          end: node.data.length
        });
        node = treeWalker.nextNode();
        offset = 0;
      } while (node && inlineAncestor && (node.parentElement === inlineAncestor || isInline(node.parentElement)));
      // Check if we didn't find any suitable characters
            if (!result.textRange.length) return null;
      result.meta = extractGetTextMetadata({
        text: result.text,
        matchCurrency
      });
      return result;
    }
    function getParentLink(node) {
      if (node && node.nodeType === Node.ELEMENT_NODE) return node.closest("a");
      if (isTextNode(node)) return node.parentElement ? node.parentElement.closest("a") : null;
      return null;
    }
    // Take care of "covering links". "Convering links" is the name we give to the
    // approach used by at least asahi.com and nikkei.com on their homepages where
    // they create a big <a> element and a tiny (1px x 1px) span with the link text
    // and then render the actual link content in a separate layer.
    
    // Roughly it looks something like the following:
    
    // <div>
    //   <a> <-- Link to article with abs-pos left/right/top/bottom: 0
    //     <span/> <-- Link text as a 1x1 div
    //   </a>
    //   <div> <!-- Actual link content
    //     <figure/>
    //     <h2><a>Link text again</a></h2>
    //     etc.
    //   </div>
    // </div>
    
    // If we fail to find any text but are pointing at a link, we should try digging
    // for content underneath the link
        function getTextFromCoveringLink({linkElem, originalElem, point, matchCurrency, maxLength}) {
      // We'd like to just turn off pointer-events and see what we find but that
      // will introduce flickering when links have transitions defined on them.
      // Instead we first probe to see if there is likely to be some other text
      // underneath and only toggle pointer-events when that's the case.
      const hasCoveredElements = document.elementsFromPoint(point.x, point.y).some((elem => !elem.contains(linkElem)));
      if (!hasCoveredElements) return null;
      // Turn off pointer-events for the covering link
            const previousPointEvents = linkElem.style.pointerEvents;
      linkElem.style.pointerEvents = "none";
      const position = caretPositionFromPoint(point);
      linkElem.style.pointerEvents = previousPointEvents;
      // See if we successfully found a different text node
            if (!position || position.offsetNode === originalElem || !isTextNode(position.offsetNode)) return null;
      return getTextFromTextNode({
        startNode: position.offsetNode,
        startOffset: position.offset,
        point,
        matchCurrency,
        maxLength
      });
    }
    function getTextFromRandomElement({elem, matchImages, matchText}) {
      // Don't return anything for an iframe since this script will run inside the
      // iframe's contents as well.
      if ("IFRAME" === elem.nodeName) return null;
      // We divide the world into two types of elements: image-like elements and the
      // rest which we presume to be "text" elements.
            const isImage = "image" === getContentType(elem);
      if (isImage && !matchImages) return null; else if (!isImage && !matchText) return null;
      if (hasTitleAttribute(elem) && elem.title.length) return elem.title;
      if (hasAltAttribute(elem) && elem.alt.length) 
      // Ignore the default '画像' alt text Twitter and others put on many of their
      // images.
      return "画像" !== elem.alt ? elem.alt : null;
      if ("OPTION" === elem.nodeName) return elem.text;
      if (isSelectElement(elem)) return elem.options[elem.selectedIndex].text;
      return null;
    }
    function hasTitleAttribute(elem) {
      return "string" === typeof elem.title;
    }
    function hasAltAttribute(elem) {
      return "string" === typeof elem.alt;
    }
    function isSelectElement(elem) {
      return "SELECT" === elem.nodeName;
    }
    // CONCATENATED MODULE: ./src/content/iframes.ts
    function findIframeElement(params) {
      // First collect together all the iframes we can.
      const iframes = getIframes(document);
      if (!iframes.length) return;
      if (1 === iframes.length) return iframes[0];
      // Look for an iframe that matches on frameId
            if ("number" === typeof params.frameId) {
        // Use the getFrameId API if available
        // If it is available, we treat this as definitive since, at least in
        // Firefox, it should work for cross-origin iframes, unlike when using the
        // data attribute.
        if ("function" === typeof lib.browser.runtime.getFrameId) return iframes.find((iframe => lib.browser.runtime.getFrameId(iframe) === params.frameId));
        // Otherwise look for a frameId stored in a data attribute
                const frameIdMatch = iframes.find((f => f.dataset.frameId === String(params.frameId)));
        if (frameIdMatch) return frameIdMatch;
      }
      // Then try to narrow the list by matches on initialSrc or currentSrc
            let candidates = iframes.filter((f => f.src && (f.src === params.initialSrc || f.src === params.currentSrc)));
      if (!candidates.length) candidates = iframes;
      if (1 === candidates.length) return candidates[0];
      // We have multiple candidates, so try to sort by those with the closest
      // dimensions.
            if (params.dimensions) candidates.sort(((a, b) => {
        const aDimensions = getIframeDimensions(a);
        const aDiff = Math.abs(params.dimensions.width - aDimensions.width) + Math.abs(params.dimensions.height - aDimensions.height);
        const bDimensions = getIframeDimensions(b);
        const bDiff = Math.abs(params.dimensions.width - bDimensions.width) + Math.abs(params.dimensions.height - bDimensions.height);
        return aDiff - bDiff;
      }));
      return candidates[0];
    }
    function getIframes(doc) {
      var _a;
      const iframes = Array.from(doc.getElementsByTagName("iframe"));
      // For same-origin iframes, fetch their child iframe elements recursively.
            for (const iframe of iframes) {
        // If we try to access iframe.contentDocument and it's cross-origin,
        // Safari will print an error to the console. In fact, even if we just use
        // `typeof iframe.contentDocument` it will print the same message.
        // Inspecting the contentWindow doesn't seem to provide any clues either.
        // However, if we try to access `iframe.contentWindow.frameElement` it
        // will throw a SecurityError which we can detect and it won't print
        // anything to the console.
        try {
          null === (_a = iframe.contentWindow) || void 0 === _a ? void 0 : _a.frameElement;
        } catch {
          continue;
        }
        if (iframe.contentDocument) iframes.push(...getIframes(iframe.contentDocument));
      }
      return iframes;
    }
    function getIframeDimensions(elem) {
      // In order to get dimensions that will correspond with the innerHeight /
      // innerWidth that the iframe sees on its document element we should use the
      // offsetWidth / offsetHeight and subtract and borders and padding.
      const cs = getComputedStyle(elem);
      const width = elem.offsetWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight) - parseFloat(cs.borderLeftWidth) - parseFloat(cs.borderRightWidth);
      const height = elem.offsetHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom) - parseFloat(cs.borderTopWidth) - parseFloat(cs.borderBottomWidth);
      return {
        width,
        height
      };
    }
    let cachedOrigin;
    function getIframeOrigin(iframeElement) {
      if ((null === cachedOrigin || void 0 === cachedOrigin ? void 0 : cachedOrigin.iframe) === iframeElement) return cachedOrigin.origin; else if (cachedOrigin) {
        cachedOrigin.resizeObserver.disconnect();
        cachedOrigin = void 0;
      }
      let {left: x, top: y} = iframeElement.getBoundingClientRect();
      // The bounding client rect includes the element and its borders and padding.
      // However, the coordinates within the iframe are minus the borders and
      // padding.
      
      // Note that if these values change, the ResizeObserver _should_ fire because
      // it is supposed to fire when either the iframe's border box _or_ content box
      // size changes.
            const cs = getComputedStyle(iframeElement);
      x += parseFloat(cs.borderLeftWidth);
      x += parseFloat(cs.paddingLeft);
      y += parseFloat(cs.borderTopWidth);
      y += parseFloat(cs.paddingTop);
      const resizeObserver = new ResizeObserver((() => {
        cachedOrigin = void 0;
        resizeObserver.disconnect();
      }));
      resizeObserver.observe(iframeElement);
      cachedOrigin = {
        iframe: iframeElement,
        origin: {
          x,
          y
        },
        resizeObserver
      };
      return cachedOrigin.origin;
    }
    // Called from within an iframe, returns the window dimensions using a size that
    // should match the size we expect when expecting the <iframe> element from its
    // parent.
        function getWindowDimensions() {
      var _a, _b, _c, _d;
      if ("BackCompat" === document.compatMode) return {
        width: null !== (_b = null === (_a = document.body) || void 0 === _a ? void 0 : _a.clientWidth) && void 0 !== _b ? _b : window.innerWidth,
        height: null !== (_d = null === (_c = document.body) || void 0 === _c ? void 0 : _c.clientHeight) && void 0 !== _d ? _d : window.innerHeight
      }; else return {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
    // CONCATENATED MODULE: ./src/utils/themes.ts
    function getThemeClass(theme) {
      if ("default" !== theme) return `theme-${theme}`;
      // It is up to the call site to register for media query updates if they
      // need to respond to dark mode changes. Generally, e.g. for popups etc.,
      // however, the usage of this value is short-lived enough that it's not
      // needed.
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "theme-black";
      return "theme-light";
    }
    // CONCATENATED MODULE: ./src/utils/hash.ts
    function getHash(input) {
      // Based on https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
      // I really have no idea if it's right. All we really use it for is to detect
      // if we need to replace the stylesheet data or not.
      let h1 = 0xdeadbeef;
      let h2 = 0x41c6ce57;
      for (let ch, i = 0; i < input.length; i++) {
        ch = input.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
      }
      h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
      h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
      const asNum = 4294967296 * (2097151 & h2) + (h1 >>> 0);
      return ("0000000000000" + asNum.toString(16)).substr(-14);
    }
    // CONCATENATED MODULE: ./src/content/svg.ts
    const isSvgDoc = doc => doc.documentElement.namespaceURI === SVG_NS;
    const isForeignObjectElement = elem => !!elem && elem.namespaceURI === SVG_NS && "FOREIGNOBJECT" === elem.nodeName.toUpperCase()
    // This is only needed because Edge's WebIDL definitions are wrong
    // (they have documentElement as having type HTMLElement)
    ;
    const isSvgSvgElement = elem => !!elem && elem.namespaceURI === SVG_NS && "SVG" === elem.nodeName.toUpperCase();
    // CONCATENATED MODULE: ./src/content/content-container.ts
    function getOrCreateEmptyContainer({id, styles, before, legacyIds}) {
      // Drop any legacy containers
      if (null === legacyIds || void 0 === legacyIds ? void 0 : legacyIds.length) {
        const legacyContainers = document.querySelectorAll(legacyIds.map((id => `#${id}`)).join(", "));
        for (const container of legacyContainers) removeContainerElement(container);
      }
      // Look for an existing container we can re-use
            const existingContainers = Array.from(document.querySelectorAll(`#${id}`));
      if (existingContainers.length) {
        // Drop any duplicate containers, returning only the last one
        while (existingContainers.length > 1) removeContainerElement(existingContainers.shift());
        // Drop any existing content (except styles)
                resetContent(existingContainers[0]);
        // Make sure the styles are up-to-date
                resetStyles({
          container: existingContainers[0],
          styles
        });
        // Make sure we have a fullscreenchange callback registered
                addFullScreenChangeCallback({
          id,
          before
        });
        return existingContainers[0];
      }
      // We didn't find an existing content container so create a new one
            const container = document.createElementNS(HTML_NS, "div");
      container.id = id;
      addContainerElement({
        elem: container,
        before
      });
      // Reset any styles the page may have applied.
            container.style.all = "initial";
      // Add the necessary style element
            resetStyles({
        container,
        styles
      });
      // Update the position in the document if we go to/from fullscreen mode
            addFullScreenChangeCallback({
        id,
        before
      });
      return container;
    }
    function removeContentContainer(id) {
      const containerIds = "string" === typeof id ? [ id ] : id;
      const containers = Array.from(document.querySelectorAll(containerIds.map((id => `#${id}`)).join(", ")));
      for (const container of containers) removeContainerElement(container);
      for (const id of containerIds) removeFullScreenChangeCallback(id);
    }
    // --------------------------------------------------------------------------
    
    // Implementation helpers
    
    // --------------------------------------------------------------------------
        function addContainerElement({elem, before}) {
      const previousParent = elem.parentElement;
      // Set up a method to add to the DOM, respecting any `before` ID we might
      // have.
            const insertBefore = (parent, elem) => {
        const beforeElem = before ? parent.children.namedItem(before) : null;
        if (beforeElem) parent.insertBefore(elem, beforeElem); else parent.append(elem);
      };
      let parent;
      if (document.fullscreenElement) parent = document.fullscreenElement; else if (isSvgDoc(document)) {
        // For SVG documents we put the container <div> inside a <foreignObject>.
        const foreignObject = document.createElementNS(SVG_NS, "foreignObject");
        foreignObject.setAttribute("width", "100%");
        foreignObject.setAttribute("height", "100%");
        foreignObject.style.setProperty("pointer-events", "none", "important");
        foreignObject.style.setProperty("overflow", "visible", "important");
        insertBefore(document.documentElement, foreignObject);
        parent = foreignObject;
      } else parent = document.documentElement;
      insertBefore(parent, elem);
      // If our previous parent was a foreignObject wrapper, drop it
            if (isForeignObjectElement(previousParent)) previousParent.remove();
    }
    function removeContainerElement(elem) {
      if (isForeignObjectElement(elem.parentElement)) elem.parentElement.remove(); else elem.remove();
    }
    const fullScreenChangedCallbacks = {};
    function addFullScreenChangeCallback({id, before}) {
      const existingCallback = fullScreenChangedCallbacks[id];
      if ("undefined" !== typeof existingCallback) return;
      const callback = () => {
        const container = document.getElementById(id);
        if (!container) return;
        // Re-add the container element, respecting the updated
        // document.fullScreenElement property.
                addContainerElement({
          elem: container,
          before
        });
      };
      document.addEventListener("fullscreenchange", callback);
      fullScreenChangedCallbacks[id] = callback;
    }
    function removeFullScreenChangeCallback(id) {
      const callback = fullScreenChangedCallbacks[id];
      if (callback) document.removeEventListener("fullscreenchange", callback);
    }
    function resetContent(elem) {
      if (!elem.shadowRoot) return;
      const children = Array.from(elem.shadowRoot.children);
      for (const child of children) 
      // We need to convert to uppercase because for standalone SVG documents the
      // tag name case is not normalized.
      if ("STYLE" !== child.tagName.toUpperCase()) child.remove();
    }
    function resetStyles({container, styles}) {
      const styleHash = getHash(styles);
      if (!container.shadowRoot) {
        container.attachShadow({
          mode: "open"
        });
        // Add <style>
                const style = document.createElementNS(HTML_NS, "style");
        style.textContent = styles;
        style.dataset.hash = styleHash;
        container.shadowRoot.append(style);
      } else {
        // Reset style
        let existingStyle = container.shadowRoot.querySelector("style");
        if (existingStyle && existingStyle.dataset.hash !== styleHash) {
          existingStyle.remove();
          existingStyle = null;
        }
        if (!existingStyle) {
          const style = document.createElementNS(HTML_NS, "style");
          style.textContent = styles;
          style.dataset.hash = styleHash;
          container.shadowRoot.append(style);
        }
      }
    }
    // EXTERNAL MODULE: ./css/puck.css
        var puck = __webpack_require__(889);
    // CONCATENATED MODULE: ./src/content/puck.ts
    function isPuckMouseEvent(mouseEvent) {
      return !!mouseEvent.fromPuck;
    }
    function clickStateHasTimeout(clickState) {
      return "number" === typeof clickState.timeout;
    }
    function clearClickTimeout(clickState) {
      if (clickStateHasTimeout(clickState)) clearTimeout(clickState.timeout);
    }
    class LookupPuck {
      constructor(safeAreaProvider, onLookupDisabled) {
        this.safeAreaProvider = safeAreaProvider;
        this.onLookupDisabled = onLookupDisabled;
        this.enabledState = "disabled";
        this.clickState = {
          kind: "idle"
        };
        // The translate (X and Y) values applied to the moon whilst it is being
        // dragged. They are measured relative to the midpoint of the moon (which is
        // also the midpoint of the earth).
                this.targetOffset = {
          x: 0,
          y: 0
        };
        this.targetOrientation = "above";
        this.cachedViewportDimensions = null;
        this.onSafeAreaUpdated = () => {
          this.cachedViewportDimensions = null;
          this.setPositionWithinSafeArea(this.puckX, this.puckY);
        };
        this.onWindowPointerMove = event => {
          var _a, _b, _c, _d, _e;
          if (!this.puck || !this.earthWidth || !this.earthHeight || "disabled" === this.enabledState || 
          // If we're not being pressed or dragged, ignore
          !("dragging" === this.clickState.kind || "firstpointerdown" === this.clickState.kind || "secondpointerdown" === this.clickState.kind)) return;
          event.preventDefault();
          let {clientX, clientY} = event;
          // Factor in any viewport offset needed to make up for Safari iOS's buggy
          // implementation of position:fixed.
                    let viewportOffsetLeft = 0;
          let viewportOffsetTop = 0;
          if (this.hasBuggyPositionFixed) {
            viewportOffsetLeft = null !== (_b = null === (_a = window.visualViewport) || void 0 === _a ? void 0 : _a.offsetLeft) && void 0 !== _b ? _b : 0;
            viewportOffsetTop = null !== (_d = null === (_c = window.visualViewport) || void 0 === _c ? void 0 : _c.offsetTop) && void 0 !== _d ? _d : 0;
          }
          clientX += viewportOffsetLeft;
          clientY += viewportOffsetTop;
          // Translate the midpoint of the earth to the position of the pointer event.
          // This updates the moon offset
                    this.setPositionWithinSafeArea(clientX - this.earthWidth / 2, clientY - this.earthHeight / 2);
          if ("active" !== this.enabledState) return;
          // Before applying the transformations to the earth and the moon, they
          // both share the same midpoint.
          // Work out the midpoint of the moon post-transformations. This is where
          // we'll fire the mousemove event to trigger a lookup.
          
          // We drop any zoom offsets here since both elementFromPoint and the mouse
          // event handlers we pass these coordinates to will expect an unadjusted
          // value.
                    const targetX = this.puckX + this.earthWidth / 2 + this.targetOffset.x - viewportOffsetLeft;
          const targetY = this.puckY + this.earthHeight / 2 + this.targetOffset.y - viewportOffsetTop;
          // See what we are pointing at
                    let target = document.elementFromPoint(targetX, targetY);
          // Check if we need to adjust the content to look it up.
          
          // But first check we aren't pointing at the same content as we adjusted
          // last time (or one of its descendents).
                    if (!(null === (_e = this.contentToRestore) || void 0 === _e ? void 0 : _e.root.contains(target))) {
            // Restore any content we previously adjusted.
            this.restoreContent();
            // Look for hidden textboxes on mokuro reader pages
                        const mokuroResult = LookupPuck.uncoverMokuroText(target, targetX, targetY);
            if (mokuroResult) {
              target = mokuroResult.newTarget;
              this.contentToRestore = mokuroResult.contentToRestore;
            }
          }
          // Make sure the target is an actual element since the mousemove handler
          // expects that.
                    if (!target) return;
          // When the target is an iframe, simply firing a 'mousemove' event at it
          // does not have the desired effect of prompting a lookup at the target
          // location within the iframe.
          
          // Instead, we send a 'puckMoved' message to the iframe. Our injected
          // content script ensures that the iframe has a listener in place to handle
          // this message. Upon receiving this message, the iframe will fire a
          // 'mousemove' event at the indicated location, ultimately resulting in a
          // lookup at the target point.
          
          // Note that this is the one and only case where we use postMessage, the
          // reasons for which are described here:
          
          //  https://github.com/birchill/10ten-ja-reader/issues/747#issuecomment-918774588
          
          // For any other cross-frame messaging we should very very strongly prefer
          // passing messages via the background page.
                    if ("IFRAME" === target.tagName) {
            const iframeElement = target;
            const contentWindow = iframeElement.contentWindow;
            if (!contentWindow) return;
            // Adjust the target position by the offset of the iframe itself within
            // the viewport.
                        const originPoint = getIframeOrigin(iframeElement);
            if (!originPoint) return;
            const {x, y} = originPoint;
            contentWindow.postMessage({
              type: "10ten(ja):puckMoved",
              clientX: targetX - x,
              clientY: targetY - y
            }, "*");
            return;
          }
          const mouseEvent = new MouseEvent("mousemove", {
            // Make sure the event bubbles up to the listener on the window
            bubbles: true,
            clientX: targetX,
            clientY: targetY
          });
          mouseEvent.fromPuck = true;
          target.dispatchEvent(mouseEvent);
        };
        this.checkForBuggyPositionFixed = () => {
          // Check if we've already run this check
          if ("undefined" !== typeof this.hasBuggyPositionFixed) return;
          // Check we have the visual viewport API available.
          
          // If not, it's hard to detect the browser bug (since we don't know if we're
          // scaled or not) and it's hard to work around it too without flushing style
          // on every pointer event so we just act as if there's no bug.
          
          // (Normally this function won't be called in the first place if we don't
          // have the visual viewport API since we can't register for viewport resize
          // events, but we manually call this function initially after rendering so
          // we can still arrive here even without the API.)
                    if ("undefined" === typeof window.visualViewport || null === window.visualViewport) {
            this.hasBuggyPositionFixed = false;
            return;
          }
          // Check that there is a suitable viewport scale applied so that we could
          // potentially detect the bug
                    if (Math.abs(window.visualViewport.scale - 1) < 0.01 || Math.abs(window.visualViewport.offsetLeft) <= 1 && Math.abs(window.visualViewport.offsetTop) <= 1) return;
          // Check the puck is actually being rendered
                    if (!this.puck) return;
          // Clear the transform on the puck and check if its resting position is
          // actually equal to the offset of the visual viewport.
          
          // When that's the case we've got iOS's buggy position:fixed that makes the
          // element not actually fixed.
          
          // https://bugs.webkit.org/show_bug.cgi?id=207089
          
          // Furthermore, because the offsets match we know we can work around it
          // by factoring the viewport offset into our calculations.
                    const previousTransform = this.puck.style.transform || "none";
          this.puck.style.transform = "none";
          const bbox = this.puck.getBoundingClientRect();
          this.hasBuggyPositionFixed = Math.abs(bbox.left + window.visualViewport.offsetLeft) < 1 && Math.abs(bbox.top + window.visualViewport.offsetTop) < 1;
          this.puck.style.transform = previousTransform;
          // Don't listen for any more viewport resize events
                    window.visualViewport.removeEventListener("resize", this.checkForBuggyPositionFixed);
        };
        this.onPuckPointerDown = event => {
          if ("disabled" === this.enabledState || !this.puck) return;
          // Ignore right-clicks
                    if (event.button) return;
          // NOTE: Some of the code in this function is duplicated in onPuckMouseDown
          // so please make sure to keep these two functions in sync.
                    if ("idle" === this.clickState.kind) 
          // If no transition to 'pointerup' occurs during the click hysteresis
          // period, then we transition to 'dragging'. This avoids onPuckClick()
          // being fired every time the puck gets parked.
          this.clickState = {
            kind: "firstpointerdown",
            timeout: window.setTimeout((() => {
              if ("firstpointerdown" === this.clickState.kind) this.clickState = {
                kind: "dragging"
              };
            }), LookupPuck.clickHysteresis)
          }; else if ("firstclick" === this.clickState.kind) 
          // Carry across the timeout from 'firstclick', as we still want to
          // transition back to 'idle' if no 'pointerdown' event came within
          // the hysteresis period of the preceding 'firstclick' state.
          this.clickState = {
            ...this.clickState,
            kind: "secondpointerdown"
          };
          event.preventDefault();
          event.stopPropagation();
          this.puck.classList.add("dragging");
          this.puck.setPointerCapture(event.pointerId);
          // We need to register in the capture phase because Bibi reader (which
          // apparently is based on Epub.js) registers a pointermove handler on the
          // window in the capture phase and calls `stopPropagation()` on the events
          // so if we don't register in the capture phase, we'll never see the events.
                    window.addEventListener("pointermove", this.onWindowPointerMove, {
            capture: true
          });
          window.addEventListener("pointerup", this.stopDraggingPuck);
          window.addEventListener("pointercancel", this.stopDraggingPuck);
        };
        // See notes where we register the following two functions (onPuckMouseDown
        // and onPuckMouseUp) for why they are needed. The summary is that they are
        // only here to work around iOS swallowing pointerevents during the _second_
        // tap of a double-tap gesture.
        
        // As a result these event listeners are _only_ interested in when we are
        // detecting the second tap of a double-tap gesture.
        
        // When the pointer events are _not_ swallowed, because we call preventDefault
        // on the pointerdown / pointerup events, we these functions should never be
        // called.
                this.onPuckMouseDown = event => {
          if ("disabled" === this.enabledState || !this.puck) return;
          // Ignore right-clicks
                    if (event.button) return;
          // We only care about detecting the start of a second tap
                    if ("firstclick" !== this.clickState.kind) return;
          // Following are the important bits of onPuckPointerDown.
          
          // Eventually we should find a way to share this code better with that
          // function.
                    this.clickState = {
            ...this.clickState,
            kind: "secondpointerdown"
          };
          event.preventDefault();
          // See note in onPointerDown for why we need to register in the capture
          // phase.
                    window.addEventListener("pointermove", this.onWindowPointerMove, {
            capture: true
          });
          window.addEventListener("pointerup", this.stopDraggingPuck);
          window.addEventListener("pointercancel", this.stopDraggingPuck);
        };
        this.onPuckMouseUp = event => {
          if ("disabled" === this.enabledState || !this.puck) return;
          // Ignore right-clicks
                    if (event.button) return;
          // We only care about detecting the end of the second tap in a double-tap
          // gesture.
                    if ("secondpointerdown" !== this.clickState.kind) return;
          event.preventDefault();
          event.stopPropagation();
          this.stopDraggingPuck();
          this.onPuckDoubleClick();
        };
        this.onPuckSingleClick = () => {
          this.setEnabledState("active" === this.enabledState ? "inactive" : "active");
        };
        this.onPuckDoubleClick = () => {
          this.targetOrientation = "above" === this.targetOrientation ? "below" : "above";
          this.setPositionWithinSafeArea(this.puckX, this.puckY);
        };
        // May be called manually (without an event), or upon 'pointerup' or
        // 'pointercancel'.
                this.stopDraggingPuck = event => {
          // Ignore right-clicks
          if (null === event || void 0 === event ? void 0 : event.button) return;
          if (this.puck) {
            this.puck.classList.remove("dragging");
            this.setPositionWithinSafeArea(this.puckX, this.puckY);
          }
          window.removeEventListener("pointermove", this.onWindowPointerMove, {
            capture: true
          });
          window.removeEventListener("pointerup", this.stopDraggingPuck);
          window.removeEventListener("pointercancel", this.stopDraggingPuck);
          if (!event || "pointercancel" === event.type) {
            clearClickTimeout(this.clickState);
            this.clickState = {
              kind: "idle"
            };
            return;
          }
          // Prevent any double-taps turning into a zoom
                    event.preventDefault();
          event.stopPropagation();
          if ("firstpointerdown" === this.clickState.kind) {
            // Prevent 'firstpointerdown' transitioning to 'dragging' state.
            clearClickTimeout(this.clickState);
            // Wait for the hysteresis period to expire before calling
            // this.onPuckSingleClick() (to rule out a double-click).
                        this.clickState = {
              kind: "firstclick",
              timeout: window.setTimeout((() => {
                if ("firstclick" === this.clickState.kind) {
                  this.clickState = {
                    kind: "idle"
                  };
                  this.onPuckSingleClick();
                } else if ("secondpointerdown" === this.clickState.kind) this.clickState = {
                  kind: "dragging"
                };
              }), LookupPuck.clickHysteresis)
            };
          } else if ("secondpointerdown" === this.clickState.kind) {
            clearClickTimeout(this.clickState);
            this.clickState = {
              kind: "idle"
            };
            this.onPuckDoubleClick();
          } else if ("dragging" === this.clickState.kind) this.clickState = {
            kind: "idle"
          };
        };
        this.noOpEventHandler = () => {};
      }
      setPosition({x, y, safeAreaLeft, safeAreaRight}) {
        this.puckX = x;
        this.puckY = y;
        // Update the puck position (that is, the earth)
                if (this.puck) this.puck.style.transform = `translate(${this.puckX}px, ${this.puckY}px)`;
        // Calculate the corresponding target point (that is, the moon)
        // First determine the actual range of motion of the moon, taking into
        // account any safe area on either side of the screen.
                const {viewportWidth} = this.getViewportDimensions(document);
        const safeAreaWidth = viewportWidth - safeAreaLeft - safeAreaRight;
        // Now work out where the moon is within that range such that it is
        
        // * 0 when the the left side of the earth is touching the left safe area
        //   inset, and
        // * 1 when the right side of the earth is touching the right safe area
        //   inset.
                const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
        const horizontalPortion = clamp((this.puckX - safeAreaLeft) / (safeAreaWidth - this.earthWidth), 0, 1);
        // Then we calculate the horizontal offset. We need to ensure that we
        // produce enough displacement that we can reach to the other edge of the
        // safe area in either direction.
        // The range is the amount the moon rotates either side of the moon, in this
        // case 45 degrees in either direction.
                const range = Math.PI / 2;
        // We need to determine the radius of the offset.
        
        // Typically we set this to 10 pixels greater than the radius of the earth
        // itself.
                const radiusOfEarth = this.earthWidth / 2;
        const preferredRadius = radiusOfEarth + 10;
        // However, we may need to extend that to reach the other side of the safe
        // area.
                const safeAreaExtent = Math.max(safeAreaLeft, safeAreaRight);
        const requiredReach = safeAreaExtent + radiusOfEarth;
        const requiredRadius = requiredReach / Math.sin(range / 2);
        // Choose whichever is larger
                const offsetRadius = Math.max(preferredRadius, requiredRadius);
        // Now finally we can calculate the horizontal offset.
                const angle = horizontalPortion * range - range / 2;
        const offsetX = Math.sin(angle) * offsetRadius;
        // For the vertical offset, we don't actually extend the moon out by the
        // same radius but instead try to keep a fixed vertical offset since that
        // makes scanning horizontally easier and allows us to tweak that offset to
        // make room for the user's thumb.
                const offsetYOrientationFactor = "above" === this.targetOrientation ? -1 : 1;
        const offsetY = ("above" === this.targetOrientation ? this.targetAbsoluteOffsetYAbove : this.targetAbsoluteOffsetYBelow) * offsetYOrientationFactor;
        // At rest, make the target land on the surface of the puck.
                const restOffsetX = Math.sin(angle) * radiusOfEarth;
        const restOffsetY = Math.cos(angle) * radiusOfEarth * offsetYOrientationFactor;
        this.targetOffset = {
          x: offsetX,
          y: offsetY
        };
        // Update target position in style
                if (this.puck) {
          this.puck.style.setProperty("--target-x-offset", `${offsetX}px`);
          this.puck.style.setProperty("--target-y-offset", `${offsetY}px`);
          this.puck.style.setProperty("--rest-x-offset", `${restOffsetX}px`);
          this.puck.style.setProperty("--rest-y-offset", `${restOffsetY}px`);
        }
      }
      // Returns the total clearance to allow arround the target offset for the
      // puck.
      getPuckClearance() {
        const moonVerticalClearance = this.moonHeight / 2;
        const earthVerticalClearance = Math.abs(this.targetOffset.y) + this.earthScaleFactorWhenDragging * this.earthHeight / 2;
        return {
          top: "above" === this.targetOrientation ? moonVerticalClearance : earthVerticalClearance,
          bottom: "above" === this.targetOrientation ? earthVerticalClearance : moonVerticalClearance,
          left: this.earthScaleFactorWhenDragging * this.earthWidth / 2 + this.targetOffset.x,
          right: this.earthScaleFactorWhenDragging * this.earthWidth / 2 - this.targetOffset.x
        };
      }
      getTargetOrientation() {
        return this.targetOrientation;
      }
      getViewportDimensions(document) {
        var _a, _b;
        if (this.cachedViewportDimensions) return this.cachedViewportDimensions;
        // We'd ideally use document.documentElement.clientWidth and
        // document.documentElement.clientHeight for both viewport measurements, but
        // iOS 15 Safari doesn't behave suitably for that.
        
        // iOS 15 Safari:
        
        // - seems to measure its safe area insets from the area defined by
        //   document.defaultView.innerHeight and .innerWidth.
        
        // - decreases both document.defaultView.innerHeight and the
        //   safe-area-inset-bottom in compact mode, and vice versa in non-compact
        //   mode.
        
        // @see https://github.com/shirakaba/10ten-ja-reader/pull/3#issuecomment-875127566
        
        // Another curiousity, if you load a page initially zoomed-in using pinch
        // zoom (e.g. by refreshing it after zooming in), the innerHeight will
        // initially report the zoomed-in viewport height (i.e. the same value as
        // window.visualViewport.height). However, if you zoom all the way out and
        // back in again, it will give you the layout viewport. If you zoom
        // partially out and back in, you get something in between.
                this.cachedViewportDimensions = {
          viewportWidth: document.documentElement.clientWidth,
          viewportHeight: null !== (_b = null === (_a = document.defaultView) || void 0 === _a ? void 0 : _a.innerHeight) && void 0 !== _b ? _b : document.documentElement.clientHeight
        };
        return this.cachedViewportDimensions;
      }
      setPositionWithinSafeArea(x, y) {
        if (!this.puck) return;
        const {top: safeAreaTop, right: safeAreaRight, bottom: safeAreaBottom, left: safeAreaLeft} = this.safeAreaProvider.getSafeArea();
        const {viewportWidth, viewportHeight} = this.getViewportDimensions(document);
        const minX = safeAreaLeft;
        const maxX = viewportWidth - safeAreaRight - this.earthWidth;
        const minY = safeAreaTop;
        const maxY = viewportHeight - safeAreaBottom - this.earthHeight;
        let clampedX = Math.min(Math.max(minX, x), maxX);
        let clampedY = Math.min(Math.max(minY, y), maxY);
        // When we initialize the puck, we put it in the bottom-right corner, but on
        // iOS 15 Safari, if it's flush up against the right edge of the screen then
        // when you try to drag it away, you end up dragging in the next tab.
        
        // To avoid that we detect the initial position coordinates and add a few
        // pixels margin.
                if (x === Number.MAX_SAFE_INTEGER && y === Number.MAX_SAFE_INTEGER) {
          clampedX -= 15;
          clampedY -= 15;
        }
        this.setPosition({
          x: clampedX,
          y: clampedY,
          safeAreaLeft,
          safeAreaRight
        });
      }
      restoreContent() {
        var _a;
        null === (_a = this.contentToRestore) || void 0 === _a ? void 0 : _a.restore();
        this.contentToRestore = void 0;
      }
      // Look for textBox elements generated by mokuro reader
      // (https://github.com/kha-white/mokuro) since they have hidden paragraph
      // elements that are only shown on hover.
      static uncoverMokuroText(target, targetX, targetY) {
        // Check for a suitable suspect
        if (!(target instanceof HTMLElement) || !target.classList.contains("textBox")) return null;
        // Set the paragraphs to display: table to match the hover style's from
        // mokuro's stylesheet:
        
        // https://github.com/kha-white/mokuro/blob/43c59a3c49100db522db088563297dc609afa031/mokuro/styles.css#L70-L72
        
        // We also record the previous setting on the inline style attribute so we
        // can faithfully restore it when we're done.
                const paragraphs = target.querySelectorAll("p");
        const toRestore = [];
        for (const p of paragraphs) if ("none" === getComputedStyle(p).display) {
          toRestore.push([ p, p.style.display || null ]);
          p.style.display = "table";
        }
        // Check if we found any paragraphs to adjust
                if (!toRestore.length) return null;
        // Setup a function to restore the content
                const restore = () => {
          // If we selected part of the content we uncovered we need to clear
          // selection or else we'll be unable to select anything more.
          const selection = window.getSelection();
          if (target && toRestore.some((([p]) => null === selection || void 0 === selection ? void 0 : selection.containsNode(p, true)))) selection.removeAllRanges();
          // Restore the inline style display
                    for (const [p, display] of toRestore) if (display) p.style.display = display; else p.style.removeProperty("display");
        };
        const newTarget = document.elementFromPoint(targetX, targetY);
        if (!newTarget) {
          restore();
          return null;
        }
        return {
          newTarget,
          contentToRestore: {
            root: target,
            restore
          }
        };
      }
      render({icon, theme}) {
        var _a;
        // Set up shadow tree
                const container = getOrCreateEmptyContainer({
          id: LookupPuck.id,
          styles: puck /* default.toString */ .Z.toString()
        });
        // Create puck elem
                this.puck = document.createElement("div");
        this.puck.classList.add("puck");
        const earth = document.createElement("div");
        earth.classList.add("earth");
        this.puck.append(earth);
        // Brand the earth
                const logoSvg = this.renderIcon(icon);
        logoSvg.classList.add("logo");
        earth.append(logoSvg);
        const moon = document.createElement("div");
        moon.classList.add("moon");
        this.puck.append(moon);
        container.shadowRoot.append(this.puck);
        // Set theme styles
                this.puck.classList.add(getThemeClass(theme));
        // Calculate the earth size (which is equal to the puck's overall size)
                if (!this.earthWidth || !this.earthHeight) {
          const {width, height} = earth.getBoundingClientRect();
          this.earthWidth = width;
          this.earthHeight = height;
        }
        // Calculate the moon size
                if (!this.moonWidth || !this.moonHeight) {
          const {width, height} = moon.getBoundingClientRect();
          this.moonWidth = width;
          this.moonHeight = height;
        }
        if ("undefined" === typeof this.earthScaleFactorWhenDragging) this.earthScaleFactorWhenDragging = parseFloat(getComputedStyle(earth).getPropertyValue("--scale-factor-when-dragging")) || 0;
        if ("undefined" === typeof this.targetAbsoluteOffsetYAbove || "undefined" === typeof this.targetAbsoluteOffsetYBelow) {
          const minimumMoonOffsetY = parseFloat(getComputedStyle(moon).getPropertyValue("--minimum-moon-offset-y")) || 0;
          // Depending on whether the moon is above or below the earth, some extra
          // altitude needs to be added to the orbit so that the thumb doesn't cover
          // it.
                    const extraAltitudeToClearAboveThumb = parseFloat(getComputedStyle(moon).getPropertyValue("--extra-altitude-to-clear-above-thumb")) || 0;
          const extraAltitudeToClearBelowThumb = parseFloat(getComputedStyle(moon).getPropertyValue("--extra-altitude-to-clear-above-thumb")) || 0;
          // By adding this extra clearance, we avoid the iOS 15 Safari full-size
          // URL bar springing back into place when dragging the puck too far into
          // the bottom of the viewport. Hopefully this covers the worst-case
          // scenario.
          // @see https://github.com/shirakaba/10ten-ja-reader/pull/5#issuecomment-877794905
                    const extraAltitudeToClearIos15SafariSafeAreaActivationZone = parseFloat(getComputedStyle(moon).getPropertyValue("--extra-altitude-to-clear-ios-15-safari-safe-area-activation-zone")) || 0;
          this.targetAbsoluteOffsetYAbove = minimumMoonOffsetY + extraAltitudeToClearAboveThumb;
          this.targetAbsoluteOffsetYBelow = minimumMoonOffsetY + extraAltitudeToClearBelowThumb + extraAltitudeToClearIos15SafariSafeAreaActivationZone;
        }
        // Place in the bottom-right of the safe area
                this.setPositionWithinSafeArea(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
        // Add event listeners
        
        // Note: This currently never happens. We always render before enabling.
                if ("disabled" !== this.enabledState) {
          this.puck.addEventListener("pointerdown", this.onPuckPointerDown);
          this.puck.addEventListener("mousedown", this.onPuckMouseDown);
          this.puck.addEventListener("mouseup", this.onPuckMouseUp);
        }
        // Start trying to detect a buggy position:fixed implementation.
                null === (_a = window.visualViewport) || void 0 === _a ? void 0 : _a.addEventListener("resize", this.checkForBuggyPositionFixed);
        // If the viewport has already been scaled, we might be able to detect it
        // right away (and avoid mis-positioning the puck before the viewport is
        // next resized).
                this.checkForBuggyPositionFixed();
      }
      renderIcon(icon) {
        return "default" === icon ? this.renderDefaultIcon() : this.renderSkyIcon();
      }
      renderDefaultIcon() {
        const icon = document.createElementNS(SVG_NS, "svg");
        icon.setAttribute("viewBox", "0 0 20 20");
        const dot1 = document.createElementNS(SVG_NS, "circle");
        dot1.setAttribute("cx", "11.5");
        dot1.setAttribute("cy", "10");
        dot1.setAttribute("r", "1.5");
        icon.append(dot1);
        const dot2 = document.createElementNS(SVG_NS, "circle");
        dot2.setAttribute("cx", "18.5");
        dot2.setAttribute("cy", "15.5");
        dot2.setAttribute("r", "1.5");
        icon.append(dot2);
        const path = document.createElementNS(SVG_NS, "path");
        path.setAttribute("d", "M4.9 7.1c-.1-.5-.2-.9-.5-1.3-.2-.4-.5-.8-.8-1.1-.2-.3-.5-.5-.8-.7C2 3.3 1 3 0 3v3c1.2 0 1.9.7 2 1.9v9.2h3V8.2c0-.4 0-.8-.1-1.1zM11.5 3c-2.8 0-5 2.3-5 5.1v3.7c0 2.8 2.2 5.1 5 5.1s5-2.3 5-5.1V8.1c0-2.8-2.2-5.1-5-5.1zm2.3 5.1v3.7c0 .3-.1.6-.2.9-.4.8-1.2 1.4-2.1 1.4s-1.7-.6-2.1-1.4c-.1-.3-.2-.6-.2-.9V8.1c0-.3.1-.6.2-.9.4-.8 1.2-1.4 2.1-1.4s1.7.6 2.1 1.4c.1.3.2.6.2.9z");
        icon.append(path);
        return icon;
      }
      renderSkyIcon() {
        const icon = document.createElementNS(SVG_NS, "svg");
        icon.setAttribute("viewBox", "0 0 20 20");
        const dot1 = document.createElementNS(SVG_NS, "circle");
        dot1.setAttribute("cx", "18.5");
        dot1.setAttribute("cy", "15.5");
        dot1.setAttribute("r", "1.5");
        icon.append(dot1);
        const dot2 = document.createElementNS(SVG_NS, "circle");
        dot2.setAttribute("cx", "1.5");
        dot2.setAttribute("cy", "4.5");
        dot2.setAttribute("r", "1.5");
        icon.append(dot2);
        const path = document.createElementNS(SVG_NS, "path");
        path.setAttribute("d", "M3.4 3.5c.1.3.2.6.2 1s-.1.7-.2 1h4.1V8H3c-.5 0-1 .5-1 1s.5 1 1 1h4.3c-.3.9-.7 1.6-1.5 2.4-1 1-2.3 1.8-3.8 2.3-.6.2-.9.9-.7 1.5.3.5.9.8 1.4.6 2.9-1.1 5-2.9 6-5.2 1 2.3 3.1 4.1 6 5.2.5.2 1.2-.1 1.4-.6.3-.6 0-1.3-.7-1.5a9.7 9.7 0 0 1-3.8-2.3c-.8-.8-1.2-1.5-1.5-2.4h4.4c.5 0 1-.5 1-1s-.4-1-1-1H10V5.5h5.4c.5 0 1-.5 1-1s-.4-1-1-1h-12z");
        icon.append(path);
        return icon;
      }
      setTheme(theme) {
        if (!this.puck) return;
        for (const className of this.puck.classList.values()) if (className.startsWith("theme-")) this.puck.classList.remove(className);
        this.puck.classList.add(getThemeClass(theme));
      }
      setIcon(icon) {
        if (!this.puck) return;
        const logo = this.puck.querySelector(".logo");
        const logoParent = null === logo || void 0 === logo ? void 0 : logo.parentElement;
        if (!logo || !logoParent) return;
        const classes = logo.getAttribute("class") || "";
        logo.remove();
        const newLogo = this.renderIcon(icon);
        newLogo.setAttribute("class", classes);
        logoParent.append(newLogo);
      }
      unmount() {
        var _a;
        this.restoreContent();
        removePuck();
        null === (_a = window.visualViewport) || void 0 === _a ? void 0 : _a.removeEventListener("resize", this.checkForBuggyPositionFixed);
        this.setEnabledState("disabled");
        this.puck = void 0;
      }
      getEnabledState() {
        return this.enabledState;
      }
      setEnabledState(enabledState) {
        const previousState = this.enabledState;
        this.enabledState = enabledState;
        if ("disabled" === enabledState) {
          this.safeAreaProvider.removeEventListener(this.onSafeAreaUpdated);
          if (this.puck) {
            this.stopDraggingPuck();
            this.puck.removeEventListener("pointerdown", this.onPuckPointerDown);
            this.puck.removeEventListener("mousedown", this.onPuckMouseDown);
            this.puck.removeEventListener("mouseup", this.onPuckMouseUp);
          }
          window.removeEventListener("pointerup", this.noOpEventHandler);
          clearClickTimeout(this.clickState);
          this.clickState = {
            kind: "idle"
          };
          return;
        }
        // Avoid redoing any of this setup (that's common between both 'active'
        // and 'inactive').
                if ("disabled" === previousState) {
          this.safeAreaProvider.addEventListener(this.onSafeAreaUpdated);
          if (this.puck) {
            this.puck.addEventListener("pointerdown", this.onPuckPointerDown);
            // The following event handlers are needed to cover the case where iOS
            // Safari sometimes seems to eat the second tap in a double-tap gesture.
            
            // We've tried everything to avoid this (touch-action: none,
            // -webkit-user-select: none, etc. etc.) but it just sometimes does it.
            
            // Furthermore, when debugging, after about ~1hr or so it will somtimes
            // _stop_ eating these events, leading you to believe you've fixed it
            // only for it to start eating them again a few minutes later.
            
            // However, in this case it sill dispatches _mouse_ events so we listen
            // to them and trigger the necessary state transitions when needed.
            
            // Note that the mere _presence_ of the mousedown handler is also needed
            // to prevent double-tap being interpreted as a zoon.
                        this.puck.addEventListener("mousedown", this.onPuckMouseDown);
            this.puck.addEventListener("mouseup", this.onPuckMouseUp);
          }
          // Needed to stop iOS Safari from stealing pointer events after we finish
          // scrolling.
                    window.addEventListener("pointerup", this.noOpEventHandler);
        }
        if (this.puck) this.puck.classList.toggle("lookup-inactive", "inactive" === this.enabledState);
        if ("inactive" === this.enabledState) {
          // Calling this callback allows the owner (ContentHandler) to clear any
          // existing popups.
          this.onLookupDisabled();
          return;
        }
      }
      highlightMatch() {
        var _a;
        // On iOS the selection API is very unreliable so we don't have a good way
        // of indicating to the user what they looked up, unless they enable the
        // (experimental) CSS Highlight API.
        
        // So, in that case, whenever our lookup gets a match we make the moon
        // stick to its extended position.
                if (!isIOS() || (null === CSS || void 0 === CSS ? void 0 : CSS.highlights)) return;
        null === (_a = this.puck) || void 0 === _a ? void 0 : _a.classList.add("hold-position");
      }
      clearHighlight() {
        var _a;
        null === (_a = this.puck) || void 0 === _a ? void 0 : _a.classList.remove("hold-position");
      }
    }
    LookupPuck.id = "tenten-ja-puck";
    LookupPuck.clickHysteresis = 300;
    function removePuck() {
      removeContentContainer(LookupPuck.id);
    }
    // CONCATENATED MODULE: ./src/content/popup/arrow.ts
    const POPUP_ROUNDING = 5;
    function renderArrow({direction, popupContainer, popupPos: {x: popupX, y: popupY}, popupSize, side, target, theme}) {
      const arrow = document.createElement("div");
      arrow.classList.add("arrow");
      arrow.classList.add(getThemeClass(theme));
      popupContainer.append(arrow);
      const arrowWidth = parseFloat(getComputedStyle(arrow).width);
      const arrowHeight = parseFloat(getComputedStyle(arrow).height);
      // XXX Make the CSS rule that causes us to ignore the constrained width when
      // tabs are on top, _not_ apply when positioning the popup left/right of
      // vertical text.
            if ("vertical" === direction) {
        let left = target.x - arrowWidth / 2 - popupX;
        // Make sure the arrow does not overlap with the rounding of the popup
                left = Math.max(left, POPUP_ROUNDING);
        arrow.style.left = `${left}px`;
        if ("before" === side) {
          arrow.style.top = `${popupSize.height}px`;
          arrow.classList.add("-bottom");
        } else {
          arrow.style.top = `${-arrowHeight}px`;
          arrow.classList.add("-top");
        }
      } else {
        let top = target.y - arrowWidth / 2 - popupY;
        top = Math.max(top, POPUP_ROUNDING);
        arrow.style.top = `${top}px`;
        if ("before" === side) {
          arrow.style.left = `${popupSize.width}px`;
          arrow.classList.add("-right");
        } else {
          arrow.style.left = `${-arrowHeight}px`;
          arrow.classList.add("-left");
        }
      }
    }
    // CONCATENATED MODULE: ./src/content/popup/icons.ts
    function renderBook() {
      const bookSvg = svg("svg", {
        viewBox: "0 0 16 16",
        role: "presentation"
      }, svg("path", {
        d: "M14,2H10.09a2.16,2.16,0,0,0-.71.12l-1.11.41a.83.83,0,0,1-.54,0L6.62,2.12A2.16,2.16,0,0,0,5.91,2H2A2,2,0,0,0,0,4v8a2,2,0,0,0,2.05,2H5.91a.76.76,0,0,1,.27.05l1.12.4a1.95,1.95,0,0,0,1.4,0L10.33,14l.84,0a.84.84,0,0,0,.71-.8c0-.67-.76-.69-.76-.69a5.17,5.17,0,0,0-1.25.12L9,13V4l.07,0,1.11-.4a.86.86,0,0,1,.27,0h3.27a.78.78,0,0,1,.78.78V9A.75.75,0,0,0,16,9V4A2,2,0,0,0,14,2ZM7,13l-.76-.33a1.85,1.85,0,0,0-.7-.13H2.28a.78.78,0,0,1-.78-.78V4.28a.78.78,0,0,1,.78-.78H5.54a.75.75,0,0,1,.26,0L6.92,4,7,4Z"
      }));
      const lineGroup = svg("g", {
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round"
      });
      bookSvg.append(lineGroup);
      const lines = [ [ 3, 7.5, 5.5, 7.5 ], [ 3, 5.5, 5.5, 5.5 ], [ 3, 9.5, 5.5, 9.5 ], [ 10.5, 7.5, 13, 7.5 ], [ 10.5, 5.5, 13, 5.5 ], [ 10.5, 9.5, 11.5, 9.5 ] ];
      for (const [x1, y1, x2, y2] of lines) {
        const line = svg("line", {
          x1: String(x1),
          y1: String(y1),
          x2: String(x2),
          y2: String(y2)
        });
        lineGroup.append(line);
      }
      const circle = svg("circle", {
        cx: "14.5",
        cy: "12.5",
        r: "1.5"
      });
      bookSvg.append(circle);
      return bookSvg;
    }
    function renderClipboard() {
      return svg("svg", {
        viewBox: "0 0 24 24",
        role: "presentation",
        fill: "currentColor"
      }, svg("circle", {
        cx: "19.5",
        cy: "21.5",
        r: "1.5"
      }), svg("path", {
        d: "M10.46 5.54c0-.89.7-1.61 1.54-1.61s1.54.72 1.54 1.61v.65c0 .17-.14.32-.31.32h-2.46a.32.32 0 0 1-.31-.32v-.65zM15.97 20H6.9c-.5 0-.9-.46-.9-1V7.48c0-.54.4-.97.9-.97h1.74a2.19 2.19 0 0 0 2.13 1.94h2.46c1.07 0 1.98-.83 2.13-1.94h1.7c.5 0 .94.43.94.97V18a1 1 0 0 0 2 0V7.48c0-1.6-1.42-2.9-2.94-2.9h-1.8a3.37 3.37 0 0 0-4.2-2.44c-1.12.33-2 1.26-2.32 2.43H6.9c-1.53 0-2.9 1.3-2.9 2.9V19c0 1.6 1.47 3 3 3h8.97a1 1 0 1 0 0-2z"
      }));
    }
    function renderCog() {
      return svg("svg", {
        viewBox: "0 0 24 24"
      }, svg("circle", {
        cx: "21.5",
        cy: "21.5",
        r: "1.5",
        fill: "currentColor",
        stroke: "none"
      }), svg("circle", {
        cx: "12",
        cy: "12",
        r: "4"
      }), svg("path", {
        d: "M10.48 3.28a2 2 0 003 0 2.05 2.05 0 013.57 1.48 2.05 2.05 0 002.15 2.15 2.05 2.05 0 011.48 3.57 2 2 0 000 3 2.05 2.05 0 01-1.48 3.57 2.05 2.05 0 00-2.15 2.15 2.05 2.05 0 01-3.57 1.48 2 2 0 00-3 0 2.05 2.05 0 01-3.57-1.48 2.05 2.05 0 00-2.15-2.15 2.05 2.05 0 01-1.48-3.57 2 2 0 000-3 2.05 2.05 0 011.48-3.57 2.05 2.05 0 002.15-2.15 2.05 2.05 0 013.57-1.48z"
      }));
    }
    function renderCross() {
      return svg("svg", {
        viewBox: "0 0 24 24"
      }, svg("path", {
        d: "M6 18L18 6M6 6l12 12"
      }));
    }
    function renderFrequency(frequency) {
      return svg("svg", {
        viewBox: "0 0 8 8",
        role: "presentation"
      }, svg("rect", {
        x: "0",
        y: "5",
        width: "2",
        height: "3",
        rx: "0.5",
        ry: "0.5",
        opacity: !frequency ? "0.5" : void 0
      }), svg("rect", {
        x: "3",
        y: "3",
        width: "2",
        height: "5",
        rx: "0.5",
        ry: "0.5",
        opacity: !frequency || frequency >= 2500 * 2 / 3 ? "0.5" : void 0
      }), svg("rect", {
        x: "6",
        width: "2",
        height: "8",
        rx: "0.5",
        ry: "0.5",
        opacity: !frequency || frequency >= 2500 / 3 ? "0.5" : void 0
      }));
    }
    function renderKanjiIcon() {
      return svg("svg", {
        viewBox: "0 0 16 16",
        role: "presentation"
      }, svg("circle", {
        cx: "14.5",
        cy: "14.5",
        r: "1.5"
      }), svg("path", {
        d: "M11,15H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H13a2,2,0,0,1,2,2v9a1,1,0,0,1-2,0V2H2V13h9a1,1,0,0,1,0,2Z"
      }), svg("path", {
        d: "M8.5,7H5V6h5V7H9.5l-1,1H12V9H8v2a1,1,0,0,1-.24.71A1.15,1.15,0,0,1,7,12H6V11H7V9H3V8H7.5ZM8,4h4V6H11V5H4V6H3V4H7V3H8Z"
      }));
    }
    function renderPencil() {
      return svg("svg", {
        role: "presentation",
        viewBox: "0 0 16 16"
      }, svg("circle", {
        cx: "14.5",
        cy: "1.5",
        r: "1.5"
      }), svg("polyline", {
        points: "13 4.5 4 13.5 1 15 2.5 12 11.5 3",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }));
    }
    function renderPerson() {
      return svg("svg", {
        viewBox: "0 0 16 16",
        role: "presentation"
      }, svg("circle", {
        cx: "14.5",
        cy: "14.5",
        r: "1.5"
      }), svg("path", {
        d: "M8,0A2.87,2.87,0,0,0,5,2.72v2.5A2.92,2.92,0,0,0,8,8a2.92,2.92,0,0,0,3-2.78V2.72A2.87,2.87,0,0,0,8,0Z"
      }), svg("path", {
        d: "M13.91,11.71A5.09,5.09,0,0,0,9.45,9H5.09A5.18,5.18,0,0,0,0,14.25.74.74,0,0,0,.73,15h10.9a.74.74,0,0,0,.73-.75,1.49,1.49,0,0,1,1.09-1.45.75.75,0,0,0,.49-.43A.76.76,0,0,0,13.91,11.71Z"
      }));
    }
    function renderPin() {
      return svg("svg", {
        role: "presentation",
        viewBox: "0 0 24 24"
      }, svg("path", {
        d: "m14 3 .593 1.833c.104.295.157.604.157.917v3.42l.666.236a2.759 2.759 0 0 1 1.834 2.591c0 .05 0 .197-.33.253a3.504 3.504 0 0 0-3.42 3.499c-.029.065-.283.251-.5.251h-1v4.75V16H8.904a2.156 2.156 0 0 1-2.154-2.154v-1.849a2.75 2.75 0 0 1 1.833-2.592l.667-.235V5.75c0-.313.053-.622.157-.916L10 3H8h8-2z",
        fill: "none",
        stroke: "currentColor"
      }), svg("circle", {
        cx: "18",
        cy: "16.5",
        r: "1.5",
        fill: "currentColor",
        stroke: "none"
      }));
    }
    function renderSpinner() {
      return svg("svg", {
        viewBox: "0 0 16 16",
        role: "presentation"
      }, svg("path", {
        d: "M8.54,2.11l.66-.65A.78.78,0,0,0,9.2.38a.76.76,0,0,0-1.08,0L6.19,2.31A.81.81,0,0,0,6,2.55a.8.8,0,0,0-.06.3A.72.72,0,0,0,6,3.14a.74.74,0,0,0,.17.25L8.12,5.32a.73.73,0,0,0,.54.22.76.76,0,0,0,.54-.22.78.78,0,0,0,0-1.08l-.58-.58A4.38,4.38,0,1,1,3.68,8.82a.76.76,0,0,0-1.5.28,5.92,5.92,0,1,0,6.36-7Z"
      }), svg("circle", {
        cx: "2.673",
        cy: "6.71",
        r: "0.965"
      }));
    }
    function renderStar(style) {
      return svg("svg", {
        class: "svgicon",
        viewBox: "0 0 98.6 93.2",
        style: "opacity: 0.5"
      }, svg("path", {
        d: "full" === style ? "M98 34a4 4 0 00-3-1l-30-4L53 2a4 4 0 00-7 0L33 29 4 33a4 4 0 00-3 6l22 20-6 29a4 4 0 004 5 4 4 0 002 0l26-15 26 15a4 4 0 002 0 4 4 0 004-4 4 4 0 000-1l-6-29 22-20a4 4 0 001-5z" : "M77 93a4 4 0 004-4 4 4 0 000-1l-6-29 22-20a4 4 0 00-2-6l-30-4L53 2a4 4 0 00-7 0L33 29 4 33a4 4 0 00-3 6l22 20-6 29a4 4 0 004 5 4 4 0 002 0l26-15 26 15a4 4 0 002 0zm-5-12L51 70a4 4 0 00-4 0L27 81l5-22a4 4 0 00-1-4L13 40l23-3a4 4 0 004-2l9-21 10 21a4 4 0 003 2l23 3-17 15a4 4 0 00-1 4z"
      }));
    }
    // CONCATENATED MODULE: ./src/content/popup/close.ts
    function renderCloseButton(onClosePopup, closeShortcuts) {
      const label = lib.browser.i18n.getMessage("popup_close_label");
      const title = closeShortcuts.length ? `${label} (${closeShortcuts.join(" / ")})` : label;
      const closeButton = html("button", {
        "aria-label": lib.browser.i18n.getMessage("popup_close_label"),
        title,
        class: "close-button",
        type: "button"
      }, renderCross());
      closeButton.onclick = event => {
        event.preventDefault();
        onClosePopup();
      };
      return html("div", {
        class: "close"
      }, closeButton);
    }
    // CONCATENATED MODULE: ./src/content/popup/lang-tag.ts
    // Cache language tag since we fetch it a lot
    let langTag = null;
    function getLangTag() {
      if (null === langTag) langTag = lib.browser.i18n.getMessage("lang_tag");
      return langTag;
    }
    // CONCATENATED MODULE: ./src/content/popup/copy-overlay.ts
    function renderCopyOverlay({copyState, kanjiReferences, onCancelCopy, onCopy, result, series, showKanjiComponents}) {
      const copyOverlay = html("div", {
        class: "copy-overlay"
      });
      // Work out what we would copy so we can generate suitable preview text
            const entryToCopy = result ? getCopyEntryFromResult({
        result,
        series,
        index: "inactive" !== copyState.kind ? copyState.index : 0
      }) : null;
      // Heading
            const wordToCopy = entryToCopy ? getTextToCopy({
        entry: entryToCopy,
        copyType: "word"
      }) : null;
      const heading = wordToCopy ? lib.browser.i18n.getMessage("content_copy_overlay_copy_title_with_word", wordToCopy) : lib.browser.i18n.getMessage("content_copy_overlay_copy_title");
      copyOverlay.append(html("div", {
        role: "heading",
        class: "copy-heading",
        lang: getLangTag()
      }, heading));
      // Options
            const list = copyOverlay.appendChild(html("ul", {
        class: "copy-options"
      }));
      // Entry button
            {
        const entryPreviewText = entryToCopy ? getTextToCopy({
          entry: entryToCopy,
          copyType: "entry",
          kanjiReferences,
          showKanjiComponents
        }) : void 0;
        const button = renderButtonWithPreview({
          label: lib.browser.i18n.getMessage("content_copy_overlay_entry_button"),
          previewText: entryPreviewText
        });
        button.addEventListener("click", (() => null === onCopy || void 0 === onCopy ? void 0 : onCopy("entry")));
        list.append(html("li", {}, button));
      }
      // Tab-separated button
            {
        const tabSeparatedPreviewText = entryToCopy ? getTextToCopy({
          entry: entryToCopy,
          copyType: "tab",
          kanjiReferences,
          showKanjiComponents
        }).replace(/\t/g, " → ") : void 0;
        const button = renderButtonWithPreview({
          label: lib.browser.i18n.getMessage("content_copy_overlay_tab_separated_button"),
          previewText: tabSeparatedPreviewText
        });
        button.addEventListener("click", (() => null === onCopy || void 0 === onCopy ? void 0 : onCopy("tab")));
        list.append(html("li", {}, button));
      }
      // Word button
            {
        const copyWordButton = list.appendChild(html("li")).appendChild(html("button", {
          class: "-icon-label"
        }));
        if (wordToCopy) {
          const icon = renderClipboard();
          icon.classList.add("icon");
          copyWordButton.append(icon);
        }
        const copyWordLabel = html("span");
        if (wordToCopy) {
          copyWordLabel.append(wordToCopy);
          copyWordLabel.lang = "ja";
        } else {
          copyWordLabel.append(lib.browser.i18n.getMessage("kanji" === series ? "content_copy_overlay_kanji_button" : "content_copy_overlay_word_button"));
          copyWordLabel.lang = getLangTag();
        }
        copyWordButton.append(copyWordLabel);
        copyWordButton.addEventListener("click", (() => null === onCopy || void 0 === onCopy ? void 0 : onCopy("word")));
      }
      // Cancel button
            const cancelButton = html("button", {
        class: "cancel-button",
        lang: getLangTag()
      }, svg("svg", {
        class: "icon",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        "stroke-width": "2"
      }, svg("path", {
        d: "M6 18L18 6M6 6l12 12"
      })), lib.browser.i18n.getMessage("content_copy_overlay_cancel_button"));
      cancelButton.addEventListener("click", (() => null === onCancelCopy || void 0 === onCancelCopy ? void 0 : onCancelCopy()));
      copyOverlay.append(cancelButton);
      return copyOverlay;
    }
    function renderButtonWithPreview({label, previewText}) {
      const button = html("button", {
        lang: getLangTag()
      }, label);
      if (previewText) {
        const previewRow = html("div", {
          class: "copy-preview",
          role: "presentation"
        });
        const icon = renderClipboard();
        icon.classList.add("icon");
        previewRow.append(icon);
        previewRow.append(html("span", {
          lang: "ja"
        }, previewText));
        button.append(previewRow);
      }
      return button;
    }
    // CONCATENATED MODULE: ./src/content/popup/selection.ts
    function popupHasSelectedText(container) {
      const selection = window.getSelection();
      return selection && !selection.isCollapsed && container.contains(selection.focusNode);
    }
    // CONCATENATED MODULE: ./src/content/popup/kanji.ts
    function renderKanjiEntry({entry, options}) {
      // Main table
      const table = html("div", {
        class: "kanji-table entry-data"
      });
      // Top part
            const topPart = html("div", {
        class: "top-part"
      });
      table.append(topPart);
      // -- The kanji itself
            const kanjiDiv = html("div", {
        class: "kanji",
        lang: "ja"
      }, entry.c);
      let lastPointerType = "touch";
      kanjiDiv.addEventListener("pointerup", (evt => {
        lastPointerType = evt.pointerType;
      }));
      kanjiDiv.addEventListener("click", (() => {
        var _a;
        if (popupHasSelectedText(table)) return;
        const trigger = "mouse" === lastPointerType ? "mouse" : "touch";
        null === (_a = options.onStartCopy) || void 0 === _a ? void 0 : _a.call(options, 0, trigger);
      }));
      topPart.append(kanjiDiv);
      // -- Top-right part
            const topRightPart = html("div", {}, 
      // -- -- Readings
      renderReadings(entry));
      topPart.append(topRightPart);
      // -- -- Meta
            if (entry.misc.meta) topRightPart.append(renderMeta(entry.misc.meta));
      topRightPart.append(
      // -- -- Meanings
      html("div", {
        class: "meanings",
        lang: entry.m_lang
      }, entry.m.join(", ")), 
      // -- -- Misc info
      renderMiscRow(entry));
      // -- -- Kanji components
            if ("undefined" === typeof options.showKanjiComponents || options.showKanjiComponents) topRightPart.append(renderKanjiComponents(entry));
      // Reference row
            if (options.kanjiReferences && options.kanjiReferences.length) table.append(renderReferences(entry, options));
      return table;
    }
    function renderKanjiComponents(entry) {
      const componentsDiv = html("div", {
        class: "components"
      });
      const componentsTable = html("table", {});
      componentsDiv.append(componentsTable);
      // The radical row is special. It has special highlighting, we show all
      // readings and meanings (not just the first of each), and we also show
      // the base radical, if any.
            const addRadicalRow = () => {
        const {rad} = entry;
        componentsTable.append(html("tr", {
          class: "-radical"
        }, html("td", {
          class: "char",
          lang: "ja"
        }, rad.b || rad.k), html("td", {
          class: "reading",
          lang: "ja"
        }, rad.na.join("、")), html("td", {
          class: "meaning",
          lang: rad.m_lang
        }, rad.m.join(", "))));
        if (rad.base) {
          const baseChar = rad.base.b || rad.base.k;
          const baseReadings = rad.base.na.join("、");
          const fromText = lib.browser.i18n.getMessage("content_kanji_base_radical", [ baseChar, baseReadings ]);
          componentsTable.append(html("tr", {
            class: "-baseradical",
            lang: getLangTag()
          }, html("td", {
            colspan: "3"
          }, fromText)));
        }
      };
      // Typically, the radical will also be one of the components, but in case it's
      // not (the data is frequently hand-edited, after all), make sure we add it
      // first.
            if (!entry.comp.some((comp => comp.c === entry.rad.b || comp.c === entry.rad.k))) addRadicalRow();
      for (const component of entry.comp) {
        if (component.c === entry.rad.b || component.c === entry.rad.k) {
          addRadicalRow();
          continue;
        }
        componentsTable.append(html("tr", {}, html("td", {
          class: "char",
          lang: "ja"
        }, component.c), html("td", {
          class: "reading",
          lang: "ja"
        }, component.na.length ? component.na[0] : "-"), html("td", {
          class: "meaning",
          lang: component.m_lang
        }, component.m.length ? component.m[0] : "-")));
      }
      return componentsDiv;
    }
    function renderReadings(entry) {
      const readingsDiv = html("div", {
        class: "readings",
        lang: "ja"
      });
      if (entry.r.on && entry.r.on.length) readingsDiv.append(entry.r.on.join("、"));
      // Kun readings sometimes have a . in them separating the initial part that
      // represents the kanji, from the okurigana.
      
      // e.g. あた.える
      
      // We want to take the bit after the '.' and wrap it in a span with an
      // appropriate class.
            let hasPrecedingEntries = entry.r.on && 0 !== entry.r.on.length;
      for (const reading of entry.r.kun || []) {
        if (hasPrecedingEntries) readingsDiv.append("、");
        const highlightIndex = reading.indexOf(".");
        if (-1 === highlightIndex) readingsDiv.append(reading); else readingsDiv.append(reading.substr(0, highlightIndex), html("span", {
          class: "okurigana"
        }, reading.substr(highlightIndex + 1)));
        hasPrecedingEntries = true;
      }
      // Name readings
            if (entry.r.na && entry.r.na.length) readingsDiv.append(html("br", {}), html("span", {
        class: "nanorilabel",
        lang: getLangTag()
      }, lib.browser.i18n.getMessage("content_kanji_nanori_label")), ` ${entry.r.na.join("、")}`);
      return readingsDiv;
    }
    function renderMeta(meta) {
      const metaDiv = html("div", {
        class: "meta"
      });
      for (const tag of meta) metaDiv.append(html("span", {
        class: "tag",
        lang: getLangTag()
      }, lib.browser.i18n.getMessage(`content_kanji_meta_${tag.replace(" ", "_")}`)));
      return metaDiv;
    }
    function renderMiscRow(entry) {
      // Misc information row
      const miscInfoDiv = html("div", {
        class: "misc",
        lang: getLangTag()
      });
      // Strokes
            const pencilIcon = renderPencil();
      pencilIcon.classList.add("svgicon");
      pencilIcon.style.opacity = "0.5";
      miscInfoDiv.append(html("div", {
        class: "strokes"
      }, pencilIcon, html("span", {}, 1 === entry.misc.sc ? lib.browser.i18n.getMessage("content_kanji_strokes_label_1") : lib.browser.i18n.getMessage("content_kanji_strokes_label", [ String(entry.misc.sc) ]))));
      // Frequency
            const frequencyIcon = renderFrequency(entry.misc.freq);
      frequencyIcon.classList.add("svgicon");
      const frequencyDiv = html("div", {
        class: "frequency"
      }, frequencyIcon);
      const frequency = html("span", {});
      if (entry.misc.freq) frequency.append(lib.browser.i18n.getMessage("content_kanji_frequency_label") + ` ${entry.misc.freq.toLocaleString()}`, html("span", {
        class: "denom"
      }, ` / ${Number(2500).toLocaleString()}`)); else frequency.textContent = "-";
      frequencyDiv.append(frequency);
      miscInfoDiv.append(frequencyDiv);
      // Grade
            const personIcon = renderPerson();
      personIcon.classList.add("svgicon");
      personIcon.style.opacity = "0.5";
      const gradeDiv = html("div", {
        class: "grade"
      }, personIcon);
      const grade = html("span", {});
      switch (entry.misc.gr || 0) {
       case 8:
        grade.append(lib.browser.i18n.getMessage("content_kanji_grade_general_use"));
        break;

       case 9:
        grade.append(lib.browser.i18n.getMessage("content_kanji_grade_name_use"));
        break;

       default:
        if ("undefined" === typeof entry.misc.gr) grade.append("-"); else grade.append(lib.browser.i18n.getMessage("content_kanji_grade_label", [ String(entry.misc.gr) ]));
        break;
      }
      gradeDiv.append(grade);
      miscInfoDiv.append(gradeDiv);
      return miscInfoDiv;
    }
    function renderReferences(entry, options) {
      const referenceTable = html("div", {
        class: "references",
        lang: getLangTag()
      });
      const referenceNames = getSelectedReferenceLabels(options.kanjiReferences);
      let numReferences = 0;
      for (const ref of referenceNames) {
        // Don't show the Nelson radical if it's the same as the regular radical
        // (in which case it will be empty) and we're showing the regular radical.
        if ("nelson_r" === ref.ref && !entry.rad.nelson && options.kanjiReferences.includes("radical")) continue;
        const referenceCell = html("div", {
          class: "ref"
        });
        referenceTable.append(referenceCell);
        const value = getReferenceValue(entry, ref.ref) || "-";
        referenceCell.append(html("span", {
          class: "name"
        }, ref.short || ref.full), html("span", {
          class: "value",
          lang: "radical" === ref.ref || "nelson_r" === ref.ref ? "ja" : void 0
        }, value));
        numReferences++;
      }
      // The layout we want is something in-between what CSS grid and CSS multicol
      // can do. See:
      
      //   https://twitter.com/brianskold/status/1186198347184398336
      
      // In the stylesheet we make let the table flow horizontally, but then here
      // where we know the number of rows, we update it to produce the desired
      // vertical flow.
            if (numReferences > 1) {
        referenceTable.style.gridAutoFlow = "column";
        referenceTable.style.gridTemplateRows = `repeat(${Math.ceil(numReferences / 2)}, minmax(min-content, max-content))`;
      }
      // Now we go through and toggle the styles to get the desired alternating
      // effect.
      
      // We can't easily use nth-child voodoo here because we need to
      // handle unbalanced columns etc. We also can't easily do this in the loop
      // where we generate the cells because we don't know how many references we
      // will generate at that point.
            for (const [index, cell] of [ ...referenceTable.children ].entries()) {
        const row = index % Math.ceil(numReferences / 2);
        if (row % 2 === 0) cell.classList.add("-highlight");
      }
      return referenceTable;
    }
    // CONCATENATED MODULE: ./src/content/popup/metadata.ts
    function renderMetadata({fxData, isCombinedResult, matchLen, meta}) {
      switch (meta.type) {
       case "era":
        {
          const eraInfo = getEraInfo(meta.era);
          if (eraInfo) return renderEraInfo(meta, eraInfo);
        }
        break;

       case "measure":
        return renderMeasureInfo(meta);

       case "currency":
        return fxData ? renderCurrencyInfo(meta, fxData) : null;

       case "number":
        return meta.matchLen > matchLen ? renderNumberInfo(meta, {
          isCombinedResult
        }) : null;

       case "shogi":
        return renderShogiInfo(meta);
      }
      return null;
    }
    function renderEraInfo(meta, eraInfo) {
      const seireki = 0 === meta.year ? eraInfo.start : meta.year - 1 + eraInfo.start;
      return html("div", {
        class: "meta era",
        lang: "ja"
      }, html("span", {
        class: "era-name"
      }, html("ruby", {}, meta.era, html("rp", {}, "("), html("rt", {}, eraInfo.reading), html("rp", {}, ")"), 0 === meta.year ? "元年" : `${meta.year}年`)), html("span", {
        class: "equals"
      }, "="), html("span", {
        class: "seireki"
      }, `${seireki}年`));
    }
    function renderMeasureInfo(meta) {
      const converted = convertMeasure(meta);
      const metaDiv = html("div", {
        class: "meta measure",
        lang: "ja"
      }, html("span", {
        class: "main"
      }, html("span", {
        class: "value"
      }, meta.value.toLocaleString(), renderUnit(meta.unit)), html("span", {
        class: "equals"
      }, "="), html("span", {
        class: "value"
      }, renderValue(converted.value), renderUnit(converted.unit))));
      if (converted.alt) for (const {type, label, unit, value} of converted.alt) {
        const altRow = html("div", {
          class: "alt"
        });
        const altLabel = html("span", {});
        if (label) altLabel.append(label);
        const expl = lib.browser.i18n.getMessage(`measure_expl_${type}`);
        if (expl) {
          const altExplLabel = html("span", {
            lang: getLangTag()
          }, expl);
          altLabel.append(altExplLabel);
        }
        altRow.append(altLabel, html("span", {
          class: "equals"
        }, "="), html("span", {
          class: "measure"
        }, renderValue(value), renderUnit(unit, {
          showRuby: false
        })));
        metaDiv.append(altRow);
      }
      return metaDiv;
    }
    function renderValue(value) {
      // Round to two decimal places, then to five significant figures
      return parseFloat(round(value, 2).toPrecision(5)).toLocaleString();
    }
    function round(value, places) {
      const base = Math.pow(10, places);
      return Math.round(value * base) / base;
    }
    function renderUnit(unit, {showRuby = true} = {}) {
      const unitSpan = html("span", {
        class: "unit"
      });
      if ("m2" === unit) unitSpan.append("m", html("sup", {}, "2")); else if (showRuby) unitSpan.append(html("ruby", {}, unit, html("rp", {}, "("), html("rt", {}, "じょう"), html("rp", {}, ")"))); else unitSpan.append(unit);
      return unitSpan;
    }
    function renderCurrencyInfo(meta, fxData) {
      const metaDiv = html("div", {
        class: "meta currency",
        lang: "ja"
      }, html("div", {
        class: "main"
      }, 
      // LHS
      html("div", {
        class: "equation-part"
      }, html("span", {
        class: "curr"
      }, "JPY"), html("span", {
        class: "src"
      }, new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
      }).format(meta.value)), html("span", {
        class: "equals"
      }, "≈")), 
      // RHS
      html("div", {
        class: "equation-part"
      }, html("span", {
        class: "curr"
      }, fxData.currency), html("span", {
        class: "value"
      }, renderCurrencyValue({
        currency: fxData.currency,
        value: meta.value * fxData.rate
      })))));
      const timestampRow = html("div", {
        class: "timestamp"
      });
      const timestampAsDate = new Date(fxData.timestamp);
      const timestampAsString = timestampAsDate.toLocaleString(void 0, {
        dateStyle: "medium",
        timeStyle: "short"
      });
      const expl = lib.browser.i18n.getMessage("currency_data_updated_label", timestampAsString);
      timestampRow.append(expl);
      metaDiv.append(timestampRow);
      return metaDiv;
    }
    function renderCurrencyValue({currency, value}) {
      // BTC is a bit special because Intl.NumberFormat doesn't support it and if we
      // let it do its fallback rounding to two decimal places we'll lose most of
      // the information.
      // In fact, the convention for BTC appears to be to always use 8 decimal
      // places.
      if ("BTC" === currency) return `₿${value.toFixed(8)}`;
      let formattedValue;
      try {
        formattedValue = new Intl.NumberFormat(void 0, {
          style: "currency",
          currency,
          currencyDisplay: "narrowSymbol"
        }).format(value);
      } catch {
        // Some older browsers may not support all the options above so fall back to
        // general number formatting in that case.
        formattedValue = (new Intl.NumberFormat).format(value);
      }
      // Drop redundant currency code.
      
      // If the browser doesn't have a specific symbol (e.g. $) for the currency,
      // it generally just prepends the currency code (e.g. USD) but that's
      // redundant with our valueCurrencyLabel so we try to detect and drop it in
      // that case.
            formattedValue = formattedValue.replace(new RegExp(`^\\s*${currency}\\s*`), "");
      return formattedValue;
    }
    function renderNumberInfo(meta, {isCombinedResult}) {
      const metaDiv = html("div", {
        class: "meta number"
      });
      if (isCombinedResult) metaDiv.append(html("span", {
        class: "src",
        lang: "ja"
      }, meta.src), html("span", {
        class: "equals"
      }, "="));
      metaDiv.append(html("span", {
        class: "value"
      }, meta.value.toLocaleString()));
      return metaDiv;
    }
    function renderShogiInfo(meta) {
      const metaDiv = html("div", {
        class: "meta shogi"
      });
      metaDiv.append(html("span", {
        class: "label",
        lang: getLangTag()
      }, lib.browser.i18n.getMessage("shogi_label")), html("span", {
        class: "src",
        lang: "ja"
      }, serializeShogi(meta)), html("span", {
        class: "equals"
      }, "="));
      // For Chinese we use the Japanese expansion anyway
            let lang = getLangTag();
      if ("zh-Hans" === lang) lang = "ja";
      // Side
            const side = meta.side ? lib.browser.i18n.getMessage(`shogi_side_${meta.side}`) : void 0;
      // Piece
            const piece = lib.browser.i18n.getMessage(`shogi_piece_${meta.piece}`);
      // Destination
            let dest;
      if (meta.dest) {
        dest = "ja" === lang ? serializeShogiDest(meta.dest) : meta.dest.slice(0, 2).map(String).join("");
        if (3 === meta.dest.length) dest += lib.browser.i18n.getMessage("shogi_dest_same_suffix");
      } else dest = lib.browser.i18n.getMessage("shogi_dest_same");
      // Movement
            const movement = meta.movement ? lib.browser.i18n.getMessage(`shogi_movement_${meta.movement}`) : void 0;
      // Get the combined string
            let move;
      if (side && movement) move = lib.browser.i18n.getMessage("shogi_move_side_piece_dest_movement", [ side, piece, dest, movement ]); else if (side) move = lib.browser.i18n.getMessage("shogi_move_side_piece_dest", [ side, piece, dest ]); else if (movement) move = lib.browser.i18n.getMessage("shogi_move_piece_dest_movement", [ piece, dest, movement ]); else move = lib.browser.i18n.getMessage("shogi_move_piece_dest", [ piece, dest ]);
      // Add promotion annotation
            if ("boolean" === typeof meta.promotion) move += lib.browser.i18n.getMessage(meta.promotion ? "shogi_promoted_suffix" : "shogi_not_promoted_suffix");
      metaDiv.append(html("span", {
        class: "value",
        lang
      }, move));
      return metaDiv;
    }
    // CONCATENATED MODULE: ./src/utils/age.ts
    const regularAgeRegex = /(\d{4})\.(\d{1,2})(?:\.(\d{1,2}))?-[;)]/;
    const backwardsAgeRegex = /(\d{1,2})\.(\d{1,2})\.(\d{4})?-[;)]/;
    function getDob(text) {
      let year;
      let month;
      let approx;
      let day;
      let matches = regularAgeRegex.exec(text);
      if (matches) {
        year = parseInt(matches[1], 10);
        month = parseInt(matches[2], 10) - 1;
        approx = "undefined" === typeof matches[3];
        day = !approx ? parseInt(matches[3], 10) : 1;
      } else {
        matches = backwardsAgeRegex.exec(text);
        if (matches) {
          year = parseInt(matches[3], 10);
          month = parseInt(matches[1], 10) - 1;
          day = parseInt(matches[2], 10);
          approx = false;
        } else return null;
      }
      // Sanity check
            if (year > 2100 || year < 100 || month < 0 || month > 11 || day < 1 || day > 31) return null;
      return {
        // This will create a date in the current user's timezone but that's fine
        // since we're going to compare this to the user's local time anyway.
        date: new Date(year, month, day),
        approx
      };
    }
    // CONCATENATED MODULE: ./src/content/popup/selected-index.ts
    function getSelectedIndex(options, numEntries) {
      return "inactive" !== options.copyState.kind && numEntries ? options.copyState.index % numEntries : -1;
    }
    // CONCATENATED MODULE: ./src/content/popup/names.ts
    function renderNamesEntries({entries, matchLen, more, options}) {
      const namesTable = html("div", {
        class: "name-table entry-data"
      });
      if (options.meta) {
        const metadata = renderMetadata({
          fxData: options.fxData,
          isCombinedResult: true,
          matchLen,
          meta: options.meta
        });
        if (metadata) namesTable.append(metadata);
      }
      if (entries.length > 4) namesTable.classList.add("-multicol");
      let lastPointerType = "touch";
      const selectedIndex = getSelectedIndex(options, entries.length);
      for (const [index, entry] of entries.entries()) {
        const entryDiv = renderName(entry);
        if (index === selectedIndex) entryDiv.classList.add("active" === options.copyState.kind ? "-selected" : "-flash");
        entryDiv.addEventListener("pointerup", (evt => {
          lastPointerType = evt.pointerType;
        }));
        entryDiv.addEventListener("click", (() => {
          var _a;
          if (popupHasSelectedText(namesTable)) return;
          const trigger = "mouse" === lastPointerType ? "mouse" : "touch";
          null === (_a = options.onStartCopy) || void 0 === _a ? void 0 : _a.call(options, index, trigger);
        }));
        namesTable.append(entryDiv);
      }
      if (more) namesTable.append(html("span", {
        class: "more"
      }, "…"));
      return namesTable;
    }
    function renderName(entry) {
      const entryDiv = html("div", {
        class: "entry"
      });
      const entryTitleDiv = html("div", {
        class: "w-title",
        lang: "ja"
      });
      entryDiv.append(entryTitleDiv);
      if (entry.k) {
        const MAX_KANJI = 15;
        const trimKanji = entry.k.length > MAX_KANJI;
        const kanjiToDisplay = trimKanji ? entry.k.slice(0, MAX_KANJI) : entry.k;
        let kanji = kanjiToDisplay.join("、");
        if (trimKanji) kanji += "…";
        entryTitleDiv.append(html("span", {
          class: "w-kanji"
        }, kanji));
      }
      const kana = entry.r.join("、");
      entryTitleDiv.append(html("span", {
        class: "w-kana"
      }, kana));
      const definitionBlock = html("div", {
        class: "w-def"
      });
      for (const tr of entry.tr) definitionBlock.append(renderNameTranslation(tr));
      entryDiv.append(definitionBlock);
      return entryDiv;
    }
    function renderNameTranslation(tr) {
      var _a;
      const definitionSpan = html("div", {
        // ENAMDICT only has English glosses
        lang: "en"
      });
      // Only add age annotations if the name is for a person
            const annotateDetailFn = (null === (_a = tr.type) || void 0 === _a ? void 0 : _a.includes("person")) ? annotateAge : det => det;
      definitionSpan.append(tr.det.map(annotateDetailFn).join(", "));
      for (const tag of tr.type || []) {
        const tagText = lib.browser.i18n.getMessage(`content_names_tag_${tag}`);
        if (!tagText) continue;
        definitionSpan.append(html("span", {
          class: `tag tag-${tag}`,
          lang: getLangTag()
        }, tagText));
      }
      return definitionSpan;
    }
    function annotateAge(text) {
      const dob = getDob(text);
      if (!dob) return text;
      // Calculate age
            const {date, approx} = dob;
      const today = new Date;
      let age = today.getFullYear() - date.getFullYear();
      const month = today.getMonth() - date.getMonth();
      if (month < 0 || 0 === month && today.getDate() < date.getDate()) age--;
      // Sanity check
            if (age < 1 || age > 150) return text;
      const ageString = approx ? lib.browser.i18n.getMessage("content_names_age_approx", [ String(age) ]) : lib.browser.i18n.getMessage("content_names_age", [ String(age) ]);
      return `${text} (${ageString})`;
    }
    // CONCATENATED MODULE: ./src/content/popup/onboarding.ts
    function renderMouseOnboarding(options = {}) {
      const container = html("div", {
        class: "onboarding"
      });
      const okButton = html("button", {
        class: "primary"
      }, lib.browser.i18n.getMessage("content_mouse_onboarding_ok_button"));
      if (options.onDismiss) okButton.addEventListener("click", (evt => {
        evt.preventDefault();
        container.classList.add("dismissed");
        options.onDismiss();
      }));
      const disableButton = html("button", {}, lib.browser.i18n.getMessage("content_mouse_onboarding_disable_button"));
      if (options.onDismiss) disableButton.addEventListener("click", (evt => {
        evt.preventDefault();
        container.classList.add("dismissed");
        options.onDismiss({
          disable: true
        });
      }));
      const detailsLink = html("a", {
        // As with the note in options.ts, Safari does not appear to be able to
        // open extension pages so we use a publicly hosted Web page instead.
        href: isSafari() ? "https://10ten.study/reader/docs/mouse-onboarding.html" : lib.browser.runtime.getURL("docs/introducing-the-mouse.html"),
        target: "_blank"
      }, lib.browser.i18n.getMessage("content_mouse_onboarding_details_link"));
      detailsLink.addEventListener("click", (event => {
        var _a;
        // Thunderbird doesn't open links that point to extension pages and for
        // regular https:// links it opens them in the user's default Web browser
        // instead of a new Thunderbird tab.
        
        // What's more, we can't use `browser.tabs.create` from a content script it
        // seems, so instead we override the click event and send a message to the
        // background page.
                if (isThunderbird()) {
          void lib.browser.runtime.sendMessage({
            type: "showMouseOnboarding"
          });
          event.preventDefault();
        }
        container.classList.add("dismissed");
        null === (_a = options.onDismiss) || void 0 === _a ? void 0 : _a.call(options);
      }));
      container.append(html("div", {
        class: "image-and-text-container"
      }, html("div", {
        class: "text"
      }, html("div", {
        class: "explanation"
      }, html("strong", {}, lib.browser.i18n.getMessage("content_mouse_onboarding_new")), html("span", {}, " "), html("span", {}, lib.browser.i18n.getMessage("content_mouse_onboarding_explanation")), html("span", {}, " "), detailsLink), html("div", {
        class: "button-group"
      }, okButton, disableButton)), html("div", {
        class: "icon"
      }, svg("svg", {
        viewBox: "0 20 200 130"
      }, svg("defs", {}, svg("symbol", {
        id: "cursor",
        viewBox: "0 0 29.3 33.3",
        width: "29.3",
        height: "33.3"
      }, svg("path", {
        fill: "white",
        d: "M2.3 2.94l6.9 26.2 4.6-5.8 7.1 7.9 5.4-3.7-5.9-9.1 6.8-3.5z"
      }), svg("path", {
        fill: "currentColor",
        d: "M.9.14c-.7.3-1 1-.8 1.8l7.7 28.6c.2.8 1 1.3 1.8 1.1.3-.1.6-.3.9-.6l3.9-5.7 6 7.4c.5.6 1.5.7 2.1.2l5.4-4.4c.6-.5.7-1.5.2-2.1l-6-7.4 6.3-2.7c.8-.3 1.1-1.2.8-2-.1-.3-.4-.6-.7-.8L2.2.14c-.4-.2-.9-.2-1.3 0zm2.9 4.3l20.5 10.4-5.2 2.2c-.8.3-1.1 1.2-.8 2 .1.1.1.3.2.4l6.3 7.8-3.1 2.5-6.3-7.8c-.5-.6-1.5-.7-2.1-.2l-.3.3-3.2 4.6c0-.1-6-22.2-6-22.2z"
      })), svg("symbol", {
        id: "hand",
        viewBox: "0 0 100 100",
        width: "30",
        height: "30"
      }, svg("g", {
        transform: "translate(100) scale(-1,1)"
      }, svg("path", {
        fill: "white",
        "fill-rule": "evenodd",
        stroke: "currentColor",
        "stroke-width": "6",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-miterlimit": "10",
        d: "M43.065 92c-10.482 0-19.339-4.042-24.301-11.088C15.101 75.707 13 68.753 13 61.831V56c0-5.214 3.875-8.664 7.522-9.262a7.03 7.03 0 0 1 1.156-.088c.876 0 1.744.13 2.582.256.659.099 1.338.2 1.828.2.063 0 .115-.002.158-.004.101-.14.233-.347.33-.499.136-.214.274-.429.416-.633 1.708-2.445 5.168-3.723 7.704-3.723l.106.001c1.162.016 2.243.368 3.197.679.463.151 1.075.351 1.412.395.199-.16.521-.509.745-.752.214-.233.426-.461.64-.674 1.974-1.966 5.037-2.667 7.246-2.667.462 0 .918.029 1.354.087l.229.034c.881.14 1.679.396 2.375.762V15.923c0-5.026 3.642-7.739 7.068-7.739 3.444 0 6.932 2.609 6.932 7.597V51.5c0 .3.011.715.029 1.206l.054 1.164a36.363 36.363 0 0 1 .903-.982c3.463-3.597 7.166-5.606 11.329-6.151a8.917 8.917 0 0 1 1.159-.077c3.549 0 6.525 2.199 7.408 5.473.853 3.167-.554 6.351-3.583 8.11-4.848 2.819-9.382 8.29-11.763 12.512C65.664 86.062 56.877 92 43.065 92z"
      })))), svg("path", {
        d: "M6 50h10l15-15l15 15h148a5 5 90 0 1 5 5v89a5 5 90 0 1-5 5h-188a5 5 90 0 1-5-5v-89a5 5 90 0 1 5-5Z",
        fill: "var(--bg-color)",
        stroke: "var(--border-color)",
        "stroke-width": "0.5"
      }), svg("rect", {
        x: "5",
        y: "85",
        rx: "5",
        width: "190",
        height: "30",
        fill: "var(--hover-bg)"
      }), svg("use", {
        href: "#cursor",
        x: "25",
        y: "10",
        width: "16",
        color: "#888",
        opacity: "0.2"
      }), svg("use", {
        href: "#cursor",
        x: "25",
        y: "32",
        width: "19",
        color: "#888",
        opacity: "0.25"
      }), svg("use", {
        href: "#cursor",
        x: "30",
        y: "60",
        width: "23",
        color: "#888",
        opacity: "0.32"
      }), svg("use", {
        href: "#hand",
        x: "34",
        y: "95",
        width: "35",
        color: "#888"
      })))));
      return container;
    }
    // CONCATENATED MODULE: ./src/content/popup/status.ts
    function renderCopyDetails({copyNextKey, copyState, series}) {
      if ("inactive" === copyState.kind) return null;
      // In interactive mode, we only use the status bar to show the finished and
      // error states.
            if ("keyboard" !== copyState.mode && "active" === copyState.kind) return null;
      const statusDiv = html("div", {
        class: "status-bar -stack",
        lang: getLangTag()
      });
      if ("keyboard" === copyState.mode) {
        const keysDiv = html("div", {
          class: "keys"
        }, lib.browser.i18n.getMessage("content_copy_keys_label") + " ");
        statusDiv.append(keysDiv);
        const copyKeys = CopyKeys.map((({key, type, popupString}) => {
          if ("word" === type && "kanji" === series) return {
            key,
            l10nKey: CopyKanjiKeyStrings.popupString
          }; else return {
            key,
            l10nKey: popupString
          };
        }));
        copyKeys.push({
          key: copyNextKey,
          l10nKey: CopyNextKeyStrings.popupString
        });
        for (const copyKey of copyKeys) {
          keysDiv.append(html("kbd", {}, copyKey.key), " = " + lib.browser.i18n.getMessage(copyKey.l10nKey));
          if (copyKey.key !== copyNextKey) keysDiv.append(", ");
        }
      }
      if ("finished" === copyState.kind) statusDiv.append(renderCopyStatus(getCopiedString(copyState.type))); else if ("error" === copyState.kind) statusDiv.append(renderCopyStatus(lib.browser.i18n.getMessage("content_copy_error")));
      return statusDiv;
    }
    function getCopiedString(target) {
      switch (target) {
       case "entry":
        return lib.browser.i18n.getMessage("content_copied_entry");

       case "tab":
        return lib.browser.i18n.getMessage("content_copied_fields");

       case "word":
        return lib.browser.i18n.getMessage("content_copied_word");
      }
    }
    function renderCopyStatus(message) {
      return html("div", {
        class: "status"
      }, message);
    }
    function renderUpdatingStatus() {
      const statusDiv = html("div", {
        class: "status-bar -subdued",
        lang: getLangTag()
      });
      const statusText = html("div", {
        class: "status"
      });
      const spinner = renderSpinner();
      spinner.classList.add("spinner");
      statusText.append(spinner, lib.browser.i18n.getMessage("content_database_updating"));
      statusDiv.append(statusText);
      return statusDiv;
    }
    function getMouseCapabilityMql() {
      return window.matchMedia ? window.matchMedia("(hover: hover) and (pointer: fine)") : void 0;
    }
    // CONCATENATED MODULE: ./src/content/popup/tabs.ts
    function renderTabBar({closeShortcuts, displayMode, onClosePopup, onShowSettings, onSwitchDictionary, onTogglePin, pinShortcuts, queryResult, selectedTab}) {
      var _a;
      const tabBar = html("div", {
        class: "tab-bar",
        lang: getLangTag()
      });
      tabBar.addEventListener("pointerup", (() => {}));
      const list = html("ul", {
        class: "tabs"
      });
      const sections = [ {
        series: "words",
        renderIcon: renderBook
      }, {
        series: "kanji",
        renderIcon: renderKanjiIcon
      }, {
        series: "names",
        renderIcon: renderPerson
      } ];
      for (const {series, renderIcon} of sections) {
        const li = html("li", {
          class: "tab",
          role: "presentation"
        });
        if (series === selectedTab) li.setAttribute("aria-selected", "true"); else if (!queryResult || !queryResult[series]) li.classList.add("disabled");
        // We use a button because if it's a link there will be a little tooltip
        // show in the corner of the browser when the user hovers over the tab.
                const button = html("button", {});
        if (series !== selectedTab && onSwitchDictionary) button.onclick = event => {
          event.preventDefault();
          onSwitchDictionary(series);
        };
        li.append(button);
        const icon = renderIcon();
        icon.classList.add("icon");
        button.append(icon);
        button.append(html("span", {}, lib.browser.i18n.getMessage(`tabs_${series}_label`)));
        list.append(li);
      }
      tabBar.append(list);
      // We don't want to show the pin on devices that don't have a mouse since it's
      // generally not useful there (and just takes up room).
      
      // If, however, the user somehow managed to get the popup into a pinned state,
      // we should show the icon just so they don't get confused (and can get out of
      // that state).
            const showPin = onTogglePin && (false !== (null === (_a = getMouseCapabilityMql()) || void 0 === _a ? void 0 : _a.matches) || "pinned" === displayMode);
      if (showPin) tabBar.append(renderPinButton(onTogglePin, pinShortcuts || []));
      if (onShowSettings) tabBar.append(renderSettingsButton(onShowSettings));
      if (onClosePopup) tabBar.append(renderCloseButton(onClosePopup, closeShortcuts || []));
      return tabBar;
    }
    function renderPinButton(onTogglePin, pinShortcuts) {
      const label = lib.browser.i18n.getMessage("popup_pin_label");
      const title = pinShortcuts.length ? `${label} (${pinShortcuts.join(" / ")})` : label;
      const pinButton = html("button", {
        "aria-label": label,
        title,
        class: "pin-button",
        type: "button"
      }, renderPin());
      pinButton.onclick = onTogglePin;
      return html("div", {
        class: "pin"
      }, pinButton);
    }
    function renderSettingsButton(onShowSettings) {
      const label = lib.browser.i18n.getMessage("popup_settings_label");
      const settingsButton = html("button", {
        "aria-label": label,
        title: label,
        class: "settings-button",
        type: "button"
      }, renderCog());
      settingsButton.onclick = onShowSettings;
      return html("div", {
        class: "settings"
      }, settingsButton);
    }
    // EXTERNAL MODULE: ./node_modules/@birchill/json-equalish/dist/index.js
        __webpack_require__(666);
    // CONCATENATED MODULE: ./node_modules/@birchill/jpdict-idb/node_modules/superstruct/lib/index.es.js
    /**
 * A `StructFailure` represents a single specific failure in validation.
 */
    /**
 * `StructError` objects are thrown (or returned) when validation fails.
 *
 * Validation logic is design to exit early for maximum performance. The error
 * represents the first error encountered during validation. For more detail,
 * the `error.failures` property is a generator function that can be run to
 * continue validation and receive all the failures in the data.
 */
    class index_es_StructError extends TypeError {
      constructor(failure, failures) {
        let cached;
        const {message, ...rest} = failure;
        const {path} = failure;
        const msg = 0 === path.length ? message : "At path: " + path.join(".") + " -- " + message;
        super(msg);
        this.value = void 0;
        this.key = void 0;
        this.type = void 0;
        this.refinement = void 0;
        this.path = void 0;
        this.branch = void 0;
        this.failures = void 0;
        Object.assign(this, rest);
        this.name = this.constructor.name;
        this.failures = () => {
          var _cached;
          return null != (_cached = cached) ? _cached : cached = [ failure, ...failures() ];
        };
      }
    }
    /**
 * Check if a value is an iterator.
 */    function index_es_isIterable(x) {
      return index_es_isObject(x) && "function" === typeof x[Symbol.iterator];
    }
    /**
 * Check if a value is a plain object.
 */    function index_es_isObject(x) {
      return "object" === typeof x && null != x;
    }
    /**
 * Check if a value is a plain object.
 */    
    /**
 * Return a value as a printable string.
 */
    function index_es_print(value) {
      return "string" === typeof value ? JSON.stringify(value) : "" + value;
    }
    /**
 * Shifts (removes and returns) the first value from the `input` iterator.
 * Like `Array.prototype.shift()` but for an `Iterator`.
 */    function index_es_shiftIterator(input) {
      const {done, value} = input.next();
      return done ? void 0 : value;
    }
    /**
 * Convert a single validation result to a failure.
 */    function index_es_toFailure(result, context, struct, value) {
      if (true === result) return; else if (false === result) result = {}; else if ("string" === typeof result) result = {
        message: result
      };
      const {path, branch} = context;
      const {type} = struct;
      const {refinement, message = "Expected a value of type `" + type + "`" + (refinement ? " with refinement `" + refinement + "`" : "") + ", but received: `" + index_es_print(value) + "`"} = result;
      return {
        value,
        type,
        refinement,
        key: path[path.length - 1],
        path,
        branch,
        ...result,
        message
      };
    }
    /**
 * Convert a validation result to an iterable of failures.
 */    function* index_es_toFailures(result, context, struct, value) {
      if (!index_es_isIterable(result)) result = [ result ];
      for (const r of result) {
        const failure = index_es_toFailure(r, context, struct, value);
        if (failure) yield failure;
      }
    }
    /**
 * Check a value against a struct, traversing deeply into nested values, and
 * returning an iterator of failures or success.
 */    function* index_es_run(value, struct, options) {
      if (void 0 === options) options = {};
      const {path = [], branch = [ value ], coerce = false, mask = false} = options;
      const ctx = {
        path,
        branch
      };
      if (coerce) {
        value = struct.coercer(value, ctx);
        if (mask && "type" !== struct.type && index_es_isObject(struct.schema) && index_es_isObject(value) && !Array.isArray(value)) for (const key in value) if (void 0 === struct.schema[key]) delete value[key];
      }
      let status = "valid";
      for (const failure of struct.validator(value, ctx)) {
        status = "not_valid";
        yield [ failure, void 0 ];
      }
      for (let [k, v, s] of struct.entries(value, ctx)) {
        const ts = index_es_run(v, s, {
          path: void 0 === k ? path : [ ...path, k ],
          branch: void 0 === k ? branch : [ ...branch, v ],
          coerce,
          mask
        });
        for (const t of ts) if (t[0]) {
          status = null != t[0].refinement ? "not_refined" : "not_valid";
          yield [ t[0], void 0 ];
        } else if (coerce) {
          v = t[1];
          if (void 0 === k) value = v; else if (value instanceof Map) value.set(k, v); else if (value instanceof Set) value.add(v); else if (index_es_isObject(value)) value[k] = v;
        }
      }
      if ("not_valid" !== status) for (const failure of struct.refiner(value, ctx)) {
        status = "not_refined";
        yield [ failure, void 0 ];
      }
      if ("valid" === status) yield [ void 0, value ];
    }
    /**
 * `Struct` objects encapsulate the validation logic for a specific type of
 * values. Once constructed, you use the `assert`, `is` or `validate` helpers to
 * validate unknown input data against the struct.
 */    class index_es_Struct {
      constructor(props) {
        this.TYPE = void 0;
        this.type = void 0;
        this.schema = void 0;
        this.coercer = void 0;
        this.validator = void 0;
        this.refiner = void 0;
        this.entries = void 0;
        const {type, schema, validator, refiner, coercer = value => value, entries = function*() {}} = props;
        this.type = type;
        this.schema = schema;
        this.entries = entries;
        this.coercer = coercer;
        if (validator) this.validator = (value, context) => {
          const result = validator(value, context);
          return index_es_toFailures(result, context, this, value);
        }; else this.validator = () => [];
        if (refiner) this.refiner = (value, context) => {
          const result = refiner(value, context);
          return index_es_toFailures(result, context, this, value);
        }; else this.refiner = () => [];
      }
      /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */      assert(value) {
        return index_es_assert(value, this);
      }
      /**
   * Create a value with the struct's coercion logic, then validate it.
   */      create(value) {
        return index_es_create(value, this);
      }
      /**
   * Check if a value passes the struct's validation.
   */      is(value) {
        return index_es_is(value, this);
      }
      /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */      mask(value) {
        return index_es_mask(value, this);
      }
      /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */      validate(value, options) {
        if (void 0 === options) options = {};
        return index_es_validate(value, this, options);
      }
    }
    /**
 * Assert that a value passes a struct, throwing if it doesn't.
 */    function index_es_assert(value, struct) {
      const result = index_es_validate(value, struct);
      if (result[0]) throw result[0];
    }
    /**
 * Create a value with the coercion logic of struct and validate it.
 */    function index_es_create(value, struct) {
      const result = index_es_validate(value, struct, {
        coerce: true
      });
      if (result[0]) throw result[0]; else return result[1];
    }
    /**
 * Mask a value, returning only the subset of properties defined by a struct.
 */    function index_es_mask(value, struct) {
      const result = index_es_validate(value, struct, {
        coerce: true,
        mask: true
      });
      if (result[0]) throw result[0]; else return result[1];
    }
    /**
 * Check if a value passes a struct.
 */    function index_es_is(value, struct) {
      const result = index_es_validate(value, struct);
      return !result[0];
    }
    /**
 * Validate a value against a struct, returning an error if invalid, or the
 * value (with potential coercion) if valid.
 */    function index_es_validate(value, struct, options) {
      if (void 0 === options) options = {};
      const tuples = index_es_run(value, struct, options);
      const tuple = index_es_shiftIterator(tuples);
      if (tuple[0]) {
        const error = new index_es_StructError(tuple[0], (function*() {
          for (const t of tuples) if (t[0]) yield t[0];
        }));
        return [ error, void 0 ];
      } else {
        const v = tuple[1];
        return [ void 0, v ];
      }
    }
    /**
 * Define a new struct type with a custom validation function.
 */
    function index_es_define(name, validator) {
      return new index_es_Struct({
        type: name,
        schema: null,
        validator
      });
    }
    /**
 * Create a new struct based on an existing struct, but the value is allowed to
 * be `undefined`. `log` will be called if the value is not `undefined`.
 */    function index_es_array(Element) {
      return new index_es_Struct({
        type: "array",
        schema: Element,
        * entries(value) {
          if (Element && Array.isArray(value)) for (const [i, v] of value.entries()) yield [ i, v, Element ];
        },
        coercer(value) {
          return Array.isArray(value) ? value.slice() : value;
        },
        validator(value) {
          return Array.isArray(value) || "Expected an array value, but received: " + index_es_print(value);
        }
      });
    }
    /**
 * Ensure that a value is a bigint.
 */    function index_es_enums(values) {
      const schema = {};
      const description = values.map((v => index_es_print(v))).join();
      for (const key of values) schema[key] = key;
      return new index_es_Struct({
        type: "enums",
        schema,
        validator(value) {
          return values.includes(value) || "Expected one of `" + description + "`, but received: " + index_es_print(value);
        }
      });
    }
    /**
 * Ensure that a value is a function.
 */    
    /**
 * Ensure that a value is an integer.
 */
    function index_es_integer() {
      return index_es_define("integer", (value => "number" === typeof value && !isNaN(value) && Number.isInteger(value) || "Expected an integer, but received: " + index_es_print(value)));
    }
    /**
 * Ensure that a value matches all of a set of types.
 */    function index_es_literal(constant) {
      const description = index_es_print(constant);
      const t = typeof constant;
      return new index_es_Struct({
        type: "literal",
        schema: "string" === t || "number" === t || "boolean" === t ? constant : null,
        validator(value) {
          return value === constant || "Expected the literal `" + description + "`, but received: " + index_es_print(value);
        }
      });
    }
    /**
 * Ensure that a value is a number.
 */
    function index_es_number() {
      return index_es_define("number", (value => "number" === typeof value && !isNaN(value) || "Expected a number, but received: " + index_es_print(value)));
    }
    /**
 * Augment a struct to allow `undefined` values.
 */
    function index_es_optional(struct) {
      return new index_es_Struct({
        ...struct,
        validator: (value, ctx) => void 0 === value || struct.validator(value, ctx),
        refiner: (value, ctx) => void 0 === value || struct.refiner(value, ctx)
      });
    }
    /**
 * Ensure that a value is an object with keys and values of specific types, but
 * without ensuring any specific shape of properties.
 *
 * Like TypeScript's `Record` utility.
 */    function index_es_record(Key, Value) {
      return new index_es_Struct({
        type: "record",
        schema: null,
        * entries(value) {
          if (index_es_isObject(value)) for (const k in value) {
            const v = value[k];
            yield [ k, k, Key ];
            yield [ k, v, Value ];
          }
        },
        validator(value) {
          return index_es_isObject(value) || "Expected an object, but received: " + index_es_print(value);
        }
      });
    }
    /**
 * Ensure that a value is a `RegExp`.
 *
 * Note: this does not test the value against the regular expression! For that
 * you need to use the `pattern()` refinement.
 */    
    /**
 * Ensure that a value is a string.
 */
    function index_es_string() {
      return index_es_define("string", (value => "string" === typeof value || "Expected a string, but received: " + index_es_print(value)));
    }
    /**
 * Ensure that a value is a tuple of a specific length, and that each of its
 * elements is of a specific type.
 */    
    /**
 * Ensure that a value has a set of known properties of specific types.
 *
 * Note: Unrecognized properties are allowed and untouched. This is similar to
 * how TypeScript's structural typing works.
 */
    function index_es_type(schema) {
      const keys = Object.keys(schema);
      return new index_es_Struct({
        type: "type",
        schema,
        * entries(value) {
          if (index_es_isObject(value)) for (const k of keys) yield [ k, value[k], schema[k] ];
        },
        validator(value) {
          return index_es_isObject(value) || "Expected an object, but received: " + index_es_print(value);
        }
      });
    }
    /**
 * Ensure that a value matches one of a set of types.
 */    function index_es_union(Structs) {
      const description = Structs.map((s => s.type)).join(" | ");
      return new index_es_Struct({
        type: "union",
        schema: null,
        coercer(value, ctx) {
          const firstMatch = Structs.find((s => {
            const [e] = s.validate(value, {
              coerce: true
            });
            return !e;
          })) || index_es_unknown();
          return firstMatch.coercer(value, ctx);
        },
        validator(value, ctx) {
          const failures = [];
          for (const S of Structs) {
            const [...tuples] = index_es_run(value, S, ctx);
            const [first] = tuples;
            if (!first[0]) return []; else for (const [failure] of tuples) if (failure) failures.push(failure);
          }
          return [ "Expected the value to satisfy a union of `" + description + "`, but received: " + index_es_print(value), ...failures ];
        }
      });
    }
    /**
 * Ensure that any value passes validation, without widening its type to `any`.
 */    function index_es_unknown() {
      return index_es_define("unknown", (() => true));
    }
    /**
 * Augment a `Struct` to add an additional coercion step to its input.
 *
 * This allows you to transform input data before validating it, to increase the
 * likelihood that it passes validation—for example for default values, parsing
 * different formats, etc.
 *
 * Note: You must use `create(value, Struct)` on the value to have the coercion
 * take effect! Using simply `assert()` or `is()` will not use coercion.
 */    function index_es_getSize(value) {
      if (value instanceof Map || value instanceof Set) return value.size; else return value.length;
    }
    /**
 * Ensure that a number or date is below a threshold.
 */    
    /**
 * Ensure that a number or date is above a threshold.
 */
    function index_es_min(struct, threshold, options) {
      if (void 0 === options) options = {};
      const {exclusive} = options;
      return index_es_refine(struct, "min", (value => exclusive ? value > threshold : value >= threshold || "Expected a " + struct.type + " greater than " + (exclusive ? "" : "or equal to ") + threshold + " but received `" + value + "`"));
    }
    /**
 * Ensure that a string, array, map or set is not empty.
 */    function index_es_nonempty(struct) {
      return index_es_refine(struct, "nonempty", (value => {
        const size = index_es_getSize(value);
        return size > 0 || "Expected a nonempty " + struct.type + " but received an empty one";
      }));
    }
    /**
 * Ensure that a string matches a regular expression.
 */    
    /**
 * Augment a `Struct` to add an additional refinement to the validation.
 *
 * The refiner function is guaranteed to receive a value of the struct's type,
 * because the struct's existing validation will already have passed. This
 * allows you to layer additional validation on top of existing structs.
 */
    function index_es_refine(struct, name, refiner) {
      return new index_es_Struct({
        ...struct,
        * refiner(value, ctx) {
          yield* struct.refiner(value, ctx);
          const result = refiner(value, ctx);
          const failures = index_es_toFailures(result, ctx, struct, value);
          for (const failure of failures) yield {
            ...failure,
            refinement: name
          };
        }
      });
    }
    // CONCATENATED MODULE: ./node_modules/idb/build/wrap-idb-value.js
    const instanceOfAny = (object, constructors) => constructors.some((c => object instanceof c));
    let idbProxyableTypes;
    let cursorAdvanceMethods;
    // This is a function to prevent it throwing up in node environments.
        function getIdbProxyableTypes() {
      return idbProxyableTypes || (idbProxyableTypes = [ IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction ]);
    }
    // This is a function to prevent it throwing up in node environments.
        function getCursorAdvanceMethods() {
      return cursorAdvanceMethods || (cursorAdvanceMethods = [ IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey ]);
    }
    const cursorRequestMap = new WeakMap;
    const transactionDoneMap = new WeakMap;
    const transactionStoreNamesMap = new WeakMap;
    const transformCache = new WeakMap;
    const reverseTransformCache = new WeakMap;
    function promisifyRequest(request) {
      const promise = new Promise(((resolve, reject) => {
        const unlisten = () => {
          request.removeEventListener("success", success);
          request.removeEventListener("error", error);
        };
        const success = () => {
          resolve(wrap_idb_value_wrap(request.result));
          unlisten();
        };
        const error = () => {
          reject(request.error);
          unlisten();
        };
        request.addEventListener("success", success);
        request.addEventListener("error", error);
      }));
      promise.then((value => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) cursorRequestMap.set(value, request);
        // Catching to avoid "Uncaught Promise exceptions"
            })).catch((() => {}));
      // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
      // is because we create many promises from a single IDBRequest.
            reverseTransformCache.set(promise, request);
      return promise;
    }
    function cacheDonePromiseForTransaction(tx) {
      // Early bail if we've already created a done promise for this transaction.
      if (transactionDoneMap.has(tx)) return;
      const done = new Promise(((resolve, reject) => {
        const unlisten = () => {
          tx.removeEventListener("complete", complete);
          tx.removeEventListener("error", error);
          tx.removeEventListener("abort", error);
        };
        const complete = () => {
          resolve();
          unlisten();
        };
        const error = () => {
          reject(tx.error || new DOMException("AbortError", "AbortError"));
          unlisten();
        };
        tx.addEventListener("complete", complete);
        tx.addEventListener("error", error);
        tx.addEventListener("abort", error);
      }));
      // Cache it for later retrieval.
            transactionDoneMap.set(tx, done);
    }
    let idbProxyTraps = {
      get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
          // Special handling for transaction.done.
          if ("done" === prop) return transactionDoneMap.get(target);
          // Polyfill for objectStoreNames because of Edge.
                    if ("objectStoreNames" === prop) return target.objectStoreNames || transactionStoreNamesMap.get(target);
          // Make tx.store return the only store in the transaction, or undefined if there are many.
                    if ("store" === prop) return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
        }
        // Else transform whatever we get back.
                return wrap_idb_value_wrap(target[prop]);
      },
      set(target, prop, value) {
        target[prop] = value;
        return true;
      },
      has(target, prop) {
        if (target instanceof IDBTransaction && ("done" === prop || "store" === prop)) return true;
        return prop in target;
      }
    };
    function replaceTraps(callback) {
      idbProxyTraps = callback(idbProxyTraps);
    }
    function wrapFunction(func) {
      // Due to expected object equality (which is enforced by the caching in `wrap`), we
      // only create one new func per func.
      // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
      if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [ storeNames ]);
        return wrap_idb_value_wrap(tx);
      };
      // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
      // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
      // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
      // with real promises, so each advance methods returns a new promise for the cursor object, or
      // undefined if the end of the cursor has been reached.
            if (getCursorAdvanceMethods().includes(func)) return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        func.apply(unwrap(this), args);
        return wrap_idb_value_wrap(cursorRequestMap.get(this));
      };
      return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap_idb_value_wrap(func.apply(unwrap(this), args));
      };
    }
    function transformCachableValue(value) {
      if ("function" === typeof value) return wrapFunction(value);
      // This doesn't return, it just creates a 'done' promise for the transaction,
      // which is later returned for transaction.done (see idbObjectHandler).
            if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
      if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
      // Return the same value back if we're not going to transform it.
            return value;
    }
    function wrap_idb_value_wrap(value) {
      // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
      // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
      if (value instanceof IDBRequest) return promisifyRequest(value);
      // If we've already transformed this value before, reuse the transformed value.
      // This is faster, but it also provides object equality.
            if (transformCache.has(value)) return transformCache.get(value);
      const newValue = transformCachableValue(value);
      // Not all types are transformed.
      // These may be primitive types, so they can't be WeakMap keys.
            if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
      }
      return newValue;
    }
    const unwrap = value => reverseTransformCache.get(value);
    const readMethods = [ "get", "getKey", "getAll", "getAllKeys", "count" ];
    const writeMethods = [ "put", "add", "delete", "clear" ];
    const cachedMethods = new Map;
    function getMethod(target, prop) {
      if (!(target instanceof IDBDatabase && !(prop in target) && "string" === typeof prop)) return;
      if (cachedMethods.get(prop)) return cachedMethods.get(prop);
      const targetFuncName = prop.replace(/FromIndex$/, "");
      const useIndex = prop !== targetFuncName;
      const isWrite = writeMethods.includes(targetFuncName);
      if (
      // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
      !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) return;
      const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
                return (await Promise.all([ target[targetFuncName](...args), isWrite && tx.done ]))[0];
      };
      cachedMethods.set(prop, method);
      return method;
    }
    replaceTraps((oldTraps => ({
      ...oldTraps,
      get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
      has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
    })));
    // CONCATENATED MODULE: ./node_modules/idb/build/async-iterators.js
    const advanceMethodProps = [ "continue", "continuePrimaryKey", "advance" ];
    const methodMap = {};
    const advanceResults = new WeakMap;
    const ittrProxiedCursorToOriginalProxy = new WeakMap;
    const cursorIteratorTraps = {
      get(target, prop) {
        if (!advanceMethodProps.includes(prop)) return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) cachedFunc = methodMap[prop] = function(...args) {
          advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
        };
        return cachedFunc;
      }
    };
    async function* iterate(...args) {
      // tslint:disable-next-line:no-this-assignment
      let cursor = this;
      if (!(cursor instanceof IDBCursor)) cursor = await cursor.openCursor(...args);
      if (!cursor) return;
      cursor;
      const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
      ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
      // Map this double-proxy back to the original, so other cursor methods work.
            reverseTransformCache.set(proxiedCursor, unwrap(cursor));
      while (cursor) {
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
                cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
      }
    }
    function isIteratorProp(target, prop) {
      return prop === Symbol.asyncIterator && instanceOfAny(target, [ IDBIndex, IDBObjectStore, IDBCursor ]) || "iterate" === prop && instanceOfAny(target, [ IDBIndex, IDBObjectStore ]);
    }
    replaceTraps((oldTraps => ({
      ...oldTraps,
      get(target, prop, receiver) {
        if (isIteratorProp(target, prop)) return iterate;
        return oldTraps.get(target, prop, receiver);
      },
      has(target, prop) {
        return isIteratorProp(target, prop) || oldTraps.has(target, prop);
      }
    })));
    // prettier-ignore
    new Map([ [ 0x3046, 0x3094 ], [ 0x304b, 0x304c ], [ 0x304d, 0x304e ], [ 0x304f, 0x3050 ], [ 0x3051, 0x3052 ], [ 0x3053, 0x3054 ], [ 0x3055, 0x3056 ], [ 0x3057, 0x3058 ], [ 0x3059, 0x305a ], [ 0x305b, 0x305c ], [ 0x305d, 0x305e ], [ 0x305f, 0x3060 ], [ 0x3061, 0x3062 ], [ 0x3064, 0x3065 ], [ 0x3066, 0x3067 ], [ 0x3068, 0x3069 ], [ 0x306f, 0x3070 ], [ 0x3072, 0x3073 ], [ 0x3075, 0x3076 ], [ 0x3078, 0x3079 ], [ 0x307b, 0x307c ], [ 0x309d, 0x309e ], [ 0x30ab, 0x30ac ], [ 0x30ad, 0x30ae ], [ 0x30a6, 0x30f4 ], [ 0x30af, 0x30b0 ], [ 0x30b1, 0x30b2 ], [ 0x30b3, 0x30b4 ], [ 0x30b5, 0x30b6 ], [ 0x30b7, 0x30b8 ], [ 0x30b9, 0x30ba ], [ 0x30bb, 0x30bc ], [ 0x30bd, 0x30be ], [ 0x30bf, 0x30c0 ], [ 0x30c1, 0x30c2 ], [ 0x30c4, 0x30c5 ], [ 0x30c6, 0x30c7 ], [ 0x30c8, 0x30c9 ], [ 0x30cf, 0x30d0 ], [ 0x30d2, 0x30d3 ], [ 0x30d5, 0x30d6 ], [ 0x30d8, 0x30d9 ], [ 0x30db, 0x30dc ], [ 0x30ef, 0x30f7 ], [ 0x30f0, 0x30f8 ], [ 0x30f1, 0x30f9 ], [ 0x30f2, 0x30fa ], [ 0x30fd, 0x30fe ] ]);
    // prettier-ignore
        new Map([ [ 0x306f, 0x3071 ], [ 0x3072, 0x3074 ], [ 0x3075, 0x3077 ], [ 0x3078, 0x307a ], [ 0x307b, 0x307d ], [ 0x30cf, 0x30d1 ], [ 0x30d2, 0x30d4 ], [ 0x30d5, 0x30d7 ], [ 0x30d8, 0x30da ], [ 0x30db, 0x30dd ] ]);
    // First part of the CJK Compatibility block: 0x3300-0x3370
    // prettier-ignore
        // CONCATENATED MODULE: ./node_modules/@birchill/normal-jp/dist/esm/mora.js
    const SKIP_FOR_MORA_COUNT = [ 0x3041, 0x3043, 0x3045, 0x3047, 0x3049, 0x3083, 0x3085, 0x3087, 0x308e, 0x30a1, 0x30a3, 0x30a5, 0x30a7, 0x30a9, 0x30e3, 0x30e5, 0x30e7, 0x30ee ];
    // Very basic mora counter
        function countMora(text) {
      return [ ...text ].filter(((c, i) => 0 === i || !SKIP_FOR_MORA_COUNT.includes(c.codePointAt(0)))).length;
    }
    function moraSubstring(input, _start, _end) {
      let start = _start;
      let end = _end;
      if (start < 0) start = 0;
      if ("undefined" !== typeof end && end < 0) end = 0;
      const moraLength = countMora(input);
      if (start > moraLength) start = moraLength;
      if ("undefined" !== typeof end && end > moraLength) end = moraLength;
      if (start === end) return "";
      if ("undefined" !== typeof end && start > end) {
        const temp = end;
        end = start;
        start = temp;
      }
      let moraIndex = 0;
      let charStart = input.length;
      let charEnd;
      for (let i = 0; i < input.length; i++, moraIndex++) {
        if (moraIndex === start) {
          charStart = i;
          if ("undefined" === typeof end) break;
        }
        if (moraIndex === end) {
          charEnd = i;
          break;
        }
        // Skip forward if this is a skippable character
                if (i < input.length - 1 && SKIP_FOR_MORA_COUNT.includes(input.codePointAt(i + 1))) i++;
      }
      return input.substring(charStart, charEnd);
    }
    // CONCATENATED MODULE: ./node_modules/@birchill/jpdict-idb/dist/index.js
    Error;
    Error;
    const safeInteger = () => index_es_refine(index_es_integer(), "safeInteger", (value => Number.isSafeInteger(value)));
    const VersionInfoStruct = index_es_type({
      major: index_es_min(safeInteger(), 1),
      minor: index_es_min(safeInteger(), 0),
      patch: index_es_min(safeInteger(), 0),
      parts: index_es_optional(index_es_min(safeInteger(), 1)),
      databaseVersion: index_es_optional(index_es_string()),
      dateOfCreation: index_es_nonempty(index_es_string())
    });
    index_es_record(index_es_string(), index_es_record(index_es_string(), VersionInfoStruct));
    index_es_type({
      type: index_es_literal("header"),
      version: index_es_type({
        major: index_es_min(safeInteger(), 1),
        minor: index_es_min(safeInteger(), 0),
        patch: index_es_min(safeInteger(), 0),
        databaseVersion: index_es_optional(index_es_string()),
        dateOfCreation: index_es_nonempty(index_es_string())
      }),
      records: index_es_min(safeInteger(), 0),
      part: index_es_optional(index_es_min(safeInteger(), 0)),
      format: index_es_enums([ "patch", "full" ])
    });
    index_es_type({
      _: index_es_enums([ "+", "-", "~" ])
    });
    Error;
    // ----------------------------------------------------------------------------
    // Words
    // ----------------------------------------------------------------------------
    const KanjiMetaSchema = index_es_type({
      i: index_es_optional(index_es_array(index_es_string())),
      p: index_es_optional(index_es_array(index_es_string()))
    });
    const AccentSchema = index_es_type({
      i: index_es_min(safeInteger(), 0),
      pos: index_es_optional(index_es_array(index_es_string()))
    });
    const ReadingMetaSchema = index_es_type({
      i: index_es_optional(index_es_array(index_es_string())),
      p: index_es_optional(index_es_array(index_es_string())),
      app: index_es_optional(index_es_min(safeInteger(), 0)),
      a: index_es_optional(index_es_union([ index_es_min(safeInteger(), 0), index_es_array(AccentSchema) ]))
    });
    // The following typing is because Describe struggles with union types
        const CrossReferenceSchema = index_es_union([ index_es_type({
      k: index_es_nonempty(index_es_string()),
      sense: index_es_optional(index_es_min(safeInteger(), 0))
    }), index_es_type({
      r: index_es_nonempty(index_es_string()),
      sense: index_es_optional(index_es_min(safeInteger(), 0))
    }), index_es_type({
      k: index_es_nonempty(index_es_string()),
      r: index_es_string(),
      sense: index_es_optional(index_es_min(safeInteger(), 0))
    }) ]);
    const LangSourceSchema = index_es_type({
      lang: index_es_optional(index_es_nonempty(index_es_string())),
      src: index_es_optional(index_es_string()),
      // The following should be:
      //   part: s.optional(s.literal(true)),
      //   wasei: s.optional(s.literal(true)),
      // But Describe doesn't seem to handle optional boolean literals so we try
      // this way for now.
      part: index_es_union([ index_es_literal(true), index_es_literal(void 0) ]),
      wasei: index_es_union([ index_es_literal(true), index_es_literal(void 0) ])
    });
    const WordSenseSchema = index_es_type({
      g: index_es_nonempty(index_es_array(index_es_nonempty(index_es_string()))),
      gt: index_es_optional(index_es_min(safeInteger(), 1)),
      lang: index_es_optional(index_es_nonempty(index_es_string())),
      kapp: index_es_optional(index_es_min(safeInteger(), 0)),
      rapp: index_es_optional(index_es_min(safeInteger(), 0)),
      pos: index_es_optional(index_es_array(index_es_string())),
      field: index_es_optional(index_es_array(index_es_string())),
      misc: index_es_optional(index_es_array(index_es_string())),
      dial: index_es_optional(index_es_array(index_es_string())),
      inf: index_es_optional(index_es_nonempty(index_es_string())),
      xref: index_es_optional(index_es_nonempty(index_es_array(CrossReferenceSchema))),
      ant: index_es_optional(index_es_nonempty(index_es_array(CrossReferenceSchema))),
      lsrc: index_es_optional(index_es_nonempty(index_es_array(LangSourceSchema)))
    });
    const WordIdSchema = index_es_min(safeInteger(), 1);
    index_es_type({
      id: WordIdSchema,
      k: index_es_optional(index_es_nonempty(index_es_array(index_es_string()))),
      km: index_es_optional(index_es_nonempty(index_es_array(index_es_union([ index_es_literal(0), KanjiMetaSchema ])))),
      r: index_es_array(index_es_nonempty(index_es_nonempty(index_es_string()))),
      rm: index_es_optional(index_es_nonempty(index_es_array(index_es_union([ index_es_literal(0), ReadingMetaSchema ])))),
      s: index_es_array(WordSenseSchema)
    });
    index_es_type({
      id: WordIdSchema
    });
    // ----------------------------------------------------------------------------
    // Names
    // ----------------------------------------------------------------------------
    const NameTranslationSchema = index_es_type({
      type: index_es_optional(index_es_array(index_es_string())),
      det: index_es_array(index_es_nonempty(index_es_string())),
      cf: index_es_optional(index_es_array(index_es_nonempty(index_es_string())))
    });
    const NameIdSchema = index_es_min(safeInteger(), 1);
    index_es_type({
      id: NameIdSchema,
      k: index_es_optional(index_es_array(index_es_nonempty(index_es_string()))),
      r: index_es_nonempty(index_es_array(index_es_nonempty(index_es_string()))),
      tr: index_es_array(NameTranslationSchema)
    });
    index_es_type({
      id: NameIdSchema
    });
    // ----------------------------------------------------------------------------
    // Kanji
    // ----------------------------------------------------------------------------
    const ReadingsStruct = index_es_type({
      on: index_es_optional(index_es_array(index_es_string())),
      kun: index_es_optional(index_es_array(index_es_string())),
      na: index_es_optional(index_es_array(index_es_string())),
      py: index_es_optional(index_es_array(index_es_string()))
    });
    const RadicalStruct = index_es_type({
      x: index_es_min(safeInteger(), 0),
      nelson: index_es_optional(index_es_min(safeInteger(), 0)),
      name: index_es_optional(index_es_array(index_es_string())),
      var: index_es_optional(index_es_string())
    });
    const MiscSchema = index_es_type({
      gr: index_es_optional(safeInteger()),
      sc: index_es_min(safeInteger(), 1),
      freq: index_es_optional(index_es_min(safeInteger(), 0)),
      // The following three items should really have a minimum value of 1, but in
      // the interests of being (a bit) forgiving in what we accept, we allow 0 too.
      jlpt: index_es_optional(index_es_min(safeInteger(), 0)),
      jlptn: index_es_optional(index_es_min(safeInteger(), 0)),
      kk: index_es_optional(index_es_min(safeInteger(), 0)),
      meta: index_es_optional(index_es_array(index_es_string()))
    });
    const KanjiIdSchema = index_es_nonempty(index_es_string());
    index_es_type({
      c: KanjiIdSchema,
      r: ReadingsStruct,
      m: index_es_array(index_es_string()),
      m_lang: index_es_optional(index_es_string()),
      rad: RadicalStruct,
      refs: index_es_record(index_es_string(), index_es_union([ index_es_string(), index_es_number() ])),
      misc: MiscSchema,
      comp: index_es_optional(index_es_string()),
      var: index_es_optional(index_es_array(index_es_string())),
      cf: index_es_optional(index_es_union([ index_es_string(), index_es_array(index_es_string()) ]))
    });
    index_es_type({
      c: KanjiIdSchema
    });
    // ----------------------------------------------------------------------------
    // Radicals
    // ----------------------------------------------------------------------------
    const RadicalIdSchema = index_es_nonempty(index_es_string());
    index_es_type({
      id: RadicalIdSchema,
      r: index_es_min(safeInteger(), 1),
      b: index_es_optional(index_es_nonempty(index_es_string())),
      k: index_es_optional(index_es_nonempty(index_es_string())),
      pua: index_es_optional(safeInteger()),
      s: safeInteger(),
      na: index_es_array(index_es_nonempty(index_es_string())),
      posn: index_es_optional(index_es_nonempty(index_es_string())),
      m: index_es_array(index_es_nonempty(index_es_string())),
      m_lang: index_es_optional(index_es_nonempty(index_es_string()))
    });
    index_es_type({
      id: RadicalIdSchema
    });
    function groupSenses(senses) {
      var _a;
      const groups = [];
      // Do an initial grouping based on the first part-of-speech (POS)
            let previousPos;
      for (const sense of senses) 
      // Look for a match. Note that a match can be one of two kinds:
      // a) Where the sense includes the POS we are grouping on
      // b) Where we currently have a group where there is no POS and the sense
      //    also has no POS.
      if (previousPos && sense.pos && sense.pos.includes(previousPos) || !previousPos && groups.length && (!sense.pos || !sense.pos.length)) groups[groups.length - 1].senses.push(dropPos(sense, previousPos)); else {
        // If there was no match, start a new group
        const thisPos = (null === (_a = sense.pos) || void 0 === _a ? void 0 : _a.length) ? sense.pos[0] : void 0;
        const pos = thisPos ? [ thisPos ] : [];
        groups.push({
          pos,
          misc: [],
          senses: [ dropPos(sense, thisPos) ]
        });
        previousPos = thisPos;
      }
      // Having done the initial grouping, see if there are any additional POS that
      // are common to all senses that we can hoist to the group heading.
            for (const group of groups) {
        let commonPos = group.senses[0].pos;
        if (!commonPos) continue;
        for (const sense of group.senses.slice(1)) {
          commonPos = commonPos.filter((pos => sense.pos && sense.pos.includes(pos)));
          if (!commonPos.length) break;
        }
        if (commonPos.length) {
          group.pos.push(...commonPos);
          group.senses = group.senses.map((sense => dropPos(sense, commonPos)));
        }
      }
      // Hoist any common misc readings
            for (const group of groups) {
        let commonMisc = group.senses[0].misc;
        if (!commonMisc) continue;
        for (const sense of group.senses.slice(1)) {
          commonMisc = commonMisc.filter((misc => sense.misc && sense.misc.includes(misc)));
          if (!commonMisc.length) break;
        }
        if (commonMisc.length) {
          group.misc = commonMisc;
          group.senses = group.senses.map((sense => {
            var _a;
            return {
              ...sense,
              misc: null === (_a = sense.misc) || void 0 === _a ? void 0 : _a.filter((misc => !commonMisc.includes(misc)))
            };
          }));
        }
      }
      return groups;
    }
    // Set up a utility to produce a copy of a sense with the specified
    // part(s)-of-speech removed.
        function dropPos(sense, posToDrop) {
      let pos = sense.pos ? sense.pos.filter((pos => Array.isArray(posToDrop) ? !posToDrop.includes(pos) : pos !== posToDrop)) : void 0;
      if (pos && !pos.length) pos = void 0;
      return {
        ...sense,
        pos
      };
    }
    Error;
    const GLOSS_TYPE_MAX = 4 /* GlossType.Tm */;
    Math.floor(Math.log2(GLOSS_TYPE_MAX));
    // This assignment is pretty arbitrary however it's mostly used for sorting
    // entries where all we need to do is distinguish between the really common ones
    // and the obscure academic ones.
    // Entries with (P) are those ones that are marked with (P) in Edict.
    new Map([ [ "i1", 50 ], [ "i2", 20 ], [ "n1", 40 ], [ "n2", 20 ], [ "s1", 32 ], [ "s2", 20 ], [ "g1", 30 ], [ "g2", 15 ] ]);
    // This is in part:
    // - Missing typings for requestIdleCallback
    // - Polyfill for browsers that don't support requestIdleCallback
    // - Polyfill for non-Window contexts (e.g. workers)
    let requestIdleCallback;
    let cancelIdleCallback;
    if ("object" === typeof self && "function" === typeof self.requestIdleCallback && "function" === typeof self.cancelIdleCallback) {
      requestIdleCallback = self.requestIdleCallback;
      cancelIdleCallback = self.cancelIdleCallback;
    } else {
      requestIdleCallback = (callback, options) => {
        // Use half the specified timeout since it probably represents a worst-case
        // scenario.
        const timeout = options ? options.timeout / 2 : 0;
        return self.setTimeout((() => {
          callback({
            timeRemaining: () => 0,
            didTimeout: true
          });
        }), timeout);
      };
      cancelIdleCallback = handle => {
        clearTimeout(handle);
      };
    }
    new Map;
    new Map;
    // ---------------------------------------------------------------------------
    
    // State transitions
    
    // ---------------------------------------------------------------------------
        // CONCATENATED MODULE: ./src/content/popup/words.ts
    function renderWordEntries({entries, matchLen, more, namePreview, options, title}) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const container = html("div", {
        class: "wordlist entry-data"
      });
      if (title) container.append(html("div", {
        class: "title",
        lang: "ja"
      }, title));
      // Pre-filter metadata
      
      // If we have word matches longer than shogi metadata we drop the shogi
      // metadata because the shogi shorthand in particular can turn up false
      // positives on words like ドクター and ドキュメンテーション.
            if ("shogi" === (null === (_a = options.meta) || void 0 === _a ? void 0 : _a.type) && matchLen >= options.meta.matchLen) delete options.meta;
      if (options.meta) {
        const metadata = renderMetadata({
          fxData: options.fxData,
          isCombinedResult: true,
          matchLen,
          meta: options.meta
        });
        if (metadata) container.append(metadata);
      }
      const numNames = null !== (_b = null === namePreview || void 0 === namePreview ? void 0 : namePreview.names.length) && void 0 !== _b ? _b : 0;
      const totalEntries = entries.length + numNames;
      const selectedIndex = getSelectedIndex(options, totalEntries);
      if (namePreview) container.append(renderNamePreview(namePreview, {
        copyKind: options.copyState.kind,
        onStartCopy: options.onStartCopy,
        selectedIndex
      }));
      let lastPointerType = "touch";
      for (const [index, entry] of entries.entries()) {
        const entryDiv = html("div", {
          class: "entry"
        });
        container.append(entryDiv);
        if (index === selectedIndex - numNames) entryDiv.classList.add("active" === options.copyState.kind ? "-selected" : "-flash");
        entryDiv.addEventListener("pointerup", (evt => {
          lastPointerType = evt.pointerType;
        }));
        entryDiv.addEventListener("click", (() => {
          var _a;
          if (popupHasSelectedText(container)) return;
          const trigger = "mouse" === lastPointerType ? "mouse" : "touch";
          null === (_a = options.onStartCopy) || void 0 === _a ? void 0 : _a.call(options, index + numNames, trigger);
        }));
        const headingDiv = html("div", {});
        entryDiv.append(headingDiv);
        const matchedOnKana = entry.r.some((r => r.matchRange));
        // Exclude any search-only kanji headwords
                const kanjiHeadwords = entry.k ? entry.k.filter((k => {
          var _a;
          return !(null === (_a = k.i) || void 0 === _a ? void 0 : _a.includes("sK"));
        })) : [];
        // If we matched on kana, then any headwords which are _not_ matches should
        // be hidden since they don't apply to the kana.
        
        // This is because we mostly only show matching kana headwords and so if we
        // start showing kanji that don't correspond to the kana headwords the
        // result will be misleading.
        
        // For example, take the string さいだん. Entry 1385120 has readings
        // さいだん and せつだん but さいだん is specifically bound to the 截断 kanji.
        
        // As a result if we look up さいだん we'll mark the さいだん kana headword as a
        // match and the 截断 kanji headword too. As per our usual processing, we'll
        // only show the さいだん kana headword, however, not せつだん.
        
        // If we were also to show the unmatched 切断 kanji headword we'd end up
        // displaying:
        
        // 截断、切断  さいだん
        
        // which would be misleading since 切断 can never have that reading.
                const matchingKanji = matchedOnKana ? kanjiHeadwords.filter((k => k.match)) : kanjiHeadwords;
        const hasKanjiMatch = matchingKanji.some((k => k.match));
        // Sort matched kanji entries first
                matchingKanji.sort(((a, b) => Number(b.match) - Number(a.match)));
        if (matchingKanji.length) {
          const kanjiSpan = html("span", {
            class: "w-kanji",
            lang: "ja"
          });
          for (const [i, kanji] of matchingKanji.entries()) {
            if (i) kanjiSpan.append(html("span", {
              class: "separator"
            }, "、"));
            let headwordSpan = kanjiSpan;
            if (
            // Dim the non-matching kanji unless there are none (e.g. because we
            // matched on a search-only kanji headword).
            hasKanjiMatch && !kanji.match || 
            // Dim any kanji "matches" where the reading is irregular, old, or
            // rare.
            matchedOnKana && ((null === (_c = kanji.i) || void 0 === _c ? void 0 : _c.includes("iK")) || (null === (_d = kanji.i) || void 0 === _d ? void 0 : _d.includes("oK")) || (null === (_e = kanji.i) || void 0 === _e ? void 0 : _e.includes("rK")))) {
              const dimmedSpan = html("span", {
                class: "dimmed"
              });
              kanjiSpan.append(dimmedSpan);
              headwordSpan = dimmedSpan;
            }
            headwordSpan.append(kanji.ent);
            appendHeadwordInfo(kanji.i, headwordSpan);
            if (options.showPriority) appendPriorityMark(kanji.p, headwordSpan);
          }
          headingDiv.append(kanjiSpan);
        }
        // Typically we only show the matching kana headwords but if we matched on
        // an irregular form or a search-only form, we should show the regular kana
        // headwords too, for reference.
        
        // For example, if we looked up ふんいき (雰囲気) we should only show that
        // headword, but if we looked up ふいんき, we should show the more correct
        // ふんいき too.
                const matchedOnIrregularKana = matchedOnKana && entry.r.every((r => {
          var _a, _b, _c;
          return !r.match || (null === (_a = r.i) || void 0 === _a ? void 0 : _a.includes("ik")) || (null === (_b = r.i) || void 0 === _b ? void 0 : _b.includes("ok")) || (null === (_c = r.i) || void 0 === _c ? void 0 : _c.includes("sk"));
        }));
        const matchingKana = entry.r.filter((r => {
          var _a, _b, _c, _d;
          // Exclude search-only kana forms
                    return !(null === (_a = r.i) || void 0 === _a ? void 0 : _a.includes("sk")) && (r.match || matchedOnIrregularKana && !(null === (_b = r.i) || void 0 === _b ? void 0 : _b.includes("ik")) && !(null === (_c = r.i) || void 0 === _c ? void 0 : _c.includes("ok")) && !(null === (_d = r.i) || void 0 === _d ? void 0 : _d.includes("sk")));
        }));
        if (matchingKana.length) {
          const kanaSpan = html("span", {
            class: "w-kana",
            lang: "ja"
          });
          for (const [i, kana] of matchingKana.entries()) {
            if (i) kanaSpan.append(html("span", {
              class: "separator"
            }, "、"));
            // If we looked up by kanji, dim any kana headwords that are irregular
            // or old.
                        let headwordSpan = kanaSpan;
            if (!matchedOnKana && ((null === (_f = kana.i) || void 0 === _f ? void 0 : _f.includes("ik")) || (null === (_g = kana.i) || void 0 === _g ? void 0 : _g.includes("ok")))) {
              const dimmedSpan = html("span", {
                class: "dimmed"
              });
              kanaSpan.append(dimmedSpan);
              headwordSpan = dimmedSpan;
            }
            headwordSpan.append(renderKana(kana, options));
            appendHeadwordInfo(kana.i, headwordSpan);
            if (options.showPriority) appendPriorityMark(kana.p, headwordSpan);
          }
          headingDiv.append(kanaSpan);
        }
        if (null === (_h = entry.romaji) || void 0 === _h ? void 0 : _h.length) headingDiv.append(html("span", {
          class: "w-romaji",
          lang: "ja"
        }, entry.romaji.join(", ")));
        if (entry.reason) headingDiv.append(html("span", {
          class: "w-conj",
          lang: getLangTag()
        }, `(${entry.reason})`));
        if (options.showDefinitions) entryDiv.append(renderDefinitions(entry, options));
      }
      if (more) container.append(html("div", {
        class: "more"
      }, "…"));
      return container;
    }
    function renderNamePreview({names, more}, {copyKind, onStartCopy, selectedIndex}) {
      const container = html("div", {
        class: "bonus-name"
      });
      let lastPointerType = "touch";
      for (const [index, name] of names.entries()) {
        const nameEntry = renderName(name);
        if (index === selectedIndex) nameEntry.classList.add("active" === copyKind ? "-selected" : "-flash");
        nameEntry.addEventListener("pointerup", (evt => {
          lastPointerType = evt.pointerType;
        }));
        nameEntry.addEventListener("click", (() => {
          if (popupHasSelectedText(container)) return;
          const trigger = "mouse" === lastPointerType ? "mouse" : "touch";
          null === onStartCopy || void 0 === onStartCopy ? void 0 : onStartCopy(index, trigger);
        }));
        container.append(nameEntry);
      }
      if (more) container.append(html("span", {
        class: "more"
      }, "…"));
      return container;
    }
    function appendHeadwordInfo(info, parent) {
      if (!info || !info.length) return;
      for (const i of info) {
        const span = html("span", {
          class: "w-head-info",
          lang: getLangTag()
        }, "(");
        // Some KanjiInfo/RadicalInfo values differ only by case but
        // addons-linter (as used by webext etc.) does not allow WebExtension i18n
        // keys to differ by case only.
        
        // I couldn't find the rationale for this, the rule just magically
        // appears in https://github.com/mozilla/addons-linter/commit/3923b399f8166b59617071730b87048f45122c7e
        // it seems.
                const specialKeys = {
          iK: "ikanji",
          ik: "ikana",
          oK: "okanji",
          ok: "okana",
          uK: "ukanji",
          rK: "rkanji"
        };
        const key = specialKeys.hasOwnProperty(i) ? specialKeys[i] : i;
        span.append(lib.browser.i18n.getMessage(`head_info_label_${key}`) || i, ")");
        parent.append(span);
      }
    }
    function appendPriorityMark(priority, parent) {
      if (!priority || !priority.length) return;
      // These are the ones that are annotated with a (P) in the EDICT file.
            const highPriorityLabels = [ "i1", "n1", "s1", "s2", "g1" ];
      let highPriority = false;
      for (const p of priority) if (highPriorityLabels.includes(p)) {
        highPriority = true;
        break;
      }
      parent.append(renderStar(highPriority ? "full" : "hollow"));
    }
    function renderKana(kana, options) {
      const accents = kana.a;
      if ("none" === options.accentDisplay || "undefined" === typeof accents || Array.isArray(accents) && !accents.length) return kana.ent;
      const accentPos = "number" === typeof accents ? accents : accents[0].i;
      if ("downstep" === options.accentDisplay) if (!accentPos) 
      // accentPos 0 (heiban) is special since there's no accent to show.
      // At the same time we want to distinguish between heiban and
      // "no accent information". So we indicate heiban with a dotted line
      // across the top instead.
      return html("span", {
        class: "w-heiban"
      }, kana.ent); else return moraSubstring(kana.ent, 0, accentPos) + "ꜜ" + moraSubstring(kana.ent, accentPos);
      // Generate binary pitch display
            const wrapperSpan = html("span", {
        class: "w-binary"
      });
      if ("binary-hi-contrast" === options.accentDisplay) wrapperSpan.classList.add("-hi-contrast");
      // Accent position 0 (heiban: LHHHHH) and accent position 1 (atamadaka: HLLLL)
      // are sufficiently similar that we handle them together.
            if (0 === accentPos || 1 === accentPos) {
        const len = countMora(kana.ent);
        wrapperSpan.append(html("span", {
          class: accentPos ? "h-l" : len > 1 ? "l-h" : "h"
        }, moraSubstring(kana.ent, 0, 1)));
        if (len > 1) wrapperSpan.append(html("span", {
          class: accentPos ? "l" : "h"
        }, moraSubstring(kana.ent, 1)));
      } else {
        // Otherwise we have nakadaka (LHHHHL) or odaka (LHHHH)
        wrapperSpan.append(html("span", {
          class: "l-h"
        }, moraSubstring(kana.ent, 0, 1)));
        wrapperSpan.append(html("span", {
          class: "h-l"
        }, moraSubstring(kana.ent, 1, accentPos)));
        if (accentPos < countMora(kana.ent)) wrapperSpan.append(html("span", {
          class: "l"
        }, moraSubstring(kana.ent, accentPos)));
      }
      return wrapperSpan;
    }
    function renderDefinitions(entry, options) {
      const senses = entry.s.filter((s => s.match));
      if (!senses.length) return "";
      const definitionsDiv = html("div", {
        class: "w-def"
      });
      if (1 === senses.length) {
        definitionsDiv.append(renderSense(senses[0], options));
        definitionsDiv.lang = senses[0].lang || "en";
        if (options.dictLang && "en" !== options.dictLang && senses[0].lang !== options.dictLang) definitionsDiv.classList.add("foreign");
      } else {
        // First extract any native language senses
        const nativeSenses = senses.filter((s => s.lang && "en" !== s.lang));
        if (nativeSenses.length) {
          const definitionList = html("ul", {});
          for (const sense of nativeSenses) definitionList.append(html("li", {
            lang: sense.lang || "en"
          }, renderSense(sense, options)));
          definitionsDiv.append(definitionList);
        }
        // Try grouping the remaining (English) definitions by part-of-speech.
                const enSenses = senses.filter((s => !s.lang || "en" === s.lang));
        const posGroups = "none" !== options.posDisplay ? groupSenses(enSenses) : [];
        const isForeign = !!options.dictLang && "en" !== options.dictLang;
        // Determine if the grouping makes sense
        
        // If the group headings make the number of lines used to represent
        // all the senses (ignoring word wrapping) grow by more than 50%, we should
        // skip using groups. This will typically be the case where there are no
        // common parts-of-speech, or at least very few.
                const linesWithGrouping = posGroups.length + enSenses.length;
        const linesWithoutGrouping = enSenses.length;
        const useGroups = posGroups.length && linesWithGrouping / linesWithoutGrouping <= 1.5;
        if (useGroups) {
          let startIndex = 1;
          for (const group of posGroups) {
            // Group heading
            const groupHeading = html("p", {
              class: "w-group-head"
            });
            for (const pos of group.pos) {
              const posSpan = html("span", {
                class: "w-pos tag"
              });
              if ("expl" === options.posDisplay) {
                posSpan.lang = getLangTag();
                posSpan.textContent = lib.browser.i18n.getMessage(`pos_label_${pos.replace(/-/g, "_")}`) || pos;
              } else posSpan.textContent = pos;
              groupHeading.append(posSpan);
            }
            for (const misc of group.misc) groupHeading.append(html("span", {
              class: "w-misc tag",
              lang: getLangTag()
            }, lib.browser.i18n.getMessage(`misc_label_${misc.replace(/-/g, "_")}`) || misc));
            // If there is no group heading, just add a '-' placeholder
                        if (!group.pos.length && !group.misc.length) groupHeading.append(html("span", {
              class: "w-pos tag"
            }, "-"));
            definitionsDiv.append(groupHeading);
            // Group items
                        const definitionList = html("ol", {
              start: String(startIndex)
            });
            for (const sense of group.senses) {
              definitionList.append(html("li", {
                class: isForeign ? "foreign" : void 0,
                lang: sense.lang || "en"
              }, renderSense(sense, options)));
              startIndex++;
            }
            definitionsDiv.append(definitionList);
          }
        } else {
          const definitionList = html("ol", {});
          for (const sense of enSenses) definitionList.append(html("li", {
            class: isForeign ? "foreign" : "",
            lang: sense.lang || "en"
          }, renderSense(sense, options)));
          definitionsDiv.append(definitionList);
        }
      }
      return definitionsDiv;
    }
    function renderSense(sense, options) {
      const fragment = document.createDocumentFragment();
      if ("none" !== options.posDisplay) for (const pos of sense.pos || []) {
        const posSpan = html("span", {
          class: "w-pos tag"
        });
        switch (options.posDisplay) {
         case "expl":
          posSpan.lang = getLangTag();
          posSpan.append(lib.browser.i18n.getMessage(`pos_label_${pos.replace(/-/g, "_")}`) || pos);
          break;

         case "code":
          posSpan.append(pos);
          break;
        }
        fragment.append(posSpan);
      }
      if (sense.field) for (const field of sense.field) fragment.append(html("span", {
        class: "w-field tag",
        lang: getLangTag()
      }, lib.browser.i18n.getMessage(`field_label_${field}`) || field));
      if (sense.misc) for (const misc of sense.misc) fragment.append(html("span", {
        class: "w-misc tag",
        lang: getLangTag()
      }, lib.browser.i18n.getMessage(`misc_label_${misc.replace(/-/g, "_")}`) || misc));
      if (sense.dial) for (const dial of sense.dial) fragment.append(html("span", {
        class: "w-dial tag",
        lang: getLangTag()
      }, lib.browser.i18n.getMessage(`dial_label_${dial}`) || dial));
      appendGlosses(sense.g, fragment);
      if (sense.inf) fragment.append(html("span", {
        class: "w-inf",
        // Mark inf as Japanese because it often contains Japanese text
        lang: "ja"
      }, ` (${sense.inf})`));
      if (sense.lsrc && sense.lsrc.length) fragment.append(renderLangSources(sense.lsrc));
      return fragment;
    }
    function appendGlosses(glosses, parent) {
      for (const [i, gloss] of glosses.entries()) {
        if (i) parent.append("; ");
        if (gloss.type && 4 /* GlossType.Tm */ !== gloss.type) {
          const typeCode = {
            [1 /* GlossType.Expl */ ]: "expl",
            [3 /* GlossType.Fig */ ]: "fig",
            [2 /* GlossType.Lit */ ]: "lit"
          }[gloss.type];
          const typeStr = typeCode ? lib.browser.i18n.getMessage(`gloss_type_label_${typeCode}`) : "";
          if (typeStr) parent.append(html("span", {
            class: "w-type",
            lang: getLangTag()
          }, `(${typeStr}) `));
        }
        parent.append(gloss.str);
        if (4 /* GlossType.Tm */ === gloss.type) parent.append("™");
      }
    }
    function renderLangSources(sources) {
      const container = document.createDocumentFragment();
      for (const lsrc of sources) {
        container.append(" ");
        let prefix = lsrc.wasei ? lib.browser.i18n.getMessage("lang_label_wasei") : void 0;
        if (!prefix) prefix = lib.browser.i18n.getMessage(`lang_label_${lsrc.lang || "en"}`) || lsrc.lang;
        const wrapperSpan = html("span", {
          class: "w-lsrc",
          lang: getLangTag()
        }, "(");
        if (prefix && lsrc.src) prefix = `${prefix}: `;
        if (prefix) wrapperSpan.append(prefix);
        if (lsrc.src) wrapperSpan.append(html("span", {
          lang: lsrc.lang
        }, lsrc.src));
        wrapperSpan.append(")");
        container.append(wrapperSpan);
      }
      return container;
    }
    // EXTERNAL MODULE: ./css/popup.css
        var popup = __webpack_require__(158);
    // CONCATENATED MODULE: ./src/content/popup/popup.ts
    function renderPopup(result, options) {
      const container = options.container || getDefaultContainer();
      const windowElem = resetContainer({
        host: container,
        displayMode: options.displayMode,
        popupStyle: options.popupStyle
      });
      const hasResult = result && (result.words || result.kanji || result.names);
      const showTabs = hasResult && "db-unavailable" !== result.resultType && !result.title && "none" !== options.tabDisplay;
      if (showTabs) {
        windowElem.append(renderTabBar({
          closeShortcuts: options.closeShortcuts,
          displayMode: options.displayMode,
          onClosePopup: options.onClosePopup,
          onShowSettings: options.onShowSettings,
          onSwitchDictionary: options.onSwitchDictionary,
          onTogglePin: options.onTogglePin,
          pinShortcuts: options.pinShortcuts,
          queryResult: result,
          selectedTab: options.dictToShow
        }));
        windowElem.dataset.tabSide = options.tabDisplay || "top";
      }
      const contentContainer = html("div", {
        class: "content"
      });
      const resultToShow = null === result || void 0 === result ? void 0 : result[options.dictToShow];
      switch (null === resultToShow || void 0 === resultToShow ? void 0 : resultToShow.type) {
       case "kanji":
        contentContainer.append(renderKanjiEntry({
          entry: resultToShow.data,
          options
        }));
        break;

       case "names":
        contentContainer.append(renderNamesEntries({
          entries: resultToShow.data,
          matchLen: resultToShow.matchLen,
          more: resultToShow.more,
          options: {
            ...options,
            // Hide the meta if we have already shown it on the words tab
            meta: (null === result || void 0 === result ? void 0 : result.words) ? void 0 : options.meta
          }
        }));
        break;

       case "words":
        contentContainer.append(renderWordEntries({
          entries: resultToShow.data,
          matchLen: resultToShow.matchLen,
          more: resultToShow.more,
          namePreview: result.namePreview,
          options,
          title: result.title
        }));
        if (options.showMouseOnboarding) contentContainer.append(renderMouseOnboarding({
          onDismiss: options.onDismissMouseOnboarding
        }));
        break;

       default:
        {
          if (!options.meta) return null;
          const metadata = renderMetadata({
            fxData: options.fxData,
            isCombinedResult: false,
            matchLen: 0,
            meta: options.meta
          });
          if (!metadata) return null;
          metadata.classList.add("-metaonly");
          contentContainer.append(html("div", {
            class: "wordlist entry-data"
          }, metadata));
        }
        break;
      }
      // Render the copy overlay if needed
            if (showOverlay(options.copyState)) {
        contentContainer.append(html("div", {
          class: "grid-stack"
        }, 
        // Dictionary content
        html("div", {}, ...contentContainer.children), renderCopyOverlay({
          copyState: options.copyState,
          kanjiReferences: options.kanjiReferences,
          onCancelCopy: options.onCancelCopy,
          onCopy: options.onCopy,
          result: resultToShow ? result : void 0,
          series: options.dictToShow,
          showKanjiComponents: options.showKanjiComponents
        })));
        // Set the overlay styles for the window, but wait a moment so we can
        // transition the styles in.
                requestAnimationFrame((() => windowElem.classList.add("-has-overlay")));
      }
      // Set copy styles
            switch (options.copyState.kind) {
       case "active":
        windowElem.classList.add("-copy-active");
        break;

       case "error":
        windowElem.classList.add("-copy-error");
        break;

       case "finished":
        windowElem.classList.add("-copy-finished");
        break;
      }
      // Generate status bar contents
            const copyDetails = renderCopyDetails({
        copyNextKey: options.copyNextKey,
        copyState: options.copyState,
        series: (null === resultToShow || void 0 === resultToShow ? void 0 : resultToShow.type) || "words"
      });
      let statusBar = null;
      if (copyDetails) statusBar = copyDetails; else if (hasResult && "db-updating" === (null === result || void 0 === result ? void 0 : result.resultType)) statusBar = renderUpdatingStatus();
      let contentWrapper = contentContainer;
      if (statusBar) contentWrapper = html("div", {
        class: "status-bar-wrapper"
      }, contentContainer, statusBar);
      if (!showTabs && options.onClosePopup) windowElem.append(html("div", {
        class: "close-button-wrapper"
      }, contentWrapper, renderCloseButton(options.onClosePopup, options.closeShortcuts || []))); else windowElem.append(contentWrapper);
      return container;
    }
    function getDefaultContainer() {
      return getOrCreateEmptyContainer({
        id: "tenten-ja-window",
        styles: popup /* default.toString */ .Z.toString(),
        // Make sure the popup container appears _before_ the puck container so that
        // we can assign them the same z-index and have the puck appear on top.
        before: LookupPuck.id,
        legacyIds: [ "rikaichamp-window" ]
      });
    }
    function resetContainer({host, displayMode, popupStyle}) {
      const container = html("div", {
        class: "container"
      });
      const windowDiv = html("div", {
        class: "window"
      });
      container.append(windowDiv);
      // Set initial and interactive status
            container.classList.toggle("ghost", "ghost" === displayMode);
      container.classList.toggle("interactive", "static" !== displayMode);
      container.classList.toggle("pinned", "pinned" === displayMode);
      // Set theme
            windowDiv.classList.add(getThemeClass(popupStyle));
      if (host.shadowRoot) host.shadowRoot.append(container); else host.append(container);
      // Reset the container position and size so that we can consistently measure
      // the size of the popup.
            host.style.removeProperty("--left");
      host.style.removeProperty("--top");
      host.style.removeProperty("--max-width");
      host.style.removeProperty("--max-height");
      return windowDiv;
    }
    function isPopupVisible() {
      const popupContainer = getPopupContainer();
      return !!popupContainer && !popupContainer.classList.contains("hidden");
    }
    function hidePopup() {
      var _a;
      null === (_a = getPopupContainer()) || void 0 === _a ? void 0 : _a.classList.add("hidden");
    }
    function getPopupContainer() {
      const hostElem = document.getElementById("tenten-ja-window");
      return hostElem && hostElem.shadowRoot ? hostElem.shadowRoot.querySelector(".container") : null;
    }
    function removePopup() {
      removeContentContainer([ "rikaichamp-window", "tenten-ja-window" ]);
    }
    function setPopupStyle(style) {
      const elems = [ getPopupWindow(), getPopupArrow() ];
      for (const elem of elems) {
        if (!elem) continue;
        for (const className of elem.classList.values()) if (className.startsWith("theme-")) elem.classList.remove(className);
        elem.classList.add(getThemeClass(style));
      }
    }
    function getPopupWindow() {
      const hostElem = document.getElementById("tenten-ja-window");
      return hostElem && hostElem.shadowRoot ? hostElem.shadowRoot.querySelector(".window") : null;
    }
    function getPopupDimensions(hostElem) {
      var _a;
      // Measure the size of the inner window so that we don't include the padding
      // for the shadow
            const windowElem = null === (_a = hostElem.shadowRoot) || void 0 === _a ? void 0 : _a.querySelector(".window");
      const width = (windowElem instanceof HTMLElement ? windowElem.offsetWidth : 0) || 200;
      const height = windowElem instanceof HTMLElement ? windowElem.offsetHeight : 0;
      return {
        width,
        height
      };
    }
    function isPopupWindowHostElem(target) {
      return target instanceof HTMLElement && "tenten-ja-window" === target.id;
    }
    function showOverlay(copyState) {
      return ("active" === copyState.kind || "error" === copyState.kind) && ("touch" === copyState.mode || "mouse" === copyState.mode);
    }
    function renderPopupArrow(options) {
      const popupContainer = getPopupContainer();
      if (!popupContainer) return;
      // Check for cases where the popup overlaps the target element
            const {popupPos, popupSize, target} = options;
      if ("vertical" === options.direction) {
        if ("before" === options.side && popupPos.y + popupSize.height > target.y) return; else if ("after" === options.side && popupPos.y < target.y) return;
      } else if ("before" === options.side && popupPos.x + popupSize.width > target.x) return; else if ("after" === options.side && popupPos.x < target.x) return;
      renderArrow({
        ...options,
        popupContainer,
        target
      });
    }
    function getPopupArrow() {
      const hostElem = document.getElementById("tenten-ja-window");
      return hostElem && hostElem.shadowRoot ? hostElem.shadowRoot.querySelector(".arrow") : null;
    }
    // CONCATENATED MODULE: ./src/content/popup/copy-state.ts
    // Convenience method to extract the mode
    function getCopyMode(state) {
      return "inactive" !== state.kind ? state.mode : "n/a";
    }
    // CONCATENATED MODULE: ./src/content/scroll-offset.ts
    function getScrollOffset() {
      // If we're in full screen mode, we should use the scroll position of the
      // full-screen element (which is always zero?).
      if (document.fullscreenElement) return {
        scrollX: document.fullscreenElement.scrollLeft,
        scrollY: document.fullscreenElement.scrollTop
      };
      const {scrollX, scrollY} = document.defaultView;
      return {
        scrollX,
        scrollY
      };
    }
    function toPageCoords(screen, scrollOffset) {
      const {scrollX, scrollY} = scrollOffset || getScrollOffset();
      // The following is a mess because Typescript doesn't do narrow for generics
      // yet: https://github.com/microsoft/TypeScript/issues/33014
            if (isPoint(screen)) return {
        x: screen.x + scrollX,
        y: screen.y + scrollY
      }; else return {
        left: screen.left + scrollX,
        top: screen.top + scrollY,
        width: screen.width,
        height: screen.height
      };
    }
    function toScreenCoords(page, scrollOffset) {
      const {scrollX, scrollY} = scrollOffset || getScrollOffset();
      if (isPoint(page)) return {
        x: page.x - scrollX,
        y: page.y - scrollY
      }; else return {
        left: page.left - scrollX,
        top: page.top - scrollY,
        width: page.width,
        height: page.height
      };
    }
    function isPoint(pointOrRect) {
      // Sometimes we get Rect-like things that have an 'x' and 'y' member on them
      // so it's better to test the input is _not_ a rect.
      return "number" !== typeof pointOrRect.width;
    }
    // CONCATENATED MODULE: ./src/content/popup-position.ts
    // Minimum space to leave between the edge of the pop-up and the edge of the
    // stage.
    const GUTTER = 5;
    // Minimum space to leave between the edge of the pop-up and the cursor when in
    // interactive mode.
    
    // We don't want this value to be too large or else it becomes too hard to move
    // the mouse over the popup.
        const INTERACTIVE_MARGIN_TO_POPUP = 10;
    // Minimum space to leave between the edge of the pop-up and the cursor when we
    // are NOT in interactive mode. In future we'd probably like to make this the
    // same value as INTERACTIVE_MARGIN_TO_POPUP but for now it's safest to keep
    // things as they are.
        const NON_INTERACTIVE_MARGIN_TO_POPUP = 25;
    function getPopupPosition({cursorClearance, cursorPos, fixedPosition, interactive, isVerticalText, popupSize, positionMode, safeArea: initialSafeArea, pointerType}) {
      var _a;
      const {scrollX, scrollY} = getScrollOffset();
      // Use the clientWidth (as opposed to doc.defaultView.innerWidth) since this
      // excludes the width of any scrollbars.
            const stageWidth = document.documentElement.clientWidth;
      // For the height, we'd like to similarly use clientHeight...
            let stageHeight = document.documentElement.clientHeight;
      // ... but we need to be careful because:
      
      // (a) in quirks mode, the body has the viewport height;
            if ("BackCompat" === document.compatMode) stageHeight = (null === (_a = document.body) || void 0 === _a ? void 0 : _a.clientHeight) || document.defaultView.innerHeight;
      // (b) at least in iOS 15 Safari, the safe area appears to be measured from
      // the innerHeight so if we have a non-zero vertical safe area inset, we
      // should use the innerHeight instead.
            if (0 !== initialSafeArea.top || 0 !== initialSafeArea.bottom) stageHeight = document.defaultView.innerHeight;
      // Now that we have finished detecting the absence/presence of a vertical safe
      // area, merge our gutter into the safe area.
            const safeArea = {
        left: initialSafeArea.left + GUTTER,
        right: initialSafeArea.right + GUTTER,
        top: initialSafeArea.top + GUTTER,
        bottom: initialSafeArea.bottom + GUTTER
      };
      if (fixedPosition) return getFixedPosition({
        cursorClearance,
        cursorPos,
        fixedPosition,
        interactive,
        popupSize,
        safeArea,
        scrollX,
        scrollY,
        stageWidth,
        stageHeight
      });
      if (1 /* PopupPositionMode.Auto */ === positionMode) return getAutoPosition({
        cursorClearance,
        cursorPos,
        interactive,
        isVerticalText,
        popupSize,
        safeArea,
        scrollX,
        scrollY,
        stageWidth,
        stageHeight,
        pointerType
      });
      const availableStageHeight = stageHeight - (safeArea.top + safeArea.bottom);
      const left = scrollX + safeArea.left;
      const top = scrollY + safeArea.top;
      const right = scrollX + stageWidth - popupSize.width - safeArea.right;
      const bottom = scrollY + stageHeight - Math.min(popupSize.height, availableStageHeight) - safeArea.bottom;
      // We could calculate a value for constrainHeight as something like:
      
      //   constrainHeight = popupSize.height > availableWindowHeight
      //                     ? availableWindowHeight
      //                     : null;
      
      // and we'd get the nice fade effect to show in that case, but it's probably
      // more useful to NOT constrain it and let the user scroll if the content
      // overflows the viewport.
            switch (positionMode) {
       case 0 /* PopupPositionMode.TopLeft */ :
        return {
          x: left,
          y: top,
          constrainWidth: null,
          constrainHeight: null,
          direction: "disjoint",
          side: "disjoint"
        };

       case 2 /* PopupPositionMode.BottomRight */ :
        return {
          x: right,
          y: bottom,
          constrainWidth: null,
          constrainHeight: null,
          direction: "disjoint",
          side: "disjoint"
        };
      }
    }
    function getFixedPosition({cursorClearance, cursorPos, fixedPosition, interactive, popupSize, safeArea, scrollX, scrollY, stageWidth, stageHeight}) {
      // Work out our safe area in screen coordinates (as opposed to an inset).
      let {left: safeLeft, top: safeTop} = safeArea;
      let safeRight = stageWidth - safeArea.right;
      let safeBottom = stageHeight - safeArea.bottom;
      // Convert inputs to screen coordinates
            const screenY = fixedPosition.y - scrollY;
      let screenX = fixedPosition.x - scrollX;
      // See if we can further constrain the area to place the popup in based on
      // the text being highlighted.
            const {direction, anchor, side} = fixedPosition;
      if ("disjoint" !== direction && "disjoint" !== side && cursorPos) {
        const [min, max] = getRangeForPopup({
          axis: direction,
          cursorClearance,
          interactive,
          side,
          safeBoundaries: {
            safeLeft,
            safeRight,
            safeTop,
            safeBottom
          },
          target: cursorPos
        });
        if ("vertical" === direction) safeBottom = max; else {
          safeLeft = min;
          safeRight = max;
        }
      }
      // Work out if we need to constrain the height
      
      // In order to be consistent with getAutoPosition, we don't constrain the
      // height when we are not interactive
            const constrainHeight = interactive && screenY + popupSize.height > safeBottom ? safeBottom - screenY : null;
      // The x position and width will depend on if we are anchoring to the left or
      // right.
            let constrainWidth;
      if ("right" !== anchor) constrainWidth = screenX + popupSize.width > safeRight ? safeRight - screenX : null; else {
        constrainWidth = screenX - popupSize.width < safeLeft ? screenX - safeLeft : null;
        screenX = null !== constrainWidth ? screenX - constrainWidth : screenX - popupSize.width;
      }
      return {
        x: screenX + scrollX,
        y: screenY + scrollY,
        constrainWidth,
        constrainHeight,
        direction,
        side
      };
    }
    function getAutoPosition({cursorClearance, cursorPos, interactive, isVerticalText, popupSize, safeArea, scrollX, scrollY, stageWidth, stageHeight, pointerType}) {
      const extendedPosition = getScreenAutoPosition({
        cursorClearance,
        cursorPos,
        interactive,
        isVerticalText,
        popupSize,
        safeArea,
        stageWidth,
        stageHeight,
        pointerType
      });
      return extendedPosition ? {
        ...extendedPosition.position,
        x: extendedPosition.position.x + scrollX,
        y: extendedPosition.position.y + scrollY,
        // When in interactive mode, the user can scroll the popup so we can
        // constrain the height.
        // Otherwise, we the typically allow the popup to overflow the viewport
        // and let the user use their mouse wheel to see the rest of the
        // popup (i.e. we remove any constraint on the height).
        // However, if we're positioning the popup vertically _above_ the target
        // text, we don't want it to cover the text so we should constrain it in
        // that case too.
        constrainHeight: interactive || "horizontal" === extendedPosition.axis || "before" === extendedPosition.side ? extendedPosition.position.constrainHeight : null
      } : {
        x: scrollX,
        y: scrollY,
        constrainWidth: null,
        constrainHeight: null,
        direction: "disjoint",
        side: "disjoint"
      };
    }
    function getScreenAutoPosition({cursorClearance, cursorPos, interactive, isVerticalText, popupSize, safeArea, stageWidth, stageHeight, pointerType}) {
      // Set up a few useful variables...
      const x = (null === cursorPos || void 0 === cursorPos ? void 0 : cursorPos.x) || 0;
      const y = (null === cursorPos || void 0 === cursorPos ? void 0 : cursorPos.y) || 0;
      const {left: safeLeft, top: safeTop} = safeArea;
      const safeRight = stageWidth - safeArea.right;
      const safeBottom = stageHeight - safeArea.bottom;
      // Generate the possible position sizes in order of preference.
      
      // We prefer positions in the block direction on the 'after' side unless we
      // are looking up horizontal text with the puck, in which case we prefer the
      // 'before' side (i.e. above the target text).
      // Prefer the block direction
            const axisOrder = isVerticalText ? [ "horizontal", "vertical" ] : [ "vertical", "horizontal" ];
      // Prefer the 'after' side
            const sides = [ "after", "before" ];
      // Store the possible layouts
            const candidates = [];
      for (const axis of axisOrder) {
        // Prefer the 'before' side when we are looking up horizontal text with the
        // puck.
        const swapSides = "puck" === pointerType && "vertical" === axis;
        for (const side of swapSides ? sides.slice().reverse() : sides) {
          const position = calculatePosition({
            axis,
            cursorClearance,
            interactive,
            popupSize,
            safeBoundaries: {
              safeLeft,
              safeRight,
              safeTop,
              safeBottom
            },
            target: {
              x,
              y
            },
            side
          });
          candidates.push(position ? {
            axis,
            side,
            position
          } : void 0);
        }
      }
      // See if we have an unconstrained position in the block direction, and if so,
      // use that.
            const blockCandidates = candidates.slice(0, 2);
      const blockPosition = blockCandidates.find((candidate => candidate && null === (isVerticalText ? candidate.position.constrainWidth : candidate.position.constrainHeight)));
      if (blockPosition) return blockPosition;
      // Beyond that, our behavior depends on the sort of screen we're dealing with.
      
      // There are two modes:
      
      // A) In the general case, we want to stick to one of the block direction
      //    positions so we need to work out which direction is _less_ constrained.
      
      // B) However, if the user is on a small screen which has more room in the
      //    inline direction (i.e. it's in "landscape mode" as far as the block
      //    direction is concerned) then putting the popup to the side could be
      //    quite helpful so we should check all the possible positions.
            if (!isSmallLandscapeScreen({
        isVerticalText,
        safeBoundaries: {
          safeLeft,
          safeRight,
          safeTop,
          safeBottom
        }
      })) {
        const bestBlockPosition = blockCandidates.sort(sizeComparator(popupSize))[0];
        if (bestBlockPosition) return bestBlockPosition;
      }
      // Otherwise, use the layout with the greatest width/area.
            return candidates.sort(sizeComparator(popupSize))[0];
    }
    function calculatePosition({axis, cursorClearance, interactive, popupSize, safeBoundaries: {safeLeft, safeRight, safeTop, safeBottom}, side, target}) {
      // Cross-axis position
      // (e.g. horizontal position when we are laying the popup out on the vertical
      // axis).
      // We want the popup to actually be positioned slight "before" the target
      // position so that if we are showing an arrow from the popup to the target
      // position there is enough slack to position the arrow inside the popup and
      // still have it line up with the target.
      // Graphically,
      //    x <-- target
      //  ╭^─────╮
      //   ⏟
      //   Cross offset
      // At minimum we want to push the popup "back" by the width of the popup
      // rounding and half the width of the arrow.
      // We _could_ fetch those values from computed style but we'd rather avoid
      // adding even more layout flushes so we just fudge it.
      // At the time of writing the rounding is 5px and the arrow width is 20px, or
      // actually 28px if you add in the margin we allow for the shadow.
      // That would give us an offset of 5px + 28px / 2 = 19px so we just use 20px
      // to allow us some leeway if those values change marginally.
      const CROSS_OFFSET = 20;
      const idealCrossPos = "vertical" === axis ? target.x - CROSS_OFFSET : target.y - CROSS_OFFSET;
      const crossPopupSize = "vertical" === axis ? popupSize.width : popupSize.height;
      const maxCrossExtent = "vertical" === axis ? safeRight : safeBottom;
      const minCrossExtent = "vertical" === axis ? safeLeft : safeTop;
      const crossPos = idealCrossPos + crossPopupSize > maxCrossExtent ? Math.max(minCrossExtent, maxCrossExtent - crossPopupSize) : idealCrossPos;
      const constrainCrossExtent = crossPos + crossPopupSize > maxCrossExtent ? maxCrossExtent - crossPos : null;
      // Axis position
      
      // (e.g. vertical position when we are laying the popup out on the vertical
      // axis).
            const [axisMin, axisMax] = getRangeForPopup({
        axis,
        cursorClearance,
        interactive,
        side,
        safeBoundaries: {
          safeLeft,
          safeRight,
          safeTop,
          safeBottom
        },
        target
      });
      const axisPopupSize = "vertical" === axis ? popupSize.height : popupSize.width;
      let axisPos;
      if ("before" === side) {
        axisPos = Math.max(axisMin, axisMax - axisPopupSize);
        if (axisPos >= axisMax) return;
      } else {
        axisPos = axisMin;
        if (axisPos >= axisMax) return;
      }
      const constrainAxisExtent = axisPos + axisPopupSize > axisMax ? axisMax - axisPos : null;
      return "vertical" === axis ? {
        x: crossPos,
        y: axisPos,
        constrainWidth: constrainCrossExtent,
        constrainHeight: constrainAxisExtent,
        direction: axis,
        side
      } : {
        x: axisPos,
        y: crossPos,
        constrainWidth: constrainAxisExtent,
        constrainHeight: constrainCrossExtent,
        direction: axis,
        side
      };
    }
    function getRangeForPopup({axis, cursorClearance, interactive, side, safeBoundaries: {safeLeft, safeRight, safeTop, safeBottom}, target}) {
      const targetAxisPos = "vertical" === axis ? target.y : target.x;
      const marginToPopup = interactive ? INTERACTIVE_MARGIN_TO_POPUP : NON_INTERACTIVE_MARGIN_TO_POPUP;
      let minAxisExtent;
      let maxAxisExtent;
      if ("before" === side) {
        minAxisExtent = "vertical" === axis ? safeTop : safeLeft;
        const clearanceAtFarEdge = "vertical" === axis ? cursorClearance.top : cursorClearance.left;
        const marginAtFarEdge = clearanceAtFarEdge + marginToPopup;
        maxAxisExtent = targetAxisPos - marginAtFarEdge;
      } else {
        const clearanceAtNearEdge = "vertical" === axis ? cursorClearance.bottom : cursorClearance.right;
        const marginAtNearEdge = clearanceAtNearEdge + marginToPopup;
        minAxisExtent = targetAxisPos + marginAtNearEdge;
        maxAxisExtent = "vertical" === axis ? safeBottom : safeRight;
      }
      return [ minAxisExtent, maxAxisExtent ];
    }
    function isSmallLandscapeScreen({isVerticalText, safeBoundaries: {safeLeft, safeRight, safeTop, safeBottom}}) {
      const verticalRange = safeBottom - safeTop;
      const horizontalRange = safeRight - safeLeft;
      const [blockRange, inlineRange] = isVerticalText ? [ horizontalRange, verticalRange ] : [ verticalRange, horizontalRange ];
      const isLandscape = inlineRange > blockRange;
      const isSmallScreen = blockRange < 500;
      return isLandscape && isSmallScreen;
    }
    function sizeComparator(popupSize) {
      return (a, b) => {
        var _a, _b, _c, _d;
        // Sort undefined entries last
                if (!b) return 0;
        if (!a) return 1;
        const widthA = null !== (_a = a.position.constrainWidth) && void 0 !== _a ? _a : popupSize.width;
        const heightA = null !== (_b = a.position.constrainHeight) && void 0 !== _b ? _b : popupSize.height;
        const areaA = widthA * heightA;
        const widthB = null !== (_c = b.position.constrainWidth) && void 0 !== _c ? _c : popupSize.width;
        const heightB = null !== (_d = b.position.constrainHeight) && void 0 !== _d ? _d : popupSize.height;
        const areaB = widthB * heightB;
        if (widthA === widthB) return areaB - areaA;
        // Prefer wider results wherever possible, as it's okay to lose a few entries
        // from the bottom of the popup, but disastrous for all the entries to be
        // clipped off on the right.
                return widthB - widthA;
      };
    }
    // CONCATENATED MODULE: ./src/content/query.ts
    let queryCache = [];
    async function query(text, options) {
      // Add a very very basic cache
      const key = getCacheKey({
        ...options,
        text
      });
      // You'd think we'd use an actual hashmap (object) here but then we'd need to
      // work out some sort of LRU scheme for removing entries. While there are
      // plenty of libraries for that and we even use one such in the background
      // script, this code is part of the content script which goes into every page
      // so we try to keep it lean.
      
      // As a result, we limit our cache size to 10 entries and just do a linear
      // search of the array.
            const cachedEntry = queryCache.find((q => q.key === key));
      if (cachedEntry) switch (cachedEntry.state) {
       case "searching":
        void cachedEntry.fullQuery.then((result => {
          options.updateQueryResult(result);
        }));
        return cachedEntry.wordsQuery;

       case "complete":
        return cachedEntry.result;
      }
      // Limit the cache to 10 entries. This cache is really just here for the case
      // when the user is moving the cursor back and forward along a word and
      // therefore running the same query multiple times.
            if (queryCache.length > 10) queryCache.shift();
      // If the query throws, comes back empty, or is a result from the fallback
      // database, drop it from the cache.
            const rawWordsQuery = queryWords(text, options);
      const fullQuery = queryOther(text, options, rawWordsQuery).then((result => {
        // Update the cache accordingly
        if (!result || "aborted" === result) {
          queryCache = queryCache.filter((q => q.key !== key));
          return null;
        } else if ("full" === result.resultType) {
          const cacheIndex = queryCache.findIndex((q => q.key === key));
          if (-1 !== cacheIndex) queryCache[cacheIndex] = {
            key,
            state: "complete",
            result
          };
        } else queryCache = queryCache.filter((q => q.key !== key));
        return result;
      })).catch((() => {
        queryCache = queryCache.filter((q => q.key !== key));
        return null;
      }));
      // The rawWordsQuery can return the 'aborted' value or an object with a
      // null `words` property (so we can read its dbStatus property) so that the
      // queryOther knows not to proceed, but we should simplify the result before
      // returning it to the caller.
            const wordsQuery = rawWordsQuery.then((result => "aborted" === result || !(null === result || void 0 === result ? void 0 : result.words) ? null : result));
      queryCache.push({
        key,
        state: "searching",
        wordsQuery,
        fullQuery
      });
      void fullQuery.then((result => options.updateQueryResult(result)));
      return wordsQuery;
    }
    async function queryWords(text, options) {
      const message = {
        type: options.wordLookup ? "searchWords" : "translate",
        input: text,
        includeRomaji: options.includeRomaji
      };
      let searchResult;
      try {
        searchResult = await lib.browser.runtime.sendMessage(message);
      } catch (e) {
        console.error("[10ten-ja-reader] Failed to call query. The page might need to be refreshed.", e);
        searchResult = null;
      }
      if (!searchResult || "aborted" === searchResult) return searchResult;
      // Convert the result into a suitably shaped QueryResult
            let queryResult;
      let resultType = "initial";
      const {dbStatus} = searchResult;
      if ("unavailable" === dbStatus) resultType = "db-unavailable"; else if ("updating" === dbStatus) resultType = "db-updating";
      if (isTranslateResult(searchResult)) {
        let title = text.substr(0, searchResult.textLen);
        if (text.length > searchResult.textLen) title += "...";
        queryResult = {
          words: {
            ...stripFields(searchResult, [ "dbStatus", "textLen" ]),
            type: "words",
            matchLen: searchResult.textLen
          },
          title,
          resultType
        };
      } else queryResult = {
        ...stripFields(searchResult, [ "dbStatus" ]),
        resultType
      };
      return queryResult;
    }
    function isTranslateResult(result) {
      return "translate" === result.type;
    }
    async function queryOther(text, options, wordsQuery) {
      var _a;
      const words = await wordsQuery;
      if ("aborted" === words) return "aborted";
      if (null === words || void 0 === words ? void 0 : words.resultType.startsWith("db-")) return words;
      const message = {
        type: "searchOther",
        input: text,
        includeRomaji: options.includeRomaji
      };
      let searchResult;
      try {
        searchResult = await lib.browser.runtime.sendMessage(message);
      } catch (e) {
        console.error("[10ten-ja-reader] Failed to call searchOther. The page might need to be refreshed.", e);
        searchResult = null;
      }
      if (!searchResult) 
      // If the words query was empty too, make sure the final result is null.
      return (null === words || void 0 === words ? void 0 : words.words) ? words : null;
      if ("aborted" === searchResult) return searchResult;
      return addNamePreview({
        words: null !== (_a = null === words || void 0 === words ? void 0 : words.words) && void 0 !== _a ? _a : null,
        names: searchResult.names,
        kanji: searchResult.kanji,
        resultType: "full"
      });
    }
    function addNamePreview(result) {
      if (!result.words || !result.names) return result;
      // If we have a word result, check for a longer match in the names dictionary,
      // but only if the existing match has some non-hiragana characters in it.
      
      // The names dictionary contains mostly entries with at least some kanji or
      // katakana but it also contains entries that are solely hiragana (e.g.  はなこ
      // without any corresponding kanji). Generally we only want to show a name
      // preview if it matches on some kanji or katakana as otherwise it's likely to
      // be a false positive.
      
      // While it might seem like it would be enough to check if the existing match
      // from the words dictionary is hiragana-only, we can get cases where a longer
      // match in the names dictionary _starts_ with hiragana but has kanji/katakana
      // later, e.g. ほとけ沢.
            const names = [];
      let more = false;
      // Add up to three results provided that:
      
      // - they have a kanji reading or katakana reading,
      // - and are all are as long as the longest names match,
      // - are all longer than the longest words match
            const minLength = Math.max(result.names.matchLen, result.words.matchLen + 1);
      for (const name of result.names.data) {
        // Names should be in descending order of length so if any of them is less
        // than the minimum length, we can skip the rest.
        if (name.matchLen < minLength) break;
        if (!name.k && !name.r.some(hasKatakana)) continue;
        if (names.length > 2) {
          more = true;
          break;
        }
        names.push(name);
      }
      if (!names.length) return result;
      // If we got a match, extend the matchLen of the words result.
      
      // Reaching into the words result like this is cheating a little bit but it
      // simplifies the places where we use the word result.
            const matchLen = names[0].matchLen;
      return {
        ...result,
        words: {
          ...result.words,
          matchLen
        },
        namePreview: {
          names,
          more
        }
      };
    }
    function getCacheKey({text, includeRomaji, wordLookup}) {
      return [ text, includeRomaji ? "1" : "0", wordLookup ? "1" : "0" ].join("-");
    }
    // EXTERNAL MODULE: ./css/safe-area-provider.css
        var safe_area_provider = __webpack_require__(71);
    // CONCATENATED MODULE: ./src/content/safe-area-provider.ts
    class SafeAreaProvider {
      constructor() {
        this.cachedSafeArea = null;
        this.listeners = [];
        this.onResizeObserved = entries => {
          for (const entry of entries) if (entry.contentRect) {
            // contentRect has changed, so invalidate our cached safe area insets.
            this.setCachedSafeArea(null);
            break;
          }
        };
        this.onWindowResize = () => {
          this.setCachedSafeArea(null);
        };
      }
      getSafeArea() {
        const safeAreaElem = this.element || this.startListening();
        if (this.cachedSafeArea) return this.cachedSafeArea;
        const computedStyle = getComputedStyle(safeAreaElem);
        const safeArea = {
          top: parseFloat(computedStyle.getPropertyValue("--tenten-safe-area-inset-top")) || 0,
          right: parseFloat(computedStyle.getPropertyValue("--tenten-safe-area-inset-right")) || 0,
          bottom: parseFloat(computedStyle.getPropertyValue("--tenten-safe-area-inset-bottom")) || 0,
          left: parseFloat(computedStyle.getPropertyValue("--tenten-safe-area-inset-left")) || 0
        };
        this.setCachedSafeArea(safeArea);
        return safeArea;
      }
      destroy() {
        this.stopListening();
      }
      // Listeners
      addEventListener(listener) {
        if (this.listeners.includes(listener)) return;
        this.listeners.push(listener);
      }
      removeEventListener(listener) {
        this.listeners = this.listeners.filter((l => l !== listener));
      }
      // Implementation helpers
      startListening() {
        // Set up shadow tree
        const container = getOrCreateEmptyContainer({
          id: SafeAreaProvider.id,
          styles: safe_area_provider /* default.toString */ .Z.toString()
        });
        // Create safe area provider element
                this.element = document.createElement("div");
        this.element.classList.add("safe-area-provider");
        container.shadowRoot.append(this.element);
        // Listen for changes
                if ("ResizeObserver" in window) {
          // Ideally use ResizeObserver, as it fires updates even whilst the puck
          // is being dragged.
          this.resizeObserver = new ResizeObserver(this.onResizeObserved);
          this.resizeObserver.observe(this.element, {
            box: "border-box"
          });
        } else 
        // Otherwise, fall back to using window "resize" events.
        window.addEventListener("resize", this.onWindowResize);
        return this.element;
      }
      stopListening() {
        // Stop listening
        if (this.resizeObserver) {
          if (this.element) this.resizeObserver.unobserve(this.element);
          this.resizeObserver = void 0;
        } else window.removeEventListener("resize", this.onWindowResize);
        // Drop the element
                removeSafeAreaProvider();
        this.element = void 0;
      }
      setCachedSafeArea(safeArea) {
        this.cachedSafeArea = safeArea;
        this.notifyListeners(safeArea);
      }
      notifyListeners(safeArea) {
        const listenersCopy = [ ...this.listeners ];
        for (const listener of listenersCopy) listener(safeArea);
      }
    }
    SafeAreaProvider.id = "tenten-safe-area-provider";
    // We expose this separately so that when the extension is upgraded, we can
    // clear up any artifacts left behind by the previous version.
        function removeSafeAreaProvider() {
      removeContentContainer(SafeAreaProvider.id);
    }
    // CONCATENATED MODULE: ./src/content/target-props.ts
    // Guaranteed to be arranged in ascending order
    const textBoxSizeLengths = [ 1, 4, 8, 12, 16 ];
    function getPageTargetProps({fromPuck, fromTouch, target, textRange}) {
      var _a;
      let textBoxSizes;
      if (textRange) {
        textBoxSizes = getInitialClientBboxofTextSelection(textRange);
        // Return as page coordinates
                if (textBoxSizes) {
          const scrollOffset = getScrollOffset();
          for (const size of textBoxSizeLengths) textBoxSizes[size] = toPageCoords(textBoxSizes[size], scrollOffset);
        }
      }
      return {
        contentType: getContentType(target),
        fromPuck,
        fromTouch,
        hasTitle: !!(null === (_a = target || null) || void 0 === _a ? void 0 : _a.title),
        textBoxSizes,
        isVerticalText: isVerticalText(target)
      };
    }
    function getInitialClientBboxofTextSelection(textRange) {
      // Check we actually have some text selection available
      // (We easily can't get the bbox of text selections in input elements
      // unfortunately.)
      if (!textRange.length || isTextInputNode(textRange[0].node)) return;
      // All this fiddling we do do get bboxes for Google docs spans is possibly
      // not necessary. The bboxes are mostly useful on mobile devices when we are
      // trying to position the popup to the side of the selection, but the Web
      // version of Google docs is probably not often used on mobile devices.
      
      // However, it's fairly easy to calculate these bboxes and doing so means we
      // get a more consistent vertical gutter as non-Google docs cases so for now
      // we put up with the complexity.
            const node = textRange[0].node;
      const gDocsStartSpan = isGdocsSpan(node) ? node : void 0;
      const range = gDocsStartSpan ? void 0 : node.ownerDocument.createRange();
      if (range) range.setStart(node, textRange[0].start);
      let lastEnd = -1;
      let lastSize;
      const result = {};
      for (const size of textBoxSizeLengths) {
        const end = Math.min(textRange[0].start + size, textRange[0].end);
        if (end <= lastEnd) result[size] = lastSize; else {
          if (gDocsStartSpan) result[size] = getGdocsRangeBboxes({
            startSpan: gDocsStartSpan,
            offset: textRange[0].start,
            length: end - textRange[0].start
          })[0]; else if (range) {
            range.setEnd(node, end);
            result[size] = range.getClientRects()[0];
          }
          lastEnd = end;
          lastSize = result[size];
        }
      }
      return result;
    }
    function getBestFitSize({sizes, length}) {
      // If the length is zero, it's probably best to say no size
      if (!length) return;
      // Otherwise, find the first size that is _bigger_ than the provided length.
      // And if there is none, just choose the biggest size.
            const bestFitSize = textBoxSizeLengths.slice().find((len => len > length)) || textBoxSizeLengths[textBoxSizeLengths.length - 1];
      return sizes[bestFitSize];
    }
    function selectionSizesToScreenCoords(sizes) {
      if (!sizes) return;
      const converted = {
        ...sizes
      };
      const scrollOffset = getScrollOffset();
      for (const size of textBoxSizeLengths) converted[size] = toScreenCoords(sizes[size], scrollOffset);
      return converted;
    }
    // CONCATENATED MODULE: ./src/content/text-highlighter.ts
    class TextHighlighter {
      constructor() {
        this.selectedWindow = null;
        this.selectedText = null;
        // Used to restore the selection of a textbox after we stop interacting
        // with it (since we clobber the text box selection in order to highlight it).
                this.selectedTextBox = null;
        // Gross hack to ignore our own focus events.
                this.updatingFocus = false;
        this.onFocusIn = this.onFocusIn.bind(this);
        window.addEventListener("focusin", this.onFocusIn);
      }
      detach() {
        window.removeEventListener("focusin", this.onFocusIn);
        this.clearHighlight();
        this.dropHighlightStyles();
      }
      highlight({length, textRange, style}) {
        var _a, _b;
        console.assert(textRange.length, "Should have a non-empty range");
        const selectedWindow = textRange[0].node.ownerDocument.defaultView;
        // Check that the window isn't closed
                if (!selectedWindow || selectedWindow.closed) {
          this.clearHighlight();
          return;
        }
        // Look for an existing selection.
        
        // If there is no selection, we're probably dealing with an iframe that
        // has now become display:none.
                const selection = selectedWindow.getSelection();
        if (!selection) {
          this.clearHighlight();
          return;
        }
        const canUseHighlightApi = this.canUseHighlightApi({
          textRange,
          length
        });
        // If there is already something selected in the page that is *not*
        // what we selected then generally want to leave it alone, unless of course
        // we're able to use the CSS Highlight API.
        
        // The one exception to this is if the selection is in a contenteditable
        // node. In that case we want to store and restore it to mimic the behavior
        // of textboxes.
                if (isContentEditableNode(selection.anchorNode)) {
          if (!this.previousSelection && selection.toString() !== this.selectedText) this.storeContentEditableSelection(selectedWindow);
        } else if (!canUseHighlightApi && !selection.isCollapsed && selection.toString() !== this.selectedText) {
          this.clearHighlight();
          return;
        }
        // Unconditionally clear any existing CSS highlights since we might end up
        // using regular DOM selections in some cases.
                null === (_a = null === CSS || void 0 === CSS ? void 0 : CSS.highlights) || void 0 === _a ? void 0 : _a.delete("tenten-selection");
        null === (_b = null === CSS || void 0 === CSS ? void 0 : CSS.highlights) || void 0 === _b ? void 0 : _b.delete("tenten-selection-blue");
        const startNode = textRange[0].node;
        if (isTextInputNode(startNode)) this.highlightTextBox({
          length,
          offset: textRange[0].start,
          selectedWindow,
          textBox: startNode
        }); else if (isGdocsSpan(startNode)) {
          highlightGdocsRange({
            startSpan: startNode,
            offset: textRange[0].start,
            length,
            style
          });
          this.selectedText = null;
          this.selectedWindow = selectedWindow;
        } else this.highlightRegularNode({
          canUseHighlightApi,
          length,
          selectedWindow,
          style,
          textRange
        });
      }
      // The optional `currentElement` parameter here indicates the element we are
      // currently interacting with.
      // This is only used when we have been an interacting with a text box.
      // As part of highlighting text in that text box we can cause it to scroll
      // its contents. In particular, when we _clear_ the highlight in the text box
      // we will restore its previous selection, but doing that might scroll the
      // text box. If we are still interacting with that same text box (e.g. the
      // mouse is still over the text box) then we take care not to restore its
      // scroll position.
      clearHighlight({currentElement = null} = {}) {
        var _a, _b;
        if (this.selectedWindow && !this.selectedWindow.closed) {
          // Clear the selection if it's something we made.
          const selection = this.selectedWindow.getSelection();
          if ((null === selection || void 0 === selection ? void 0 : selection.toString()) && selection.toString() === this.selectedText) if (this.previousSelection) this.restoreContentEditableSelection(); else selection.removeAllRanges();
          // Delete any highlight we may have added using the CSS Highlight API.
                    null === (_a = null === CSS || void 0 === CSS ? void 0 : CSS.highlights) || void 0 === _a ? void 0 : _a.delete("tenten-selection");
          null === (_b = null === CSS || void 0 === CSS ? void 0 : CSS.highlights) || void 0 === _b ? void 0 : _b.delete("tenten-selection-blue");
          this.dropHighlightStyles();
          // Likewise any Google docs selection
                    clearGdocsHighlight();
          this.clearTextBoxSelection(currentElement);
        }
        this.selectedWindow = null;
        this.selectedText = null;
        this.selectedTextBox = null;
        this.previousFocus = null;
        this.previousSelection = null;
      }
      isUpdatingFocus() {
        return this.updatingFocus;
      }
      storeContentEditableSelection(selectedWindow) {
        const selection = selectedWindow.getSelection();
        if (selection && isContentEditableNode(selection.anchorNode)) 
        // We don't actually store the full selection, basically because we're
        // lazy. Remembering the cursor position is hopefully good enough for
        // now anyway.
        this.previousSelection = {
          node: selection.anchorNode,
          offset: selection.anchorOffset
        }; else this.previousSelection = null;
      }
      restoreContentEditableSelection() {
        if (!this.previousSelection) return;
        const {node, offset} = this.previousSelection;
        const range = node.ownerDocument.createRange();
        range.setStart(node, offset);
        range.setEnd(node, offset);
        const selection = node.ownerDocument.defaultView.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
        this.previousSelection = null;
      }
      highlightTextBox({length, offset, selectedWindow, textBox}) {
        var _a;
        const start = offset;
        const end = start + length;
        // If we were previously interacting with a different text box, restore
        // its range.
                if (this.selectedTextBox && textBox !== this.selectedTextBox.node) this.restoreTextBoxSelection();
        // If we were not already interacting with this text box, store its
        // existing range and focus it.
                if (!this.selectedTextBox || textBox !== this.selectedTextBox.node) {
          // Record the original focus if we haven't already, so that we can
          // restore it.
          if (!this.previousFocus) this.previousFocus = document.activeElement;
          // We want to be able to distinguish between changes to focus made by
          // the user/app (which we want to reflect when we go to restore the focus)
          // and changes to focus made by us.
                    const previousUpdatingFocus = this.updatingFocus;
          this.updatingFocus = true;
          textBox.focus();
          this.updatingFocus = previousUpdatingFocus;
          this.selectedTextBox = {
            node: textBox,
            previousStart: textBox.selectionStart,
            previousEnd: textBox.selectionEnd,
            previousDirection: textBox.selectionDirection || void 0
          };
        }
        // Store the current scroll range so we can restore it.
                const {scrollTop, scrollLeft} = textBox;
        // Clear any other selection happening in the page.
                null === (_a = selectedWindow.getSelection()) || void 0 === _a ? void 0 : _a.removeAllRanges();
        textBox.setSelectionRange(start, end);
        this.selectedText = textBox.value.substring(start, end);
        this.selectedWindow = selectedWindow;
        // Restore the scroll range. We need to do this on the next tick or else
        // something else (not sure what) will clobber it.
                requestAnimationFrame((() => {
          textBox.scrollTo(scrollLeft, scrollTop);
        }));
      }
      clearTextBoxSelection(currentElement) {
        if (!this.selectedTextBox) return;
        const textBox = this.selectedTextBox.node;
        // Store the previous scroll position so we can restore it, if need be.
                const {scrollTop, scrollLeft} = textBox;
        this.restoreTextBoxSelection();
        // If we are still interacting with the text box, make sure to maintain its
        // scroll position (rather than jumping back to wherever the restored
        // selection is just because we didn't find a match).
                if (currentElement === textBox) 
        // Restore this in the next tick or else it will get clobbered.
        // (Empirically two ticks seems to work better still.)
        requestAnimationFrame((() => {
          requestAnimationFrame((() => {
            textBox.scrollTo(scrollLeft, scrollTop);
          }));
        }));
        // If we only focussed the textbox in order to highlight text, restore the
        // previous focus.
        
        // (We need to do this even if currentElement === textBox since we'll lose
        // the previous focus when we reset _selectedTextBox and we if we don't
        // restore the focus now, when we next go to set previousFocus we'll end up
        // using `textBox` instead.)
                if (isFocusable(this.previousFocus) && this.previousFocus !== textBox) {
          // First blur the text box since some Elements' focus() method does
          // nothing.
          this.selectedTextBox.node.blur();
          // Very hacky approach to filtering out our own focus handling.
                    const previousUpdatingFocus = this.updatingFocus;
          this.updatingFocus = true;
          this.previousFocus.focus();
          this.updatingFocus = previousUpdatingFocus;
        }
        this.selectedTextBox = null;
        this.previousFocus = null;
      }
      restoreTextBoxSelection() {
        if (!this.selectedTextBox) return;
        const {node: textBox, previousStart, previousEnd, previousDirection} = this.selectedTextBox;
        textBox.setSelectionRange(previousStart, previousEnd, previousDirection);
      }
      canUseHighlightApi({length, textRange}) {
        if (!(null === CSS || void 0 === CSS ? void 0 : CSS.highlights)) return false;
        // We cannot highlight SVG
                for (const {node} of new TextRangeWithLength(textRange, length)) if (isSvg(node)) return false;
        // Chrome can't do highlights properly on vertical text
        
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1360724
                if (isChromium()) for (const {node} of new TextRangeWithLength(textRange, length)) if (isVerticalText(node)) return false;
        return true;
      }
      highlightRegularNode({canUseHighlightApi, length, style, selectedWindow, textRange}) {
        // If we were previously interacting with a text box, restore its range
        // and blur it.
        this.clearTextBoxSelection(null);
        const startNode = textRange[0].node;
        const startOffset = textRange[0].start;
        let endNode = startNode;
        let endOffset = startOffset;
        for (const {node, end} of new TextRangeWithLength(textRange, length)) {
          endNode = node;
          endOffset = end;
        }
        if (canUseHighlightApi) {
          const range = new StaticRange({
            startContainer: startNode,
            startOffset,
            endContainer: endNode,
            endOffset
          });
          CSS.highlights.set("blue" === style ? "tenten-selection-blue" : "tenten-selection", new Highlight(range));
          this.ensureHighlightStyles();
          this.selectedText = null;
        } else {
          const range = startNode.ownerDocument.createRange();
          range.setStart(startNode, startOffset);
          range.setEnd(endNode, endOffset);
          // We only call this method if selectedWindow.getSelection() is not null.
                    this.updatingFocus = true;
          const selection = selectedWindow.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          this.updatingFocus = false;
          this.selectedText = selection.toString();
        }
        this.selectedWindow = selectedWindow;
      }
      onFocusIn(event) {
        if (this.updatingFocus) return;
        // Update the previous focus but only if we're already tracking the previous
        // focus.
                if (this.previousFocus && this.previousFocus !== event.target) {
          this.previousFocus = event.target instanceof Element ? event.target : null;
          // Possibly updating the selection to restore if we're working with a
          // contenteditable element.
                    if (this.previousFocus) this.storeContentEditableSelection(this.previousFocus.ownerDocument.defaultView);
        }
      }
      ensureHighlightStyles() {
        if (document.getElementById("tenten-selection-styles")) return;
        
        // These styles need to be synchronized with the preview styles in
        // options.css
        
        // Don't forget the Google Docs styles in gdocs-canvas.ts too!
        
                document.head.append(html("style", {
          id: "tenten-selection-styles"
        }, `\n::highlight(tenten-selection) {\n  background: #fff394;\n  color: #1d1a19;\n}\n::highlight(tenten-selection-blue) {\n  background: #2589ed;\n  color: white;\n}`));
      }
      dropHighlightStyles() {
        var _a;
        null === (_a = document.getElementById("tenten-selection-styles")) || void 0 === _a ? void 0 : _a.remove();
      }
    }
    // Iterator for a TextRange that enforces the supplied length
        class TextRangeWithLength {
      constructor(textRange, length) {
        this.textRange = textRange;
        this.length = length;
      }
      [Symbol.iterator]() {
        let i = 0;
        let currentLen = 0;
        return {
          next: () => {
            if (currentLen >= this.length || i >= this.textRange.length) return {
              done: true,
              value: void 0
            };
            const {start, end, node} = this.textRange[i];
            const len = Math.min(end - start, this.length - currentLen);
            currentLen += len;
            i++;
            return {
              value: {
                start,
                end: start + len,
                node
              }
            };
          }
        };
      }
    }
    // CONCATENATED MODULE: ./src/content/text-range.ts
    function textRangesEqual(a, b) {
      if (!a && !b) return true;
      if (!a || !b) return false;
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; ++i) if (a[i].node !== b[i].node || a[i].start !== b[i].start || a[i].end !== b[i].end) return false;
      return true;
    }
    // CONCATENATED MODULE: ./src/content/timer-precision.ts
    async function hasReasonableTimerResolution() {
      const waitALittle = async () => new Promise((resolve => setTimeout(resolve, 10)))
      // If performance.now() returns different times at least three out of five
      // times then we can assume that we're not doing timer clamping of the sort
      // that would confuse our speed calculations.
      ;
      const numSamples = 5;
      const samples = [];
      samples.push(performance.now());
      for (let i = 1; i < numSamples; i++) {
        await waitALittle();
        samples.push(performance.now());
      }
      const context = {
        same: 0
      };
      const {same: identicalPairs} = samples.reduce(((context, current) => ({
        same: current === context.previous ? context.same + 1 : context.same,
        previous: current
      })), context);
      return identicalPairs < 2;
    }
    // CONCATENATED MODULE: ./src/content/touch-click-tracker.ts
    class TouchClickTracker {
      constructor() {
        var _a;
        this.wasTouch = false;
        this.ignoring = false;
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onClick = this.onClick.bind(this);
        window.addEventListener("touchstart", this.onTouchStart, {
          passive: true
        });
        window.addEventListener("touchend", this.onTouchEnd, {
          passive: true
        });
        // We need to register for clicks on the _body_ because if there is no
        // click handler on the body element, iOS won't generate click events
        // from touch taps.
                null === (_a = document.body) || void 0 === _a ? void 0 : _a.addEventListener("click", this.onClick);
      }
      destroy() {
        var _a;
        window.removeEventListener("touchstart", this.onTouchStart);
        window.removeEventListener("touchend", this.onTouchEnd);
        null === (_a = document.body) || void 0 === _a ? void 0 : _a.removeEventListener("click", this.onClick);
      }
      startIgnoringClicks() {
        this.ignoring = true;
      }
      stopIgnoringClicks() {
        this.ignoring = false;
      }
      onTouchStart() {
        this.wasTouch = false;
      }
      onTouchEnd() {
        this.wasTouch = !this.ignoring;
      }
      onClick(event) {
        var _a;
        const {wasTouch} = this;
        this.wasTouch = false;
        if (wasTouch) null === (_a = this.onTouchClick) || void 0 === _a ? void 0 : _a.call(this, event);
      }
    }
    // CONCATENATED MODULE: ./src/content/keyboard.ts
    function normalizeKey(key) {
      const upperKey = key.toUpperCase();
      switch (upperKey) {
       case "ESCAPE":
        return "ESC";

       case "CONTROL":
        return "CTRL";

       case " ":
        return "SPACE";
      }
      return upperKey;
    }
    function normalizeKeys(keys) {
      return keys.map(normalizeKey);
    }
    function hasModifiers(event) {
      const key = normalizeKey(event.key);
      return event.ctrlKey && "CTRL" !== key || (event.altKey || event.getModifierState("AltGraph")) && "ALT" !== key || event.shiftKey && "SHIFT" !== key || event.metaKey && "META" !== key;
    }
    // CONCATENATED MODULE: ./src/content/content.ts
    /*

  10ten Japanese Reader
  by Brian Birtles
  https://github.com/birchill/10ten-ja-reader

  ---

  Originally based on Rikaikun
  by Erek Speed
  http://code.google.com/p/rikaikun/

  ---

  Originally based on Rikaichan 1.07
  by Jonathan Zarate
  http://www.polarcloud.com/

  ---

  Originally based on RikaiXUL 0.4 by Todd Rudick
  http://www.rikai.com/
  http://rikaixul.mozdev.org/

  ---

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

  ---

  Please do not change or remove any of the copyrights or links to web pages
  when modifying any of the files. - Jon

*/
    class ContentHandler {
      constructor(config) {
        // We keep track of the last element that was the target of a mouse move so
        // that we can popup the window later using its properties.
        this.lastMouseTarget = null;
        this.lastMouseMoveScreenPoint = {
          x: -1,
          y: -1
        };
        // Safari-only redundant mousemove event handling
        
        // See notes in `onMouseMove` for why we need to do this.
                this.ignoreNextMouseMove = false;
        this.mouseSpeedRollingSum = 0;
        this.mouseSpeeds = [];
        // We disable this feature by default and only turn it on once we've
        // established that we have a sufficiently precise timer. If
        // privacy.resistFingerprinting is enabled then the timer won't be precise
        // enough for us to test the speed of the mouse.
                this.hidePopupWhenMovingAtSpeed = false;
        // Keyboard support
                this.kanjiLookupMode = false;
        this.pinToggleState = "idle";
        // Used to try to detect when we are typing so we know when to ignore key
        // events.
                this.typingMode = false;
        // Detect touch taps so we can show the popup for them, but not for
        // regular mouse clicks.
                this.touchClickTracker = new TouchClickTracker;
        this.isEffectiveTopMostWindow = false;
        this.currentDict = "words";
        // Copy support
        
        // (copyMode is actually used by the text-handling window too to know which
        // keyboard events to handle and how to interpret them.)
                this.copyState = {
          kind: "inactive"
        };
        // Manual positioning support
                this.popupPositionMode = 1 /* PopupPositionMode.Auto */;
        // Consulted in order to determine safe area
                this.safeAreaProvider = new SafeAreaProvider;
        // Consulted in order to determine popup positioning
                this.puck = null;
        // Expose the renderPopup callback so that we can test it
                this._renderPopup = renderPopup;
        this.config = config;
        this.textHighlighter = new TextHighlighter;
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onFocusIn = this.onFocusIn.bind(this);
        this.onFullScreenChange = this.onFullScreenChange.bind(this);
        this.onInterFrameMessage = this.onInterFrameMessage.bind(this);
        this.onBackgroundMessage = this.onBackgroundMessage.bind(this);
        window.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("mousedown", this.onMouseDown);
        window.addEventListener("keydown", this.onKeyDown, {
          capture: true
        });
        window.addEventListener("keyup", this.onKeyUp, {
          capture: true
        });
        window.addEventListener("focusin", this.onFocusIn);
        window.addEventListener("fullscreenchange", this.onFullScreenChange);
        window.addEventListener("message", this.onInterFrameMessage, {
          capture: true
        });
        lib.browser.runtime.onMessage.addListener(this.onBackgroundMessage);
        this.touchClickTracker.onTouchClick = event => {
          var _a;
          // Ignore clicks on interactive elements
                    if (event.target instanceof HTMLAnchorElement || event.target instanceof HTMLButtonElement) return;
          // If the puck is showing but inactive, use that as a signal that the user
          // doesn't want to do lookups at the moment.
                    if ("inactive" === (null === (_a = this.puck) || void 0 === _a ? void 0 : _a.getEnabledState())) return;
          // We need to ensure the 'buttons' field of the event is zero since
          // normally we ignore mousemoves when the buttons are being pressed, but
          // we've decided to allow this "click".
          
          // This is, unfortunately, a little involved since:
          
          // (a) the 'buttons' member of `event` is readonly,
          // (b) the object spread operator only deals with enumerable _own_
          //     properties so we can't just spread the values from `event` into a
          //     new object, and
          // (c) we use `getModifierState` etc. on `MouseEvent` elsewhere so we
          //     actually need to generate a `MouseEvent` object rather than just a
          //     property bag.
                    const mouseMoveEvent = new MouseEvent("mousemove", {
            bubbles: true,
            screenX: event.screenX,
            screenY: event.screenY,
            clientX: event.clientX,
            clientY: event.clientY,
            ctrlKey: event.ctrlKey,
            shiftKey: event.shiftKey,
            altKey: event.altKey,
            metaKey: event.metaKey,
            button: 0,
            buttons: 0,
            relatedTarget: event.relatedTarget
          });
          mouseMoveEvent.fromTouch = true;
          (event.target || document.body).dispatchEvent(mouseMoveEvent);
        };
        void hasReasonableTimerResolution().then((isReasonable => {
          if (isReasonable) this.hidePopupWhenMovingAtSpeed = true;
        }));
        // If we are an iframe, check if the popup is currently showing
                if (!this.isTopMostWindow()) void lib.browser.runtime.sendMessage({
          type: "top:isPopupShowing"
        });
        this.applyPuckConfig();
        if ("docs.google.com" === document.location.host) injectGdocsStyles();
      }
      applyPuckConfig() {
        if (!this.isTopMostWindow()) return;
        if ("show" === this.config.showPuck) this.setUpPuck(); else this.tearDownPuck();
      }
      setUpPuck() {
        if (!this.puck) this.puck = new LookupPuck(this.safeAreaProvider, (() => {
          this.clearResult();
        }));
        this.puck.render({
          icon: this.config.toolbarIcon,
          theme: this.config.popupStyle
        });
        this.puck.setEnabledState("active");
      }
      tearDownPuck() {
        var _a;
        null === (_a = this.puck) || void 0 === _a ? void 0 : _a.unmount();
        this.puck = null;
        removePuck();
      }
      setConfig(config) {
        var _a, _b, _c, _d;
        // Update the style of the popup/puck
                if (this.config && config.popupStyle !== this.config.popupStyle) {
          setPopupStyle(config.popupStyle);
          null === (_a = this.puck) || void 0 === _a ? void 0 : _a.setTheme(config.popupStyle);
        }
        if (this.config && config.toolbarIcon !== this.config.toolbarIcon) null === (_b = this.puck) || void 0 === _b ? void 0 : _b.setIcon(config.toolbarIcon);
        const popupInteractivityChanged = !!config.popupInteractive !== !!(null === (_c = this.config) || void 0 === _c ? void 0 : _c.popupInteractive);
        const puckConfigChanged = config.showPuck !== (null === (_d = this.config) || void 0 === _d ? void 0 : _d.showPuck);
        // TODO: We should update the tab display if that value changes but we
        // actually need to regenerate the popup in that case since we only generate
        // the HTML for the tabs when tabDisplay is not 'none'.
        // TODO: We should probably check which keys have changed and regenerate
        // the pop-up if needed but currently you need to change tabs to tweak
        // the config so the popup probably won't be showing anyway.
                this.config = {
          ...config
        };
        if (popupInteractivityChanged && this.isTopMostWindow()) 
        // We can't use updatePopup here since it will try to re-use the existing
        // popup display mode but we specifically want to change it in this case
        // (but, ideally, retain the same position etc.)
        this.showPopup({
          displayMode: config.popupInteractive ? "hover" : "static",
          fixPosition: true
        });
        if (puckConfigChanged) this.applyPuckConfig();
      }
      detach() {
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("mousedown", this.onMouseDown);
        window.removeEventListener("keydown", this.onKeyDown, {
          capture: true
        });
        window.removeEventListener("keyup", this.onKeyUp, {
          capture: true
        });
        window.removeEventListener("focusin", this.onFocusIn);
        window.removeEventListener("fullscreenchange", this.onFullScreenChange);
        window.removeEventListener("message", this.onInterFrameMessage, {
          capture: true
        });
        lib.browser.runtime.onMessage.removeListener(this.onBackgroundMessage);
        this.clearResult();
        this.tearDownPuck();
        this.textHighlighter.detach();
        this.copyState = {
          kind: "inactive"
        };
        this.safeAreaProvider.destroy();
        this.touchClickTracker.destroy();
        removePopup();
        removeGdocsStyles();
      }
      setEffectiveTopMostWindow() {
        const wasTopMost = this.isTopMostWindow();
        this.isEffectiveTopMostWindow = true;
        // If we are now the top most we might now be the puck host
                if (!wasTopMost) this.applyPuckConfig();
      }
      isTopMostWindow() {
        // If a descendant of an iframe is being displayed full-screen, that iframe
        // can temporarily act as the topmost window.
        if (document.fullscreenElement) {
          if ("IFRAME" === document.fullscreenElement.tagName) return false;
          if (document.fullscreenElement.ownerDocument === document) return true;
        }
        return this.isEffectiveTopMostWindow || window.self === this.getTopMostWindow();
      }
      getTopMostWindow() {
        return this.isEffectiveTopMostWindow ? window.self : window.top || window.self;
      }
      getFrameId() {
        if ("number" === typeof this.frameId) return this.frameId;
        if ("function" === typeof lib.browser.runtime.getFrameId) {
          const frameId = lib.browser.runtime.getFrameId(window);
          if (-1 !== frameId) return frameId;
        }
        return;
      }
      setFrameId(frameId) {
        this.frameId = frameId;
      }
      onMouseMove(event) {
        var _a, _b, _c;
        this.typingMode = false;
        // Safari has an odd bug where it dispatches extra mousemove events when you
        // press any modifier key (e.g. Shift).
        
        // It goes something like this:
        
        // * Press Shift down
        // -> mousemove with shiftKey = true
        // -> keydown with shiftKey = true
        
        // * Release Shift key
        // -> mousemove with shiftKey = false
        // -> keyup with shiftKey = false
        
        // We really need to ignore these events since they will intefere with
        // detecting taps of the "pin popup" key as well as when using Shift to only
        // show kanji.
        
        // For now the best way we know of doing that is to just check if the
        // position has changed.
        
        // 2022-09-12: This is tracked as WebKit bug
        // https://bugs.webkit.org/show_bug.cgi?id=16271
        // which was apparently fixed in July 2021 but in September 2022 I can still
        // reproduce it, at least with the control key.
                if (isSafari()) {
          if ((event.shiftKey || event.altKey || event.metaKey || event.ctrlKey || this.ignoreNextMouseMove) && this.lastMouseMoveScreenPoint.x === event.clientX && this.lastMouseMoveScreenPoint.y === event.clientY) {
            // We need to ignore the mousemove event corresponding to the keyup
            // event too.
            this.ignoreNextMouseMove = !this.ignoreNextMouseMove;
            return;
          }
          this.ignoreNextMouseMove = false;
        }
        this.lastMouseMoveScreenPoint = {
          x: event.clientX,
          y: event.clientY
        };
        // If we start moving the mouse, we should stop trying to recognize a tap on
        // the "pin" key as such since it's no longer a tap (and very often these
        // keys overlap with the hold-to-show keys which are held while moving the
        // mouse).
        
        // Note that it's not enough just to check if `pinToggleState` is in the
        // 'keydown' state because it seems like sometimes browsers (at least
        // Firefox) batch up input events so that all the mousemove events arrive
        // before the keyboard events.
        
        // In order to handle that case, we need to check if the relevant key for
        // pinning are being held (and hence we are likely to get a keydown event
        // soon).
                if ("keydown" === this.pinToggleState || "idle" === this.pinToggleState && this.hasPinKeysPressed(event)) this.pinToggleState = "ignore";
        // Ignore mouse events while buttons are being pressed.
                if (event.buttons) return;
        // We don't know how to deal with anything that's not an element
                if (!(event.target instanceof Element)) return;
        // Ignore mouse moves if we are pinned
                if (!isTouchClickEvent(event) && "pinned" === (null === (_a = this.popupState) || void 0 === _a ? void 0 : _a.display.mode)) {
          this.lastMouseTarget = event.target;
          return;
        }
        // Ignore mouse events on the popup window
                if (isPopupWindowHostElem(event.target)) return;
        // Check if we have released the hold-to-show keys such that a ghosted popup
        // should be committed.
        
        // Normally we'd handle this case in onKeyUp, but it's possible, even common
        // to have the focus in a different window/frame while mousing over content.
        
        // Our window/frame will still get mousemove events with the corresponding
        // modifier key attributes set so we can _show_ the popup, but we _won't_
        // get the `keyup` event(s) when the modifier(s) are released so instead
        // we need to try and detect when that happens on the next mousemove event.
                if (!isTouchClickEvent(event) && "ghost" === (null === (_b = this.popupState) || void 0 === _b ? void 0 : _b.display.mode) && "keys" === this.popupState.display.trigger && !(this.getActiveHoldToShowKeys(event) & this.popupState.display.keyType)) {
          this.commitPopup();
          return;
        }
        // Check if any required "hold to show keys" are held.
        
        // We do this before checking throttling since that can be expensive and
        // when this is configured, typically the user will have the extension
        // more-or-less permanently enabled so we don't want to add unnecessary
        // latency to regular mouse events.
        
        // Note that the "hold to show keys" setting is only relevant for mouse
        // events, not puck events.
                const contentsToMatch = this.getActiveHoldToShowKeys(event) | (isPuckMouseEvent(event) || isTouchClickEvent(event) ? 3 /* HoldToShowKeyType.All */ : 0);
        const matchText = !!(1 /* HoldToShowKeyType.Text */ & contentsToMatch);
        const matchImages = !!(2 /* HoldToShowKeyType.Images */ & contentsToMatch);
        // If nothing is going to match, close the popup. If we're in hover mode,
        // however, we need to proceed with the regular processing to see if we are
        // hovering over the arrow area or not.
        
        // (For pinned mode and touch mode, contentsToMatch is guaranteed to be
        // non-zero. For static mode we certainly want to close the popup, and we
        // never seem to hit this case in ghost mode but presumably if we did we'd
        // want to close the popup.)
                if (!contentsToMatch && "hover" !== (null === (_c = this.popupState) || void 0 === _c ? void 0 : _c.display.mode)) {
          if (this.popupState) this.clearResult({
            currentElement: event.target
          });
          // We still want to set the current position and element information so
          // that if the user presses the hold-to-show keys later we can show the
          // popup immediately.
                    this.currentPagePoint = toPageCoords({
            x: event.clientX,
            y: event.clientY
          });
          this.lastMouseTarget = event.target;
          return;
        }
        // If the mouse have moved in a triangular shape between the original popup
        // point and the popup, don't hide it, but instead allow the user to
        // interact with the popup.
                if (this.isEnRouteToPopup(event)) return;
        // If the mouse is moving too quickly, don't show the popup
                if (this.shouldThrottlePopup(event)) {
          this.clearResult({
            currentElement: event.target
          });
          return;
        }
        let dictMode = "default";
        if (event.shiftKey && this.config.keys.kanjiLookup.includes("Shift")) {
          this.kanjiLookupMode = event.shiftKey;
          dictMode = "kanji";
        }
        // Record the last mouse target in case we need to trigger the popup
        // again.
                this.lastMouseTarget = event.target;
        void this.tryToUpdatePopup({
          fromPuck: isPuckMouseEvent(event),
          fromTouch: isTouchClickEvent(event),
          matchText,
          matchImages,
          screenPoint: {
            x: event.clientX,
            y: event.clientY
          },
          eventElement: event.target,
          dictMode
        });
      }
      isEnRouteToPopup(event) {
        var _a, _b;
        if (isPuckMouseEvent(event) || isTouchClickEvent(event)) return false;
        if ("hover" !== (null === (_a = this.popupState) || void 0 === _a ? void 0 : _a.display.mode) || !(null === (_b = this.popupState.pos) || void 0 === _b ? void 0 : _b.lookupPoint)) return false;
        const {x: popupX, y: popupY, width: popupWidth, height: popupHeight, direction, lookupPoint: {x: lookupX, y: lookupY, marginX: lookupMarginX, marginY: lookupMarginY}} = this.popupState.pos;
        // If the popup is not related to the mouse position we don't want to allow
        // mousing over it as it might require making most of the screen
        // un-scannable.
                if ("disjoint" === direction) return false;
        // Check block axis range
                const lookupBlockPos = "vertical" === direction ? lookupY : lookupX;
        // Get the closest edge of the popup edge
                const popupBlockPos = "vertical" === direction ? popupY : popupX;
        const popupBlockSize = "vertical" === direction ? popupHeight : popupWidth;
        const popupEdge = popupBlockPos >= lookupBlockPos ? popupBlockPos : popupBlockPos + popupBlockSize;
        // Work out the distance between the lookup point and the edge of the popup
                const popupDist = popupEdge - lookupBlockPos;
        // Work out the mouse distance from the lookup point
        
        // NOTE: We _don't_ want to use event.pageY/pageX since that will return the
        // wrong result when we are in full-screen mode. Instead we should manually
        // add the scroll offset in.
                const {scrollX, scrollY} = getScrollOffset();
        const mouseBlockPos = "vertical" === direction ? event.clientY + scrollY : event.clientX + scrollX;
        // Work out the portion of the distance we are in the gap between the lookup
        // point and the edge of the popup.
                const blockOffset = popupDist < 0 ? lookupBlockPos - mouseBlockPos : mouseBlockPos - lookupBlockPos;
        const blockRange = Math.abs(popupDist);
        const blockMargin = "vertical" === direction ? lookupMarginY : lookupMarginX;
        // Check if we are in the gap (or the margin)
                if (blockOffset < -blockMargin || blockOffset > blockRange) return false;
        // Check the inline range
        
        // We do this by basically drawing a triangle from the lookup point spanning
        // outwards towards the edge of the popup using the defined angle.
        
        // e.g.
        
        //                    +
        //                  /  \
        //                 / x  \
        //                /<-D-->\
        //               /        \
        //  +----------------------------------------------+
        //  |           <----B---->                        |
        //  |           ^                                  |
        //  |           C                                  |
        //  A
        
        // + = Lookup point (lookup inline position)
        // x = Mouse position
        // A = Inline popup start
        // B = Max inline range (i.e. the inline range at the edge)
        // C = Max inline range start
        // D = Proportional inline range
                const lookupInlinePos = "vertical" === direction ? lookupX : lookupY;
        const mouseInlinePos = "vertical" === direction ? event.clientX + scrollX : event.clientY + scrollY;
        const ENVELOPE_SPREAD_DEGREES = 120;
        const inlineHalfRange = Math.tan(ENVELOPE_SPREAD_DEGREES / 2 * Math.PI / 180) * blockOffset;
        const inlineMargin = "vertical" === direction ? lookupMarginX : lookupMarginY;
        const inlineRangeStart = lookupInlinePos - Math.max(inlineHalfRange, inlineMargin);
        const inlineRangeEnd = lookupInlinePos + Math.max(inlineHalfRange, inlineMargin);
        if (mouseInlinePos < inlineRangeStart || mouseInlinePos > inlineRangeEnd) return false;
        return true;
      }
      shouldThrottlePopup(event) {
        if (!this.hidePopupWhenMovingAtSpeed) return false;
        let averageSpeed = 0;
        if (this.previousMousePosition && this.previousMouseMoveTime) {
          // If the events are backed up their times might be equal. Likewise, if
          // the events are more than a couple of animation frames apart either the
          // mouse stopped, or the system is backed up and the OS can't even
          // dispatch the events.
          // In either case we should:
          // - Update the previous mouse position and time so that when we get the
          //   *next* event we can accurately measure the speed.
          // - Not throttle the popup since for some content we might always be
          //   backed up (YouTube with browser console open seems particularly bad)
          //   and its safer to just allow the popup in this case rather than risk
          //   permanently hiding it.
          if (event.timeStamp === this.previousMouseMoveTime || event.timeStamp - this.previousMouseMoveTime > 32) {
            this.previousMousePosition = {
              x: event.pageX,
              y: event.pageY
            };
            this.previousMouseMoveTime = event.timeStamp;
            return false;
          }
          const distance = Math.sqrt(Math.pow(event.pageX - this.previousMousePosition.x, 2) + Math.pow(event.pageY - this.previousMousePosition.y, 2));
          const speed = distance / (event.timeStamp - this.previousMouseMoveTime);
          this.mouseSpeeds.push(speed);
          this.mouseSpeedRollingSum += speed;
          if (this.mouseSpeeds.length > ContentHandler.MOUSE_SPEED_SAMPLES) this.mouseSpeedRollingSum -= this.mouseSpeeds.shift();
          averageSpeed = this.mouseSpeedRollingSum / this.mouseSpeeds.length;
        }
        this.previousMousePosition = {
          x: event.pageX,
          y: event.pageY
        };
        this.previousMouseMoveTime = event.timeStamp;
        return averageSpeed >= ContentHandler.MOUSE_SPEED_THRESHOLD;
      }
      onMouseDown(event) {
        // Ignore mouse events on the popup window
        if (isPopupWindowHostElem(event.target)) return;
        // Clear the highlight since it interferes with selection.
                this.clearResult({
          currentElement: event.target
        });
      }
      onKeyDown(event) {
        const textBoxInFocus = document.activeElement && isEditableNode(document.activeElement);
        // If the user pressed the hold-to-show key combination, show the popup
        // if possible.
        
        // It's important we only do this when the popup is not visible, however,
        // since these keys may overlap with the keys we've defined for pinning the
        // popup--which only apply when the popup is visible.
                const matchedHoldToShowKeys = this.isHoldToShowKeyStroke(event);
        if (matchedHoldToShowKeys && !this.isVisible()) {
          event.preventDefault();
          // We don't do this when the there is a text box in focus because we
          // we risk interfering with the text selection when, for example, the
          // hold-to-show key is Ctrl and the user presses Ctrl+V etc.
                    if (!textBoxInFocus && this.currentPagePoint && this.lastMouseTarget) void this.tryToUpdatePopup({
            fromPuck: false,
            fromTouch: false,
            matchText: !!(1 /* HoldToShowKeyType.Text */ & matchedHoldToShowKeys),
            matchImages: !!(2 /* HoldToShowKeyType.Images */ & matchedHoldToShowKeys),
            screenPoint: toScreenCoords(this.currentPagePoint),
            eventElement: this.lastMouseTarget,
            dictMode: "default"
          });
          return;
        }
        // If we got shift in combination with something else, ignore.
        
        // We need to allow shift by itself because it is used for switching
        // dictionaries. However, if the user presses, Cmd + Shift + 3, for example,
        // we should ignore the last two keystrokes.
        
        // TODO: We should refine this somehow so that it's possible to toggle
        // dictionaries using Shift while pressing the hold-to-show keys.
        
        // See https://github.com/birchill/10ten-ja-reader/issues/658
                if (event.shiftKey && (event.ctrlKey || event.altKey || event.metaKey || "Shift" !== event.key)) {
          this.typingMode = true;
          return;
        }
        // If we're not visible we should ignore any keystrokes.
                if (!this.isVisible()) {
          this.typingMode = true;
          return;
        }
        // If we're focussed on a text-editable node and in typing mode, don't try
        // to handle keystrokes. This is so that if the user has accidentally left
        // their mouse sitting over some Japanese text we don't interfere with
        // typing.
        
        // The one exception to this is Google Docs. In Google Docs when the
        // document canvas is in focus it puts the focus on a contenteditable
        // element in a 1 pixel high iframe.
        
        // Normally, whenever we see a mousemove event we will reset the
        // `typingMode` flag but becuase the iframe is only 1 pixel high, the iframe
        // will never see those mousemove events and hence `typingMode` will only
        // get cleared on the top-most document and not the iframe.
        
        // The `keydown` events, however, will go to the iframe. If we ignore them
        // because `typingMode` is true we will end up ignoring all keyboard events
        // while the canvas is in focus.
        
        // Instead we just allow these events through on Google docs and accept that
        // if the popup is showing it might interfere with typing.
                const isGoogleDocsIframe = () => {
          var _a;
          try {
            // On Firefox the iframe src is javascript:undefined which ends up
            // getting host docs.google.com, while on Chrome the iframe src is
            // about:blank which has an empty host.
            // We wrap the whole thing in try/catch because I'm paranoid about
            // cross-origin things throwing security exceptions.
            return ("docs.google.com" === document.location.host || "docs.google.com" === (null === (_a = window.top) || void 0 === _a ? void 0 : _a.location.host)) && window.frameElement;
          } catch {
            return false;
          }
        };
        if (textBoxInFocus && this.typingMode && !isGoogleDocsIframe()) return;
        if (this.handleKey(event)) {
          // We handled the key stroke so we should break out of typing mode.
          this.typingMode = false;
          event.stopPropagation();
          event.preventDefault();
        } else if (textBoxInFocus) {
          // If we are focussed on a textbox and the keystroke wasn't one we handle
          // one, enter typing mode and hide the pop-up.
          this.clearResult({
            currentElement: this.lastMouseTarget
          });
          this.typingMode = true;
        }
      }
      onKeyUp(event) {
        var _a;
        // If we are showing a popup that required certain hold keys, check if they
        // are now no longer held, and, if they are not, trigger an update of the
        // popup where we mark it as interactive
                if ("ghost" === (null === (_a = this.popupState) || void 0 === _a ? void 0 : _a.display.mode) && "keys" === this.popupState.display.trigger && !(this.getActiveHoldToShowKeys(event) & this.popupState.display.keyType)) this.commitPopup();
        const pinPopup = normalizeKeys(this.config.keys.pinPopup);
        const key = normalizeKey(event.key);
        if (pinPopup.includes(key)) {
          if ("keydown" === this.pinToggleState && this.togglePin()) event.preventDefault();
          this.pinToggleState = "idle";
        }
        if (!this.kanjiLookupMode) return;
        if ("Shift" === event.key) {
          this.kanjiLookupMode = false;
          event.preventDefault();
        }
      }
      handleKey(event) {
        var _a;
        // Make an upper-case version of the list of keys so that we can do
        // a case-insensitive comparison. This is so that the keys continue to work
        // even when the user has Caps Lock on.
                const {keys} = this.config;
        const [nextDictionary, toggleDefinition, closePopup, pinPopup, movePopupUp, movePopupDown, startCopy] = [ normalizeKeys(keys.nextDictionary), normalizeKeys(keys.toggleDefinition), normalizeKeys(keys.closePopup), normalizeKeys(keys.pinPopup), normalizeKeys(keys.movePopupUp), normalizeKeys(keys.movePopupDown), normalizeKeys(keys.startCopy) ];
        const key = normalizeKey(event.key);
        if (nextDictionary.includes(key)) {
          // If we are in kanji lookup mode, ignore 'Shift' keydown events since it
          // is also the key we use to trigger lookup mode.
          if ("SHIFT" === key && this.kanjiLookupMode) return true;
          this.showNextDictionary();
        } else if (toggleDefinition.includes(key)) {
          try {
            // We don't wait on the following because we're only really interested
            // in synchronous failures which occur in some browsers when the content
            // script is stale.
            void lib.browser.runtime.sendMessage({
              type: "toggleDefinition"
            });
          } catch {
            console.warn("[10ten-ja-reader] Failed to call toggleDefinition. The page might need to be refreshed.");
            return false;
          }
          this.toggleDefinition();
        } else if (movePopupDown.includes(key)) this.movePopup("down"); else if (movePopupUp.includes(key)) this.movePopup("up"); else if (
        // It's important we _don't_ enter copy mode when the Ctrl key is being
        // pressed since otherwise if the user simply wants to copy the selected
        // text by pressing Ctrl+C they will end up entering copy mode.
        !hasModifiers(event) && startCopy.includes(key)) if ("inactive" === this.copyState.kind || "finished" === this.copyState.kind) this.enterCopyMode({
          trigger: "keyboard"
        }); else this.nextCopyEntry(); else if ("inactive" !== this.copyState.kind && "ESC" === key) this.exitCopyMode(); else if (closePopup.includes(key)) this.clearResult(); else if (pinPopup.includes(key) && 
        // We don't want to detect a pin keystroke if we are still in the ghost
        // state since otherwise when the hold-to-show keys and pin keys overlap
        // we'll end up going straight into the pin state if the user happens
        // to be still when they release the hold-to-show keys.
        "ghost" !== (null === (_a = this.popupState) || void 0 === _a ? void 0 : _a.display.mode) && 
        // Likewise if we got a mouse move since the first keydown event occurred
        // we should ignore subsequent keydown events.
        "ignore" !== this.pinToggleState) this.pinToggleState = "keydown"; else if (this.isHoldToShowKeyStroke(event)) return true; else if ("inactive" !== this.copyState.kind && "finished" !== this.copyState.kind) {
          let copyType;
          for (const copyKey of CopyKeys) if (key === copyKey.key.toUpperCase()) {
            copyType = copyKey.type;
            break;
          }
          if ("undefined" === typeof copyType) 
          // Unrecognized key
          return false;
          this.copyCurrentEntry(copyType);
        } else return false;
        return true;
      }
      onFocusIn(event) {
        if (this.textHighlighter.isUpdatingFocus()) return;
        // If we focussed on a text box, assume we want to type in it and ignore
        // keystrokes until we get another mousemove.
                this.typingMode = !!event.target && isEditableNode(event.target);
        // If we entered typing mode clear the highlight.
                if (this.typingMode) this.clearResult({
          currentElement: this.lastMouseTarget
        });
      }
      // Test if an incoming keyboard event matches the hold-to-show key sequence.
      isHoldToShowKeyStroke(event) {
        // Check if it is a modifier at all
        if (![ "Alt", "AltGraph", "Control" ].includes(event.key)) return 0;
        const definedKeys = (this.config.holdToShowKeys.length ? 1 /* HoldToShowKeyType.Text */ : 0) | (this.config.holdToShowImageKeys.length ? 2 /* HoldToShowKeyType.Images */ : 0);
        return definedKeys & this.getActiveHoldToShowKeys(event);
      }
      // Test if hold-to-show keys are set for a given a UI event
      getActiveHoldToShowKeys(event) {
        const areKeysDownForSetting = setting => {
          if ("undefined" === typeof this.config[setting] || !Array.isArray(this.config[setting]) || !this.config[setting].length) return true;
          // Check if all the configured hold-to-show keys are pressed down
                    const hasAltGraph = event.getModifierState("AltGraph");
          if (this.config[setting].includes("Alt") && !event.altKey && !hasAltGraph) return false;
          if (this.config[setting].includes("Ctrl") && !event.ctrlKey) return false;
          return true;
        };
        return (areKeysDownForSetting("holdToShowKeys") ? 1 /* HoldToShowKeyType.Text */ : 0) | (areKeysDownForSetting("holdToShowImageKeys") ? 2 /* HoldToShowKeyType.Images */ : 0);
      }
      hasPinKeysPressed(event) {
        const pinPopupKeys = this.config.keys.pinPopup;
        const hasAltGraph = event.getModifierState("AltGraph");
        return pinPopupKeys.includes("Ctrl") && event.ctrlKey || pinPopupKeys.includes("Alt") && (event.altKey || hasAltGraph);
      }
      isVisible() {
        return this.isTopMostWindow() ? isPopupVisible() : !!this.popupState;
      }
      onFullScreenChange() {
        var _a;
        if ("pinned" === (null === (_a = this.popupState) || void 0 === _a ? void 0 : _a.display.mode)) this.unpinPopup();
        // If entering / leaving fullscreen caused a change in who is the topmost
        // window we might have some setup / clean up to do.
                if (this.isTopMostWindow()) this.applyPuckConfig(); else {
          removePopup();
          this.clearResult();
          this.tearDownPuck();
        }
      }
      onInterFrameMessage(event) {
        // NOTE: Please do not add additional messages here.
        // We want to avoid using postMessage at all costs. Please see the rationale
        // for this one exception here:
        // https://github.com/birchill/10ten-ja-reader/issues/747#issuecomment-918774588
        const PuckMovedMessageSchema = type({
          type: literal("10ten(ja):puckMoved"),
          clientX: number(),
          clientY: number()
        });
        if (!is(event.data, PuckMovedMessageSchema)) return;
        // Make sure no-one else sees this message since some apps will get confused
        // if they see unrecognized messages.
                event.stopImmediatePropagation();
        event.preventDefault();
        const {clientX, clientY} = event.data;
        const mouseEvent = new MouseEvent("mousemove", {
          // Make sure the event bubbles up to the listener on the window
          bubbles: true,
          clientX,
          clientY
        });
        mouseEvent.fromPuck = true;
        const documentBody = window.self.document.body;
        if (!documentBody) 
        // Hasn't loaded yet
        return;
        documentBody.dispatchEvent(mouseEvent);
      }
      async onBackgroundMessage(request) {
        assert(request, BackgroundMessageSchema);
        // Most messages are targeted at specific frames and should only arrive
        // there. However, Safari doesn't support sending to specific frames so we
        // also explicitly indicate the target within each message so we can ignore
        // those not intended for us.
                if ("top" === request.frame && !this.isTopMostWindow()) return "ok";
        if ("children" === request.frame && this.isTopMostWindow()) return "ok";
        if ("number" === typeof request.frame && this.getFrameId() !== request.frame) return "ok";
        switch (request.type) {
         case "popupShown":
          {
            // Check if this request has translated the popup geometry for us
            // If not, we should leave `pos` as undefined so we know not to use
            // it.
            let pos;
            const {pos: requestPos} = request.state;
            if (requestPos && this.getFrameId() === requestPos.frameId) {
              const {scrollX, scrollY} = getScrollOffset();
              const {x, y, lookupPoint} = requestPos;
              pos = {
                ...requestPos,
                x: x + scrollX,
                y: y + scrollY,
                lookupPoint: lookupPoint ? {
                  x: lookupPoint.x + scrollX,
                  y: lookupPoint.y + scrollY,
                  marginX: lookupPoint.marginX,
                  marginY: lookupPoint.marginY
                } : void 0
              };
            }
            // We don't need to worry about clearing any timeout that may have
            // been set in `this.popupState.ghost.timeout` because that timeout
            // is cleared by the top-most window (which we are are not).
                        this.popupState = {
              ...request.state,
              pos
            };
          }
          break;

         case "popupHidden":
          this.currentTextRange = void 0;
          this.currentPagePoint = void 0;
          this.copyState = {
            kind: "inactive"
          };
          this.popupState = void 0;
          break;

         case "isPopupShowing":
          if (this.isVisible() && this.popupState) void lib.browser.runtime.sendMessage({
            type: "frame:popupShown",
            frameId: request.frameId,
            state: this.getTranslatedPopupState({
              frameId: request.frameId
            }, this.popupState)
          });
          break;

         case "highlightText":
          this.highlightText(request.length);
          break;

         case "clearTextHighlight":
          this.clearTextHighlight();
          break;

         case "lookup":
          {
            const iframe = findIframeElement({
              frameId: request.source.frameId,
              initialSrc: request.source.initialSrc,
              currentSrc: request.source.currentSrc,
              dimensions: request.source.dimensions
            });
            let iframeOriginPoint;
            if (!iframe) {
              console.warn("Couldn't find iframe element");
              // Just use the top-left corner since that's probably better than
              // not showing the popup at all.
                            iframeOriginPoint = {
                x: 0,
                y: 0
              };
            } else iframeOriginPoint = getIframeOrigin(iframe);
            // Translate the point from the iframe's coordinate system to ours.
                        const {point} = request;
            this.currentPagePoint = toPageCoords({
              x: point.x + iframeOriginPoint.x,
              y: point.y + iframeOriginPoint.y
            });
            // Similarly translate any text box sizes.
                        let targetProps = request.targetProps;
            if (targetProps.textBoxSizes) {
              const scrollOffset = getScrollOffset();
              targetProps = JSON.parse(JSON.stringify(targetProps));
              const {textBoxSizes} = targetProps;
              for (const size of textBoxSizeLengths) {
                const {left, top, width, height} = textBoxSizes[size];
                // We pass sizes around in screen coordinates but store them in
                // page coordinates.
                                textBoxSizes[size] = toPageCoords({
                  left: left + iframeOriginPoint.x,
                  top: top + iframeOriginPoint.y,
                  width,
                  height
                }, scrollOffset);
              }
            }
            // We are doing a lookup based on an iframe's contents so we should
            // clear any mouse target we previously stored.
                        this.lastMouseTarget = null;
            const meta = request.meta;
            void this.lookupText({
              ...request,
              meta,
              targetProps,
              source: request.source
            });
          }
          break;

         case "pinPopup":
          this.pinPopup();
          break;

         case "unpinPopup":
          this.unpinPopup();
          break;

         case "commitPopup":
          this.commitPopup();
          break;

         case "clearResult":
          this.clearResult();
          break;

         case "nextDictionary":
          this.showNextDictionary();
          break;

         case "toggleDefinition":
          this.toggleDefinition();
          break;

         case "movePopup":
          this.movePopup(request.direction);
          break;

         case "enterCopyMode":
          this.enterCopyMode({
            trigger: "keyboard"
          });
          break;

         case "exitCopyMode":
          this.exitCopyMode();
          break;

         case "nextCopyEntry":
          this.nextCopyEntry();
          break;

         case "copyCurrentEntry":
          this.copyCurrentEntry(request.copyType);
          break;
        }
        return "ok";
      }
      showNextDictionary() {
        if (!this.isTopMostWindow()) {
          void lib.browser.runtime.sendMessage({
            type: "top:nextDictionary"
          });
          return;
        }
        if (this.currentPagePoint) this.showDictionary("next");
      }
      toggleDefinition() {
        if (!this.isTopMostWindow()) {
          void lib.browser.runtime.sendMessage({
            type: "top:toggleDefinition"
          });
          return;
        }
        this.config.readingOnly = !this.config.readingOnly;
        this.updatePopup();
      }
      movePopup(direction) {
        if (!this.isTopMostWindow()) {
          void lib.browser.runtime.sendMessage({
            type: "top:movePopup",
            direction
          });
          return;
        }
        if ("down" === direction) this.popupPositionMode = (this.popupPositionMode + 1) % (2 /* PopupPositionMode.End */ + 1); else this.popupPositionMode = mod(this.popupPositionMode - 1, 2 /* PopupPositionMode.End */ + 1);
        this.updatePopup();
      }
      enterCopyMode({trigger, index = 0}) {
        // In the iframe case, we mirror the copyMode state in both iframe and
        // topmost window because:
        // - The topmost window needs to know the copyMode state so that it can
        //   render the popup correctly, but
        // - The iframe needs to know the copyMode state so that it can determine
        //   how to handle copyMode-specific keystrokes.
        this.copyState = {
          kind: "active",
          index,
          mode: trigger
        };
        if (!this.isTopMostWindow()) {
          console.assert("keyboard" === trigger, "We probably should't be receiving touch or mouse events in the iframe");
          void lib.browser.runtime.sendMessage({
            type: "top:enterCopyMode"
          });
          return;
        }
        this.updatePopup({
          fixPosition: true
        });
      }
      exitCopyMode() {
        // Use the existing copyState to determine if we need to maintain a minimum
        // size for the popup.
        const fixMinHeight = this.shouldFixMinHeightForCopyMode();
        // As with enterCopyMode, we mirror the copyMode state in both iframe and
        // topmost window.
                this.copyState = {
          kind: "inactive"
        };
        if (!this.isTopMostWindow()) {
          void lib.browser.runtime.sendMessage({
            type: "top:exitCopyMode"
          });
          return;
        }
        this.updatePopup({
          fixPosition: true,
          fixMinHeight
        });
      }
      shouldFixMinHeightForCopyMode() {
        var _a;
        return "mouse" === getCopyMode(this.copyState) && 
        // If the popup is pinned, there's no need to fix the height
        "pinned" !== (null === (_a = this.popupState) || void 0 === _a ? void 0 : _a.display.mode);
      }
      nextCopyEntry() {
        if (!this.isTopMostWindow()) {
          void lib.browser.runtime.sendMessage({
            type: "top:nextCopyEntry"
          });
          return;
        }
        if ("active" === this.copyState.kind || "error" === this.copyState.kind) this.copyState = {
          kind: "active",
          index: this.copyState.index + 1,
          mode: this.copyState.mode
        };
        this.updatePopup({
          fixPosition: true
        });
      }
      copyCurrentEntry(copyType) {
        if (!this.isTopMostWindow()) {
          void lib.browser.runtime.sendMessage({
            type: "top:copyCurrentEntry",
            copyType
          });
          return;
        }
        const copyEntry = this.getCopyEntry();
        if (!copyEntry) return;
        const textToCopy = getTextToCopy({
          entry: copyEntry,
          copyType,
          kanjiReferences: this.config.kanjiReferences,
          showKanjiComponents: this.config.showKanjiComponents
        });
        void this.copyString(textToCopy, copyType);
      }
      getCopyEntry() {
        if ("active" !== this.copyState.kind) {
          console.error("Expected to be in copy mode");
          return null;
        }
        if (!this.currentSearchResult) return null;
        const copyEntry = getCopyEntryFromResult({
          result: this.currentSearchResult,
          series: this.currentDict,
          index: this.copyState.index
        });
        if (!copyEntry) {
          const fixMinHeight = this.shouldFixMinHeightForCopyMode();
          this.copyState = {
            kind: "inactive"
          };
          this.updatePopup({
            fixPosition: true,
            fixMinHeight
          });
        }
        return copyEntry;
      }
      async copyString(message, copyType) {
        if ("inactive" === this.copyState.kind) return;
        const fixMinHeight = this.shouldFixMinHeightForCopyMode();
        const {index, mode} = this.copyState;
        try {
          await copyText(message);
          this.copyState = {
            kind: "finished",
            type: copyType,
            index,
            mode
          };
        } catch (e) {
          console.error(e);
          this.copyState = {
            kind: "error",
            index,
            mode
          };
        }
        this.updatePopup({
          fixPosition: true,
          fixMinHeight
        });
        // Reset the copy state so that it doesn't re-appear next time we re-render
        // the popup.
                this.copyState = {
          kind: "inactive"
        };
      }
      highlightText(length) {
        var _a, _b;
        if (!(null === (_a = this.currentTextRange) || void 0 === _a ? void 0 : _a.length)) return;
        this.textHighlighter.highlight({
          length,
          textRange: this.currentTextRange,
          style: this.config.highlightStyle
        });
        null === (_b = this.puck) || void 0 === _b ? void 0 : _b.highlightMatch();
      }
      clearTextHighlight(currentElement = null) {
        var _a;
        this.textHighlighter.clearHighlight({
          currentElement
        });
        null === (_a = this.puck) || void 0 === _a ? void 0 : _a.clearHighlight();
      }
      // The currentElement here is _only_ used to avoid resetting the scroll
      // position when we clear the text selection of a text box.
      // That is, if we go to clear the text selection of a text box but we are
      // still interacting with that element, then we take extra steps to ensure
      // the scroll position does not change.
      clearResult({currentElement = null} = {}) {
        var _a, _b;
        this.currentTextRange = void 0;
        this.currentPagePoint = void 0;
        this.lastMouseTarget = null;
        this.copyState = {
          kind: "inactive"
        };
        clearPopupTimeout(this.popupState);
        this.popupState = void 0;
        if (this.isTopMostWindow() && (null === (_a = this.currentLookupParams) || void 0 === _a ? void 0 : _a.source)) {
          const {source: {frameId}} = this.currentLookupParams;
          void lib.browser.runtime.sendMessage({
            type: "frame:clearTextHighlight",
            frameId
          });
          null === (_b = this.puck) || void 0 === _b ? void 0 : _b.clearHighlight();
        } else this.clearTextHighlight(currentElement);
        if (this.isTopMostWindow()) this.hidePopup(); else void lib.browser.runtime.sendMessage({
          type: "top:clearResult"
        });
        // Start tracking touch taps again now that the window is hidden.
                this.touchClickTracker.stopIgnoringClicks();
      }
      async tryToUpdatePopup({fromPuck, fromTouch, matchText, matchImages, screenPoint, eventElement, dictMode}) {
        const textAtPoint = getTextAtPoint({
          matchCurrency: !!this.config.fx,
          matchText,
          matchImages,
          point: screenPoint,
          maxLength: ContentHandler.MAX_LENGTH
        });
        // We might have failed to find a match because we didn't have the
        // necessary keys held down.
        
        // In that case, we still want to store the current point so that if those
        // keys are pressed later, we can show the pop-up immediately.
                if (!textAtPoint && (!matchText || !matchImages)) this.currentPagePoint = toPageCoords(screenPoint);
        // Check if the text range was the same as the last time.
        
        // The following is not strictly correct since if dictMode was 'kanji'
        // but is now 'default' then technically we shouldn't return early
        // since the result will likely differ.
        
        // In practice, however, locking the result to the previously shown
        // dictionary in this case is not a problem. On the contrary it makes
        // toggling dictionaries a little less sensitive to minor mouse movements
        // and hence easier to work with.
                if (
        // We require that at least one of the text ranges was set (or for there
        // to be no text discovered at all), however, since otherwise for the case
        // of a non-text element (e.g. an <img> with a title attribute) where
        // textAtPoint.textRange is null but textAtPoint.text is set, we'll end up
        // returning early and not displaying the popup.
        (this.currentTextRange || !textAtPoint || textAtPoint.textRange) && textRangesEqual(this.currentTextRange, null === textAtPoint || void 0 === textAtPoint ? void 0 : textAtPoint.textRange) && "default" === dictMode) return;
        // If we got no result, clear the result.
                if (!textAtPoint) {
          this.clearResult({
            currentElement: eventElement
          });
          return;
        }
        this.currentPagePoint = toPageCoords(screenPoint);
        this.currentTextRange = (null === textAtPoint || void 0 === textAtPoint ? void 0 : textAtPoint.textRange) || void 0;
        const pageTargetProps = getPageTargetProps({
          fromPuck,
          fromTouch,
          target: eventElement,
          textRange: (null === textAtPoint || void 0 === textAtPoint ? void 0 : textAtPoint.textRange) || void 0
        });
        const lookupParams = {
          dictMode,
          meta: textAtPoint.meta,
          source: null,
          text: textAtPoint.text,
          targetProps: pageTargetProps,
          wordLookup: !!textAtPoint.textRange
        };
        if (this.isTopMostWindow()) void this.lookupText(lookupParams); else void lib.browser.runtime.sendMessage({
          ...lookupParams,
          type: "top:lookup",
          // We use screen coordinates for values we pass between frames
          point: screenPoint,
          targetProps: {
            ...pageTargetProps,
            textBoxSizes: selectionSizesToScreenCoords(pageTargetProps.textBoxSizes)
          },
          source: {
            // The background page will fill in our frame ID for us
            src: document.location.href,
            dimensions: getWindowDimensions()
          }
        });
      }
      // ------------------------------------------------------------------------
      // (Mostly) Top-most window concerns
      // ------------------------------------------------------------------------
      async lookupText({dictMode, meta, source, text, targetProps, wordLookup}) {
        this.currentLookupParams = {
          text,
          meta,
          wordLookup,
          source
        };
        // Presumably the text or dictionary has changed so break out of copy mode
                this.copyState = {
          kind: "inactive"
        };
        const queryResult = await query(text, {
          includeRomaji: this.config.showRomaji,
          wordLookup,
          updateQueryResult: queryResult => {
            void this.applyQueryResult({
              dictMode,
              meta,
              queryResult,
              targetProps,
              text,
              wordLookup
            });
          }
        });
        void this.applyQueryResult({
          dictMode,
          meta,
          queryResult,
          targetProps,
          text,
          wordLookup
        });
      }
      async applyQueryResult({dictMode, meta, queryResult, targetProps, text, wordLookup}) {
        const lookupParams = {
          text,
          meta,
          wordLookup
        };
        // Check if we have triggered a new query or been disabled while running
        // the previous query.
                if (!this.currentLookupParams || JSON.stringify(lookupParams) !== JSON.stringify(stripFields(this.currentLookupParams, [ "source" ]))) return;
        if (!queryResult && !meta) {
          this.clearResult({
            currentElement: this.lastMouseTarget
          });
          return;
        }
        // Determine the dictionary to show
                let dict = "words";
        if (queryResult) {
          switch (dictMode) {
           case "default":
            if (!queryResult.words) 
            // Prefer the names dictionary if we have a names result of more
            // than one character or if we have no kanji results.
            // Otherwise, follow the usual fallback order words -> kanji ->
            // names.
            dict = queryResult.names && queryResult.names.matchLen > 1 || !queryResult.kanji ? "names" : "kanji";
            break;

           case "kanji":
            if (!queryResult.kanji) queryResult = null; else dict = "kanji";
            break;
          }
          this.currentDict = dict;
        }
        this.currentSearchResult = queryResult || void 0;
        this.currentTargetProps = targetProps;
        this.highlightTextForCurrentResult();
        this.showPopup();
      }
      showDictionary(dictToShow, options = {}) {
        if (!this.currentSearchResult) return;
        let dict;
        if ("next" == dictToShow) {
          dict = this.currentDict;
          const cycleOrder = [ "words", "kanji", "names" ];
          let next = (cycleOrder.indexOf(this.currentDict) + 1) % cycleOrder.length;
          while (cycleOrder[next] !== this.currentDict) {
            const nextDict = cycleOrder[next];
            if (this.currentSearchResult[nextDict]) {
              dict = nextDict;
              break;
            }
            next = ++next % cycleOrder.length;
          }
        } else dict = dictToShow;
        if (dict === this.currentDict) return;
        this.currentDict = dict;
        // Exit copy state if we are changing tabs
                this.copyState = {
          kind: "inactive"
        };
        this.highlightTextForCurrentResult();
        this.updatePopup({
          fixPosition: null === options || void 0 === options ? void 0 : options.fixPopupPosition
        });
      }
      highlightTextForCurrentResult() {
        var _a, _b;
        const highlightLength = this.getHighlightLengthForCurrentResult();
        // Check we have something to highlight
                if (highlightLength < 1) return;
        if (null === (_a = this.currentLookupParams) || void 0 === _a ? void 0 : _a.source) {
          const {source: {frameId}} = this.currentLookupParams;
          void lib.browser.runtime.sendMessage({
            type: "frame:highlightText",
            frameId,
            length: highlightLength
          });
          null === (_b = this.puck) || void 0 === _b ? void 0 : _b.highlightMatch();
          return;
        }
        this.highlightText(highlightLength);
      }
      getHighlightLengthForCurrentResult() {
        var _a, _b, _c;
        if (this.config.noTextHighlight) return 0;
        const searchResult = null === (_a = this.currentSearchResult) || void 0 === _a ? void 0 : _a[this.currentDict];
        return Math.max((null === searchResult || void 0 === searchResult ? void 0 : searchResult.matchLen) || 0, (null === (_c = null === (_b = this.currentLookupParams) || void 0 === _b ? void 0 : _b.meta) || void 0 === _c ? void 0 : _c.matchLen) || 0);
      }
      showPopup(options = {}) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (!this.isTopMostWindow()) {
          console.warn("[10ten-ja-reader] Called showPopup from iframe.");
          return;
        }
        if (!this.currentSearchResult && !(null === (_a = this.currentLookupParams) || void 0 === _a ? void 0 : _a.meta)) {
          this.clearResult({
            currentElement: this.lastMouseTarget
          });
          return;
        }
        const displayMode = options.displayMode || this.getInitialDisplayMode("ghost");
        // Determine if we should show the mouse onboarding
                const wasTriggeredByMouse = this.currentTargetProps && !this.currentTargetProps.fromPuck && !this.currentTargetProps.fromTouch;
        const showMouseOnboarding = this.config.popupInteractive && !this.config.hasDismissedMouseOnboarding && this.config.hasUpgradedFromPreMouse && wasTriggeredByMouse;
        const onDismissMouseOnboarding = showMouseOnboarding ? options => {
          // We _don't_ set the "dismissed mouse onboarding" flag when the user
          // clicks the "Disable" button because the `popupInteractive` setting
          // is a local setting (i.e. not synced) and the user will likely want to
          // see the Disable onboarding button on any synchronized devices so
          // they can disable mouse interaction there too.
          // Instead, we rely on the fact that we only show the onboarding when
          // interactivity is enabled and if the user _re-enables_ interactivity
          // we will make sure the "dismissed mouse onboarding" flag gets set
          // then.
          if (!(null === options || void 0 === options ? void 0 : options.disable)) void lib.browser.runtime.sendMessage({
            type: "dismissedMouseOnboarding"
          });
          if (null === options || void 0 === options ? void 0 : options.disable) void lib.browser.runtime.sendMessage({
            type: "disableMouseInteraction"
          });
        } : void 0;
        const popupOptions = {
          accentDisplay: this.config.accentDisplay,
          closeShortcuts: this.config.keys.closePopup,
          copyNextKey: this.config.keys.startCopy[0] || "",
          copyState: this.copyState,
          dictLang: this.config.dictLang,
          dictToShow: this.currentDict,
          displayMode,
          fxData: this.config.fx,
          kanjiReferences: this.config.kanjiReferences,
          meta: null === (_b = this.currentLookupParams) || void 0 === _b ? void 0 : _b.meta,
          onCancelCopy: () => this.exitCopyMode(),
          onDismissMouseOnboarding,
          onStartCopy: (index, trigger) => this.enterCopyMode({
            trigger,
            index
          }),
          onCopy: copyType => this.copyCurrentEntry(copyType),
          onClosePopup: () => {
            this.clearResult({
              currentElement: this.lastMouseTarget
            });
          },
          onShowSettings: () => {
            lib.browser.runtime.sendMessage({
              type: "options"
            }).catch((() => {}));
          },
          onSwitchDictionary: dict => {
            this.showDictionary(dict, {
              fixPopupPosition: true
            });
          },
          onTogglePin: () => {
            "pinned" === displayMode ? this.unpinPopup() : this.pinPopup();
          },
          pinShortcuts: this.config.keys.pinPopup,
          popupStyle: this.config.popupStyle,
          posDisplay: this.config.posDisplay,
          showDefinitions: !this.config.readingOnly,
          showKanjiComponents: this.config.showKanjiComponents,
          showMouseOnboarding,
          showPriority: this.config.showPriority,
          switchDictionaryKeys: this.config.keys.nextDictionary,
          tabDisplay: this.config.tabDisplay
        };
        const popup = renderPopup(this.currentSearchResult, popupOptions);
        if (!popup) {
          this.clearResult({
            currentElement: this.lastMouseTarget
          });
          return;
        }
        // Inform the touch click tracker to ignore taps since the popup is now
        // showing.
        
        // We can't simply check if the popup is visible when we get the touch click
        // callback since by that point we will already have hidden it.
                this.touchClickTracker.startIgnoringClicks();
        
        // Position the popup
        
        // First work out our constraints, i.e. where _not_ to put the popup
                const cursorPos = this.currentPagePoint ? toScreenCoords(this.currentPagePoint) : void 0;
        let cursorClearance;
        if ((null === (_c = this.currentTargetProps) || void 0 === _c ? void 0 : _c.fromPuck) && this.puck) {
          const {top, bottom, left, right} = this.puck.getPuckClearance();
          // Although we can't tell whether the left or right thumb is in use
          // (so we don't make corresponding adjustments to left/right), we can at
          // least be reasonably sure that the thumb extends downwards!
                    const extraMarginToClearThumb = "above" === this.puck.getTargetOrientation() ? 100 : 0;
          cursorClearance = {
            top,
            right,
            bottom: bottom + extraMarginToClearThumb,
            left
          };
        } else {
          const tooltipClearance = (null === (_d = this.currentTargetProps) || void 0 === _d ? void 0 : _d.hasTitle) ? 20 : 0;
          cursorClearance = {
            top: 0,
            right: 0,
            bottom: tooltipClearance,
            left: 0
          };
        }
        // Add the first part of the matched text to the cursor clearance.
        
        // We don't want to add _all_ of it since we might have a selection that
        // wraps lines and that would produce a massive area that would be too hard
        // to avoid.
                const {textBoxSizes: pageTextBoxSizes} = this.currentTargetProps || {};
        const screenTextBoxSizes = selectionSizesToScreenCoords(pageTextBoxSizes);
        const isVerticalText = !!(null === (_e = this.currentTargetProps) || void 0 === _e ? void 0 : _e.isVerticalText);
        if (screenTextBoxSizes && cursorPos) {
          const bbox = getBestFitSize({
            sizes: screenTextBoxSizes,
            length: this.getHighlightLengthForCurrentResult()
          });
          if (bbox) {
            const cursorClearanceAsRect = addMarginToPoint(cursorClearance, cursorPos);
            // Adjust the mousePos to use the middle of the first character of the
            // selected text.
            
            // This should cause the popup to be better aligned with the selected
            // text which, apart from appearing a little bit neater, also makes
            // mousing over the popup easier since it should be closer.
            
            // (It's important we do this _after_ calling addMarginToPoint above
            // since, when we are using the puck, the original value of
            // `cursorClearance` is relative to this.currentPoint, i.e. the original
            // value of mousePos, so we need to supply that value when converting to
            // a rect.)
                        const firstCharBbox = screenTextBoxSizes[1];
            cursorPos.x = Math.max(0, firstCharBbox.left + firstCharBbox.width / 2);
            cursorPos.y = Math.max(0, firstCharBbox.top + firstCharBbox.height / 2);
            const expandedClearance = geometry_union(bbox, cursorClearanceAsRect);
            cursorClearance = getMarginAroundPoint(cursorPos, expandedClearance);
          }
        }
        const safeArea = this.safeAreaProvider.getSafeArea();
        // Work out its size
                let popupSize = getPopupDimensions(popup);
        // Finally get the popup position
                let {x: popupX, y: popupY, constrainWidth, constrainHeight, direction, side} = getPopupPosition({
          cursorClearance,
          cursorPos,
          fixedPosition: (null === options || void 0 === options ? void 0 : options.fixPosition) ? this.getFixedPosition() : void 0,
          interactive: this.config.popupInteractive,
          isVerticalText,
          positionMode: this.popupPositionMode,
          popupSize,
          safeArea,
          pointerType: (null === (_f = this.currentTargetProps) || void 0 === _f ? void 0 : _f.fromPuck) ? "puck" : "cursor"
        });
        // If we are showing the copy overlay, we don't constrain the height of
        // the popup since it may cause the buttons on the overlay to be clipped
        // or scrolled out of view.
                if (constrainHeight && showOverlay(this.copyState)) constrainHeight = null;
        // Determine if we need to set a minimum height
                let minHeight = null;
        if (options.fixMinHeight && null === constrainHeight && (null === (_g = this.popupState) || void 0 === _g ? void 0 : _g.pos) && popupSize.height < this.popupState.pos.height) minHeight = this.popupState.pos.height;
        // Store the popup's display mode so that:
        
        // (a) we can fix the popup's position when changing tabs, and
        // (b) we can detect if future mouse events lie between the popup and
        //     the lookup point (and _not_ close or update the popup in that case)
        // (c) we know how to handle keyboard events based on whether or not the
        //     popup is showing
                clearPopupTimeout(this.popupState);
        this.popupState = {
          pos: {
            frameId: this.getFrameId() || 0,
            x: popupX,
            y: popupY,
            width: null !== constrainWidth && void 0 !== constrainWidth ? constrainWidth : popupSize.width,
            height: null !== (_h = null !== constrainHeight && void 0 !== constrainHeight ? constrainHeight : minHeight) && void 0 !== _h ? _h : popupSize.height,
            direction,
            side,
            lookupPoint: this.getPopupLookupPoint({
              currentPagePoint: this.currentPagePoint,
              firstCharBbox: null === screenTextBoxSizes || void 0 === screenTextBoxSizes ? void 0 : screenTextBoxSizes[1]
            })
          },
          contentType: (null === (_j = this.currentTargetProps) || void 0 === _j ? void 0 : _j.contentType) || "text",
          display: this.getNextDisplay(displayMode)
        };
        
        // Apply the popup position
        
                if (isSvgDoc(document) && isSvgSvgElement(document.documentElement) && isForeignObjectElement(popup.parentElement)) {
          // Set the x/y attributes on the <foreignObject> wrapper after converting
          // to document space.
          const svg = document.documentElement;
          const wrapper = popup.parentElement;
          wrapper.x.baseVal.value = popupX;
          wrapper.y.baseVal.value = popupY;
          const ctm = svg.getScreenCTM();
          if (ctm) {
            const transform = svg.createSVGTransformFromMatrix(ctm.inverse());
            wrapper.transform.baseVal.initialize(transform);
          }
        } else {
          popup.style.setProperty("--left", `${popupX}px`);
          popup.style.setProperty("--top", `${popupY}px`);
          if (constrainWidth) popup.style.setProperty("--max-width", `${constrainWidth}px`); else popup.style.removeProperty("--max-width");
          if (constrainHeight) {
            popup.style.removeProperty("--min-height");
            popup.style.setProperty("--max-height", `${constrainHeight}px`);
          } else if (minHeight) {
            popup.style.setProperty("--min-height", `${minHeight}px`);
            popup.style.removeProperty("--max-height");
          } else {
            popup.style.removeProperty("--min-height");
            popup.style.removeProperty("--max-height");
          }
        }
        
        // Maybe add an arrow to it
        
        // This needs to happen after positioning the popup so we can read back its
        // final size (after applying any edge case CSS rules) and determine if
        // there is room for the arrow or not.
        
                if (cursorPos && ("hover" === displayMode || "pinned" === displayMode) && "disjoint" !== direction && "disjoint" !== side) {
          // Update the popup size now that we have positioned it.
          popupSize = getPopupDimensions(popup);
          const {scrollX, scrollY} = getScrollOffset();
          renderPopupArrow({
            direction,
            // Convert page coordinates to screen coordinates
            popupPos: {
              x: popupX - scrollX,
              y: popupY - scrollY
            },
            popupSize,
            side,
            target: cursorPos,
            theme: this.config.popupStyle
          });
        }
        
        // Tell child iframes
        
                let childState = this.popupState;
        if (null === (_k = this.currentLookupParams) || void 0 === _k ? void 0 : _k.source) childState = this.getTranslatedPopupState(this.currentLookupParams.source, this.popupState);
        void lib.browser.runtime.sendMessage({
          type: "children:popupShown",
          state: childState
        });
      }
      getInitialDisplayMode(interactive) {
        var _a, _b;
        if ((null === (_a = this.currentTargetProps) || void 0 === _a ? void 0 : _a.fromPuck) || (null === (_b = this.currentTargetProps) || void 0 === _b ? void 0 : _b.fromTouch)) return "touch"; else if (this.config.popupInteractive) return interactive; else return "static";
      }
      getNextDisplay(prevDisplayMode) {
        var _a, _b;
        let display;
        if ("ghost" === prevDisplayMode) if (this.config.holdToShowKeys.length && "text" === (null === (_a = this.currentTargetProps) || void 0 === _a ? void 0 : _a.contentType)) display = {
          mode: "ghost",
          trigger: "keys",
          keyType: 1
 /* HoldToShowKeyType.Text */        }; else if (this.config.holdToShowImageKeys.length && "image" === (null === (_b = this.currentTargetProps) || void 0 === _b ? void 0 : _b.contentType)) display = {
          mode: "ghost",
          trigger: "keys",
          keyType: 2
 /* HoldToShowKeyType.Images */        }; else display = {
          mode: "ghost",
          trigger: "timeout",
          timeout: window.setTimeout((() => this.commitPopup()), 400)
        }; else display = {
          mode: prevDisplayMode
        };
        return display;
      }
      updatePopup(options = {}) {
        var _a;
        if (!this.isTopMostWindow()) {
          console.warn("Called updatePopup within iframe");
          return;
        }
        const displayMode = null === (_a = this.popupState) || void 0 === _a ? void 0 : _a.display.mode;
        this.showPopup({
          displayMode,
          fixPosition: options.fixPosition,
          fixMinHeight: options.fixMinHeight
        });
      }
      pinPopup() {
        if (!this.isTopMostWindow()) {
          void lib.browser.runtime.sendMessage({
            type: "top:pinPopup"
          });
          return;
        }
        // If the popup is interactive, then we shouldn't move it when pinning it
        // but if, for example, the user has turned off popup interactivity and so
        // the popup is rendered with the narrow tab bar, when we go to pin it
        // we'll expand the tab bar so we should re-position it as necessary since
        // it might take more space.
                this.showPopup({
          displayMode: "pinned",
          fixPosition: this.config.popupInteractive
        });
      }
      unpinPopup() {
        if (!this.isTopMostWindow()) {
          void lib.browser.runtime.sendMessage({
            type: "top:unpinPopup"
          });
          return;
        }
        this.showPopup({
          displayMode: this.getInitialDisplayMode("hover"),
          fixPosition: this.config.popupInteractive
        });
        // Typically when you unpin the popup you want it to disappear immediately
        // (unless the mouse is currently over it or still over the original text).
        
        // To try to make that happen we dispatch another mouse event with the last
        // mouse position.
        
        // Unfortunately this won't necessarily help if the user has since moused
        // over an iframe since our last recorded mouse position and target element
        // will be based on the last mousemove event we received in _this_ frame.
                if (this.lastMouseTarget) {
          const mouseMoveEvent = new MouseEvent("mousemove", {
            bubbles: true,
            screenX: this.lastMouseMoveScreenPoint.x,
            screenY: this.lastMouseMoveScreenPoint.y,
            clientX: this.lastMouseMoveScreenPoint.x,
            clientY: this.lastMouseMoveScreenPoint.y,
            ctrlKey: false,
            shiftKey: false,
            altKey: false,
            metaKey: false,
            button: 0,
            buttons: 0
          });
          this.lastMouseTarget.dispatchEvent(mouseMoveEvent);
        }
      }
      togglePin() {
        if (!this.popupState) return false;
        if ("pinned" === this.popupState.display.mode) this.unpinPopup(); else this.pinPopup();
        return true;
      }
      commitPopup() {
        var _a;
        if (!this.isTopMostWindow()) {
          void lib.browser.runtime.sendMessage({
            type: "top:commitPopup"
          });
          return;
        }
        if ("ghost" !== (null === (_a = this.popupState) || void 0 === _a ? void 0 : _a.display.mode)) return;
        this.showPopup({
          displayMode: "hover",
          fixPosition: false
        });
      }
      hidePopup() {
        const wasShowing = !!this.currentSearchResult;
        this.currentLookupParams = void 0;
        this.currentSearchResult = void 0;
        this.currentTargetProps = void 0;
        hidePopup();
        if (wasShowing && this.isTopMostWindow()) void lib.browser.runtime.sendMessage({
          type: "children:popupHidden"
        });
      }
      getFixedPosition() {
        var _a;
        if (!(null === (_a = this.popupState) || void 0 === _a ? void 0 : _a.pos) || "none" === this.config.tabDisplay) return;
        const {x, y, width, direction, side} = this.popupState.pos;
        return {
          // If the tabs are on the right, the x position is the right edge of the
          // popup.
          x: "right" === this.config.tabDisplay ? x + width : x,
          y,
          anchor: this.config.tabDisplay,
          direction,
          side
        };
      }
      getPopupLookupPoint({currentPagePoint, firstCharBbox}) {
        const {scrollX, scrollY} = getScrollOffset();
        if (firstCharBbox) {
          const marginX = firstCharBbox.width / 2;
          const marginY = firstCharBbox.height / 2;
          const x = firstCharBbox.left + marginX + scrollX;
          const y = firstCharBbox.top + marginY + scrollY;
          return {
            x,
            y,
            marginX,
            marginY
          };
        }
        return currentPagePoint ? {
          x: currentPagePoint.x,
          y: currentPagePoint.y,
          marginX: 10,
          marginY: 10
        } : void 0;
      }
      getTranslatedPopupState(frameSource, popupState) {
        const iframe = findIframeElement(frameSource);
        if (!iframe) return popupState;
        if (!popupState.pos) return popupState;
        const iframeOrigin = getIframeOrigin(iframe);
        const {scrollX, scrollY} = getScrollOffset();
        const {x, y, lookupPoint} = popupState.pos;
        return {
          ...popupState,
          pos: {
            ...popupState.pos,
            frameId: frameSource.frameId,
            x: x - iframeOrigin.x - scrollX,
            y: y - iframeOrigin.y - scrollY,
            lookupPoint: lookupPoint ? {
              x: lookupPoint.x - iframeOrigin.x - scrollX,
              y: lookupPoint.y - iframeOrigin.y - scrollY,
              marginX: lookupPoint.marginX,
              marginY: lookupPoint.marginY
            } : void 0
          }
        };
      }
    }
    // Mouse tracking
    
    // We don't show the popup when the mouse is moving at speed because it's
    // mostly distracting and introduces unnecessary work.
        ContentHandler.MOUSE_SPEED_SAMPLES = 2;
    ContentHandler.MOUSE_SPEED_THRESHOLD = 0.5;
    
    // Top-most window concerns
    
    // This should be enough for most (but not all) entries for now.
    
    // See https://github.com/birchill/10ten-ja-reader/issues/319#issuecomment-655545971
    // for a snapshot of the entry lengths by frequency.
    
    // Once we have switched all databases to IndexedDB, we should investigate the
    // performance impact of increasing this further.
        ContentHandler.MAX_LENGTH = 16;
    function isTouchClickEvent(mouseEvent) {
      return !!mouseEvent.fromTouch;
    }
    (function() {
      // Check that we should be running at all. We can only handle HTML and SVG
      // content and if we start messing with other documents (e.g. random XML
      // documents) we can break their styling.
      const {namespaceURI} = document.documentElement;
      if ("http://www.w3.org/1999/xhtml" !== namespaceURI && "http://www.w3.org/2000/svg" !== namespaceURI) return;
      // Ensure the content script is not loaded twice or that an incompatible
      // version of the script is not used.
      
      // This is only needed when we are injecting the script via executeScript
      // when running in "activeTab" mode.
      
      // Furthermore, with regards to incompatible versions, as far as I can tell
      // Firefox will remove old versions of injected scripts when it reloads an
      // add-on. I'm not sure if that behavior is reliable across all browsers,
      // however, (update: it's not) so for now we try our best to ensure we have
      // the correct version of the script here.
            if ("1.13.5" === window.readerScriptVer) return; else if ("undefined" !== typeof window.readerScriptVer && "function" === typeof window.removeReaderScript) {
        console.info("[10ten-ja-reader] Found incompatible version of script. Removing.");
        try {
          window.removeReaderScript();
        } catch (e) {
          console.error(e);
        }
      }
      let contentHandler = null;
      // Port to the background page.
      
      // This is only used when we are running in "activeTab" mode. It serves to:
      
      // - Provide an extra means to ensure the tab is removed from the list of
      //   enabled tabs when the tab is destroyed (in case we fail to get a pagehide
      //   event), and
      // - Ensure the background page is kept alive so long as we have an enabled
      //   tab when the background page is running as an event page.
      
            let port;
      window.readerScriptVer = "1.13.5";
      window.removeReaderScript = () => {
        disable();
        lib.browser.runtime.onMessage.removeListener(onMessage);
      };
      // Track if we are the top-most window or not.
      
      // Normally we detect the top-most window by comparing window.top ===
      // window.self but in some cases the actual top-most window does not have the
      // content script injected and hence we have a concept of the effective
      // top-most window.
      
      // This only happens in Firefox and only really with the Live TL extension
      // where the top-most window in some cases is a moz-extension:// URL and hence
      // does not have the content script injected. Instead a child iframe (a
      // regular YouTube page) has the content script injected and should be treated
      // as the top-most window for the purposes of showing the popup.
            let isEffectiveTopMostWindow = false;
      function isTopMostWindow() {
        return isEffectiveTopMostWindow || window.self === window.top;
      }
      lib.browser.runtime.onMessage.addListener(onMessage);
      // Check if we should be enabled or not.
      
      // We don't need to do this in activeTab mode since the background page will
      // send us an 'enable' message after injecting the script.
      
      // However, when the content script is injected using content_scripts the
      // background script might not have been initialized yet in which case this
      // will fail. However, presumably once the background script has initialized
      // it will call us if we need to be enabled.
            if (true) lib.browser.runtime.sendMessage({
        type: "enable?"
      }).catch((() => {}));
      async function onMessage(request) {
        assert(request, BackgroundMessageSchema);
        // As with onBackgroundMessage we need to ensure that we are the
        // intended recipient for these messages because Safari.
                switch (request.type) {
         case "enable":
          console.assert("object" === typeof request.config, "No config object provided with enable message");
          console.assert("*" === request.frame);
          enable({
            tabId: request.id,
            config: request.config
          });
          break;

         case "disable":
          console.assert("*" === request.frame);
          disable();
          break;

         case "isTopMost":
          if ((null === contentHandler || void 0 === contentHandler ? void 0 : contentHandler.getFrameId()) === request.frame) {
            isEffectiveTopMostWindow = true;
            null === contentHandler || void 0 === contentHandler ? void 0 : contentHandler.setEffectiveTopMostWindow();
          }
          break;
        }
        return "ok";
      }
      function enable({tabId, config}) {
        if (contentHandler) {
          contentHandler.setConfig(config);
          if (isEffectiveTopMostWindow) contentHandler.setEffectiveTopMostWindow();
        } else {
          // When the extension is upgraded, we can still have the old popup window
          // or puck hanging around so make sure to clear it.
          removePopup();
          removePuck();
          removeSafeAreaProvider();
          removeGdocsStyles();
          contentHandler = new ContentHandler(config);
        }
        // If we are running in "activeTab" mode we will get passed our tab ID
        // so we can set up a Port which will allow the background script to
        // know when we disappear so it can update the browser action status.
        
        // We only need to do that if we're the root-most frame, however.
                if ("undefined" !== typeof tabId && isTopMostWindow() && !port) try {
          port = lib.browser.runtime.connect(void 0, {
            name: `tab-${tabId}`
          });
        } catch (e) {
          console.error(e);
        }
        lib.browser.runtime.sendMessage({
          type: "enabled",
          src: document.location.href
        }).then((resp => {
          if (!resp) return;
          const {frameId} = resp;
          if (contentHandler) contentHandler.setFrameId(frameId);
          if (window.frameElement instanceof HTMLElement) window.frameElement.dataset.frameId = frameId.toString();
        })).catch((e => {
          console.warn(e);
        }));
        window.addEventListener("pageshow", onPageShow);
        window.addEventListener("pagehide", onPageHide);
      }
      function disable() {
        if (contentHandler) {
          contentHandler.detach();
          contentHandler = null;
        }
        if (port) {
          port.disconnect();
          port = void 0;
        }
        window.removeEventListener("pageshow", onPageShow);
        window.removeEventListener("pagehide", onPageHide);
      }
      function onPageShow() {
        void lib.browser.runtime.sendMessage({
          type: "enable?"
        });
      }
      function onPageHide() {
        void lib.browser.runtime.sendMessage({
          type: "disabled"
        });
      }
    })();
    /* harmony default export */  })();
  /******/})();