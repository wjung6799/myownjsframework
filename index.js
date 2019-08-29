(function(){
	window.addEventListener("load", init);

	function init() {
        // this code is run when the page is loaded
        var dat = {
            "name" : "Won Jung",
            "description" : {
                
            }
        }
        let intro = document.createElement("div");
        intro.id = "intro";
        let description = document.createElement("div");
        let tldrDescription = document.createElement("div");
        intro.appendChild(description);
        intro.appendChild(tldrDescription);
        var myIntro = new Object();
        myIntro.dom = intro;
        
        myIntro.writeLog = function() {
            console.log("hey");
        }
        myIntro.writeLog();
        var array = [".asd", ".aasd"];
        var someObject = createDomObject(description, "id", array, "hyey");
        document.body.appendChild(someObject.dom);
        document.body.appendChild(myIntro.dom);
	}
})();