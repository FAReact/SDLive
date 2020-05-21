import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/action';
import RNPickerSelect from 'react-native-picker-select';
import pickerSelectStyles from './styles/pickerSelectStyles';
import { Icon } from 'native-base';

const MultiCountryPicker = (props) => {

    const convertItem = () => {
        let countries = [];
        props.Data.map(item => {
            countries.push({
                label: item.name,
                value: item.id
            })
        })
        return countries;
    };

    const defaultItem = () => {
        let countries = convertItem()
        return countries.find((element) => {
            return element.value === props.defaultItem;
        })
    }

    return (
        <RNPickerSelect
            selectedValue={defaultItem()}
            onValueChange={(value) => props.onGetCountryID(value)}
            placeholder={{
                label: 'Select your Country',
                value: null,
            }}
            items={convertItem()}
            style={{
                ...pickerSelectStyles,
                iconContainer: {
                    top: 12,
                    right: 0,
                },
                placeholder: {
                    color: 'gray'
                }
            }}
            Icon={()=>{
                return(
                    <Icon name="md-arrow-dropdown" type="Ionicons" style={{fontSize:25}}/>
                )
            }}
        />
    );
};

export default MultiCountryPicker;