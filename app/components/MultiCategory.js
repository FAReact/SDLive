import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../redux/action'
import RNPickerSelect from 'react-native-picker-select';
import categorySelectStyles from './styles/categorySelectStyles'
import {Icon} from 'native-base'

const MultiCategory = (props) => {
  
    const convertItem = () =>{
        let categories=[]
        props.Data.data.categories.map(item=>{
            categories.push({
              label:item.name,
              value:item.id
            })
        })
        return categories;
   }

    return (
        <RNPickerSelect
            onValueChange={(value) =>console.log(value)}
            placeholder={{
                label: 'Select Category',
                value: null,
              
              }}
              
            items={convertItem()}
            style={{
                ...categorySelectStyles,
                iconContainer: {
                    top: 12,
                    right: 518,
                  },
                  viewContainer:{
                      backgroundColor:'white',
                      borderRadius:40,
                      paddingHorizontal:10,
                    
                  },       
                  placeholder:{
                      color:'black'
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
const mapStateToProps = ({initData}) =>{
    return {
        Data:initData
    }
}
const mapDispatchToProps = dispatch =>{
   
    return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(MultiCategory);