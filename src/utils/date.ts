const days = ['일', '월', '화', '수', '목', '금', '토'];

/** 두개의 Date 객체를 받아 같으면 True 다르면 False를 리턴하는 함수 */
export const isSameDay = (D1: Date, D2: Date) =>
  D1.getFullYear() === D2.getFullYear() &&
  D1.getMonth() === D2.getMonth() &&
  D1.getDate() === D2.getDate();

export const ConversionDate = (currentDate: Date) => ({
  year: currentDate.getFullYear(),
  month: currentDate.getMonth() + 1,
  day: currentDate.getDate(),
  dayOfTheWeek: days[currentDate.getDay()],
  getDay: currentDate.getDay(),
});

export const IncreaseDate = (currentDate: Date, num: number) =>
  ConversionDate(
    new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + num
    )
  );

export const MondayDate = (currentDate: Date) => {
  const diff = currentDate.getDay() === 0 ? 1 : -(currentDate.getDay() - 1);
  return {
    mon: ConversionYMD(IncreaseDate(currentDate, diff)),
    fri: ConversionYMD(IncreaseDate(currentDate, diff + 4)),
  };
};

interface ConversionYMDType {
  year: number;
  month: number;
  day: number;
}

export const ConversionYMD = ({ year, month, day }: ConversionYMDType) =>
  `${year}${`00${month.toString()}`.slice(-2)}${`00${day.toString()}`.slice(
    -2
  )}`;
