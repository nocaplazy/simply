import instance from '@/apis';
import { GetCafeteriasResponseType } from './res';
import { CafeteriasReqeustType } from './req';

export const GetCafeterias = async ({
  YMD,
  ATPT_OFCDC_SC_CODE,
  SD_SCHUL_CODE,
}: CafeteriasReqeustType) => {
  const response = await instance.get<GetCafeteriasResponseType>(
    '/hub/mealServiceDietInfo',
    {
      params: {
        MLSV_YMD: YMD,
        ATPT_OFCDC_SC_CODE,
        SD_SCHUL_CODE,
      },
    }
  );
  return response.data.mealServiceDietInfo[1].row;
};
