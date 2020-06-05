import React from 'react';
import {FastField, FieldProps} from 'formik';
import {TextareaAutosize} from '@material-ui/core'

interface Props{
    label: string,
    name: string
}

function FormikTextArea(props: Props) {
    return (
        <div>
            <label> 
                {props.label}
                <FastField type="text" name={props.name}>
                    {
                        (fieldProps: FieldProps) => {
                            return (
                                <TextareaAutosize
                                rowsMin={2}
                                name={fieldProps.field.name}
                                value={fieldProps.field.value}
                                onChange={fieldProps.field.onChange}
                                onBlur={fieldProps.field.onBlur}
                                />
                            );
                        }
                    }    
                </FastField>
            </label>
        </div>
    );
}

export default FormikTextArea;