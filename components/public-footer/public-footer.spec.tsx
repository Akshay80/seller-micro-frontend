import { render } from '@testing-library/react';

import PublicFooter from './public-footer';

describe('PublicFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PublicFooter />);
    expect(baseElement).toBeTruthy();
  });
});
