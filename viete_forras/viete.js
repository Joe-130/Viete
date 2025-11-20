document.getElementById("button1").onclick = () =>{
    var a = document.getElementById("inputa").value;
    var b = document.getElementById("inputb").value;
    var c = document.getElementById("inputc").value;

    var D = Math.sqrt(b*b-4*a*c);
    var eredmeny = "";

    if (D<0){
        eredmeny = "nincs megoldás";
    }
    else if (D==0){
        eredmeny = "egy megoldása van";
    }
    else{
        eredmeny = "két megoldása van";

    }

document.getElementById("span1").innerHTML = eredmeny;
//alert(eredmeny)
}