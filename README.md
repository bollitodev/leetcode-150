# Top Interview 150 Progress Tracker

This project is a React application built with TypeScript and Vite. It tracks and displays your progress in solving the top 150 interview questions from LeetCode.

## Project Goal

The goal of this project is to show the current progress in solving the 150 must-do questions for interview preparation from [LeetCode](https://leetcode.com/studyplan/top-interview-150/).

## Prerequisites

- Node.js (version 16 or higher)
- Docker (for running the proxy server)

## Setup

1. Clone the repository:

```sh
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies:
```sh
npm install
```

3. Start the proxy server:

  The proxy server is necessary to handle GraphQL requests to LeetCode. You can start it using Docker:

```sh
cd proxyServer
docker-compose up -d
```

Make sure to set the LEETCODE_SESSION and CSRFTOKEN environment variables in .env file located in the proxyServer directory.

4. Start the development server:
```sh
npm run dev
``` 

The application will be available at http://localhost:3000.

### Project Structure
## Project Structure

- `src`: Contains the source code of the React application.
  - `components/`: Contains the React components.
    - `card/`: Contains the Card component.
    - `scoreHeader/`: Contains the ScoreHeader component.
  - `hooks/`: Contains custom hooks.
    - `src/hooks/useQuestionStats.tsx`: Custom hook to fetch question stats.
  - `queries/`: Contains GraphQL queries.
    - `src/queries/studyPlan.tsx`: GraphQL query for fetching study plan progress.
- `proxyServer`: Contains the proxy server code and configuration.
  - `proxyServer/.env`: Environment variables for the proxy server.
  - `proxyServer/docker-compose.yml`: Docker Compose configuration.
  - `proxyServer/Dockerfile`: Dockerfile for the proxy server.
  - `proxyServer/server.js`: Proxy server implementation.
- `public`: Contains static assets.
- `index.html`: The main HTML file.
- `package.json`: The project configuration and dependencies.
- `tsconfig.json`: TypeScript configuration.
- `vite.config.ts`: Vite configuration.
- `tailwind.config.js`: Tailwind CSS configuration.
- `postcss.config.js`: PostCSS configuration.
- `eslint.config.js`: ESLint configuration.