/*npm install babel-plugin-transform-decorators-legacy  --save-dev
npm install  @babel/plugin-proposal-decorators --save-dev
然后npm run eject  弹出个性化配置*/

//在package.json里面的babel配置
/*"plugins": [
  ["@babel/plugin-proposal-decorators", { "legacy": true }],
  ["@babel/plugin-proposal-class-properties", { "loose" : true }]
]*/


import {observable, action, useStrict} from 'mobx';
class AppStore{
  @observable str='hello';
  @observable num=0;
  @observable bool=true;
  @observable arr=[];
  @observable obj={};
  @observable map=new Map();
}
export default AppStore;
