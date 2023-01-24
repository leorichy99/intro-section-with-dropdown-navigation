const dropDownHead = document.querySelectorAll(".drop_down_head");
const mobileDropDownHead = document.querySelectorAll(".m_drop_down_head");
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const hamburgerContainer = document.querySelector('.hamburger_container');

dropDownHead.forEach((head) => {
  head.addEventListener("click", () => {
    // toggle on and off the hide_menu class of drop_down_head sibling (drop_down_menu)
    head.nextElementSibling.classList.toggle("hide_menu");
    // toggle on and off the turn-down class of drop_down_head lastElement(arrow)
    head.lastElementChild.classList.toggle("turn-down");
  });
});

mobileDropDownHead.forEach((head) => {
  head.addEventListener("click", () => {
    // toggle on and off the hide_menu class of drop_down_head sibling (drop_down_menu)
    head.nextElementSibling.classList.toggle("hide_menu");
    // toggle on and off the turn-down class of drop_down_head lastElement(arrow)
    head.lastElementChild.classList.toggle("turn-down");
  });
});

// toggle the hamburger on/off
menuIcon.addEventListener('click', () => hamburgerContainer.classList.add('access-hamburger'));
closeIcon.addEventListener('click', () => hamburgerContainer.classList.remove('access-hamburger'));



