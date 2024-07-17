const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
console.log("hello world");

const cardArr = [...document.querySelectorAll(".product-card")].map(
  (item) => item.innerHTML
);

console.log(cardArr);
