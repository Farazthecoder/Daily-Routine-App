console.log("logic for todo app");

let h3 = document.getElementById("exercise-task");
let input = document.getElementById("input-value");
let addBtn = document.getElementById("exercise-add");
let ul = document.getElementById("unordered")
let clearBtn = document.getElementById("clear-task");


const h3Enhancement = (text,time)=>{
  h3.style.opacity = "1";
  h3.innerText = text
  setTimeout(()=>{
    h3.style.opacity = "0";
  },time)
}

// Adding functionality

addBtn.addEventListener("click", function () {
  if (input.value == "") {
    h3Enhancement("Plz add the task !",1000);
  }

  else {
    const html = `<li><div>${input.value}</div><div><button>Mark done</button><button>delete</button></div></li>`;

    ul.insertAdjacentHTML("beforeend", html);

    clearBtn.style.opacity = "1";

    input.value = "";

   h3Enhancement("Thanks for adding the task 😉",1000);


  }
})

// deleting functionality  and Mark done functionality

ul.addEventListener("click",function(e){
  if(e.target.innerText == "delete"){
    if(ul.children.length == 1){
      clearBtn.style.opacity = "0"
    }
     e.target.parentElement.parentElement.remove();
    h3Enhancement("Task removed from the list☹️",1000);
  }
  
  if(e.target.innerText == "Mark done"){
      let divOfText = e.target.parentElement.parentElement.children[0];
      divOfText.classList.add("mark-done");
      h3Enhancement("Hurray! you done your task 🥳",1000);
  }
  }
);

// Clear all task functionality

clearBtn.addEventListener("click",function(){
   let ulChildrens = Array.from(ul.children);
    ulChildrens.forEach((li)=>{
      li.remove();
      clearBtn.style.opacity = "0";
      h3Enhancement("Your list got emptied 😨",1000);
    })
})











