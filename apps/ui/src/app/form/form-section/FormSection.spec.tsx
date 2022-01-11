import { render } from '@testing-library/react';
import * as stories from './FormSection.stories';
import FormSection from './FormSection';
import { composeStories } from '@storybook/testing-react';

const { SingleType, GroupedType } = composeStories(stories);

describe('FormSection', () => {
  it('should render successfully a single type form section', () => {
    const { baseElement } = render(<SingleType />);
    expect(baseElement).toBeTruthy();
  });
  it('should render successfully a grouped type form section', () => {
    const { baseElement } = render(<GroupedType />);
    expect(baseElement).toBeTruthy();
  });
});
