let i=0;
let a=0;
let b=0;

let images = [];
let image=[];
let fimage=[];
let time = 2000;




images[0]='room1.jpeg';
images[1]='room2.jpeg';
images[2]='room3.jpeg';
image[0]='rest1.jpeg';
image[1]='rest2.jpeg';
image[2]='rest3.jpeg';
image[3]='rest4.jpeg';
image[4]='rest5.jpeg';
fimage[0]='act1.jpeg';
fimage[1]='act2.jpeg';
fimage[2]='act3.jpeg';
fimage[3]='act4.jpeg';


function changeImage(){
    
    slide1.src = images[i];
    slide2.src=image[a];
    slide3.src=fimage[b];
    
    
    if(i < images.length-1){
        i++;
    }
    else{
        i=0;
    }
    

    if(a<image.length-1){
        a++
    }
    else{
        a=0;
    }
   
    if(b< fimage.length-1){
        b++
    }
    else{
        b=0;
    }
    
    setTimeout("changeImage()",time);
}
window.onload=changeImage;



