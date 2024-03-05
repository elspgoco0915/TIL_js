import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: ['primary', 'default', 'danger'],
      control: { type: 'radio' },
    },
    size: {
      options: ['sm', 'base', 'lg'],
      control: { type: 'select' },
    },
    handleClick: {
      action: 'clicked',
    },
  },
  parameters: { actions: { argTypesRegex: '^handle[A-Z].*' } },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
    size: 'sm',
  },
};

// export const Danger: Story = {
//   args: {
//     children: 'Danger',
//     color: 'danger',
//     size: 'lg',
//   },
// };

// // render関数を利用して記述する場合
// export const PrimarySmall: Story = {
//   render: () => (
//     <Button color="primary" size="sm">
//       Primary
//     </Button>
//   ),
// };

// export const PrimaryLarge: Story = {
//   render: () => (
//     <Button color="primary" size="lg">
//       Primary
//     </Button>
//   ),
// };

// Args の再利用
export const PrimarySmall: Story = {
  args: {
    ...Primary.args,
    size: 'sm',
  },
};

export const PrimaryLarge: Story = {
  args: {
    ...Primary.args,
    size: 'lg',
  },
};


// Args + render 関数
export const Danger: Story = {
  render: (args) => <Button {...args}>{args.children}</Button>,
  args: {
    children: 'Danger',
    color: 'danger',
    handleClick: () => alert('click'),
  },
};

