export interface TechItem {
  nameSvg?: string;
  nameSrc?: string;
  text: string;
}

export interface TechBlock {
  title: string;
  nameBlock: string;
  techList: TechItem[];
}
