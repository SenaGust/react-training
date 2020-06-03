import CreateBeerForm from './CreateBeerForm';
import { shallow } from 'enzyme';
import React from 'react';
import CreateBeerFormCombobox from '../formCombobox/CreateBeerFormCombobox';
import CreateBeerFormCheckbox from '../formCheckbox/CreateBeerFormCheckbox';
import CreateBeerFormInputText from '../formInputText/CreateBeerFormInputText';
import CreateBeerFormTextArea from '../formTextArea/CreateBeerFormTextArea';

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
    it(' the values on the form should be written on the console', () => {
        console.log = jest.fn();
        const wrapper = shallow(<CreateBeerForm />);

        wrapper.find('form').simulate('submit', {
			preventDefault: jest.fn()
        });
        
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('', '', 'Ale', false);
    });
});