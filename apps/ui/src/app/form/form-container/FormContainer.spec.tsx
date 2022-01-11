import { render } from '@testing-library/react';
import manageFeatureFormConfig from '../../manage-features-form.json';

import FormContainer from './FormContainer';

describe('FormContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <FormContainer {...manageFeatureFormConfig} />
    );
    expect(baseElement).toBeTruthy();
  });
});
