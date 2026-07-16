# DevSnippets

A developer knowledge base



# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Context Files
Read the following to get the full context of the project
- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config via `eslint.config.mjs`)

There is no test setup in this repository yet.

## Next.js version note

This project pins `next@16.2.10`, which is newer than the training data for most models and has breaking changes vs. the Next.js you may know — APIs, conventions, and file structure may differ. Before writing App Router code (routing, data fetching, config, etc.), check the bundled docs in `node_modules/next/dist/docs/` (see `01-app/` for App Router topics) rather than relying on prior knowledge, and follow any deprecation notices found there.
