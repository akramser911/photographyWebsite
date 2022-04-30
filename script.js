
let productsDiv = document.getElementById('productsDiv');
let photosDiv = document.getElementById("photosDiv");
let portraitDiv = document.getElementById("portraitDiv");
let designDiv = document.getElementById("designDiv");
let natureDiv = document.getElementById("natureDiv");
let streetDiv = document.getElementById("streetDiv");



let photo = document.getElementById("photos");
let products = document.getElementById("products");
let streets = document.getElementById("street");
let portraits = document.getElementById("portrait");
let natures = document.getElementById("nature");
let designs = document.getElementById('design');
/*
products.onclick = function (){
    photos.style.display= "none";
    productsDiv.style.display = "grid";
}
*/
const photos = {
    id: "photosDiv"
}
const product = {
    id: "productsDiv"
}
const portrait = {
    id: "portraitDiv"
}
const street ={
    id: "streetDiv"
}
const nature = {
    id: "natureDiv"
}
const design = {
    id: "designDiv"
}
function changeItems (id){

    if (id == photos.id){
        portraits.classList.remove('selected'); streets.classList.remove('selected'); products.classList.remove('selected'); natures.classList.remove('selected'); designs.classList.remove('selected');
        photo.classList.add('selected');
        photosDiv.style.display= "grid";
        productsDiv.style.display = "none";
        designDiv.style.display = "none";
        portraitDiv.style.display = "none";
        natureDiv.style.display = "none";
        streetDiv.style.display= "none";
    }

    if (id == product.id){
        photo.classList.remove('selected'); streets.classList.remove('selected'); portraits.classList.remove('selected'); natures.classList.remove('selected'); designs.classList.remove('selected');
        products.classList.add('selected');
        photosDiv.style.display= "none";
        productsDiv.style.display = "grid";
        designDiv.style.display = "none";
        portraitDiv.style.display = "none";
        natureDiv.style.display = "none";
        streetDiv.style.display= "none";
    }
    if (id == portrait.id){
        photo.classList.remove('selected'); streets.classList.remove('selected'); products.classList.remove('selected'); natures.classList.remove('selected'); designs.classList.remove('selected');
        portraits.classList.add('selected');
        photosDiv.style.display= "none";
        productsDiv.style.display = "none";
        portraitDiv.style.display = "grid";
        designDiv.style.display = "none";
        natureDiv.style.display = "none";
        streetDiv.style.display= "none";
    }
    if (id == street.id){
        photo.classList.remove('selected'); portraits.classList.remove('selected'); products.classList.remove('selected'); natures.classList.remove('selected'); designs.classList.remove('selected');
        streets.classList.add('selected');
        streetDiv.style.display= "grid";
        photosDiv.style.display= "none";
        productsDiv.style.display = "none";
        designDiv.style.display = "none";
        portraitDiv.style.display = "none";
        natureDiv.style.display = "none";
    }
    if (id == nature.id){
        photo.classList.remove('selected'); streets.classList.remove('selected'); products.classList.remove('selected'); portraits.classList.remove('selected'); designs.classList.remove('selected');
        natures.classList.add('selected');
        photosDiv.style.display= "none";
        productsDiv.style.display = "none";
        designDiv.style.display = "none";
        portraitDiv.style.display = "none";
        natureDiv.style.display = "grid";
        streetDiv.style.display= "none";
    }
    if (id == design.id ){
        photo.classList.remove('selected'); streets.classList.remove('selected'); products.classList.remove('selected'); natures.classList.remove('selected'); portraits.classList.remove('selected');
        designs.classList.add('selected');
        designDiv.style.display = "grid";
        photosDiv.style.display= "none";
        productsDiv.style.display = "none";
        portraitDiv.style.display = "none";
        natureDiv.style.display = "none";
        streetDiv.style.display= "none";
    }
}


let email = document.getElementById('inputEmail');

function clearFields (){
    email.value.innerHTML = "";
}

/*
let p = document.getElementById("feedPara");
let rightArrow = document.getElementById('rightArrow');

const container = {
    para: p,
}
arrayOfFeeds =[1,2,3,4];
while(let i = 0; i < 3; i++;){
    rightArrow.onclick = function (){
        console.log(arrayOfFeeds[i]);
    }
}
    

    */
    

const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


