async function getLakes() {
  const res = await fetch("/api/lake/all");
  const lakes = await res.json();
  lakes.forEach((lake) => createCard(lake));
}

function createCard(lake) {
  const card = document.createElement("div");
  card.innerHTML = `<div class="card">
  <div class="card__img">
    <img src="/assets/img/${lake.filename}" alt="${lake.name}" />
  </div>
  <div class="card__content">
    <h2 class="card__title">${lake.name}</h2>
    <div class="card__icons">
      <span
        class="iconify dog"
        data-icon="mdi:dog-side"
        data-inline="false"
      ></span>
      <span
        class="iconify bbq"
        data-icon="maki:bbq-11"
        data-inline="false"
      ></span>
      <span
        class="iconify food"
        data-icon="ic:outline-restaurant-menu"
        data-inline="false"
      ></span>
      <span
        class="iconify a11y"
        data-icon="bx:bx-handicap"
        data-inline="false"
      ></span>
      <span
        class="iconify watersports"
        data-icon="map:wind-surfing"
        data-inline="false"
      ></span>
    </div>
    <div class="card__text">
      ${lake.short_description}
    </div>
  </div>`;

  const cards = document.querySelector(".cards");
  cards.append(card);
}

getLakes();

// My Favourite Button - Heart
// $(".favme").click(function () {
//   $(this).toggleClass("active");
// });

// /* when a user clicks, toggle the 'is-animating' class */
// $(".favme").on("click touchstart", function () {
//   $(this).toggleClass("is_animating");
// });

// /*when the animation is over, remove the class*/
// $(".favme").on("animationend", function () {
//   $(this).toggleClass("is_animating");
// });

// function sortList() {
//   let list, i, switching, b, shouldSwitch;
//   list = document.getElementsByClassName("cards");
//   switching = true;
//   /* Make a loop that will continue until
//   no switching has been done: */
//   while (switching) {
//     // start by saying: no switching is done:
//     switching = false;
//     b = list.getElementsByTagName("LI");
//     // Loop through all list-items:
//     for (i = 0; i < b.length - 1; i++) {
//       // start by saying there should be no switching:
//       shouldSwitch = false;
//       /* check if the next item should
//       switch place with the current item: */
//       // To be changed for distance ranking order
//       if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
//         /* if next item is alphabetically
//         lower than current item, mark as a switch
//         and break the loop: */
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /* If a switch has been marked, make the switch
//       and mark the switch as done: */
//       b[i].parentNode.insertBefore(b[i + 1], b[i]);
//       switching = true;
//     }
//   }
// }
