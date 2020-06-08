import FormikCheckbox from './FormikCheckbox';
import { shallow } from 'enzyme';
import React from 'react';
import {FastField} from 'formik'

describe('function FormikCheckbox', () => {
    it('should be properly orderly', () => {
        const label = "has corn",
        name = "hascorn";
        const wrapper = shallow(<FormikCheckbox label={label} name={name}/>);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.children()).toHaveLength(1);
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.type()).toEqual('label');
        expect(labelWrapper.children()).toHaveLength(2);
        expect(labelWrapper.childAt(1).text()).toBe(label);
        const inputMock = (<FastField type="checkbox" name={name} />);
        expect(labelWrapper.childAt(0).matchesElement(inputMock)).toBeTruthy();
    });
});