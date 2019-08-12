import React from 'react';
import { shallow } from 'enzyme';
import Key from './Key';
import toJSON from 'enzyme-to-json';

describe('Key', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <Key
                keyAction={jest.fn()}
                keyType={''}
                keyValue={''}
            />
        );
    });

    it('should render correctly', () => expect(toJSON(wrapper)).toMatchSnapshot());

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the value of keyvalue', () => {
        wrapper.setProps({ keyValue: 'test' });
        expect(wrapper.text()).toEqual('test');
    });
});