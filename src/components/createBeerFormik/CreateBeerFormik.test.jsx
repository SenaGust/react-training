import {shallow} from 'enzyme';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Button} from '@material-ui/core';

import CreateBeerFormik from './CreateBeerFormik';

import FormikCombobox from '../formikCombobox/FormikCombobox';
import FormikCheckbox from '../formikCheckbox/FormikCheckbox';
import FormikInputText from '../formikInputText/FormikInputText';
import FormikTextArea from '../formikTextArea/FormikTextArea';

describe('function CreateBeerFormik', () => {
    const validationSchemaMock = Yup.object().shape({
        beerName: Yup.string().required(),
        beerType: Yup.string().required(),
        ingredients: Yup.string().required()
    });

    it('should show components properly', () => {
        const formikPropsMock = { 
            values: {
                beerName: '',
                beerTyps: '',
                ingredients: '',
                hasCorn: false
            },
            handleSubmit: jest.fn()
        };
        const wrapper = shallow(<CreateBeerFormik />);
        expect(wrapper.type()).toBe(Formik);

        const form = wrapper.renderProp('children')(formikPropsMock);
        expect(form.children()).toHaveLength(6);
        
        const h1Wrapper = form.childAt(0);
        expect(h1Wrapper.type()).toBe('h1');
        expect(h1Wrapper.text()).toBe('Beer form');

        const mocksFormik ={
            inputText:  (<FormikInputText label="Beer name:" name="beerName"/>),
            comboBox:   (<FormikCombobox label="Beer type:" elements={['','Ale', 'Lager', 'Stout']} name="beerType"/>),
            checkBox:   (<FormikCheckbox label="Has corn" name="hasCorn"/>),
            textArea:   (<FormikTextArea label="Ingredients" name="ingredients"/>),
            Button:     (<Button type="submit" variant="contained" color="primary">Submit</Button>)
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
        expect(buttonWrapper.matchesElement(mocksFormik.Button)).toBeTruthy();        
    });
    it('should submit values', () => {
        const wrapper = shallow(<CreateBeerFormik />);
        const formikPropsMock = { 
            values: {
                beerName: 'Corona',
                beerTyps: 'Ale',
                ingredients: 'Alcool',
                hasCorn: false
            },
            validationSchema: validationSchemaMock,
            handleSubmit: jest.fn()
        };
        const form = wrapper.renderProp('children')(formikPropsMock);

        form.find('form').simulate('submit', formikPropsMock.values);

        expect(formikPropsMock.handleSubmit).toHaveBeenCalledTimes(1);
        expect(formikPropsMock.handleSubmit).toHaveBeenCalledWith(formikPropsMock.values);
    });
    it("button shouldn't disabled", () => {
        const wrapper = shallow(<CreateBeerFormik />);
        const formikPropsMock = { 
            values: {
                beerName: 'iuhihiu',
                beerTyps: 'hjhjh',
                ingredients: 'gugy',
                hasCorn: false
            },
            handleSubmit: jest.fn()
        };
        const form = wrapper.renderProp('children')(formikPropsMock);
        
        //expect(form.childAt(5).props().disabled).toBeFalsy();
        //expect(validationSchemaMock.isValidSync(formikPropsMock.values)).toBe(true);
    });
    it('button should disabled when 1 fields are empty', () => {
        const wrapper = shallow(<CreateBeerFormik />);
        const formikPropsMock = { 
            values: {
                beerName: '',
                beerTyps: '',
                ingredients: '',
                hasCorn: false
            },
            handleSubmit: jest.fn()
        };
        const form = wrapper.renderProp('children')(formikPropsMock);

        expect(form.childAt(5).props().disabled).toBeTruthy();
    });
    it("button should disabled when 2 fields are empty", () => {
        const wrapper = shallow(<CreateBeerFormik />);
        const formikPropsMock = { 
            values: {
                beerName: '',
                beerTyps: '',
                ingredients: 'Alcool',
                hasCorn: false
            },
            validationSchema: validationSchemaMock,
            handleSubmit: jest.fn()
        };
        const form = wrapper.renderProp('children')(formikPropsMock);

        expect(validationSchemaMock.isValidSync(formikPropsMock.values)).toBe(false);
        expect(form.childAt(5).props().disabled).toBeTruthy();
    });
    it("button should disabled when 3 fields are empty", () => {
        const wrapper = shallow(<CreateBeerFormik />);
        const formikPropsMock = { 
            values: {
                beerName: '',
                beerTyps: '',
                ingredients: '',
                hasCorn: false
            },
            validationSchema: validationSchemaMock,
            handleSubmit: jest.fn()
        };
        const form = wrapper.renderProp('children')(formikPropsMock);

        expect(validationSchemaMock.isValidSync(formikPropsMock.values)).toBe(false);
        expect(form.childAt(5).props().disabled).toBeTruthy();
    });
});