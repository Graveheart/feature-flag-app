import { Grid } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import FormSection from '../form-section/FormSection';
import { Form } from '../form.types';

export type FormContainerProps = Form;

function FormContainer(props: FormContainerProps) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {props.sections.map((section) => (
          <FormSection {...section}></FormSection>
        ))}
      </Grid>
    </FormProvider>
  );
}

export default FormContainer;
