import FormikInputText from './FormikInputText';
import { shallow } from 'enzyme';
import React from 'react';
import { FastField } from 'formik';

describe('function FormikInputText', () => {
    it('children should be properly orderly', () => {
        const label = "Beer name: ",
        name = "beerName";
        const wrapper = shallow(<FormikInputText label={label} name={name}/>);

        expect(wrapper.type()).toEqual('div');
        
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.type()).toEqual('label');
        expect(labelWrapper.children()).toHaveLength(2);
        expect(labelWrapper.childAt(0).text()).toBe(label);
        const inputMock = (<FastField type="text" name="beerName"/>);
        expect(labelWrapper.childAt(1).matchesElement(inputMock)).toBeTruthy();
    });
});