# truborepo-template

A template project of type monorepo

### 1. Install top-level dependencies

`yarn`
`npm install commitizen -g`

The root directory has a `package.json` which contains build-related dependencies for tasks including:

- Building & deploying the docs
- Generating TypeScript types from the GraphQL schema
- Linting, formatting & testing tasks to run on git commit & push

### 2. Switch yarn to berry

- `yarn set version canary`
- `yarn install`

This runs the yarn "install" command, will scan those directories and look for children `package.json`. Their content is used to define the workspace topology (core, common, dependencies...), and cross-links monorepo dependencies.

### 3. Build & test all packages

- `yarn g:test-unit`
- `yarn g:lint`
- `yarn g:typecheck`
- `yarn g:build`

### 4. Publishing

> Optional

If you need to share some packages outside of the monorepo, you can publish them to npm or private repositories.
An example based on tsup is present in each package. Versioning and publishing can be done with [atlassian/changeset](https://github.com/atlassian/changesets),
and it's simple as typing:

```bash
$ yarn g:changeset
$ git cz
```

Follow the instructions... and commit the changeset file. A "Version Packages" P/R will appear after CI checks.
When merging it, a [github action](./.github/workflows/release-or-version-pr.yml) will publish the packages
with resulting semver version and generate CHANGELOGS for you.

### 5. Maintaining deps updated

The global commands `yarn deps:update` will help to maintain the same versions across the entire monorepo.
They are based on the excellent [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
(see [options](https://github.com/raineorshine/npm-check-updates#options), i.e: `yarn check:deps -t minor`).

> After running `yarn deps:update`, a `yarn install` is required. To prevent
> having duplicates in the yarn.lock, you can run `yarn dedupe --check` and `yarn dedupe` to
> apply deduplication. The duplicate check is enforced in the example github actions.

### 6. Editor support

> 6.1 VSCode

The bridge demo have full setting for vscode workspace (`agile-turborepo-starter.code-workspace`) that the `eslint.workingDirectories` setting is set: just open it.

More info [here](https://github.com/microsoft/vscode-eslint#mono-repository-setup)

### 7. prelease mode

- yarn changeset pre enter next
- yarn changeset version
- git add .
- git commit -m "Enter prerelease mode and version packages"
- yarn changeset publish
- git push --follow-tags

### Notes For `esm` support, we must make sure that as below steps

- all imported node modules support `type:module` or `support all module.exports as named exports.` like bellow shown.

- `fast-glob`, `lodash` is a CommonJS module, which may not support all module.exports as named exports.
  CommonJS modules can always be imported via the default export, for example using:

```ts
import fastglob from 'fast-glob';
import _ from 'lodash';
import ts from 'typescript';
```

https://simonplend.com/node-js-now-supports-named-imports-from-commonjs-modules-but-what-does-that-mean/

The ECMAScript Module Namespace representation of a CommonJS module will always be a namespace with a default export key pointing to the CommonJS module.exports value.

### Publish

1. yarn g:changeset
2. yarn g:version
3. yarn g:release
