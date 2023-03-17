let items=[
  {
    name:"Toyota Camry",
    pic:"Toyota Camry",
    price:"RM 209,800 ~ RM 212,010",
  },
  {
    name:"Toyota Vios",
    pic:"Toyota Vios",
    price:"RM 77,600 ~ RM 92,392",
  },
  {
    name:"Toyota Hilux",
    pic:"Toyota Hilux",
    price:"RM 134,834 ~ RM 146,685",
  },
  {
    name:"Toyota Altis",
    pic:"Toyota Altis",
    price:"RM 72,030 ~ RM 124,758",
  },
]

let addtocartbtn;
function indexdisplay(){
  let productlist=document.getElementById("indexproduct");
  let htmltag="";
  items.forEach((item, i)=>{
    htmltag="<div class='col-lg-3'><div class='card> <div class='card-header'> <img class='img-item' src='car image/"+item.pic+
    ".png' alt=''> </div> <div class='card-body'> <h4 class='card-tittle'> Brand:"+item.name+
    "</h4> <h4 class=card-text> Price="+item.price+
    "</h4> <a href='#' class='btn btn-primary add-to-cart'> Add to favorite</a> </div> </div></div>";
    productlist.innerHTML+=htmltag;
  });
  addtocartbtn=document.querySelectorAll('.add-to-cart'); //select all the add-to-cart class

  for(let i=0;i<addtocartbtn.length;i++)
  {
    addtocartbtn[i].addEventListener('click',()=>{
      additem(i);
    });
  }
}

let itemincart=[]; //will store item user bought
function additem(i){
  let itemindex=localStorage.getItem('cartnumber');
  itemindex=parseInt(itemindex);
  if(itemindex)
    {
      itemincart=localStorage.getItem('lsitemincart');
      itemincart=JSON.parse(itemincart);
      itemincart.push(items[i]);
      itemindex++;
      localStorage.setItem('lsitemincart',JSON.stringify(itemincart));
      localStorage.setItem('cartnumber',itemindex);
      cartdisplay();
    }
    else{
      itemincart[0]=items[i];
      console.log(itemincart);
      localStorage.setItem('lsitemincart',JSON.stringify(itemincart));
      localStorage.setItem('cartnumber',1);
      cartdisplay();
    }
  }

function cartdisplay()
{
  let cart = localStorage.getItem('cartnumber');
  cart=parseInt(cart);
  if(cart)
  {
    document.getElementById('cartdisplay').textContent=cart;
  }
  else
  {
    document.getElementById('cartdisplay').textContent=0;
  }
}
window.addEventListener('load',()=>{
  cartdisplay();
})

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  // TODO: Check if email and password are valid
  // If valid, authenticate user and redirect to home page
  // If invalid, display error message
});

loginLink.addEventListener('click', e => {
  e.preventDefault();
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});
