import React, {Component} from 'react'
import {View, Text,StyleSheet, StatusBar} from 'react-native'

import TextInputCstm from '../component/TextInputCstm'
import ButtonCstm from '../component/ButtonCstm'

class screen extends Component {
 state = {
     valueInput : {
         one : null,
         two : null,
         three : null
     },
     valueCheckBox : {
         checkOne : false,
         checkTwo : false,
         checkThree: false
     },
     result : null
 }

 handleChangeValueInput = (valueNumber, valueInput) => {
     if(valueNumber == 1){
         this.setState( { valueInput : {...this.state.valueInput, one : parseInt(valueInput) } } )
     } else if(valueNumber == 2){
         this.setState( { valueInput : {...this.state.valueInput, two : parseInt(valueInput) } } )         
     } else{
         this.setState( { valueInput : {...this.state.valueInput, three : parseInt(valueInput) } } )
     }
 }
 handleAction = (option) => {
     const {one,two,three} = this.state.valueInput
     const{checkOne,checkTwo,checkThree} =  this.state.valueCheckBox
     let addition, subtraction, multiplication, division = 0
     let result = null

     if(one && two && three && checkOne && checkTwo && checkThree){
         addition = one + two + three
         subtraction = one - two -three
         multiplication = one * two * three
         division = one / two / three

     }else if(one && three && checkOne && checkThree){

        addition = first + three
        subtraction = first - three
        multiplication = first * three
        division = first / three
  
      }else {
  
        alert('Masukan 3 Input Kemudian Ceklis Tombol Kotak')
  
      }
  
      if(option == 1){
  
        this.setState({ result: addition })
  
      }else if(option == 2){
  
        this.setState({ result: subtraction })
  
      }else if(option == 3){
  
        this.setState({ result: multiplication })
  
      }else if(option == 4){
  
        this.setState({ result: division })
      }
 }

 handleChangeValueCheckBox = (option) => {

    const { checkOne, checkTwo, checkThree } = this.state.valueCheckBox

    if(option == 1){
      this.setState({
        valueCheckBox: {...this.state.valueCheckBox, checkOne: !checkOne}
      })
    }else if(option == 2){
      this.setState({
        valueCheckBox: {...this.state.valueCheckBox, checkTwo: !checkTwo}
      })
    }else if(option == 3){
      this.setState({
        valueCheckBox: {...this.state.valueCheckBox, checkThree: !checkThree}
      })
    }

  }

  render() {

      return (
          <View style={styles.container}>
              <StatusBar
              backgroundColor="black" barStyle="light-content"/>
              
              <Text style={styles.title}>Calculator</Text>

              <TextInputCstm
                onChange={(value) => this.handleChangeValueInput( 1, value)}
                onCheck={() => this.handleChangeValueCheckBox(1)}
                valueCheck={this.state.valueCheckBox.checkOne}
              />

             <TextInputCstm
                onChange={(value) => this.handleChangeValueInput( 2, value)}
                onCheck={() => this.handleChangeValueCheckBox(2)}
                valueCheck={this.state.valueCheckBox.checkTwo}
              />

             <TextInputCstm
                onChange={(value) => this.handleChangeValueInput( 3, value)}
                onCheck={() => this.handleChangeValueCheckBox(3)}
                valueCheck={this.state.valueCheckBox.checkThree}
              /> 

            <View style={styles.cardButton}>
                <ButtonCstm
                    text="+"
                    onPress={() => this.handleAction(1)}
                />

                <ButtonCstm
                    text="-"
                    onPress={() => this.handleAction(2)}
                />

                <ButtonCstm
                    text="x"
                    onPress={() => this.handleAction(3)}
                />

                <ButtonCstm
                    text="/"
                    onPress={() => this.handleAction(4)}
                />
            </View>




            <View style={styles.cardResult}>
                <Text style={styles.result}>Hasil : </Text>
                <Text style={styles.result2}>{this.state.result}</Text>
            </View>

        
            <Text style={styles.cpr}>Dev by: Taufiek Maulana</Text>

          </View>
      )
  }

}

export default screen;

const styles = StyleSheet.create({
    container: {
        flex :1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
      },
      cardButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomWidth: .6,
        borderBottomColor: 'black',
      },
      cardResult : {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      result: {
        marginTop: 20,
        fontSize: 20,
      },
      result2: {
        marginTop: 20,
        fontSize: 20,
        color: 'red',
        fontSize: 30
      },
      cpr:{
        paddingTop:50,
        fontSize: 12,
        color:'grey'

      }

})