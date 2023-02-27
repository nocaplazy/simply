import { atom } from 'recoil';

export const DateState = atom({
  key: 'DateState',
  default: {
    currentDate: new Date(2022, 9, 21),
  },
});
