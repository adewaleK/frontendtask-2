let btn = document.getElementById("m-c");

document.getElementById("menu").onclick = ()=> {
    if(btn.style.display == "none"){
        btn.style.display="flex"
        document.getElementById("title").style.display="none";
    }else{
        btn.style.display="none";
        document.getElementById("title").style.display="block";
    }
}
