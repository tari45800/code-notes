// import {
//   initFieldMap,
//   labelGrid,
//   rowGrid,
// } from "@/_components/description_list/DescriptionList";

// import { rowGrid } from "@/_components/description_list/DescriptionList";
// import { rowGrid } from "@/_components/description_list/DescriptionList";
import { field, fieldMap } from "@/_components/filed";
import { get, gridMap, rowGrid } from "@/_components/rowGrid";
import { studentData } from "@/lib/studentData";
import { StudentData } from "@/types/studentDataType";

export default function Home() {
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
