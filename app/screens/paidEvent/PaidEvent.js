import React,{useState} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {ActionCreators} from '../../redux/action.js'
import {View,Text,Image,FlatList,TouchableOpacity, ImageBackground,StatusBar,Modal} from 'react-native'
import { Switch } from 'react-native-switch';
import {Icon,Badge} from 'native-base'
import DatePicker from 'react-native-datepicker'
import LinearGradient from 'react-native-linear-gradient';
import MultiSelect from 'react-native-multiple-select';
import NavigationService from '../../navigation/NavigationService'
// import Modal, { ModalContent } from 'react-native-modals';
import EventFilter from '../../screens/event-filter/EventFilter';
import Header from '../../components/Header'
import styles from './styles'
import Images from '../../constants/image'
import {paidcontents} from './data'
import MultiSelectedItem from '../../components/MultiSelectedItem'
import Screens from '../../utils/screens';
import { ScrollView } from 'react-native-gesture-handler';
import {ENDPOINT} from '../../api/Endpoint'

import MultiCategory from '../../components/MultiCategory';
const sortBy =[
  'EVENT DATE',
  'LATEST EVENT',
  'TRENDING',
  'PERFORMER NAME'
]
const PaidCardContent = (item)=>{
    return(
      <TouchableOpacity
        onPress={()=>NavigationService.navigate(Screens.EventName,{
         'item':item
        })}
        >
      <View style={styles.card}>
            <ImageBackground  style={{width:'100%',height:300}} imageStyle={{ borderRadius: 10}} source={item.image !==null?{uri:`${ENDPOINT}/${item.image}`}:Images.ChatBackground}>
                <View style={{width:'100%',padding:10}}>
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
                    <Text style={{color:'white'}}>$</Text>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:13, fontFamily:'FranklinGothic',}}>{item.price}</Text>
                  </View>
                 
                </View>
                <View style={{width:'100%',position:'absolute',bottom:10,paddingHorizontal:10}}>
                  <Text style={{textAlign:'left',color:'white',fontWeight:'bold',fontSize:13, fontFamily:'FranklinGothic'}}>{item.name}</Text>
                  <Text style={{textAlign:'left',color:'white',fontSize:12}}>{item.description}</Text>
                  <Text style={{textAlign:'left',color:'white',fontSize:12}}>{item.time}</Text>
                </View>
            </ImageBackground>
      </View>
      </TouchableOpacity>
    )
}

