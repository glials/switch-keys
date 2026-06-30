# Tauri + Vanilla TS

This template should help get you started developing with Tauri in vanilla HTML, CSS and Typescript.

## Prerequisites

Install the following to run the project in a local dev environment:

- **[Rust](https://rustup.rs/)** — install via [rustup](https://rustup.rs/):
  ```bash
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```
- **[Node.js](https://nodejs.org/)** — LTS version recommended
- **[Yarn](https://yarnpkg.com/)** — install globally after Node.js:
  ```bash
  npm install -g yarn
  ```
- **libgtk-3-dev** — GTK 3 development libraries required by Tauri on Linux (Debian/Ubuntu):
  ```bash
  sudo apt update && sudo apt install libgtk-3-dev
  ```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
