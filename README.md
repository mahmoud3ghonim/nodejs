
# Welcome to the Repository

## Pre-Commit Hooks with Husky

This repository uses **Husky** to ensure high code quality and security before any code is committed to the repository.

### Why Use Pre-Commit Hooks?

Pre-commit hooks help to:

1. Automatically scan for **secrets** using **detect-secrets-cli**.

### Setting up Husky

To set up the pre-commit hooks with Husky, follow these steps:

1. **Install the necessary dependencies**:

   ```bash
   npm install

2. **Install Husky hooks and run**:
   ```bash
   npx husky install
   npx husky add .husky/pre-commit "npm run lint && npx detect-secrets-hook"

