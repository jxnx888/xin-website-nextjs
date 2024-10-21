import { Meta, StoryObj } from '@storybook/react';
import { Icon, IconProps } from './Icon';
import { iconData } from './Icon.data';
import { ICONS } from './iconPaths';

export default {
  component: Icon,
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(ICONS),
    },
  },
  args: iconData,
} as Meta<IconProps>;

// Figma: Icons, Symbols & Logos > Icons
export const Default = {} as StoryObj<IconProps>;
export const Rounded = { args: { variant: 'rounded' } } as StoryObj<IconProps>;
