import CreateBeerForm from './CreateBeerForm';
import { shallow } from 'enzyme';
import React from 'react';
import CreateBeerFormCombobox from './Form/CreateBeerFormCombobox';
import CreateBeerFormCheckbox from './Form/CreateBeerFormCheckbox';
import CreateBeerFormInputText from './Form/CreateBeerFormInputText';
import CreateBeerFormTextArea from './Form/CreateBeerFormTextArea';

describe('function CreateBeerForm', () => {
    it('children should be properly orderly', () => {
        const wrapper = shallow(<CreateBeerForm />);

        expect(wrapper.type()).toEqual('form');
        expect(wrapper.children().length).toBe(6);
        expect(wrapper.childAt(0).type()).toEqual('h1');
        expect(wrapper.childAt(1).type()).toEqual(CreateBeerFormInputText);
        expect(wrapper.childAt(2).type()).toEqual(CreateBeerFormCombobox);
        expect(wrapper.childAt(3).type()).toEqual(CreateBeerFormCheckbox);
        expect(wrapper.childAt(4).type()).toEqual(CreateBeerFormTextArea);
        expect(wrapper.childAt(5).type()).toEqual('button');
    });
    it('testar a funcionalidade', () => {
        
    });
});