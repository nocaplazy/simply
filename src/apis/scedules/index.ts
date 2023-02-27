import instance from '..';
import { GetScedulesParameterType } from './req';
import { GetScedulesResponseType } from './res';

export const getScedules = async ({
  mon,
  fri,
  ATPT_OFCDC_SC_CODE,
  SD_SCHUL_CODE,
  GRADE,
  CLASS,
}: GetScedulesParameterType) => {
  const response = await instance.get<GetScedulesResponseType>(
    '/hub/hisTimetable',
    {
      params: {
        GRADE,
        CLASS_NM: CLASS,
        TI_FROM_YMD: mon,
        TI_TO_YMD: fri,
        ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE,
      },
    }
  );
  return response.data.hisTimetable[1].row;
};
