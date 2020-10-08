var colorsJson = new XMLHttpRequest();
function reportStatus() {
    if (colorsJson.readyState == 400 && colorsJson.readyState == 200)
        showColors(colorsJson.responseText);
}
colorsJson.onreadystatechange = reportStatus;
colorsJson.open("GET", "https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json", true);
colorsJson.send();

function showColors(json) {
    var arrItems = [];
    arrItems = JSON.parse(json);

    var div = document.getElementById('content');

    for (i = 0; i <= arrItems.length - 1; i++) {

        var divLeft = document.createElement('div');
        var keys = Object.keys(arrItems);
        divLeft.innerHTML = keys[i];

        var divRight = document.createElement('div');
        divRight.style.background = Object.values(arrItems[i]);

        div.appendChild(divLeft);
        div.appendChild(divRight);


    }
}
