# BBW visual reference notes

Reviewed on 2026-08-12.

The BBW GmbH homepage uses full-width hosted background videos in a visual hero/section treatment. The inspected video elements are configured with `autoplay`, `muted`, `playsinline`, and `loop`; the first background video container is additionally hidden on mobile. The visible composition uses a full-bleed aerial road-intersection video immediately below a clean white navigation bar, with no copy overlay on the moving image in the observed desktop view. The following content moves to a clear white panel with strong typography and service links.

Adaptation principles for Hesham Elshamy's portfolio:
- Use an original infrastructure/BIM-oriented visual rather than BBW video files or code.
- Preserve the clean navigation and wide visual treatment, but overlay a restrained technical gradient and concise professional copy suited to a personal portfolio.
- Use a still-image fallback and respect `prefers-reduced-motion`; do not automatically load a heavy video on mobile.
- Give users a clear play/pause control if a motion asset is used.
