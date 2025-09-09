let vize=document.getElementById("vize");
let final=document.getElementById("final");
let btnHesapla=document.getElementById("hesapla");
let ortalama=document.getElementById("ortalama");
let harfNot=document.getElementById("harfNot");


btnHesapla.addEventListener("click",()=>{
let vizeTxt= vize.value;
let finalTxt = final.value;
let sonuc = Math.round((vizeTxt * 0.30) + (finalTxt * 0.70));

if(sonuc>=90 && sonuc <= 100){
    ortalama.innerText=`Ortalamanız: ${sonuc}`;
    harfNot.innerText="AA";
    harfNot.style.backgroundColor="lightgreen";
}
else if(sonuc>=80 && sonuc <= 89){
    ortalama.innerText=`Ortalamanız: ${sonuc}`;
    harfNot.innerText="BA";
    harfNot.style.backgroundColor="lightgreen";
}
else if(sonuc>=75 && sonuc <= 79){
    ortalama.innerText=`Ortalamanız: ${sonuc}`;
    harfNot.innerText="BB";
    harfNot.style.backgroundColor="lightgreen";
}
else if(sonuc>=70 && sonuc <= 74){
    ortalama.innerText=`Ortalamanız: ${sonuc}`;
    harfNot.innerText="CB";
    harfNot.style.backgroundColor="lightgreen";
}

else if(sonuc>=60 && sonuc <= 69){
    ortalama.innerText=`Ortalamanız: ${sonuc}`;
    harfNot.innerText="CC";
    harfNot.style.backgroundColor="lightgreen";
}
else if(sonuc>=50 && sonuc <= 59){
    ortalama.innerText=`Ortalamanız: ${sonuc}`;
    harfNot.innerText="DC";
    harfNot.style.backgroundColor="lightgreen";
}
else if(sonuc>=40 && sonuc <= 49){
    ortalama.innerText=`Ortalamanız: ${sonuc}`;
    harfNot.innerText="DD";
    harfNot.style.backgroundColor="red";
}
else if(sonuc>=30 && sonuc <= 39){
    ortalama.innerText=`Ortalamanız: ${sonuc}`;
    harfNot.innerText="FD";
    harfNot.style.backgroundColor="crimson";
}
else{
    ortalama.innerText = `Ortalamanız : ${sonuc}`;
    harfNot.innerText = "FF";
    harfNot.style.backgroundColor = "crimson";
}


})