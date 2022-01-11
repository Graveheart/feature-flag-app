import { Story, Meta } from '@storybook/react';
import { FormProvider, useForm } from 'react-hook-form';
import TogglePanel, { TogglePanelProps } from './TogglePanel';
import { withRHF } from 'apps/ui/.storybook/withRHF';

export default {
  component: TogglePanel,
  title: 'TogglePanel'
} as Meta;

const Template: Story<TogglePanelProps> = (args) => <TogglePanel {...args} />;

const TogglePanelPrimary = Template.bind({});
TogglePanelPrimary.args = { label: 'Toggle me', id: 'toggle' };
TogglePanelPrimary.decorators = [withRHF(false)];

const TogglePanelWithChildren = Template.bind({});
TogglePanelWithChildren.args = {
  label: 'Toggle me',
  id: 'toggle',
  childToggles: [
    { label: 'Child 1', id: 'toggle.child1' },
    { label: 'Child 2', id: 'toggle.child2' }
  ]
};

TogglePanelWithChildren.decorators = [withRHF(false)];

const TogglePanelWithDropdown = Template.bind({});
TogglePanelWithDropdown.args = {
  label: 'Select value',
  id: 'dropdown',
  hasDropdown: true
};
TogglePanelWithDropdown.decorators = [withRHF(false)];
export { TogglePanelPrimary, TogglePanelWithChildren, TogglePanelWithDropdown };
