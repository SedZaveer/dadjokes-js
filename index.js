const btnElement = document.getElementById('btn');
const jokeElement = document.getElementById('joke');

const apiKey = 'leNYjC4bpgQgFcAG2ruw5A==APG0bEN1P5uUrF1X';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {
  jokeElement.innerText = 'Loading a joke...';
  const response = await fetch(apiURL, options);
  const data = await response.json();

  jokeElement.innerText = data[0].joke;
}

btnElement.addEventListener('click', getJoke);
