let marca = prompt('1- Adidas low $4500 ...\n 2- Nike Air Jordan $5000 ...\n 3- Converce Retro Edicion Boston $15000 ...\n 0- Para Salir...');
let gastoTotal = 0;

while(marca != '0'){
    switch(marca){
        case '1':
            alert('Te estas comprando las mejores LOW del mercado..'); 
            aumentoGastoTo(4500);
            break;
        case '2':
                alert('Estas Listx Para Romperla Toda con Estas Air???..'); 
                aumentoGastoTo(5000);
                break;
        case '3':
                alert('Be a LEYEND!!!..'); 
                aumentoGastoTo(15000);
                break;
        default:
            alert('Codigo de Zapas Erroneas')
    }
    marca = prompt('1- Adidas low $4500 ...\n 2- Nike Air Jordan $5000 ...\n 3- Converce Retro Edicion Boston $15000 ...\n 0- Para Salir...');}
alert('Ya Son Tuyas Que no se Escapen...Total $ ' + gastoTotal);

function aumentoGastoTo(precio){
    gastoTotal = gastoTotal + precio ;
    console.log('gastado Hasta Ahora $' +gastoTotal)
    }




