let add= document.getElementById("add");
let remove= document.getElementById("remove");
let quan= document.getElementById("quan");


quan.innerText=1;


let i=1;

let addCart= document.getElementById("addCart");
let cart= document.getElementById("cart");

add.addEventListener("click", ()=>{
    
    if(i>=1){
        i++;
        quan.innerText=i;
    }
    
})

remove.addEventListener("click", ()=>{
    
    if(i>1){
        i--;
        quan.innerText=i;
    }
    
})

addCart.addEventListener("click",()=>{
    
    
   
    cart.innerText=`CART(${i})`;
})