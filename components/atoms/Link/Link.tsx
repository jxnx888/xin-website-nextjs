import React, {
  ComponentPropsWithoutRef,
  ForwardedRef,
  HTMLAttributeAnchorTarget,
  ReactElement,
} from 'react';
import clsx, { ClassValue } from 'clsx';
import NextLink from 'next/link';
import { formatHrefWithAnchor } from '@/utils/hrefDetector';

import styles from './Link.module.scss';

export type LinkProps = {
  href: string;
  classNames?: { [key: string]: ClassValue };
  focus?: 'outer' | 'inner';
  iconLeft?: ReactElement;
  iconRight?: ReactElement;
  anchor?: string;
  size?: 'default' | 'small';
  variant?: 'default' | 'unstyled';
  target?: HTMLAttributeAnchorTarget;
} & ComponentPropsWithoutRef<'a'>;

function Inner({
                 children,
                 classNames,
                 iconLeft,
                 iconRight,
                 variant,
               }: Pick<LinkProps, 'classNames' | 'iconLeft' | 'iconRight' | 'children' | 'variant'>) {
  return (
    <span className={clsx({[styles.inner]: variant !== 'unstyled'}, classNames?.inner, 'atomLinkInner')}>
      {iconLeft && <span className={clsx(styles.iconLeft, 'atomLinkIconLeft')}>{iconLeft}</span>}
      <span className={clsx(styles.textWrapper)}>
        <span className={clsx(styles.text, classNames?.text, 'atomLinkText')}>{children}</span>
      </span>
      {iconRight && <span className={clsx('atomLinkIconRight')}>{iconRight}</span>}
    </span>
  );
}

export const Link = ({
                       children,
                       className,
                       classNames,
                       focus = 'outer',
                       iconLeft,
                       iconRight,
                       size = 'default',
                       variant = 'default',
                       href,
                       type,
                       anchor,
                       target,
                       ...rest
                     }: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const hrefWithAnchor = formatHrefWithAnchor(href || '', anchor);
  const classes = clsx(
    variant !== 'unstyled',
    {[styles.link]: variant !== 'unstyled'},
    {[styles.link__isSmall]: size === 'small'},
    {[styles.link__isFocusInner]: focus === 'inner'},
    {atomLink: !!href},
    {atomButton: !href},
    className,
  );

  if (href.startsWith('/')) {
    return (
      <NextLink
        {...(rest)}
        href={hrefWithAnchor}
        className={classes}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        <Inner {...{classNames, iconLeft, iconRight, children, variant}} />
      </NextLink>
    );
  }

  return (
    <a
      {...rest}
      href={href}
      className={classes}
      ref={ref as ForwardedRef<HTMLAnchorElement>}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      <Inner {...{classNames, iconLeft, iconRight, children, variant}} />
    </a>
  );
};
