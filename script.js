const submitbtn=document.querySelector('.submit-btn');
const stars=document.querySelector('.stars');
let checkedlabel=null;
const submitpage=document.querySelector('.submit-page');
const successpage=document.querySelector('.success-page');
const alllabel=document.querySelectorAll('input[type="radio"]');
// console.log(checkedlabel.value);
for (item of alllabel){
    item.addEventListener('click',(e)=>{
        checkedlabel=document.querySelector('input[type="radio"]:checked');
        
       
    })
}

submitbtn.addEventListener('click',()=>{
    if(checkedlabel==null){
        alert("please select a rating");
    }
    else {
    stars.innerText=checkedlabel.value;
    successpage.classList.remove('hide');
    submitpage.classList.add('hide');
    }

});