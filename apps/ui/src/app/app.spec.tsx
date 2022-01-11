import { render, screen } from '@testing-library/react';
import manageFeatureFormConfig from './manage-features-form.json';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should render multiple form sections', () => {
    const { getAllByRole } = render(<App />);
    console.log(manageFeatureFormConfig);
    expect(getAllByRole('heading')).toHaveLength(
      manageFeatureFormConfig.sections.length
    );
  });
});
