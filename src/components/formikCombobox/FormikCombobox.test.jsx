import FormikCombobox from './FormikCombobox';
import { shallow } from 'enzyme';
import React from 'react';
import {FastField} from 'formik';
import {Select} from '@material-ui/core'

describe('function formikCombobox', () => {


    it('children should be properly orderly', () => {
        const label = "Beer type: ",
        name = "beerType",
        elementsMock = ['Ale', 'Beer'];
        const wrapper = shallow(<FormikCombobox label={label} elementsMock={elementsMock} name={name}/>);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.children()).toHaveLength(1);
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.type()).toEqual('label');
        expect(labelWrapper.children()).toHaveLength(2);
        expect(labelWrapper.childAt(0).text()).toBe(label);
        const selectMock = (
            <FastField name={name}>
            { (fieldProps) => {
                return (
                <Select
                    value={fieldProps.field.value}
                    onChange={fieldProps.field.onChange}
                    inputProps={{
                        name: fieldProps.field.name
                    }}>
                       {
                           elementsMock.map(item => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))
                       }
                </Select>);
            }}
        </FastField>
        );
        expect(labelWrapper.childAt(1).matchesElement(selectMock)).toBeTruthy();
    
    });
});