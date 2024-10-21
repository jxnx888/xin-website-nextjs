import clsx from 'clsx';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

import { ImageSizes } from '@/utils/imageSizes';

export type ImageProps = Omit<NextImageProps, 'src'> & {
  src: string,
};

export function Image({
                        className,
                        sizes = ImageSizes.fullMobile,
                        ...rest
                      }: ImageProps) {
  const isSVG = rest.src.includes('.svg');

  return <NextImage
    {...rest}
    className={clsx(className, 'atomImage')}
    sizes={rest.width ? undefined : sizes}
    unoptimized={isSVG}
    // Fallback to fill if width or height is not provided
    fill={rest.fill || !rest.width || !rest.height}
    width={!rest.width || !rest.height ? undefined : rest.width}
    height={!rest.width || !rest.height ? undefined : rest.height}
    blurDataURL="URL"
    placeholder="blur"
  />;
}
