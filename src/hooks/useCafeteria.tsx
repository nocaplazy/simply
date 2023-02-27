// import { DinnerSvg, BreakfastSvg, LunchSvg } from '../assets';

export const useCafeteria = () => {
  const AllergyList = JSON.parse(localStorage.getItem('MyAllergyList'));

  const SplitAllergy = (meal: string) => {
    if (meal.split('(')[1] && AllergyList) {
      const a = meal.split('(')[1].split('.');
      for (let i = 0; i < a.length; i += 1) {
        for (let j = 0; j < AllergyList.length; j += 1) {
          if (AllergyList[+a[i] - 1]) return true;
        }
      }
    }
    return false;
  };

  return {
    // ImgCurrnet,
    SplitAllergy,
  };
};