const PaidEvent = (props)=>{

   const [value,setValue] = useState(false);
   const [visibleModal,setVisibleModal] = useState(false);
   const [date, setDate] = useState(new Date());
   const [checkValue,setCheckValue] = useState(1);

  //  let events;
  //  let my_bought_eventt=[];
  //  let filetered_events=[];
  //  if(1)
  //  filtered_events=events.filter(event=>{
  //    return typeof my_bought_eventt[event.id.toString()]!='undefined'
  //  })

   
 
    return(
        <View style={styles.paidContainer}>
           <StatusBar 
                barStyle="light-content"
                translucent={false}
             />
         
            <Header title={value?"PAID EVENTS":"ALL EVENTS"} toggleDrawer={props.navigation.toggleDrawer}/>
            <View style={styles.paidControlView}>
              <View>
                  <Switch
                    value={value}
                    onValueChange={(val) =>setValue(val)}
                    disabled={false}
                    activeText={'On'}
                    inActiveText={'Off'}
                    circleSize={25}
                    barHeight={25}
                    circleBorderWidth={0}
                    backgroundActive={'#d7d7d8'}
                    backgroundInactive={'#d7d7d8'}
                    circleActiveColor={'#FFFFFF'}
                    circleInActiveColor={'#FFFFFF'}
                    renderInsideCircle={() =>value ? <Image style={{width:15,height:15}} source={Images.Gold}/>:<Image style={{width:15,height:15}} source={Images.Logo}/>}
                    changeValueImmediately={value} 
                    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }}
                    renderActiveText={false}
                    renderInActiveText={false}
                    switchLeftPx={2} 
                    switchRightPx={2} 
                    switchWidthMultiplier={2}                 
                  />
              </View>
              <TouchableOpacity onPress={()=>setVisibleModal(true)}>
                 <Image style={{width:25,height:20}} source={Images.Filter}/>
              </TouchableOpacity>
            </View>
            <FlatList         
               horizontal={false} 
               data={props.Data.data.events} 
               numColumns={2}
               keyExtractor={item => item._id}        
               renderItem={({item})=>
               <PaidCardContent {...item}/>
              }
              />
                <Modal
                    
                    animationType="slide"
                    transparent={true}
                    visible={visibleModal}
                 
                  >
                    
                    <View style={styles.modalContainer}>
                      <View style={{width:'100%',padding:20,flexDirection:'row',backgroundColor:'#7d47b7'}}>
                        <View style={{marginTop:20,width:'100%',flexDirection:'row'}}>
                       <TouchableOpacity onPress={()=>setVisibleModal(false)}>
                      <Icon name="arrowleft" type="AntDesign" style={{color:'white',fontSize:22,marginLeft:10}}/>
                      </TouchableOpacity>
                        <View style={{alignItems:'center',width:'85%'}}>
                          <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>EVENT FILTERS</Text>
                        </View>
                        </View>
                      </View>
                      <ScrollView>
                      <View style={styles.content}>
                  
                          <View style={{width:'100%',marginTop:20}}>
                             <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>SORT BY:</Text>
                             <View style={{flexWrap:'wrap',flexDirection:'row',marginTop:20}}>
                               {
                                 sortBy.map((item,index)=>(
                                   <TouchableOpacity
                                    onPress={()=>setCheckValue(index)}
                                   >

                                      <View style={{padding:5,borderColor:index==checkValue?'#7D47B7':'white',borderRadius:20,borderWidth:2,marginLeft:5,marginTop:5}}>
                                      <Text style={{color:checkValue==index?'#7D47B7':'white',fontSize:12}}>{item}</Text>
                                      </View>
                                   </TouchableOpacity>
                                 
                                 ))
                               }     
                             </View>
                          </View>
                          <View style={{width:'100%',marginTop:20}}>
                             <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>EVENT DATES:</Text>
                             <View style={{flexDirection:'row',width:'100%',marginTop:20}}>
                             <View style={styles.datePickerWrapper}>
                                 <Icon name='date' type='Fontisto' style={styles.emailIcon}/>
                                    <DatePicker
                                        style={{width:'80%'}}
                                        date={date}
                                        onDateChange={setDate}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        showIcon={false}
                                        customStyles={{
                                          dateInput: {                                           
                                            borderColor:'transparent'   
                                          },

                                          dateIcon:{
                                            marginLeft:5
                                          }
                                         
                                          
                                        }
                                          
                                        }
                                      />
                                 </View>
                                 <View style={styles.datePickerWrapper}>
                                    <Icon name='date' type='Fontisto' style={styles.emailIcon}/>
                                    <DatePicker
                                        style={{width: '80%'}}
                                        date={date}
                                        onDateChange={setDate}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"    
                                        showIcon={false}                                   
                                        customStyles={{
                                          dateInput: {  
                                            borderColor:'transparent'                                        
                                         }
                                        }
                                          
                                        }
                                      />
                                 </View>
                             </View>
                             
                          </View>
                          <View style={{width:'100%',marginTop:20}}>
                            <Text style={{fontSize:16,fontWeight:'bold',color:'white',marginBottom:20}}>CATEGORY:</Text>
                            <MultiCategory/>
                          </View>
                          <View style={{width:'100%',marginTop:20}}>
                               <Text style={{fontSize:16,fontWeight:'bold',color:'white',marginBottom:20}}>PERFORMER:</Text>
                               
                               <MultiSelectedItem/>

                          </View>
                          <View style={{marginTop:20}}>
                          <TouchableOpacity
                             onPress={()=>setVisibleModal(false)}
                            >
                              <LinearGradient 
                              start={{x: 0, y: 0}} 
                              end={{x: 1, y: 1}} 
                              colors={['#7d47b7', '#90b2df']} 
                              style={styles.linearGradient}>   
                                <Text style={styles.buttonText}>
                                  Apply Filters
                                </Text>              
                              </LinearGradient>
                          </TouchableOpacity>

                          </View>
                         
                        </View>
                        </ScrollView>
                        </View>
                       
                  </Modal>
        </View>
    )
}
const mapStateToProps = ({initData}) =>{
  return {
      Data:initData
  }
}
const mapDispatchToProps = dispatch =>{
 
  return bindActionCreators(ActionCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(PaidEvent) ;