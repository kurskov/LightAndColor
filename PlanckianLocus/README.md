# Planckian locus

## Calculated value (JSON)

Curve coordinates are calculated for a temperature range of 2000 to 7000 Kelvin in 5 degree increments.

JSON has 2D-array with name "points".
```json
[[CCT, x, y], ...]
```
CCT - correlated color temperature
x, y - coordinates of chromaticity space (CIE 1931)

Coordinates X and Y are integer values (3000-5000).
Use division by 10000 for correct data.

These coordinates are calculated by the following formulas:
```
x = -0.2661239 * 10^9 / CCT^3 - 0.234358 * 10^6 / CCT^2 + 0.8776956 * 10^3 / CCT + 0.17991
y = -1.1063814 * CCT^3 - 1.3481102 * CCT^2 + 2.18555832 * CCT - 0.20219683
```


## 5-point approximation (SVG)

Only group with <path />, without tag <svg>.

For use this curve on your project you need this CSS:
```css
.planck-curve path {
  stroke-width: 1;
  stroke: #666;
  fill: none;
}
```

Coords of points set as integer value in diapason:
- X: 3000 - 5000
- Y: 3000 - 4400

For example:
- 0.3064 => 3064
- 0.4797 => 4797