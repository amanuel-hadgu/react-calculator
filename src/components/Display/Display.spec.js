import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';
import toJSON from 'enzyme-to-json';

describe('Display', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Display displayValue={''} />));

    it('should render correctly', () => expect(toJSON(wrapper)).toMatchSnapshot());

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('renders the value of displayValue', () => {
        wrapper.setProps({ displayValue: 'test' });
        expect(wrapper.text()).toEqual('test');
    });
});