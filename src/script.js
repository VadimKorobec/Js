console.log('First log');

setTimeout(() => {
  console.log('Second log');
}, 2000);

console.log('Third log');

const button = document.getElementById('button');

const onClick = () => {
  setTimeout(() => {
    alert('You click me))');
  }, 2000);
};

button.addEventListener('click', onClick);

const green = () => {
  console.log('Yello');
};

const timerId = setTimeout(green, 3000);

clearTimeout(timerId);

const btnStart = document.getElementById('start');
const btnStop = document.getElementById('stop');
let timer = null;

btnStart.addEventListener('click', () => {
  timer = setInterval(() => {
    console.log(`I love async JS ${Math.random()}`);
  }, 1000);
});

btnStop.addEventListener('click', () => {
  clearInterval(timer);
  console.log(`Interval with id ${timer} has stopped`);
});

const date = new Date();
console.log(date);
console.log(date.toString());
console.log(new Date(0));
console.log(new Date(15000));
console.log(date.getTime());

const teamMeetingDate = new Date('march 16,2030');
console.log(teamMeetingDate);

const preciseTeamMeetingDate = new Date('March 16, 2030 14:25:00');
console.log(preciseTeamMeetingDate);
