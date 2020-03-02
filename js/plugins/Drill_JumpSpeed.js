//=============================================================================
// Drill_JumpSpeed.js
//=============================================================================

/*:
 * @plugindesc [v1.3]        物体 - 跳跃速度
 * @author Drill_up，うぇるとる
 * 
 * 
 * @help  
 * =============================================================================
 * +++ Drill_Jump +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以单独控制事件或者玩家跳跃时的高度、速度、时间。
 * 
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 插件能单独使用，并且可以作用于其他插件。
 * 作用于：
 *   - Drill_EventItemGenerator 物体 - 可拾取物生成器
 *     如果使用了该插件，目标插件生成的所有道具弹跳的高度速度可以控制。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   作用于事件、玩家。
 * 2.速度和时间只能指定一个，分别对应不同的插件指令与注释。
 * 3.开超慢速度时，你会发现跳跃的行走图是一直走动的，你可以通过设置
 *   MOG_CharPoses角色姿势的跳跃行走图，使其看起来"飘动"，而不是"走动"。
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 在控制了跳跃的事件，在事件注释中，必须含有下面的关键字设置：
 * （注意：冒号两边都有一个空格。）
 *
 * 事件注释：=>跳跃设置 : 高度时间 : A : B
 * 事件注释：=>跳跃设置 : 高度速度 : A : C
 *
 * 参数A：跳跃高度
 *        跳跃的距离对于高度有较大影响。
 *        正数表示在距离影响的基础上增加高度，负数表示减去。
 * 参数B：跳跃时间
 *        指定跳跃到目的地消耗的时间。单位帧。（1秒60帧）
 * 参数C：跳跃速度
 *        指定跳跃的速度。
 *
 * 示例：
 * =>跳跃设置 : 高度时间 : 0 : 60
 * （指定事件的任何跳跃，高度默认，跳跃只用1秒的时间）
 * =>跳跃设置 : 高度速度 : 0 : 1.5
 * （指定事件的任何跳跃，高度默认，跳跃的速度为1.5）
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令设置事件的跳跃能力。（切换地图后失效）
 * （注意：冒号两边都有一个空格。）
 *
 * 插件指令（高度+时间）：>跳跃设置 : D : 高度时间 : A : B
 * 插件指令（高度+速度）：>跳跃设置 : D : 高度速度 : A : C
 * 插件指令（角色）：     >角色跳跃设置 : 高度时间 : A : B
 * 插件指令（角色）：     >角色跳跃设置 : 高度速度 : A : C
 *
 * 参数D：事件的ID
 *        控制指定的事件的跳跃速度。
 *
 * 示例：
 * 插件指令：>跳跃设置 : 1 : 高度时间 : 0 : 60
 * （id为1的事件，高度默认，跳跃只用1秒的时间）
 * 插件指令：>角色跳跃设置 : 高度速度 : 0 : 1.5
 * （玩家的跳跃，高度默认，速度为1.5）
 * 插件指令：>角色跳跃设置 : 高度速度 : 1 : 1
 * （玩家的跳跃，高度+1，速度默认）
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 规范修改了插件指令设置。
 * [v1.2]
 * 修改了注释设置，插件指令规范用">"，注释规范用"=>"。
 * [v1.3]
 * 优化了内部结构。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		JS（Jump_Speed）
//		临时全局变量	无
//		临时局部变量	this._drill_JS_xxx（Game_Event中存储，Game_CharacterBase判断使用）
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	Game_CharacterBase.prototype.updateJump（半重写）
//						Game_CharacterBase.prototype.jump（半重写）
//
//插件记录：
//		★大体框架与功能如下：
//			跳跃速度：
//				->跳跃公式
//				->高度、速度、时间
//
//		★必要注意事项：
//			暂无
//
//		★其它说明细节：
//			1.该插件写的时间比较早，不确定有什么问题会出现。
//			  跳跃公式需要重新专研。
//
//		★存在的问题：
//			暂无
//
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_JumpSpeed = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_JumpSpeed');

//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_JS_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_JS_pluginCommand.call(this,command, args);
    this.drill_JS_pluginCommand(command, args);
};
Game_Interpreter.prototype.drill_JS_pluginCommand = function(command, args) {
	var event_id = -1;	
	if (command === ">跳跃设置")  {
		if( args.length == 8 ){
			event_id = Number(args[1]);
			var type = String(args[3]);
			if(type == "高度时间"){
				var h = Number(args[5]);
				var t = Number(args[7]);
				var s = null;
			}
			if(type == "高度速度"){
				var h = Number(args[5]);
				var t = null;
				var s = Number(args[7]);
			}
		}
	};
	if (event_id > 0) {
		$gameMap.events().forEach(function(event) {
		if (event.eventId() === event_id) {
			event._drill_JS_time = t;
			event._drill_JS_speed = s;
			event._drill_JS_height = h;
		};
		}, this);	
	};
	if (command === ">角色跳跃设置")  {
		if( args.length == 6 ){
			var type = String(args[1]);
			if(type == "高度时间"){
				var h = Number(args[3]);
				var t = Number(args[5]);
				var s = null;
			}
			if(type == "高度速度"){
				var h = Number(args[3]);
				var t = null;
				var s = Number(args[5]);
			}
			$gamePlayer._drill_JS_time = t;
			$gamePlayer._drill_JS_speed = s;
			$gamePlayer._drill_JS_height = h;
			for (var i = 0; i < $gamePlayer.followers()._data.length; i++) {
				var follower = $gamePlayer.followers()._data[i];
				follower._drill_JS_time = t;
				follower._drill_JS_speed = s;
				follower._drill_JS_height = h;
			};	
		}
	};
	
}

//=============================================================================
// ** Game_Event 获取注释
//=============================================================================
var _drill_JS_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_JS_setupPage.call(this);
    this.drill_JS_setJumpSpeed();
};
Game_Event.prototype.drill_JS_setJumpSpeed = function() {
	this._drill_JS_time = null;
	this._drill_JS_speed = null;
	this._drill_JS_height = 0;
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var args = l.parameters[0].split(': ');
			if (args[0].toLowerCase() == "=>跳跃设置 "){
				if (args[1].toLowerCase() == "高度时间 "){
					this._drill_JS_height = Number(args[2]);
					this._drill_JS_time = Number(args[3]);
				}
				if (args[1].toLowerCase() == "高度速度 "){
					this._drill_JS_height = Number(args[2]);
					this._drill_JS_speed = Number(args[3]);
				}
			};  
		};
	}, this);};
};

//=============================================================================
// ** Game_CharacterBase 跳跃设置
//=============================================================================
var _drill_JS_updateJump = Game_CharacterBase.prototype.updateJump;
Game_CharacterBase.prototype.updateJump = function() {
	if( this._drill_JS_time != null || this._drill_JS_speed != null ){
		if( this._drill_JS_time != null ){
			this._drill_JS_speed = this._jumpPeak * 2 / this._drill_JS_time;
		}
		this._jumpCount -= this._drill_JS_speed;
		this._ox = this._realX;
		this._oy = this._realY;
		this._realX = (this._ox * this._jumpCount + this._x) / (this._jumpCount + 1.0);
		this._realY = (this._oy * this._jumpCount + this._y) / (this._jumpCount + 1.0);
		this._realX = (this._realX - this._ox) * this._drill_JS_speed + this._ox;
		this._realY = (this._realY - this._oy) * this._drill_JS_speed + this._oy;
		this.refreshBushDepth();
		if (this._jumpCount === 0) {
			this._realX = this._x = $gameMap.roundX(this._x);
			this._realY = this._y = $gameMap.roundY(this._y);
		}
	}else{
		_drill_JS_updateJump.call(this);
	}
};

var _drill_JS_jump = Game_CharacterBase.prototype.jump;
Game_CharacterBase.prototype.jump = function(xPlus, yPlus) {
	if( this._drill_JS_height != null ){
		if (Math.abs(xPlus) > Math.abs(yPlus)) {
			if (xPlus !== 0) {
				this.setDirection(xPlus < 0 ? 4 : 6);
			}
		} else {
			if (yPlus !== 0) {
				this.setDirection(yPlus < 0 ? 8 : 2);
			}
		}
		this._x += xPlus;
		this._y += yPlus;
		var distance = Math.round(Math.sqrt(xPlus * xPlus + yPlus * yPlus));
		this._jumpPeak = 10 + distance - this._moveSpeed + this._drill_JS_height;
		this._jumpCount = this._jumpPeak * 2;
		this.resetStopCount();
		this.straighten();
	}else{
		_drill_JS_jump.call(this,xPlus, yPlus);
	}
};


