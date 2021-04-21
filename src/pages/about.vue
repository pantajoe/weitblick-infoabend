<script setup lang="ts">
import { useMarkdownIt } from '~/logic';

const md = useMarkdownIt();
const source = `
# About

Here you can see some Markdown.
Here is also a [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

You can simply use

\`\`\`javascript
import { useMarkdownIt } from '~/logic';

const md = useMarkdownIt();
\`\`\`

in your setup script and call \`md.render(string)\` in your template. If you want to have this HTML-rendered markdown
styled, you can assign one of the tailwind classes provided by the package [\`@tailwindcss/typography\`](https://github.com/tailwindlabs/tailwindcss-typography):

- \`prose-sm\`
- \`prose\`
- \`prose-lg\`
- \`prose-xl\`
- \`prose-2xl\`
`;
</script>

<template>
  <div class="prose mx-auto text-left" v-html="md.render(source)" />
</template>
