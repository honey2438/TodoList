let entry=document.getElementById("entry");
let userTask=[];
let add=document.getElementById("add");
let innerBox=document.getElementById("inner-box");



add.onclick=()=>{
    if(entry.value!=""){
        userTask.push({
            val:entry.value
        });
        localStorage.setItem("userTask",JSON.stringify(userTask));
        display();
        entry.value="";
    }  
    else{
        alert("Enter some task");
    }  
}

let display=()=>{
    userTask=JSON.parse(localStorage.getItem("userTask"));
    innerBox.innerHTML="<h2>Tasks</h2>";
    userTask.forEach((data,index)=>{
        innerBox.innerHTML+=
        `<div class="item" index="${index}">
        <div id="content"><h3 id="text">${index+1}.${" "+data.val}</h3></div>
        <div id="buttons">
            <button class="done"><i class="fa fa-check-square-o" aria-hidden="true"></i></button>
            <button class="del"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
            </div>`;
    })

    let del=document.querySelectorAll(".del");
    let i;  
    for(i=0;i<del.length;i++){
        del[i].onclick=function(){
            let todel=this.parentElement.parentElement;
            let index=todel.getAttribute("index");
            
            userTask.splice(index, 1);
            localStorage.setItem("userTask", JSON.stringify(userTask));
            todel.remove(); 
        }
    }

    let done=document.querySelectorAll(".done");
    for(i=0;i<done.length;i++){
        done[i].onclick=function(){
            let ele=this.parentElement.parentElement;
            ele.firstElementChild.firstElementChild.style.textDecoration="line-through";
        }
    }

}
if(localStorage.length!=0){
    display();
}
