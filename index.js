(function(){
	window.addEventListener("load", init);

	function init() {
        // this code is run when the page is loaded
        let intro = document.createElement("div");
        intro.id = "intro";
        var myIntro = new Object();
        myIntro.dom = intro;
        myIntro.writeLog = function() {
            console.log("hey");
        }
        myIntro.writeLog();
        document.body.appendChild(myIntro.dom);
	}
})();