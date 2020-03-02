//=============================================================================
// Drill_EventFrameLock.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        行走图 - 锁定帧
 * @author Drill_up
 * 
 * 
 * @help  
 * =============================================================================
 * +++ Drill_EventFrameLock +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 使得你可以完全固定事件行走图的初始帧。
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   对所有事件的任意行走图有效。
 * 2.该插件的设置跨事件页。
 *   单独锁定与锁定帧动画同时开启时，以单独锁定的图像为准。
 * 3.锁定帧动画的本质是将行走图变成固定的gif。
 *   并且行走图固定只有12帧的内容。
 * 
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 你要锁定帧，使用下面注释：
 * （注意，冒号左右都有一个空格）
 * 
 * 事件注释：=>行走图锁定帧 : 锁定
 * 事件注释：=>行走图锁定帧 : 解锁
 *
 * 插件指令：>行走图锁定帧 : 本事件 : 锁定
 * 插件指令：>行走图锁定帧 : 本事件 : 解锁
 * 插件指令：>行走图锁定帧 : 1 : 锁定
 * 插件指令：>行走图锁定帧 : 1 : 解锁
 *
 * 1.锁定后，无论行走图如何、朝向如何，行走图都为rmmv编辑器中设置的
 *   帧图像。不会被更改。
 * 2.因为锁定是跨事件页的，所以你可能会需要在新的事件页添加解锁注释。
 * 3.数字对应事件的id，切换地图后设置会失效。
 * 
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以设置行走图的帧按照指定的动画顺序进行播放动作：
 * （注意，冒号左右都有一个空格）
 * 
 * 事件注释：=>行走图锁定帧 : 锁定帧动画 : 从左至右 : 8
 * 事件注释：=>行走图锁定帧 : 锁定帧动画 : 从右至左 : 8
 * 事件注释：=>行走图锁定帧 : 锁定帧动画 : 1,2,3,4,5,6,7,8,9,10,11,12 : 8
 * 事件注释：=>行走图锁定帧 : 锁定帧动画 : 解锁
 * 
 * 插件指令：>行走图锁定帧 : 本事件 : 锁定帧动画 : 从左至右 : 8
 * 插件指令：>行走图锁定帧 : 本事件 : 锁定帧动画 : 从右至左 : 8
 * 插件指令：>行走图锁定帧 : 本事件 : 锁定帧动画 : 1,2,3,4,5,6,7,8 : 8
 * 插件指令：>行走图锁定帧 : 本事件 : 锁定帧动画 : 暂停
 * 插件指令：>行走图锁定帧 : 本事件 : 锁定帧动画 : 继续
 * 插件指令：>行走图锁定帧 : 本事件 : 锁定帧动画 : 解锁
 * 
 * 1.无论行走图如何、朝向如何，帧动画都只按照注释给的序列或顺序进行播放。
 *   不会被更改。
 * 2.动画后面两个参数表示 序列 和 帧数，每隔8帧进入序列中的下一个姿势。
 * 3.序列"从左至右"即从1到12，"从右至左"即从12到1，
 *   序列编号用逗号隔开，编号数量不限。到了末尾将自动重播序列。
 * 4.标准的行走图是朝向 下,左,右,上，也就是说 从1到12播放一遍即 下方向播
 *   放3个姿势，左方向播放3个姿势，接着是右，再就是上……如此往复。
 * 
 * -----------------------------------------------------------------------------
 * ----插件性能
 * 测试仪器：   4G 内存，Intel Core i5-2520M CPU 2.5GHz 处理器
 *              Intel(R) HD Graphics 3000 集显 的垃圾笔记本
 *              (笔记本的3dmark综合分：571，鲁大师综合分：48456)
 * 总时段：     20000.00ms左右
 * 对照表：     0.00ms  - 40.00ms （几乎无消耗）
 *              40.00ms - 80.00ms （低消耗）
 *              80.00ms - 120.00ms（中消耗）
 *              120.00ms以上      （高消耗）
 * 工作类型：   单次执行
 * 时间复杂度： o(1)
 * 测试方法：   去物体管理层、地理管理层、华容道设计跑一圈测试就可以了。
 * 测试结果：   200个事件的地图中，平均消耗为：【5ms以下】
 *              100个事件的地图中，平均消耗为：【5ms以下】
 *               50个事件的地图中，平均消耗为：【5ms以下】
 *
 * 1.插件只在自己作用域下工作消耗性能，在其它作用域下是不工作的。
 *   测试结果并不是精确值，范围在给定值的10ms范围内波动。
 *   更多了解插件性能，可以去看看"关于插件性能.docx"。
 * 2.由于该插件为单次执行，性能几乎可以忽略。
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 添加了解锁帧、锁定帧动画功能。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		EFL（Event_Frame_Lock）
//		临时全局变量	无
//		临时局部变量	this._drill_EFL_lock
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//		工作类型		单次执行
//		时间复杂度		o(1)
//		性能测试因素	华容道设计
//		性能测试消耗	小到性能测试工具都找不到值。
//		最坏情况		无
//
//插件记录：
//		★大体框架与功能如下：
//			锁定帧：
//				->锁定帧/解锁帧
//				->播放序列（从左至右、自定义）
//				->暂停/继续播放		x
//
//		★必要注意事项：
//			暂无
//			
//		★其它说明细节：
//			1.索引位置characterIndex()嵌入在物体中，贴图获取不到。
//			  所以这里不考虑索引的复杂情况。（索引会关联到单个人物，8个人物，多帧行走图等复杂情况。）
//
//		★存在的问题：
//			暂无
//
 
