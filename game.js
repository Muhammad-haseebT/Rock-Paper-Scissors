let shapes = document.querySelectorAll(".shapes");
let h = document.querySelector(".msg h1");
let p1 = document.querySelector(".p1 h1");
let p2 = document.querySelector(".p2 h1");
let uc = 0;
let c = 0;
let moves = ["Rock", "Paper", "Scissors"];
const generate = (userch) => {
  let index = Math.floor(Math.random() * 3);
  let compch = moves[index];
  let st = true;
  if (compch == userch) {
    h.innerText = "It's a Draw";
  } else {
    if (userch == "Rock" && compch == "Paper") {
      c++;
      st = false;
    } else if (userch == "Rock" && compch == "Scissors") {
      uc++;
      st = true;
    } else if (userch == "Paper" && compch == "Rock") {
      uc++;
      st = true;
    } else if (userch == "Paper" && compch == "Scissors") {
      c++;
      st = false;
    } else if (userch == "Scissors" && compch == "Rock") {
      c++;
      st = false;
    } else if (userch == "Scissors" && compch == "Paper") {
      uc++;
      st = true;
    }
    if (st) {
      h.innerText = "You Win";
    } else {
      h.innerText = "you Lost";
    }
  }
  p1.innerText = uc;
  p2.innerText = c;
};

shapes.forEach((i) => {
  i.addEventListener("click", () => {
    let uch = i.classList[2];
    generate(uch);
  });
});
