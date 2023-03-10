export interface GetScedulesResponseType {
  hisTimetable: HisTimetable[];
}

export interface HisTimetable {
  head?: Head[];
  row?: Row[];
}

export interface Head {
  list_total_count?: number;
  RESULT?: Result;
}

export interface Result {
  CODE: string;
  MESSAGE: string;
}

export interface Row {
  ATPT_OFCDC_SC_CODE: string;
  ATPT_OFCDC_SC_NM: string;
  SD_SCHUL_CODE: string;
  SCHUL_NM: string;
  AY: string;
  SEM: string;
  ALL_TI_YMD: string;
  DGHT_CRSE_SC_NM: string;
  ORD_SC_NM: string;
  DDDEP_NM: string;
  GRADE: string;
  CLRM_NM: string;
  CLASS_NM: string;
  PERIO: string;
  ITRT_CNTNT: string;
  LOAD_DTM: string;
}
