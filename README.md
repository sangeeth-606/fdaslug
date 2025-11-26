# fullstack-docker-app

Project scaffold for a small React + Express + Postgres app, prepared for Docker.

Structure created:

```
fullstack-docker-app/
├── backend/
│   ├── app.js
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── package.json
│   ├── Dockerfile
│   └── src/
│       └── App.js
├── db-data/  # contains .gitkeep to reserve volume directory
├── docker-compose.yml  # placeholder
├── .env  # placeholder
└── README.md
```

What I added for you
- Backend: `backend/app.js` (Express server + Postgres client) and `backend/package.json`.
- Frontend: `frontend/src/App.js` and `frontend/package.json`.
- Placeholder Dockerfiles for `backend/` and `frontend/`.
- `db-data/.gitkeep` to ensure the empty database-volume folder is tracked.
- `docker-compose.yml` (placeholder with version), `.env` (placeholder), and this `README.md`.

How to finish and submit (short):

1. Create a new repository on GitHub (suggested name: `fullstack-docker-app`).
2. On your machine, in the project folder, run these commands to push:

   git remote add origin <GITHUB_REPO_URL>
   git branch -M main
   git push -u origin main

3. Verify the repo on GitHub lists the following files and folders:
   - `backend/` (with `app.js` and `package.json`)
   - `frontend/` (with `src/App.js` and `package.json`)
   - `db-data/` (can be empty except for `.gitkeep`)
   - `.env` (empty is fine)
   - `docker-compose.yml`
   - `README.md`

4. Take a screenshot of your GitHub repository page showing the full project structure and repository name.

Optional next steps you can do (short):
- Add Dockerfile content and a `docker-compose.yml` to wire up backend, frontend, and a Postgres service.
- Install dependencies in `backend` and `frontend` and test the apps locally.

If you want, I can also:
- Add a working `docker-compose.yml` and complete `Dockerfile`s now.
- Create a small script to automatically create the GitHub repo and push (requires a personal access token).
