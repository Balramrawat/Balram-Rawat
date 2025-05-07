let gameseq=[];
let userseq=[];

let started=false;
let level=0;

let btns=["red","green","yellow","blue"];

let h2=document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started=true;
    }

    levelUp();
}); 


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random() * 3);
    let randcolor=btns[randIdx];
    let randBtn=document.querySelector(`.${randcolor}`);
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randcolor);

    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randBtn);
}

function checkbtn(idx){
    // console.log("curent level: ",level);
    // let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            levelUp();
        }
    }else{
        h2.innerHTML=`game over! <b>${level}</b><br> Press key to start`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkbtn(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}


function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}