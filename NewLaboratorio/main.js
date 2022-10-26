var clic = 1;

function  SINTURNO(){
    if(clic==1){
      document.getElementById("Sinturno").style.opacity="1";
      clic=clic +1;
}else{
    document.getElementById("Sinturno").style.opacity="0";
    clic=1;
}

}
function ENVIESUORDEN(){
    if(clic==1){
        document.getElementById("Orden").style.opacity="1";
        clic=clic +1;
  }else{
      document.getElementById("Orden").style.opacity="0";
      clic=1;
  }
}

function PREPARACION(){
    if(clic==1){
        document.getElementById("Preparacion").style.opacity="1";
        clic=clic +1;
  }else{
      document.getElementById("Preparacion").style.opacity="0";
      clic=1;
  }
}
