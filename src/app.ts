const btn = document.querySelector("button")!;

function clickHandler(message: string) {
  alert("clicked" + message);
}

btn.addEventListener("click", clickHandler.bind(null,"You're welcom"));