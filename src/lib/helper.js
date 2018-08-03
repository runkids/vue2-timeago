
export function getNow(){
  return new Date().getTime();
}

/**
 * Get today ex. 2018-01-01 00:00:00
 **/ 
export  function getToday(){ 
  let date = new Date();
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.getTime();
}

/**
 * Get first day with this year ex. 2018-01-01 00:00:00
 **/ 
export  function getFirstDate(){ 
  let date = new Date();
  date.setMonth(0);
  date.setDate(1);
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.getTime();
}

/**
 * Get time by string format ex. 1999-02-21
 **/
export function getNowString(time){
  let date = new Date(time);
  let realMonth = date.getMonth()+1;
  let month = realMonth < 10 ? `0${realMonth}` : realMonth;
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  return `${date.getFullYear()}-${month}-${day}`;
}

/**
 * Get time by string format ex. 1999-02-21 01:40
 **/
export function getNowMoreString(time){
  let date = new Date(time);
  let realMonth = date.getMonth()+1;
  let month = realMonth < 10 ? `0${realMonth}` : realMonth;
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  let min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${date.getFullYear()}-${month}-${day} ${hour}:${min}`;
}

/**
 * Format Date/string/timestamp to timestamp
 **/
export function toTimestamp(input){
  if( !isNaN(input) || /^\d+$/.test(input) ) return input ;

  if( input instanceof Date ) return input.getTime();

  input = (input || '').trim().replace(/\.\d+/, '') 
    .replace(/-/, '/').replace(/-/, '/')
    .replace(/(\d)T(\d)/, '$1 $2').replace(/Z/, ' UTC') 
    .replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2'); 
  return new Date(input).getTime();
}