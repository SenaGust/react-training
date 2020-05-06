import React from 'react';
import {Field} from 'formik';

interface Props{
    label: string,
    elements: Array<string>,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function formikCombobox(props: Props) {
    return (    
        <div>
            <label>
                {props.label}
                <Field type="select" onChange={props.onChange}>
                    { props.elements.map(item => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                </Field>
            </label>
        </div>
    );
}

export default formikCombobox;