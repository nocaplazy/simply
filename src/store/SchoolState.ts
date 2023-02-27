import { atom } from 'recoil';
import { localStorgeGetItem } from '@/utils/storge';

interface SchoolStateType {
  gradeClass: {
    grade: string;
    class: string;
  };
  school: {
    ATPT_OFCDC_SC_CODE: string;
    SD_SCHUL_CODE: string;
    SCHUL_NM: string;
  };
}

export const SchoolState = atom<SchoolStateType>({
  key: 'SchoolState',
  default: {
    school: localStorgeGetItem('school'),
    gradeClass: localStorgeGetItem('gradeClass') || {
      grade: '1',
      class: '1',
    },
  },
});
