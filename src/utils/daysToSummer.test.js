import React from 'react';
import { shallow } from 'enzyme';
import daysToSummer from './daysToSummer';

describe('Component daysToSummer', () => {
    it('should render without crashing', () => {
      const component = shallow(<daysToSummer />);
      expect(component).toBeTruthy();
    });
})