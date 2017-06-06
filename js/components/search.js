'use strict';
const reRender=(stations,opc)=>{
  console.log(opc);
  console.log(stations);
  $('.container').empty();
  // const sanMiguel=$('#San Miguel');
  // sanMiguel.hide();
  var tamano=opc.length;
  //falta comparar los distritos con el objeto...
  for(var i=0;i<tamano;i++){
  const div = $('<div class="details" id="'+stations[i].district+'"></div>');
  const parrafo1 = $('<h2>'+ stations[i].name +'</h2>');
  const parrafo2= $('<p>'+ stations[i].address +'</p>');
  const parrafo3= $('<p>'+ stations[i].district +'</p>');
  const iconM=$('<i class="fa fa-map-o right" aria-hidden="true" id="'+stations[i].district+'"></i>');

  div.append(parrafo1);
  div.append(parrafo2);
  div.append(parrafo3);
  div.append(iconM);
  $('.container').append(div);
  }

return $('.container');
}


const Search = (update) => {
  const div1 = $("<div class='red'></div>");
  const div2= $("<div class='white'></div>");
  const input = $("<input type='text' placeholder='Ingresa el distrito'>");
  const icon = $('<i class="fa fa-search gray" aria-hidden="true"></i>');

  div2.append(icon);
  div2.append(input);
  div1.append(div2);


  input.on('keyup',(e)=>{
    const stationsTodo=state.stations;
    console.log(stationsTodo);
    let ingreso=$(e.target).val().toLowerCase();
    console.log(ingreso);
    var opcion= filterByDistrict(stationsTodo,ingreso);
    reRender(stationsTodo,opcion);
  });

      return div1;
  }