//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_EventFrameLock = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_EventFrameLock');
	
	
//=============================================================================
// * 事件注释初始化
//=============================================================================
var _drill_EFL_c_setupPageSettings = Game_Event.prototype.setupPageSettings;
Game_Event.prototype.setupPageSettings = function() {
	_drill_EFL_c_setupPageSettings.call(this);
	
	if(!this._drill_EFL_anim){
		this._drill_EFL_anim = {};
		this._drill_EFL_anim.enabled = false;
	}
	
	var page = this.page();
    if( page ) {
		this.list().forEach(function(l) {	//将页面注释转成插件指令格式
			if (l.code === 108) {
				var args = l.parameters[0].split(' ');
				var command = args.shift();
				
				if (command == "=>行走图锁定帧" ){
					if( args.length == 2 ){
						var type = String(args[1]);
						if ( type == "锁定"){
							this._drill_EFL_lock = true;
						}
						if ( type == "解锁"){
							this._drill_EFL_lock = false;
						}
					}
					if( args.length == 6 ){
						var type = String(args[1]);
						var temp1 = String(args[3]);
						var temp2 = Number(args[5]);
						if ( type == "锁定帧动画"){
							if( temp1 == "从左至右" ){
								var seq = [1,2,3,4,5,6,7,8,9,10,11,12];
							}else if( temp1 == "从右至左"){
								var seq = [12,11,10,9,8,7,6,5,4,3,2,1];
							}else{
								var seq = temp1.split(/[,，]/);
							}
							this._drill_EFL_anim = {};
							this._drill_EFL_anim.enabled = true;
							this._drill_EFL_anim.paused = false;
							this._drill_EFL_anim.inter = temp2;
							this._drill_EFL_anim.seq = seq;
							this._drill_EFL_anim.cur_patternX = 0;
							this._drill_EFL_anim.cur_patternY = 0;
						}
					}
					if( args.length == 4 ){
						var type = String(args[1]);
						var temp1 = String(args[3]);
						if ( type == "锁定帧动画" && temp1 == "解锁" ){
							this._drill_EFL_anim.enabled = false;
						}
					}
				};  
			};
		}, this);
    }
}


