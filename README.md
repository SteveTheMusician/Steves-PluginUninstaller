# Tauri + React

This template should help get you started developing with Tauri and React in Vite.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)


For Desktop development, run:
  npm run tauri dev

For Android development, run:
  npm run tauri android dev

For iOS development, run:
  sudo npm run tauri dev

# Development
npm run tauri dev

# Production Build
npm run tauri build

## tauri installieren

Befehl oder App laden
```
winget install Rustlang.Rustup
https://rustup.rs/
´´´

Env setzen
```
$env:Path += ";$env:USERPROFILE\.cargo\bin"
```

## App Icon Setzen
- Neues App Icon in src-tauri/icons Folder setzen
- Command ausführen: npm run tauri icon ./src-tauri/icons/[LogoName.png]
- Target-Ordner löschen