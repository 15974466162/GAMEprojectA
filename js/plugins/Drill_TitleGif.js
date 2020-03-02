//=============================================================================
// Drill_TitleGif.js
//=============================================================================

/*:
 * @plugindesc [v1.2]        标题 - 多层标题GIF
 * @author Drill_up
 *
 * @help
 * =============================================================================
 * +++ Drill_TitleGif +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以在标题中放置多个GIF，并可以切换显示状态。
 * 这里的GIF，必须拆散成多张图片，然后配置在资源中。
 * 要了解更详细的组合方法，去看看"多层组合背景,粒子,魔法圈,gif,视频.docx"。
 * 该插件用法与菜单一样，但是，存储数据是全局的。
 * 【支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有titles1文件夹！（img/titles1）
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * GIF1 资源-GIF
 * GIF2 资源-GIF
 * GIF3 资源-GIF
 * ……
 *
 * 你可以在同一个标题里面加入非常多的不同种类的GIF。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令控制标题GIF的显示情况：
 * 
 * 插件指令（显示）：    >标题GIF : A : 显示
 * 插件指令（隐藏）：    >标题GIF : A : 隐藏
 * 插件指令（隐藏全部）：>标题GIF : 隐藏全部
 *
 * 参数A：GIF编号
 *        显示隐藏对应配置的编号。
 *
 * 示例：
 * 插件指令：>标题GIF : 1 : 显示
 * 插件指令：>标题GIF : 3 : 隐藏
 * （切换不同的标题GIF，因为处于全局，设置后永久有效）
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 规范了插件指令格式。
 * [v1.2]
 * 添加了漂浮、呼吸效果设置。
 *
 *
 * @param ---GIF组 1至20---
 * @default
 *
 * @param GIF-1
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-2
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-3
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-4
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-5
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-6
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-7
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-8
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-9
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-10
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-11
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-12
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-13
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-14
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-15
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-16
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-17
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-18
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-19
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-20
 * @parent ---GIF组 1至20---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param ---GIF组21至40---
 * @default
 *
 * @param GIF-21
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-22
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-23
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-24
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-25
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-26
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-27
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-28
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-29
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-30
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-31
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-32
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-33
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-34
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-35
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-36
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-37
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-38
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-39
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-40
 * @parent ---GIF组21至40---
 * @type struct<TitleGif>
 * @desc GIF的详细配置信息。
 * @default 
 */
