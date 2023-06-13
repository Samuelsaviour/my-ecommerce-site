 
const sidebar=document.querySelector('.sidebar')
const productListItem=document.querySelector('.product-list-item')
const productAvailable=document.querySelector('.product-available')
const prod_type=document.querySelector('.prod-type')
const categories=document.querySelector('.cartegory')
const increment_numb=document.querySelector('.increment-numb')
const cart_icon_container=document.querySelector('.cart-icon-container')
const right_sidebar=document.querySelector('.right_sidebar') 
const close_cart_co=document.querySelector('#close-cart-co')
const body_class=document.querySelector('header')
const Total_Grand=document.querySelector('.grand_total-con')
 
 


 
 let count=0
function increment(value) {
  let hhg=itemss.querySelectorAll('.itmmg ')
 increment_numb.innerText=count+hhg.length   
}


//showing the cart
 cart_icon_container.addEventListener('click',function() {
    right_sidebar.classList.add('show')
    body_class.classList.add('blurs')
 })

 close_cart_co.addEventListener('click',function() {
  right_sidebar.classList.remove('show')
  body_class.classList.remove('blurs')
})

    for(let items = 0; items < carteg.length; items++) {
        let x='';
        const element = carteg[items];
         x=`
        <div class="list-con-category">
          <li class="list-category" data-category="${element.text}">${element.text}</li>
     </div>
        `
      
       sidebar.innerHTML+=x
    } 
    
    let tty=sidebar.querySelectorAll('.list-category')
     
        for (let index = 0; index < tty.length; index++) {
          const element = tty[index];
         element.addEventListener('click',function(e) {
          let gg=e.target.dataset.category
          prod_type.innerText ='All '+  gg 

          let im=productAvailable.querySelectorAll('.prodi')
          for (let index = 0; index < im.length; index++) {
            const element = im[index];
             
            if (gg=='All') {
              
              element.style.display='flex'
            }
            else if(element.classList.contains(gg)) {
              element.style.display='flex' 
               
            } else {
              element.style.display='none'
              
            }
          }
         })
        }
    
    categories.addEventListener('click',()=>{
    sidebar.classList.add('shw')
      
    })
     

    function timesbtn() {
        sidebar.classList.remove('shw')
      }
     










      for (let indeces = 0; indeces < imageconlist.length; indeces++) {
          const element = imageconlist[indeces];
        let  tt='';
        tt=` 
        <div class="prodi ${element.prodname}">
            <div class="imgcc"><img src="${element.img}"></img></div> 
            <h3 class='pro-name' data-cate="${element.prodname}">${element.prodname}</h3>
            <div class="price">$${element.price}</div>
            <button  class="add-cart">Add to cart</button>
        </div>
     `
      productAvailable.innerHTML+=tt
      }



       let itemss=document.querySelector('.items')
       const cart_btn=productAvailable.querySelectorAll('.add-cart')
        
       for (let index = 0; index < cart_btn.length; index++) {
        cart_btn[index].addEventListener('click',function(e){
          let  btn=e.target
           let parentelem=btn.parentElement
          let parente=parentelem.children[0]
          let rr=parente.children[0].src
          let aa=parentelem.children[1].innerText
          let ee=parentelem.children[2].innerText
         
          itemss.innerHTML+=`
          <div class="itmmg ${[index] }"> 
          <div class="it-img"><img src="${rr}" alt=""></div>
          <div class="price-rate">${aa}</div>
          <input type="number" name="num" id="num" value="1">
          <div class="total">${ee}</div>
          <button class="del">delete </button>
          <div class="total-grand">${ee}</div>
           
          </div>
          `
           
          increment()
          totalGrand() 
         
          
          let hh=itemss.querySelectorAll('#num') 
          let mm=itemss.querySelectorAll('.del')
          //delete eacch item
          for (let index = 0; index < mm.length; index++) {
             let rr= mm[index].addEventListener('click',delted)
          }
          
          //updating the increment of item
          for (let numb = 0; numb < hh.length; numb++) {
             hh[numb].addEventListener('change',update)
          }
        })
         
       }


           function update(event) {
            let num_item=event.target 
            let num_parent=num_item.parentElement
            let price_item=num_parent.children[3].textContent.replace('$','')
            let total_price=num_parent.children[5]
            total_price.innerText= '$'+num_item.value * price_item
            totalGrand()
           }




       function delted(e) {
        let targeted=e.target
        targeted.parentElement.remove()
        increment(targeted)
        totalGrand(targeted) 
       }

        
       function totalGrand() {
        let countin=0
        let grand_total_parent=Total_Grand.parentElement
        let total_pr=grand_total_parent.children[1]
        let item1=total_pr.getElementsByClassName('total-grand') 
        for (let index = 0; index < item1.length; index++) {
          const element = item1[index]
         let eachi= Number(element.textContent.replace('$',''))  
         countin+=eachi
        }
        let grand_total_child=Total_Grand.children[1]
        grand_total_child.textContent='$'+ countin  
      }
       
  

        