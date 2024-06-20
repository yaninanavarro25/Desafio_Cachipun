const Piedra = 0 ;
const Papel = 1 ;
const Tijera = 2 ;

const gana_persona = "¡ Ganaste ! ";
const gana_computador = "¡ Perdiste !" ;
const empate = "¡ Empate ! ";

var juegos = 0 ;
var jugada_persona = 0 ;
var jugada_computador = 0 ;

while (true)
    {
        juegos = parseInt(prompt('Ingresa cantidad de cachipun a jugar :'));
        if (!isNaN(juegos) && juegos > 0)
            {
                break;
            }
            else 
            {
                alert ('Ingresa la cantidad valida de juegos, si quieres jugar :)');
            }
    }

function juega_persona () {
    var jugada;
    while (true) {
        jugada = prompt('Elige tu jugada: Piedra , Papel o Tijera');
        jugada = jugada.toLowerCase();
        if (jugada === 'piedra'){
            return Piedra;
        }else if (jugada === 'papel'){
            return Papel;
        } else if (jugada === 'tijera') {
            return Tijera;
        } else {
            alert ('ingresa una jugada correcta ');
        }       
    }
}

function juega_computador(){
    return Math.floor (Math.random ()* 3);

}


    while (juegos > 0)
        {
            jugada_persona = juega_persona();
            jugada_computador = juega_computador();
        
            if (jugada_persona === jugada_computador)
                {
                    alert (empate);
                }else {
                    switch (jugada_persona)
                    {
                        case Piedra: 
                        if (jugada_computador === Papel)
                            {
                                alert (gana_computador);
                            }
                            else
                            {
                                alert (gana_persona);
                            }
                            break;
                        case Papel :
                            if (jugada_computador === Tijera) {
                                alert (gana_computador);
                            }
                            else {
                                alert (gana_persona);
                            }
                            break;
                            case Tijera :
                                if (jugada_computador === Piedra) {
                                    alert (gana_computador);
                                }
                                else {
                                    alert(gana_persona);
                                }
                                break;
                     }

                }
                juegos--;
                
        }