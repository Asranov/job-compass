export interface CButtonTypes {
  title: string;
  onClick: () => void;
  icon?: React.ReactNode;
  iconSize?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
}
