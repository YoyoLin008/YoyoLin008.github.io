# Accessibility review

Reviewed October 22, 2026. The site uses native HTML semantics rather than an accessibility overlay.

Each view has one main heading, followed by ordered subheadings. Navigation uses links, identifies the current section, updates the document title, and moves keyboard focus to the new heading after navigation. Every page includes a skip link and a main landmark. The experience timeline is an ordered list.

Keyboard focus is visible. Links to publication resources include the paper title in their accessible names, and links that open another tab announce that behavior. Images have text alternatives; decorative icons are hidden from screen readers. The theme uses darker orange text for contrast, respects reduced-motion preferences, and reflows on narrow screens. An HTML resume is available alongside the PDF.

## Verification

Structural checks cover the six application views and six HTML pages, including heading order, image alternatives, language, skip links, and focus styles. Run `node scripts/check-accessibility.mjs` after changing templates. Chrome accessibility-tree and keyboard checks covered skip navigation, section changes, browser Back, hobby links, and the jailbreak disclosure. All pages were checked for horizontal overflow at a 320 CSS-pixel viewport.

This is not a full WCAG conformance assessment. A complete reading and interaction pass with VoiceOver and NVDA remains necessary. The PDF resume has an HTML alternative; linked third-party manuscripts and external sites have not been audited. Figure alternatives summarize their content but do not reproduce every numerical value. Keep the HTML resume synchronized when replacing the PDF, and preserve heading order, useful link names, and image descriptions when adding content.

Reference: [WAI heading guidance](https://www.w3.org/WAI/tutorials/page-structure/headings/) and [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/).
