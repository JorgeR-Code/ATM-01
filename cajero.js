//------------Class Billete is created-----------

class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

//--------This function compares the requested money with the available money--------
/*
function Colsulta (){

    dinero = document.getElementById("dinero").value;
    var arrayValueMin = [];
 //----Total amount in casher------------
    for (var b of caja){

        var val = b.valor
        arrayValueMin.push(val);

        var bruto = b.valor * b.cantidad;
        totalCajero = totalCajero + bruto ;
    }

//-----minimum quantity to deliver--------
    valueMin = arrayValueMin.reduce((n,m) => Math.min(n,m), Number.POSITIVE_INFINITY)


///-----multiple------
var resto = dinero % multiple;

//----Condition to deliver money----------
  if(dinero <= totalCajero && dinero >= valueMin && resto == 0){

    entregarDinero();


  }
  else{

   r.innerHTML =  "No te puedo entregar esa cantidad, la cantidad sollicitada debe ser multiplo de 10";

  }

}
*/
//---------------This function calculates the number of tickets to deliver

function entregarDinero()
{
    dinero = document.getElementById("dinero").value;
        for (var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {

                papeles = bi.cantidad;
                
            }

            else
            {

                papeles = div;
                
            }
        
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero -(bi.valor * papeles);

        }
        
    }
    console.log(entregado);
    
    if (dinero > 0){
       
        r.innerHTML = "Los siento, no puedo entregarte esa cantidad"

    }
    else{

        for(var e of entregado){

            if(e.cantidad > 0){
                r.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
            }

        }

    }
 
}


//-------------Code for keyboard-----------
$(document).ready(function(){
    $("#keyboard a").on('click', function() {
        if ($(this).attr('data') == 'DEL') {
            board_text = $('textarea.dinero').val();
            board_text = board_text.substring(0, board_text.length-1);
            $('textarea.dinero').val(board_text);
        } else {
            $('textarea.dinero').val($('textarea.dinero').val() + $(this).attr('data'));
        }
    });
});
//----------variables are created---------

var caja = [];
var entregado = [];

caja.push( new Billete(50, 3));
caja.push( new Billete(20, 2));
caja.push( new Billete(10, 2));

var dinero = document.getElementById("dinero").value;
var div = 0;
var papeles = 0;
var totalCajero = 0;
var multiple = 10;

var r = document.getElementById("resultado");
var b = document.getElementById("aceptar");
b.addEventListener("click", entregarDinero);

