import CreateBeerFormTextArea from './CreateBeerFormTextArea';
import { shallow } from 'enzyme';
import React from 'react';
import {TextField} from '@material-ui/core';

describe('function CreateBeerFormTextArea', () => {
    const labelMock = "ingredients";
    const onChangeMock = jest.fn().mockImplementation((string) => {
        valueMock = string;
    });
    let valueMock = "";

    it('children should be properly orderly', () => {
        const wrapper = shallow(<CreateBeerFormTextArea label={labelMock} value={valueMock} onChange={onChangeMock} />);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.childAt(0).type()).toEqual(TextField);
        expect(wrapper.children()).toHaveLength(1);

        const textAreaWrapper  = wrapper.childAt(0);
        const textAreaMock = (<TextField
            rows={2}
            multiline
            label={labelMock}
            variant="outlined"
            value={valueMock}
            onChange={onChangeMock}
            />);

        expect(textAreaWrapper.matchesElement(textAreaMock)).toBeTruthy();

    });
    it('should update value when I change the input', () => {
        const wrapper = shallow(<CreateBeerFormTextArea label={labelMock} onChange={onChangeMock} value={valueMock} />);

        wrapper.find(TextField).simulate('change', 'ola');

        expect(onChangeMock).toBeCalledTimes(1);
        expect(valueMock).toEqual("ola");
    });
});