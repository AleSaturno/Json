//console.log('Activado');

document.querySelector('#boton').addEventListener('click',traerdatos);

function traerdatos(){
    //console.log('Listo');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'catalogo.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState ==4 && this.status == 200){

            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
                //console.log(item.artista);
                res.innerHTML +=`
                <tr>
                    <th>${item.titulo}</th>
                    <th>${item.artista}</th>
                    <th>${item.Año}</th>
                    <th>${item.Localidad}</th>
                    <th>${item.DNI}</th>
                    <th>${item.Pelotudo}</th>
                </tr>
                

                 `
            }
        }

    }
}
