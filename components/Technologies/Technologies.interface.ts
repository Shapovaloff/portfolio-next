export interface TechItem {
  nameSvg?: string;
  nameSrc?: string;
  ext?: 'svg' | 'png' | 'webp';
  text: string;
}

export interface TechBlock {
  title: string;
  nameBlock: string;
  techList: TechItem[];
}
