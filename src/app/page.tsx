// import {
//   initFieldMap,
//   labelGrid,
//   rowGrid,
// } from "@/_components/description_list/DescriptionList";

import { field, fieldMap } from "@/_components/filed";

export default function Home() {
  type StudentData = {
    name: string;
    birthDate: string;
    certification: string[];
    courses: string[];
    gender: string;
  };

  const studentData = {
    name: "철수",
    birthDate: "2000-01-01",
    certification: ["cert1", "cert2"],
    courses: ["course1", "course2"],
    gender: "M",
  };

  const result = fieldMap<StudentData>(
    studentData,
    field("name").label("이름").text(),
    field("birthDate").label("생년월일").date(),
    field("certification").label("cert_award_history").textInput(),
    field("courses").label("수강 과정").textInput(),
    field("gender").radio(
      { label: "남자", value: "M" },
      { label: "여자", value: "F" }
    )
  );

  console.log(result);
  return <div>안녕 안녕 나는 지수야</div>;
}
