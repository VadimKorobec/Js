// console.log('First log');

// setTimeout(() => {
//   console.log('Second log');
// }, 2000);

// console.log('Third log');

// const button = document.getElementById('button');

// const onClick = () => {
//   setTimeout(() => {
//     alert('You click me))');
//   }, 2000);
// };

// button.addEventListener('click', onClick);

// const green = () => {
//   console.log('Yello');
// };

// const timerId = setTimeout(green, 3000);

// clearTimeout(timerId);

// const btnStart = document.getElementById('start');
// const btnStop = document.getElementById('stop');
// let timer = null;

// btnStart.addEventListener('click', () => {
//   timer = setInterval(() => {
//     console.log(`I love async JS ${Math.random()}`);
//   }, 1000);
// });

// btnStop.addEventListener('click', () => {
//   clearInterval(timer);
//   console.log(`Interval with id ${timer} has stopped`);
// });

// const date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(new Date(0));
// console.log(new Date(15000));
// console.log(date.getTime());

// const teamMeetingDate = new Date('march 16,2030');
// console.log(teamMeetingDate);

// const preciseTeamMeetingDate = new Date('March 16, 2030 14:25:00');
// console.log(preciseTeamMeetingDate);

// new Date('2030-03-16');
// new Date('2030-03');
// new Date('2030');
// new Date('03/16/2030');
// new Date('2030/03/16');
// new Date('2030/3/16');
// new Date('March 16, 2030');
// new Date('March 16, 2030 14:25:00');
// new Date('2030-03-16 14:25:00');
// new Date('2030-03-16T14:25:00');
// new Date('16 March 2030');

// const date1 = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date1);

// const date2 = new Date();
// console.log('Date: ', date2);

// // Возвращает день месяца от 1 до 31
// console.log('getDate(): ', date2.getDate());

// // Возвращает день недели от 0 до 6
// console.log('getDay(): ', date2.getDay());

// // Возвращает месяц от 0 до 11
// console.log('getMonth(): ', date2.getMonth());

// // Возвращает год из 4 цифр
// console.log('getFullYear(): ', date2.getFullYear());

// // Возвращает час
// console.log('getHours(): ', date2.getHours());

// // Возвращает минуты
// console.log('getMinutes(): ', date2.getMinutes());

// // Возвращает секунды
// console.log('getSeconds(): ', date2.getSeconds());

// // Возвращает миллисекунды
// console.log('getMilliseconds(): ', date2.getMilliseconds());

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// console.log('Before promise.then()');

// promise.then(
//   value => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value);
//   },
//   error => {
//     console.log('onReject call inside promise.then()');
//     console.log(error);
//   }
// );

// console.log('After promise.then()');

// const fetchUserFromServer = (username, onSuccess, onError);

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();
//   setTimeout(() => {
//     if (random > 0.1) {
//       resolve(20);
//     } else {
//       reject('ERROR!!!');
//     }
//   }, 30);
// });

// promise
//   .then(res => {
//     return res * 3;
//   })
//   .then(data => {
//     return data - 20;
//   })
//   .then(data => {
//     console.log('then 3', data);
//   })
//   .catch(error => console.log(error))
//   .finally(() => {});

// let obj;
// const promise = fetch('https://swapi.dev/api/people/1');
// console.log(promise);
// promise
//   .then(res => res.json())
//   .then(data => {
//     foo(data);
//     console.log('data', data);
//   })
//   .catch(error => console.log(error))
//   .finally(() => console.log('After all'));

// function foo(obj) {
//   console.log('function', obj);
// }

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   });

// const fetchBtn = document.getElementById('fetch-btn');
// const userlist = document.querySelector('.user-list');

// fetchBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUserList(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch('https://jsonplaceholder.typicode.com/users').then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUserList(users) {
//   const markup = users
//     .map(user => {
//       return `<li>
//     <p>Name : ${user.name}</p>
//     <p>Email : ${user.email} </p>
//     <p>Company : ${user.company.name}</p>
//     </li>`;
//     })
//     .join('');
//   userlist.innerHTML = markup;
// }

// const searchParams = new URLSearchParams({
//   _limit: 5,
//   _sort: 'name',
// });

// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

// const form = document.querySelector('.js-search');
// const list = document.querySelector('.list');

// const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
// const API_KEY = '55e8091c7fe84f4a8ab112236231103';

// form.addEventListener('submit', onSearch);

// function onSearch(event) {
//   event.preventDefault();
//   const {
//     days: { value: daysValue },
//     query: { value: searchValue },
//   } = event.currentTarget.elements;

//   if (!searchValue) {
//     alert('Write city please');
//     return;
//   }

//   forecastApi(searchValue, daysValue).then(data =>
//     creatMarkup(data.forecast.forecastday)
//   );
// }

// function creatMarkup(arr) {
//   const markup = arr
//     .map(
//       item => `<li>
//     <img src="${item.day.condition.icon}" alt="" />
//     <span>${item.day.condition.text}</span>
//     <h2>Day : ${item.date}</h2>
//     <p>${item.day.avgtemp_c}&#8451;</p>
//   </li>;`
//     )
//     .join('');
//   list.innerHTML = markup;
// }

// function forecastApi(name = 'Kiev', value = 7) {
//   return fetch(`${BASE_URL}?key=${API_KEY}&q=${name}&days=${value}&lang=uk`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     })

//     .catch(error => console.error(error));
// }

// const TAX_RATE = 0.08;

// function calculateFinalPurchaseAmount(amt) {
//   console.log(amt);
//   // вычисляем новую сумму с налогом
//   amt = amt * TAX_RATE;
//   console.log(amt);

//   // возвращаем новую сумму
//   return amt;
// }

// var amount = 99.99;

// amount = calculateFinalPurchaseAmount(amount);

// console.log(amount.toFixed(2)); // "107.99"

// LxIRfOX2f4WDBIqactpC;

const BASE_URL = 'https://the-one-api.dev/v2/character';

const list = document.getElementById('list');
const load = document.getElementById('load-more');

load.addEventListener('click', onLoad);

let page = 1;

function ringsApi(page = 1) {
  const options = {
    headers: {
      Authorization: 'Bearer LxIRfOX2f4WDBIqactpC',
    },
  };
  return fetch(`${BASE_URL}?limit=300&page=${page}`, options).then(response => {
    if (!response.ok) {
      throw new Error(console.log(error));
    }
    return response.json();
  });
}

ringsApi()
  .then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data.docs));
  })
  .catch(error => console.log(error));

function createMarkup(arr) {
  return arr
    .map(
      ({ name, race }) => `<li>
    <h2>${name}</h2>
    <p>${race}</p>
  </li>`
    )
    .join('');
}

function onLoad() {
  page += 1;
  ringsApi(page)
    .then(data => {
      list.insertAdjacentHTML('beforeend', createMarkup(data.docs));
      if (data.page === data.pages) {
        load.setAttribute('hidden', true);
      }
    })
    .catch(error => console.log(error));
}
