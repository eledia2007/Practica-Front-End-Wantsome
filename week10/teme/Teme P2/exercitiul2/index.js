
document.getElementById('xhr').addEventListener('click', generator);
function generator() {
  const myQuote = document.getElementById('quote');
  const myJson = new XMLHttpRequest();
  myJson.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes', true);

  myJson.onload = function () {
    if (myJson.status === 200 && myJson.readyState === 4) {
      let response = JSON.parse(myJson.responseText);
      myQuote.innerHTML = response;
    }
    
  };
  myJson.send();
}
