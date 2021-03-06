import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Icon} from 'native-base';
import pickerSelectStyles from './styles/pickerSelectStyles';
 
const MultiCityPicker = (props) => {
    return (
        <RNPickerSelect
            onValueChange={(value) => props.onSetCity(value)}
            placeholder={{
                label: 'Select City',
                value: null,
                color: 'red',
              }}
            items={[
                { label: 'London', value: 'London' },
                { label: 'Manchester', value: 'Manchester' },
                { label: 'New York', value: 'New York' },
                { label: 'Paris', value: 'Paris' },
            ]}
            style={{
                ...pickerSelectStyles,
                iconContainer: {
                    top: 12,
                    right: 0,
                  },
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

export default MultiCityPicker;