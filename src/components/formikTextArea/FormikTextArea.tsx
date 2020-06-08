import React from 'react';
import {FastField, FieldProps} from 'formik';
import {TextField} from '@material-ui/core'

interface Props{
    label: string,
    name: string
}

function FormikTextArea(props: Props) {
    return (
        <div>
            <FastField type="text" name={props.name}>
                {
                    (fieldProps: FieldProps) => {
                        return (
                            <TextField
                            rows={2}
                            multiline
                            label={props.label}
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
        </div>
    );
}

export default FormikTextArea;