import clsx, { ClassValue } from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

// import { ThemeProp } from '../../partials/Theme';

import styles from './Icon.module.css';
import { ICONS } from './iconPaths';

type ThemeProp = {};

export type IconProps = ComponentPropsWithoutRef<'svg'> & {
  className?: ClassValue;
  /* Optional color override for the icon */
  color?: ThemeProp;

  /** Icon name */
  name: keyof typeof ICONS;

  /** How large should the icon be? */
  size?: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  variant?: 'default' | 'rounded';
};

export function Icon({
                       className,
                       color,
                       name,
                       size,
                       variant = 'default',
                       ...rest
                     }: IconProps) {
  return (
    <span
      className={clsx(
        styles.icon,
        styles[`icon__${name}`],
        { [styles.icon__isExtraExtraExtraSmall]: size === 'xxxs' },
        { [styles.icon__isExtraExtraSmall]: size === 'xxs' },
        { [styles.icon__isExtraSmall]: size === 'xs' },
        { [styles.icon__isSmall]: size === 'sm' },
        { [styles.icon__isMedium]: size === 'md' },
        { [styles.icon__isLarge]: size === 'lg' },
        { [styles.icon__isExtraLarge]: size === 'xl' },
        { [styles.icon__isRounded]: variant === 'rounded' },
        { [styles[`icon__${color as string}`]]: !!color },
        className,
        'atomIcon',
      )}
    >
      <svg
        aria-hidden={!rest['aria-label'] || undefined}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path d={ICONS[name]} />
      </svg>
    </span>
  );
}
