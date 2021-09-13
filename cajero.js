
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

caja.push(new Billete(50, 30));
caja.push(new Billete(20, 20));
caja.push(new Billete(10, 50));

var dinero = document.getElementById("dinero").value;
var div = 0;
var papeles = 0;
var totalCajero = 0;
var multiple = 10;

var D = document.getElementById("divTextArea");
var r = document.getElementById("resultado");
var b = document.getElementById("aceptar");
b.addEventListener("click", entregarDinero);


//-------------Code for keyboard-----------
$(document).ready(function () {
    $("#keyboard a").on('click', function () {
        if ($(this).attr('data') == 'cancel') {

            $("#divTextArea").load("init.html");
            entregado.length = 0;

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


    if (dinero == 0){ //The input value is validated 

        D.innerHTML = "<p class='message'>Intentelo de nuevo ingresando una cantidad :)</p>"
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

                }

            }
        }
    }
///Now "caja" takes the new values
    caja = caja2;
    console.log(caja);

}







