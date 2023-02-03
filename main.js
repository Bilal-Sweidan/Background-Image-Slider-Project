let divImg = document.querySelector('#imgslide');
let R = document.querySelector('#right');
let L = document.querySelector('#left');
let x = [1,2,3,4,5]
let i=0
R.onclick = function (){
    i++;
    if (i >= x.length){
        i = 0
    }
    if (i < 0 ){
        i = x.length-1;
    }
    divImg.style.backgroundImage = `url('img/${x[i]}.jpg')`;
    console.log(i)


}
L.onclick = function (){
    i--;
    if (i >= x.length){
        i = 0
    }
    if (i < 0 ){
        i = x.length-1;
    }
    console.log(i)
    divImg.style.backgroundImage = `url('img/${x[i]}.jpg')`;
}