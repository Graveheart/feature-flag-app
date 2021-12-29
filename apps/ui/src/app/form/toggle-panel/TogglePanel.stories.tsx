import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import TogglePanel, { TogglePanelProps } from './TogglePanel';

export default {
  component: TogglePanel,
  title: 'TogglePanel',
} as Meta;

const Template: Story<TogglePanelProps> = (args) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <TogglePanel {...args} />
    </FormProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = { label: 'Toggle me', id: 'toggle' };
export const WithChildren = Template.bind({});
WithChildren.args = {
  label: 'Toggle me',
  id: 'toggle',
  childToggles: [
    { label: 'Child 1', id: 'toggle.child1' },
    { label: 'Child 2', id: 'toggle.child2' },
  ],
};
