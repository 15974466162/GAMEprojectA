//=============================================================================
// Drill_Jump.js
//=============================================================================

/*:
 * @plugindesc [v1.3]        互动 - 跳跃能力
 * @author Drill_up
 * 
 * @param 跳跃音效
 * @desc 跳跃时，播放的音效。
 * @require 1
 * @dir audio/se/
 * @type file
 * @default Jump1
 *
 * @param 跳跃延迟
 * @type number
 * @min 0
 * @desc 跳跃后，下次跳跃需要等待的时间，单位帧。（1秒60帧）
 * @default 60
 *
 * @param 跳跃距离
 * @type number
 * @min 0
 * @desc 跳跃到目的地的距离长度，单位图块。0表示只能原地跳跃。
 * @default 2
 * 
 * @param 跳跃前的位置 X
 * @type variable
 * @desc 获取跳跃前的x位置，单位图块。（设置返回原地用）
 * @default 0
 * 
 * @param 跳跃前的位置 Y
 * @type variable
 * @desc 获取跳跃前的y位置，单位图块。（设置返回原地用）
 * @default 0
 * 
 * @param ----悬崖----
 * @desc 
 * 
 * @param 悬崖高度1
 * @parent ----悬崖----
 * @type number[]
 * @min 0
 * @max 255
 * @desc 填入区域id，会被视作高度1，即绘图的R选项中的区域，未填的区域默认高度0。
 * @default ["1"]
 * 
 * @param 悬崖高度2
 * @parent ----悬崖----
 * @type number[]
 * @min 0
 * @max 255
 * @desc 填入区域id，会被视作高度2，即绘图的R选项中的区域，未填的区域默认高度0。
 * @default ["2"]
 * 
 * @param 悬崖高度3
 * @parent ----悬崖----
 * @type number[]
 * @min 0
 * @max 255
 * @desc 填入区域id，会被视作高度3，即绘图的R选项中的区域，未填的区域默认高度0。
 * @default ["3"]
 * 
 * @param 悬崖高度4
 * @parent ----悬崖----
 * @type number[]
 * @min 0
 * @max 255
 * @desc 填入区域id，会被视作高度4，即绘图的R选项中的区域，未填的区域默认高度0。
 * @default 
 * 
 * @param 悬崖高度5
 * @parent ----悬崖----
 * @type number[]
 * @min 0
 * @max 255
 * @desc 填入区域id，会被视作高度5，即绘图的R选项中的区域，未填的区域默认高度0。
 * @default 
 * 
 * @param 跳跃高度差
 * @parent ----悬崖----
 * @type variable
 * @desc 跳跃时产生的高度差将会被赋值到指定的变量。（你需要用计时器实时判断这个变量的变化情况）
 * @default 0
 * 
 * @param 禁止跳跃区
 * @type number[]
 * @min 0
 * @max 255
 * @desc 填入区域id，会被视作禁止跳跃区，玩家不能在该区域跳跃，并且悬崖高度为最高，无法翻越。
 * @default 
 * 
 * @help  
 * =============================================================================
 * +++ Drill_Jump +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得地图的角色具有跳跃能力。
 * 更多详细的介绍，去看看"关于跳跃能力.docx"。
 *
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 该插件可以单独使用，也可以通过其他插件添加更多功能。
 * 被扩展：
 *   - Drill_OperateHud 互动 - 鼠标辅助操作面板
 *     该插件提供鼠标、触碰辅助控制跳跃的支持。
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   只对玩家有效。玩家跳跃可以触发事件。
 * 2.你有必要在一些特殊障碍中直接设置最高悬崖高度，比如河流，天花板等。
 *   万一玩家发现可以跳河或者跳天花板就麻烦了。
 * 3.载具不能跳跃。
 * 4.跳跃过程中可以扔花盆。
 * 5.跳跃可以跳过低谷，但是不能翻越 悬崖高墙 和 禁跳区域。
 * 6.跳跃会触发扫过的事件的独立开关，但是事件执行的先后顺序是由事件自
 *   己的id决定的。
 * 
 * -----------------------------------------------------------------------------
 * ----控制操作 - 键盘、手柄
 * 键盘 - "Q"键跳跃
 * 手柄 - "LB"键跳跃
 *
 * -----------------------------------------------------------------------------
 * ----控制操作 - 鼠标、触屏
 * 鼠标 - 鼠标双击跳跃，或者长按，在不能移动的地方自动跳跃。
 * 触屏 - 双触碰跳跃，或者长触碰，在不能移动的地方自动跳跃。
 *
 * 单独可以支持，也可以通过 Drill_OperateHud 鼠标辅助操作面板 获得辅助支持。
 * 
 * -----------------------------------------------------------------------------
 * ----关于 悬崖高度 与 禁止跳跃区
 * 1.如果你设置了山丘的高度。从高的地方可以跳到低的高度，反之不能跳。
 * 2.跳跃高度设置了变量后，你可以根据高度设计玩家是否摔死或者返回原地。
 * 3.如果你在悬崖12345都设置了同一个区域，那么按最低的悬崖算。
 * 4.禁止跳跃区为最高悬崖高度，无法翻越，可以作为天花板墙壁。
 * 5.你可以在禁止跳跃区中行走，但是无法跳跃。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令设置调整角色的跳跃能力：
 * （注意，冒号左右有两个空格）
 *
 * 插件指令： >角色跳跃开启
 * 插件指令： >角色跳跃关闭
 * 插件指令： >角色跳跃 : 设置距离 : 2
 * 插件指令： >角色跳跃 : 设置延迟 : 60
 *
 * 距离和延迟最小为0，0距离只能原地跳，0延迟可以无限跳。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定 - 跳跃触发开关
 * 如果你需要设置某些必须跳跃才能触发的开关，使用下面事件注释：
 * （注意，冒号左右有两个空格）
 * 
 * 事件注释：=>角色跳跃 : 跳跃触发开关 : 1
 * 事件注释：=>角色跳跃 : 跳跃触发独立开关 : A
 *
 * 注意，必须是角色跳跃时，掠过的事件，才会被触发。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 修复了跳跃识别障碍物的一些bug。
 * [v1.2]
 * 修正了跳跃能力控制，添加了禁止跳跃区域以及跳跃触发开关功能。
 * [v1.3]
 * 修改了插件分类。
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		jump（不需要简称）
//		临时全局变量	DrillUp.g_jump_xxx
//		临时局部变量	this._drill_jump_xxx
//		存储数据变量	$gameSystem._drill_jump_xxx
//		全局存储变量	无
//		覆盖重写方法	无
//
//		工作类型		持续执行
//		时间复杂度		o(n^2)
//		性能测试因素	镜像管理层
//		性能测试消耗	50事件 62.38ms
//		最坏情况		未知
//
//插件记录：
//		★大体框架与功能如下：
//			跳跃能力：
//				->跳跃距离判定
//				->无法翻越高墙
//				->悬崖高度
//				->禁跳区域
//				->跳跃触发事件
//
//		★必要注意事项：
//			1.互动之间如果有较复杂的接口，最好遵循下面的格式：
//				drill_canXxxx_Normal		面板-静态限制条件（无提示音，面板不收回）
//				drill_canXxxx_Conditional	面板-特殊限制条件（有提示音，面板收回）
//				drill_doXxxx				面板-执行操作
//				drill_isXxxxControl			按键-按下即可操作
//			  注意，面板和按键只做自己的事情，不额外调用插件的其它函数、变量。
//			  除了以上接口，其他函数放心改名/改动。
//
//		★其它说明细节：
//			1.该插件根据跳跃能力添加了多重判断，会出现好几个函数分别往下降层级描述的复合情况。
//			2.跳跃流程： 跳跃基本条件 >> 跳跃按钮触发 >>（ 禁止跳跃情况 >> 跳跃位置识别）
//			  跳跃基本条件相当于 显示与隐藏，未达到条件，跳跃触发无效。
//			  禁止跳跃情况相当于 可用与不可用，禁止时触发跳跃，就会发出错误声音。
//
//		★存在的问题：
//			暂无

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_Jump = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_Jump');

	DrillUp.g_jump_se = String(DrillUp.parameters['跳跃音效']);
	DrillUp.g_jump_delay = Number(DrillUp.parameters['跳跃延迟'] || 60);
	DrillUp.g_jump_distance = Number(DrillUp.parameters['跳跃距离'] || 2);
	DrillUp.g_jump_org_x = Number(DrillUp.parameters['跳跃前的位置 X'] || 0);
	DrillUp.g_jump_org_y = Number(DrillUp.parameters['跳跃前的位置 Y'] || 0);
	DrillUp.g_jump_diff_var = Number(DrillUp.parameters['跳跃高度差'] || 0);
	DrillUp.g_jump_mouse = false;
	DrillUp.g_jump_cliff_1 = [];
	DrillUp.g_jump_cliff_2 = [];
	DrillUp.g_jump_cliff_3 = [];
	DrillUp.g_jump_cliff_4 = [];
	DrillUp.g_jump_cliff_5 = [];
	DrillUp.g_jump_forbidden_area = [];
	if( DrillUp.parameters['悬崖高度1'] != "" ){
		DrillUp.g_jump_cliff_1 = JSON.parse(DrillUp.parameters['悬崖高度1']);
	}else{
		DrillUp.g_jump_cliff_1 = [] ;
	}
	if( DrillUp.parameters['悬崖高度2'] != "" ){
		DrillUp.g_jump_cliff_2 = JSON.parse(DrillUp.parameters['悬崖高度2']);
	}else{
		DrillUp.g_jump_cliff_2 = [] ;
	}
	if( DrillUp.parameters['悬崖高度3'] != "" ){
		DrillUp.g_jump_cliff_3 = JSON.parse(DrillUp.parameters['悬崖高度3']);
	}else{
		DrillUp.g_jump_cliff_3 = [] ;
	}
	if( DrillUp.parameters['悬崖高度4'] != "" ){
		DrillUp.g_jump_cliff_4 = JSON.parse(DrillUp.parameters['悬崖高度4']);
	}else{
		DrillUp.g_jump_cliff_4 = [] ;
	}
	if( DrillUp.parameters['悬崖高度5'] != "" ){
		DrillUp.g_jump_cliff_5 = JSON.parse(DrillUp.parameters['悬崖高度5']);
	}else{
		DrillUp.g_jump_cliff_5 = [] ;
	}
	if( DrillUp.parameters['禁止跳跃区'] != undefined  && DrillUp.parameters['禁止跳跃区'] != "" ){
		DrillUp.g_jump_forbidden_area = JSON.parse(DrillUp.parameters['禁止跳跃区']);
	}else{
		DrillUp.g_jump_forbidden_area = [] ;
	}

//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_jump_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_jump_pluginCommand.call(this,command, args);
	if (command === ">角色跳跃开启")  { $gameSystem._drill_jump_enable = true;};
	if (command === ">角色跳跃关闭")  { $gameSystem._drill_jump_enable = false;};
	if (command === '>角色跳跃') {
		if(args.length == 4){
			var temp1 = Number(args[3]);
			var type = String(args[1]);
			if( type == "设置距离" ){
				$gameSystem._drill_jump_distance = Math.max(temp1,0);
			}
			if( type == "设置延迟" ){
				$gameSystem._drill_jump_delay = Math.max(temp1,0);
			}
		}
	}
	return true;
};

//=============================================================================
// ** 鼠标长按触发跳跃
//=============================================================================
//==============================
// * 鼠标点击初始化
//==============================
var _drill_jump_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
    _drill_jump_temp_initialize.call(this);
	this._drill_jump_dest_push = true;
	this._drill_jump_dest_count = 0;
	this._drill_jump_dest_timer = 0;
};
//==============================
// * 鼠标点击 位置锁
//==============================
var _drill_jump_setDestination = Game_Temp.prototype.setDestination;
Game_Temp.prototype.setDestination = function(x, y) {
	_drill_jump_setDestination.call(this,x,y);
	if(this._drill_jump_dest_push){				//移动到位置-锁 （被取消移动，或者没有移动，只会被捕获一次）
		this._drill_jump_dest_push = false;
	}
};
//==============================
// * 鼠标点击 位置锁
//==============================
var _drill_jump_clearDestination = Game_Temp.prototype.clearDestination;
Game_Temp.prototype.clearDestination = function() {
	_drill_jump_clearDestination.call(this);
	if(!this._drill_jump_dest_push){
		this._drill_jump_dest_push = true;
		this._drill_jump_dest_count += 1;
		this._drill_jump_dest_timer = 0;
		if( this._drill_jump_dest_count >= 2 ){		//长按鼠标计数器
			this._drill_jump_dest_count = 0;
			DrillUp.g_jump_mouse = true;
		}
	}
};

//=============================================================================
// ** Game_Player角色跳跃设置
//=============================================================================

//==============================
// * 跳跃延迟初始化
// *（Game_Player初始化时，$gameSystem已载入存储数据。）
//==============================
var _drill_jump_initialize = Game_Player.prototype.initialize;
Game_Player.prototype.initialize = function() {
	_drill_jump_initialize.call(this);
	this._drill_jump_delay_time = 0;
	if( $gameSystem._drill_jump_enable === undefined ){ $gameSystem._drill_jump_enable = true;}
	if( $gameSystem._drill_jump_distance === undefined ){ $gameSystem._drill_jump_distance = DrillUp.g_jump_distance;}
	if( $gameSystem._drill_jump_delay === undefined ){ $gameSystem._drill_jump_delay = DrillUp.g_jump_delay;}
};

//==============================
// * 玩家事件帧刷新
//==============================
var _drill_jump_player_update = Game_Player.prototype.update;
Game_Player.prototype.update = function(sceneActive) {
	_drill_jump_player_update.call(this,sceneActive);
	this._drill_jump_delay_time += 1;
	$gameTemp._drill_jump_dest_timer += 1;
	if( $gameTemp._drill_jump_dest_timer >= 18 ){	//时间衰退计时器（间隔过长的两次鼠标点击，不会跳）
		$gameTemp._drill_jump_dest_timer = 0;
		$gameTemp._drill_jump_dest_count = 0;
		DrillUp.g_jump_mouse = false;
	}
}
//==============================
// * 起跳
//==============================
var _drill_jump_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function() {
	
    if ( this.drill_canJump_Normal()) { 			//基本跳跃条件
		if( this.drill_isJumpControl() ){			//跳跃按钮按下
			this._drill_jump_delay_time = 0;		//消耗一次跳跃机会，防止不停触发
			if( this.drill_canJump_Conditional() ){	//限制跳跃条件
				this.drill_doJump();	
			}else{
				SoundManager.playBuzzer();
			}	
		}
	}
	_drill_jump_moveByInput.call(this);	
};
//==============================
// * 跳跃按钮按下控制条件
//==============================
Game_Player.prototype.drill_isJumpControl = function() {
	//Q键 + 长按鼠标
	return Input.isPressed('pageup') || DrillUp.g_jump_mouse;
}
//==============================
// * 跳跃条件
//==============================
Game_Player.prototype.drill_canJump_Normal = function() {
	//不能跳跃，是因为程序执行的静态属性，不播放错误音
	if( this.isJumping() ){return false};	
	if( !this.canMove() ){return false};		
	if( this._drill_jump_delay_time <= $gameSystem._drill_jump_delay){return false};	
	return true;
}
Game_Player.prototype.drill_canJump_Conditional = function() {
	//不能跳跃，是因为特殊的限制条件，播放错误音
	if( this.isInVehicle() ){return false};					//载具中禁止跳跃
	if( this.drill_isInJumpForbiddenArea() ){return false};	//跳跃禁区禁止跳跃
	if( !$gameSystem._drill_jump_enable ){return false};	//关闭跳跃能力，禁止跳跃
	return true;
}
//==============================
// * 玩家是否在禁止跳跃区域
//==============================
Game_Player.prototype.drill_isInJumpForbiddenArea = function() {
	var r_id = $gameMap.regionId(this._x,this._y);
	for(var i = 0;i< DrillUp.g_jump_forbidden_area.length ;i++){	//禁止跳跃区域
		if( r_id == DrillUp.g_jump_forbidden_area[i] ){
			return true;
		}
	}
	return false;
}

//==============================
// * 执行跳跃（识别悬崖+识别可通行+识别禁止区域）
//==============================
Game_Player.prototype.drill_doJump = function() {
	
	var distance = $gameSystem._drill_jump_distance;
	var tar_x = 0;	
	var tar_y = 0;	
	var cur_cliff = this.drill_getPosCliff(this._x, this._y);
	
	SoundManager.drill_playJumpSE(String(DrillUp.g_jump_se));	//播放跳跃声音
	$gameVariables.setValue(DrillUp.g_jump_org_x, this._x );	//跳跃地点赋值
	$gameVariables.setValue(DrillUp.g_jump_org_y, this._y );	//
	$gameMap.drill_triggerJumpEvent(this._x,this._y);		//触发原地跳跃事件
	
	if (this._direction === 2) {		//下
		tar_x = this._x;
		tar_y = this._y;
		for (var i = 1; i <= distance; i++) {		//向前一步步推进判断，函数是直接执行到底的
			var next_x = this._x;						//	比如，A为不可通行区域，B为可通行，B在A的后面，B会覆盖A的tar_值
			var next_y = this._y + i;					//	这样就可以跳过鸿沟了，但是遇到高墙，就break
			if (this.drill_canPassJump(next_x,next_y,cur_cliff)) {
				tar_x = next_x;
				tar_y = next_y;
			};
			if( this.drill_getPosCliff(next_x, next_y) > cur_cliff ){
				break;
			}
			$gameMap.drill_triggerJumpEvent(tar_x,tar_y);	//触发跳跃事件
		};	
	} else if (this._direction === 4) {	//左
		tar_x = this._x;
		tar_y = this._y;
		for (var i = 1; i <= distance; i++) {	
			var next_x = this._x - i;
			var next_y = this._y;
			if (this.drill_canPassJump(next_x,next_y,cur_cliff)) {
				tar_x = next_x;
				tar_y = next_y;
			};
			if( this.drill_getPosCliff(next_x, next_y) > cur_cliff ){
				break;
			}
			$gameMap.drill_triggerJumpEvent(tar_x,tar_y);	//触发跳跃事件
		};	
	} else if (this._direction === 6) {	//右
		tar_x = this._x;
		tar_y = this._y;
		for (var i = 1; i <= distance; i++) {	
			var next_x = this._x + i;
			var next_y = this._y;
			if (this.drill_canPassJump(next_x,next_y,cur_cliff)) {
				tar_x = next_x;
				tar_y = next_y;
			};
			if( this.drill_getPosCliff(next_x, next_y) > cur_cliff ){
				break;
			}
			$gameMap.drill_triggerJumpEvent(tar_x,tar_y);	//触发跳跃事件
		};	
	} else if (this._direction === 8) {	//上
		tar_x = this._x;
		tar_y = this._y;
		for (var i = 1; i <= distance; i++) {	
			var next_x = this._x;
			var next_y = this._y - i;
			if (this.drill_canPassJump(next_x,next_y,cur_cliff)) {
				tar_x = next_x;
				tar_y = next_y;
			};
			if( this.drill_getPosCliff(next_x, next_y) > cur_cliff ){
				break;
			}
			$gameMap.drill_triggerJumpEvent(tar_x,tar_y);	//触发跳跃事件
		};	
	};
	//设置高度差
	$gameVariables.setValue(DrillUp.g_jump_diff_var, Math.abs(this.drill_getPosCliff(tar_x, tar_y) - cur_cliff) );
	//跳
	tar_x -= this._x;
	tar_y -= this._y;
	this.jump(tar_x ,tar_y );
}

//==============================
// * 跳跃声音
//==============================
SoundManager.drill_playJumpSE = function(fileName){
   var se = {};
   se.name = fileName;
   se.pitch = 100;
   se.volume = 100;
   AudioManager.playSe(se);
};  

//==============================
// * 判断悬崖高度
//==============================
Game_CharacterBase.prototype.drill_getPosCliff = function(x, y) {
	var r_id = $gameMap.regionId(x,y);
	for(var i = 0;i< DrillUp.g_jump_cliff_1.length ;i++){
		if( r_id == DrillUp.g_jump_cliff_1[i] ){
			return 1;
		}
	}
	for(var i = 0;i< DrillUp.g_jump_cliff_2.length ;i++){
		if( r_id == DrillUp.g_jump_cliff_2[i] ){
			return 2;
		}
	}
	for(var i = 0;i< DrillUp.g_jump_cliff_3.length ;i++){
		if( r_id == DrillUp.g_jump_cliff_3[i] ){
			return 3;
		}
	}
	for(var i = 0;i< DrillUp.g_jump_cliff_4.length ;i++){
		if( r_id == DrillUp.g_jump_cliff_4[i] ){
			return 4;
		}
	}
	for(var i = 0;i< DrillUp.g_jump_cliff_5.length ;i++){
		if( r_id == DrillUp.g_jump_cliff_5[i] ){
			return 5;
		}
	}
	for(var i = 0;i< DrillUp.g_jump_forbidden_area.length ;i++){	//禁止跳跃区域
		if( r_id == DrillUp.g_jump_forbidden_area[i] ){
			return 100;
		}
	}
	return 0;
}

//==============================
// * 判断跳跃目的地
//==============================
Game_CharacterBase.prototype.drill_canPassJump = function(x, y, cur_cliff) {
	
    if (!$gameMap.isValid(x, y)) {					//地图范围内
        return false;
    }
    if (this.isThrough() || this.isDebugThrough()) { //玩家穿透开启情况
        return true;
    }
    if ( this.drill_getPosCliff(x, y) > cur_cliff ) {//悬崖高度
        return false;
    };
    if (!$gameMap.drill_isAnyPassable(x, y)) {		//图块可通行状况
        return false;
    };
    if (this.isCollidedWithCharacters(x, y)) {		//事件碰撞（与玩家相同层的碰撞）
        return false;
    }
    return true;
};

//==============================
// * 判断图块可通行情况（isPassable需要指定方向是否可通行，这里任意一个方向可通行则返回true）
//==============================
Game_Map.prototype.drill_isAnyPassable = function( x, y ) {
	return this.isPassable(x, y, 2)||this.isPassable(x, y, 4)||this.isPassable(x, y, 6)||this.isPassable(x, y, 8);
}

//=============================================================================
// ** 跳跃触发事件
//=============================================================================

//==============================
// * 注释初始化
//==============================
var _drill_jump_event_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_drill_jump_event_setupPage.call(this);
    this.drill_setJump();
};
Game_Event.prototype.drill_setJump = function() {
	this._drill_jump_trigger = false;		//是否含触发
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
		if (l.code === 108) {
			var args = l.parameters[0].split(' ');
			var command = args.shift();
			if (command == "=>角色跳跃"){
				var type = String(args[1]);
				var temp1 = String(args[3]);
				if( type == "跳跃触发独立开关" ){
					this._drill_jump_trigger = true;
					this._drill_jump_trigger_self_switch = temp1;
				}
				if( type == "跳跃触发开关" ){
					this._drill_jump_trigger = true;
					this._drill_jump_trigger_var_switch = Number(temp1);
				}
			};
		};
	}, this);};
};
//==============================
// * 触发指定位置的事件 的跳跃开关
//==============================
Game_Map.prototype.drill_triggerJumpEvent = function( x, y ) {
	var events = this.eventsXy(x,y);
	for(var i=0; i < events.length; i++){
		if ( events[i]._drill_jump_trigger == true ){
			if( events[i]._drill_jump_trigger_self_switch != undefined ){
				var key = [events[i]._mapId, events[i]._eventId, events[i]._drill_jump_trigger_self_switch ];
				$gameSelfSwitches.setValue(key,true);
			}
			if( events[i]._drill_jump_trigger_var_switch != undefined ){
				$gameSwitches.setValue( Number(events[i]._drill_jump_trigger_var_switch),true );
			}
		}
	}
}


