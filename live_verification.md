
## Updated verification

After the commit was pushed to `origin/main`, the cache-busted URL https://heshamelshamy.github.io/?v=ae8bcb5 shows the updated content:

- German heading: `BIM-Qualitätsmanagement nach ISO 19650 Standards`
- English heading: `BIM Quality Management according to ISO 19650 Standards`
- German supporting copy: `Die BIM-Planung orientiert sich an strukturierten Informationsprozessen, klaren Verantwortlichkeiten und nachvollziehbaren Datenständen nach den Grundsätzen der ISO 19650. So entstehen präzise, koordinierte und transparent dokumentierte Planungsgrundlagen.`
- English supporting copy: `The BIM approach follows structured information processes, clear responsibilities, and traceable data states in line with the principles of ISO 19650. This supports precise, coordinated, and transparently documented planning deliverables.`

The deployment is live and confirmed.


## Change-request deployment — 2026-08-12

Commit `81c6873` was pushed to `origin/main` and the cache-busted homepage https://heshamelshamy.github.io/?v=81c6873 now confirms the requested bilingual changes: BIM-based road and drainage hero copy, BIM Modeler branding, updated CTAs, abstract visualization caption, and the existing CV-based experience and education sections.

The live services page at https://heshamelshamy.github.io/leistungen.html?v=377875a confirms six bilingual technical service cards, the Software & Working Methods section, footer links, and no image placeholders. The responsive grid correction was published in commit `377875a`.

The live project page at https://heshamelshamy.github.io/projekte.html?v=377875a confirms seven text-only bilingual project cards with the requested field structure and confidentiality notes. The live contact page at https://heshamelshamy.github.io/kontakt.html?v=377875a confirms the remote-collaboration statement, email CTA, and footer links.

The live Impressum page at https://heshamelshamy.github.io/impressum.html?v=377875a and Datenschutz page at https://heshamelshamy.github.io/datenschutz.html?v=377875a both render successfully in bilingual-ready structure with footer navigation. Both pages clearly identify their legal text as a working draft requiring review before final publication.


## Copilot enhancement deployment — 2026-08-12

Commit `51b1172` was pushed to `origin/main`.

The cache-busted live homepage at https://heshamelshamy.github.io/?v=51b1172b confirms the latest build. The page contains the skip link, accessible language and theme controls, canonical URL, Open Graph metadata, and JSON-LD Person structured data. The browser console confirms `html.lang === "en"`, the English mode has `31` visible English elements and `0` visible German elements, and the language button reports `aria-pressed="true"`.

All six HTML pages were updated with the same categories of improvements. External links opened in new tabs use `rel="noopener noreferrer"`.


## Claude-inspired implementation deployment — 2026-08-12

Commit `d51d60d` was pushed to `origin/main`. The GitHub source confirms the refined Project 01 Navisworks coordination scope and Project 03 wording for two level crossings, two roundabouts, two at-grade junctions, AutoTURN swept-path simulation, pavement design according to RStO 12, and VESTRA quantity take-offs.

The live custom 404 page at https://heshamelshamy.github.io/404.html?v=d51d60d renders successfully in the selected English mode with an accessible language control, theme control, and homepage return action. The shared favicon, `sitemap.xml`, and 404 page were published in the same commit.


## CSS/JS optimization deployment — propagation check

Commit `8d7e318` was pushed to `origin/main`. The first GitHub Pages request still served the previous page build: the browser reported a legacy inline language handler and no external `site.js` reference. This indicates normal GitHub Pages build propagation rather than a source-code failure; the committed source will be checked separately before the final cache-busted live verification.


The GitHub main branch source for commit `8d7e318` contains the new `site.js` reference, early language/theme bootstrap, and explicit dimensions plus decode/fetch-priority settings for the homepage images. The cache-busted live homepage at https://heshamelshamy.github.io/?v=8d7e318b then served the updated build successfully, with the external theme control label visible and the selected English-only view intact.


Browser verification for commit `8d7e318` confirms that the live page now uses the external `site.js`, has no legacy inline `setLanguage` handler, and exposes only the active language (`31` English visible elements and `0` German elements in English mode). Both image tags expose the intended `2560×1440` dimensions; the hero carries eager loading, asynchronous decode, and high fetch priority while the lower image remains lazy-loaded. Clicking the shared language control successfully switched the live page to German-only content.


