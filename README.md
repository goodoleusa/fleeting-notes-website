# Fleeting Notes Website
- [Markdown files](https://github.com/fleetingnotes/fleeting-notes-website-md) for this website
- Website at https://fleetingnotes.app

To publish your own notes, see the [linked-blog-starter](https://github.com/matthewwong525/linked-blog-starter) repository. This repository is forked from that

---

## Where to Put Your Markdown Files

Content is loaded from the directory set by **`COMMON_MD_DIR`** in `.env` (default: `./common_md`).

### Folder Structure → URL Mapping

| Folder / File | URL |
|---------------|-----|
| `common_md/docs/<section>/<page>.md` | `/docs/<section>/<page>` |
| `common_md/docs/<section>/index.md` | Section landing (sidebar only) |
| `common_md/posts/<post>.md` | `/posts/<post>` (shown in blog index) |
| `common_md/<any-slug>.md` | `/<any-slug>` (standalone pages) |

### Example Structure

```
common_md/
├── docs/
│   └── getting-started/
│       ├── introduction.md    → /docs/getting-started/introduction
│       └── installation.md   → /docs/getting-started/installation
├── posts/
│   ├── my-first-post.md      → /posts/my-first-post
│   └── another-post.md      → /posts/another-post
├── about.md                  → /about
└── my-notes/
    └── note.md               → /my-notes/note
```

### Frontmatter

Add YAML frontmatter to control metadata:

```yaml
---
title: My Page Title
date: 2025-02-13
excerpt: Short description for previews
author:
  name: Your Name
  picture: /path/to/avatar.png
coverImage: /path/to/cover.png
---
```

### Images

Place images next to your `.md` files. At build time they are copied to `public/md_assets`. Use relative paths in markdown: `![alt](image.png)`.

---

## Using an Obsidian Vault as Your Website Content

You can point the site at an Obsidian vault (or a subset) so your notes become web pages.

### 1. Point to Your Vault

In `.env`:

```env
COMMON_MD_DIR="/path/to/your/obsidian-vault"
```

Or use a relative path if the vault is inside the project:

```env
COMMON_MD_DIR="./my-vault"
```

### 2. Link Format Compatibility

The site uses **standard markdown links** `[text](target.md)`:

- ✅ `[Note](My Note.md)` or `[Note](folder/My%20Note.md)`
- ❌ Obsidian wikilinks `[[My Note]]` — not converted to URLs

**Workaround for wikilinks:** Use standard links in notes you publish, or add a build step/plugin to convert `[[Note]]` → `[Note](Note.md)` before build.

### 3. Organize for the Site

- **Blog posts:** Put publishable notes in `posts/` (or whatever folder you map to blog)
- **Docs:** Put in `docs/<section>/` for the docs sidebar
- **Other pages:** Place at the root or in subfolders

### 4. Frontmatter for Published Notes

Add `title`, `date`, and optionally `excerpt` so the site can render metadata correctly.

### 5. Build and Deploy

- `npm run dev` — copies images and starts dev server
- `npm run build` — copies images, then builds for production

The `copyimages` script runs before dev/build and syncs non-markdown assets from `COMMON_MD_DIR` to `public/md_assets`.
