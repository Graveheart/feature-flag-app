import { action } from '@storybook/addon-actions';
import { VFC, ReactNode, FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const StorybookFormProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(action('Form submitted'))}>
        {children}
      </form>
    </FormProvider>
  );
};

export const withRHF = (showSubmitButton: boolean) => (Story: FC) =>
  (
    <StorybookFormProvider>
      <Story />
      {showSubmitButton && <button type="submit">Submit</button>}
    </StorybookFormProvider>
  );
