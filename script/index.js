//Выбрать, отменить выбор и недоступен для выбора

//Фуа гра
let foiegrasElem = document.querySelector(".catmenu__part_foiegras");
let foiegrasParagraphElem = document.querySelector(".catmenu__info_foiegras");
let foiegrasTextElem = document.getElementById("foiegrasFood");
let foiegrasOvalElem = foiegrasElem.querySelector(".part__pic");
let foiegrasOutTitle = foiegrasElem.querySelector(".part__title");
let foiergasOutSubtitle = foiegrasElem.querySelector(".part__subtitle");
let foiegrasOutList = foiegrasElem.querySelector(".part__list_foiegras");
let foiegrasFoto = foiegrasElem.querySelector(".part__foto");

const foiegrasText1 = "Сказочное заморское явство";
const foiegrasText2 = "Котэ не одобряет?";

const foiegrasParagraph1 = 'Чего сидишь? Порадуй котэ, <a class="catmenu__info_link catmenu__info_foiegras-link" href="">купи.</a>';
const foiegrasParagraph2 = "Печень утки разварная с артишоками";
const foiegrasParagraph3 = "Печалька, с фуа гра закончился.";

foiegrasTextElem.innerHTML = foiegrasText1;
foiegrasParagraphElem.innerHTML = foiegrasParagraph1;

let foiegrasLinkElem = document.querySelector(".catmenu__info_foiegras-link");

foiegrasElem.addEventListener("click", changeFoiegrasHandler);
foiegrasLinkElem.addEventListener("click", changeFoiegrasHandler);

function  changeFoiegrasHandler(event) {
    //Отменяем перезагрузку страницы по клику
    event.preventDefault();

    let params = ["true", "false"]; 
    let pickParam = function (params){
             return params[Math.floor(Math.random()*params.length)]
        };      
    let foiegrasStatus = pickParam(params);

if (foiegrasStatus == "true")  {
     //Меняем текст и цвет текста
     foiegrasElem.classList.toggle('catmenu__part_foiegras-red');
     foiegrasTextElem.classList.toggle('part__text_red');
     //Овал меняет цвет
     foiegrasOvalElem.classList.toggle('part__pic_red');


         if (foiegrasElem.classList.contains("catmenu__part_foiegras-red")) {
                   foiegrasTextElem.innerHTML = foiegrasText2;
                   foiegrasParagraphElem.innerHTML = foiegrasParagraph2;
        } else {
         foiegrasTextElem.innerHTML = foiegrasText1;
         foiegrasParagraphElem.innerHTML = foiegrasParagraph1;
         //Создаем ссылку заново
         foiegrasLinkElem = document.querySelector(".catmenu__info_foiegras-link");
         foiegrasLinkElem.addEventListener("click", changeFoiegrasHandler);
        }
    } else {
        foiegrasElem.classList.add('catmenu__part_foiegras-out');  
        foiegrasTextElem.classList.add('part__text_out');
        foiegrasOvalElem.classList.add('part__pic_out');
        foiegrasParagraphElem.innerHTML = foiegrasParagraph3;
        foiegrasOutTitle.classList.add("part__title_out");
        foiergasOutSubtitle.classList.add("part__subtitle_out");
        foiegrasOutList.classList.add("part__list_foiegras-out");
        foiegrasParagraphElem.classList.add("catmenu__info_foiegras_out");
        foiegrasFoto.classList.add("part__foto_out");
        foiegrasElem.removeEventListener("click",changeFoiegrasHandler);
        foiegrasLinkElem.removeEventListener("click",changeFoiegrasHandler);
    } 
}

    

//Рыба
let fishElem = document.querySelector(".catmenu__part_fish");
let fishParagraphElem = document.querySelector(".catmenu__info_fish");
let fishTextElem = document.getElementById("fishFood");
let fishOvalElem = fishElem.querySelector(".part__pic");
let fishOutTitle = fishElem.querySelector(".part__title");
let fishOutSubtitle = fishElem.querySelector(".part__subtitle");
let fishoutList = fishElem.querySelector(".part__list_fish");
let fishFoto = fishElem.querySelector(".part__foto");


const fishText1 = "Сказочное заморское явство";
const fishText2 = "Котэ не одобряет?";

const fishParagraph1= 'Чего сидишь? Порадуй котэ, <a class="catmenu__info_link catmenu__info_fish-link" href="">купи.</a>';
const fishParagraph2 = "Головы щучьи с чесноком да свежая сёмгушка";
const fishParagraph3 = "Печалька, с рыбой закончился";

fishTextElem.innerHTML = fishText1;
fishParagraphElem.innerHTML = fishParagraph1;

let fishLinkElem = document.querySelector(".catmenu__info_fish-link");

fishElem.addEventListener("click", changeFishHandler);
fishLinkElem.addEventListener("click", changeFishHandler);

