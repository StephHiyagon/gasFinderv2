const StationDetails = (update) => {
  const section = $("<section></section>");

    const stationsTodo=state.stations;
    console.log(stationsTodo);
    let tamano=stationsTodo.length;
    console.log(tamano);

    for(var i=0;i<tamano;i++){
    const div = $("<div class='details'></div>");
    const parrafo1 = $('<h2>'+ stationsTodo[i].name +'</h2>');
    const parrafo2= $('<p>'+ stationsTodo[i].address +'</p>');
    const parrafo3= $('<p>'+ stationsTodo[i].district +'</p>');
    const iconM=$('<i class="fa fa-map-o right" aria-hidden="true" id="'+stationsTodo[i].district+'"></i>');

    div.append(parrafo1);
    div.append(parrafo2);
    div.append(parrafo3);
    div.append(iconM);
    section.append(div);
    }

  return section;
}
