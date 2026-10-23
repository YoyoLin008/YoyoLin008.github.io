# Accessibility review

Reviewed October 22, 2026. The site uses native HTML semantics rather than an accessibility overlay.

Each view has one main heading, followed by ordered subheadings. Navigation uses links, identifies the current section, updates the document title, and moves keyboard focus to the new heading after navigation. Every page includes a skip link and a main landmark. The experience timeline is an ordered list.

Keyboard focus is visible. Links to publication resources include the paper title in their accessible names, and links that open another tab announce that behavior. Images have text alternatives; decorative icons are hidden from screen readers. The theme uses darker orange text for contrast, respects reduced-motion preferences, and reflows on narrow screens. An HTML resume is available alongside the PDF.

## Verification

Structural checks cover the six application views and six HTML pages, including heading order, image alternatives, language, skip links, and focus styles. Run `node scripts/check-accessibility.mjs` after changing templates. Chrome accessibility-tree and keyboard checks covered skip navigation, section changes, browser Back, hobby links, and the jailbreak disclosure. All pages were checked for horizontal overflow at a 320 CSS-pixel viewport.

The PDF resume's edited text is connected to its structure tree and parent tree. Text content is ordered by the semantic structure, headings use H1/H2/H3, and repeated page footers are artifacts. Run `python3 scripts/check-resume-tags.py` with pypdf installed after replacing or editing it. The repair preserves the two-page visual layout. Native Safari PDF accessibility-tree checks exposed the section headings and revised content; the initial broad repetition and misplaced research bullets were corrected. Some viewer-specific repetition around the peer-review role/date remains in Safari's accessibility tree, so the HTML resume remains available at `resume.html`. Experience presents one PDF resume link.

This is not a full WCAG or PDF/UA conformance assessment. VoiceOver was temporarily enabled, but the automation interface did not reliably expose its speech or cursor, so an end-to-end VoiceOver pass is not confirmed. VoiceOver was restored to its original off setting. A complete reading and interaction pass with VoiceOver and NVDA remains necessary. Linked third-party manuscripts and external sites have not been audited. Figure alternatives summarize their content but do not reproduce every numerical value. Keep the HTML resume synchronized when replacing the PDF, and preserve heading order, useful link names, and image descriptions when adding content.

Reference: [WAI heading guidance](https://www.w3.org/WAI/tutorials/page-structure/headings/) and [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/).
