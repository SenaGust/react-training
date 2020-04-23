import CreateBeerFormTextArea from './CreateBeerFormTextArea';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormTextArea', () => {
    it('children should be properly orderly', () => {
        const label = "ingredients";
        const wrapper = shallow(<CreateBeerFormTextArea label={label} />);

        expect(wrapper.type()).toEqual('label');
        expect(wrapper.props().children).toHaveLength(2);
        expect(wrapper.props().children[0]).toEqual(label);
        expect(wrapper.props().children[1].type).toEqual('textarea');
    });
});