function  changeFishHandler(event) {    
    event.preventDefault();
    
    let params = ["true", "false"]; 
    let pickParam = function (params){
             return params[Math.floor(Math.random()*params.length)]
        };      
    let fishStatus = pickParam(params);
    
    if (fishStatus == "true")  {
        fishElem.classList.toggle('catmenu__part_fish-red');  
        fishTextElem.classList.toggle('part__text_red');
        fishOvalElem.classList.toggle('part__pic_red');
        
            if (fishElem.classList.contains('catmenu__part_fish-red')){
            
                fishTextElem.innerHTML = fishText2;
                fishParagraphElem.innerHTML = "Головы щучьи с чесноком да свежая сёмгушка";
              } else {
                fishTextElem.innerHTML = fishText1;
                fishParagraphElem.innerHTML = fishParagraph1;
        
                let fishLinkElem = document.querySelector(".catmenu__info_fish-link");
                fishLinkElem.addEventListener("click", changeFishHandler);
              }   
    } else {
        fishElem.classList.add('catmenu__part_fish-out');  
        fishTextElem.classList.add('part__text_out');
        fishOvalElem.classList.add('part__pic_out');
        fishParagraphElem.innerHTML = fishParagraph3;
        fishOutTitle.classList.add("part__title_out");
        fishOutSubtitle.classList.add("part__subtitle_out");
        fishoutList.classList.add("part__list_fish-out");
        fishParagraphElem.classList.add("catmenu__info_fish_out");
        fishFoto.classList.add("part__foto_out");
        fishElem.removeEventListener("click",changeFishHandler);
        fishLinkElem.removeEventListener("click",changeFishHandler);
    }
    
}



//Кура
let chikenElem =  document.querySelector(".catmenu__part_chiken");
let chikenParagraphElem = document.querySelector(".catmenu__info_chiken");
let chikenTextElem = document.getElementById("chikenFood");
let chikenOvalElem = chikenElem.querySelector(".part__pic");
let chikenOutTitle = chikenElem.querySelector(".part__title");
let chikenOutSubtitle = chikenElem.querySelector(".part__subtitle");
let chikenOutList = chikenElem.querySelector(".part__list_chiken");
let chikenFoto = chikenElem.querySelector(".part__foto_chiken");

const chikenText1 = "Сказочное заморское явство";
const chikenText2 = "Котэ не одобряет?";

const chikenParagraph1= 'Чего сидишь? Порадуй котэ, <a class="catmenu__info_link catmenu__info_chiken-link" href="">купи.</a>';
const chikenParagraph2 = "Филе из цыплят с трюфелями в бульоне";
const chikenParagraph3 = "Печалька, с курой закончился";


chikenTextElem.innerHTML = chikenText1;
chikenParagraphElem.innerHTML = chikenParagraph1;

let chikenLinkElem = document.querySelector(".catmenu__info_chiken-link");

chikenElem.addEventListener("click", changeChikenHandler);
chikenLinkElem.addEventListener("click", changeChikenHandler);

function changeChikenHandler (event) {
    event.preventDefault();

    let params = ["true", "false"]; 
    let pickParam = function (params){
             return params[Math.floor(Math.random()*params.length)]
        };      
    let chikenStatus = pickParam(params);

    if (chikenStatus == "true") {
        chikenElem.classList.toggle('catmenu__part_chiken-red');  
        chikenTextElem.classList.toggle('part__text_red');
        chikenOvalElem.classList.toggle('part__pic_red');

        if (chikenElem.classList.contains('catmenu__part_chiken-red')) {
            
            chikenTextElem.innerHTML = chikenText2;
            chikenParagraphElem.innerHTML = "Филе из цыплят с трюфелями в бульоне";
        } else {
            chikenTextElem.innerHTML = chikenText1;
            chikenParagraphElem.innerHTML = chikenParagraph1;
        
            let chikenLinkElem = document.querySelector(".catmenu__info_chiken-link");
            chikenLinkElem.addEventListener("click", changeChikenHandler);
        }

    } else {
        chikenElem.classList.add('catmenu__part_chiken-out');  
        chikenTextElem.classList.add('part__text_out');
        chikenOvalElem.classList.add('part__pic_out');
        chikenParagraphElem.innerHTML = chikenParagraph3;
        chikenOutTitle.classList.add("part__title_out");
        chikenOutSubtitle.classList.add("part__subtitle_out");
        chikenOutList.classList.add("part__list_chiken-out");
        chikenParagraphElem.classList.add("catmenu__info_chiken_out");
        chikenFoto.classList.add("part__foto_chiken_out");
        chikenElem.removeEventListener("click",changeChikenHandler);
        chikenLinkElem.removeEventListener("click",changeChikenHandler);
    }
}
    

   





