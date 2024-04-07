let input=document.getElementById("input-1");
let button=document.querySelectorAll('button');
let arr=Array.from(button);
  let str=" ";
 arr.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            str=eval(str);
            input.value=str;
        }
        else if(e.target.innerHTML=="AC"){
            str=" ";
            input.value=str;
        }
        else if(e.target.innerHTML=="x"){
             str=str.substring(0,str.length-1);
             input.value=str;
        }
        else{
             str+=e.target.innerHTML;
             input.value=str;
        }
    })
})