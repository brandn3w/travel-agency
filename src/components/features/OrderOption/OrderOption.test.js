import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
    it('should render without crashing', () => {
        const component = shallow(<OrderOption name='Lorem ipsum' type='text' />);
        expect(component).toBeTruthy();
        console.log(component.debug());
    });

    it('should return empty object if called without required props', () => {
        const component = shallow(<OrderOption />);
        expect(component).toEqual({});
    });
    it(`should render correct name: ${props.name}`, () => {
        const component = shallow(
            <OrderOption {...props} />
        );
        expect(component.find('.title').text()).toEqual(props.name);
    });
});

const optionTypes = {
    dropdown: 'OrderOptionDropdown',
    icons: 'OrderOptionIcons',
    checkboxes: 'OrderOptionCheckboxes',
    number: 'OrderOptionNumber',
    text: 'OrderOptionText',
    date: 'OrderOptionDate',
};
const mockProps = {
    id: 'abc',
    name: 'Lorem',
    values: [
        { id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0 },
        { id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100 },
    ],
    required: false,
    currentValue: 'aaa',
    price: '50%',
    limits: {
        min: 0,
        max: 6,
    },
};

const mockPropsForType = {
    dropdown: {},
    icons: {},
    checkboxes: { currentValue: [mockProps.currentValue] },
    number: { currentValue: 1 },
    text: {},
    date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;
for (let type in optionTypes) {
    describe(`Component OrderOption with type=${type}`, () => {
        let component;
        let subcomponent;
        let renderedSubcomponent;
        let mockSetOrderOption; /* 1 */

        beforeEach(() => {
            mockSetOrderOption = jest.fn(); /* 2 */
            component = shallow(
                <OrderOption
                    type={type}
                    setOrderOption={mockSetOrderOption} /* 3 */
                    {...mockProps}
                    {...mockPropsForType[type]}
                />
            );
            subcomponent = component.find(optionTypes[type]);
            renderedSubcomponent = subcomponent.dive();
        });
        /* common tests */
        it('passes dummy test', () => {
            expect(1).toBe(1);
        });
        it(`renders ${optionTypes[type]}`, () => {
            expect(subcomponent).toBeTruthy();
            expect(subcomponent.length).toBe(1);
        });
        /* type-specific tests */
        switch (type) {
            case 'dropdown': {
                /* tests for dropdown */
                it('contains select and options', () => {
                    const select = renderedSubcomponent.find('select');
                    expect(select.length).toBe(1);

                    const emptyOption = select.find('option[value=""]').length;
                    expect(emptyOption).toBe(1);

                    const options = select.find('option').not('[value=""]');
                    expect(options.length).toBe(mockProps.values.length);
                    expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
                    expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
                });
                it('should run setOrderOption function on change', () => {
                    renderedSubcomponent.find('select').simulate(
                        'change', { currentTarget: { value: testValue } }
                    );
                    expect(mockSetOrderOption).toBeCalledTimes(1);
                    expect(mockSetOrderOption).toBeCalledWith(
                        { [mockProps.id]: testValue }
                    );
                });
                break;
            }
            case 'checkboxes': {
                it('contains ${mockProps.value.length} input type checkbox', () => {
                    const checkbox = renderedSubcomponent.find('input[type="checkbox"]').map(
                        (checkbox) => {
                            if (checkbox.prop('value') === testValue) {
                                checkbox.simulate('change', { currentTarget: { checked: true } });
                                expect(mockSetOrderOption).toBeCalledWith({
                                    [mockProps.id]: [mockprops.currentValue, testValue],
                                });
                            }
                        });
                    expect(mockSetOrderOption).toBeCalledTimes(1);

                });
                break;
            }
            case 'icons': {
                it(`contains ${mockProps.values.length} divs with class .icon`, () => {
                    const icons = renderedSubcomponent.find('.icon');
                    expect(icons.length).toBe(mockProps.values.length);
                });
                it('should run setOrderOption function on click', () => {
                    renderedSubcomponent.find('.icon').map((icon, key) => {
                        icon.simulate('click');
                        expect(mockSetOrderOption).toBeCalledWith({
                            [mockProps.id]: mockProps.values[key].id,
                        });
                    });
                    expect(mockSetOrderOption).toBeCalledTimes(mockProps.values.length);
                });
                break;
            }
            case 'number': {
                it('should render input type number', () => {
                    const number = renderedSubcomponent.find('input[type="number"]')
                    expect(number.length).toBe(1);
                });
                it('should run setOrderOption on change', () => {
                    renderedSubcomponent.find('input[type="number"]').simulate(
                        'change', { currentTarget: { value: testValueNumber } }
                    );
                    expect(mockSetOrderoption).toBeCalledTimes(1);
                    expect(mockSetOrderOption).toBeCalledWith(
                        { [mockProps.id]: testValueNumber }
                    );
                });
                break;
            }
            case 'text': {
                it('should render input type text', () => {
                    const text = renderedSubcomponent.find('input[type="text"]');
                    expect(number.lenth).toBe(1);
                });
                it('should run setOrderOption on change', () => {
                    renderedSubcomponent.find('input[type:"text').simulate(
                        'change', { currentTarget: { value: testValue } }
                    );
                    expect(mockSetOrderOption).teBeCalledTimes(1);
                    expect(mockSetOrderOption).toBeCaledWith(
                        { [mockProps.id]: testValue }
                    );
                });
                break;
            }
            case 'date': {
                it('should render datapicker', () => {
                    const datapisker = renderedSubcomponent.find(DatePicker);
                    expect(datepicker.length).toBe(1);
                });
                it('should run setOrderOption function on change', () => {
                    renderedSubcomponent.find(DatePicker).simulate(
                        'change', testValue
                    );
                    expect(mockSetOrderOption).toBeCalledWith(1);
                    expect(mockSetOrderOption).toBeCalledWith(
                        { [mockProps.id]: testValue }
                    );
                });
                break;
            }
        }
    });
}

