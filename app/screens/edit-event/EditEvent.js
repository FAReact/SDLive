import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../redux/action.js';
import {View,Text,ScrollView,Image,TouchableOpacity,TextInput,AsyncStorage} from 'react-native'
import {Icon,Content} from 'native-base';
import DatePicker from 'react-native-datepicker';
import TimePicker from "react-native-24h-timepicker";
import Moment from 'moment';

import DocumentPicker from 'react-native-document-picker';
import ImagePicker from 'react-native-image-crop-picker';
import LinearGradient from 'react-native-linear-gradient';
import MultiCountryPicker from '../../components/MultiCountryPicker';
import MultiCityPicker from '../../components/MultiCityPicker';
import MultiInterest from '../../components/MultiInterest';
import TextInputMask from 'react-native-text-input-mask';
import MultiSelectedItem from '../../components/MultiSelectedItem';
import MultiEventCategory from '../../components/MultiEventCategory';
import EventType from '../../components/EventType';
import Header from '../../components/Header';
import Images from '../../constants/image';
import styles from './styles';
import {ENDPOINT} from '../../api/Endpoint';

const getDateFromString = (time) => {

    var date = time.substr(0, time.indexOf(' '));
    return date
}
const getHourFromString = (time) => {
    var Time = time.substr(time.indexOf(' ') + 1)
    return Time
}
const getMinutesFromString = (time) => {
    var Time = time.substr(time.indexOf(':') + 2)
    return Time
}
const createFormData = (body) => {
    const data = new FormData();

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });

    return data;
};
class CreateEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            date: new Date(),
            description: '',
            time: '00:00',
            photo: null,
            type: 'Hosted',
            categoryID: 1,
            tailer: null,
            countryID: 1,
            ticketNo: '',
            price: 0,
            token: '',
            categories: [],
            countries:[],
            item:this.props.navigation.getParam('item')
        }
    }
   // edit page
    componentDidMount() {
        let {item} = this.state
        AsyncStorage.getItem('token').then((token) => {
            if(token){
                this.setState({token: token});
            }
        });
        this.setState({categories:this.props.Data.data.categories, name: item.name, description: item.description
            ,categoryId: item.categoryId, countryID: item.countryID, ticketNo: item.ticket_count, price: item.price
        })
    }
 
    openGallery = () =>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
              const {path}=image    
              this.setState({photo:{
                  uri:path,
                  type:'image/jpeg',
                  name:'event.jpg'
              }})
          });
    }
    onGetCategoryID = (value) =>{
      this.setState({categoryId:Number(value)})
    }
    onGetCountryID = (value) => {
        this.setState({ countryID: Number(value) })
    }
    onSetType = (value) => {
        this.setState({ type: value })
    }
    onSetDate = (value) =>{
      this.setState({date:value})
    } 
    onChangeText =(text)=>{
        this.setState({description:text})
    }
   onConfirm =(hour, minute)=>{
     this.setState({time:`${hour}:${minute}`}); 
      this.TimePicker.close();
    }
   selectOneFile = async()=> {
        try {
            const res =await DocumentPicker.pick({
                 type:[DocumentPicker.types.video]
            });
            this.setState({tailer:{
                name:res.name,
                uri:res.uri,
                type:'video/mp4'
            }})
          
        } catch(error){
           
            if(DocumentPicker.isCancel(error)){
                console.log('cancel')
            }
            else{
                console.log(JSON.stringify(error))
                throw error
            }
        }
     
    }
    createEvent = () =>{
        const { name, date, description, type, time, photo, categoryID, tailer, countryID, ticketNo, price, token } = this.state
        const date_time = `${date} ${time}`
        let data = {
            name:name,
            category_id: categoryID,
            description:description,
            ticket_count: ticketNo,
            time: date_time,
            event_type:type,
            price:price,
            image: photo,
            tailer:tailer,
            country_id: countryID
        }
        console.log("Event Data",data)
        axios({
            url:`${ENDPOINT}/event/create/${item.id}`,
            data: createFormData(data),
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => {
                console.log('success', res)
                alert('Your event updated successfully!')
            })
            .catch(error => {
                console.log('error', error)
                alert('Network issue! please try later again.')
            })
    }
    render(){
        const { name, date, description, time, type, photo, tailer, countries, countryID, ticketNo, price, categories,categoryID } = this.state
        console.log(date)
        return(
            <View>
                <Header title="EDIT EVENT" toggleDrawer={this.props.navigation.toggleDrawer}/>
                <ScrollView style={styles.profileScrollview}>
                    <View style={styles.profileContainer}>
                         <View style={styles.profileInfoView}>
                                <View style={styles.profileEmailView}>
                                    <TextInput
                                      style={{padding:5}}
                                      defaultValue={name}
                                      placeholder="Enter Event Name"
                                      onChangeText={(name)=>this.setState({name:name})}
                                    />
                                </View>
                                
                                <View style={styles.profileMultiCityCountryView}>
                                <View style={styles.profileCountryCity}>
                                    <MultiEventCategory Data={categories} onGetCategoryID={(value) => this.onGetCategoryID(value)} />
                                </View>
                                <View style={styles.profileCountryCity}>
                                    <EventType onSetType={value => onSetType(value)} />
                                </View>
                            </View>
                                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                                  <View style={styles.dateView}>
                                    <DatePicker
                                        style={{width: '100%'}}
                                        date={getDateFromString(time)}
                                        onDateChange={(value)=>this.onSetDate(value)}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        format="YYYY-MM-DD"
                                        showIcon={true}
                                        customStyles={{
                                        dateInput: {
                                            borderWidth:0,
                                            alignItems:'flex-start'                                      
                                        }
                                        }
                                        
                                        }
                                        iconComponent={
                                            <Icon name='date' type='Fontisto' style={{fontSize:25,color:'#7D47B7'}}/>
                                        }
                                    />
                                </View>   
                                <View style={styles.timeView}>
                                    <TouchableOpacity
                                     onPress={() => this.TimePicker.open()}
                                    >
                                      <Text>{time}</Text>
                                    </TouchableOpacity>
                                    <TimePicker
                                        ref={ref => {
                                            this.TimePicker = ref;
                                        }}
                                        onCancel={() => this.TimePicker.close()}
                                        onConfirm={(hour, minute) =>this.onConfirm(hour, minute)}
                                     />
                                </View>
                                </View>
                                <View style={styles.profileBioView}>
                                    <Text style={{color:'gray'}}>EVENT DESCRIPTION</Text>
                                    <View>
                                    <TextInput
                                        style={{ height: 100,color:'black',justifyContent:'flex-start', borderColor: 'black', borderWidth: 1 ,padding:5,borderRadius:10, marginTop: 10}}
                                        onChangeText={text =>this.onChangeText(text)}
                                        defaultValue={description}
                                        textAlignVertical='top'
                                        multiline
                                        numberOfLines={4}
                                        />
                                    </View>
                                    
                                </View>   
                              <View style={{flexDirection:'row',width:'100%',justifyContent:'space-around'}}>
                              <View style={{marginTop:20}}>
                                   <Text style={{color:'gray'}}>EVENT IMAGE</Text>
                                   <TouchableOpacity
                                    onPress={()=>this.openGallery()}
                                   >
                                   <View style={{padding:10, borderRadius:20,borderColor:'#7d47b7',borderWidth:2,maxWidth:100,justifyContent:'center',alignItems:'center',marginTop:5}}>
                                       <Text style={{color:'#7d47b7'}}>UPLOAD</Text>
                                   </View>
                                   </TouchableOpacity>
                                 
                               </View>
                               <View style={{marginTop:20}}>
                                   <Text style={{color:'gray'}}>EVENT TRAILER</Text>
                                   <TouchableOpacity
                                    onPress={()=>this.selectOneFile ()}
                                   >
                                   <View style={{padding:10, borderRadius:20,borderColor:'#7d47b7',borderWidth:2,maxWidth:100,justifyContent:'center',alignItems:'center',marginTop:5}}>
                                       <Text style={{color:'#7d47b7'}}>UPLOAD</Text>
                                   </View>
                                   </TouchableOpacity>
                                 
                               </View>
                              </View>
                              <View style={styles.restrictView}>
                                <Text style={styles.restrictTitle}>RESTRICT AUDIENCE TO FOLLOWING REGIONS</Text>
                                 <View style={styles.bottomCountryBar}>
                                 <MultiCountryPicker Data={countries} onGetCountryID={(value) => this.onGetCountryID(value)} />
                                </View>
                              </View>
    
                              <View style={styles.ticketView}>
                                <View style={styles.bottomBar}>
                                  <TextInput
                                   placeholder="No. of Tickets"
                                   keyboardType='numeric'
                                   style={{padding:3}}
                                   defaultValue={ticketNo}
                                   onChangeText={(value)=>this.setState({ticketNo:value})}
                                  />
                                </View>
                                <View style={styles.bottomBar}>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                     <Text>$</Text>
                                        <TextInput
                                        style={{padding:3}}
                                        placeholder="Price"
                                        defaultValue={price}
                                        keyboardType='numeric'
                                        onChangeText={(value)=>this.setState({price:Number(value)})}
                                        />
                                    </View>
                                    
                                </View>
                            </View>
                            </View>
                            
                        <View style={{width:'100%',alignItems:'center'}}>
                            <TouchableOpacity
                             onPress={()=>this.createEvent()}
                            >
                                    <LinearGradient 
                                    start={{x: 0, y: 0}} 
                                    end={{x: 1, y: 1}} 
                                    colors={['#7d47b7', '#90b2df']} 
                                    style={styles.linearGradient}>   
                                    <Text style={styles.buttonText}>
                                      UPDATE
                                    </Text>              
                                    </LinearGradient>
                            </TouchableOpacity>
                        </View>
                          
                     </View>
    
                    
                 
                </ScrollView>
               
            </View>
        )
    }
    
  
}
const mapStateToProps = ({initData}) =>{
    return {
        Data:initData
    }
}
const mapDispatchToProps = dispatch =>{
   
    return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateEvent);