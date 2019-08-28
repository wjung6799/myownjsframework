function createDomObject(dom, id, classList) {
	var domObject = new Object();
	domObject.dom = dom;
	domObject.id = function() {
		domObject.dom.id = id;
	};

	domObject.classList = function() {
		
	}
	return domObject;
}