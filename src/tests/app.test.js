import React from 'react';
import {renderWithProviders} from './utils_for_tests';
import AppWrapper from '../../App';

describe('App Wrapper', () => {
  let component;
  beforeEach(() => {
    component = renderWithProviders(<AppWrapper />);
  });

  it('renders correctly initial App component', () => {
    expect(component).toBeTruthy();
  });
});
