let box=document.querySelectorAll('.box')
console.log(box)
let windetial=document.querySelector('.result')
let text='X'
function changetext(){
    if (text==='X'){
        return text='O';
        }else{return text="X"};       
}

function show(){
    let res=document.querySelector('.result')
    res.classList.add('result1')
    Array.from(document.querySelectorAll('.row')).forEach(e=>{
        e.classList.add('hell')})
        document.querySelector('h1').classList.add('hell')
}

function winner(){
    if((document.querySelector('.box4').textContent===document.querySelector('.box5').textContent)&&(document.querySelector('.box5').textContent===document.querySelector('.box6').textContent)&&(document.querySelector('.box5').textContent!=="")){
        windetial.innerHTML=document.querySelector('.box4').textContent +" is winner"
        show();    
    }
   
    else if((document.querySelector('.box1').textContent===document.querySelector('.box2').textContent)&&(document.querySelector('.box3').textContent===document.querySelector('.box2').textContent)&&(document.querySelector('.box2').textContent!=="")){
        windetial.innerHTML=document.querySelector('.box2').textContent +" is winner"   
        show();    
    }
    else if((document.querySelector('.box7').textContent===document.querySelector('.box8').textContent)&&(document.querySelector('.box8').textContent===document.querySelector('.box9').textContent)&&(document.querySelector('.box9').textContent!=="")){
        windetial.innerHTML=document.querySelector('.box9').textContent +" is winner"   
        show();    
    }
    else if((document.querySelector('.box1').textContent===document.querySelector('.box4').textContent)&&(document.querySelector('.box4').textContent===document.querySelector('.box7').textContent)&&(document.querySelector('.box7').textContent!=="")){
        windetial.innerHTML=document.querySelector('.box1').textContent +" is winner"  
        show();     
    }
    else if((document.querySelector('.box2').textContent===document.querySelector('.box5').textContent)&&(document.querySelector('.box5').textContent===document.querySelector('.box8').textContent)&&(document.querySelector('.box8').textContent!=="")){
        windetial.innerHTML=document.querySelector('.box8').textContent +" is winner"  
        show();     
    }
    else if((document.querySelector('.box3').textContent===document.querySelector('.box6').textContent)&&(document.querySelector('.box6').textContent===document.querySelector('.box9').textContent)&&(document.querySelector('.box9').textContent!=="")){
        windetial.innerHTML=document.querySelector('.box9').textContent +" is winner"   
        show();    
    }
    else if((document.querySelector('.box1').textContent===document.querySelector('.box5').textContent)&&(document.querySelector('.box1').textContent===document.querySelector('.box9').textContent)&&(document.querySelector('.box1').textContent!=="")){
        windetial.innerHTML=document.querySelector('.box1').textContent +" is winner"   
        show();    
    }
    else if((document.querySelector('.box3').textContent===document.querySelector('.box5').textContent)&&(document.querySelector('.box3').textContent===document.querySelector('.box7').textContent)&&(document.querySelector('.box5').textContent!=="")){
        windetial.innerHTML=document.querySelector('.box5').textContent +" is winner"   
        show();    
    }
}

Array.from(box).forEach(e=>{
    
    e.addEventListener('click',()=> 
        {
            if(e.innerHTML===''){
                e.innerHTML=text
                text=changetext()
                winner();
            }
        })  
})
document.getElementById('reset').addEventListener('click',()=>{
    Array.from(box).forEach(e=>{
        e.innerHTML=""
    })
    let res=document.querySelector('.result')
    res.classList.remove('result1')
    Array.from(document.querySelectorAll('.row')).forEach(e=>{
        e.classList.remove('hell')})
        document.querySelector('h1').classList.remove('hell')
})