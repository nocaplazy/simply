import { Row } from '@/apis/scedules/res';

const Scedules = {
  '수학Ⅰ': '수학',
  '영어Ⅰ': '영어',
  '* 빅데이터 분석 결과 시각화': '빅분',
  '빅데이터 분석': '빅분',
  '운영체제': '운체',
  '자바 프로그래밍': '자프',
  '운동과 건강': '운건',
  '성공적인 직업생활': '성직',
  '데이터베이스': '데베',
  '자율활동': '창체',
  '한국사': '역사',
  '여름방학': '방학',
  '봉사활동': '봉사',
  '진로활동': '진활',
  '토요휴업일': '토요',
  '* 데이터베이스 구현': '데베',
  '[보강]* 데이터베이스 구현': '데베',
  '* UI 디자인': 'UI',
  '컴퓨터 네트워크': '컴네',
};

function useScedules() {
  const Change = (ITRT_CNTNT: string): string => ITRT_CNTNT.substring(0, 2);

  const SliceScedules = (Scedules: Row[]) => {
    const copyScehdules = Scedules.slice();
    const scedulesArray: string[][] = [];
    for (let i = 0; i < 5; i += 1) {
      const temp: string[] = [];
      if (copyScehdules[0]) {
        const prevYMD = copyScehdules[0].ALL_TI_YMD;
        while (copyScehdules[0] && copyScehdules[0].ALL_TI_YMD === prevYMD) {
          temp.push(Change(copyScehdules[0].ITRT_CNTNT));
          copyScehdules.shift();
        }
      }
      scedulesArray.push(temp);
    }
    return scedulesArray;
  };

  return {
    SliceScedules,
  };
}

export default useScedules;
