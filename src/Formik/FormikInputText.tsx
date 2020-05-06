import React from 'react';
import {Field} from 'formik';

interface Props{
    label: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function FormikInputText(props: Props) {
    return (
        <div>
            <label>
                {props.label}
                <Field type="text" component="textarea" value={props.value} onChange={props.onChange} />
            </label>
        </div>
    );
}

export default FormikInputText;