/*~struct~TitleGif:
 * 
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default ==新的标题GIF==
 *
 * @param 初始是否显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 资源-GIF
 * @desc GIF的图片资源。
 * @default ["GIF-默认"]
 * @require 1
 * @dir img/titles1/
 * @type file[]
 *
 * @param 帧间隔
 * @type number
 * @min 1
 * @desc gif每帧播放间隔时间，单位帧。（1秒60帧）
 * @default 4
 *
 * @param 是否倒放
 * @type boolean
 * @on 倒放
 * @off 不倒放
 * @desc true - 倒放，false - 不倒放
 * @default false
 *
 * @param 平移-GIF X
 * @desc x轴方向平移，单位像素。0为圈的圆心贴在最左边。
 * @default 0
 *
 * @param 平移-GIF Y
 * @desc x轴方向平移，单位像素。0为圈的圆心贴在最上面。
 * @default 0
 *
 * @param 透明度
 * @type number
 * @min 0
 * @max 255
 * @desc 0为完全透明，255为完全不透明。
 * @default 255
 *
 * @param 混合模式
 * @type number
 * @min 0
 * @max 16
 * @desc pixi的渲染混合模式。0-普通,1-叠加。其他更详细相关介绍，去看看"pixi的渲染混合模式"。
 * @default 0
 *
 * @param 旋转速度
 * @desc 正数逆时针，负数顺时针，单位 弧度/帧。(1秒60帧)
 * 6.28表示一圈，设置0.01表示大概10秒转一圈，设置0则不旋转。
 * @default 0.0
 *
 * @param 标题层级
 * @type select
 * @option 在标题后面
 * @value 0
 * @option 在标题前面
 * @value 1
 * @desc 背景所属的标题层级。
 * @default 0
 *
 * @param 图片层级
 * @type number
 * @min 0
 * @desc 背景在同一个标题，并且在标题层级下，先后排序的位置，0表示最后面。
 * @default 4
 * 
 * 
 * @param --呼吸效果--
 * @desc 
 *
 * @param 是否使用呼吸效果
 * @parent --呼吸效果--
 * @type boolean
 * @on 使用
 * @off 关闭
 * @desc true - 使用，false - 关闭。注意，开启后，y轴的中心会偏移至正下方。
 * @default false
 *
 * @param 呼吸周期
 * @parent --呼吸效果--
 * @type number
 * @min 10
 * @desc 一次呼吸的周期时长，单位帧。（1秒60帧）
 * @default 70
 *
 * @param 呼吸幅度
 * @parent --呼吸效果--
 * @type number
 * @min 0
 * @desc 呼吸时引起gif缩放的百分比值，10表示10%的图片大小幅度。
 * @default 8
 *
 * @param 呼吸类型
 * @parent --呼吸效果--
 * @type select
 * @option 上下缩放
 * @value 上下缩放
 * @option 左右缩放
 * @value 左右缩放
 * @option 整体缩放
 * @value 整体缩放
 * @desc 呼吸的类型。
 * @default 上下缩放
 * 
 * @param --漂浮效果--
 * @desc 
 *
 * @param 是否使用漂浮效果
 * @parent --漂浮效果--
 * @type boolean
 * @on 使用
 * @off 关闭
 * @desc true - 使用，false - 关闭。
 * @default false
 *
 * @param 漂浮速度
 * @parent --漂浮效果--
 * @desc 漂浮的速度，可为小数负数。负数反向漂浮。
 * @default 1.0
 *
 * @param 漂浮幅度
 * @parent --漂浮效果--
 * @type number
 * @min 0
 * @desc 漂浮的移动量，单位像素。
 * @default 30
 *
 * @param 漂浮类型
 * @parent --漂浮效果--
 * @type select
 * @option 上下漂浮
 * @value 上下漂浮
 * @option 左右漂浮
 * @value 左右漂浮
 * @desc 漂浮的类型。
 * @default 上下漂浮
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	this._drill_xxx
//		存储数据变量	无
//		全局存储变量	DrillUp.global_title_gif_visible
//		覆盖重写方法	无
//
//插件记录：
//		标题和菜单有很大区别：
//			标题不需要默认
//			标题是直接被初始化
//			标题不需要区分当前菜单
//			标题为全局存储
//

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_TitleGif = true;
　　var DrillUp = DrillUp || {}; 

	DrillUp.parameters = PluginManager.parameters('Drill_TitleGif');
	
	DrillUp.title_gifs_max = 40;
	DrillUp.title_gifs = [];
	
	for (var i = 0; i < DrillUp.title_gifs_max; i++) {
		if( DrillUp.parameters['GIF-' + String(i+1) ] != "" ){
			DrillUp.title_gifs[i] = JSON.parse(DrillUp.parameters['GIF-' + String(i+1) ]);
			DrillUp.title_gifs[i]['visible'] = String(DrillUp.title_gifs[i]["初始是否显示"] || "true") == "true";
			DrillUp.title_gifs[i]['x'] = Number(DrillUp.title_gifs[i]["平移-GIF X"]);
			DrillUp.title_gifs[i]['y'] = Number(DrillUp.title_gifs[i]["平移-GIF Y"]);
			DrillUp.title_gifs[i]['opacity'] = Number(DrillUp.title_gifs[i]["透明度"]);
			DrillUp.title_gifs[i]['blendMode'] = Number(DrillUp.title_gifs[i]["混合模式"]);
			DrillUp.title_gifs[i]['rotate'] = Number(DrillUp.title_gifs[i]["旋转速度"]);
			DrillUp.title_gifs[i]['title_index'] = Number(DrillUp.title_gifs[i]["标题层级"]);
			DrillUp.title_gifs[i]['zIndex'] = Number(DrillUp.title_gifs[i]["图片层级"]);
			DrillUp.title_gifs[i]['src_img'] = JSON.parse(DrillUp.title_gifs[i]['资源-GIF']);
			DrillUp.title_gifs[i]['interval'] = Number(DrillUp.title_gifs[i]["帧间隔"]);
			DrillUp.title_gifs[i]['back_run'] = String(DrillUp.title_gifs[i]["是否倒放"] || "false") == "true";
			DrillUp.title_gifs[i]['src_bitmaps'] = [];
			
			DrillUp.title_gifs[i]['breath'] = String(DrillUp.title_gifs[i]["是否使用呼吸效果"] || "false") == "true";
			DrillUp.title_gifs[i]['breath_period'] = Number(DrillUp.title_gifs[i]["呼吸周期"] || 70);
			DrillUp.title_gifs[i]['breath_spread'] = Number(DrillUp.title_gifs[i]["呼吸幅度"] || 8);
			DrillUp.title_gifs[i]['breath_type'] = String(DrillUp.title_gifs[i]["呼吸类型"] || '上下缩放');
			
			DrillUp.title_gifs[i]['float'] = String(DrillUp.title_gifs[i]["是否使用漂浮效果"] || "false") == "true";
			DrillUp.title_gifs[i]['float_speed'] = Number(DrillUp.title_gifs[i]["漂浮速度"] || 70);
			DrillUp.title_gifs[i]['float_spread'] = Number(DrillUp.title_gifs[i]["漂浮幅度"] || 8);
			DrillUp.title_gifs[i]['float_type'] = String(DrillUp.title_gifs[i]["漂浮类型"] || '上下漂浮');
		}else{
			DrillUp.title_gifs[i] = [];
		}
	}
	
	
//=============================================================================
// ** 全局读取
//=============================================================================
	var _drill_global = DataManager.loadGlobalInfo();
	//alert(JSON.stringify(_drill_global));
	if( !DrillUp.global_title_gif_visible ){	//游戏没关情况
		if( _drill_global && _drill_global[0] && _drill_global[0]["_global_title_gif_visible"] ){		//游戏关闭后，重开读取global中的配置
			DrillUp.global_title_gif_visible = _drill_global[0]["_global_title_gif_visible"];
		}else{
			DrillUp.global_title_gif_visible = [];
			for (var i = 0; i < DrillUp.title_gifs.length; i++) {
				DrillUp.global_title_gif_visible.push( DrillUp.title_gifs[i]['visible'] );
			}
		}
	}
	
//=============================================================================
// ** 全局存储
//=============================================================================
var _drill_TitleGif_saveGlobal = DataManager.saveGlobalInfo;
DataManager.saveGlobalInfo = function(info) {	//第0个存档为全局存档
	if(!info[0]){info[0] = []};
	info[0]["_global_title_gif_visible"] = DrillUp.global_title_gif_visible;
	_drill_TitleGif_saveGlobal.call(this,info);
};
DataManager.forceSaveGlobalInfo = function() {		//强制存储（任何改变的全局变量的地方都需要调用该方法）
	var globalInfo = this.loadGlobalInfo() || [];
	globalInfo[0] = this.makeSavefileInfo();
	this.saveGlobalInfo(globalInfo);
};

//=============================================================================
// * 插件指令
//=============================================================================
var _drill_title_gifs_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_title_gifs_pluginCommand.call(this, command, args);
	if (command === '>标题GIF') {
		if(args.length == 4){
			var temp1 = Number(args[1]) - 1;
			var type = String(args[3]);
			if (type === '显示') {
				DrillUp.global_title_gif_visible[temp1] = true;
				DataManager.forceSaveGlobalInfo();
			}
			if (type === '隐藏') {
				DrillUp.global_title_gif_visible[temp1] = false;
				DataManager.forceSaveGlobalInfo();
			}
		}
		if(args.length == 2){
			var type = String(args[1]);
			if (type === '隐藏全部') {
				for(var i=0; i<DrillUp.global_title_gif_visible.length; i++){
					DrillUp.global_title_gif_visible[i] = false;
				}
				DataManager.forceSaveGlobalInfo();
			}
		}
	}
};


//=============================================================================
// ** 从 Scene_Title 中进行GIF追加
//=============================================================================

var _drill_title_gif_createBackground = Scene_Title.prototype.createBackground;
Scene_Title.prototype.createBackground = function() {
	SceneManager._drill_title_gif = false;	
   	this._drill_sprite_gifs = [];
   	this._drill_sprite_gifs_data = [];
	_drill_title_gif_createBackground.call(this);		//与背景一同创建
	
	if( !this._backgroundSprite ){			//附着在定义的标题背景后面
		this._backgroundSprite = new Sprite();
		this.addChild(this._backgroundSprite);
	}
};

//==============================
// ** 层级排序
//==============================
Scene_Title.prototype.drill_sortByZIndex = function() {
   this._backgroundSprite.children.sort(function(a, b){return a.zIndex-b.zIndex});	//比较器
   this._foregroundSprite.children.sort(function(a, b){return a.zIndex-b.zIndex});
};

//==============================
// * 创建GIF
//==============================
Scene_Title.prototype.drill_createGifs = function() {	
	SceneManager._drill_title_gif = true;
	
	if(!this._drill_sprite_gifs){
		this._drill_sprite_gifs = [];		//防止某些覆写的标题报错
		this._drill_sprite_gifs_data = [];
	}
	if( !this._backgroundSprite ){		//标题后面层
		this._backgroundSprite = new Sprite();
	}
	if( !this._foregroundSprite ){		//标题前面层
		this._foregroundSprite = new Sprite();
		this.addChild(this._foregroundSprite);
	}
	
	for (var i = 0; i < DrillUp.title_gifs_max; i++) {
		if( DrillUp.title_gifs[i].length != 0 ){
			var temp_sprite_data = JSON.parse(JSON.stringify( DrillUp.title_gifs[i] ));	//拷贝object（杜绝引用造成的修改）
			
			for(var j = 0; j < temp_sprite_data['src_img'].length ; j++){
				temp_sprite_data['src_bitmaps'].push(ImageManager.loadTitle1(temp_sprite_data['src_img'][j]));
			}
			
			var temp_sprite = new Sprite();
			temp_sprite.bitmap = temp_sprite_data['src_bitmaps'][0];
			temp_sprite._time = 0;
			temp_sprite.anchor.x = 0.5;
			temp_sprite.anchor.y = 0.5;
			temp_sprite.x = temp_sprite_data['x'];
			temp_sprite.y = temp_sprite_data['y'];
			temp_sprite._org_x = temp_sprite.x;
			temp_sprite._org_y = temp_sprite.y;
			temp_sprite.opacity = temp_sprite_data['opacity'];
			temp_sprite.blendMode = temp_sprite_data['blendMode'];
			temp_sprite.zIndex = temp_sprite_data['zIndex'];
			temp_sprite.visible = DrillUp.global_title_gif_visible[i];
			
			temp_sprite._breath = Math.random() * temp_sprite_data['breath_period'];
			temp_sprite._breath_dir = Math.floor(Math.random() * 2);
			temp_sprite._f_time = 0;
			
			this._drill_sprite_gifs.push(temp_sprite);
			this._drill_sprite_gifs_data.push(temp_sprite_data);
			if( temp_sprite_data['title_index'] == 0 ){
				this._backgroundSprite.addChild(temp_sprite);
			}else{
				this._foregroundSprite.addChild(temp_sprite);
			}
		}
	}
	this.drill_sortByZIndex();
};

//==============================
// * 刷新GIF
//==============================
var _drill_title_gif_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
	_drill_title_gif_update.call(this);
	
	if ( SceneManager.isCurrentSceneStarted() && !SceneManager._drill_title_gif ) {
		this.drill_createGifs();				//创建，进入界面后只执行一次
	}
	if (SceneManager._drill_title_gif) {this.drill_updateGifs(); }
};

Scene_Title.prototype.drill_updateGifs = function() {
	for (var i = 0; i < this._drill_sprite_gifs.length; i++) {
		var t_gif = this._drill_sprite_gifs[i];
		var t_gif_data = this._drill_sprite_gifs_data[i];
		
		//播放gif
		t_gif._time += 1;
		var inter = t_gif._time ;
		inter = inter / t_gif_data['interval'];
		inter = inter % t_gif_data['src_bitmaps'].length;
		if(t_gif_data['back_run']){
			inter = t_gif_data['src_bitmaps'].length - 1 - inter;
		}
		inter = Math.floor(inter);
		t_gif.bitmap = t_gif_data['src_bitmaps'][inter];
		t_gif.rotation += t_gif_data['rotate'];
		
		//呼吸效果
		if( t_gif_data['breath'] ){
			if( t_gif._breath_dir == 0 ){
				t_gif._breath += 2.1;
				if( t_gif._breath >= t_gif_data['breath_period'] ){
					t_gif._breath_dir = 1;
				}
			}
			if( t_gif._breath_dir == 1 ){
				t_gif._breath -= 1.3;
				if( t_gif._breath <= 0 ){
					t_gif._breath_dir = 0;
				}
			}
			t_gif.anchor.y = 1;
			if(t_gif_data['breath_type'] == '上下缩放' || t_gif_data['breath_type'] == '整体缩放'){
				t_gif.scale.y = 1.00 + (t_gif._breath/t_gif_data['breath_period'] * t_gif_data['breath_spread']/100 );
			}
			if(t_gif_data['breath_type'] == '左右缩放' || t_gif_data['breath_type'] == '整体缩放'){
				t_gif.scale.x = 1.00 + (t_gif._breath/t_gif_data['breath_period'] * t_gif_data['breath_spread']/100 );
			}
		}
		//漂浮效果
		if( t_gif_data['float'] ){
			t_gif._f_time += t_gif_data['float_speed'];
			if(t_gif._f_time > 360){ t_gif._f_time -= 360; }
			if(t_gif._f_time < 360){ t_gif._f_time += 360; }
			if(t_gif_data['float_type'] == '上下漂浮' ){
				t_gif.y = t_gif._org_y + Math.sin( t_gif._f_time / 180 * Math.PI ) * t_gif_data['float_spread'];
			}
			if(t_gif_data['float_type'] == '左右漂浮' ){
				t_gif.x = t_gif._org_x + Math.sin( t_gif._f_time / 180 * Math.PI ) * t_gif_data['float_spread'];
			}
		}
	};
};


