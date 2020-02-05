const move = () =>  {

    var elem = document.getElementById("myBar");
    var mayor = document.getElementById("Goal").value
    var menor = document.getElementById("Quantity").value
    var percent = 100 *  menor/mayor
    var width = percent;
    elem.style.width = width + "%";
    elem.innerHTML = width + "%";

    }


const hideBar= () => {
    var x =document.getElementById("myProgress")
   x.style.display === "none" ?x.style.display = "block"
   : x.style.display = "none" 
}
