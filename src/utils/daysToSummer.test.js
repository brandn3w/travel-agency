import React from 'react';
import { shallow } from 'enzyme';
import daysToSummer from './daysToSummer';


const select = {
    title: '.title',
description:'.description'
}

const mockProps={
    title: '.title',
    description:'.description'
}

describe('Component daysToSummer', () => {
    it('should render without crashing', () => {
      const component = shallow(<daysToSummer />);
      expect(component).toBeTruthy();
    });

    it('renders title and description', ()=>{
        const component = shallow(<daysToSummer {...mockProps} />);
        expect(component.exists(select.title)).toEqual(true);
        expect(component.exists(select.description)).toEqual(true);
    });
});

