import CreateBeerFormCheckbox from './CreateBeerFormCheckbox';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormCheckbox', () => {
    it('children should be properly orderly', () => {
        const label = "has corn";
        const wrapper = shallow(<CreateBeerFormCheckbox label={label} />);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.childAt(0).type()).toEqual('label');
        expect(wrapper.childAt(0).props().children).toHaveLength(2);
        expect(wrapper.childAt(0).props().children[1]).toEqual(label);
        expect(wrapper.childAt(0).props().children[0].type).toEqual('input');
    });
    it('testar a funcionalidade', () => {

    });
});