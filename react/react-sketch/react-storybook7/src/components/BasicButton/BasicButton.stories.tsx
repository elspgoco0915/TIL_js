import type { Meta, StoryObj } from '@storybook/react';
import { BasicButton } from './BasicButton';

const meta = {
  title: 'Button',
  component: BasicButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['contained', 'outlined'],
      control: { type: 'select' },
    },
  },

} satisfies Meta<typeof BasicButton>;

export default meta;
type Story = StoryObj<typeof meta>

export const Contained: Story = {
  args: {
    type: 'contained',
    color: 'primary',
    children: 'Test',
  },
};

export const Outlined: Story = {
  args: {
    type: 'outlined',
    color: 'danger',
    children: 'Test',
  },
};

