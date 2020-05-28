import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';



describe('Component HappyHourAd', () => {
    it('should render without crashing', () => {
        const component = shallow(<HappyHourAd />);
        expect(component).toBeTruthy();
    });
});

describe('Should render header and div correctly', () => {
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.countdown)).toEqual(true);
});
