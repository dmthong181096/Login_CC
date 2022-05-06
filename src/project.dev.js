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
  Register: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "05bf9v+Me9EzL3fLePVDhNS", "Register");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        _userName: "",
        _email: "",
        _password: "",
        _confirmPassword: "",
        users: [],
        progressBar: cc.ProgressBar,
        textSuccess: cc.RichText,
        user: cc.Prefab,
        content: cc.Component
      },
      get userName() {
        return this._userName;
      },
      set userName(value) {
        return this._userName = value;
      },
      get email() {
        return this._email;
      },
      set email(value) {
        return this._email = value;
      },
      get password() {
        return this._password;
      },
      set password(value) {
        return this._password = value;
      },
      get confirmPassword() {
        return this._confirmPassword;
      },
      set confirmPassword(value) {
        return this._confirmPassword = value;
      },
      getInputUserName: function getInputUserName(value) {
        this.userName = value.string;
      },
      getInputEmail: function getInputEmail(value) {
        this.email = value.string;
      },
      getInputPassword: function getInputPassword(value) {
        this.password = value.string;
      },
      getInputConfirmPassword: function getInputConfirmPassword(value) {
        this.confirmPassword = value.string;
      },
      validateInput: function validateInput() {
        var isError = false;
        var alertUserName = this.node.getChildByName("Regis").getChildByName("AlertUserName");
        var alertEmail = this.node.getChildByName("Regis").getChildByName("AlertEmail");
        var alertPassword = this.node.getChildByName("Regis").getChildByName("AlertPassword");
        var alertConfirmPassword = this.node.getChildByName("Regis").getChildByName("AlertConfirmPassword");
        if (null == this.userName || "" == this.userName) {
          alertUserName.active = true;
          alertUserName.getComponent(cc.Label).string = "Not Null!";
          isError = true;
        } else alertUserName.active = false;
        if (null == this.email || "" == this.email) {
          alertEmail.active = true;
          alertEmail.getComponent(cc.Label).string = "Not Null!";
          isError = true;
        } else alertEmail.active = false;
        if (null == this.password || "" == this.password) {
          alertPassword.active = true;
          alertPassword.getComponent(cc.Label).string = "Not Null!";
          isError = true;
        } else alertPassword.active = false;
        if (null == this.confirmPassword || "" == this.confirmPassword) {
          alertConfirmPassword.active = true;
          alertConfirmPassword.getComponent(cc.Label).string = "Not Null!";
          isError = true;
        } else alertConfirmPassword.active = false;
        if (this.password != this.confirmPassword) {
          alertConfirmPassword.active = true;
          alertConfirmPassword.getComponent(cc.Label).string = "Not Match!";
          isError = true;
        } else alertConfirmPassword.active = false;
        return isError;
      },
      effectLoad: function effectLoad() {
        var _this = this;
        this.progressBar.progress = 0;
        var actions = [ cc.scaleBy(1.5, 1), cc.callFunc(function() {
          return _this.node.getChildByName("InfoUser").active = true;
        }), cc.callFunc(function() {
          return _this.node.getChildByName("TextSuccessSignUp").active = false;
        }) ];
        this.textSuccess.node.runAction(cc.sequence(actions));
        this.createUser();
      },
      createUser: function createUser() {
        var user = cc.instantiate(this.user);
        user.parent = this.content.node;
        user.getChildByName("Name").getComponent(cc.Label).string = this.users[this.users.length - 1];
        user.x = 0;
        user.y = 60 * -(this.users.length - 1);
      },
      back: function back() {
        this.node.getChildByName("Regis").active = true;
        this.node.getChildByName("InfoUser").active = false;
        this.node.getChildByName("TextSuccessSignUp").active = false;
      },
      move: function move() {
        this.node.getChildByName("Regis").active = false;
        this.node.getChildByName("InfoUser").active = false;
        this.node.getChildByName("TextSuccessSignUp").active = true;
        this.effectLoad();
      },
      clickSubmit: function clickSubmit() {
        if (!this.validateInput()) {
          console.log(this.userName);
          console.log(this.email);
          console.log(this.password);
          console.log(this.confirmPassword);
          this.users.push(this.userName);
          this.move();
        }
      },
      start: function start() {},
      update: function update(dt) {
        this.progressBar.progress += .01;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "Register" ]);