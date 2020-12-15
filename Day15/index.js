// javascript
//step 1 - choose the next/prev elemnt from html
//global var 
const prevPicture = document.querySelector(".previous");
const nextPicture = document.querySelector(".next");
const gallery = document.querySelector(".gallery");
let last = 0;
//step 2.1 - carousel implement -prev the picture 
prevPicture.addEventListener("click", ()=> {
    //if we are in the first picture so disable the buuton and do not do nothing 
    if (last < 0 )
    {
        last+=220;
        nextPicture.style.opacity = "1";
    }
    //if we are in the first picture so disable the buuton and do not do nothing 
    if (last === 0) {
        prevPicture.style.opacity = "0.3";
    }
    //set the current transform
    gallery.style.transform = `translate(${last}px)`
});
//step 2.2 - carousel implement -next the picture

nextPicture.addEventListener("click", () => 
{
    
    if(last > -880)
    {
        last -=220;
        prevPicture.style.opacity= "1"
    }
    if (last === -880){
        nextPicture.style.opacity="0.3"   
    }
    gallery.style.transform = `translate(${last}px)`
    
})