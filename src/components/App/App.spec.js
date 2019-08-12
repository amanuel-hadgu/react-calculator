import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from '../Calculator/Calculator';
import toJSON from 'enzyme-to-json';

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('should render correctl', () => expect(toJSON(wrapper)).toMatchSnapshot());

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the Calculator Component', () => {
        expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
    });
});