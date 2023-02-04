---
slug: clamp-html
title: Clamp HTML
---

CSS have very useful property for limiting number of lines in text called `-webkit-line-clamp`. I once needed to do exactly that but with html string and after couple of google searches I found a way using JavaScript built-in interface `DOMParser`.

Here is a function I wrote for "clamping" html string to specific amount of elements.

```typescript
const clampHTMLString = (html: string, numberOfChildren = 3) => {
  const parser = new DOMParser();

  const dom = parser.parseFromString(html, "text/html");

  const elements = [];
  for (let i = 0; i <= dom.body.children.length; i++) {
    if (i >= numberOfChildren) {
      break;
    }

    elements.push(dom.body.children.item(i));
  }

  return elements.map((element) => element?.outerHTML ?? "").join("");
};
```

Just putting it out it here for myself in a future.
