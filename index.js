(function(){
	window.addEventListener("load", init);

	function init() {
        // this code is run when the page is loaded
        let intro = createDomObject("div", "intro", ["hey"], "");
        let description = createDomObject("div", "description", [], "");
        let summary = createDomObject("div", "summary", [], "Self taught developer looking for an opportunity. <span class = \"view-more\"> click to view more</span>");
        let full = createDomObject("div", "full-description", ["hidden"], "I am highly motivated and always eager to learn new things. I like solving math puzzles and trying out new technologies. My most recent interest is cloud computing and front end frameworks like react. Believe it or not when I was taking web programming class I always wished that dom could be more object oriented like Java and I was trying to make my own framework and turns out the exact same thing was react. Of course I stopped at designing stage because developing it would have been really difficult.");
        description.summary = true;
        description.dom.appendChild(summary.dom);
        description.dom.appendChild(full.dom);
        description.dom.onclick = function() {
            if(description.summary) {
                full.dom.classList.remove("hidden");
            } else {
                full.dom.classList.add("hidden");
            }
            description.summary = !description.summary;
        }
        intro.dom.appendChild(description.dom);
        document.getElementById("about").appendChild(intro.dom);

        let projects = [{"title": "myownjsframework", "description": "This personal project of mine. When I first strated front-end development, I was a lot of vanilla javascript. I wished there was a way for me to objectify a dom. It's a project I started since then and postponed after discovering react. I built this website using this."},
        {"title": "myowndatastructure", "description": "My way of studying data structure. I am trying to implement a data structure with my hands"}];

        for(let i = 0; i < projects.length; i++) {
            let project = createDomObject("div", "", ["project"], "<p>" + projects[i].title + "</p>");
            let description = createDomObject("div","",["description"], projects[i].description);
            project.dom.appendChild(description.dom);
            document.getElementById("projects").appendChild(project.dom);
        }
	}
})();