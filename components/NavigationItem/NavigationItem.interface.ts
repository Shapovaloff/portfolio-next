import { NavigationProps } from '../Navigation/Navigation.interface';

export interface NavigationItemProps extends NavigationProps {
  id: string;
  name: string;
  text: string;
}
