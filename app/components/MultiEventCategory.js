import React ,{useState,useEffect}from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../redux/action'
import RNPickerSelect from 'react-native-picker-select';
import pickerSelectStyles from './styles/pickerSelectStyles'
import {Icon} from 'native-base'

const MultiEventCategory = (props) => {

     const convertItem = () =>{
          let categories=[]
          props.Data.map(item=>{
              categories.push({
                label:item.name,
                value:item.id
              })
          })
          return categories;
     }

    return (
        <RNPickerSelect
            onValueChange={(value) =>props.onGetCategoryID(value)}
            placeholder={{
                label: 'Select your category',
                value: null,
              }}
            
            items={convertItem()}
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


export default MultiEventCategory;