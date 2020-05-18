import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import pickerSelectStyles from './styles/pickerSelectStyles'
import {Icon} from 'native-base'

const MultiCountryPicker = (props) => {

    
    return (
        <RNPickerSelect
            onValueChange={(value) => props.onSetCountry(value)}
            placeholder={{
                label: 'Select your country',
                value: null,
              }}
            
            items={[
                { label: 'United Kingdom', value: 'United Kingdom'},
                { label: 'Russia', value: 'Russia' },
                { label: 'France', value: 'France' },
            ]}
            style={{
                ...pickerSelectStyles,
                iconContainer: {
                    top: 12,
                    right: 0,
                  },
                  placeholder:{
                      color:'gray'
                  }
            }       
            }
            Icon={()=>{
                return(
                    <Icon name="md-arrow-dropdown" type="Ionicons" style={{fontSize:25}}/>
                )
            }}
        />
    );
};

export default MultiCountryPicker;