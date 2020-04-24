import CreateBeerFormInputText from './CreateBeerFormInputText';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormInputText', () => {
    it('children should be properly orderly', () => {
        const labelParameter = "name";
        const div = shallow(<CreateBeerFormInputText label={labelParameter} />);

        expect(div.type()).toEqual('div');

        const label = div.childAt(0);
        expect(label.props().children).toHaveLength(2);
        expect(label.type()).toEqual('label');

        expect(label.props().children[0]).toEqual(labelParameter);
        expect(label.props().children[1].type).toEqual('input');
    });
    it('testar a funcionalidade', () => {

    });
});