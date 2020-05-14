import {shallow, mount} from 'enzyme';
import React from 'react';
import {Formik} from 'formik';

import CreateBeerFormik from './CreateBeerFormik';
import FormikCombobox from '../Formik/FormikCombobox';
import FormikCheckbox from '../Formik/FormikCheckbox';
import FormikInputText from '../Formik/FormikInputText';
import FormikTextArea from '../Formik/FormikTextArea';

describe('function CreateBeerFormik', () => {
    it('should show components properly', () => {
        let wrapper = shallow(<CreateBeerFormik />);
        const form = ({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <h1>Beer form</h1>
                <FormikInputText label="Beer name:" name="beerName"/>
                <FormikCombobox label="Beer type:" elements={beerTypes} name="beerType"/>
                <FormikCheckbox label="Has corn" name="hasCorn"/>
                <FormikTextArea label="Ingredients" name="ingredients"/>
                <button type="submit">Submit</button>
            </form>
        );
        expect(wrapper.type()).toBe(Formik);
        //expect(wrapper.childAt(0)).toBe(form);
    });
    it('should submit values', () => {
        const values = {beerName: '', beerType: '', hasCorn: false, ingredients: ''}
        const wrapper = shallow(<CreateBeerFormik />)
        console.log = jest.fn();

        wrapper.find('Formik').simulate('submit', values);
        
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('submitting', values);
    });
});