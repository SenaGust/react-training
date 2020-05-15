import React, { BaseSyntheticEvent, useState } from 'react';
import CreateBeerFormCombobox from '../formCombobox/CreateBeerFormCombobox';
import CreateBeerFormCheckbox from '../formCheckbox/CreateBeerFormCheckbox';
import CreateBeerFormInputText from '../formInputText/CreateBeerFormInputText';
import CreateBeerFormTextArea from '../formTextArea/CreateBeerFormTextArea';

function CreateBeerForm() {
    const onSubmit = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        console.log(valueTextArea, valueInputText, valueComboBox, valueCheckBox);
    };

    const [valueTextArea, onChangeTextArea] = useState("");
    const [valueInputText, onChangeInputText] = useState("");
    const beerTypes = ['Ale', 'Lager', 'Stout'];
    const [valueComboBox, onChangeComboBox] = useState(beerTypes[0]);
    const [valueCheckBox, onChangeCheckBox] = useState(false);
    return (
        <form onSubmit={onSubmit}>
            <h1>Beer form</h1>
            <CreateBeerFormInputText label="Beer name:" value={valueInputText} onChange={e => onChangeInputText(e.target.value)}/>
            <CreateBeerFormCombobox label="Beer type:" elements={beerTypes} value={valueComboBox} onChange={e => onChangeComboBox(e.target.value)}/>
            <CreateBeerFormCheckbox label="Has corn" value={valueCheckBox} onChange={e => onChangeCheckBox(!valueCheckBox)}/>
            <CreateBeerFormTextArea label="Ingredients" value={valueTextArea} onChange={e => onChangeTextArea(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CreateBeerForm;