import FormikCheckbox from './FormikCheckbox';
import { shallow } from 'enzyme';
import React from 'react';
import {FastField} from 'formik'

describe('function FormikCheckbox', () => {
    const label = "has corn";
    const onChange = jest.fn().mockImplementation(() => {
        value = !value;
    });
    let value = true;

    it('children should be properly orderly', () => {
        const wrapper = shallow(<FormikCheckbox label={label} value={value} onChange={onChange}/>);

        expect(wrapper.type()).toEqual('div');
        
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.type()).toEqual('label');
        expect(labelWrapper.children()).toHaveLength(2);
        expect(labelWrapper.childAt(1).text()).toBe(label);

        const inputMock = (<Field onClick={onChange} checked={true} type="checkbox" />);
        expect(labelWrapper.childAt(0).matchesElement(inputMock)).toBeTruthy();
    });
    it('should update the checkbox to false when I click on the checkbox', () => {
        const wrapper = shallow(<FormikCheckbox label={label} value={value} onChange={onChange}/>);

        wrapper.find('Field').simulate('click');

        expect(onChange).toBeCalledTimes(1);
        expect(value).toBeFalsy();
    });
});