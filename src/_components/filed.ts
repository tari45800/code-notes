import { InputType, OptionType } from "./input";

type FieldConfig = {
  label?: string;
  inputType?: InputType;
};

type FieldResult<K extends string = string> = {
  __key: K;
  __config: FieldConfig;
};

type FieldBuilder<K extends string = string> = {
  label: (labelName: string) => FieldBuilder<K>;

  text: () => FieldResult<K>;
  textInput: () => FieldResult<K>;
  labelInput: () => FieldResult<K>;
  number: () => FieldResult<K>;
  email: () => FieldResult<K>;
  password: () => FieldResult<K>;
  textarea: () => FieldResult<K>;
  tel: () => FieldResult<K>;
  url: () => FieldResult<K>;
  date: () => FieldResult<K>;
  datetimeLocal: () => FieldResult<K>;
  time: () => FieldResult<K>;
  month: () => FieldResult<K>;
  week: () => FieldResult<K>;
  color: () => FieldResult<K>;
  file: () => FieldResult<K>;
  range: () => FieldResult<K>;
  hidden: () => FieldResult<K>;
  careerHistory: () => FieldResult<K>;
  certAwardHistory: () => FieldResult<K>;

  // 옵션 타입 함수
  radio: (...options: OptionType[]) => FieldResult<K>;
  select: (...options: OptionType[]) => FieldResult<K>;
  checkbox: (...options: OptionType[]) => FieldResult<K>;
};

export function field<K extends string>(fieldName: K): FieldBuilder<K> {
  const config: FieldConfig = {};

  const builder: FieldBuilder<K> = {
    label(labelName: string) {
      config.label = labelName;
      return builder;
    },

    text: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "text" },
    }),
    textInput: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "textInput" },
    }),
    labelInput: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "labelInput" },
    }),
    number: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "number" },
    }),
    email: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "email" },
    }),
    password: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "password" },
    }),
    textarea: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "textarea" },
    }),
    tel: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "tel" },
    }),
    url: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "url" },
    }),
    date: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "date" },
    }),
    datetimeLocal: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "datetime-local" },
    }),
    time: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "time" },
    }),
    month: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "month" },
    }),
    week: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "week" },
    }),
    color: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "color" },
    }),
    file: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "file" },
    }),
    range: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "range" },
    }),
    hidden: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "hidden" },
    }),
    careerHistory: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "career_history" },
    }),
    certAwardHistory: () => ({
      __key: fieldName,
      __config: { ...config, inputType: "cert_award_history" },
    }),

    radio: (...options: OptionType[]) => ({
      __key: fieldName,
      __config: { ...config, inputType: { type: "radio", options } },
    }),
    select: (...options: OptionType[]) => ({
      __key: fieldName,
      __config: { ...config, inputType: { type: "select", options } },
    }),
    checkbox: (...options: OptionType[]) => ({
      __key: fieldName,
      __config: { ...config, inputType: { type: "checkbox", options } },
    }),
  };

  return builder;
}

// 필드맵 타입과 함수는 그대로 사용하면 돼

type FieldMapResult = Record<string, FieldConfig | Record<string, FieldConfig>>;

export function fieldMap<T extends Record<string, unknown>>(
  data: T,
  ...fields: FieldResult<keyof T & string>[]
): FieldMapResult {
  return fields.reduce<FieldMapResult>((acc, field) => {
    const { __key, __config } = field;
    const value = data[__key];

    if (Array.isArray(value)) {
      const arrayItems = Object.fromEntries(
        value.map((_, i) => [`${__key}[${i}]`, { ...__config }])
      );
      acc[__key] = arrayItems;
    } else {
      acc[__key] = { ...__config };
    }

    return acc;
  }, {});
}
