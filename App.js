import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image 
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'Play',
      ultimo: null
    };

    //variável do time do relógio
    this.timer = null;

    this.go = this.go.bind(this);
    this.zerar = this.zerar.bind(this);
  }

    go(){

      if(this.timer != null){
        //aqui vai parar o timer
        clearInterval(this.timer);
        this.timer = null;
        this.setState({botao: 'Play'})
      }else{
        //Começa girar o timer
        this.timer = setInterval(() => {
          this.setState({numero: this.state.numero + 0.1})
        }, 100);

        this.setState({botao: 'STOP'})
      }
    }

    zerar(){
      if(this.timer != null){
        //Aqui vai parar o timer
        clearInterval(this.timer);
        this.timer = null;
      }
      this.setState({
        ultimo: this.state.numero,
        numero: 0,
        botao: 'Play'
      })

    }

  render(){
    return (
      <View style={styles.container}>
        <Image 
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer} >{this.state.numero.toFixed(1)}</Text>
        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn} onPress={this.go}>
            <Text style={styles.btnText}>
              {this.state.botao}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.zerar}>
            <Text style={styles.btnText}>
              Zerar
            </Text>
          </TouchableOpacity>

        </View>
          <View style={styles.areaUltimo}>
            <Text style={styles.textoCorrida}>
              {this.state.ultimo > 0 ? 'Último tempo: ' + this.state.ultimo.toFixed(2) + 's' : '' }
            </Text>
          </View>
          <Text style={styles.copyright}>
            © 2024 By Mardonier
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef',
  },
  timer:{
    marginTop: -170,
    color: '#FFF',
    fontSize: 60,
    fontWeight: 'bold',
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 80,
    height: 40
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 18
  },
  
  btnText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltimo:{
    marginTop: 30,
  },
  textoCorrida:{
    fontStyle: 'italic',
    color: '#FFF',
    fontSize: 20,
  },
  copyright:{
    fontStyle: 'italic',
    color: '#FFF',
    fontSize: 12,
    marginTop: 100
  }

});

export default App;
