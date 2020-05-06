import React from 'react';
import {Field} from 'formik';

interface Props{
    label: string,
    value: boolean,
    onChange: (event: React.MouseEvent<HTMLInputElement>) => void
}

function formikCheckbox(props: Props) {
    return (
        <div>
            <label>
                <Field onClick={props.onChange} checked={props.value} type="checkbox"/>
                {props.label}     
            </label>
        </div>
    );
}

export default formikCheckbox;