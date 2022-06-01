import React, {useState} from "react";
import {Button,View,Text,Alert} from'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker' 
import {connect} from 'react-redux';
import {addAlarm} from '../actions/alarms';
import ReactNaiveAN from 'react-native-alarm-notification';


const TimePicker = (props) => {

    const[isDateTimePickerVisible,setIsDateTimePickerVisible]   = useState(false);
    
    const makeid=()=>{
        var length = 5;
        var result="";
        var characters = "0123456789";
        var charactersLength = characters.length;
        for(var i=0;i<length;i++){
            result += characters.charAt(Math.floor(Math.random()+charactersLength))
        }
        return result;
    }

    const showDateTimePicker=()=>{
        setIsDateTimePickerVisible(true);
    }

    const hideDateTimePicker=()=>{
        setIsDateTimePickerVisible(false);
    }

    const handleDatePicker=(datetime)=>{
        var currentTime=Date.now();
        if(datetime.getTime() < currentTime){
            Alert.alert("Please choose future time!");
            hideDateTimePicker();
            return;
        }

        const fireDate=ReactNaiveAN.parseDate(datatime);
        console.log('A date has been picked:!!',fireDate);

        const alarmNotifData={
            id:makeid(),
            title:"Alarm Ringing",
            message:"My Notification Message",
            channel:"alarm-channel",
            ticker:"Notification",
            auto_cancel:true,
            vibrate:true,
            vibration:100,
            small_icon:"ic_launcher",
            large_icon:"ic_launcher",
            play_sound:true,
            sound_name:null,
            color:"red",
            schedule_once:true,
            tag:"some_tag",
            fire_date:Date.now(),
            date:{value:datetime}
        }
        props.add(alarmNotifData)
        
    }

    return(
            <>
               <Button
                title="Add Alarm"
                color="red"
                onPress={()=>{
                    showDateTimePicker();
                }}             
                /> 

                <DateTimePicker
                    mode="datetime"
                    isVisible={isDateTimePickerVisible}
                    onConfirm={handleDatePicker}
                    onCancel={hideDateTimePicker}
                />
            </>
    )
}

const mapStateToProps=state=>{
    return{};
}

const mapDispatchToProps=dispatch=>{
    return{
       add:alarmsNotifObj=>{
           dispatch(addAlarm(alarmsNotifObj));
       } 
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TimePicker);