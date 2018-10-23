var found = false

var mutationObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    var description = document.getElementById("xDescIn"); // Create element for the description area
    if (description != null && !found ) {
    	console.log("we found it! Gee whiz");
    	description.innerHTML = '<div jsname="V67aGc" class="iSSROb snByac" aria-hidden="false"> </div> <div jsname="L9AdLc" jsaction="focus:L35pef; touchend:L35pef; blur:MZpOXc; keyup:qdd8Be; paste:QD1hyc;" class="hInySc iuaqab editable" aria-label="Description" id="hInySc1" g_editable="true" role="textbox" contenteditable="true" style="direction: ltr;"><b>Goal of Meeting</b><div><br></div><div><b>Roles</b></div><div><br></div><div><b>Prep Work</b></div></div>';
    	found = true;

    }
    else if (description == null) {
    	found = false;
	    }

  });
});

mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
