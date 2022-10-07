const radius=document.querySelector(".radius");
const range1=document.querySelector(".range-shadow1");
const range2=document.querySelector(".range-shadow2");
const range3=document.querySelector(".range-shadow3");
const range4=document.querySelector(".range-shadow4");
const range5=document.querySelector(".range-shadow5");
const span1=document.querySelector('.span1');
const span2 =document.querySelector('.span2');
const span3 =document.querySelector('.span3');
const span4=document.querySelector('.span4');
const span5=document.querySelector('.span5');
const span6=document.querySelector('.span6');
const element=document.querySelector(".square");


let shadow=[0,0,0,0,''];

radius.addEventListener('input',(e)=>{
  span1.innerHTML=`${e.target.value}px`;
  element.style.borderRadius=`${e.target.value}px`;
});

range1.addEventListener('input', (e)=>{
  span2.innerHTML= `${e.target.value}px`;
   shadow[0] =e.target.value;
   boxShadow();
 }); 

range2.addEventListener('input', (e)=>{
  span3.innerHTML=`${e.target.value}px`;
  shadow[1] =e.target.value;
  boxShadow();
}); 

range3.addEventListener('input', (e)=>{
  span4.innerHTML=`${e.target.value}px`;
  shadow[2] =e.target.value;
  boxShadow();
  }); 

range4.addEventListener('input', (e)=>{
  span5.innerHTML= `${e.target.value}px`;
  shadow[3] =e.target.value;
  boxShadow();
}); 

range5.addEventListener('input', (e)=>{
  span6.innerHTML= e.target.value;
  shadow[4] =e.target.value;
  boxShadow();
});

  function boxShadow(){
    element.style.boxShadow=`${shadow[0]}px ${shadow[1]}px ${shadow[2]}px ${shadow[3]}px ${shadow[4]}`;
   }


//let shadow=[0,0,0,0];

 // switch (range1){
  //  case shadow[0]:
     
  //}



