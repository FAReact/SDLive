import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {Icon} from 'native-base';
import pickerSelectStyles from './styles/pickerSelectStyles';
 
const EventType = (props) => {
    return (
        <RNPickerSelect
            onValueChange={(value) => props.onSetType(value)}
            placeholder={{
                label: 'Select Type',
                value: null,
                color: 'red',
              }}
            items={[
                { label: 'Hosted', value: 'Hosted' },
                { label: 'Multi-User', value: 'Multi-User' },
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

export default EventType;