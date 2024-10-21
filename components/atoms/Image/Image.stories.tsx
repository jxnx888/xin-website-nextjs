import { Meta, StoryObj } from '@storybook/react';
import { Image, ImageProps } from './Image';
import { imageData } from './Image.data';

export default {
  component: Image,
  args: imageData,
} as Meta<ImageProps>;

// Figma: Imagery
export const Default = {} as StoryObj<ImageProps>;
