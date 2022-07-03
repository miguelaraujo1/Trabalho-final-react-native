import React, { useState, useContext } from "react";
import { View, Image, Button, TextInput, Text } from "react-native";
//import { MyTextInput } from '../components/MyTextInput.js'
//import { MyButton } from '../components/MyButton'
import bgImg from "../../images/logobike.png";
import { styles } from "./styles.js";
import { AuthContext } from "../../contexts/Auth";

export const SignScreen = ({navigation}) => {
  const { authenticated, login } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("clicou", { email, password })
    login(email, password)
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: "center", width: "100%", alignItems: "center"}}>
        <Image style={styles.image} resizeMode="contain" source={bgImg} />
        <Text>{String(authenticated)}</Text>
        <TextInput placeholder="email@email.com" value={email} onChangeText={setEmail} style={styles.input} />
        <TextInput secureTextEntry placeholder="senha" value={password} onChangeText={setPassword} style={styles.input} />
        <Text style={{margin: '2%'}}></Text>
        <Button title="Entrar" onPress={handleSubmit} />
        <br />
        <Button title="Quem Somos" onPress={()=>navigation.navigate('QuemSomos')}>Quem Somos</Button>
      </View>

      <Text>
        by <Text style={styles.appText}>AppBike</Text>
      </Text>
    </View>
  );
};
