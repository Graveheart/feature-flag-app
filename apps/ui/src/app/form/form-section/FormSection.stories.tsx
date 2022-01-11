import { Story, Meta } from '@storybook/react';
import FormSection, { FormSectionProps } from './FormSection';
import { composeStories } from '@storybook/testing-react';
import manageFeatureFormConfig from '../../manage-features-form.json';
import { withRHF } from 'apps/ui/.storybook/withRHF';

export default {
  component: FormSection,
  title: 'FormSection'
} as Meta;

const Template: Story<FormSectionProps> = (args) => <FormSection {...args} />;
export const SingleType = Template.bind({});
SingleType.args = {
  ...manageFeatureFormConfig.sections[0]
};
SingleType.decorators = [withRHF(false)];

export const GroupedType = Template.bind({});
GroupedType.args = {
  ...manageFeatureFormConfig.sections[1]
};
GroupedType.decorators = [withRHF(false)];

export const BorderedType = Template.bind({});
BorderedType.args = {
  ...manageFeatureFormConfig.sections[2]
};
BorderedType.decorators = [withRHF(false)];
