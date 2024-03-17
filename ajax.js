console.log("Ajax Tutorial");


let butone = document.getElementById('but1');
butone.addEventListener("click" , mybutton);

function mybutton(){
 const xhr = new XMLHttpRequest();

 xhr.open('GET','note.txt',true);

 xhr.onprogress  = function(){
    console.log("On progress.....");
 }

 xhr.onload = function(){
    if(this.status==200){
        console.log(this.responseText);
    }
    console.log("error");
 }

 xhr.send();


}

let buttwo  = document.getElementById('but2');
buttwo.addEventListener("click", mybuttontwo);

function mybuttontwo(){
   const xhre = new XMLHttpRequest();

   xhre.open('POST','http://dummy.restapiexample.com/api/v1/create' , true);
   xhre.getResponseHeader('Content-type','application/json');
   xhre.onprogress = function(){
      console.log("On progress.....");
   }

   xhre.onload = function(){
      console.log(this.responseText);
   }

   params = `{"name":"test","salary":"423","age":"24"}`;
   xhre.send(params);
   console.log("we are done");
}

let butthree = document.getElementById('but3');
butthree.addEventListener("click", mybuttonthree);

function mybuttonthree(){
   const xhr3 = new XMLHttpRequest();

   xhr3.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);

   xhr3.onprogress=function(){
      console.log("progress");
   }
   xhr3.onload= function(){
      // console.log(this.responseText);
      let obj = JSON.parse(this.responseText);
      console.log(obj);
   }
   xhr3.send();
}