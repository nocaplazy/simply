import { useState } from 'react';
import { DateCarousel } from '@/components/dateCarousel';
import { Sceduels } from '@/components/sceduels';
import { SettingModal } from '@/components/modal/setting';
import { CafeteriaItem } from '@/components/cafeteria';
import styled from 'styled-components';
import { _OnlyIconBtn } from '@/components/common/Button';
import { A, Setting } from '@/assets';
import { _Text } from '@/components/common/Text';
import { quoteList } from '@/constants';
import { randomArray } from '@/utils/random';
import { useCafeteriasQuery } from '@/hooks/Query';
import { useRecoilValue } from 'recoil';
import { SchoolState } from '@/store/SchoolState';
import { ConversionDate, ConversionYMD } from '@/utils/date';
import { DateState } from '@/store/DateState';
import { ColumnGap } from '@/layouts/Flex';

export function HomePage() {
  const [settingModal, setSettingModal] = useState<boolean>(false);
  const { currentDate } = useRecoilValue(DateState);
  const {
    school: { ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE },
  } = useRecoilValue(SchoolState);

  const closeModal = () => setSettingModal(false);
  const openModal = () => setSettingModal(true);

  const YMD = ConversionYMD(ConversionDate(currentDate));

  const { data: cafeteriaList } = useCafeteriasQuery({
    YMD,
    ATPT_OFCDC_SC_CODE,
    SD_SCHUL_CODE,
  });

  return (
    <_Wrapper>
      <_Button onClick={() => setSettingModal(true)}>
        <Setting />
      </_Button>
      <DateCarousel />
      <_Text margin="20px 0">{randomArray(quoteList)}</_Text>
      <Content>
        <Sceduels />
        <ColumnGap gap="25px">
          {cafeteriaList &&
            cafeteriaList.map((cafeteria) => (
              <CafeteriaItem menuList={cafeteria} />
            ))}
        </ColumnGap>
      </Content>
      {settingModal && <SettingModal closeModal={closeModal} />}
    </_Wrapper>
  );
}

const _Button = styled(_OnlyIconBtn)`
  position: absolute;
  top: 60px;
  right: 270px;
`;

const _Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${A});
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 972px;
  margin: 0 auto;
`;
