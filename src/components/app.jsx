import React, {Component} from "react";
import Calculate from './calculate';
import Display from './display';


var array = [];
class App extends Component {

    state = {
        button : [
            { id: 1,value: 1},
            { id: 2,value: 2},
            { id: 3,value: 3},
            { id: 4,value: 4},
            { id: 5,value: 5},
            { id: 6,value: 6},
            { id: 7,value: 7},
            { id: 8,value: 8},
            { id: 9,value: 9},
            { id: 10,value: '+'},
            { id: 11,value: '-'},
            { id: 12,value: '/'},
            { id: 13,value: '*'},
            { id: 14,value: '%'},
            { id: 15,value: '='},
            { id: 16,value: 'C'},
            { id: 17,value: 0}
        ],
        displayText : [0]
    }
    calculatorDimention = {
        height: 550,
        width: 300,
        paddingTop: 10,
        border: '2px solid'
    }
    padding = {
        paddingTop: 50
    }
    render() {
        return (
        <div className="container" style={this.padding}>
            <div className="jumbotron" style ={this.calculatorDimention}>
            <h4><b>Calculator</b></h4>
              <Calculate text={this.state.displayText} ></Calculate>
              <div style={this.padding}>
                    {this.state.button.map(item => (
                        <Display  key={item.id} id={item.id} value={item.value} buttonClick={this.calculate}></Display>
                    ))}
              </div>
              
              
          </div>
        </div>
        )
    } 

    calculate = (value) => {
        console.log(value);
        
        if(value === 'C') {
            array.length = 0;
        }
        else if(typeof(value) === "string" && value != 'C' && typeof(array[array.length-1]) === "string" ){
            array[array.length-1] = value;
        }
        else if(value === '=') {
           if(array.includes('+')){
            array.push(this.arithmaticOperation('+'));
           }
           else if(array.includes('-')){
            array.push(this.arithmaticOperation('-'));
           }
           else if(array.includes('/')){
            array.push(this.arithmaticOperation('/'));
           }
           else if(array.includes('%')){
            array.push(this.arithmaticOperation('%'));
           } else if(array.includes('*')){
            array.push(this.arithmaticOperation('*'));
           }
        }
        else {
            array.push(value);
        }
       

        this.setState({displayText : array});
    }

    arithmaticOperation(operator){
        var index = array.indexOf(operator);
        var array1 = array.slice(0, index);
        var array2 = array.slice(index+1);
        var num1 = this.arrayToNumberConvertor(array1);
        var num2 = this.arrayToNumberConvertor(array2);
        array.length = 0;
        switch (operator){
            case '+':
                return num1+num2;
                break;
            case '-':
                return num1-num2;
                break;
            case '*':
                return num1*num2;
                break;
            case '/':
                return num1/num2;
                break;
            case '%':
                return num1%num2;
                break;
        }
    }

    arrayToNumberConvertor(number) {
        var str = number.toString();
        str = str.replace(/,/g,'')
        return Number(str);
    }

}

export default App;