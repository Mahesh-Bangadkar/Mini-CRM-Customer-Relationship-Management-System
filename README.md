# Mini CRM System

A responsive Mini CRM built with React and Vite for managing customer leads in the browser. It fetches initial data from a public JSON API, stores it in localStorage, and supports add, edit, delete, search, and filter workflows on local data only.

## Features

- Fetches initial lead data from `jsonplaceholder.typicode.com`
- Stores API data in `localStorage` after the first load
- Add, edit, and delete leads locally
- Search leads by lead name or company name
- Filter leads by lead status
- Responsive dashboard layout for mobile and desktop
- Summary cards for lead status counts

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- React functional components
- Axios
- Vite

## Project Structure

- `src/App.jsx` - app shell and sidebar state
- `src/Components/Dashboard.jsx` - data loading, CRUD handlers, and layout
- `src/Components/Leadform.jsx` - add/edit lead form and validation
- `src/Components/Leads.jsx` - search and filter logic using `useMemo`
- `src/Components/LeadRow.jsx` - lead list rows and actions
- `src/Components/Filter.jsx` - search and status filter controls

## Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Run lint checks:

```bash
npm run lint
```

## Data Flow

- On first load, the app fetches users from the public API.
- The response is normalized into CRM lead records.
- The lead list is saved to `localStorage` for persistence.
- All create, update, and delete operations work on the local in-memory state and then sync back to `localStorage`.

## Screenshots

Add application screenshots here before submission.

- Dashboard overview
- Add lead form
- Edit lead modal
- Search and filter state

## Notes

- Public API data is used read-only.
- Lead changes are persisted only in the browser via `localStorage`.
- The repository should include at least 7 meaningful commits before final submission.