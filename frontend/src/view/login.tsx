import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { login } from '../model/login';
import { signup } from '../model/signup';


function StartPage(): JSX.Element {
  const [login, setlogin] = useState(false)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', width: 280, borderColor: 'black', borderStyle: 'solid', borderWidth: 0.5, borderRadius: 20, backgroundColor: '#EEEEEE' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ backgroundColor: !login ? '#738efa' : '#b8b8b8', padding: 5, margin: 10, borderRadius:10 }}
            onPress={()=>setlogin(false)}
          >
            <Text style={{ fontSize: 23, color: 'black' }}>Signup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: login ? '#738efa' : '#b8b8b8', padding: 5, margin: 10, borderRadius:10 }}
            onPress={()=>setlogin(true)}
          >
            <Text style={{ fontSize: 23, color: 'black' }}>Login</Text>
          </TouchableOpacity>
        </View>
        {login? <Login/> : <SignUp/>}
      </View>
    </View>
  )
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('Not logged in');

  const submit = async () => {
    console.log('submit')
    let response = await login(email, password);
    setStatus(response);
  }

  return (
    <>
      <TextInput
        style={{ textAlign: 'center', borderBottomWidth: 0.5, padding: 0, margin: 10, width: '80%' }}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      ></TextInput>
      <TextInput
        style={{ textAlign: 'center', borderBottomWidth: 0.5, padding: 0, margin: 10, width: '80%' }}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}></TextInput>
      <TouchableOpacity
        style={{ backgroundColor: 'lightblue', paddingHorizontal: 20, paddingVertical: 10, margin: 10, borderRadius: 10 }}
        onPress={() => submit()}
      >
        <Text style={{ color: 'black' }}>Submit</Text>
      </TouchableOpacity>
      <Text style={{ margin: 10 }}>{status}</Text>
    </>
  )
}

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('Not signed in');

  const submit = async () => {
    console.log('submit')
    let response = await signup(name, email, password);
    setStatus(response);
  }

  return (
    <>
      <TextInput
        style={{ textAlign: 'center', borderBottomWidth: 0.5, padding: 0, margin: 10, width: '80%' }}
        placeholder='Name'
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={{ textAlign: 'center', borderBottomWidth: 0.5, padding: 0, margin: 10, width: '80%' }}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}/>
      <TextInput
        style={{ textAlign: 'center', borderBottomWidth: 0.5, padding: 0, margin: 10, width: '80%' }}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}/>
      <TouchableOpacity
        style={{ backgroundColor: 'lightblue', paddingHorizontal: 20, paddingVertical: 10, margin: 10, borderRadius: 10 }}
        onPress={() => submit()}
      >
        <Text style={{ color: 'black' }}>Submit</Text>
      </TouchableOpacity>
      <Text style={{ margin: 10 }}>{status}</Text>
    </>
  )
}

export default StartPage