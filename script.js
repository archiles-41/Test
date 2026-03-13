function checkURL(){

let url=document.getElementById("urlInput").value;

let score=0;

let reasons=[];


if(url.length>25){
score+=30;
reasons.push("✔ URL too long");
}

if(url.includes("verify") || url.includes("login")){
score+=30;
reasons.push("✔ Suspicious keyword detected");
}

let dotCount=(url.match(/\./g)||[]).length;

if(dotCount>3){
score+=30;
reasons.push("✔ Too many dots");
}


document.getElementById("score").innerText=
"Phishing probability: "+score+"%";


let bar=document.getElementById("riskBar");

bar.style.width=score+"%";


if(score<30){
bar.style.background="green";
}

else if(score<60){
bar.style.background="yellow";
}

else{
bar.style.background="red";
}


let list=document.getElementById("reasons");

list.innerHTML="";

reasons.forEach(r=>{
let li=document.createElement("li");
li.innerText=r;
list.appendChild(li);
});

}



let toggle=document.getElementById("themeToggle");

toggle.onclick=function(){

document.body.classList.toggle("dark");

}
