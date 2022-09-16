export const formatTime = (time: number) => {
  let minutes = Math.floor(time / 60);
  time -= minutes * 60;

  let min = minutes < 10 ? `0${minutes}` : minutes;
  let seg = time < 10 ? `0${time}` : time;

  return `${min}:${seg}`;
};
