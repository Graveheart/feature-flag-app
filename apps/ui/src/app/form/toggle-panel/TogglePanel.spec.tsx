import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './TogglePanel.stories';

const { TogglePanelPrimary } = composeStories(stories);

describe('TogglePanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TogglePanelPrimary />);
    expect(baseElement).toBeTruthy();
  });
});

describe('TogglePanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TogglePanelPrimary />);
    expect(baseElement).toBeTruthy();
  });
});
