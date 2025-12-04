# Hand Drawn Icons

A collection of organic, human-crafted SVG icons for React.

## Installation

```bash
npm install @uniroom/hand-drawn-icons
```

## Usage

```tsx
import { CoffeeCup, Heart } from '@uniroom/hand-drawn-icons';

function App() {
  return (
    <div>
      <CoffeeCup className="w-6 h-6 text-sky-600" />
      <Heart className="w-6 h-6 text-rose-600" />
    </div>
  );
}
```

## Customization

You can customize the icons using standard SVG props, or specific props:

- `fillColor`: Sets the watercolor fill color.
- `strokeColor`: Sets the outline color (defaults to `currentColor`).
- `strokeWidth`: Sets the stroke width.
