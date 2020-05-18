import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import pickerSelectStyles from './styles/pickerSelectStyles'
import {Icon} from 'native-base'

const MultiNumber = () => {
    return (
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder={{
                label: 'Select your number',
                value: null,
                color: 'red',
              }}
            items={[
                { label: '1', value: '1'},
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: '5', value: '5' },
                { label: '6', value: '6' },
                { label: '7', value: '7' },
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

export default MultiNumber;