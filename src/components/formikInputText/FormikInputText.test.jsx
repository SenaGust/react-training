import FormikInputText from './FormikInputText';
import { shallow } from 'enzyme';
import React from 'react';
import { FastField } from 'formik';
import {TextField} from '@material-ui/core';

describe('function FormikInputText', () => {
    it('children should be properly orderly', () => {
        const label = "Beer name: ",
        name = "beerName";
        const wrapper = shallow(<FormikInputText label={label} name={name}/>);

        expect(wrapper.type()).toEqual('div');
        
        const fastfieldWrapper = wrapper.childAt(0);
        expect(fastfieldWrapper.children()).toHaveLength(1);
        const inputMock = (
            <FastField name={name}>
                {(fieldProps) => {
                    return (
                        <TextField 
                        name={fieldProps.field.name} 
                        label={label} 
                        value={fieldProps.field.value}
                        onChange={fieldProps.field.onChange}
                        onBlur={fieldProps.field.onBlur}
                        variant="outlined" />
                    );
                }}
                </FastField>
        );
        expect(fastfieldWrapper.matchesElement(inputMock)).toBeTruthy();
    });
});