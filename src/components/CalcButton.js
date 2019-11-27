import React from 'react';
import {
    Button
} from 'react-native';
import PropTypes from 'prop-types';


const CalcButton = ({bgColor, title, callback}) =>{
 return (
     <Button
         color={bgColor}
         title={title}
         onPress={() => callback()}
     />
 )
}

CalcButton.propTypes = {
    bgColor: PropTypes.string,
    title: PropTypes.string,
    callback: PropTypes.func,
};

CalcButton.defaultProps = {
    bgColor: 'green',
    title: 'no title',
    callback: ()=>{
        console.log('no function')
    }
};

export default CalcButton;
