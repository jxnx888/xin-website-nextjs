import { Icon } from '../Icon';
import { LinkProps } from './Link';

export const linkData: LinkProps = {
  href: '#',
  children: 'Link',
};

export const linkSmallData: LinkProps = {
  href: '#',
  children: 'Link',
  size: 'small',
};

export const linkIconLeftData: LinkProps = {
  href: '#',
  children: 'Link',
  iconLeft: <Icon name="globe" />,
};

export const linkIconRightData: LinkProps = {
  href: '#',
  children: 'Link',
  iconRight: <Icon name="chevronRight" variant="rounded" />,
};
