//=============================================================================
// Drill_BattleVideo.js
//=============================================================================

/*:
 * @plugindesc [v1.2]        战斗 - 视频动画背景
 * @author Drill_up
 *
 * @param 资源-视频动画1
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 战斗背景动画
 *
 * @param 资源-视频动画2
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画3
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画4
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画5
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画6
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画7
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画8
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画9
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 资源-视频动画10
 * @parent 默认视频
 * @desc 标题的视频动画资源文件名，不要后缀。注意要把视频文件放在movies文件夹中。
 * @default 
 *
 * @param 是否播放视频声音
 * @type boolean
 * @on 播放
 * @off 关闭
 * @desc true - 播放，false - 关闭。
 * @default false
 *
 * @param 音量比
 * @desc 视频声音的音量比，小数，在0.00-1.00之间。
 * @default 1
 *
 * @param 是否指定视频宽高
 * @type boolean
 * @on 指定宽高
 * @off 原视频宽高
 * @desc true - 指定宽高，false - 原视频宽高。
 * @default false
 *
 * @param 视频宽度
 * @parent 是否指定视频宽高
 * @type number
 * @min 50
 * @desc 视频的宽度。
 * @default 1000
 *
 * @param 视频高度
 * @parent 是否指定视频宽高
 * @type number
 * @min 50
 * @desc 视频的高度。
 * @default 740
 *
 * @param 平移-视频 X
 * @desc x轴方向平移，单位像素。0为视频中心贴在正中心。（可为负数）
 * @default 0
 *
 * @param 平移-视频 Y
 * @desc y轴方向平移，单位像素。0为视频中心贴在正中心。（可为负数）
 * @default 0
 *
 * @param 是否循环播放视频
 * @type boolean
 * @on 循环
 * @off 不循环
 * @desc true - 循环，false - 不循环。
 * @default true
 *
 * @param 视频播放速度
 * @desc 视频播放的速度，1.0为原速度。
 * @default 1.0
 *
 * @param 混合模式
 * @type number
 * @min 0
 * @max 16
 * @desc pixi的渲染混合模式。0-普通,1-叠加。其他更详细相关介绍，去看看"pixi的渲染混合模式"。
 * @default 0
 *
 * @param 视频透明度
 * @type number
 * @min 0
 * @max 255
 * @desc 视频的透明度，0为完全透明，255为完全不透明。
 * @default 255
 *
 * @param 视频色调
 * @desc 屏幕的滤镜色调，默认: 0xffffff。
 * @default 0xffffff
 *
 * @param 视频起始帧
 * @desc 视频开始播放的初始帧数。默认从0帧开始播放。
 * @default 0
 *
 * @param 视频结束帧
 * @desc 视频开始播放的结束帧数。填入：end -视频总帧数，900 -指定结束帧。
 * @default end
 *
 * @param 是否开启Debug模式
 * @type boolean
 * @on 开启
 * @off 关闭
 * @desc true - 开启，false - 关闭。
 * @default true
 *
 * @help
 * =============================================================================
 * +++ Drill_BattleVideo +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 在战斗背景中添加一个视频层背景，用于播放视频动画。
 * 要了解更详细的组合方法，去看看"多层组合背景,粒子,魔法圈,gif,视频.docx"。
 * ★★可以与战斗的多层插件同时使用，但必须放在他们的前面★★
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面。
 *   只可以放置在最下层，且图片层级为0。
 * 2.视频动画支持.webm 和.mp4 格式的视频。
 * 3.视频宽高可以自由缩放，但是要确保大于镜头架的高宽。
 *   如果设置了视频偏移，要注意不要让玩家的镜头看到外部边界线。
 * 4.循环播放时，视频的末尾会闪一下黑色背景。
 * 5.如果你想将视频放置在更高的层级，遮挡整个游戏画面。
 *   建议直接用rmmv函数播放视频，或者使用战斗GIF插件。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 所有视频文件都存储在根目录的movies文件夹。需要配置视频名：
 * 
 * 资源-视频动画1
 * 资源-视频动画2
 * 资源-视频动画3
 * ……
 *
 * 只需要填入文件名即可，不需要后缀。
 * （视频文件不会被去除，但也不会被加密）
 *
 * -----------------------------------------------------------------------------
 * ----激活条件
 * 你可以通过插件指令控制战斗视频的显示情况：
 * （1个基本参数，冒号两边有一个空格。）
 * 
 * 插件指令：>清空战斗视频
 * 插件指令：>创建战斗视频 : A
 *
 * 参数A：视频编号
 *        分配的视频编号。
 *
 * 示例：
 * 插件指令：>清空战斗视频
 * 插件指令：>创建战斗视频 : 1
 * （进入战斗前，最好先清空一下战斗背景，避免干扰）
 * （清空默认会包括清空背景、魔法圈、gif、视频，只要有一个清空指令就可以了。）
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
 * 工作类型：   持续执行
 * 时间复杂度： o(n)+o(视频图像处理) 每帧
 * 测试方法：   在战斗中开启视频背景。
 * 测试结果：   战斗界面估算平均消耗为：【265.46ms】
 *
 * 1.插件只在自己作用域下工作消耗性能，在其它作用域下是不工作的。
 *   测试结果并不是精确值，范围在给定值的10ms范围内波动。
 *   更多了解插件性能，可以去看看"关于插件性能.docx"。
 * 2.战斗视频动画与标题视频动画原理一样，消耗图形计算能力非常大，
 *   而且有时候可能会出现视频花屏问题。
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 优化了视频的层级。
 * [v1.2]
 * 添加了插件性能测试说明。
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		BVi（Battle_Video）
//		临时全局变量	DrillUp.g_BVi_xxx
//		临时局部变量	this._drill_BVi_xxx
//		存储数据变量	$gameSystem._drill_BVi_xxx
//		全局存储变量	无
//		覆盖重写方法	无
//
//		工作类型		持续执行
//		时间复杂度		o(n)+o(视频图像处理) 每帧
//		性能测试因素	战斗界面开启视频
//		性能测试消耗	265.46ms 从图像函数里面找到的值
//		最坏情况		开视频就是最坏情况。
//
//		★大体框架与功能如下：
//			视频动画背景：
//				->显示隐藏
//				->播放视频
//
//		★必要注意事项：
//			1.插件的图片层级与多个插件共享。【必须自写 层级排序 函数】
//			2.视频的内容比较松散，并且大部分都直接用了临时全局变量。
//			  
//			

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_BattleVideo = true;
　　var DrillUp = DrillUp || {}; 
	DrillUp.parameters = PluginManager.parameters('Drill_BattleVideo');

    DrillUp.g_BVi_muted = String(DrillUp.parameters['是否播放视频声音'] || "true") === "false";
    DrillUp.g_BVi_volume = Number(DrillUp.parameters['音量比'] || 1.0);
    DrillUp.g_BVi_wh_set = String(DrillUp.parameters['是否指定视频宽高'] || "true") === "true";
    DrillUp.g_BVi_w = Number(DrillUp.parameters['视频宽度'] || 100);
    DrillUp.g_BVi_h = Number(DrillUp.parameters['视频高度'] || 100);
    DrillUp.g_BVi_x = Number(DrillUp.parameters['平移-视频 X'] || 100);
    DrillUp.g_BVi_y = Number(DrillUp.parameters['平移-视频 Y'] || 100);
    DrillUp.g_BVi_blendMode = Number(DrillUp.parameters['混合模式'] || 0);
    DrillUp.g_BVi_opacity = Number(DrillUp.parameters['视频透明度'] || 255);
    DrillUp.g_BVi_tint = String(DrillUp.parameters['视频色调'] || '0xffffff');
    DrillUp.g_BVi_loop = String(DrillUp.parameters['是否循环播放视频'] || "true") === "true";
    DrillUp.g_BVi_playbackRate = Number(DrillUp.parameters['视频播放速度'] || 1.0);
    DrillUp.g_BVi_loopStart = String(DrillUp.parameters['视频起始帧'] || '0');
    DrillUp.g_BVi_loopEnd = String(DrillUp.parameters['视频结束帧'] || 'end');
    DrillUp.g_BVi_DEBUG = String(DrillUp.parameters['是否开启Debug模式'] || "true") === "true";
	
    DrillUp.g_BVi_cur_filepath = "";
	DrillUp.g_BVi_filepath_max = 10;
	DrillUp.g_BVi_filepath_list = [];
	DrillUp.g_BVi_filepath_list[0] = "";
	for (var i = 1; i <= DrillUp.g_BVi_filepath_max; i++) {
		DrillUp.g_BVi_filepath_list[i] = DrillUp.parameters['资源-视频动画' + String(i)] || "";
	}

    var _g_drill_BVi_listeners = {};
	var _g_drill_BVi_src ;
	var _g_drill_BVi_sprite ;
	
//=============================================================================
// * 插件指令
//=============================================================================
var _drill_BVi_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_BVi_pluginCommand.call(this, command, args);
	if (command === '>创建战斗视频') {
		if(args.length == 2){
			var temp = Number(args[1]);
			DrillUp.g_BVi_cur_filepath = DrillUp.g_BVi_filepath_list[ temp ];
		}
	}
	if (command === '>清空战斗视频') {
		$gameSystem._drill_BBa_data = [];
		$gameSystem._drill_BBa_changing = [];
		$gameSystem._drill_BCi_data = [];
		$gameSystem._drill_BCi_changing = [];
		$gameSystem._drill_BGi_data = [];
		$gameSystem._drill_BGi_changing = [];
		DrillUp.g_BVi_cur_filepath = "";
	}
};
	
//=============================================================================
// ** 战斗层级
//=============================================================================
//==============================
// ** 下层
//==============================
var _drill_BVi_layer_createBattleback = Spriteset_Battle.prototype.createBattleback;
Spriteset_Battle.prototype.createBattleback = function() {    
	_drill_BVi_layer_createBattleback.call(this);
	if( !this._drill_battleDownArea ){
		this._drill_battleDownArea = new Sprite();
		this._battleField.addChild(this._drill_battleDownArea);	
	}
};
//==============================
// ** 层级排序
//==============================
Spriteset_Battle.prototype.drill_BVi_sortByZIndex = function() {
	this._drill_battleDownArea.children.sort(function(a, b){return a.zIndex-b.zIndex});	//比较器
};

//=============================================================================
// ** 视频
//=============================================================================
var _drill_BVi_createBattleback = Spriteset_Battle.prototype.createBattleback;
Spriteset_Battle.prototype.createBattleback = function() {    
	_drill_BVi_createBattleback.call(this);
	this.drill_BVi_create();
}
Spriteset_Battle.prototype.drill_BVi_create = function() {    
	if( DrillUp.g_BVi_cur_filepath == undefined || DrillUp.g_BVi_cur_filepath == ""){return}
	
	var temp_suffix = Game_Interpreter.prototype.videoFileExt();	//组合路径
	var temp_path = 'movies/'+ DrillUp.g_BVi_cur_filepath + temp_suffix;
	if(DrillUp.g_BVi_DEBUG){ console.log('战斗视频-读取材质:', temp_path);}
	var temp_video_texture = PIXI.Texture.fromVideo(temp_path);
	
	_g_drill_BVi_src = temp_video_texture.baseTexture.source;
	_g_drill_BVi_sprite = new PIXI.Sprite(temp_video_texture);
	
	_g_drill_BVi_src.addEventListener('loadedmetadata', function() {
		if(DrillUp.g_BVi_DEBUG){ console.log('战斗视频-读取视频元数据:');}
		
		if( !DrillUp.g_BVi_wh_set ) {
			_g_drill_BVi_sprite.width = _g_drill_BVi_src.videoWidth;
		}
		if( !DrillUp.g_BVi_wh_set ) {
			_g_drill_BVi_sprite.height = _g_drill_BVi_src.videoHeight;
		}
		if(DrillUp.g_BVi_loopEnd === 'end') {
			DrillUp.g_BVi_loopEnd = _g_drill_BVi_src.duration;
		}else{
			DrillUp.g_BVi_loopEnd = parseFloat(DrillUp.g_BVi_loopEnd);
		}
	});

	_g_drill_BVi_src['volume'] = DrillUp.g_BVi_volume * WebAudio._masterVolume;
	_g_drill_BVi_src['loop'] = DrillUp.g_BVi_loop ;
	_g_drill_BVi_src['muted'] = DrillUp.g_BVi_muted ;
	_g_drill_BVi_src['playbackRate'] = parseFloat(DrillUp.g_BVi_playbackRate) || 1.0;

	_g_drill_BVi_sprite['blendMode'] = DrillUp.g_BVi_blendMode;
	if( DrillUp.g_BVi_wh_set ) {
		_g_drill_BVi_sprite['width'] = DrillUp.g_BVi_w ;
		_g_drill_BVi_sprite['height'] = DrillUp.g_BVi_h ;
	}
	_g_drill_BVi_sprite.anchor.x = 0.5;
	_g_drill_BVi_sprite.anchor.y = 0.5;
	_g_drill_BVi_sprite['x'] = Graphics.width/2 + DrillUp.g_BVi_x;
	_g_drill_BVi_sprite['y'] = Graphics.height/2 + DrillUp.g_BVi_y;
	_g_drill_BVi_sprite['opacity'] = DrillUp.g_BVi_opacity ;
	_g_drill_BVi_sprite['tint'] = parseInt(DrillUp.g_BVi_tint);
	_g_drill_BVi_sprite['zIndex'] = 0;

	//window.vid = vid;
	_g_drill_BVi_sprite.update = function() {
		temp_video_texture.update();
	};

	if(DrillUp.g_BVi_loop){
		DrillUp.g_BVi_loopStart = parseFloat(DrillUp.g_BVi_loopStart);
		/*if(DrillUp.g_BVi_loopEnd !== 'end'){
			DrillUp.g_BVi_loopEnd = parseFloat(DrillUp.g_BVi_loopEnd);
		}*/
		if(DrillUp.g_BVi_loopStart > 0 || DrillUp.g_BVi_loopEnd !== _g_drill_BVi_src.duration) {
			_g_drill_BVi_src.loop = false;
			this.drill_BVi_addListener('timeupdate', this.drill_BVi_loop);

			if(DrillUp.g_BVi_DEBUG) console.log('设置视频循环为 %s 至 %s:', DrillUp.g_BVi_loopStart.toFixed(3), DrillUp.g_BVi_loopEnd);
		}
	}
	else {
		_g_drill_BVi_src.addEventListener('ended', function() {
			_g_drill_BVi_sprite.visible = false;
		});
	}

	if(DrillUp.g_BVi_DEBUG){
		_g_drill_BVi_src.addEventListener('error', function() {
			console.error('视频发生了错误:', _g_drill_BVi_src.error);
		});
	}

	this._drill_battleDownArea.addChild(_g_drill_BVi_sprite);
	this.drill_BVi_sortByZIndex();
};

