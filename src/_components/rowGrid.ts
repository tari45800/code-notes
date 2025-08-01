import { FieldType } from "./filed";

type GridRow = {
  label?: string;
  rowGrid: number[];
  fields: FieldType[];
};

type RowGridBuilder = {
  label: (text: string) => RowGridBuilder;
  one: (field: FieldType | FieldType[]) => GridRow;
  two: (
    a: FieldType | FieldType[],
    b: FieldType | FieldType[],
    grid?: number[]
  ) => GridRow;
  three: (
    a: FieldType | FieldType[],
    b: FieldType | FieldType[],
    c: FieldType | FieldType[],
    grid?: number[]
  ) => GridRow;
};

export const rowGrid: RowGridBuilder = (() => {
  const toArray = (f: FieldType | FieldType[]): FieldType[] =>
    Array.isArray(f) ? f : [f];

  const autoGrid = (fields: FieldType[], custom?: number[]) =>
    custom ?? new Array(fields.length).fill(1);

  const createBuilder = (labelText?: string): RowGridBuilder => ({
    label(text) {
      return createBuilder(text); // ⚠️ 새로운 인스턴스로 label 고정
    },

    one(field) {
      const arr = toArray(field).filter(Boolean);
      if (arr.length !== 1) throw new Error("one()은 필드 하나만 허용");
      return {
        label: labelText,
        rowGrid: [1],
        fields: arr,
      };
    },

    two(a, b, grid) {
      const arr = [...toArray(a), ...toArray(b)].filter(Boolean);
      if (arr.length !== 2) throw new Error("two()는 2개 필드 필요");
      return {
        label: labelText,
        rowGrid: autoGrid(arr, grid),
        fields: arr,
      };
    },

    three(a, b, c, grid) {
      const arr = [...toArray(a), ...toArray(b), ...toArray(c)].filter(Boolean);
      if (arr.length !== 3) throw new Error("three()는 3개 필드 필요");
      return {
        label: labelText,
        rowGrid: autoGrid(arr, grid),
        fields: arr,
      };
    },
  });

  return createBuilder(); // 기본 builder 반환
})();

export function gridMap(...rows: GridRow[]): GridRow[] {
  return rows;
}

export function get(list: FieldType | FieldType[], index: number): FieldType {
  if (Array.isArray(list) && list[index]) return list[index];

  // 기본 dummy 필드 반환
  return {
    id: `__invalid[${index}]`,
    label: "",
    inputType: "hidden",
  };
}
