// ==================================================
// 타입 정의 (form_types.ts 내용 통합)
// ==================================================



// 한 행의 그리드 타입
export type RowGridType = {
  row_grid: number[];
  row_content: LabelGridType[];
};

// 레이블과 컨텐츠 타입
export type LabelGridType = {
  label: string;
  required?: boolean;
  sub_lable?: string;
  content?: ContentGridType[];
};

// 컨텐츠의 그리드 타입
export type ContentGridType = {
  content_grid: number[];
  content_info: (InputSchema | InputSchema[])[];
  title?: boolean;
};

// 입력 필드 구성 타입
export type InputSchema = {
  id: string;
  type: InputType;
  label?: string;
  placeholder?: string;
  notice?: string;
  options?: { label: string; value: string | boolean }[];
  validationMessage?: string;
};

// 입력 필드 타입
export type InputType =
  | "text"
  | "textInput"
  | "labelInput"
  | "number"
  | "email"
  | "password"
  | "checkbox"
  | "radio"
  | "select"
  | "textarea"
  | "tel"
  | "url"
  | "date"
  | "datetime-local"
  | "time"
  | "month"
  | "week"
  | "color"
  | "file"
  | "range"
  | "hidden"
  | "career_history"
  | "cert_award_history";

// ==================================================
// 내부 상태 및 초기화
// ==================================================

let fieldMap: Record<string, InputSchema | InputSchema[]> = {};

type KeysOfArray<T> = {
  [K in keyof T]: T[K] extends unknown[] ? K : never;
}[keyof T];

type FieldId<T> =
  | Extract<keyof T, string>
  | `${Extract<KeysOfArray<T>, string>}[${number}]`;

type FieldMapType<T> = Record<
  string,
  { id: FieldId<T>; type: InputType } | { id: FieldId<T>; type: InputType }[]
>;

export function initFieldMap<T extends object>(map: FieldMapType<T>): void {
  fieldMap = map as Record<string, InputSchema | InputSchema[]>;
}

// ==================================================
// Row 생성기
// ==================================================

export const rowGrid = {
  one: (item1: LabelGridType): RowGridType => makeRow([1])(item1),
  two: (item1: LabelGridType, item2: LabelGridType): RowGridType =>
    makeRow([1, 1])(item1, item2),
  three: (
    item1: LabelGridType,
    item2: LabelGridType,
    item3: LabelGridType
  ): RowGridType => makeRow([1, 1, 1])(item1, item2, item3),
};

const makeRow =
  (grid: number[]) =>
  (...items: LabelGridType[]): RowGridType => ({
    row_grid: grid,
    row_content: items,
  });

// ==================================================
// Label 생성기
// ==================================================

export const labelGrid = {
  one: (str: string): LabelGridType => makeLabel([1])(str),
  two: (str: string): LabelGridType => makeLabel([1, 1])(str),
  three: (str: string): LabelGridType => makeLabel([1, 1, 1])(str),
};

const makeLabel = (contentGrid: number[]) => {
  return (labelText: string): LabelGridType => {
    const raw = fieldMap[labelText];
    const content_info = Array.isArray(raw) ? raw : raw ? [raw] : [];

    const content: ContentGridType[] = [
      {
        content_grid: contentGrid,
        content_info,
      },
    ];

    return {
      label: labelText,
      content,
    };
  };
};
