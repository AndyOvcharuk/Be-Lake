async function getLakes () {
  const res = await fetch('/api/lake/all')
  const lakes = await res.json()
  lakes.forEach(lake => createCard(lake))
}

function createCard (lake) {
  const card = document.createElement('div')
  card.classList.add('card')
  card.innerHTML = `<div class="card__img">
    <span class="card__addmyfav dashicons dashicons-heart"></span>
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
    </div>`

  const cards = document.querySelector('.cards')
  cards.append(card)
}

getLakes()


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const headerBox = document.querySelector('.header-box')
  const logoShrink = document.querySelector('.logo')
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    headerBox.classList.add('smaller');
    logoShrink.style.width = '10vw';
  } else {
    headerBox.classList.remove("smaller");
    logoShrink.style.width = '20vw';
  }
}
