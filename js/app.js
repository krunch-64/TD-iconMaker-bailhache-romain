$(function () {
// -----------------------------------------------------------
    // Taille de la zone de dessin 
// -----------------------------------------------------------
    function start(size) {
    //on recuper la valeur de l'input type="range"
    //js-drawSize est la class de l'input , .on("input") permet d'avoir la valeur en temps réel 
        $(".js-inputPixel").on("input", function () {
            size =$(this).val();
            loop(size)
            console.log(size+" pixel")
           
       
    // sizeVimin modifie la taille du carré blanc (sreen) et le centrage du carré (wrapper)
            let pixelVmin = size+"vmin";
            let pixelGrid= parseInt(size/2);
            let pixelGridVmin = size/pixelGrid;

    // sreen est le carré blanc ou on déssin et wrapper permet de centre le carré blanc
            let screen = $(".app-screen");
            let wrapper = $(".app-wrapper");

    // modification les valeurs css 
            wrapper.css("width", pixelVmin);
            screen.css("height", pixelVmin);
            screen.css("width", pixelVmin);
            screen.css("grid-template-columns","repeat("+pixelGrid+", "+pixelGridVmin+"vmin)");
            screen.css("grid-template-rows","repeat("+pixelGrid+", "+pixelGridVmin+"vmin)");
            
        }); 
            
    
         function loop() {
             console.log(size)
             let contentPixel =  $(".pixel").length;
             console.log(contentPixel);
             let loopPixel = size * size;
             console.log(loopPixel)
                let px=loopPixel-contentPixel
                console.log(px) 


            for(i=0 ; i>px ; i++) {
                console.log("------boucle---------")
                console.log(i)
                console.log(px +" px")  
                console.log($(".pixel").length)
                $(".app-screen").append("<div class='pixel'></div>");
            };         
        }

        }
                  
    //----------------------------------------------------------        
 // screenSize a la valeur 64 pour crée les pixels au lancement de la page 
    
    
// -----------------------------------------------------------
    // Création de la grille 

 
// -----------------------------------------------------------
    // selecteur de couleur
// -----------------------------------------------------------

    // on crée une fonction qui suprime les is-active des buttons de couleurs
    //cette fonction est apliquer a toute les couleurs et s'active quand on clique sur une couleur
    let button = $(".swatch");
    function deleteClass () {
        $(button).removeClass("is-active");
    }
    
    let darkestgreen = $("#paint_darkestgreen");
    darkestgreen.click( function () {
        deleteClass();
        darkestgreen.addClass("is-active")
        pixelColor("bg_darkestgreen");         // la fonction pixel est dans l'arribution de la couleur à un pixel 
    })

    let darkgreen = $("#paint_darkgreen");
    darkgreen.click( function () {
        deleteClass();

        darkgreen.addClass("is-active");
        
        pixelColor("bg_darkgreen");            // la fonction pixel est dans l'arribution de la couleur à un pixel 
 
    })

    let green = $("#paint_green");
    green.click( function () {
        deleteClass();
        green.addClass("is-active");
        pixelColor("bg_green");                // la fonction pixel est dans l'arribution de la couleur à un pixel 
    })
    let darkgreen = $("#paint_darkgreen");

    let lightgreen = $("#paint_lightgreen");
    lightgreen.click( function () {
        deleteClass();
        lightgreen.addClass("is-active");
        pixelColor("bg_lightgreen");           // la fonction pixel est dans l'arribution de la couleur à un pixel 
    })

    
    start()
// -----------------------------------------------------------
    // Arribution de la couleur à un pixel 
// -----------------------------------------------------------
 
    let pixel = $(".pixel");
    // la fonction pixel a une variable color qui est modifier quand on clique sur un couleur
    function pixelColor(color){
       pixel.click( function () {
    // this selection le pixel cliquer on lui enleve toute ces classe pour n'avoir qu'une class de color et on rajoute pixel
           $(this).removeClass().addClass("pixel").addClass(color);
       }) 
    }
        pixelColor("bg_darkestgreen");
    // double clique pour effacer la couleur

    pixel.dblclick( function () {
        $(this).removeClass().addClass("pixel");
    })

// -----------------------------------------------------------
    // Reset
// -----------------------------------------------------------

    $("#reset").click( function () {
        $(".pixel").removeClass().addClass("pixel");
    })


// -----------------------------------------------------------
    // Export
// -----------------------------------------------------------
   
    $("#export").click( function () {
        domtoimage.toBlob(document.getElementById('content'))
        .then(function (blob) {
        window.saveAs(blob, 'IconMaker.png');})
    });





});
