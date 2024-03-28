export interface CInputTypes {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  type?: "text" | "password" | "number" | "email";
}
