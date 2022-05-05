// Toggle active class on rating buttons.
let rating = 0;

function clicked() {
  document.querySelectorAll('.rating-btn').forEach((button) => {
    button.classList.remove('active');
  });

  this.classList.add('active');
}

document.querySelectorAll('.rating-btn').forEach((button) => {
  button.onclick = clicked;
});

function submit() {
  const card = document.querySelector('.card');
  const thankYouCard = document.querySelector('.thank-you-card');
  thankYouCard.classList.add('show');
  card.classList.add('hide');

  rating = document.querySelector('.active').value;
  ratingDiv = document.querySelector('.rating-div');
  const p = document.createElement('p');
  const text = document.createTextNode(`You selected ${rating} out of 5`);
  p.appendChild(text);
  ratingDiv.appendChild(p);
}
