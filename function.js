let boxes = document.querySelectorAll(".cell");
let resetBtn = document.querySelector("#reset-btn");

let msg = document.querySelector(".statusText");
let hide = document.querySelector(".hide");

let turnO = true;

function myFunction(){
    
}
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    
];
const resetGame = () => {
    enableBoxes();
    turnO = true;
    hide.classList.add("hide");
    
}


boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
  if(turnO){//playerO
    box.innerText = "O";
    turnO = false;  
} else{//playerX
    box.innerText = "X";
    turnO = true;
   
}
    checkWinner();
    box.disabled = true;
    });
});
let disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
}
};

const showWinner= (winner) =>{
    msg.innerText = `Congratulation: Winner is ${winner} `;
    hide.classList.remove("hide");
    disableBoxes();
};
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;  
        
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                
                showWinner(pos1Val);
            }
        }


    }
}; 
resetBtn.addEventListener("click", resetGame);

