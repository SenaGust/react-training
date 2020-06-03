import {shallow} from 'enzyme';
import React from 'react';
import {Formik} from 'formik';

import CreateBeerFormik from './CreateBeerFormik';

import FormikCombobox from '../formikCombobox/FormikCombobox';
import FormikCheckbox from '../formikCheckbox/FormikCheckbox';
import FormikInputText from '../formikInputText/FormikInputText';
import FormikTextArea from '../formikTextArea/FormikTextArea';

describe('function CreateBeerFormik', () => {
    const submit = { handleSubmit: jest.fn()}

    it('should show components properly', () => {
        const wrapper = shallow(<CreateBeerFormik />);
        expect(wrapper.type()).toBe(Formik);

        const form = wrapper.renderProp('children')(submit);
        expect(form.children()).toHaveLength(6);
        
        const h1Wrapper = form.childAt(0);
        expect(h1Wrapper.type()).toBe('h1');
        expect(h1Wrapper.text()).toBe('Beer form');

        const mocksFormik ={
            inputText: (<FormikInputText label="Beer name:" name="beerName"/>),
            comboBox: (<FormikCombobox label="Beer type:" elements={['Ale', 'Lager', 'Stout']} name="beerType"/>),
            checkBox: (<FormikCheckbox label="Has corn" name="hasCorn"/>),
            textArea: (<FormikTextArea label="Ingredients" name="ingredients"/>)
        };
        const inputWrapper = form.childAt(1);
        expect(inputWrapper.matchesElement(mocksFormik.inputText)).toBeTruthy();
        
        const comboBoxWrapper = form.childAt(2);
        expect(comboBoxWrapper.matchesElement(mocksFormik.comboBox)).toBeTruthy();
        
        const checkBoxWrapper = form.childAt(3);
        expect(checkBoxWrapper.matchesElement(mocksFormik.checkBox)).toBeTruthy();
        
        const textAreaWrapper = form.childAt(4);
        expect(textAreaWrapper.matchesElement(mocksFormik.textArea)).toBeTruthy();

        const buttonWrapper = form.childAt(5);
        expect(buttonWrapper.type()).toBe('button');        
    });
    it('should submit values', () => {
        const wrapper = shallow(<CreateBeerFormik />);
        const form = wrapper.renderProp('children')(submit);

        form.find('form').simulate('submit');
        

        console.log(form.find({name: 'beerName'}).getElements());
        expect(submit.handleSubmit).toHaveBeenCalledTimes(1);
    });
});