//=============================================================================
// ** 插件指令
//=============================================================================
var _drill_EFL_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_EFL_pluginCommand.call(this, command, args);
	if (command === '>行走图锁定帧') {
		if(args.length == 4){				//>行走图锁定帧 : 本事件 : 锁定
			var temp1 = String(args[1]);
			var type = String(args[3]);
			
			if( temp1 == "本事件" ){
				var e = $gameMap.event(this._eventId);
			}else{
				var e = $gameMap.event(Number(temp1));
			}
			if(type == "锁定" ){
				e._drill_EFL_lock = true;
			}
			if(type == "解锁" ){
				e._drill_EFL_lock = false;
			}
		}
		if(args.length == 8){				//>行走图锁定帧 : 本事件 : 锁定帧动画 : 从左至右 : 4
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var temp2 = String(args[5]);
			var temp3 = Number(args[7]);
			
			if( temp1 == "本事件" ){
				var e = $gameMap.event(this._eventId);
			}else{
				var e = $gameMap.event(Number(temp1));
			}
			if ( type == "锁定帧动画"){
				if( temp2 == "从左至右" ){
					var seq_ = [1,2,3,4,5,6,7,8,9,10,11,12];
				}else if( temp2 == "从右至左"){
					var seq_ = [12,11,10,9,8,7,6,5,4,3,2,1];
				}else{
					var seq_ = temp2.split(/[,，]/);
				}
				e._drill_EFL_anim = {};
				e._drill_EFL_anim.enabled = true;
				e._drill_EFL_anim.paused = false;
				e._drill_EFL_anim.inter = temp3;
				e._drill_EFL_anim.seq = seq_;
				e._drill_EFL_anim.cur_patternX = 0;
				e._drill_EFL_anim.cur_patternY = 0;
			}
		}
		if(args.length == 6){				//>行走图锁定帧 : 本事件 : 锁定帧动画 : 暂停
			var temp1 = String(args[1]);
			var type = String(args[3]);
			var temp2 = String(args[5]);
			if( temp1 == "本事件" ){
				var e = $gameMap.event(this._eventId);
			}else{
				var e = $gameMap.event(Number(temp1));
			}
			if ( type == "锁定帧动画"){
				if( temp2 == "暂停" ){
					e._drill_EFL_anim.paused = true;
				}
				if( temp2 == "继续" ){
					e._drill_EFL_anim.paused = false;
				}
				if( temp2 == "解锁" ){
					e._drill_EFL_anim.enabled = false;
				}
			}
		}
	}
}

//=============================================================================
// * 图像帧锁定
//=============================================================================
//==============================
// * 单步
//==============================
var _drill_EFL_c_characterPatternX = Sprite_Character.prototype.characterPatternX;
Sprite_Character.prototype.characterPatternX = function() {
	var ch = this._character;
	if( ch._drill_EFL_lock === true ){		//单独锁定
		return ch._originalPattern;
	}
	if( ch._drill_EFL_anim && ch._drill_EFL_anim.enabled === true ){		//动画帧锁定
		return ch._drill_EFL_anim.cur_patternX;
	}
    return _drill_EFL_c_characterPatternX.call(this);
};
//==============================
// * 朝向
//==============================
var _drill_EFL_c_characterPatternY = Sprite_Character.prototype.characterPatternY;
Sprite_Character.prototype.characterPatternY = function() {
	var ch = this._character;
	if( ch._drill_EFL_lock === true ){		//单独锁定
		return (ch._originalDirection - 2) / 2;
	}
	if( ch._drill_EFL_anim && ch._drill_EFL_anim.enabled === true ){		//动画帧锁定
		return ch._drill_EFL_anim.cur_patternY;
	}
    return _drill_EFL_c_characterPatternY.call(this);
};

//=============================================================================
// * 动画帧锁定
//=============================================================================
//==============================
// * 初始化
//==============================
var _drill_EFL_c_initialize = Sprite_Character.prototype.initialize;
Sprite_Character.prototype.initialize = function(character) {
	_drill_EFL_c_initialize.call(this,character);
	this._drill_EFL_time = 0;
};
//==============================
// * 帧刷新
//==============================
var _drill_EFL_c_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function() {
	
	this._drill_EFL_time += 1;
	var ch = this._character;
	if( ch && ch._drill_EFL_anim && ch._drill_EFL_anim.enabled === true){
		
		if(ch._drill_EFL_anim.paused == true){	//暂停帧
			this._drill_EFL_time -= 1;
		}
		var anim = ch._drill_EFL_anim;
		var index = Math.floor(this._drill_EFL_time / anim.inter) % anim.seq.length;
		var pattern = Number( anim.seq[index] ) - 1;
		
		anim.cur_patternX = Math.floor((pattern % 12) % 3);		//单步
		anim.cur_patternY = Math.floor((pattern % 12) / 3);		//朝向
	}
	
	_drill_EFL_c_update.call(this);
}

