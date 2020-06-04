import React from 'react';
import {FastField, FieldProps} from 'formik';
import {Checkbox} from '@material-ui/core';

interface Props{
    label: string,
    name: string
}

function formikCheckbox(props: Props) {
    return (
        <div>
            <label>
                <FastField name={props.name}>
                    {
                        (fieldProps: FieldProps) => {
                            return <Checkbox 
                                name={fieldProps.field.name}
                                value={fieldProps.field.value || ''}
                                onChange={fieldProps.field.onChange}
                                onBlur={fieldProps.field.onBlur}
                            />
                        }
                    }
                </FastField>
                {props.label}
            </label>
        </div>
    );
}

export default formikCheckbox;