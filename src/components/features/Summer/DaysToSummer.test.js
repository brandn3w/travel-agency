import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';


const select = {
    title: '.title',
    description: '.description',
    days: '.days',
    number: '.number'
}

const mockProps = {
    description: 'to summer!',

}

describe('Component daysToSummer', () => {
    it('should render without crashing', () => {
        const component = shallow(<daysToSummer />);
        expect(component).toBeTruthy();
    });

    it('renders title days, number and description', () => {
        const component = shallow(<daysToSummer {...mockProps} />);
        expect(component.exists(select.title)).toEqual(true);
        expect(component.exists(select.description)).toEqual(true);
        expect(component.exists(select.days)).toEqual(true);
        expect(component.exists(select.number)).toEqual(true);
    });

    it('should render description correctly', () => {
        const component = shallow(<daysToSummer {...mockProps} />);
        expect(component.exists(select.description).text().toEqual('' + mockProps.description);
    });
});

const trueDate = Date;
const mockdate = customDate = > class extends Date {
    constructor(...args) {
        if (args.length) {
            super(...args);
        } else {
            super(customDate);
        }
        return this;
    }
    static now() {
        return (newdate(customDate)).getTime();
    }
};
const checkIsrenderNull = (testDate) => {
    it('should return null', () => {
        global.Date = mockDate(`${testDate}`);
        const component = shallow(<DaysToSummer {...mockProps} />);
        expect(component.exists('.component')).toEqual(false);
        global.Date = trueDate;
    })
}

