import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SelectItem} from '../../../domains/util/utils.interface';
import s from './option.selector.style';
import common from '../../../constants/common/common';

interface Props {
  options: SelectItem[];
  selectedItem: string | number | boolean;
  disabled?: boolean;
  onItemSelectFn(item: string | number | boolean);
  emptyMessage?: string;
  listHeader?: string;
}

const OptionSelectorComponent = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState(props.selectedItem);

  useEffect(() => {
    setSelectedItem(props.selectedItem);
  }, [props.selectedItem]);

  if (!props.options.length && props.emptyMessage) {
    return (
      <View style={s.messageWrapper}>
        <Text style={s.title}>{props.emptyMessage}</Text>
      </View>
    );
  }

  return (
    <View>
      {!!props.options.length && props.listHeader && (
        <View style={s.titleWrapper}>
          <Text style={s.title}>{props.listHeader}</Text>
        </View>
      )}

      {!!props.options.length && (
        <View style={s.buttonGroup}>
          {props.options.map((item) => {
            return (
              <View key={item.value} style={s.buttonWrapper}>
                <TouchableOpacity
                  style={[
                    item.value === selectedItem ? s.defButton : s.altButton,
                    {opacity: props.disabled ? 0.5 : 1},
                  ]}
                  disabled={props.disabled}
                  onPress={() => {
                    setSelectedItem(item.value);
                    props.onItemSelectFn(item.value);
                  }}
                  activeOpacity={common.ACTIVE_OPACITY}>
                  <Text
                    style={item.value === selectedItem ? s.defText : s.altText}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default OptionSelectorComponent;
