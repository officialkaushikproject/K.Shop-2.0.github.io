function openPage() {
    var x = document.getElementById("search").value;
    let lowerCase = x.toLowerCase()
    if (lowerCase == "bgmi") {
        window.open("/asset/index.html");
    };
    if (lowerCase == "ff") {
        window.open("/asset/ff.html");
    };
    if (lowerCase == "cod") {
        window.open("/asset/cod.html");

    };
}