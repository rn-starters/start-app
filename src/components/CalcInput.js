import React from 'react';
import {
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';


const CalcInput = ({value, changeValue}) =>{
    return (
        <TextInput
            style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginTop:20 }}
            onChangeText={text => changeValue(text)}
            value={value}
            placeholder={'Enter a number'}
        />
    )
}

CalcInput.propTypes = {
    value: PropTypes.string,
    changeValue: PropTypes.func,
};

CalcInput.defaultProps = {
    value: '',
    changeValue: ()=>{
        console.log('no change value function')
    }
};

export default CalcInput;
