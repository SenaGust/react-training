import FormikCombobox from './FormikCombobox';
import { shallow } from 'enzyme';
import React from 'react';
import {FastField} from 'formik';

describe('function formikCombobox', () => {


    it('children should be properly orderly', () => {
        const label = "Beer type: ",
        name = "beerType",
        elements = ['Ale', 'Beer'];
        const wrapper = shallow(<FormikCombobox label={label} elements={elements} name={name}/>);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.children()).toHaveLength(1);
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.type()).toEqual('label');
        expect(labelWrapper.children()).toHaveLength(2);
        expect(labelWrapper.childAt(0).text()).toBe(label);
        const inputMock = (<FastField component="select" name={name}>
        { elements.map(item => (
                <option key={item} value={item}>
                    {item}
                </option>
            ))}
    </FastField>);
        expect(labelWrapper.childAt(1).matchesElement(inputMock)).toBeTruthy();
    
    });
});