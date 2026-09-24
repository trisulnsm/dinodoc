# CLAUDE.md: Trisul docs (dinodoc)

Rules for any Claude agent that edits this repository.

## Repo
- Docusaurus site. Doc sources live under `docs/`. The sidebar is hand-written in `sidebars.js`. Redirects and link settings are in `docusaurus.config.js`.
- Audits and fix lists live in `docs-audit/`. Apply only the finding IDs the task names (e.g. F-B1-5).

## Hard rules
- Never break URLs. If you move or rename a page, add a redirect in `docusaurus.config.js`.
- When renaming a heading that other pages may link to, pin the old anchor: `## New Name {#old-slug}`.
- Never delete a file unless the task explicitly says to. When it does, delete it from the working tree and list it in the summary. The maintainer stages the deletion.
- Don't change the meaning of product facts: ports, menu paths, settings, sizing numbers. If a fix needs a product fact that isn't in the repo, leave `<!-- TODO(verify): ... -->` and list it in the PR description.
- Findings marked NEEDS SME are out of scope unless the task gives the answer.
- Use plain Markdown and Docusaurus admonitions (`:::note`, `:::tip`, `:::info`). Don't add new MDX components.
- Links: use absolute `/docs/...` paths.

## Writing style
- Second person, present tense, short sentences.
- Use UI labels exactly as they appear in the product, e.g. **Tools → Explore Flows**.
- No marketing adjectives. Don't write "simply", "just", "easily" or "incredibly".

## Git: hands off
- Do NOT run any git command that changes state: no branch, checkout, add, commit, push, pull, merge, rebase or stash.
  The maintainer does all git work manually. Read-only commands (`git status`, `git diff`) are fine.
- Edit files in the working tree only.

## When you finish a batch
1. Run `npm ci` if dependencies are missing, then `npm run clear && npm run build`. The build must pass with 0 broken links and 0 broken anchors.
2. Save the brief, unchanged, as `docs-audit/fixes-<audit-id>-<n>.md`.
3. Write a summary to `docs-audit/fixes-<audit-id>-<n>-summary.md`, and also print it, with:
   - every finding ID applied, with a one-line summary each;
   - findings skipped, and why;
   - any TODO(verify) items left in the pages;
   - the list of changed files (from `git status`).
   The maintainer uses this as the commit message and PR description.
