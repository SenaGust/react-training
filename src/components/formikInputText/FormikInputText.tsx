import React from 'react';
import {FastField, FieldProps} from 'formik';
import {TextField} from '@material-ui/core';

interface Props{
    label: string,
    name: string
}

function FormikInputText(props: Props) {
    return (
        <div>
                <FastField name={props.name}>
                {(fieldProps: FieldProps) => {
                    return (
                        <TextField 
                        name={fieldProps.field.name} 
                        label={props.label} 
                        value={fieldProps.field.value}
                        onChange={fieldProps.field.onChange}
                        onBlur={fieldProps.field.onBlur}
                        variant="outlined" />
                    );
                }}
                </FastField>
        </div>
    );
}

export default FormikInputText;