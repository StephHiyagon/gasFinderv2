'use strict';
const reRender=(opction)=>{
  console.log(opction);
}

const filterByDistrict = (stations,query) => {
  alert('Llamada');
  let tam=query.split('').length;
  if(tam==1){
    stations.forEach(function(n){
      let distLetter=n.district.toLowerCase().split('');
      distLetter.forEach(function (m){
        if(m==query){
          let distLetter1=distLetter.join('')
          console.log("coincide "+distLetter1+"!");
          reRender(distLetter1);
        }
      })

    })
  }else{
    stations.forEach(function(n){
      let distLetter=n.district.toLowerCase();
      let distLetter2=n.district.toLowerCase().substr(0,tam);
      if(distLetter2==query){
        console.log("coincide "+distLetter+"!");
        reRender(distLetter);
      }
    })
  }


  // stations.filter((station)=>{
  //   console.log("estas dentro");
  //   return station.district.toLowerCase();
  //   console.log(a);
  // });
    // console.log(n.district.toLowerCase())
    //.indexOf(query)!=-1;


}
