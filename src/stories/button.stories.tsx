import { Meta, StoryFn } from '@storybook/react';
import { Button } from '../components';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      description: 'Цветовая тема',
    },
    size: {
      control: { type: 'radio' },
      options: [28, 36, 56],
      description: 'Размер кнопки',
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>
    <Button.Label text="Что сделать" />
    <Button.Counter />
    <Button.Loader />
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 36,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 36,
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  size: 28,
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  size: 56,
};
