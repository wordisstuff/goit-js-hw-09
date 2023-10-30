import Notiflix from 'notiflix';


const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);
  const promises = [];

  for (let i = 0; i < amount; i++) {
    const promise = createPromise(i + 1, delay + i * step);
    promises.push(promise);
  }
  Promise.all(promises)
    .then(results => console.log(results))
    .catch(error => console.log(error));
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}