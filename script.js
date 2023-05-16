var div=document.createElement("div");
div.style.marginTop="20px";

var h1 =document.createElement("h1");
h1.innerHTML="COVID-19 TRACKER";
h1.style.textAlign="center";
h1.style.marginTop="20px";

var input=document.createElement("input");
div.style.textAlign="center";
input.setAttribute("type","text");
input.setAttribute("id","country");
input.style.width="30%";
input.setAttribute("placeholder","Enter the Country Name");

var lb=document.createElement("br");
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-secondary");
button.style.margin="10px";
button.innerHTML="Search";

div.append(input,lb,button);
document.body.append(h1,div);

button.addEventListener("click",foo);

async function foo(){
 let res=document.getElementById("country").value;
 let url=`https://api.covid19api.com/dayone/country/${res}`;
 let res1=await fetch(url);
 let res2=await res1.json();
 var index= res2.length-1;
 

 var disp =document.createElement("div");
 disp.setAttribute("type","text");
 disp.style.textAlign="center";
disp.style.marginTop="10px";
 disp.innerHTML=   `<span>Country Name:${res}</span><br>
 <span>Active count :${res2[index].Active}</span><br>
 <span>Deaths count :${res2[index].Deaths}</span><br>
 <span>Recovered count :${res2[index].Recovered}</span><br>` ;
 document.body.append(disp);

}