export const nowDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  month = month > 9 ? month : "0" + month;
  let date = now.getDate();
  date = date > 9 ? date : "0" + date;
  const nowDate = `${year}-${month}-${date}`;
  return nowDate;
};

export const nowTime = () => {
  const now = new Date();
  let hour = now.getHours();
  hour = hour > 9 ? hour : "0" + hour;
  let minute = now.getMinutes();
  minute = minute > 9 ? minute : "0" + minute;
  let second = now.getSeconds();
  second = second > 9 ? second : "0" + second;
  const nowTime = `${hour}:${minute}:${second}`;
  return nowTime;
};
