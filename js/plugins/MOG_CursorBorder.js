//=============================================================================
// MOG_CursorBorder.js
//=============================================================================
/*:
 * @plugindesc (v1.0)[v1.2]  主菜单 - 菜单选项外框
 * @author Moghunter （Drill_up翻译+优化）
 *
 * @param 是否显示边角
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 * 
 * @param 是否显示边线
 * @type boolean
 * @on 显示
 * @off 不显示
 * @desc true - 显示，false - 不显示
 * @default true
 * 
 * @param 资源-边角
 * @desc 选项边角的图片资源。
 * @default 菜单选项外框-边角
 * @require 1
 * @dir img/Menu__ui/
 * @type file
 *
 * @param 资源-边线
 * @desc 选项边线的图片资源。
 * @default 菜单选项外框-边线
 * @require 1
 * @dir img/Menu__ui/
 * @type file
 * 
 * @param 是否使用边角滑动效果
 * @type boolean
 * @on 使用
 * @off 不使用
 * @desc true - 使用，false - 不使用
 * @default false
 * 
 * @param 平移-外框 X
 * @desc 以选项的位置为基准，x轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 平移-外框 Y
 * @desc 以选项的位置为基准，y轴方向平移，单位像素。（可为负数）
 * @default 0
 *
 * @param 边角间距 X
 * @desc 在选项默认宽度的基础上，设置左右边角x轴方向的间距。（可为负数）
 * @default 4
 *
 * @param 边角间距 Y
 * @desc 在选项默认宽度的基础上，设置上下边角y轴方向的间距。（可为负数）
 * @default 4
 *   
 * @help  
 * =============================================================================
 * +++ MOG - Cursor Border(v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * 菜单中的选项，会被一个动态的外框所包围。
 * 【现已支持插件关联资源的打包、加密】
 *
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：战斗界面、菜单界面、地图界面。
 *   外框作用于所有含选项的窗口。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__ui （Menu后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__ui文件夹。
 * 使用选项外框，需要配置资源文件：
 *
 * 资源-边角
 * 资源-边线
 *
 * 边角资源会被切成四份，分别对应外框的 左上、左下、右上、右下 四个角。
 * 边线资源则直接会根据选项的长度或者宽度进行缩放拉伸。
 *
 * -----------------------------------------------------------------------------
 * ----关于Drill_up优化：
 * [v1.1]
 * 使得该插件支持关联资源的打包、加密。
 * 部署时勾选去除无关文件，本插件中相关的文件不会被去除。
 * [v1.2]
 * 修改了插件关联的资源文件夹。
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_CursorBorder = true;
　　var Moghunter = Moghunter || {}; 

    Moghunter.parameters = PluginManager.parameters('MOG_CursorBorder');
	Moghunter.cborder_Visible = String(Moghunter.parameters['是否显示边角'] || "true");
	Moghunter.cborder_Line = String(Moghunter.parameters['是否显示边线'] || "true");
	Moghunter.cborder_Slide = String(Moghunter.parameters['是否使用边角滑动效果'] || "false");
	Moghunter.cborder_Xaxis = Number(Moghunter.parameters['平移-外框 X'] || 0);
    Moghunter.cborder_Yaxis = Number(Moghunter.parameters['平移-外框 Y'] || 0);	
	Moghunter.cborder_LayoutXaxis = Number(Moghunter.parameters['边角间距 X'] || 4);
    Moghunter.cborder_LayoutYaxis = Number(Moghunter.parameters['边角间距 Y'] || 4);
	Moghunter.src_CursorBorderA = String(Moghunter.parameters['资源-边角']);
	Moghunter.src_CursorBorderB = String(Moghunter.parameters['资源-边线']);

		
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_MenuUi = function(filename) {
    return this.loadBitmap('img/Menu__ui/', filename, 0, true);
};

//=============================================================================
// ** Window Selectable
//=============================================================================
//==============================
// * Initialize
//==============================
var _mog_sprSel_winSel_initialize = Window_Selectable.prototype.initialize;
Window_Selectable.prototype.initialize = function(x, y, width, height) {
	_mog_sprSel_winSel_initialize.call(this,x, y, width, height);
	this.createSprSelMenu();
};

//==============================
// * cursor Border Set Child
//==============================
Window_Selectable.prototype.cursorBorderSetChild = function() {
	var id = 3;
	if (Imported.MOG_Scrollbar) {id = 4};
	if (id > this.children.length) {id = this.children.length};
	return id;
};

//==============================
// * Create Spr Sel
//==============================
Window_Selectable.prototype.createSprSelMenu = function() {
	this._refCursorSel = false;
	this._spriteSelMenu = new SpriteSelectionMenu(this);
	var id = this.cursorBorderSetChild();
	this.addChildAt(this._spriteSelMenu,id);
};

//==============================
// * set Cursor Rect
//==============================
var _mog_sprSel_setCursorRect = Window_Selectable.prototype.setCursorRect;
Window_Selectable.prototype.setCursorRect = function(x, y, width, height) {
	_mog_sprSel_setCursorRect.call(this,x, y, width, height);
    this._refCursorSel = true;
};

//==============================
// * select
//==============================
var _mog_sprSel_wsel_select = Window_Selectable.prototype.select;
Window_Selectable.prototype.select = function(index) {
	_mog_sprSel_wsel_select.call(this,index);
    if (this._spriteSelMenu) {this._spriteSelMenu.update()};
};

//=============================================================================
// ** Sprite Selection Menu
//=============================================================================
function SpriteSelectionMenu() {
    this.initialize.apply(this, arguments);
};

SpriteSelectionMenu.prototype = Object.create(Sprite.prototype);
SpriteSelectionMenu.prototype.constructor = SpriteSelectionMenu;

//==============================
// * Initialize
//==============================
SpriteSelectionMenu.prototype.initialize = function(win) {
    Sprite.prototype.initialize.call(this);
	this._window = win;	
	this.visible = false;
	this.loadBitmaps();
	this.createSprites();
};

//==============================
// * rc
//==============================
SpriteSelectionMenu.prototype.rc = function() {
   return this._window._cursorRect
};

//==============================
// * Load Bitmaps
//==============================
SpriteSelectionMenu.prototype.loadBitmaps = function() {
	this._img1 = ImageManager.load_MenuUi(Moghunter.src_CursorBorderA);
	this._img1._fw = -1;
	this._img2 = ImageManager.load_MenuUi(Moghunter.src_CursorBorderB);
};

//==============================
// * create Sprites
//==============================
SpriteSelectionMenu.prototype.createSprites = function() {
	this.createLines();
	this.createBorder();
};

//==============================
// * create Border
//==============================
SpriteSelectionMenu.prototype.createBorder = function() {
	this._borderAnime = String(Moghunter.cborder_Slide) === "true" ? true : false;
	this._border = [];
	this._border._visible = String(Moghunter.cborder_Visible) === "true" ? true : false;
    this._border._rectX = -1;
	this._border._rectY = -1;	
	this._border._ani = [0,0,0];
	for (var i = 0; i < 4; i++) {
		 this._border[i] = new Sprite(this._img1);
		 this._border[i]._org = [0,0];
		 this._border[i].visible = this._border._visible;
		 this.addChild(this._border[i]);
	};
};

//==============================
// * Set Frames For Border
//==============================
SpriteSelectionMenu.prototype.setFramesForBorder = function() {
     for (var i = 0; i < this._border.length; i++) {
		 var wd = this._img1._fw * i;
		 this._border[i].setFrame(wd,0,this._img1._fw,this._img1.height) 
	 };
};

//==============================
// * Set Border Position
//==============================
SpriteSelectionMenu.prototype.setBorderPosition = function() {
	this._border._ani = [0,0,0];
    for (var i = 0; i < this._border.length; i++) {
		 var p = [0,0];
		 var a = [this.padding() - (this._img1._fw / 2),this.padding() - (this._img1.height / 2)];
		 var bx = Moghunter.cborder_LayoutXaxis;
		 var by = Moghunter.cborder_LayoutYaxis;
		 if (i === 0) {p = [a[0] - bx,a[1] - by]};
		 if (i === 1) {p = [a[0] - bx,a[1] + this.heightF() + by]};
		 if (i === 2) {p = [a[0] + bx + this.widthF(),a[1] - by]};
		 if (i === 3) {p = [a[0] + bx + this.widthF(),a[1] + this.heightF() + by]};
		 this._border[i].x = p[0];
		 this._border[i].y = p[1];
		 this._border[i]._org = [p[0],p[1]];
	};
    this._border._rectX = this.rc().width;
	this._border._rectY = this.rc().height;
};

//==============================
// * update Slide Animation
//==============================
SpriteSelectionMenu.prototype.updateSlideAnimation = function() {
	  this._border._ani[2]++;
	  if (this._border._ani[2] < 3) {return};
	  this._border._ani[2] = 0;
	  this._border._ani[1]++;
	  if (this._border._ani[1] < 10) {
		  this._border._ani[0]--;
	  } else if (this._border._ani[1] < 20) { 
	      this._border._ani[0]++;
	  } else {
		  this._border._ani = [0,0,0];
	  };
};

//==============================
// * update Border
//==============================
SpriteSelectionMenu.prototype.updateBorder = function() {
	this.updateSlideAnimation();
    for (var i = 0; i < this._border.length; i++) {
		 if (i === 0) {
			 nx = this._border[i]._org[0] - this._border._ani[0];
			 ny = this._border[i]._org[1] - this._border._ani[0];
		 };
		 if (i === 1) {
			 nx = this._border[i]._org[0] - this._border._ani[0];
			 ny = this._border[i]._org[1] + this._border._ani[0];
		 };
		 if (i === 2) {
			 nx = this._border[i]._org[0] + this._border._ani[0];
			 ny = this._border[i]._org[1] - this._border._ani[0];
		 };
		 if (i === 3) {
			 nx = this._border[i]._org[0] + this._border._ani[0];
			 ny = this._border[i]._org[1] + this._border._ani[0];
		 };
		 if (!this._window.active) {
			 nx = this._border[i]._org[0];
			 ny = this._border[i]._org[1];
		 };
		 this._border[i].x = nx;
		 this._border[i].y = ny;
	};

};

//==============================
// * create Lines
//==============================
SpriteSelectionMenu.prototype.createLines = function() {
	this._lines = [];
	this._lines._visible = String(Moghunter.cborder_Line) === "true" ? true : false;
	for (var i = 0; i < 4; i++) {
		 this._lines[i] = new Sprite(this._img2);
		 this._lines[i].anchor.y = 0.5; 
		 this._lines[i].visible = this._lines._visible;
		 this._lines[i].rotation = i < 2 ? 0 : 90 * Math.PI / 180;		 
		 this.addChild(this._lines[i]);
	};
};

//==============================
// * Padding
//==============================
SpriteSelectionMenu.prototype.padding = function() {
   return this._window.standardPadding()
};

//==============================
// * Height R
//==============================
SpriteSelectionMenu.prototype.heightR = function() {
     return this.rc().height;
}

//==============================
// * Height F
//==============================
SpriteSelectionMenu.prototype.heightF = function() {
	 if (this.heightR() > this._window.height - (this.padding() * 2)) {
		 return this._window.height - (this.padding() * 2);
	 };
     return this.heightR();
};

//==============================
// * Width R
//==============================
SpriteSelectionMenu.prototype.widthR = function() {
     return this.rc().width;
};

//==============================
// *  Width F
//==============================
SpriteSelectionMenu.prototype.widthF = function() {
	if (this.heightR() > this._window.width - (this.padding() * 2)) {
		return this._window.width - (this.padding() * 2);
	};
    return this.widthR();
};

//==============================
// * Set Line Position
//==============================
SpriteSelectionMenu.prototype.setLinesPosition = function() {
    for (var i = 0; i < this._lines.length; i++) {
		 var p = [0,0];
		 var a = [this.padding(),this.padding()];
		 if (i === 0) {p = [a[0],a[1]]};
		 if (i === 1) {p = [a[0],a[1] + this.heightF()]};
		 if (i === 2) {p = [a[0],a[1]]};
		 if (i === 3) {p = [a[0] + this.widthF(),a[1]]};
		 this._lines[i].x = p[0];
		 this._lines[i].y = p[1];
	};
};

//==============================
// * Set Line Zoom
//==============================
SpriteSelectionMenu.prototype.setLinesZoom = function() {
    for (var i = 0; i < this._lines.length; i++) {
		 if (i < 2) {
			 var z = this.widthF() / this._img2.width;
		 } else {
			 var z = this.heightF() / this._img2.width;
		 };
		 this._lines[i].scale.x = z;
		 this._lines[i].scale.y = 1.00;
	};
};

//==============================
// * set Frames For Sprites
//==============================
SpriteSelectionMenu.prototype.setFramesForSprites = function() {
	 this._img1._fw = this._img1.width / 4;
     this.setFramesForBorder();
};

//==============================
// * refresh Sprites
//==============================
SpriteSelectionMenu.prototype.refreshSprites = function() {
    this._window._refCursorSel = false;
	this.setFramesForSprites();
	if (this.needRefreshBorderPosition()) {this.setBorderPosition()};
	this.setLinesPosition();
	this.setLinesZoom();
};

//==============================
// * Is Visible
//==============================
SpriteSelectionMenu.prototype.needRefreshBorderPosition = function() {
    if (this._border._rectX != this.rc().width) {return true};
	if (this._border._rectY != this.rc().height) {return true};
    return false;
};

//==============================
// * Is Visible
//==============================
SpriteSelectionMenu.prototype.isVisible = function() {
	if (this.rc().width <= 0) {return false};
	if (this.rc().height <= 0) {return false};
	if (this._window.index() < 0) {return false};
	if (this._window._opening) {return false};
	if (this._window._closing) {return false};
	if (this._window.openness <= 0) {return false};
	if (!this._window.visible) {return false};
	return true;
};

//==============================
// * needRefresh
//==============================
SpriteSelectionMenu.prototype.needRefresh = function() {
	if (this._window._refCursorSel) {return true};
    return false;
};

//==============================
// * update Position
//==============================
SpriteSelectionMenu.prototype.updatePosition = function() {
     if (this.needRefresh()) {this.refreshSprites()};
	 if (this._borderAnime) {this.updateBorder()};
	 this.visible = this.isVisible();
	 this.x = this.rc().x + Moghunter.cborder_Xaxis;
  	 this.y = this.rc().y + Moghunter.cborder_Yaxis;
     this.opacity = this._window.contentsOpacity;	
};

//==============================
// * Update
//==============================
SpriteSelectionMenu.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (!this._img1) {return};
    if (!this._img1.isReady()) {return};
	if (!this.rc()) {this.visible = false;return};
	this.updatePosition();
};