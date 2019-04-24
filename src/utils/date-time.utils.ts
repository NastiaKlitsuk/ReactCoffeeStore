enum DateTimeFormat {
  Short = 'short',
  Long = 'long'
}
export function getLocaleTime(locale?: string) {
  return new Date().toLocaleString(locale);
}

function getCurrentHour(dateTime: string) {
  const time = dateTime.slice(dateTime.indexOf(',') + 1).trim();
  return parseInt(time.slice(0, time.indexOf(':')), 10);
}

function isAM(dateTime: string) {
  return dateTime.indexOf('AM') !== -1;
}

function isPM(dateTime: string) {
  return dateTime.indexOf('PM') !== -1;
}

export function isMorning(dateTime: string) {
  const hour = getCurrentHour(dateTime);
  return isAM(dateTime) ? hour >= 5 && hour < 12 : false;
}

export function isAfternoon(dateTime: string) {
  const hour = getCurrentHour(dateTime);
  const hoursRange =
    (hour >= 12 && hour < 17) || hour === 12 || (hour >= 1 && hour < 5);
  return isPM(dateTime) ? hoursRange : false;
}

export function isEvening(dateTime: string) {
  const hour = getCurrentHour(dateTime);
  const hoursRange = (hour >= 17 && hour < 21) || (hour >= 5 && hour < 9);
  return isPM(dateTime) ? hoursRange : false;
}

export function isNigth(dateTime: string) {
  const hour = getCurrentHour(dateTime);
  const isBeforeMidnigth = isPM(dateTime) ? hour >= 21 || hour >= 9 : false;
  const isAfterMidnigth = isAM(dateTime) ? hour < 5 : false;
  return isBeforeMidnigth || isAfterMidnigth;
}

