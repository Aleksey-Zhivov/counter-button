import { Meta, StoryFn } from '@storybook/react';
import { Counter } from '../components';

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    value: {
      control: { type: 'text' },
      description: 'Число или строка до 3 символов внутри счетчика',
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      description: 'Цветовая тема',
    },
    size: {
      control: { type: 'radio' },
      options: [8, 12, 16, 20, 24],
      description: 'Размер счетчика',
    },
  },
} as Meta<typeof Counter>;

const Template: StoryFn<typeof Counter> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '1',
  variant: 'primary',
  size: 24,
};

export const MaxIntValue = Template.bind({});
MaxIntValue.args = {
  value: 150,
  variant: 'secondary',
  size: 20,
};

export const SmallestSize = Template.bind({});
SmallestSize.args = {
  value: '',
  variant: 'primary',
  size: 8,
};
