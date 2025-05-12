# Design

Here’s an design specification that grounds the site in the long lineage of developer-essayists while applying today’s best practices in web typography, responsiveness, and accessibility—stripped of all but the essential.

![Design Mockup](design.png)

---

## 1. Design Concept Name

**“The Essayist’s Canvas”**
A reference to a blank page that foregrounds words and ideas.

## 2. Visual Intent

- **Tone:** Thoughtful, austere, timeless.
- **Tradition:** In the spirit of Joe Armstrong’s polemics, Paul Graham’s essays, Rich Hickey’s manifestos—places where words carry the weight.
- **Purpose:** Provide an uncluttered stage for long-form writing and clear navigation between essays, with zero distractions.

## 3. Color Palette

- **Background:** Pure white (#FFFFFF).
- **Primary Text:** Near-black (#111111) for maximum contrast.
- **Link Color:** Deep indigo (#2E3A8C), underlined by default.
- **Link Hover/Focus:** Bright indigo (#4F46E5) with no underline removal.
- **Metadata (dates, bylines):** Cool gray (#6B7280).

> _Rationale:_ Minimal palette ensures no visual noise—links stand out clearly, text reads like a printed page.

## 4. Typography Choices

1. **Base Font Stack:**

   - Primary: _Source Serif Pro_ (serif for body text)
   - Fallbacks: Georgia, “Times New Roman”, serif

2. **Heading Stack:**

   - _Inter_ (sans-serif for navigation, bylines)
   - Fallbacks: system-ui, sans-serif

3. **Sizing & Hierarchy:**

   - **H1 (Site title on landing):** 2.5rem (\~40px), line-height 1.2
   - **H2 (Post titles):** 1.75rem (\~28px), line-height 1.3
   - **Body:** 1rem (16px), line-height 1.75
   - **Metadata (date, author):** 0.875rem (14px), line-height 1.5

4. **Typographic Features:**

   - **Hyphenation:** Enabled for narrow viewports.
   - **Text wrap:** Optimal measure (\~65–75 characters).
   - **Paragraph spacing:** Margin-bottom 1em; no first-paragraph indent.
   - **Accessible link underlines:** Always underlined, with increased thickness.

## 5. Branding Asset Placement Strategy

- **Photo:** Omit on landing; instead, use a tiny circular avatar (32px) next to the byline on individual posts—echoing Ward Cunningham’s minimal sidebar style.
- **Logo/Text mark:** Represent yourself by name in the header (H1) on landing; no separate graphic.

## 6. Layout & Composition

- **Responsive Grid:**

  - **Single column** on mobile (padding 1rem).
  - **Centered column** on tablet/desktop, max-width 680px, auto margins.

- **Header:**

  - Landing: H1 at top-left, nav links (“Posts” / “Contact”) in same line, spaced with em units.
  - Post pages: A back-caret link (“← Posts”) in sans-serif, 1rem, top-left.

- **Spacing Rhythm:**

  - 2rem above H1; 1.5rem below; 2rem before any H2; 1rem before body text.

- **Visual Anchors:**

  - **Landing:** H1 → intro blurb → latest posts list.
  - **Post:** Back link → date/author line → H2 title → body text.

## 7. Special Treatments

- **Images:** Only used if integral to an essay; otherwise hidden.
- **Code Blocks:** Monospaced, 0.9rem, light gray background (#F3F4F6), 1px radius corners, horizontal scroll only when needed.
- **Blockquotes:** Italic serif text, left border 4px solid #E5E7EB, padding-left 1rem.
- **Focus Styles:** All interactive elements get a 3px outline in the link hover color.
- **Print Stylesheet:** Remove navigation, adjust max-width to 700px, black text on white, hide code backgrounds.

---

This stripped-back, typographically driven design sits squarely alongside the sites of Kay, Cunningham, Armstrong, Graham, Hickey, Victor, Nygard, and Fowler—updated for today’s responsive, accessible web.
