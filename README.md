# What is the purpose of this package?

shadowmage package is easy to use. Purpose of this package is to add the shadows to your HTML elements effortlessly.

# Installation

`npm i shadowmage --save`

Then...

```
import { shadowmage } from 'shadowmage'

shadowmage({
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

shadowmage supports 7 options,

- _shadow_type_ - _hard | blur | number_ (Default to number)
- _shadow_color_ - _string_ (Default to none)
- _padding_ - _boolean_ (Default to false)
- _padding_ - _boolean_ (Default to false)
- _border_style_ - _string_ (Default to none)
- _border_width_ - _number_ (Default to 0)
- _border_rounded_ - _number_ (Default to 0)
