import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SelectItem } from '../../../domains/util/utils.interface';
import s from './switch.selector.style';

interface Props {
    options: SelectItem[];
    selectedItem: string | boolean;
    disabled?: boolean;
    onItemSelectFn(item: string | boolean);
}

const SwitchSelectorComponent = (props: Props) => {
    const [selectedItem, setSelectedItem] = useState(props.selectedItem);

    useEffect(() => {
        setSelectedItem(props.selectedItem);
    }, [props.selectedItem]);

    return (
        <View style={s.buttonGroup}>
            {props.options.map(item => {
                return (
                    <TouchableOpacity
                        key={item.value}
                        style={[item.value === selectedItem ? s.defButton : s.altButton, { opacity: props.disabled ? 0.5 : 1 }]}
                        disabled={props.disabled}
                        onPress={() => {
                            setSelectedItem(item.value);
                            props.onItemSelectFn(item.value);
                        }}>

                        <Text style={item.value === selectedItem ? s.defText : s.altText}>
                            {item.label}
                        </Text>

                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

export default SwitchSelectorComponent;