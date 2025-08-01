export type StudentData = {
  name: string;
  birth: string;
  ssn: string;
  gender: string;
  addr: string;
  email: string;
  phone: string;
  subPhone: string;

  // 수료 정보
  course_status: string;
  remark: string;
  position: string;
  year: string;
  employment_status: string;

  // 경력 사항
  career: {
    work_place: string;
    work_period: string;
    position: string;
    duty: string;
    salary: string;
  }[];

  // 스펙
  license_list: string[];
  language: string[];
  computer_skill: {
    excel_skill: string;
    ppt_skill: string;
    word_skill: string;
  };
  etc_course: string[];
  award: string[];

  // 수료 후 희망 근무 조건
  hope_place: string[];
  hope_job: string;
  hope_salary: string;
  type: string;
  work_type: string[];
  duty_type: string[];
  work_time: string[];
  requests: string;

  // 취업 관리 사항
  industry: string;
  job_title: string;
  job_relevant: string;
  job_1st: string;
  job_2nd: string;
  job_3rd: string;
};