//==============================
// ** 设置音量
//==============================
var _drill_BVi_setMasterVolume = WebAudio.setMasterVolume;
WebAudio.setMasterVolume = function(value) {
	if( DrillUp.g_BVi_cur_filepath == undefined || DrillUp.g_BVi_cur_filepath == "" ){
		return _drill_BVi_setMasterVolume(value);
	}
	if(DrillUp.g_BVi_DEBUG){ console.log('战斗视频-设置音量: ', value); }
	if(_g_drill_BVi_src) _g_drill_BVi_src.volume = DrillUp.g_BVi_volume*value;
	_drill_BVi_setMasterVolume(value);
}

//==============================
// ** 销毁内容
//==============================
var _drill_BVi_destroy = Spriteset_Battle.prototype.destroy;
Spriteset_Battle.prototype.destroy = function() {
	if( _g_drill_BVi_sprite == null ){ return ;}
	_g_drill_BVi_sprite.destroy(true);

	this.drill_BVi_removeListeners();
	_g_drill_BVi_src.pause();
	_g_drill_BVi_src.remove();
	_g_drill_BVi_src = null;
	_g_drill_BVi_sprite = null
	WebAudio.setMasterVolume = _drill_BVi_setMasterVolume;
	_drill_BVi_destroy.call(this);
};

