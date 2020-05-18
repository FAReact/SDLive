import React, { Component } from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
 const items = [{
    id: '92iijs7yta',
    name: 'Ondo',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  }, {
    id: '16hbajsabsd',
    name: 'Calabar',
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos',
  }, {
    id: '667atsas',
    name: 'Maiduguri',
  }, {
    id: 'hsyasajs',
    name: 'Anambra',
  }, {
    id: 'djsjudksjd',
    name: 'Benue',
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  }, {
    id: 'suudydjsjd',
    name: 'Abuja',
  }];
class MultiSelectedItem extends Component {
 
  state = {
    selectedItems :[]
  };
 
  
 
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
 
  render() {
    const { selectedItems } = this.state;
    return (
      <View >
        <MultiSelect
          hideTags
          items={items}          
          styleDropdownMenuSubsection={{backgroundColor:'white', borderRadius:30, paddingLeft:20, paddingRight:10}}          
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Performer"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={ (text)=> console.log(text)}
          tagRemoveIconColor="white"
          tagBorderColor="white"
          tagTextColor="#7d47b7"
          selectedItemTextColor="#7d47b7"
          selectedItemIconColor="white"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC',height:50}}
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
 export default MultiSelectedItem;