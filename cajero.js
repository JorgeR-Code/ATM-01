//------------The canvas is called-----------
BI = document.getElementById("billetesImg");
ctx = BI.getContext("2d");
//------------Class Billete is created-----------

class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

//----------variables are created---------

var caja = [];
var entregado = [];
var cantidadSub;
var totalCaje1 = 0;



var billete20 = {
    value : 20,
    url: "20.jpg",
    x : [],
    y : [],
    imagen : ""
}

var billete50 = {
    value : 50,
    url: "50.png",
    x : [],
    y : [],
    imagen : ""
}

var billete100 = {
    value : 100,
    url: "100.png",
    x : [],
    y : [],
    imagen : ""
}


billete20.imagen = new Image();
billete20.imagen.src = billete20.url;

billete50.imagen = new Image();
billete50.imagen.src = billete50.url;

billete100.imagen = new Image();
billete100.imagen.src = billete100.url;

caja.push(new Billete(100, 50));
caja.push(new Billete(50, 50));
caja.push(new Billete(20, 50));

var dinero = document.getElementById("dinero").value;
var div = 0;
var papeles = 0;


infoTec = document.getElementById("infoTec");
var D = document.getElementById("divTextArea");
var r = document.getElementById("resultado");
var b = document.getElementById("aceptar");
b.addEventListener("click", entregarDinero);

//-----------Area of "Technical information" to show "total caja"--------

function totalCaja(){
    var totalCajero = 0;
    infoTec.innerHTML = "<p>Información Técnica</p><br><p> El cajero cuenta con:</p><br>"
    for(Rest of caja){
        console.log(caja);
        infoTec.innerHTML += Rest.cantidad + " billetes de $" + Rest.valor + "<br />";

        totalCajero += (Rest.cantidad * Rest.valor);
    }
    totalCaje1 = totalCajero;
    infoTec.innerHTML += "<br> Total: " + totalCaje1;

}

totalCaja();





//-------------Code for keyboard-----------
$(document).ready(function () {
    $("#keyboard a").on('click', function () {
        if ($(this).attr('data') == 'cancel') {

            $("#divTextArea").load("init.html");
            entregado.length = 0;
            ctx.clearRect(0, 0, BI.width, BI.height);

        }
        else {

            if
                ($(this).attr('data') == 'DEL') {
                board_text = $('textarea.dinero').val();
                board_text = board_text.substring(0, board_text.length - 1);
                $('textarea.dinero').val(board_text);

            } else {
                $('textarea.dinero').val($('textarea.dinero').val() + $(this).attr('data'));
            }
        }

    });
});


///--------------Data processing...--------------
function entregarDinero() {
    
    dinero = document.getElementById("dinero").value;
    var caja2 = [];


     if (dinero == 0 || dinero > totalCaje1){ //The input value is validated 

        D.innerHTML = "<p class='message'>No te puedo entregar esa cantidad :'(</p>"
    }
    else {//In case the input is validated

        for (var bi of caja) {

            if (dinero > 0) {
                div = Math.floor(dinero / bi.valor);

                if (div > bi.cantidad) {

                    papeles = bi.cantidad;

                }

                else {

                    papeles = div;

                }

                entregado.push(new Billete(bi.valor, papeles));
                dinero = dinero - (bi.valor * papeles);


                var cantidadSub = bi.cantidad - papeles;
                caja2.push(new Billete(bi.valor, cantidadSub)); //this push is for the new value of "caja"

            }
            else {

                caja2.push(new Billete(bi.valor, bi.cantidad));//this push is for the new value of "caja"

            }
        }

        //validation to know if "caja" can deliver the money
        if (dinero > 0) {

            D.innerHTML = "<p class='message'>Su solicitud no puede ser procesada :'(</p>"

        }
        else {
            D.innerHTML = "<p> Usted recibe:</p><br>"
            

            for (var e of entregado) {

                if (e.cantidad > 0) {

                    D.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";

                    
                    if (e.valor == billete100.value) {
                        for (var n = 0; n < e.cantidad; n++) {
                            billete100.x[n] = 10 + (n * 5);
                            billete100.y[n] = 100;
                            ctx.drawImage(billete100.imagen, billete100.x[n], billete100.y[n]);

                        }
                    }

                    if (e.valor == billete50.value) {
                        for (var n = 0; n < e.cantidad; n++) {
                            billete50.x[n] = 10 + (n * 5);
                            billete50.y[n] = 300
                            ctx.drawImage(billete50.imagen, billete50.x[n], billete50.y[n]);

                        }
                    }

                    if (e.valor == billete20.value) {
                        for (var n = 0; n < e.cantidad; n++) {
                            billete20.x[n] = 10 + (n * 5);
                            billete20.y[n] = 500;
                            ctx.drawImage(billete20.imagen, billete20.x[n], billete20.y[n]);

                        }
                    }

                }
                //------
            }
            ///Now "caja" takes the new values
            caja = caja2;
        }
    }

    ////To update de "Technical information"
    totalCaja();

}