//==============================
// ** 循环播放控制
//==============================
Spriteset_Battle.prototype.drill_BVi_loop = function() {
	if(DrillUp.g_BVi_DEBUG) console.log('视频刷新帧:', _g_drill_BVi_src.currentTime);
	if(_g_drill_BVi_src.currentTime >= DrillUp.g_BVi_loopEnd ){
		if(DrillUp.g_BVi_DEBUG){ console.log('战斗视频-播放回到位置:', DrillUp.g_BVi_loopStart);}
		_g_drill_BVi_src.currentTime = DrillUp.g_BVi_loopStart;
		_g_drill_BVi_src.play();
	}
}

//==============================
// ** 添加监听器
//==============================
Spriteset_Battle.prototype.drill_BVi_addListener = function(evt, fn){
	_g_drill_BVi_src.addEventListener(evt, fn);

	if(!_g_drill_BVi_listeners[evt]){
		_g_drill_BVi_listeners[evt] = [];
	}
	_g_drill_BVi_listeners[evt].push(fn);
}

//==============================
// ** 移除监听器
//==============================
Spriteset_Battle.prototype.drill_BVi_removeListeners = function() {
	Object.keys(_g_drill_BVi_listeners).forEach(function(evt){
		_g_drill_BVi_listeners[evt].forEach(function(fn){
			_g_drill_BVi_src.removeEventListener(evt, fn);
		});
	});
}
