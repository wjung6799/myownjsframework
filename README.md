# myownjsframework

Attempt to create javascript framework that objectifies dom.

This framework will be more intuitive for vanilla javascript user.


### createDomObject(dom, id, classList, content)

First parameter would be in form of string specifying which dom it will be. ("div", "img", "h1" etc..).
So you would declare a dom object like following

```
let divObject = createDomObject("div", "", [], "Content of the div");
```

If you want to append a dom inside this dom you would call the actually dom node that comes with JavaScript using the following.

```
//some dom object created
let childElement = document.createElement("div");
divObject.dom.appendChild(childElement);
```

Created Dom Object will have following functions.

1. getId();
2. getClassList();
3. addClassList();

Or you can do those by directly accessing the dom inside the dom object like above.

You can always add a field or state by accessing the dom because it is written in Javascript.
