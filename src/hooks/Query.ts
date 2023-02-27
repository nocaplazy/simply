import { GetCafeterias } from '@/apis/cafeterias';
import { getScedules } from '@/apis/scedules';
import { getSchool } from '@/apis/school';
import { useQuery } from '@tanstack/react-query';
import { CafeteriasReqeustType } from '@/apis/cafeterias/req';
import { GetScedulesParameterType } from '@/apis/scedules/req';

export const useCafeteriasQuery = ({
  YMD,
  ATPT_OFCDC_SC_CODE,
  SD_SCHUL_CODE,
}: CafeteriasReqeustType) =>
  useQuery(['qwdq'], () =>
    GetCafeterias({ YMD, ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE })
  );

export const useScedulesQuery = ({
  mon,
  fri,
  ATPT_OFCDC_SC_CODE,
  SD_SCHUL_CODE,
  GRADE,
  CLASS,
}: GetScedulesParameterType) =>
  useQuery(['Scedules', mon], () =>
    getScedules({ mon, fri, ATPT_OFCDC_SC_CODE, SD_SCHUL_CODE, GRADE, CLASS })
  );

export const useSchoolQuery = (schoolName: string) =>
  useQuery(['wdqdw', schoolName], () => getSchool(schoolName));
