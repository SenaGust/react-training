import React, {useState} from 'react';

interface Props{
    label: string
}

function CreateBeerForm(props: Props) {
    const [checked, setChecked] = useState(false);
    const handleClick = () => setChecked(!checked)
    return (
        <div>
            <label>
                <input onClick={handleClick} checked={checked} type="checkbox"/>
                {props.label}     
            </label>
        </div>
    );
}

export default CreateBeerForm;