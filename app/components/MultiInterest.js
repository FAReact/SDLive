import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MultiSelect from 'react-native-multiple-select';

class MultiInterest extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      selectedItems :[]
    };
  }


  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
    console.log(selectedItems)
    this.props.onInterest(selectedItems)
  };
  
  render() {
    const { selectedItems } = this.state;
  
    return (
      <View style={{ width: '100%'}}>
        <MultiSelect
          hideTags
          items={this.props.initData.categories}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText={this.props.placeHolderTitle}
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          tagRemoveIconColor="#7d47b7"
          tagBorderColor="#7d47b7"
          tagTextColor="#7d47b7"
          selectedItemTextColor="#7d47b7"
          selectedItemIconColor="white"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC'}}
          submitButtonColor="#7d47b"
          submitButtonText="Add"
        />
        <View>
          {this.multiSelect?.getSelectedItemsExt(selectedItems)}
        </View>
      </View>
    );
  }
}

const mapStateToProps =({initData})=>{
  
   return {
     initData:initData.data
   }
}

 export default connect(mapStateToProps,null)(MultiInterest);