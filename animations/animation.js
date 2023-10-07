export const applyAnimation = () => {
  let input_dni = document.getElementById("dni");
  input_dni.addEventListener("input", function () {
    if (this.value.length > 8) {
      this.value = this.value.slice(0, 8);
    }
  });

  let card_section = document.getElementById("card_section");
  let btn_close_card = document.getElementById("btn_close_card");
  let btn_submit = document.getElementById("btn_submit");

  btn_submit.addEventListener("click", function () {
    // event.preventDefault();
    card_section.classList.add("active");
  });

  btn_close_card.addEventListener("click", function () {
    card_section.classList.remove("active");
  });
};
