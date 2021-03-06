import DogDetailsView from './DogDetails';
import { shallow } from 'enzyme';
import React from 'react';
import {Button, Typography} from '@material-ui/core';

describe('function DogDetailsView', () => {
    it('children should be properly orderly', () => {
        const photoParameter = 'https://img.ibxk.com.br/2019/07/16/16123213283052.jpg',
            nameParameter = 'Roberto';
        
        const wrapper = shallow(<DogDetailsView name={nameParameter} photo={photoParameter}/>);
        
        expect(wrapper.type()).toEqual('div');
        expect(wrapper.children().length).toBe(5);
        expect(wrapper.childAt(0).type()).toEqual('img');
        expect(wrapper.childAt(1).type()).toEqual(Typography);
        expect(wrapper.childAt(2).type()).toEqual(Button);
        expect(wrapper.childAt(3).type()).toEqual(Typography);
        expect(wrapper.childAt(4).type()).toEqual(Button);
    });
    it('should use props correctly and button name is "Bark!" ', () => {
        const photoParameter = 'https://img.ibxk.com.br/2019/07/16/16123213283052.jpg',
            nameParameter = 'Roberto',
            methodParameter = () => {

            };
        
        const wrapper = shallow(<DogDetailsView 
            name={nameParameter} photo={photoParameter} 
            onBark={methodParameter}/>);
        
        expect(wrapper.find(Typography).at(0).text()).toEqual(nameParameter);

        const img = wrapper.find('img').get(0).props;
        expect(Object.keys(img).length).toBe(2);
        expect(img.alt).toEqual('Here is a pomsky.');
        expect(img.src).toEqual(photoParameter);

        const buttonBark = wrapper.find(Button).get(0).props;
        expect(Object.keys(buttonBark).length).toBe(4);
        expect(buttonBark.children).toEqual('Bark!');
        expect(buttonBark.onClick).toEqual(methodParameter);

        const p = wrapper.find({variant: "body1"}).get(0).props;
        expect(p.children).toEqual(['Scolding counter: ', 0]);

        const buttonScold = wrapper.find(Button).get(1).props;
        expect(Object.keys(buttonScold).length).toBe(4);
        expect(buttonScold.children).toEqual('Scold!');
    });
    it('onBark should called when I click on button Bark', () => {
        const photoParameter = 'https://img.ibxk.com.br/2019/07/16/16123213283052.jpg',
            nameParameter = 'Roberto',
            methodParameter = jest.fn();
        
        const wrapper = shallow(<DogDetailsView 
            name={nameParameter} photo={photoParameter} 
            onBark={methodParameter}/>);
        
        wrapper.find({children: 'Bark!'}).simulate('click');

        expect(methodParameter).toHaveBeenCalledTimes(1);
    });
    it('setCount should called when I click on button Scold', () => {
        const photoParameter = 'https://img.ibxk.com.br/2019/07/16/16123213283052.jpg',
            nameParameter = 'Roberto',
            methodParameter = jest.fn();

        const wrapper = shallow(<DogDetailsView 
            name={nameParameter} photo={photoParameter} 
            onBark={methodParameter}/>);

        wrapper.find({children: 'Scold!'}).simulate('click');
        
        const p = wrapper.find(Typography).at(1);
        expect(p.text()).toEqual('Scolding counter: 1');
    });
});