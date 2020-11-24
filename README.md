## What is the purpose of this package?

shadowmagix package is easy to use. Purpose of this package is to add the shadows to your HTML elements effortlessly.

## Installation

`npm i shadowmagix --save`

Then, import the shadowmix package into your JavaScript file and add styles as like mentioned below,

```
import { shadowmagix } from 'shadowmagix'

shadowmagix({
  shadow_type: 20,
  shadow_color: "cyan",
  padding: 5,
  margin: 10,
  border_style: "rgb(0,6,100)",
  border_width: 15,
  border_rounded: 300,
})
```

## Options

shadowmagix supports 7 options,

- _shadow_type_ - _"hard" | "blur" | pixelUnits_ (Default to pixelUnits)
- _shadow_color_ - _colorName_ (Default to none)
- _padding_ - _boolean | pixelUnits_ (Default to false)
- _margin_ - _boolean | pixelUnits_ (Default to false)
- _border_style_ - _colorName_ (Default to none)
- _border_width_ - _pixelUnits_ (Default to 0)
- _border_rounded_ - _pixelUnits_ (Default to 0)