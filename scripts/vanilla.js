window.onload = function() {
    /* Start Header */
    bar = document.getElementById("bar-icon");

    bar.onclick = function(e) {
        if (document.getElementById("bar-list").style.display === "block") {
            hideElement("bar-list");
        } else {
            e.stop;
            showElement("bar-list");
        }
    };
    //hide list when clicking the window object
    document.onclick = function(event) {
        if (!bar.contains(event.target)) {
            hideElement("bar-list");
        }
    };

    function hideElement(id) {
        document.getElementById(id).style.display = "none";
    }

    function showElement(id) {
        document.getElementById(id).style.display = "block";
    }
    /* End Header */
};