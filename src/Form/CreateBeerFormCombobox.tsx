import React from 'react';

interface Props{
    label: string,
    elements: Array<string>,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function CreateBeerFormCombobox(props: Props) {
    return (    
        <div>
            <label>
                {props.label}
                <select onChange={props.onChange}>
                    { props.elements.map(item => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                </select>
            </label>
        </div>
    );
}

export default CreateBeerFormCombobox;