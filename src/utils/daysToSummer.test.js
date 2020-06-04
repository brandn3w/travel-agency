import React from 'react';
import { shallow } from 'enzyme';
import daysToSummer from './daysToSummer';


const select = {
    title: '.title',
description:'.description',
days: '.days',
number: '.number'
}

const mockProps={
    title: '.title',
    description:'to summer!',

}

describe('Component daysToSummer', () => {
    it('should render without crashing', () => {
      const component = shallow(<daysToSummer />);
      expect(component).toBeTruthy();
    });

    it('renders title days, number and description', ()=>{
        const component = shallow(<daysToSummer {...mockProps} />);
        expect(component.exists(select.title)).toEqual(true);
        expect(component.exists(select.description)).toEqual(true);
        expect(component.exists(select.days)).toEqual(true);
        expect(component.exists(select.number)).toEqual(true);
    });
});

