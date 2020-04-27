import React, { BaseSyntheticEvent, useState } from 'react';
import CreateBeerFormCombobox from './Form/CreateBeerFormCombobox';
import CreateBeerFormCheckbox from './Form/CreateBeerFormCheckbox';
import CreateBeerFormInputText from './Form/CreateBeerFormInputText';
import CreateBeerFormTextArea from './Form/CreateBeerFormTextArea';

function CreateBeerForm() {
    const [valueTextArea, onChangeTextArea] = useState("");
    const [valueInputText, onChangeInputText] = useState("");
    const beerTypes = ['Ale', 'Lager', 'Stout'];
    const [valueComboBox, onChangeComboBox] = useState(beerTypes[0]);
    const [valueCheckBox, onChangeCheckBox] = useState(false);
    return (
        <form>
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