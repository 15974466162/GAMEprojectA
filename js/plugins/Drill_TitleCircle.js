//=============================================================================
// Drill_TitleCircle.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        标题 - 多层标题魔法圈
 * @author Drill_up
 *
 * @help
 * =============================================================================
 * +++ Drill_TitleCircle +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以在标题中放置多个魔法圈，并可以切换显示状态。
 * 要了解更详细的组合方法，去看看"多层组合背景,粒子,魔法圈,gif,视频.docx"。
 * 该插件用法与菜单一样，但是，存储数据是全局的。
 * 【支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 先确保项目img文件夹下是否有titles1文件夹！（img/titles1）
 * 如果没有，需要自己建立。需要配置资源文件：
 *
 * 魔法圈1 资源-魔法圈
 * 魔法圈2 资源-魔法圈
 * 魔法圈3 资源-魔法圈
 * ……
 *
 * 你可以在同一个标题里面加入非常多的不同种类的魔法圈。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令控制标题魔法圈的显示情况：
 * 
 * 插件指令（显示）：    >标题魔法圈 : A : 显示
 * 插件指令（隐藏）：    >标题魔法圈 : A : 隐藏
 * 插件指令（隐藏全部）：>标题魔法圈 : 隐藏全部
 *
 * 参数A：魔法圈编号
 *        显示隐藏对应配置的编号。
 *
 * 示例：
 * 插件指令：>标题魔法圈 : 1 : 显示
 * 插件指令：>标题魔法圈 : 3 : 隐藏
 * （切换不同的标题魔法圈，因为处于全局，设置后永久有效）
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 规范了插件指令格式。
 *
 *
 * @param ---魔法圈组 1至20---
 * @default
 *
 * @param 魔法圈-1
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-2
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-3
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-4
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-5
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-6
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-7
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-8
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-9
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-10
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-11
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-12
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-13
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-14
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-15
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-16
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-17
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-18
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-19
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-20
 * @parent ---魔法圈组 1至20---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param ---魔法圈组21至40---
 * @default
 *
 * @param 魔法圈-21
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-22
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-23
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-24
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-25
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-26
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-27
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-28
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-29
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-30
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-31
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-32
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-33
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-34
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-35
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-36
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-37
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-38
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-39
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 *
 * @param 魔法圈-40
 * @parent ---魔法圈组21至40---
 * @type struct<TitleCircle>
 * @desc 魔法圈的详细配置信息。
 * @default 
 */
