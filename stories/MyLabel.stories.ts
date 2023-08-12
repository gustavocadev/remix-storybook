import type { Meta, StoryObj } from '@storybook/react';
import MyLabel from '../app/components/MyLabel';

const meta = {
  title: 'Example/MyLabel',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
    },
  },
} satisfies Meta<typeof MyLabel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic Label',
  },
};

export const AllCaps: Story = {
  args: {
    label: 'All Caps',
    allCaps: false,
    size: 'normal',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Label',
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Label',
  },
};
