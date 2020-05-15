import FormikCheckbox from './FormikCheckbox';
import { shallow } from 'enzyme';
import React from 'react';
import {FastField} from 'formik'

describe('function FormikCheckbox', () => {
    const label = "has corn";

    it('should be properly orderly', () => {
        const wrapper = shallow(<FormikCheckbox label={label} name="hasCorn"/>);

        expect(wrapper.type()).toEqual('div');
        
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.type()).toEqual('label');
        expect(labelWrapper.children()).toHaveLength(2);
        expect(labelWrapper.childAt(1).text()).toBe(label);

        const inputMock = (<FastField type="checkbox" name="hasCorn" />);
        expect(labelWrapper.childAt(0).matchesElement(inputMock)).toBeTruthy();
    });
});