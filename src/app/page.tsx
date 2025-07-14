import {
  initFieldMap,
  labelGrid,
  rowGrid,
} from "@/_components/description_list/DescriptionList";

export default function Home() {
  // const data: MyData = {
  //   name: "이제윤",
  //   birthDate: "2024-01-01",
  //   desiredLocations: ["서울", "부산", "머구"],
  //   desiredField: "프론트엔드",
  // };
  interface MyData {
    name: string;
    birthDate: string;
    desiredLocations: string[];
    desiredField: string;
  }

  initFieldMap<MyData>({
    성명: { id: "name", type: "text" },
    생년월일: { id: "birthDate", type: "text" },
    희망지역: [
      { id: "desiredLocations[0]", type: "textInput" },
      { id: "desiredLocations[1]", type: "textInput" },
      { id: "desiredLocations[2]", type: "textInput" },
    ],
    희망취업분야: { id: "desiredField", type: "textInput" },
  });

  const field1 = [
    rowGrid.three(
      labelGrid.one("성명"),
      labelGrid.one("생년월일"),
      labelGrid.three("희망지역")
    ),
  ];

  console.log(field1);

  return <div>안녕 안녕 나는 지수야</div>;
}
