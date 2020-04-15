import DogDetailsView from './DogDetails';
import { mount, shallow } from 'enzyme';
import React from 'react';

describe('function DogDetailsView', () => {
    it('should receive props correctly', () => {
        const photoParameter = 'https://img.ibxk.com.br/2019/07/16/16123213283052.jpg',
            nameParameter = 'Roberto';
        
        // I have tried to use shallow but it returns 'undefined' when I call wrapper.props().name
        const wrapper = mount(<DogDetailsView name={nameParameter} photo={photoParameter}/>);
        
        expect(wrapper.props().name).toEqual(nameParameter);
        expect(wrapper.props().photo).toEqual(photoParameter);
    });
    it('should use props correctly', () => {
        const photoParameter = 'https://img.ibxk.com.br/2019/07/16/16123213283052.jpg',
            nameParameter = 'Roberto';
        
        const wrapper = shallow(<DogDetailsView name={nameParameter} photo={photoParameter}/>);
        
        expect(wrapper.find('h1').get(0).props.children).toEqual(nameParameter);
        expect(wrapper.find('img').get(0).props.src).toEqual(photoParameter);
    });
});