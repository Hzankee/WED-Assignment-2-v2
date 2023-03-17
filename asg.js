function buy_me()
{
  window.alert("Are you sure?")
  window.alert("Think properly...")
  window.alert("You really want it? If you want it, please scroll down and click at brand to find out more")
}

function cartpagedisplay()
{
  let cartitems=localStorage.getItem('lsitemincart');//to find Localstorage called lsitemincart
  cartitems=JSON.parse(cartitems);
  let productcontainer=document.querySelector(".product-container");

  if(cartitems && productcontainer)
  {
    productcontainer.innerHTML='';
    let totalprice=0;
    let htm="";
    cartitems.forEach((item,i)=>{
      htm="<div class='col-3'><img class='img-cart' src='car image/"+item.pic+".png'></img></div><div class='col-3'><p>"+item.name+"</p></div><div class='col-3'>"+item.price+"</div><div class='col-3'><label>Delete</label><input class='rdb' type='checkbox' name= ></div><br><hr>";
      productcontainer.innerHTML+=htm;
    });

    if(cartitems.length==0)
    {
      document.getElementById("delbtn").style.visibility='hidden';
      document.getElementById("plobtn").style.visibility='hidden';
    }
  }
  else
  {
    document.getElementById("delbtn").style.visibility='hidden';
    document.getElementById("plobtn").style.visibility='hidden';
  }
}

function removeitem()
{
  let delbtn=document.getElementsByClassName('rdb');
  let cartitems=localStorage.getItem('lsitemincart');
  cartitems=JSON.parse(cartitems);
  for(let i=0; i<delbtn.length;i++)
  {
    if(delbtn[i].checked==true)
    {
      cartitems.splice(i,1);//delete array element using slice
      localStorage.setItem("lsitemincart",JSON.stringify(cartitems));
      localStorage.setItem("cartnumber",cartitems.length);
    }
  }
  //console.Log(cartitems);
  for(let i=0;cartitems.length;i++)
  {
    totalprice=totalprice+cartitems[i].price;
  }
  localStorage.setItem("totalprice",totalprice);
  location.reload();//reload the page
}

function selectAll()
{
  let delbtn=document.getElementsByClassName('rdb');
  let cartitems=localStorage.getItem('lsitemincart');
  cartitems=JSON.parse(cartitems);
  for(let i=0; i<delbtn.length;i++)
  {
    delbtn[i].checked=true;
  }
}
