import React, { Component } from 'react';
import {observable} from 'mobx';
import {observer,inject} from 'mobx-react';
@inject("store") @observer

class App extends Component {
  //对象，数组，map可以利用observable转化为可观察对象
  arrObservable(){
    var arr=[1,2,3,4,5];
    var result=observable(arr);
    console.log(result[0])     //1
  }
  objObservable(){
    var obj={a:1,b:2};
    var result=observable(obj);
    console.log(result.a)
  }

  //Boolean，String，Number需要利用observable.box作为转化
  StrObservable(){
    var str=observable.box('hello');
    var num=observable.box(1);
    var bool=observable.box(true);
    console.log(str.get(),num.get(),bool.get())

    //set重新赋值
    str.set('world');
    num.set(0);
    bool.set(false);
    console.log(str.get(),num.get(),bool.get())
  }
  decoObservable(store){
    console.log(store.resultCom)
    //console.log(store)
    // var store=new store();
    // console.log(store)
  }

  render() {
    const { store } = this.props;
    return (
      <div className="App">
          <button onClick={()=>{this.arrObservable();}}>mobx处理数组</button>
          <br/><br/>
          <button onClick={()=>{this.objObservable();}}>mobx处理对象</button>
          <br/><br/>
          <button onClick={()=>{this.StrObservable();}}>mobx处理String,Number,Boolean</button>
          <br/><br/>
          <button onClick={()=>{this.decoObservable(store);}}>mobx修饰器</button>
          <br/><br/>
          <button onClick={()=>{store.actionChange('hello world',1)}}>mobx action</button>
      </div>
    );
  }
}

export default App;
