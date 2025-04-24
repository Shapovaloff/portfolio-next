export interface Option {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  options: Option[];
  defaultLabel: string;
  onSelect: (value: string) => void;
}
