import React, { View, Text, StyleSheet } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Base from '../Base';

describe('<Base />', () => {
    it('it should render 1 view component', () => {
        const wrapper = shallow(<Base />);
        expect(wrapper.find(View)).to.have.length(1);
    });
});