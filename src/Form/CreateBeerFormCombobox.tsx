import React, {useState} from 'react';

interface Props{
    elements: Array<string>,
    label: string
}

function CreateBeerFormCombobox(props: Props) {
    const [items] = useState(props.elements.map((item) => {
        return ({value: item, label: item});
    }));

    return (    
        <label>
            {props.label}
            <select>
                { items.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
            </select>
        </label>
    );
}

export default CreateBeerFormCombobox;