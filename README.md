# myownjsframework

Attempt to create javascript framework that objectifies dom.

This framework will be more intuitive for vanilla javascript user.


### createDomObject(dom, id, classList, content)

First parameter would be in form of string specifying which dom it will be. ("div", "img", "h1" etc..).
So you would declare a dom object like following

```
let divObject = createDomObject("div", "", [], "Content of the div");
```

