import CreateBeerFormTextArea from './CreateBeerFormTextArea';
import { shallow } from 'enzyme';
import React from 'react';

describe('function CreateBeerFormTextArea', () => {
    const labelMock = "ingredients";
    const onChangeMock = jest.fn().mockImplementation((string) => {
        valueMock = string;
    });
    let valueMock = "";

    it('children should be properly orderly', () => {
        const wrapper = shallow(<CreateBeerFormTextArea label={labelMock} value={valueMock} onChange={onChangeMock} />);

        expect(wrapper.type()).toEqual('div');
        expect(wrapper.childAt(0).type()).toEqual('label');
        
        const labelWrapper = wrapper.childAt(0);
        expect(labelWrapper.children()).toHaveLength(2);
        expect(labelWrapper.childAt(0).text()).toEqual(labelMock);

        const textAreaWrapper = labelWrapper.childAt(1);
        const textAreaMock = (<textarea value={valueMock} onChange={onChangeMock} />);
        console.log(textAreaMock);
        console.log(textAreaWrapper.debug());

        expect(textAreaWrapper.matchesElement(textAreaMock)).toBeTruthy();

    });
    it('should update value when I change the input', () => {
        const wrapper = shallow(<CreateBeerFormTextArea label={labelMock} onChange={onChangeMock} value={valueMock} />);

        wrapper.find('textarea').simulate('change', 'ola');

        expect(onChangeMock).toBeCalledTimes(1);
        expect(valueMock).toEqual("ola");
    });
});