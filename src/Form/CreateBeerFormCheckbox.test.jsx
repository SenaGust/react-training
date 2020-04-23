import CreateBeerFormCheckbox from './CreateBeerFormCheckbox';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormCheckbox', () => {
    it('children should be properly orderly', () => {
        const label = "has corn";
        const wrapper = shallow(<CreateBeerFormCheckbox label={label} />);

        expect(wrapper.type()).toEqual('label');
        expect(wrapper.props().children).toHaveLength(2);
        expect(wrapper.props().children[0]).toEqual(label);
        expect(wrapper.props().children[1].type).toEqual('input');
    });
});