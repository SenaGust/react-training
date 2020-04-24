import CreateBeerFormTextArea from './CreateBeerFormTextArea';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormTextArea', () => {
    it('children should be properly orderly', () => {
        const label = "ingredients";
        const div = shallow(<CreateBeerFormTextArea label={label} />);

        expect(div.type()).toEqual('div');
        expect(div.childAt(0).type()).toEqual('label');
        
        const tagLabel = div.childAt(0);
        expect(tagLabel.props().children).toHaveLength(2);
        expect(tagLabel.props().children[0]).toEqual(label);
        expect(tagLabel.props().children[1].type).toEqual('textarea');
    });
    it('testar a funcionalidade', () => {

    });
});