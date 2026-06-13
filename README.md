# Proto

## Installed skill: UI/UX Pro Max

This repo has the [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
skill bundle installed under `.claude/skills/`, so Claude Code can use it
automatically when a task involves UI structure, visual design, interaction
patterns, or UX quality control.

### Skills available

| Skill | Purpose |
|-------|---------|
| `ui-ux-pro-max` | Design intelligence: 50+ UI styles, 161 color palettes, 57 font pairings, 99 UX guidelines, 25 chart types across many stacks. Searchable CSV/BM25 engine. |
| `ckm:design` | Logo, icon, and creative image design routing + prompt engineering. |
| `ckm:design-system` | Design tokens (primitive/semantic/component) and slide generation. |
| `ckm:ui-styling` | Tailwind + shadcn/ui theming, components, accessibility, canvas fonts. |
| `ckm:brand` | Brand guidelines, voice/messaging frameworks, asset organization. |
| `ckm:slides` | Slide deck creation: layouts, copywriting formulas, HTML templates. |
| `ckm:banner-design` | Banner sizing and style references. |

### Using the core search engine

The `ui-ux-pro-max` skill is driven by a local Python search tool (no network):

```bash
# Full design-system recommendation for a product
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fintech crypto dashboard" --design-system

# Search a single domain (style, color, typography, ux, chart, landing, product, ...)
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism dark" --domain style

# Stack-specific guidance
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "list performance" --stack react
```

Requires Python 3. See `.claude/skills/ui-ux-pro-max/SKILL.md` for the full
workflow, rule categories, and pre-delivery checklist.

---

Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (MIT License)
