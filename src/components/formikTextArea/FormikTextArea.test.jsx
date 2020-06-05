import FormikTextArea from './FormikTextArea';
import { shallow } from 'enzyme';
import React from 'react';
import {FastField} from 'formik';
import {TextField} from '@material-ui/core';

describe('function formikTextArea', () => {
    const labelMock = "ingredients",
    nameMock = "ingredients";

    it('children should be properly orderly', () => {
        const wrapper = shallow(<FormikTextArea label={labelMock} name={nameMock} />);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.childAt(0).type()).toEqual(FastField);
        
        const textAreaWrapper = wrapper.childAt(0);
        expect(textAreaWrapper.children()).toHaveLength(1);

        const textAreaMock = (
            <FastField type="text" name={nameMock}>
                    {
                        (fieldProps) => {
                            return (
                                <TextField
                                rows={2}
                                multiline
                                label={labelMock}
                                variant="outlined"
                                name={fieldProps.field.name}
                                value={fieldProps.field.value}
                                onChange={fieldProps.field.onChange}
                                onBlur={fieldProps.field.onBlur}
                                />
                            );
                        }
                    }    
                </FastField>
            );
        expect(textAreaWrapper.matchesElement(textAreaMock)).toBeTruthy();

    });
});