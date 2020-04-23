import CreateBeerFormInputText from './CreateBeerFormInputText';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormInputText', () => {
    it('children should be properly orderly', () => {
        const label = "name";
        const wrapper = shallow(<CreateBeerFormInputText label={label} />);

        expect(wrapper.type()).toEqual('label');
        expect(wrapper.props().children).toHaveLength(2);
        expect(wrapper.props().children[0]).toEqual('name');
        expect(wrapper.props().children[1].type).toEqual('input');
    });
});