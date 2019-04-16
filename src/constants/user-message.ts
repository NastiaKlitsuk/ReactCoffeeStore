export interface UserMessage {
  message: string;
  imagePath?: string;
}

export const GoodMorningMessage: UserMessage = {
  message: 'GOOD MORNING',
  imagePath: './assets/sunrise.jpg'
};

export const GoodEveningMessage: UserMessage = {
  message: 'GOOD EVENING',
  imagePath: './assets/sunset.jpg'
};

export const GoodNigthMessage: UserMessage = {
  message: 'GOOD NIGTH',
  imagePath: './assets/moon.jpg'
};

export const GoodAfternoonMessage: UserMessage = {
  message: 'GOOD AFTERNOON',
  imagePath: './assets/sun.jpg'
};
