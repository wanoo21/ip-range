# IP Slider

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/ip-slider)

A simple wrapper around `<input type="range" />` HTML5 Element.

The range input itself has browser support about like: Firefox 23+, Safari 4+, iOS 5+, Chrome 6+, Opera 11+, IE 10+, Android 4.2+. So pretty good. This custom component should largely match that.

Inspired by [CSS-TRICKS](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/).

![ip slider example](https://image.ibb.co/iSZ1O0/ip-slider-ex.gif)

## Install

### Script tag

- Put a script tag `<script src='https://unpkg.com/ip-slider@0.0.1/dist/ip-slider.js'></script>` in the head of your index.html
- Then you can use the `<ip-slider></ip-slider>` element anywhere in your template, JSX, html etc

### Node Modules

- Run `npm install ip-slider --save`
- Put a script tag similar to this `<script src='node_modules/ip-slider/dist/ip-slider.js'></script>` in the head of your index.html
- Then you can use the `<ip-slider></ip-slider>` element anywhere in your template, JSX, html etc

### In a Stencil app

- Run `npm install ip-slider --save`
- Add an import to the npm packages `import 'ip-slider';`
- Then you can use the `<ip-slider></ip-slider>` element anywhere in your template, JSX, html etc

## Using

Include `ip-slider` element in you page:

```html
<ip-slider value="0" min="0" max="0" step="1"></ip-slider>
```

Add `disabled` attribute in order to disable.

You can get the **value** listening **oninput** event:

```html
<ip-slider value="10" oninput="yourFunction(event)"></ip-slider>
```

This **event** is a **CustomEvent**:

```js
function yourFunction(event) {
  console.log(event.detail.value);
}
```

To get the real event from input, get `srcEvent`:

```js
function yourFunction(event) {
  console.log(event.detail.srcEvent);
}
```

Another option to get data:

```js
const ipSlider = document.querySelector('ip-slider');

console.log(ipSlider.value);
console.log(ipSlider.min);
console.log(ipSlider.max);
console.log(ipSlider.step);
console.log(ipSlider.disabled);
```
