var rowProduct = document.querySelector(".rowProduct");
var form_select = document.querySelector(".form-select");
var b=0;
var strUser;



function myDisplay(Dogs) {
    Dogs = JSON.parse(Dogs);
    console.log(form_select.length)
    for (var i = 0; i < Dogs.length; i++) {
        if (b==1 && strUser === Dogs[i].breed_group) {
            ds();
        }
        else if(b==0) {
            ds();
        }
    }
    function ds() {
        var div1 = document.createElement("div");
        rowProduct.appendChild(div1);
        div1.classList.add("col-lg-3", "col-md-4", "col-sm-6", "text-center");
        var div2 = document.createElement("div");
        div1.appendChild(div2);
        div2.classList.add("card", "ProductCard");
        var image = document.createElement("img");
        div2.appendChild(image);
        image.classList.add("ProductImage");
        image.src = Dogs[i].image.url;
        var div3 = document.createElement("div");
        div2.appendChild(div3);
        div3.classList.add("card-body");
        var h6 = document.createElement("h6");
        div3.appendChild(h6);
        h6.classList.add("card-titleProduct", "text-center");
        h6.innerHTML = "Name : " + Dogs[i].name;
        var p = document.createElement("p");
        div3.appendChild(p);
        p.classList.add("card-subtitle");
        p.innerHTML = "Breed Group : " + Dogs[i].breed_group;
    }
}


async function ReadData(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
}

function setDogs() {
    var path = "https://raw.githubusercontent.com/zahra-attaran/JSON/main/breeds.json";
    var Dogs = ReadData(path)
}

setDogs();
function Fltered(x) {
    b=1;
    setDogs();
    strUser = form_select.value;;
    rowProduct.innerHTML = "";
}


