function createDomObject(dom, id, classList, content) {
	var domObject = new Object();
	domObject.dom = dom;
	domObject.dom.id = id;
	for(let i = 0; i < classList.length; i++) {
		domObject.dom.classList.add(classList[i]);
	}
	domObject.dom.innerHTML = content;
	domObject.getId = function() {
		return domObject.dom.id;
	};

	domObject.getClassList = function() {
		return domObject.dom.classList;
	}

	domObject.addClassList = function(cssClass) {
		domObject.dom.classList.add(cssClass);
	}

	return domObject;
}