import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
    it('should generate correct url', () => {
        const id = 'abc'
        const component = shallow(<TripSummary id={id} />);
        const renderedUrl = component.find('.link').prop('to');
        expect(renderedUrl).toEqual(`/trip/${id}`);
       // console.log(component.debug());
    });

    it('should get <img> to have correct src and alt', () => {
       const expectedImage ='image.jpg'
       const expectedAlt = 'alt'
       const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} />)

       expect(component.find('img').prop('src')).toEqual(expectedImage);
       expect(component.find('img').prop('alt')).toEqual(expectedAlt);
      // console.log(component.debug());
     });
it('should render name, cost and days correctly', () => {
    const expectedName = 'Barcelona';
    const expectedCost = '500';
    const expectedDays = 3;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />)

    expect(component).toBeTruthy();
    //console.log(component.debug());
});



it('should render tags correctly', () => {
    const expectedArray = ['lorem', 'impsum', 'dolor']
    const component = shallow(<TripSummary tags={expectedArray} />);

    expect(component.find('.tags span').at(0).text()).toEqual(expectedArray[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(expectedArray[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(expectedArray[2]);
    //console.log(component.debug());
  });

  it('does not render div if tags array is empty or not given', () => {
    const expectedTags = [];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tags')).toEqual({});
   // console.log(component.debug());
  });

});