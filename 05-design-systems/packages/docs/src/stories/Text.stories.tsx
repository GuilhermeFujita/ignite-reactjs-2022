import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam amet maiores vero impedit dolorum cum vel et quae consequuntur neque sint, aliquid porro vitae molestias quod eaque ullam quidem. Accusantium.',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
};
