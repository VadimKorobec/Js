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

const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise('promiseA value', 1000);
const promiseB = makePromise('promiseB value', 3000);

Promise.all([promiseA, promiseB])
  .then(value => comsole.log(value))
  .catch(error => console.log(error));
