$(document).ready(function() {
  // Place JavaScript code here...
  // @ts-ignore
  for (const id of JSON.parse($("#catIds")[0].value)) {
    const selector = "#" + id;
    // @ts-ignore
    $(selector).slick();
  }

  // @ts-ignore
  stack = window.swing.Stack();

  [].forEach.call(document.querySelectorAll(".stack li"), function (targetElement) {
    let card = stack.createCard(targetElement);
    card.on('dragmove', (e) => {
      console.log(e);
    })
    targetElement.classList.add("in-deck");
  });

  stack.on("throwout", function (e) {
    console.log(e.target.innerText || e.target.textContent, "has been thrown out of the stack to the", e.throwDirection, "direction.");

    e.target.classList.remove("in-deck");
  });

  stack.on("throwin", function (e) {
    console.log(e.target.innerText || e.target.textContent, "has been thrown into the stack from the", e.throwDirection, "direction.");

    e.target.classList.add("in-deck");
  });


});