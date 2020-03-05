window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AIManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d120AIrXdAI6e73UBA3Sbt", "AIManager");
    "use strict";
    var _Tools = require("./Tools");
    var _ActionSequences = require("../Config/ActionSequences");
    var _ActionSequences2 = _interopRequireDefault(_ActionSequences);
    var _UnitState = require("../Config/UnitState");
    var _UnitState2 = _interopRequireDefault(_UnitState);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var AIManager = cc.Class({
      extends: cc.Component,
      properties: {
        _roleList: null
      },
      addRoleObj: function addRoleObj(_role) {
        null != this._roleList && void 0 != this._roleList || (this._roleList = []);
        var ROLE_ID = "2000";
        _role.initConfig(ROLE_ID);
        this._roleList.push(_role);
      },
      updateNewBehavior: function updateNewBehavior(_role) {
        if (!_role.model.isAttackSequence) {
          _role.model.currentBehavior = this.getBehavior(_role.model.behaviorConfig);
          console.log(_role.model.currentBehavior);
          if ("attack" === _role.model.currentBehavior.Name) {
            var currentAttackSequence = _ActionSequences2.default[(0, _Tools.getRandomArray)(_role.model.currentBehavior.SubSet.split("|"))[0]];
            currentAttackSequence.AttackPID = "" + currentAttackSequence.AttackPID;
            _role.model.attackSequence = currentAttackSequence.AttackPID.split("|");
          }
        }
        _role.model.updateAction(_role.model.currentBehavior);
        _role.model.currentBehaviorTimer = Date.now();
        _role[_role.model.currentBehavior.Name]();
      },
      getBehavior: function getBehavior(_behaviorData) {
        var maxPercent = _behaviorData[_behaviorData.length - 1].Percent - 1;
        var randomNum = (0, _Tools.getRandomNum)(0, maxPercent);
        for (var i = 0; i < _behaviorData.length; i++) {
          var data = _behaviorData[i];
          var beforData = _behaviorData[i - 1];
          var beforPercent = beforData ? beforData.Percent : 0;
          if (randomNum >= beforPercent && randomNum < data.Percent) return _behaviorData[i];
        }
        return _behaviorData[0];
      },
      update: function update(dt) {
        for (var i in this._roleList) {
          var role = this._roleList[i];
          if (role.model.currentState === _UnitState2.default.NONE && false === role.model.ready2do && role.model.sp > 0) {
            role.model.ready2do = true;
            this.updateNewBehavior(role);
          }
        }
      }
    });
    module.exports = AIManager;
    cc._RF.pop();
  }, {
    "../Config/ActionSequences": "ActionSequences",
    "../Config/UnitState": "UnitState",
    "./Tools": "Tools"
  } ],
  ActionData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "28c7bA8+KBAPr0ZyPvxYWFO", "ActionData");
    "use strict";
    var data = [];
    data["1000"] = {
      PID: 1e3,
      Name: "\u51fa\u638c",
      BeforeAttack: 1e3,
      AfterAttack: 1e3,
      BaseDamage: 2,
      StaminaSelf: 30,
      StaminaOthers: 30
    };
    data["1001"] = {
      PID: 1001,
      Name: "\u51fa\u62f3",
      BeforeAttack: 1e3,
      AfterAttack: 1e3,
      BaseDamage: 2,
      StaminaSelf: 30,
      StaminaOthers: 30
    };
    data["1002"] = {
      PID: 1002,
      Name: "\u51fa\u817f",
      BeforeAttack: 1500,
      AfterAttack: 1500,
      BaseDamage: 4,
      StaminaSelf: 40,
      StaminaOthers: 40
    };
    module.exports = data;
    cc._RF.pop();
  }, {} ],
  ActionSequences: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f04e4kgnMZNgoYHNwM37U1d", "ActionSequences");
    "use strict";
    var data = [];
    data["101"] = {
      PID: 101,
      NAME: "\u5355\u4f53\u653b\u51fb",
      Stop: 0,
      AttackPID: 1e3
    };
    data["102"] = {
      PID: 102,
      NAME: "\u62f3\u638c\u4e24\u8fde\u51fb",
      Stop: 0,
      AttackPID: "1000|1001"
    };
    data["103"] = {
      PID: 103,
      NAME: "\u4e09\u8fde\u51fb",
      Stop: 0,
      AttackPID: "1000|1001|1002"
    };
    data["104"] = {
      PID: 104,
      NAME: "\u56db\u8fde\u62f3",
      Stop: 1,
      AttackPID: "1000|1000|1000|1000"
    };
    data["105"] = {
      PID: 105,
      NAME: "\u4e94\u8fde\u817f",
      Stop: 1,
      AttackPID: "1002|1002|1002|1002|1002"
    };
    module.exports = data;
    cc._RF.pop();
  }, {} ],
  Attack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ef1beQCuA1Pd4z8n8W3QHQt", "Attack");
    "use strict";
    var data = [];
    data["101"] = {
      PID: "101",
      NAME: "\u5355\u4f53\u653b\u51fb",
      Stop: "0",
      AttackPID: "1000"
    };
    data["102"] = {
      PID: "102",
      NAME: "\u62f3\u638c\u4e24\u8fde\u51fb",
      Stop: "0",
      AttackPID: "1000|1001"
    };
    data["103"] = {
      PID: "103",
      NAME: "\u4e09\u8fde\u51fb",
      Stop: "0",
      AttackPID: "1000|1001|1002"
    };
    data["104"] = {
      PID: "104",
      NAME: "\u56db\u8fde\u62f3",
      Stop: "1",
      AttackPID: "1000|1000|1000|1000"
    };
    data["105"] = {
      PID: "105",
      NAME: "\u4e94\u8fde\u817f",
      Stop: "1",
      AttackPID: "1002|1002|1002|1002|1002"
    };
    module.exports = data;
    cc._RF.pop();
  }, {} ],
  Behavior_0: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c850fuFMABCG5RW4Nj78CbM", "Behavior_0");
    "use strict";
    var data = [];
    data["0"] = {
      PID: 0,
      Name: "idle",
      SubSet: "",
      Duration: 3e3,
      Percent: 10,
      Stamina: ""
    };
    data["1"] = {
      PID: 1,
      Name: "attack",
      SubSet: "101|102|103",
      Duration: "",
      Percent: 40,
      Stamina: ""
    };
    data["2"] = {
      PID: 2,
      Name: "defend",
      SubSet: "",
      Duration: 1e3,
      Percent: 50,
      Stamina: 30
    };
    data["3"] = {
      PID: 3,
      Name: "dodge",
      SubSet: "",
      Duration: 1e3,
      Percent: 60,
      Stamina: 30
    };
    data["4"] = {
      PID: 4,
      Name: "rebound",
      SubSet: "",
      Duration: 1e3,
      Percent: 70,
      Stamina: ""
    };
    module.exports = data;
    cc._RF.pop();
  }, {} ],
  Behavior_1: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5018dUGxND6Z4SGI6lcsiE", "Behavior_1");
    "use strict";
    var data = [];
    data["0"] = {
      PID: 0,
      Name: "idle",
      SubSet: "",
      Duration: "",
      Stamina: ""
    };
    data["1"] = {
      PID: 1,
      Name: "attack",
      SubSet: 101,
      Duration: "",
      Stamina: ""
    };
    data["3"] = {
      PID: 2,
      Name: "defend",
      SubSet: "",
      Duration: "",
      Stamina: ""
    };
    data["4"] = {
      PID: 3,
      Name: "dodge",
      SubSet: "",
      Duration: 1e3,
      Stamina: 30
    };
    data["5"] = {
      PID: 4,
      Name: "rebound",
      SubSet: "",
      Duration: 1e3,
      Stamina: 30
    };
    data["11"] = {
      PID: 5,
      Name: "resurgence",
      SubSet: "",
      Duration: "",
      Stamina: ""
    };
    module.exports = data;
    cc._RF.pop();
  }, {} ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "81914mclsxHSqBfxLm6hZSW", "Game");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        aiNode: cc.Node,
        player: cc.Node,
        monster: cc.Node,
        defendButton: cc.Node
      },
      start: function start() {
        var _this = this;
        this.playerComponent = this.player.getComponent("Unit");
        this.monsterComponent = this.monster.getComponent("Unit");
        this.playerComponent.initConfig("9999");
        this.playerComponent.setTarget(this.monsterComponent);
        this.monsterComponent.setTarget(this.playerComponent);
        var aiManager = this.aiNode.getComponent("AIManager");
        setTimeout(function() {
          aiManager.addRoleObj(_this.monsterComponent);
        }, 3e3);
        this.timerAI = Date.now();
        this.defendButton.on(cc.Node.EventType.TOUCH_START, this.defend.bind(this));
      },
      attack: function attack() {
        this.playerComponent.attack();
      },
      rebound: function rebound() {
        this.playerComponent.rebound();
      },
      dodge: function dodge() {
        this.playerComponent.dodge();
      },
      stopDefend: function stopDefend() {
        this.playerComponent.stopDefend();
      },
      defend: function defend() {
        this.playerComponent.defend();
      }
    });
    cc._RF.pop();
  }, {} ],
  PlayerModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dbaeaCOz85Kjqx/HUbiQRPH", "PlayerModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _UnitModel2 = require("./UnitModel");
    var _UnitModel3 = _interopRequireDefault(_UnitModel2);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !call || "object" !== typeof call && "function" !== typeof call ? self : call;
    }
    function _inherits(subClass, superClass) {
      if ("function" !== typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
    }
    var PlayerModel = function(_UnitModel) {
      _inherits(PlayerModel, _UnitModel);
      function PlayerModel() {
        _classCallCheck(this, PlayerModel);
        return _possibleConstructorReturn(this, (PlayerModel.__proto__ || Object.getPrototypeOf(PlayerModel)).apply(this, arguments));
      }
      return PlayerModel;
    }(_UnitModel3.default);
    exports.default = PlayerModel;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "./UnitModel": "UnitModel"
  } ],
  Player: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d583c4/kZZIEqXq8iOpVxxk", "Player");
    "use strict";
    var _UnitState = require("Config/UnitState");
    var _UnitState2 = _interopRequireDefault(_UnitState);
    var _ActionSequences = require("Config/ActionSequences");
    var _ActionSequences2 = _interopRequireDefault(_ActionSequences);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Unit = require("Unit");
    cc.Class({
      extends: Unit,
      properties: {},
      idle: function idle() {
        var currentBehavior = this.model.behaviorConfig[_UnitState2.default.IDLE];
        this.model.updateAction(currentBehavior);
        this._super();
      },
      attack: function attack() {
        var currentBehavior = this.model.behaviorConfig[_UnitState2.default.ATTACK];
        var currentAttackSequence = _ActionSequences2.default[currentBehavior.SubSet];
        this.model.attackSequence = [ currentAttackSequence.AttackPID ];
        this.model.updateAction(currentBehavior);
        this._super();
      },
      rebound: function rebound() {
        var currentBehavior = this.model.behaviorConfig[_UnitState2.default.REBOUND];
        this.model.updateAction(currentBehavior);
        this._super();
      },
      dodge: function dodge() {
        var currentBehavior = this.model.behaviorConfig[_UnitState2.default.DODGE];
        this.model.updateAction(currentBehavior);
        this._super();
      },
      defend: function defend() {
        var currentBehavior = this.model.behaviorConfig[_UnitState2.default.DEFENSE];
        this.model.updateAction(currentBehavior);
        this._super();
      }
    });
    cc._RF.pop();
  }, {
    "Config/ActionSequences": void 0,
    "Config/UnitState": void 0,
    Unit: "Unit"
  } ],
  RoleData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c2f47lHE2ZCKIRoRhfcZT2O", "RoleData");
    "use strict";
    var data = [];
    data["2000"] = {
      PID: 2e3,
      Name: "Boss",
      RoleType: 0,
      BaseHP: 150,
      CoefficientHP: 1,
      Behavior: "Behavior_0",
      RestoreTime: 500,
      StiffnessTime: 2e3,
      RestoreSiffnessTime: 500
    };
    data["9999"] = {
      PID: 9999,
      Name: "Player",
      RoleType: 9999,
      BaseHP: 150,
      CoefficientHP: 1,
      Behavior: "Behavior_1",
      RestoreTime: 500,
      StiffnessTime: 2e3,
      RestoreSiffnessTime: 500
    };
    module.exports = data;
    cc._RF.pop();
  }, {} ],
  Tools: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e5445qfeBI34mJMvFN09/O", "Tools");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRandomNum = getRandomNum;
    exports.getRandomArray = getRandomArray;
    function getRandomNum(_min, _max) {
      return parseInt(Math.random() * (_max - _min + 1) + _min);
    }
    function getRandomArray(array) {
      var arrLen = array.length;
      for (var i = 0; i < arrLen; i++) {
        var rand = parseInt(arrLen * Math.random());
        var temp = array[i];
        array[i] = array[rand];
        array[rand] = temp;
      }
      return array;
    }
    cc._RF.pop();
  }, {} ],
  UnitCommand: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cada87tMrdHN7dfLRsWXj/m", "UnitCommand");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setTarget = setTarget;
    exports.none = none;
    exports.idle = idle;
    exports.attack = attack;
    exports.rebound = rebound;
    exports.defend = defend;
    exports.stopDefend = stopDefend;
    exports.dodge = dodge;
    exports.reset = reset;
    exports.tick = tick;
    var _UnitState = require("../Config/UnitState");
    var _UnitState2 = _interopRequireDefault(_UnitState);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function setTarget(_unitModel, _targetModel) {
      _unitModel.currentTarget = _targetModel;
    }
    function none(_unitModel) {
      _unitModel.currentState = _UnitState2.default.NONE;
      if (_unitModel.sp <= 0) {
        _unitModel.currentState = _UnitState2.default.STIFFNESS;
        _unitModel.isRestoreSitffness = true;
        _unitModel.currentTimer = Date.now();
      } else {
        _unitModel.isRestoreSitffness || (_unitModel.currentTimer = Date.now());
        9999 === _unitModel.staticConfig.PID ? idle(_unitModel) : _unitModel.ready2do = false;
        _unitModel.isRestoreSitffness = false;
      }
      _unitModel.attacking = 0;
      _unitModel.dodging = 0;
      _unitModel.rebounding = 0;
      _unitModel.sitffness = 0;
    }
    function idle(_unitModel) {
      if (_unitModel.currentState === _UnitState2.default.IDLE) return;
      _unitModel.currentState = _UnitState2.default.IDLE;
      _unitModel.currentTimer = Date.now();
    }
    function attack(_unitModel) {
      if (_unitModel.currentState !== _UnitState2.default.IDLE && _unitModel.currentState !== _UnitState2.default.NONE || _unitModel.sp <= 0) return;
      beforeAttack(_unitModel);
      _unitModel.sp -= _unitModel.currentStaminaSelf;
    }
    function rebound(_unitModel) {
      if (_unitModel.currentState !== _UnitState2.default.IDLE && _unitModel.currentState !== _UnitState2.default.NONE || _unitModel.sp <= 0) return;
      _unitModel.currentState = _UnitState2.default.REBOUND;
      _unitModel.currentTimer = Date.now();
      _unitModel.sp -= _unitModel.currentStaminaSelf;
    }
    function beforeAttack(_unitModel) {
      _unitModel.currentState = _UnitState2.default.BEFORE_ATTACK;
      _unitModel.currentTimer = Date.now();
    }
    function afterAttack(_unitModel) {
      if (_unitModel.currentState === _UnitState2.default.STIFFNESS) {
        _unitModel.attacking = 0;
        return;
      }
      _unitModel.currentState = _UnitState2.default.AFTER_ATTACK;
      _unitModel.currentTimer = Date.now();
    }
    function defend(_unitModel) {
      if (_unitModel.currentState !== _UnitState2.default.IDLE && _unitModel.currentState !== _UnitState2.default.NONE || _unitModel.sp <= 0) return;
      _unitModel.currentState = _UnitState2.default.DEFENSE;
      _unitModel.currentTimer = Date.now();
    }
    function stopDefend(_unitModel) {
      if (_unitModel.currentState !== _UnitState2.default.DEFENSE) return;
      idle(_unitModel);
    }
    function dodge(_unitModel) {
      if (_unitModel.currentState !== _UnitState2.default.IDLE && _unitModel.currentState !== _UnitState2.default.NONE || _unitModel.sp <= 0) return;
      _unitModel.currentState = _UnitState2.default.DODGE;
      _unitModel.currentTimer = Date.now();
      _unitModel.sp -= _unitModel.currentStaminaSelf;
    }
    function getHurt(_unitModel) {
      if (_unitModel.currentTarget.currentState === _UnitState2.default.DODGE) ; else if (_unitModel.currentTarget.currentState === _UnitState2.default.DEFENSE) {
        _unitModel.currentTarget.sp -= _unitModel.currentStaminaOthers;
        _unitModel.currentTarget.sp <= 0 && idle(_unitModel);
      } else if (_unitModel.currentTarget.currentState === _UnitState2.default.REBOUND) {
        _unitModel.currentState = _UnitState2.default.STIFFNESS;
        _unitModel.currentTimer = Date.now();
      } else {
        _unitModel.currentTarget.currentState = _UnitState2.default.GET_HURT;
        _unitModel.mp += _unitModel.currentTarget.currentDamage;
      }
    }
    function dead(_unitModel) {
      _unitModel.currentState = _UnitState2.default.DEAD;
      _unitModel.attacking = 0;
      _unitModel.dodging = 0;
      _unitModel.rebounding = 0;
      _unitModel.sitffness = 0;
    }
    function reset(_unitModel) {
      _unitModel.hp = _unitModel.staticConfig.BaseHP;
      _unitModel.sp = 100;
      _unitModel.mp = 0;
      _unitModel.currentState = _UnitState2.default.NONE;
    }
    function tick(_unitModel) {
      switch (_unitModel.currentState) {
       case _UnitState2.default.NONE:
        none(_unitModel);
        break;

       case _UnitState2.default.IDLE:
        if (Date.now() - _unitModel.currentTimer >= _unitModel.staticConfig.RestoreTime) {
          _unitModel.sp += 1;
          _unitModel.sp > 100 && (_unitModel.sp = 100);
        }
        "" !== _unitModel.currentBehaviorDuration && Date.now() - _unitModel.currentTimer >= _unitModel.currentBehaviorDuration && none(_unitModel);
        break;

       case _UnitState2.default.ATTACK:
        getHurt(_unitModel);
        afterAttack(_unitModel);
        break;

       case _UnitState2.default.CHARGE_ATTACK:
        break;

       case _UnitState2.default.REBOUND:
        Date.now() - _unitModel.currentTimer >= _unitModel.currentBehaviorDuration ? none(_unitModel) : _unitModel.rebounding = 1 - (Date.now() - _unitModel.currentTimer) / _unitModel.currentBehaviorDuration;
        break;

       case _UnitState2.default.DEFENSE:
        _unitModel.sp <= 0 && none(_unitModel);
        "" !== _unitModel.currentBehaviorDuration && Date.now() - _unitModel.currentTimer >= _unitModel.currentBehaviorDuration && none(_unitModel);
        break;

       case _UnitState2.default.DODGE:
        Date.now() - _unitModel.currentTimer >= _unitModel.currentBehaviorDuration ? none(_unitModel) : _unitModel.dodging = 1 - (Date.now() - _unitModel.currentTimer) / _unitModel.currentBehaviorDuration;
        break;

       case _UnitState2.default.BEFORE_ATTACK:
        Date.now() - _unitModel.currentTimer >= _unitModel.beforeAttackTimer ? _unitModel.currentState = _UnitState2.default.ATTACK : _unitModel.attacking = (Date.now() - _unitModel.currentTimer) / _unitModel.beforeAttackTimer;
        break;

       case _UnitState2.default.AFTER_ATTACK:
        Date.now() - _unitModel.currentTimer >= _unitModel.afterAttackTimer ? none(_unitModel) : _unitModel.attacking = 1 - (Date.now() - _unitModel.currentTimer) / _unitModel.afterAttackTimer;
        break;

       case _UnitState2.default.GET_HURT:
        _unitModel.hp -= _unitModel.currentTarget.currentDamage;
        _unitModel.hp > 0 ? none(_unitModel) : dead(_unitModel);
        break;

       case _UnitState2.default.STIFFNESS:
        if (Date.now() - _unitModel.currentTimer >= _unitModel.staticConfig.StiffnessTime) none(_unitModel); else {
          _unitModel.sitffness = 1 - (Date.now() - _unitModel.currentTimer) / _unitModel.staticConfig.StiffnessTime;
          if (_unitModel.isRestoreSitffness && Date.now() - _unitModel.currentTimer >= _unitModel.staticConfig.RestoreSiffnessTime) {
            _unitModel.sp += 1;
            _unitModel.sp > 100 && (_unitModel.sp = 100);
          }
        }
        break;

       case _UnitState2.default.DEAD:
        _unitModel.isDead = true;
        break;

       case _UnitState2.default.RESURGENCE:
      }
    }
    cc._RF.pop();
  }, {
    "../Config/UnitState": "UnitState"
  } ],
  UnitModel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60799phGbZPk51Db8qGHiz4", "UnitModel");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          "value" in descriptor && (descriptor.writable = true);
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        protoProps && defineProperties(Constructor.prototype, protoProps);
        staticProps && defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _UnitState = require("config/UnitState");
    var _UnitState2 = _interopRequireDefault(_UnitState);
    var _ActionData = require("AI/ActionData");
    var _ActionData2 = _interopRequireDefault(_ActionData);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var UnitModel = function() {
      function UnitModel() {
        _classCallCheck(this, UnitModel);
        this.hp = 100;
        this.sp = 100;
        this.mp = 0;
        this.beforeAttackTimer = 0;
        this.afterAttackTimer = 0;
        this.attacking = 0;
        this.dodging = 0;
        this.rebounding = 0;
        this.sitffness = 0;
        this.isDead = false;
        this.staticConfig = null;
        this.behaviorConfig = null;
        this.currentBehavior = null;
        this.currentBehaviorDuration = 0;
        this.isAttackSequence = false;
        this.attackSequence = [];
        this.currentStaminaSelf = 0;
        this.currentStaminaOthers = 0;
        this.currentDamage = 0;
        this.currentState = _UnitState2.default.NONE;
        this.currentTarget = null;
        this.isRestoreSitffness = false;
        this.currentBehaviorTimer = Date.now();
        this.ready2do = false;
      }
      _createClass(UnitModel, [ {
        key: "updateAction",
        value: function updateAction(_currentBehavior) {
          if ("attack" === _currentBehavior.Name) {
            console.log(this.attackSequence);
            var currentActionID = this.attackSequence.shift();
            this.isAttackSequence = this.attackSequence.length > 0;
            var currentAttackData = _ActionData2.default[currentActionID];
            this.beforeAttackTimer = currentAttackData.BeforeAttack;
            this.afterAttackTimer = currentAttackData.AfterAttack;
            this.currentDamage = currentAttackData.BaseDamage;
            this.currentStaminaSelf = currentAttackData.StaminaSelf;
            this.currentStaminaOthers = currentAttackData.StaminaOthers;
          } else {
            this.currentBehaviorDuration = _currentBehavior.Duration;
            this.currentStaminaSelf = _currentBehavior.Stamina;
          }
        }
      } ]);
      return UnitModel;
    }();
    exports.default = UnitModel;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {
    "AI/ActionData": void 0,
    "config/UnitState": void 0
  } ],
  UnitState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4405IVm5RJVYGrDy7nAxOJ", "UnitState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = {
      NONE: -1,
      IDLE: 0,
      ATTACK: 1,
      CHARGE_ATTACK: 2,
      DEFENSE: 3,
      DODGE: 4,
      REBOUND: 5,
      BEFORE_ATTACK: 6,
      AFTER_ATTACK: 7,
      GET_HURT: 8,
      STIFFNESS: 9,
      DEAD: 10,
      RESURGENCE: 11,
      GROUP_ATTACK: 20
    };
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  Unit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed111gzpolKsYexG5dQrBGI", "Unit");
    "use strict";
    var _UnitModel = require("../Models/UnitModel");
    var _UnitModel2 = _interopRequireDefault(_UnitModel);
    var _UnitCommand = require("../Commands/UnitCommand");
    var _RoleData = require("AI/RoleData");
    var _RoleData2 = _interopRequireDefault(_RoleData);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    cc.Class({
      extends: cc.Component,
      properties: {
        hpBar: cc.ProgressBar,
        spBar: cc.ProgressBar,
        mpBar: cc.ProgressBar,
        attackingBar: cc.ProgressBar,
        dodgingBar: cc.ProgressBar,
        reboundingBar: cc.ProgressBar,
        sitffnessBar: cc.ProgressBar,
        gameOverLabel: cc.Node
      },
      onLoad: function onLoad() {
        this.model = new _UnitModel2.default();
        this.isInit = false;
      },
      initConfig: function initConfig(_id) {
        var staticConfig = _RoleData2.default[_id];
        this.model.staticConfig = staticConfig;
        this.model.behaviorConfig = require(staticConfig.Behavior);
        (0, _UnitCommand.reset)(this.model);
        this.isInit = true;
      },
      start: function start() {
        this.updateState();
        this.currentTimer = Date.now();
        this.gameOverLabel.active = false;
      },
      updateState: function updateState() {
        if (!this.model.staticConfig) return;
        this.hpBar.progress = this.model.hp / this.model.staticConfig.BaseHP;
        this.spBar.progress = this.model.sp / 100;
        this.mpBar.progress = this.model.mp / 100;
        this.attackingBar.progress = this.model.attacking;
        this.dodgingBar.progress = this.model.dodging;
        this.reboundingBar.progress = this.model.rebounding;
        this.sitffnessBar.progress = this.model.sitffness;
        this.gameOverLabel.active = this.model.isDead;
      },
      setTarget: function setTarget(_unitComponent) {
        (0, _UnitCommand.setTarget)(this.model, _unitComponent.model);
      },
      idle: function idle() {
        (0, _UnitCommand.idle)(this.model);
      },
      attack: function attack() {
        (0, _UnitCommand.attack)(this.model);
      },
      rebound: function rebound() {
        (0, _UnitCommand.rebound)(this.model);
      },
      dodge: function dodge() {
        (0, _UnitCommand.dodge)(this.model);
      },
      defend: function defend() {
        (0, _UnitCommand.defend)(this.model);
      },
      stopDefend: function stopDefend() {
        (0, _UnitCommand.stopDefend)(this.model);
      },
      update: function update(dt) {
        if (this.model.isDead || !this.isInit) return;
        (0, _UnitCommand.tick)(this.model);
        this.updateState();
      }
    });
    cc._RF.pop();
  }, {
    "../Commands/UnitCommand": "UnitCommand",
    "../Models/UnitModel": "UnitModel",
    "AI/RoleData": void 0
  } ],
  "use_v2.1.x_cc.Action": [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e8e2aEYDQBBeYyVoGFCDaHl", "use_v2.1.x_cc.Action");
    "use strict";
    cc.macro.ROTATE_ACTION_CCW = true;
    cc._RF.pop();
  }, {} ]
}, {}, [ "AIManager", "Tools", "UnitCommand", "ActionData", "ActionSequences", "Attack", "Behavior_0", "Behavior_1", "RoleData", "UnitState", "Game", "PlayerModel", "UnitModel", "Player", "Unit", "use_v2.1.x_cc.Action" ]);