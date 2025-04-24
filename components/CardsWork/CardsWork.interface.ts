import { WorkItem, layoutModeType } from '../LastWorks/data';

export interface CardsWorkProps {
  worksList: WorkItem[];
  layoutMode: layoutModeType;
  visibleCards: number;
}
