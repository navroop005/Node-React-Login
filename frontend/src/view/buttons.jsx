import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

const Buttons = () => {
  return (
    <View style={{ alignItems: 'flex-start', justifyContent: 'center', width: 280, borderColor: 'black', borderStyle: 'solid', borderWidth: 0.5, borderRadius: 20, backgroundColor: '#EEEEEE', padding: 10 }}>
      <RadioButtons />
      <MultiSelect />
    </View>
  )
}

function RadioButtons(props) {
  const [selected, setSelected] = useState(null);

  const setSelection = (index) => {
    setSelected(index);
    console.log('Selected: ', data[index]);
  }

  const data = [
    'Button 0',
    'Button 1',
    'Button 2',
    'Button 3',
  ]

  return (
    <>
      <Text>Radio buttons</Text>
      {data.map((item, index) => <RButton
        key={index} text={item}
        selected={selected === index}
        onPress={() => setSelection(index)}
      />)}
    </>
  )
}

function RButton(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress} >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{
          height: 13,
          width: 13,
          borderRadius: 20,
          padding: 1,
          borderWidth: 2,
          borderColor: 'black',
          marginRight: 4
        }}>
          {props.selected ? <View style={{
            flex: 1, borderRadius: 10, backgroundColor: 'black'
          }} /> : null}
        </View>
        <Text style={{ fontSize: 18, color: 'black' }}>{props.text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

function MultiSelect() {
  const data = [
    'Button 0',
    'Button 1',
    'Button 2',
    'Button 3',
  ]

  const [selected, setSelected] = useState(Array(data.length).fill(false));

  const setSelection = (index) => {
    let newSel = [...selected]
    newSel[index] = !newSel[index]
    setSelected(newSel);
    console.log(data.filter((value, index) => newSel[index]))
  }

  return (
    <>
      <Text>Multi Select</Text>
      {data.map((item, index) => <MButton
        key={index} text={item}
        selected={selected[index]}
        onPress={() => setSelection(index)}
      />)}
    </>
  )
}

function MButton(props) {
  return (
    <TouchableWithoutFeedback onPress={props.onPress} >
      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
        <View style={{
          height: 13,
          width: 13,
          padding: 1,
          borderWidth: 2,
          borderColor: 'black',
          marginRight: 4
        }}>
          {props.selected ? <View style={{
            flex: 1, backgroundColor: 'black'
          }} /> : null}
        </View>
        <Text style={{ fontSize: 18, color: 'black' }}>{props.text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Buttons