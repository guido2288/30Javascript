const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");



const interval = () => {
  const actualTime = new Date();
  const hour = actualTime.getHours();
  const minutes = actualTime.getMinutes();
  const seconds = actualTime.getSeconds();
  
  let degSeconds =  ( (seconds / 60) *360 ) + 90;
  secondHand.style.transform = `rotate(${degSeconds.toString()}deg)`;
  let degminutes =( ( minutes / 60 ) * 360 ) + 90;
  minHand.style.transform = `rotate(${degminutes.toString()}deg)`;

  let degHours =( (hour / 12) * 360 ) + 90;
  hourHand.style.transform = `rotate(${degHours.toString()}deg)`;

}

  setInterval(interval, 1000)

