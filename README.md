# tab-out-catcher

This is a simple lib to wrap a container (such as form) and prevent jumping out from it by pressing Tab-button

## get started

1. import tab-out-catcher.min.js from root directory (tag script)
2. get the container of form to wrap
3. execute catchTheTab function with selected form

```html
<html>
  <head>
    ...
    <!-- 1 menu item -->
    <script src="./tab-out-catcher.min.js"></script>
  </head>
  <body>
    <form id="wrap-it">
      <input />
      <input />
      <input />
    </form>
    <script>
      // 2  menu item
      var wrapIt = document.getElementById("wrap-it");
      // 3  menu item
      catchTheTab(wrapIt);
    </script>
  </body>
</html>
```

## npm

https://www.npmjs.com/package/tab-out-catcher

## react

tab-out-catcher with react: <br />
npm https://www.npmjs.com/package/react-tab-out-catcher <br/>
github https://github.com/kpodmasko/react-tab-out-catcher

## example

###### try it first:

https://codepen.io/xknowledgeless/project/full/XMJLvg

###### if something went wrong:

https://kpodmasko.github.io/tab-out-catcher/
