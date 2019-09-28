# tab-out-catcher

This is a simple lib to wrap a container (such as form) and prevent jumping out from it by pressing Tab-button

## get started

1. import index.js from root directory (tag script)
2. get the container of form to wrap
3. execute catchTheTab function with selected form

```html
<html>
  <head>
    ...
    <!-- 1 menu item -->
    <script src="./index.js"></script>
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

## example

try it first:
https://codepen.io/xknowledgeless/project/full/XMJLvg
if something went wrong:
https://xknowledgeless.github.io/tab-out-catcher/
