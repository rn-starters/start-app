import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import PropTypes from 'prop-types';
import {Colors} from "react-native/Libraries/NewAppScreen";


const CalcTotal = ({total}) =>{
    return (
        <Text style={styles.sectionDescription}>
            {total}
        </Text>
    )
}

CalcTotal.propTypes = {
    total: PropTypes.number
};

CalcTotal.defaultProps = {
    total: 0
};

const styles = StyleSheet.create({
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    }
});

export default CalcTotal;
