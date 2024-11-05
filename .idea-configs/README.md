## IDE Setup

### IntelliJ IDEA

1. Copy IDE configurations:

   ```bash
   cp -r .idea-configs/* .idea/
   ```

2. Install required plugins:

   - Prettier
   - ESLint

3. Verify settings:

   - Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint
     - Enable "Automatic ESLint configuration"
     - Enable "Run eslint --fix on save"
   - Settings → Languages & Frameworks → JavaScript → Prettier
     - Enable "On save"
     - Verify file pattern: `{**/*,*}.{js,ts,jsx,tsx,json,css,scss,md}`

4. Restart IntelliJ IDEA

### VS Code

If using VS Code, the `.vscode/settings.json`, add this in settings.json

```

{
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit",
        "source.addMissingImports": "explicit"
    },
    "prettier.tabWidth": 2,
    "prettier.useTabs": false,
    "prettier.semi": true,
    "prettier.singleQuote": false,
    "prettier.jsxSingleQuote": false,
    "prettier.trailingComma": "es5",
    "prettier.arrowParens": "always",
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "typescript.tsdk": "node_modules/typescript/lib"
}

```
