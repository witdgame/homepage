window.__require=function e(t,n,r){function a(o,c){if(!n[o]){if(!t[o]){var s=o.split("/");if(s=s[s.length-1],!t[s]){var u="function"==typeof __require&&__require;if(!c&&u)return u(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+o+"'")}}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){return a(t[o][1][e]||e)},f,f.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof __require&&__require,o=0;o<r.length;o++)a(r[o]);return a}({AIManager:[function(e,t,n){"use strict";cc._RF.push(t,"7d120AIrXdAI6e73UBA3Sbt","AIManager");var r=e("./Tools"),a=o(e("Config/ActionSequences")),i=o(e("../Config/UnitState"));function o(e){return e&&e.__esModule?e:{default:e}}var c=cc.Class({extends:cc.Component,properties:{_roleList:null},addRoleObj:function(e){null!=this._roleList&&void 0!=this._roleList||(this._roleList=[]);e.initConfig("2000"),this._roleList.push(e)},updateNewBehavior:function(e){if(!e.model.isAttackSequence&&(e.model.currentBehavior=this.getBehavior(e.model.behaviorConfig),console.log(e.model.currentBehavior),"attack"===e.model.currentBehavior.Name)){var t=a.default[(0,r.getRandomArray)(e.model.currentBehavior.SubSet.split("|"))[0]];t.AttackPID=""+t.AttackPID,e.model.attackSequence=t.AttackPID.split("|")}e.model.updateAction(e.model.currentBehavior),e.model.currentBehaviorTimer=Date.now(),e[e.model.currentBehavior.Name]()},getBehavior:function(e){for(var t=(0,r.getRandomNum)(0,99),n=0;n<e.length;n++){var a=e[n],i=e[n-1];if(t>=(i?i.Percent:0)&&t<a.Percent)return e[n]}return e[0]},update:function(e){for(var t in this._roleList){var n=this._roleList[t];n.model.currentState===i.default.NONE&&!1===n.model.ready2do&&n.model.sp>0&&(n.model.ready2do=!0,this.updateNewBehavior(n))}}});t.exports=c,cc._RF.pop()},{"../Config/UnitState":"UnitState","./Tools":"Tools","Config/ActionSequences":void 0}],ActionData:[function(e,t,n){"use strict";cc._RF.push(t,"28c7bA8+KBAPr0ZyPvxYWFO","ActionData");var r=[];r[1e3]={PID:1e3,Name:"\u51fa\u638c",BeforeAttack:1e3,AfterAttack:1e3,BaseDamage:2,StaminaSelf:30,StaminaOthers:30},r[1001]={PID:1001,Name:"\u51fa\u62f3",BeforeAttack:1e3,AfterAttack:1e3,BaseDamage:2,StaminaSelf:30,StaminaOthers:30},r[1002]={PID:1002,Name:"\u51fa\u817f",BeforeAttack:1500,AfterAttack:1500,BaseDamage:4,StaminaSelf:40,StaminaOthers:40},t.exports=r,cc._RF.pop()},{}],ActionSequences:[function(e,t,n){"use strict";cc._RF.push(t,"f04e4kgnMZNgoYHNwM37U1d","ActionSequences");var r=[];r[101]={PID:101,NAME:"\u5355\u4f53\u653b\u51fb",Stop:0,AttackPID:1e3},r[102]={PID:102,NAME:"\u62f3\u638c\u4e24\u8fde\u51fb",Stop:0,AttackPID:"1000|1001"},r[103]={PID:103,NAME:"\u4e09\u8fde\u51fb",Stop:0,AttackPID:"1000|1001|1002"},r[104]={PID:104,NAME:"\u56db\u8fde\u62f3",Stop:1,AttackPID:"1000|1000|1000|1000"},r[105]={PID:105,NAME:"\u4e94\u8fde\u817f",Stop:1,AttackPID:"1002|1002|1002|1002|1002"},t.exports=r,cc._RF.pop()},{}],Attack:[function(e,t,n){"use strict";cc._RF.push(t,"ef1beQCuA1Pd4z8n8W3QHQt","Attack");var r=[];r[101]={PID:"101",NAME:"\u5355\u4f53\u653b\u51fb",Stop:"0",AttackPID:"1000"},r[102]={PID:"102",NAME:"\u62f3\u638c\u4e24\u8fde\u51fb",Stop:"0",AttackPID:"1000|1001"},r[103]={PID:"103",NAME:"\u4e09\u8fde\u51fb",Stop:"0",AttackPID:"1000|1001|1002"},r[104]={PID:"104",NAME:"\u56db\u8fde\u62f3",Stop:"1",AttackPID:"1000|1000|1000|1000"},r[105]={PID:"105",NAME:"\u4e94\u8fde\u817f",Stop:"1",AttackPID:"1002|1002|1002|1002|1002"},t.exports=r,cc._RF.pop()},{}],Behavior_0:[function(e,t,n){"use strict";cc._RF.push(t,"c850fuFMABCG5RW4Nj78CbM","Behavior_0");var r=[];r[0]={PID:0,Name:"idle",SubSet:"",Duration:3e3,Percent:10,Stamina:""},r[1]={PID:1,Name:"attack",SubSet:"101|102|103",Duration:"",Percent:40,Stamina:""},r[2]={PID:2,Name:"defend",SubSet:"",Duration:1e3,Percent:50,Stamina:30},r[3]={PID:3,Name:"dodge",SubSet:"",Duration:1e3,Percent:60,Stamina:30},r[4]={PID:4,Name:"rebound",SubSet:"",Duration:1e3,Percent:70,Stamina:""},t.exports=r,cc._RF.pop()},{}],Behavior_1:[function(e,t,n){"use strict";cc._RF.push(t,"f5018dUGxND6Z4SGI6lcsiE","Behavior_1");var r=[];r[0]={PID:0,Name:"idle",SubSet:"",Duration:"",Stamina:""},r[1]={PID:1,Name:"attack",SubSet:101,Duration:"",Stamina:""},r[3]={PID:2,Name:"defend",SubSet:"",Duration:"",Stamina:""},r[4]={PID:3,Name:"dodge",SubSet:"",Duration:1e3,Stamina:30},r[5]={PID:4,Name:"rebound",SubSet:"",Duration:1e3,Stamina:30},r[11]={PID:5,Name:"resurgence",SubSet:"",Duration:"",Stamina:""},t.exports=r,cc._RF.pop()},{}],Game:[function(e,t,n){"use strict";cc._RF.push(t,"81914mclsxHSqBfxLm6hZSW","Game"),cc.Class({extends:cc.Component,properties:{aiNode:cc.Node,player:cc.Node,monster:cc.Node,defendButton:cc.Node},start:function(){var e=this;this.playerComponent=this.player.getComponent("Unit"),this.monsterComponent=this.monster.getComponent("Unit"),this.playerComponent.initConfig("9999"),this.playerComponent.setTarget(this.monsterComponent),this.monsterComponent.setTarget(this.playerComponent);var t=this.aiNode.getComponent("AIManager");setTimeout(function(){t.addRoleObj(e.monsterComponent)},3e3),this.timerAI=Date.now(),this.defendButton.on(cc.Node.EventType.TOUCH_START,this.defend.bind(this))},attack:function(){this.playerComponent.attack()},rebound:function(){this.playerComponent.rebound()},dodge:function(){this.playerComponent.dodge()},stopDefend:function(){this.playerComponent.stopDefend()},defend:function(){this.playerComponent.defend()}}),cc._RF.pop()},{}],PlayerModel:[function(e,t,n){"use strict";cc._RF.push(t,"dbaeaCOz85Kjqx/HUbiQRPH","PlayerModel"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(e("./UnitModel"));function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,r.default),t}();n.default=c,t.exports=n.default,cc._RF.pop()},{"./UnitModel":"UnitModel"}],Player:[function(e,t,n){"use strict";cc._RF.push(t,"d583c4/kZZIEqXq8iOpVxxk","Player");var r=i(e("Config/UnitState")),a=i(e("Config/ActionSequences"));function i(e){return e&&e.__esModule?e:{default:e}}var o=e("Unit");cc.Class({extends:o,properties:{},idle:function(){var e=this.model.behaviorConfig[r.default.IDLE];this.model.updateAction(e),this._super()},attack:function(){var e=this.model.behaviorConfig[r.default.ATTACK],t=a.default[e.SubSet];this.model.attackSequence=[t.AttackPID],this.model.updateAction(e),this._super()},rebound:function(){var e=this.model.behaviorConfig[r.default.REBOUND];this.model.updateAction(e),this._super()},dodge:function(){var e=this.model.behaviorConfig[r.default.DODGE];this.model.updateAction(e),this._super()},defend:function(){var e=this.model.behaviorConfig[r.default.DEFENSE];this.model.updateAction(e),this._super()}}),cc._RF.pop()},{"Config/ActionSequences":void 0,"Config/UnitState":void 0,Unit:"Unit"}],RoleData:[function(e,t,n){"use strict";cc._RF.push(t,"c2f47lHE2ZCKIRoRhfcZT2O","RoleData");var r=[];r[2e3]={PID:2e3,Name:"Boss",RoleType:0,BaseHP:150,CoefficientHP:1,Behavior:"Behavior_0",RestoreTime:500,StiffnessTime:2e3,RestoreSiffnessTime:500},r[9999]={PID:9999,Name:"Player",RoleType:9999,BaseHP:150,CoefficientHP:1,Behavior:"Behavior_1",RestoreTime:500,StiffnessTime:2e3,RestoreSiffnessTime:500},t.exports=r,cc._RF.pop()},{}],Tools:[function(e,t,n){"use strict";cc._RF.push(t,"7e5445qfeBI34mJMvFN09/O","Tools"),Object.defineProperty(n,"__esModule",{value:!0}),n.getRandomNum=function(e,t){return parseInt(Math.random()*(t-e+1)+e)},n.getRandomArray=function(e){for(var t=e.length,n=0;n<t;n++){var r=parseInt(t*Math.random()),a=e[n];e[n]=e[r],e[r]=a}return e},cc._RF.pop()},{}],UnitCommand:[function(e,t,n){"use strict";cc._RF.push(t,"cada87tMrdHN7dfLRsWXj/m","UnitCommand"),Object.defineProperty(n,"__esModule",{value:!0}),n.setTarget=function(e,t){e.currentTarget=t},n.none=a,n.idle=i,n.attack=function(e){if(e.currentState!==r.default.IDLE&&e.currentState!==r.default.NONE||e.sp<=0)return;o(e),e.sp-=e.currentStaminaSelf},n.rebound=function(e){if(e.currentState!==r.default.IDLE&&e.currentState!==r.default.NONE||e.sp<=0)return;e.currentState=r.default.REBOUND,e.currentTimer=Date.now(),e.sp-=e.currentStaminaSelf},n.defend=function(e){if(e.currentState!==r.default.IDLE&&e.currentState!==r.default.NONE||e.sp<=0)return;e.currentState=r.default.DEFENSE,e.currentTimer=Date.now()},n.stopDefend=function(e){if(e.currentState!==r.default.DEFENSE)return;i(e)},n.dodge=function(e){if(e.currentState!==r.default.IDLE&&e.currentState!==r.default.NONE||e.sp<=0)return;e.currentState=r.default.DODGE,e.currentTimer=Date.now(),e.sp-=e.currentStaminaSelf},n.reset=function(e){e.hp=e.staticConfig.BaseHP,e.sp=100,e.mp=0,e.currentState=r.default.NONE},n.tick=function(e){switch(e.currentState){case r.default.NONE:a(e);break;case r.default.IDLE:Date.now()-e.currentTimer>=e.staticConfig.RestoreTime&&(e.sp+=1,e.sp>100&&(e.sp=100)),""!==e.currentBehaviorDuration&&Date.now()-e.currentTimer>=e.currentBehaviorDuration&&a(e);break;case r.default.ATTACK:s(e),c(e);break;case r.default.CHARGE_ATTACK:break;case r.default.REBOUND:Date.now()-e.currentTimer>=e.currentBehaviorDuration?a(e):e.rebounding=1-(Date.now()-e.currentTimer)/e.currentBehaviorDuration;break;case r.default.DEFENSE:e.sp<=0&&a(e),""!==e.currentBehaviorDuration&&Date.now()-e.currentTimer>=e.currentBehaviorDuration&&a(e);break;case r.default.DODGE:Date.now()-e.currentTimer>=e.currentBehaviorDuration?a(e):e.dodging=1-(Date.now()-e.currentTimer)/e.currentBehaviorDuration;break;case r.default.BEFORE_ATTACK:Date.now()-e.currentTimer>=e.beforeAttackTimer?e.currentState=r.default.ATTACK:e.attacking=(Date.now()-e.currentTimer)/e.beforeAttackTimer;break;case r.default.AFTER_ATTACK:Date.now()-e.currentTimer>=e.afterAttackTimer?a(e):e.attacking=1-(Date.now()-e.currentTimer)/e.afterAttackTimer;break;case r.default.GET_HURT:e.hp-=e.currentTarget.currentDamage,e.hp>0?a(e):u(e);break;case r.default.STIFFNESS:Date.now()-e.currentTimer>=e.staticConfig.StiffnessTime?a(e):(e.sitffness=1-(Date.now()-e.currentTimer)/e.staticConfig.StiffnessTime,e.isRestoreSitffness&&Date.now()-e.currentTimer>=e.staticConfig.RestoreSiffnessTime&&(e.sp+=1,e.sp>100&&(e.sp=100)));break;case r.default.DEAD:e.isDead=!0;break;case r.default.RESURGENCE:}};var r=function(e){return e&&e.__esModule?e:{default:e}}(e("config/UnitState"));function a(e){e.currentState=r.default.NONE,e.sp<=0?(e.currentState=r.default.STIFFNESS,e.isRestoreSitffness=!0,e.currentTimer=Date.now()):(e.isRestoreSitffness||(e.currentTimer=Date.now()),9999===e.staticConfig.PID?i(e):e.ready2do=!1,e.isRestoreSitffness=!1),e.attacking=0,e.dodging=0,e.rebounding=0,e.sitffness=0}function i(e){e.currentState!==r.default.IDLE&&(e.currentState=r.default.IDLE,e.currentTimer=Date.now())}function o(e){e.currentState=r.default.BEFORE_ATTACK,e.currentTimer=Date.now()}function c(e){e.currentState!==r.default.STIFFNESS?(e.currentState=r.default.AFTER_ATTACK,e.currentTimer=Date.now()):e.attacking=0}function s(e){e.currentTarget.currentState===r.default.DODGE||(e.currentTarget.currentState===r.default.DEFENSE?(e.currentTarget.sp-=e.currentStaminaOthers,e.currentTarget.sp<=0&&i(e)):e.currentTarget.currentState===r.default.REBOUND?(e.currentState=r.default.STIFFNESS,e.currentTimer=Date.now()):(e.currentTarget.currentState=r.default.GET_HURT,e.mp+=e.currentTarget.currentDamage))}function u(e){e.currentState=r.default.DEAD,e.attacking=0,e.dodging=0,e.rebounding=0,e.sitffness=0}cc._RF.pop()},{"config/UnitState":void 0}],UnitModel:[function(e,t,n){"use strict";cc._RF.push(t,"60799phGbZPk51Db8qGHiz4","UnitModel"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=o(e("config/UnitState")),i=o(e("AI/ActionData"));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(){c(this,e),this.hp=100,this.sp=100,this.mp=0,this.beforeAttackTimer=0,this.afterAttackTimer=0,this.attacking=0,this.dodging=0,this.rebounding=0,this.sitffness=0,this.isDead=!1,this.staticConfig=null,this.behaviorConfig=null,this.currentBehavior=null,this.currentBehaviorDuration=0,this.isAttackSequence=!1,this.attackSequence=[],this.currentStaminaSelf=0,this.currentStaminaOthers=0,this.currentDamage=0,this.currentState=a.default.NONE,this.currentTarget=null,this.isRestoreSitffness=!1,this.currentBehaviorTimer=Date.now(),this.ready2do=!1}return r(e,[{key:"updateAction",value:function(e){if("attack"===e.Name){console.log(this.attackSequence);var t=this.attackSequence.shift();this.isAttackSequence=this.attackSequence.length>0;var n=i.default[t];this.beforeAttackTimer=n.BeforeAttack,this.afterAttackTimer=n.AfterAttack,this.currentDamage=n.BaseDamage,this.currentStaminaSelf=n.StaminaSelf,this.currentStaminaOthers=n.StaminaOthers}else this.currentBehaviorDuration=e.Duration,this.currentStaminaSelf=e.Stamina}}]),e}();n.default=s,t.exports=n.default,cc._RF.pop()},{"AI/ActionData":void 0,"config/UnitState":void 0}],UnitState:[function(e,t,n){"use strict";cc._RF.push(t,"e4405IVm5RJVYGrDy7nAxOJ","UnitState"),Object.defineProperty(n,"__esModule",{value:!0}),n.default={NONE:-1,IDLE:0,ATTACK:1,CHARGE_ATTACK:2,DEFENSE:3,DODGE:4,REBOUND:5,BEFORE_ATTACK:6,AFTER_ATTACK:7,GET_HURT:8,STIFFNESS:9,DEAD:10,RESURGENCE:11,GROUP_ATTACK:20},t.exports=n.default,cc._RF.pop()},{}],Unit:[function(e,t,n){"use strict";cc._RF.push(t,"ed111gzpolKsYexG5dQrBGI","Unit");var r=o(e("../Models/UnitModel")),a=e("../Commands/UnitCommand"),i=o(e("AI/RoleData"));function o(e){return e&&e.__esModule?e:{default:e}}cc.Class({extends:cc.Component,properties:{hpBar:cc.ProgressBar,spBar:cc.ProgressBar,mpBar:cc.ProgressBar,attackingBar:cc.ProgressBar,dodgingBar:cc.ProgressBar,reboundingBar:cc.ProgressBar,sitffnessBar:cc.ProgressBar,gameOverLabel:cc.Node},onLoad:function(){this.model=new r.default,this.isInit=!1},initConfig:function(t){var n=i.default[t];this.model.staticConfig=n,this.model.behaviorConfig=e(n.Behavior),(0,a.reset)(this.model),this.isInit=!0},start:function(){this.updateState(),this.currentTimer=Date.now(),this.gameOverLabel.active=!1},updateState:function(){this.model.staticConfig&&(this.hpBar.progress=this.model.hp/this.model.staticConfig.BaseHP,this.spBar.progress=this.model.sp/100,this.mpBar.progress=this.model.mp/100,this.attackingBar.progress=this.model.attacking,this.dodgingBar.progress=this.model.dodging,this.reboundingBar.progress=this.model.rebounding,this.sitffnessBar.progress=this.model.sitffness,this.gameOverLabel.active=this.model.isDead)},setTarget:function(e){(0,a.setTarget)(this.model,e.model)},idle:function(){(0,a.idle)(this.model)},attack:function(){(0,a.attack)(this.model)},rebound:function(){(0,a.rebound)(this.model)},dodge:function(){(0,a.dodge)(this.model)},defend:function(){(0,a.defend)(this.model)},stopDefend:function(){(0,a.stopDefend)(this.model)},update:function(e){!this.model.isDead&&this.isInit&&((0,a.tick)(this.model),this.updateState())}}),cc._RF.pop()},{"../Commands/UnitCommand":"UnitCommand","../Models/UnitModel":"UnitModel","AI/RoleData":void 0}],"use_v2.1.x_cc.Action":[function(e,t,n){"use strict";cc._RF.push(t,"e8e2aEYDQBBeYyVoGFCDaHl","use_v2.1.x_cc.Action"),cc.macro.ROTATE_ACTION_CCW=!0,cc._RF.pop()},{}]},{},["AIManager","Tools","UnitCommand","ActionData","ActionSequences","Attack","Behavior_0","Behavior_1","RoleData","UnitState","Game","PlayerModel","UnitModel","Player","Unit","use_v2.1.x_cc.Action"]);