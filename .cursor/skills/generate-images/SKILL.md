---
name: generate-images
description: Generate website images, hero cards, backgrounds, and marketing graphics for Jobs Hutch. Use when the user asks to generate, create, or regenerate images, banners, thumbnails, hero assets, or visual files for this site.
---

# Generate Images (Jobs Hutch)

## When to use

- User requests new or updated site visuals (hero cards, backgrounds, icons, OG images)
- User provides reference images and wants similar assets with updated copy
- User asks to create or replace files under `assets/`

## Workflow

1. **Identify the asset** — check `index.html` and `styles.css` for current paths under `assets/`.
2. **Define the brief** — subject, dimensions, mood, and any on-image text.
3. **Generate** with the `GenerateImage` tool, one file per asset.
4. **Save** to `assets/` using the existing filename when replacing, or a descriptive kebab-case name for new files.
5. **Wire up** — update `index.html` or `styles.css` if the path or filename changed.

## Jobs Hutch visual style

| Element | Spec |
|---------|------|
| Brand | Jobs Hutch — Singapore-focused flexible work job platform |
| Mood | Professional, approachable, modern Singapore workplace |
| Palette | Navy/teal accents aligned with `styles.css` (`--navy`, `--accent-2`, soft grid backgrounds) |
| Hero cards | Floating profile/role cards; clean UI card frames; realistic but polished |
| Backgrounds | Soft grid or subtle office/city blur; not gaming or casino style |
| Text on images | English only unless user specifies otherwise; spell exactly as approved |

## Existing asset references

| File | Usage |
|------|-------|
| `assets/hero-bg-soft-grid.png` | Hero section background (`styles.css`) |
| `assets/hero-card-jessica-tan.png` | Hero floating card 1 |
| `assets/hero-card-opportunity-admin-support.png` | Hero floating card 2 |
| `assets/hero-card-customer-relations-lead.png` | Hero floating card 3 |
| `assets/hero-card-marcus-lim.png` | Hero floating card 4 |

## Text accuracy rules

- Match approved copy verbatim (role titles, names, amounts)
- Keep line breaks similar to reference layout when regenerating cards
- Do not mix old brand names (`CivicPath Works`, `civicpathworks.sg`)

## Quality check

- [ ] Filename matches HTML/CSS reference or HTML/CSS was updated
- [ ] Visual style fits Jobs Hutch (professional SG flexible-work job platform)
- [ ] No incorrect or blurry on-image text
- [ ] PNG suitable for web; reasonable dimensions for hero/card use
