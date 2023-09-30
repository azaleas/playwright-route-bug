# Reproduction for page.route issues with chromium and workers

This is a reproduction for a possible bug or incorrect behavior when using `page.route` mocking for a fetch that happens within subworkers.

The issue happens with chromium only and both webkit and firefox are working as expected.

This a vanilla JS reproduction, with bootstrapping done by Vite and pnpp. To run the dev server, use `pnpm run dev` or `npm run dev`. For tests `pnpm run test` or `npm run test`

Node version 20.5.0 and pnpm version 8.6.11
