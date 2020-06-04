import React from 'react';
import {FastField, FieldProps} from 'formik';
import {Select} from '@material-ui/core';

interface Props{
    label: string,
    elements: Array<string>,
    name: string
}

function formikCombobox(props: Props) {
    return (    
        <div>
            <label>
                {props.label}
                <FastField name={props.name}>
                    { (fieldProps: FieldProps) => {
                        return (
                        <Select
                            value={fieldProps.field.value}
                            onChange={fieldProps.field.onChange}
                            inputProps={{
                                name: fieldProps.field.name
                            }}>
                               {
                                   props.elements.map(item => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))
                               }
                        </Select>);
                    }}
                </FastField>
            </label>
        </div>
    );
}

export default formikCombobox;