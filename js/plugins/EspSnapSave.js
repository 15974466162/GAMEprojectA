//=============================================================================
// EspSnapSave.js
//=============================================================================

/*:
 * @plugindesc 截图存档.
 * @author Esp
 *
 * @param ThumbnailBottomOffset
 * @desc 文件场景的略缩图底部的微调量, 一般留为0就行了.
 * @default 0
 */

var Imported = Imported || {};
Imported.Esp = Imported.Esp || function(){};

(function() {
if (Imported.Esp.SnapSave == void 0) {
Imported.Esp.SnapSave = function(){};


var parameters = PluginManager.parameters('EspSnapSave');
Imported.Esp.SnapSave.thumbnailBottomOffset = Number(parameters['ThumbnailBottomOffset'] || 0);


var dmsg = DataManager.saveGame;
DataManager.saveGame = function(savefileId) {
  if(StorageManager.exists(savefileId)) {
    this.removeThumbnail(this.loadGlobalInfo()[savefileId].thumbnail);
  }
  return dmsg.apply(this, arguments);
};

var dmmsfi = DataManager.makeSavefileInfo;
DataManager.makeSavefileInfo = function() {
  var info = dmmsfi.apply(this, arguments);
  info.thumbnail = 'espSaveThumbnail' + Date.now().toString();
  this.saveThumbnail(info.thumbnail, SceneManager.saveThumbnail());
  return info;
};

DataManager.saveThumbnail = function(key, thumbnail) {
  StorageManager.saveThumbnail(key, thumbnail.canvas.toDataURL('image/png'));
};

DataManager.loadThumbnail = function(key) {
  return StorageManager.loadThumbnail(key);
};

DataManager.removeThumbnail = function(key) {
  StorageManager.removeThumbnail(key);
};

StorageManager.saveThumbnail = function(key, data) {
  if (this.isLocalMode()) {
    var fs = require('fs');
    var dirPath = this.localFileDirectoryPath();
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
    fs.writeFileSync(dirPath + key, data);
  } else {
    localStorage.setItem(key, data);
  }
};

StorageManager.loadThumbnail = function(key) {
  if (this.isLocalMode()) {
    var data = null;
    var fs = require('fs');
    var filePath = this.localFileDirectoryPath() + key;
    if (fs.existsSync(filePath)) {
      data = fs.readFileSync(filePath, { encoding: 'utf8' });
    }
    return data;
  } else {
    var data = localStorage.getItem(key);
    return data;
  }
};

StorageManager.removeThumbnail = function(key) {
  if (this.isLocalMode()) {
    var fs = require('fs');
    var filePath = this.localFileDirectoryPath() + key;
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  } else {
    localStorage.removeItem(key);
  }
};

ImageManager.loadThumbnail= function(key) {
  if (!this._cache[key]) {
    var bitmap = Bitmap.load(DataManager.loadThumbnail(key));
    this._cache[key] = bitmap;
  }
  return this._cache[key];
};

SceneManager._saveThumbnail  = null;

SceneManager.snapForSave = function() {
  this._saveThumbnail = this.snap();
};

SceneManager.saveThumbnail = function() {
  return this._saveThumbnail;
};

Window_SavefileList.prototype.maxVisibleItems = function() {
  var innerHeight = this.lineHeight() - this.padding * 2;
  return Math.floor(innerHeight / this.itemHeight());
};

Window_SavefileList.prototype.itemHeight = function() {
  return this.lineHeight();
};

Window_SavefileList.prototype.drawItem = function(index) {
  var id = index + 1;
  var valid = DataManager.isThisGameFile(id);
  var rect = this.itemRectForText(index);
  this.resetTextColor();
  if (this._mode === 'load') {
    this.changePaintOpacity(valid);
  }
  this.drawFileId(id, rect.x, rect.y);
};

Window_SavefileList.prototype.processCursorMove = function() {
  var lastIndex = this.index();
  Window_Selectable.prototype.processCursorMove.apply(this, arguments);
  if (this.index() !== lastIndex) {
    this.refreshThumbnailWindow();
  }
};

Window_SavefileList.prototype.onTouch = function(triggered) {
  var lastIndex = this.index();
  Window_Selectable.prototype.onTouch.apply(this, arguments);
  if (this.index() !== lastIndex) {
    this.refreshThumbnailWindow();
  }
};

Window_SavefileList.prototype.setThumbnailWindow = function(thumbnailWindow) {
  this._thumbnailWindow = thumbnailWindow;
};

Window_SavefileList.prototype.refreshThumbnailWindow = function() {
  if (this._thumbnailWindow) {
    this._thumbnailWindow.drawInfo(this.index());
  }
};

function Window_SavefileThumbnail() {
  this.initialize.apply(this, arguments);
}

Window_SavefileThumbnail.prototype = Object.create(Window_Base.prototype);
Window_SavefileThumbnail.prototype.constructor = Window_SavefileThumbnail;

Window_SavefileThumbnail.prototype.initialize = function(x, y, width, height) {
  Window_Base.prototype.initialize.apply(this, arguments);
};

Window_SavefileThumbnail.prototype.drawPartyCharacters = Window_SavefileList.prototype.drawPartyCharacters;

Window_SavefileThumbnail.prototype.drawPlaytime = Window_SavefileList.prototype.drawPlaytime;

Window_SavefileThumbnail.prototype.drawInfo = function(index) {
  this.contents.clear();
  info = DataManager.loadSavefileInfo(index + 1);
  if (info) {
    var x = this.standardPadding() * 2;
    this.drawPartyCharacters(info, x, this.contentsHeight());
    var width = this.contents.measureTextWidth('measureTextWidth');
    this.drawPlaytime(info, this.contentsWidth() - width, this.contentsHeight() - x, width);
    width = this.contentsWidth() - x * 2;
    var height = this.contentsHeight() -  x * 2 - 48 - Imported.Esp.SnapSave.thumbnailBottomOffset;
    this.drawThumbnailBitmap(info, x, x, width, height);
  }
};

Window_SavefileThumbnail.prototype.drawThumbnailBitmap = function(info, x, y, width, height) {
  if (info.thumbnail) {
    bitmap = ImageManager.loadThumbnail(info.thumbnail);
    bitmap.addLoadListener(function(){
      this.contents.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, width, height);
    }.bind(this));
  }
};

var smtmn = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
  SceneManager.snapForSave();
  smtmn.apply(this, arguments);
};

Scene_File.prototype.create = function() {
  Scene_MenuBase.prototype.create.call(this);
  DataManager.loadAllSavefileImages();
  this.createHelpWindow();
  this.createListWindow();
  this.createThumbnailWindow();
};

Scene_File.prototype.createHelpWindow = function() {
    this._helpWindow = new Window_Help(1);
    this._helpWindow.setText(this.helpWindowText());
    this.addWindow(this._helpWindow);
};

Scene_File.prototype.createListWindow = function() {
  var x = 0;
  var y = this._helpWindow.height;
  var width = this._helpWindow.contents.measureTextWidth('measureTextWidth');
  var height = Graphics.boxHeight - y;
  this._listWindow = new Window_SavefileList(x, y, width, height);
  this._listWindow.setHandler('ok',     this.onSavefileOk.bind(this));
  this._listWindow.setHandler('cancel', this.popScene.bind(this));
  this._listWindow.select(this.firstSavefileIndex());
  this._listWindow.setTopRow(this.firstSavefileIndex() - 2);
  this._listWindow.setMode(this.mode());
  this._listWindow.refresh();
  this.addWindow(this._listWindow);
};

Scene_File.prototype.createThumbnailWindow = function() {
  var x = this._listWindow.width;
  var y = this._helpWindow.height;
  var width = Graphics.boxWidth - x;
  var height = Graphics.boxHeight - y;
  this._thumbnailWindow = new Window_SavefileThumbnail(x, y, width, height);
  this._listWindow.setThumbnailWindow(this._thumbnailWindow);
  this._listWindow.refreshThumbnailWindow();
  this.addWindow(this._thumbnailWindow);
};


}
})();
