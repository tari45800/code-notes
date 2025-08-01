import { studentFieldData, studentGridData } from "@/lib/tmpFieldGridData";

export default function Home() {
  console.log(studentFieldData);
  console.log(JSON.stringify(studentGridData, null, 2));

  return <div>안녕 안녕 나는 지수야</div>;
}
