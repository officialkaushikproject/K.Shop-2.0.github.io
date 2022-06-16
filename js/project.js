function openPage() {
    var x = document.getElementById("search").value;
    let lowerCase = x.toLowerCase()
    if (lowerCase == "bgmi") {
        window.open("index.html");
    };
    if (lowerCase == "ff") {
        window.open("ff.html");
    };
    if (lowerCase == "cod") {
        window.open("cod.html");

    };
}