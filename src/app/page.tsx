// import {
//   initFieldMap,
//   labelGrid,
//   rowGrid,
// } from "@/_components/description_list/DescriptionList";

// import { rowGrid } from "@/_components/description_list/DescriptionList";
// import { rowGrid } from "@/_components/description_list/DescriptionList";
import { field, fieldMap } from "@/_components/filed";
import { get, gridMap, rowGrid } from "@/_components/rowGrid";

export default function Home() {
  type StudentData = {
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

  const studentData = {
    name: "홍길동",
    birth: "2000-01-01",
    ssn: "000101-1234567",
    gender: "남",
    addr: "부산 서구 아미동2가 110-3번지",
    email: "test1234@gmail.com",
    phone: "010-1234-5678",
    subPhone: "010-9876-5432",

    // 수료 정보
    course_status: "수료",
    remark: "우수",
    position: "개발자",
    year: "2024",
    employment_status: "잘 적응중",

    // 경력 사항
    career: [
      {
        work_place: "",
        work_period: "",
        position: "",
        duty: "",
        salary: "",
      },
    ],

    // 스팩
    license_list: ["자격증1", "자격증2", "자격증3"],
    language: ["영어 상", "기타 외국어 싱"],
    computer_skill: {
      excel_skill: "엑셀 상",
      ppt_skill: "상",
      word_skill: "상",
    },
    etc_course: ["취득 예정 과정1", "취득 예정 과정2"],
    award: ["수상경력1", "수상경력2"],

    // 수료 후 희망 근무 조건
    hope_place: ["서울", "부산", "제주"],
    hope_job: "개발자",
    hope_salary: "30,000,000",
    type: "회사 내규",
    work_type: ["정규직", "계약직"],
    duty_type: ["주중", "격주 휴무"],
    work_time: ["주간"],
    requests: "출근시간 조정 가능하면 좋겠습니다.",

    // 취업 관리 사항
    industry: "개발자",
    job_title: "프론트엔드",
    job_relevant: "Y",
    job_1st: "네이버",
    job_2nd: "카카오",
    job_3rd: "쿠팡",
  };

  // 엑스트라 벨류는 여기서 만드는게 아니라
  // 커스텀 인풋에서 컴포넌트로 제작해야 한다 1. 2. 3.
  // 가령 특정 아이디를 가진 놈이면 1. 2. 3. || 엑셀, 파워포인트, 워드,
  const result1 = fieldMap<StudentData>(
    studentData,

    // 기본 정보
    field("name").label("이름").text(),
    field("birth").label("생년월일").date(),
    field("ssn").label("주민등록번호").text(),
    field("gender")
      .label("성별")
      .radio([
        { label: "남자", value: "남" },
        { label: "여자", value: "여" },
      ]),
    field("addr").label("주소").text(),
    field("email").label("이메일").text(),
    field("phone").label("전화번호").text(),
    field("subPhone").label("보조 연락처").text(),

    // 수료 정보
    field("course_status").label("수료 상태").text(),
    field("remark").label("비고").text(),
    field("position").label("희망직무").text(),
    field("year").label("연도").text(),
    field("employment_status").label("취업현황").text(),

    // 경력 사항
    field("career").label("경력사항").textInput(),

    // 스펙
    field("license_list").label("자격증").textInput(),
    field("language").label("외국어 능력").textInput(),
    field("computer_skill").text(),
    field("etc_course").label("기타 과정").textInput(),
    field("award").label("수상 경력").textInput(),

    // 수료 후 희망 근무 조건
    field("hope_place").label("희망 근무지").textInput(),
    field("hope_job").label("희망직무").text(),
    field("hope_salary").label("희망연봉").text(),
    field("type").label("급여형태").text(),
    field("work_type").label("고용형태").textInput(),
    field("duty_type").label("근무요일").textInput(),
    field("work_time").label("근무시간").textInput(),
    field("requests").label("기타요청사항").text(),

    // 취업 관리 사항
    field("industry").label("산업군").text(),
    field("job_title").label("직무").text(),
    field("job_relevant").label("직무관련성").text(),
    field("job_1st").label("1지망 기업").text(),
    field("job_2nd").label("2지망 기업").text(),
    field("job_3rd").label("3지망 기업").text()
  );

  const result2 = gridMap(
    rowGrid.label("기본정보").one(result1.name),
    rowGrid.two(result1.gender, result1.birth),
    rowGrid.two(result1.gender, result1.birth, [1, 2]),
    rowGrid.two(get(result1.license_list, 0), get(result1.license_list, 2))
  );

  console.log(result1);
  console.log(JSON.stringify(result2, null, 2));

  return <div>안녕 안녕 나는 지수야</div>;
}
