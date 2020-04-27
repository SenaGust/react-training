import CreateBeerFormInputText from './CreateBeerFormInputText';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormInputText', () => {
    const labelParameter = "Beer name:";
    const onChange = jest.fn().mockImplementation((string) => {
        value = string;
    });
    let value = "";

    it('children should be properly orderly', () => {
        const div = shallow(<CreateBeerFormInputText label={labelParameter} onChange={onChange} value={value} />);

        expect(div.type()).toEqual('div');

        const label = div.childAt(0);
        expect(label.props().children).toHaveLength(2);
        expect(label.type()).toEqual('label');

        expect(label.props().children[0]).toEqual(labelParameter);
        expect(label.props().children[1].type).toEqual('input');
    });
    it('should update value when I change the input', () => {
        const wrapper = shallow(<CreateBeerFormInputText label={labelParameter} onChange={onChange} value={value} />);

        wrapper.find('input').simulate('change', 'ola');

        expect(onChange).toBeCalledTimes(1);
        expect(value).toEqual("ola");
    });
});