/*~struct~TitleCircle:
 * 
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default ==新标题魔法圈==
 *
 * @param 初始是否显示
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 *
 * @param 资源-魔法圈
 * @desc 魔法圈的图片资源。
 * @default 魔法圈-默认
 * @require 1
 * @dir img/titles1/
 * @type file
 *
 * @param 平移-魔法圈 X
 * @desc x轴方向平移，单位像素。0为圈的圆心贴在最左边。
 * @default 0
 *
 * @param 平移-魔法圈 Y
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
 * @default 0.01
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
 * @param --3d效果--
 * @desc 
 * 
 * @param 缩放 X
 * @parent --3d效果--
 * @desc 魔法圈的缩放X值，默认比例1.0。缩放将会使得魔法圈看起来旋转具有一定透视。
 * @default 1.0
 * 
 * @param 缩放 Y
 * @parent --3d效果--
 * @desc 魔法圈的缩放Y值，默认比例1.0。缩放将会使得魔法圈看起来旋转具有一定透视。
 * @default 1.0
 * 
 * @param 斜切 X
 * @parent --3d效果--
 * @desc 魔法圈的斜切X值，默认比例0.0。斜切将会使得魔法圈看起来旋转具有一定角度。
 * @default 0.0
 * 
 * @param 斜切 Y
 * @parent --3d效果--
 * @desc 魔法圈的斜切Y值，默认比例0.0。斜切将会使得魔法圈看起来旋转具有一定角度。
 * @default 0.0
 * 
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		临时全局变量	DrillUp.xxx
//		临时局部变量	this._drill_xxx
//		存储数据变量	无
//		全局存储变量	DrillUp.global_title_circle_visible
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
　　Imported.Drill_TitleCircle = true;
　　var DrillUp = DrillUp || {}; 

	DrillUp.parameters = PluginManager.parameters('Drill_TitleCircle');
	
	DrillUp.title_circles_max = 40;
	DrillUp.title_circles = [];
	
	for (var i = 0; i < DrillUp.title_circles_max; i++) {
		if( DrillUp.parameters['魔法圈-' + String(i+1) ] != "" ){
			DrillUp.title_circles[i] = JSON.parse(DrillUp.parameters['魔法圈-' + String(i+1) ]);
			DrillUp.title_circles[i]['visible'] = String(DrillUp.title_circles[i]["初始是否显示"] || "true") == "true";
			DrillUp.title_circles[i]['src_img'] = String(DrillUp.title_circles[i]["资源-魔法圈"]);
			DrillUp.title_circles[i]['x'] = Number(DrillUp.title_circles[i]["平移-魔法圈 X"]);
			DrillUp.title_circles[i]['y'] = Number(DrillUp.title_circles[i]["平移-魔法圈 Y"]);
			DrillUp.title_circles[i]['opacity'] = Number(DrillUp.title_circles[i]["透明度"]);
			DrillUp.title_circles[i]['blendMode'] = Number(DrillUp.title_circles[i]["混合模式"]);
			DrillUp.title_circles[i]['rotate'] = Number(DrillUp.title_circles[i]["旋转速度"]);
			DrillUp.title_circles[i]['title_index'] = Number(DrillUp.title_circles[i]["标题层级"]);
			DrillUp.title_circles[i]['zIndex'] = Number(DrillUp.title_circles[i]["图片层级"]);
			DrillUp.title_circles[i]['scale_x'] = Number(DrillUp.title_circles[i]["缩放 X"] || 1.0);
			DrillUp.title_circles[i]['scale_y'] = Number(DrillUp.title_circles[i]["缩放 Y"] || 1.0);
			DrillUp.title_circles[i]['skew_x'] = Number(DrillUp.title_circles[i]["斜切 X"] || 0);
			DrillUp.title_circles[i]['skew_y'] = Number(DrillUp.title_circles[i]["斜切 Y"] || 0);
		}else{
			DrillUp.title_circles[i] = [];
		}
	}
	
	
//=============================================================================
// ** 全局读取
//=============================================================================
	var _drill_global = DataManager.loadGlobalInfo();
	//alert(JSON.stringify(_drill_global));
	if( !DrillUp.global_title_circle_visible ){	//游戏没关情况
		if( _drill_global && _drill_global[0] && _drill_global[0]["_global_title_circle_visible"] ){		//游戏关闭后，重开读取global中的配置
			DrillUp.global_title_circle_visible = _drill_global[0]["_global_title_circle_visible"];
		}else{
			DrillUp.global_title_circle_visible = [];
			for (var i = 0; i < DrillUp.title_circles.length; i++) {
				DrillUp.global_title_circle_visible.push( DrillUp.title_circles[i]['visible'] );
			}
		}
	}
	
//=============================================================================
// ** 全局存储
//=============================================================================
var _drill_TitleCircle_saveGlobal = DataManager.saveGlobalInfo;
DataManager.saveGlobalInfo = function(info) {	//第0个存档为全局存档
	if(!info[0]){info[0] = []};
	info[0]["_global_title_circle_visible"] = DrillUp.global_title_circle_visible;
	_drill_TitleCircle_saveGlobal.call(this,info);
};
DataManager.forceSaveGlobalInfo = function() {		//强制存储（任何改变的全局变量的地方都需要调用该方法）
	var globalInfo = this.loadGlobalInfo() || [];
	globalInfo[0] = this.makeSavefileInfo();
	this.saveGlobalInfo(globalInfo);
};

//=============================================================================
// * 插件指令
//=============================================================================
var _drill_title_circles_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_title_circles_pluginCommand.call(this, command, args);
	if (command === '>标题魔法圈') {
		if(args.length == 4){
			var temp1 = Number(args[1]) - 1;
			var type = String(args[3]);
			if (type === '显示') {
				DrillUp.global_title_circle_visible[temp1] = true;
				DataManager.forceSaveGlobalInfo();
			}
			if (type === '隐藏') {
				DrillUp.global_title_circle_visible[temp1] = false;
				DataManager.forceSaveGlobalInfo();
			}
		}
		if(args.length == 2){
			var type = String(args[1]);
			if (type === '隐藏全部') {
				for(var i=0; i<DrillUp.global_title_circle_visible.length; i++){
					DrillUp.global_title_circle_visible[i] = false;
				}
				DataManager.forceSaveGlobalInfo();
			}
		}
	}
};


//=============================================================================
// ** 从 Scene_Title 中进行魔法圈追加
//=============================================================================

var _drill_title_circle_createBackground = Scene_Title.prototype.createBackground;
Scene_Title.prototype.createBackground = function() {
	SceneManager._drill_title_circle = false;	
   	this._drill_sprite_circles = [];
   	this._drill_sprite_circles_bitmap = [];
   	this._drill_sprite_circles_data = [];
	_drill_title_circle_createBackground.call(this);		//与背景一同创建
	
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
// * 创建魔法圈
//==============================
Scene_Title.prototype.drill_createCircles = function() {	
	SceneManager._drill_title_circle = true;
	
	if(!this._drill_sprite_circles){
		this._drill_sprite_circles = [];		//防止某些覆写的标题报错
		this._drill_sprite_circles_bitmap = [];
		this._drill_sprite_circles_data = [];
	}
	if( !this._backgroundSprite ){		//标题后面层
		this._backgroundSprite = new Sprite();
	}
	if( !this._foregroundSprite ){		//标题前面层
		this._foregroundSprite = new Sprite();
		this.addChild(this._foregroundSprite);
	}
	
	for (var i = 0; i < DrillUp.title_circles_max; i++) {
		if( DrillUp.title_circles[i].length != 0 ){
			var temp_sprite_data = JSON.parse(JSON.stringify( DrillUp.title_circles[i] ));	//拷贝object（杜绝引用造成的修改）
			
			var temp_sprite_bitmap = new Sprite(ImageManager.loadTitle1(temp_sprite_data['src_img']));
			temp_sprite_bitmap.anchor.x = 0.5;
			temp_sprite_bitmap.anchor.y = 0.5;
			this._drill_sprite_circles_bitmap.push(temp_sprite_bitmap);
			
			var temp_sprite = new Sprite();
			temp_sprite.anchor.x = 0.5;
			temp_sprite.anchor.y = 0.5;
			temp_sprite.x = temp_sprite_data['x'];
			temp_sprite.y = temp_sprite_data['y'];
			temp_sprite.opacity = temp_sprite_data['opacity'];
			temp_sprite.blendMode = temp_sprite_data['blendMode'];
			temp_sprite.zIndex = temp_sprite_data['zIndex'];
			temp_sprite.scale.x = temp_sprite_data['scale_x'];
			temp_sprite.scale.y = temp_sprite_data['scale_y'];
			temp_sprite.skew.x = temp_sprite_data['skew_x'];
			temp_sprite.skew.y = temp_sprite_data['skew_y'];
			temp_sprite.visible = DrillUp.global_title_circle_visible[i];
			temp_sprite.addChild(temp_sprite_bitmap);
			
			this._drill_sprite_circles.push(temp_sprite);
			this._drill_sprite_circles_data.push(temp_sprite_data);
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
// * 刷新魔法圈
//==============================
var _drill_title_circle_update = Scene_Title.prototype.update;
Scene_Title.prototype.update = function() {
	_drill_title_circle_update.call(this);
	
	if ( SceneManager.isCurrentSceneStarted() && !SceneManager._drill_title_circle ) {
		this.drill_createCircles();				//创建，进入界面后只执行一次
	}
	if (SceneManager._drill_title_circle) {this.drill_updateCircles(); }
};

Scene_Title.prototype.drill_updateCircles = function() {
	for (var i = 0; i < this._drill_sprite_circles_bitmap.length; i++) {
		this._drill_sprite_circles_bitmap[i].rotation += this._drill_sprite_circles_data[i]['rotate'];
	};
};


