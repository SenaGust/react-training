import CreateBeerFormCombobox from './CreateBeerFormCombobox';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormCombobox', () => {
    it('children should be properly orderly', () => {
        const wrapper = shallow(<CreateBeerFormCombobox elements={['ola', 'bem']} />);

        expect(wrapper.type()).toEqual('label');
        expect(wrapper.children().length).toBe(1);
        expect(wrapper.childAt(0).type()).toEqual('select');
    });
});