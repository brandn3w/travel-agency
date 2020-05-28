import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
    title: '.title',
    promoDescription: '.promoDescription',
  };

  const mockProps ={
    title: 'lorem ipsum',
    promoDescription:'sit amet'
  }
  
describe('Component HappyHourAd', () => {
    it('should render without crashing', () => {
        const component = shallow(<HappyHourAd />);
        expect(component).toBeTruthy();
    });


it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should render title and div from props', ()=>{
    const component=shallow(<HappyHourAd {...mockProps}/>);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
expect(component.find(select.promoDescription).text()).toEqual(mockProps.promoDescription);
  });  
});