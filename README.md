# 📋 Requirements

Before starting, you'll need to have installed: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/)

# 🎲 Running Locally

```bash
# Clone this repository
$ git clone https://github.com/EDSI-TaskManager/frontend.git

# Change your directory in command line
$ cd frontend
```

Now we need install the dependencies, in this project i used [Yarn](https://yarnpkg.com/), but you are free to use npm

Running with yarn:

```bash
# Intall dependencies
$ yarn install

# Run start script
$ yarn start
```

Running with npm:

```bash
# Intall dependencies
$ npm install

# Run start script
$ npm start
```

After this, if everything went as expected, the [server](http://localhost:3000) is listening in port 3000

# Scripts

```bash
# development
$ yarn dev

# Build
$ yarn build

# Start
$ yarn start
```

# Documentation

- [NextJS Docs](https://nextjs.org/docs)
- [tailwindcss](https://tailwindcss.com/docs/installation)

# Coding Conventions

  - Language
    - Only English.
  - Style Guide
    - Respect the ESLint configurations.
    - [Prettier extension for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) recommended to follow formatting rules.
    
## Branch Guide

- development
  - Development branch.
  - All WIP (Work In Progress) features must be pushed to this branch.
 
- stage
  - Branch for staging environment. Automatic deploy to Vercel.
  
- main
  - Branch for production environment. Automatic deploy to Vercel.
  - Merge from Stage: must be made from a Pull Request from Staging branch only.
  - Merge from Develop: finished implemented features.
