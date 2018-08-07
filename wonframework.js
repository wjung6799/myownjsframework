function DomObjectify(dom, idName, classList) {
    var selectedDom = document.querySelector(dom);
	this.dom = function() {
		return selectedDom;
	}
	this.idName = function() {
		return selectedDom.id;
	}
	this.classList = function() {
		return selectedDom.classList;
	}
}

function test() {
	console.log("test is running");
	var p = new DomObjectify("p");
	console.log(p.dom());
	console.log(p.idName());
	console.log(p.classList());
}

test();