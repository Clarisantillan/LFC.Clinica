window.addEventListener('load', function()
{
    var imagenes=[];

    imagenes[0]='imagenes/PLACA.jpg';
    imagenes[1]='imagenes/descarga (1).jpg';
    imagenes[2]='imagenes/placas3.jpg';

    var imagenes2=[];
    imagenes2[0]='imagenes/CT Scan Rooms _ Computerized Tomography Rooms _ X-Ray Rooms.jpg';
    imagenes2[1]='imagenes/radiologia2.jpg';
    imagenes2[2]='imagenes/radiologia1.jpg';
    
    

    document.slider.src=imagenes[0];
    document.slider2.src=imagenes2[0];
    

    var i=0;
    var j=0;

    function cambiarImagenes()
    {
        document.slider.src=imagenes[i];

        if(i<2)
        {
            i++;
        }else{
            i=0;
        }
    }

    function cambiarImagenes2()
    {
        document.slider2.src=imagenes2[j];

        if(j<2)
        {
            j++;
        }else{
            j=0;
        }
    }

    this.setInterval(cambiarImagenes,3000);
    this.setInterval(cambiarImagenes2,3000);

});