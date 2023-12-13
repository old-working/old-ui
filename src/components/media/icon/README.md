# `@youngagency/ui` `Icon` component

## Add new icons

1. Copy SVG from [Figma](https://www.figma.com/file/FNWCZpeLoL0epLa4GSwGI7/H4L-Design?type=design&node-id=2643-917&mode=design&t=UOXtNh1vwFnr2zx7-0)
   1. Select the icon (make sure that the dimensions are 24x24), right click and select `Copy/Paste as > Copy as SVG`
2. Minimize it with [SVGOMG](https://jakearchibald.github.io/svgomg/)
   1. Click on "Paste markup" and paste the SVG copied from Figma
   2. On the top bar click "MARKUP"
   3. Copy the `d` value
3. In `icons.ts` add the icon to the correct object
   1. The key is the name of the icon
   2. The value is `createIcon({ d: '...' })` where `d` is the minimized `d` value from SVGOMG

### `"evenodd"` workaround

If the exported SVG has a `fill-rule="evenodd"` attribute, you need to remove it. This is because the `createIcon` function uses `fill-rule="nonzero"` as default value.
   
1. Copy the SVG to this [Iconly converter](https://iconly.io/tools/svg-convert-stroke-to-fill)
2. Copy the `d` value of the returned SVG string into `icons.ts`