**< 日本語 >**

# threejs-vite-vanilla

このリポジトリは、Three.jsとViteを使用したバニラJavaScriptプロジェクトのGitHubテンプレートです。

## 概要

このテンプレートは、Three.jsを使用した3Dグラフィックス開発を、Viteの高速な開発環境で始めるための出発点を提供します。

## 特徴

- Three.jsを使用した3D描画機能
- Viteによる高速な開発環境とビルドプロセス
- lil-guiを用いた簡単なGUIコントロール
- バニラJavaScriptでのクリーンな実装

## プロジェクト構造

```shell

threejs-vite-vanila/
├── README.md
├── assets
│   ├── envMap
│   │   └── default.hdr
│   ├── font
│   ├── model
│   └── textures
├── biome.json
├── bun.lockb
├── package.json
├── src
│   ├── core
│   │   └── AppCore.js
│   ├── index.html
│   ├── main.js
│   ├── rendering
│   │   ├── Camera.js
│   │   └── Renderer.js
│   ├── resources
│   │   ├── Resources.js
│   │   └── assets.js
│   ├── shaders
│   │   ├── fragment.glsl
│   │   └── vertex.glsl
│   ├── style.css
│   ├── utils
│   │   ├── Debug.js
│   │   ├── EventEmitter.js
│   │   ├── Sizes.js
│   │   └── Time.js
│   └── world
│       ├── World.js
│       ├── environment
│       └── objects
└── vite.config.js

```

## 使用方法

1. このテンプレートを使用して新しいリポジトリを作成します：
   - GitHubの"Use this template"ボタンをクリックします。
   - 新しいリポジトリ名を入力し、必要に応じて説明を追加します。
   - "Create repository from template"をクリックします。

2. 新しく作成したリポジトリをローカルにクローンします：
   - `git clone [新しいリポジトリのURL]`
   - `cd [リポジトリ名]`

3. 依存関係をインストールします：
   - `npm install`

4. 開発サーバーを起動します：
   - `npm run dev`

## 開発

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: プロジェクトをビルドします。
- `npm run preview`: ビルドされたプロジェクトをプレビューします。

## カスタマイズ

このテンプレートを基に、以下のようなカスタマイズが可能です：

1. `src/scripts/main.js`を編集して、3Dシーンやオブジェクトを追加・変更します。
2. `src/lib/three-helpers.js`を使用して、Three.jsの補助機能を活用します。
3. lil-guiを使用してインタラクティブなコントロールを追加します。
4. `src/styles/style.css`でスタイルをカスタマイズします。
5. 必要に応じて追加のnpmパッケージをインストールします。

## 技術スタック

- [Three.js](https://threejs.org/) v0.167.0 - 3Dグラフィックスライブラリ
- [Vite](https://vitejs.dev/) v5.3.5 - 次世代フロントエンドツール
- [lil-gui](https://lil-gui.georgealways.com/) v0.19.2 - 軽量GUIコントロールライブラリ
- [Biome](https://biomejs.dev/) v1.8.3 - 高速で優雅なコードフォーマッター

## ライセンス

[ライセンス情報を記入してください]

## 貢献

このテンプレートへの貢献を歓迎します。問題の報告や改善の提案は、Issueを開いてください。

---

本テンプレートを使用して開発を始めてください。


**< English >**

# threejs-vite-vanilla

This repository is a GitHub template for a vanilla JavaScript project using Three.js and Vite.

## Overview

This template provides a starting point for 3D graphics development using Three.js within Vite's fast development environment.

## Features

- 3D rendering functionality using Three.js
- Fast development environment and build process with Vite
- Easy GUI controls with lil-gui
- Clean implementation in vanilla JavaScript

## Project Structure


## Usage

1. Create a new repository using this template:
   - Click the "Use this template" button on GitHub.
   - Enter a new repository name and add a description if needed.
   - Click "Create repository from template".

2. Clone your newly created repository locally:
git clone [your new repository URL]
cd [repository name]
Copy
3. Install dependencies:

```
npm install
```

4. Start the development server:

```
npm run dev
```

## Development

- `npm run dev`: Start the development server.
- `npm run build`: Build the project.
- `npm run preview`: Preview the built project.

## Customization

You can customize this template by:

1. Editing `src/scripts/main.js` to add or modify 3D scenes and objects.
2. Utilizing Three.js helper functions in `src/lib/three-helpers.js`.
3. Adding interactive controls using lil-gui.
4. Customizing styles in `src/styles/style.css`.
5. Installing additional npm packages as needed.

## Tech Stack

- [Three.js](https://threejs.org/) v0.167.0 - 3D graphics library
- [Vite](https://vitejs.dev/) v5.3.5 - Next generation frontend tooling
- [lil-gui](https://lil-gui.georgealways.com/) v0.19.2 - Lightweight GUI controls library
- [Biome](https://biomejs.dev/) v1.8.3 - Fast and elegant code formatter

## License

[Insert license information here]

## Contributing

Contributions to this template are welcome. Please open an issue to report problems or suggest improvements.

---

Start developing with this template. Happy coding!
