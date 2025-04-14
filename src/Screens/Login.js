import { Text, View, StyleSheet, Image } from 'react-native';
import Input from '../Components/Input';
import Botao from '../Components/Botao';


export default function Login() {

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}>
       
      </View>
     <Image
          style={{ height: 130, width: 400, widthleft:10, widthright: 10}}
          source={require('../Assets/Lalisabe.jpg')}
        />
      <View
      
        style={{
          padding: 60,
          margin: 20,
          backgroundColor: 'pink',
          borderRadius: 20,
          borderColor: 'black',
          borderWidth: 2
      }}>

        <View style={{ margin: 6 }}>
          <Input 
          cor="white" 
          nome="Digite o seu usuário" 
        />
        </View>

        <View style={{ margin: 6, borderRadius: 6 }}>
          <Input 
          cor="white" 
          nome="Digite a sua senha" 
        />
        </View>

        <View style={{ margin: 5 }}>
          <Botao
            nome="Entrar"
            onPress={() => alert('Bem-vindo(a)!')}
            cor="black"
          />
        </View>
        <View style={{ margin: 5 }}>
          <Botao
            nome="Cadastre-se"
            onPress={() => alert('Crie o seu cadastro!')}
            cor="black"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 48,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