## Cinematic hero deployment — propagation check

Commit `0955d07` was pushed to `origin/main`. The raw GitHub source confirms the new `hero-cinematic` markup, technical signal chips and `motionToggle` control are present. The initial GitHub Pages request still showed the prior hero, indicating that the Pages build had not yet propagated; a fresh cache-busted live check is required before final completion.


A first cache-busted visit after commit `26e54ba` still loaded the previous motion-label CSS: computed styles showed both German and English “playing” labels. The live DOM did not yet contain the revised language-specific selector, so the source and live page will be rechecked after GitHub Pages propagation rather than treating this as a final implementation defect.


Local and committed source inspection for `26e54ba` confirmed that the language-specific motion-label selector is present in the pushed commit. The raw branch endpoint remained cached shortly after push, so the final GitHub Pages view should be checked with a fresh cache-busting request once the deployment propagates.


Final cache-busted live request for commit `26e54ba` succeeded. The German view now displays only the German motion-control label “Bewegung anhalten”; the English label is no longer rendered visibly. The cinematic hero, technical signal chips, clear contrast overlay, and movement control are present on the live homepage.


Commit `a53ee52` was pushed to version the shared script reference. The exact commit source confirms `<script src="site.js?v=1.1.0" defer>`, ensuring browsers fetch the current interaction logic once the latest GitHub Pages HTML has propagated.


The final live verification at `?v=a53ee52-final` confirmed the versioned shared JavaScript loaded (`site.js?v=1.1.0`) and exposed `applyHeroMotion`. The pause control successfully changed the hero to the paused state, persisted `portfolio-hero-motion=paused`, and changed the German label to “Bewegung fortsetzen”.


## PageSpeed initial check

PageSpeed Insights opened the mobile report shell for the live homepage on 2026-08-12. Field data was unavailable for this low-traffic URL, and the rendered report did not complete a valid lab-analysis result in the browser session. A direct PageSpeed/Lighthouse diagnostic path will be used next, alongside live browser checks.


## Mobile hero screenshot checks

A real 375×812 headless Chromium capture showed the German mobile hero with no visible horizontal clipping: navigation wraps cleanly, the title remains readable, both primary calls to action fit the narrow viewport, and the technical chips continue below the fold as expected. The 412×915 capture encountered a transient DNS resolution failure (`DNS_PROBE_STARTED`) in the standalone headless browser, so it was not treated as a website-layout defect; the live browser session and the 375px capture both loaded successfully.


The optimized Hero asset commit `268de47` was pushed successfully. The first cache-busted GitHub Pages request still loaded the prior image resource (`bim-project.webp`) rather than `bim-project-hero.webp`, while all interaction checks remained healthy and no horizontal overflow was detected. This is consistent with the short GitHub Pages rebuild delay seen in prior deployments; the live page will be refreshed again before final reporting.


A second mobile PageSpeed Insights run was started after the 164 KB Hero asset deployment. At the time of checking, the PageSpeed interface was still in the “Running analysis” state; the earlier completed benchmark remains the only final numerical lab report available during this session.


Post-optimization local mobile capture at 375×812 confirmed that the smaller Hero source preserves the same clear German heading, readable supporting copy, correctly sized primary and secondary calls to action, and no visible clipping. The Hero background remains visually coherent after the size reduction.


## Licensed-image integration — local pre-publish check

`projekte.html` loaded in the German-only view. Project 02 displayed the LKW parking photo inside a responsive rounded frame, followed by a clearly readable statement that the image is illustrative rather than a portfolio-project photograph, author/source credit, CC BY-SA 3.0 link, and web-optimization notice. The page’s extracted content confirmed the corresponding figure, attribution and licence link for Project 03.
`leistungen.html` also loaded in the German-only view. The new working-methods section held its two-column desktop layout: service text and method tags remained readable at left, while the licensed Köln-Nord interchange image appeared at right with a contained frame and visible source/licence credit. No overlap, clipping or unintended English content was visible during the local browser inspection.
After switching the local services page to English, browser inspection measured `visibleEnglish: 26`, `visibleGerman: 0`, and `overflow: false`. The licensed Köln-Nord WebP was complete at its intended natural size of 960 × 960 px. This confirms that adding the image and caption preserved strict language separation and introduced no horizontal overflow.
After the final accessibility adjustment, the English local project page showed the Project 02 and Project 03 captions only in English, while the image `alt` attributes were deliberately empty because the adjacent language-specific captions provide the required descriptive and attribution context. This avoids exposing a fixed German alternative text to English assistive-technology users.


