const btnelement=document.querySelector('button');
const username=document.getElementById("updatecontent");


btnelement.onclick=function(){
    const name=prompt("Please enter your name");
    username.textContent=name;

}