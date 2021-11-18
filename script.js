function clickAccept(element) {
    element.parentNode.remove();
}

function selectUnits() {
    var units = document.querySelector("#temp-units").value;
    var temps = document.getElementsByClassName("temp");

    if(units == "deg-c")
    for(var i = 0; i < temps.length; i++)
            temps[i].innerHTML = +((temps[i].innerHTML - 32) / 1.8).toFixed(2);
    else if(units == "deg-f")
        for(var i = 0; i < temps.length; i++)
            temps[i].innerHTML = +(temps[i].innerHTML * 1.8 + 32).toFixed(2);
}