Commit `7abcbfd` was pushed to `origin/main`. The first two cache-busted GitHub Pages requests to `projekte.html?v=7abcbfd` still served the preceding text-only project page, with no licensed-image links in the DOM. This is treated as normal GitHub Pages propagation delay; the pushed source and live deployment will be checked again rather than treating it as an implementation error.
The follow-up cache-busted live check succeeded. `projekte.html?v=7abcbfd-live` now exposes both Project 02 and Project 03 WebP images together with their German illustrative-image disclaimer, Wikimedia Commons source link, author credit and CC BY-SA 3.0 licence link. `leistungen.html?v=7abcbfd-live` likewise exposes the Köln-Nord WebP and the corresponding visible licence credit. The GitHub Pages deployment for commit `7abcbfd` is live.
The final live console check on `projekte.html?v=7abcbfd-final` reported German-only content (`visibleGerman: 34`, `visibleEnglish: 0`) and no horizontal overflow. The Project 02 LKW asset was fully decoded at 960 × 502 px. Project 03 remained deferred at this initial viewport because it correctly uses `loading="lazy"`; it will be checked after scrolling it into view.
After scrolling the live project page, the Project 02 LKW photograph, rounded frame, attribution block, and the surrounding specification cards remained visually aligned without clipping. The Project 03 heading entered the viewport, initiating the lazy-load path for its roundabout image.
With Project 03 scrolled into view, its roundabout image was fully decoded at 960 × 638 px. The final live image check confirmed both project assets are loaded from GitHub Pages at their expected dimensions: `lkw-parkplatz-lehrter-see.webp` (960 × 502) and `kreisverkehr-bayern.webp` (960 × 638).

## Restore stable design — 2026-08-13

The pre-modernization visual structure was restored from commit `4e8b001`. The new bilingual Project 03 was preserved, and the former industrial-area case was retained as Project 04. Restore commit `8ef44c6` was pushed to `origin/main`. The live project page confirms the restored dark hero/card layout, Project 03 and Project 04 labels, and German-only rendering in German mode (`visibleGerman: 119`, `visibleEnglish: 0`).

Live preview: https://heshamelshamy.github.io/projekte.html?v=8ef44c6-stable

## Lovable enhancement verification — 2026-08-13

Local verification completed before the GitHub Pages push. The shared stylesheet is loaded by all seven HTML pages; all pages retain one H1, German as the default document language, no inline style block, and shared `site.js`. The temporary static QA check passed for bilingual image metadata, language controls, theme controls, mobile menu logic, dynamic footer year, and JavaScript syntax. `git diff --check` also passed.

The mobile header was checked at 390×844. The compact header hides the bilingual role description, exposes the hamburger control, keeps the language and theme controls visible, and prevents the brand description from being re-enabled by the language visibility rule. The motion control now exposes only one active bilingual state label.

## GitHub Pages propagation — commit 33d572e

The first cache-busted request briefly served the previous build. A subsequent request at https://heshamelshamy.github.io/?v=33d572e-check2 served the new source: `assets/site.css`, `site.js?v=1.2.0`, the mobile menu button, one H1, German default language, and zero visible English elements. The live DOM reported 33 visible German elements and the new shared stylesheet and JavaScript. Desktop visibility of the brand role description is expected; its mobile-specific hiding is verified separately at 390×844.

The live 390×844 capture shows the compact header with the role description hidden, hamburger control visible, language and theme controls aligned, readable hero copy, and no visible horizontal clipping. Live interaction checks passed: the menu opened and closed through `aria-expanded` and `.is-open`, the language toggle produced English-only content and returned to German, the theme toggle changed and restored the theme, and the motion toggle changed and restored its state.
