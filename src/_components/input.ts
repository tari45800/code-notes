export type OptionType = {
  label: string;
  value: string | number;
};

type InputTypeBasic =
  | "text"
  | "textInput"
  | "labelInput"
  | "number"
  | "email"
  | "password"
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

type InputTypeWithOptions = {
  type: "radio" | "select" | "checkbox";
  options: OptionType[];
};

export type InputType = InputTypeBasic | InputTypeWithOptions;
