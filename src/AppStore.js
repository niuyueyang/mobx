import {observable,computed,action,autorun,when,reaction,runInAction} from 'mobx';
class AppStore{
  @observable str='hello';
  @observable num=0;
  @observable bool=false;
  @observable arr=[];
  @observable obj={};
  @observable map=new Map();
  @computed get resultCom () {
    return store.str+' / '+store.num;
  }
  @action actionChange(str,num){
    store.str=str
    store.num=num;
    console.log(store.str,store.num)
  }
}
var store=new AppStore();

/*autorun(()=>{
  console.log(store.resultCom);
  /!*自动执行，在控制台上输出：
    hello / 0
    hello world / 0
    hello world / 1
  *!/
})
store.str='hello world';
store.num=1;*/

//when表示只有第一个条件满足，才执行后面代码，输出it is true【需要改变store中的变量】
/*when(()=>store.bool,()=>console.log('it is '+store.bool+'')); //it is true
store.bool=true;*/

//reaction标识以及输出如下所示【需要改变store中的变量】
/*reaction(()=>[store.str,store.num],arr=>console.log(arr.join(' / '))); //hello / 1           hello world / 1
store.num=1;
store.str='hello world';*/

//自动执行action
runInAction(()=>{
  store.str='hello world'
  store.num=1;
})

export default store;
