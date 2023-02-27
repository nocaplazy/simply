import { Arrow } from '@/assets';
import { DateState } from '@/store/DateState';
import { ConversionDate } from '@/utils/date';
import { useRecoilState } from 'recoil';
import { _OnlyIconBtn } from '../common/Button';
import { RowColumnCenterGap } from '@/layouts/Flex';
import { DateCarouselDate } from './Date';

export const DateCarousel = () => {
  const [dateState, setDateState] = useRecoilState(DateState);
  const { year, month, day } = ConversionDate(dateState.currentDate);
  const ChangeDateHandler = (num: number) =>
    setDateState({
      ...dateState,
      currentDate: new Date(year, month - 1, day + num),
    });
  return (
    <RowColumnCenterGap gap="16px">
      <_OnlyIconBtn onClick={() => ChangeDateHandler(-1)}>
        <Arrow direction="left" />
      </_OnlyIconBtn>
      <DateCarouselDate />
      <_OnlyIconBtn onClick={() => ChangeDateHandler(1)}>
        <Arrow direction="right" />
      </_OnlyIconBtn>
    </RowColumnCenterGap>
  );
};
