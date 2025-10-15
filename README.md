# e-moji

A small set of emoji data. Currently `164.59 kB | gzip: 25.61 kB`

Maintained to be compatible with a custom, forked version of
`@tiptap/extension-emoji`, one which can use:

- an optional `tags` property on the exported `EmojiItem` type e.g.
  `tags?: string[]` instead of the original `tags: string[]`
- _PLANNED:_ a more compact fallback image strategy. See `EmojiItem` comments.

## History

### v1.0.0

- Forked from ueberdosis/tiptap/releases/tag/v3.7.0
- Removed tiptap related code.
- Setup vite library build.
- Reorganized code to separate `scripts` from `src`.
- Modify `scripts/generate.ts` and `EmojiItem` type to produce smaller data.
- Added options to `scripts/generate.ts` to generate multiple files.
