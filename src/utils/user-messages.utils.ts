import {
  isMorning,
  isAfternoon,
  isEvening,
  getLocaleTime
} from './date-time.utils';
import {
  GoodMorningMessage,
  GoodAfternoonMessage,
  GoodEveningMessage,
  GoodNigthMessage
} from '../constants/user-message';

export function getGoodDayMessageByTime() {
  const dateTime = getLocaleTime();

  if (isMorning(dateTime)) {
    return GoodMorningMessage;
  }
  if (isAfternoon(dateTime)) {
    return GoodAfternoonMessage;
  }
  if (isEvening(dateTime)) {
    return GoodEveningMessage;
  } else {
    return GoodNigthMessage;
  }
}
