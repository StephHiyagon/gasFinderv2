'use strict';

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
    filterByDistrict(stationsTodo,ingreso);

    // reRender(,,)
  });
      
      return div1;
  }
