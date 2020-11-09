import React from 'react';
import { Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import common from '../../../constants/common/common';
import colors from '../../../constants/common/colors';
import fontSize from '../../../constants/common/font.size';

interface Props {
    onPress: Function;
    label: string;
    disabled?: boolean;
    backgroundColor?: string;
    labelColor?: string;
    styles?: StyleProp<ViewStyle>;
}

const ButtonComponent = (props: Props) => {
    return (
        <TouchableOpacity
            style={[styles.button, props.styles]}
            onPress={() => props.onPress()}
            disabled={props.disabled}
            activeOpacity={common.ACTIVE_OPACITY}
        >
            <Text style={[styles.buttonLabel, { color: props.labelColor ? props.labelColor : '#fff' }]}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: colors.PRIMARY,
        padding: common.PADDING,
        justifyContent: 'center'
    },
    buttonLabel: {
        textAlign: 'center',
        fontSize: fontSize.M
    },
});

export default ButtonComponent;