function decrement(num) {
  let id = num - 1;
  window.location = 'https://xkcd-comic-api.herokuapp.com/' + id;
}

function increment(num) {
  let id = num + 1;
  window.location = 'https://xkcd-comic-api.herokuapp.com/' + id;
}

function random() {

  let id = Math.floor(Math.random() * 2474) + 1;
  console.log(id);
  window.location = 'https://xkcd-comic-api.herokuapp.com/' + id;
}