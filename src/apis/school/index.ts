import instance from '..';
import { GetSchoolResponseType } from './res';

export const getSchool = async (schoolName: string) => {
  const { data } = await instance.get<GetSchoolResponseType>(
    '/hub/schoolInfo',
    {
      params: { SCHUL_NM: schoolName, pSize: 5 },
    }
  );
  return data.schoolInfo[1].row;
};
