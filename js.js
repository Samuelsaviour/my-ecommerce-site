 const listcon=document.querySelector('.list-img')
 const imgWrapper=document.querySelector('.img-wrapper')
 const textslide=document.querySelector('.text')
 const contentContainer=document.querySelector('.content-container')
 const dots=document.querySelectorAll('.dot')
  console.log(dots);

 let slideCount=0;



 function dotsupdate() {
    dots.forEach((el,tt)=>{
        el.addEventListener('click',function () {
            dots.forEach(e=>e.classList.remove('dot_light'))
            this.classList.add('dot_light')
            tt+=slideCount
            textslide.style.left=`${tt*-500}px`
        })
     }) 
    
 }
 



function get() {
    for (let index = 0; index < properties.length; index++) {
         let x=`
                    <div class= "fab">
                    <img   src=" ${properties[index].img}" alt="">
                    </div>   ` 
         imgWrapper.innerHTML+=x;    
    }
}
 
 
 

  
const clikableslide=()=>{
    let angle=document.createElement('li')
    angle.classList.add('next')
    angle.innerHTML='  <i class="fa-solid fa-angle-right fa-2xl"></i>' ;
    contentContainer.append(angle)

    let prev=document.createElement('li')
    prev.classList.add('prev')
    prev.innerHTML='  <i class="fa-solid fa-angle-left fa-2xl"></i>' ;
    contentContainer.append(prev)
    
    let animate=imgWrapper.querySelectorAll('.fab') 
  
    angle.addEventListener('click',function() { 
        dotsupdate() 
        resat() 
         
        animate[slideCount].classList.add('animat')
       
         slideCount=(slideCount < 3 )? slideCount + 1:3;
         animate[slideCount].style.zIndex=1
         animate[slideCount].style.opacity=1
         console.log(slideCount);
          
    })
     
    prev.addEventListener('click',function() {  
         reset()
        animate[slideCount].style.zIndex=1
        animate[slideCount].style.opacity=1
        animate[slideCount].classList.add('animat')
         slideCount=(slideCount  > 0 ) ? slideCount - 1 :0;
         
            
    })
    let gettingcount=0
 
    angle.addEventListener('click',function() { 
         
        
        console.log(dotsupdate());
        slideCount=( slideCount <3)?   slideCount + 1:3
        textslide.style.left=`${  slideCount*-500}px` 
         
    })
     
    prev.addEventListener('click',function() {  
        slideCount=( slideCount > 0)? slideCount - 1:0
        textslide.style.left=`${slideCount*-500}px` 
        

    })  

   

    function  reset() {
        for (let index = 0; index < animate.length ; index++) {
            animate[index].style.zIndex=0;
            animate[index].style.opacity=0;
        }
      } 
      function  resat() {
        for (let index = 0; index < animate.length; index++) {
            animate[index].style.zIndex=0
            animate[index].style.opacity=0
        }
      }    
    
}


dotsupdate()
get();
clikableslide()
 
    