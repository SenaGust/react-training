import DogDetailsView from './DogDetails';
import { mount, shallow } from 'enzyme';
import React from 'react';

describe('function DogDetailsView', () => {
    it('children should be properly orderly', () => {
        const photoParameter = 'https://img.ibxk.com.br/2019/07/16/16123213283052.jpg',
            nameParameter = 'Roberto';
        
        const wrapper = shallow(<DogDetailsView name={nameParameter} photo={photoParameter}/>);
        
        expect(wrapper.type()).toEqual('div');
        expect(wrapper.childAt(0).type()).toEqual('img');
        expect(wrapper.childAt(1).type()).toEqual('h1');
        expect(wrapper.childAt(2).type()).toEqual('button');
        expect(wrapper.children().length).toBe(3);
    });
    it('should use props correctly and button name is "Bark!" ', () => {
        const photoParameter = 'https://img.ibxk.com.br/2019/07/16/16123213283052.jpg',
            nameParameter = 'Roberto';
        
        const wrapper = shallow(<DogDetailsView name={nameParameter} photo={photoParameter}/>);
        
        expect(wrapper.find('h1').get(0).props.children).toEqual(nameParameter);
        expect(wrapper.find('img').get(0).props.src).toEqual(photoParameter);
        expect(wrapper.find('button').get(0).props.children).toEqual('Bark!');
    });
});