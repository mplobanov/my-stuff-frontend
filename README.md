# my-stuff-frontend

A fullstack inventory web app built in 2022 as a learning project for the **React + TypeScript + GraphQL + Apollo** stack. Items (clothing in my case) with groups, locations, and per-item status; full auth flow; GraphQL contract throughout. Backed by a Django + Graphene API I also wrote ([`mplobanov/mystuff_backend`](https://github.com/mplobanov/mystuff_backend)).

## What the app does

- **Auth** — registration, login, current-user session
- **Inventory** — items with brand, color, size, volume, free-text name; filter by any combination plus group, location, and status
- **Hierarchy** — groups → items, with per-item location and status assignments
- **Settings** — manage your own groups / locations / statuses
- **Forms** — Formik + Yup throughout (auth, item editing, settings)

## Stack

- **UI:** React 17, TypeScript 4, CSS Modules (no preprocessor)
- **Data:** Apollo Client 3, GraphQL 15 with Relay-style pagination
- **Routing:** React Router 6
- **Forms:** Formik + Yup
- **Component dev:** Storybook 6
- **Build:** Create React App
- **Backend:** Django + Graphene (separate repo, linked above)

## Architecture notes

- Custom hooks (`useItems`, `useGroups`, `useLocations`, `useStatuses`, `useUser`) wrap Apollo queries and mutations so each page gets a clean domain-specific interface instead of raw GraphQL calls.
- GraphQL schema is checked in (`schema.graphql` + `schema.json`) and used for editor tooling and codegen.
- Dev environment runs over HTTPS locally — the auth flow needed it; see the `start` script in `package.json`.

## Status

Hosted backend endpoint (`api.stuff.lbnv.mp`) is no longer running, so the live app isn't operable. The repo stands on its own as a code reference.
