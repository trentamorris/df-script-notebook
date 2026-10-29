# @df-script/notebook

An interactive, 2D spatial canvas notebook designed for data exploration with [`df-script`](https://www.npmjs.com/package/df-script).

## Features

- **Spatial 2D Canvas**: Position and size code and markdown cells freely on a canvas workbench.
- **Side-by-Side Comparisons**: Place native JavaScript/TypeScript operations side-by-side with declarative `df-script` expressions.
- **Embedded Editor**: Monaco editor with syntax highlighting, shortcuts, and execution controls.
- **Interactive Outputs**: Rich table grids and output renderers powered by `df-script`.

## Installation

```bash
npm install @df-script/notebook df-script
```

## Quick Start

```tsx
import React from "react";
import { DFScriptNotebook } from "@df-script/notebook";
import "@df-script/notebook/styles.css";

export function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <DFScriptNotebook />
    </div>
  );
}
```

## License

[MIT](LICENSE) © [Trent Morris](https://github.com/trentamorris)
