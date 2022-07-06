import React, { useState, useContext } from "react";
import { View, Image, Button, TextInput, Text } from "react-native";
//import { MyTextInput } from '../components/MyTextInput.js'
//import { MyButton } from '../components/MyButton'
import bgImg from "../../images/logobike.png";
import { styles } from "./styles.js";
import { ButtonStyle, ButtonStyle1 } from "../../components/ButtonStyle/ButtonStyle";
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
        <Text style={styles.marca}>BikeLovers</Text>
        {/* <Text>{String(authenticated)}</Text> */}
        <TextInput placeholder="email@email.com" placeholderTextColor={"white"} value={email} onChangeText={setEmail} style={styles.input} />
        <TextInput secureTextEntry placeholder="senha" placeholderTextColor={"white"} value={password} onChangeText={setPassword} style={styles.input} />
        <Text style={{margin: '2%'}}></Text>
        <View style={styles.viewStyle}>
        <ButtonStyle labelButton="ENTRAR" onpress={handleSubmit}/>
        {/* <View style={{marginTop:'3%', backgroundColor: 'yellow', width: '100%', height: '14%'}}> */}
          <ButtonStyle1 labelButton="Quem Somos" onpress={()=>navigation.navigate('QuemSomos')}/>        
          {/* <Button title="Quem Somos" onPress={()=>navigation.navigate('QuemSomos')}>Quem Somos</Button> */}
        {/* </View> */}
        </View>
      </View>

      <Text style={{marginTop: '13%'}}>
        <Text style={{color: "#ffffff", fontSize: 13}}>by </Text>
        <Text style={styles.appText}>BikeLovers.com</Text>
      </Text>
    </View>
  );
};
