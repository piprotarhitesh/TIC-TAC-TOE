let xo_btn = document.querySelectorAll(".btn");
let reset_btn = document.querySelector(".reset");
let new_btn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let trueX = true;

const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableAll = () => {
  xo_btn.forEach((btn) => {
    btn.innerText = "";
    btn.disabled = true;
  });
}

const enableAll = () => {
  xo_btn.forEach((btn) => {
    btn.innerText = "";
    btn.disabled = false;
  });
}

const isDraw = () => {
  let Draw = true;

  xo_btn.forEach((btn) => {
    if (btn.innerText === "") {
      Draw = false;
    }
  });

  if (Draw) {
    showDraw();
    disableAll();
  }
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let val1 = xo_btn[pattern[0]].innerText;
    let val2 = xo_btn[pattern[1]].innerText;
    let val3 = xo_btn[pattern[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        showWinner(val1);
        disableAll();
        return;
      }
    }
  }
  isDraw();
};

xo_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (trueX) {
      btn.innerText = "X";
      trueX = false;
    } else {
      btn.innerText = "O";
      trueX = true;
    }
    btn.disabled = true;

    checkWinner();
  });
});


reset_btn.addEventListener("click", () => {
  enableAll();
  trueX = true;
});

new_btn.addEventListener("click", () => {
  enableAll();
  msgContainer.classList.add("hide");
  trueX = true;
})

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
}

const showDraw = () => {
  msg.innerText = "Game Draw! 🤝";
  msgContainer.classList.remove("hide");
};
