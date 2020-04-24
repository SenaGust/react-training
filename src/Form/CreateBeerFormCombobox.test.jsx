import CreateBeerFormCombobox from './CreateBeerFormCombobox';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormCombobox', () => {
    it('children should be properly orderly', () => {
        const label = "Beer type:"
        const wrapper = shallow(<CreateBeerFormCombobox label={label} elements={['ola', 'bem']} />);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.childAt(0).children().length).toBe(2);
        expect(wrapper.childAt(0).type()).toEqual('label');
        expect(wrapper.childAt(0).props().children[0]).toEqual(label);
        
        const select = wrapper.childAt(0).props().children[1];
        expect(select.type).toEqual('select');
        expect(select.props.children).toHaveLength(2);
        expect(select.props.children[0].type).toEqual('option');
        expect(select.props.children[0].key).toEqual('ola');
        expect(select.props.children[1].type).toEqual('option');
        expect(select.props.children[1].key).toEqual('bem');
    });
    it('testar a funcionalidade', () => {

    });
});