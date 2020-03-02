//=============================================================================
// Drill_MenuGIF.js
//=============================================================================

/*:
 * @plugindesc [v1.3]        主菜单 - 多层菜单GIF
 * @author Drill_up
 *
 * @help
 * =============================================================================
 * +++ Drill_MenuGIF +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 你可以在任意菜单中放置GIF，只要关键字对上。
 * 这里的GIF，必须拆散成多张图片，然后配置在资源中。
 * 要了解更详细的组合方法，去看看"多层组合背景,粒子,魔法圈,gif,视频.docx"。
 * ★★必须放在 各菜单界面、菜单插件 的前面★★
 * ★★自带背景的菜单插件可能不起作用，因为那个插件自己设置了底图★★
 * 【支持插件关联资源的打包、加密】
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：菜单界面。
 *   可以放置在菜单前面层或者菜单后面层。
 *
 * -----------------------------------------------------------------------------
 * ----关联文件
 * 资源路径：img/Menu__layer_gif （Menu后面有两个下划线）
 * 先确保项目img文件夹下是否有Menu__layer_gif文件夹！
 * 如果没有，需要自己建立。需要配置资源文件：
 * 
 * GIF1 资源-GIF
 * GIF2 资源-GIF
 * GIF3 资源-GIF
 * ……
 *
 * 所有素材都放在Menu__layer_gif文件夹下。
 * 你可以在同一个菜单里面加入非常多的不同种类的GIF。
 *
 * -----------------------------------------------------------------------------
 * ----可选设定
 * 你可以通过插件指令控制菜单GIF的显示情况：
 * 
 * 插件指令：>菜单GIF : 2 : 显示
 * 插件指令：>菜单GIF : 2 : 隐藏
 *
 * 1.数字表示GIF对应配置的编号。
 * 2.GIF没有默认，都是一个个贴在指定菜单中的。
 *
 * -----------------------------------------------------------------------------
 * ----界面与GIF关系表
 * 
 * 可设置   关键字            关系界面
 *  √       Menu             （主菜单界面） 
 *  √       Item             （道具界面） 
 *  √       Skill            （技能界面）
 *  √       Equip            （装备界面） 
 *  √       Status           （状态界面） 
 *  √       Formation        （队形界面） 
 *  √       Options          （选项界面） 
 *  √       Save             （保存界面） 
 *  √       Shop             （商店界面） 
 *  √       GameEnd          （游戏结束选择界面）
 *
 *  √       EnemyBook        （敌人图鉴界面）
 *  √       ItemBook         （道具图鉴界面）
 *  √       Picture_Gallery  （画廊界面）
 *  x       Music_Book       （音乐书界面）
 *  x       Fast_Travel      （世界地图界面）
 *  x       CharSelect       （角色选择界面）
 *
 *  √       Selfplate_A      （全自定义信息面板A）
 *  √       Lagomoro_Mission （小优任务界面）
 *  √       Synthesis        （YEP物品合成界面）
 *  √       Quest            （YEP任务系统界面）
 *
 * 配置GIF关键字时，不要忘了加"Scene_"前缀！
 *
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * [v1.1]
 * 规范了插件指令设置。
 * [v1.2]
 * 添加了漂浮、呼吸效果设置。
 * [v1.3]
 * 修改了插件关联的资源文件夹。
 *
 *
 * @param ---GIF组 1至20---
 * @default
 *
 * @param GIF-1
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-2
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-3
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-4
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-5
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-6
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-7
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-8
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-9
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-10
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-11
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-12
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-13
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-14
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-15
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-16
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-17
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-18
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-19
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-20
 * @parent ---GIF组 1至20---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param ---GIF组21至40---
 * @default
 *
 * @param GIF-21
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-22
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-23
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-24
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-25
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-26
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-27
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-28
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-29
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-30
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-31
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-32
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-33
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-34
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-35
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-36
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-37
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-38
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-39
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-40
 * @parent ---GIF组21至40---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param ---GIF组41至60---
 * @default
 *
 * @param GIF-41
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-42
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-43
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-44
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-45
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-46
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-47
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-48
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-49
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-50
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-51
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-52
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-53
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-54
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-55
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-56
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-57
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-58
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-59
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-60
 * @parent ---GIF组41至60---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param ---GIF组61至80---
 * @default
 *
 * @param GIF-61
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-62
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-63
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-64
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-65
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-66
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-67
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-68
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-69
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-70
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-71
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-72
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-73
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-74
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-75
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-76
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-77
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-78
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-79
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 *
 * @param GIF-80
 * @parent ---GIF组61至80---
 * @type struct<MenuGIF>
 * @desc GIF的详细配置信息。
 * @default 
 */
/*~struct~MenuGIF:
 * 
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default ==新的菜单GIF==
 * 
 * @param 所属菜单
 * @type select
 * @option 主菜单
 * @value 主菜单
 * @option 道具
 * @value 道具
 * @option 技能
 * @value 技能
 * @option 装备
 * @value 装备
 * @option 状态
 * @value 状态
 * @option 队形
 * @value 队形
 * @option 选项
 * @value 选项
 * @option 保存
 * @value 保存
 * @option 商店
 * @value 商店
 * @option 游戏结束
 * @value 游戏结束
 * @option 敌人图鉴
 * @value 敌人图鉴
 * @option 道具图鉴
 * @value 道具图鉴
 * @option 画廊
 * @value 画廊
 * @option 自定义
 * @value 自定义
 * @desc 将GIF放在指定的菜单。如果为自定义，那么要填写自定义关键字。
 * @default 主菜单
 * 
 * @param 自定义关键字
 * @parent 所属菜单
 * @desc 设置所属菜单为自定义时，将根据此关键字找到对应的菜单。前缀为Scene_，比如：Scene_Synthesis。
 * @default 
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
 * @dir img/Menu__layer_gif/
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
 * @param 菜单层级
 * @type select
 * @option 在菜单后面
 * @value 0
 * @option 在菜单前面
 * @value 1
 * @desc 背景所属的菜单层级。
 * @default 0
 *
 * @param 图片层级
 * @type number
 * @min 0
 * @desc 背景在同一个菜单，并且在菜单层级下，先后排序的位置，0表示最后面。
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
//		存储数据变量	$gameSystem._drill_xxx
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		插件结构并不复杂，但是坑多，需要理清楚下面变量的关系：
//			DrillUp.menu_gifs			获取的值（80个）
//			this._drill_sprite_gifs_data	符合的值（小于80个，不要将数组二者混合使用）
//			this._drill_sprite_gifs		符合的图片（小于80个）
//			temp_sprite			临时图片
//			temp_sprite_data	临时的值
//
//			_drill_sprite_gifs_bitmap	用于存储GIF图片信息，因为图片经过了 旋转 和 斜切 两层图片处理。
//

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_MenuGIF = true;
　　var DrillUp = DrillUp || {}; 

	DrillUp.parameters = PluginManager.parameters('Drill_MenuGIF');
	
	DrillUp.menu_gifs_max = 80;
	DrillUp.menu_gifs = [];
	
	for (var i = 0; i < DrillUp.menu_gifs_max; i++) {
		if( DrillUp.parameters['GIF-' + String(i+1) ] != "" ){
			DrillUp.menu_gifs[i] = JSON.parse(DrillUp.parameters['GIF-' + String(i+1) ]);
			DrillUp.menu_gifs[i]['visible'] = String(DrillUp.menu_gifs[i]["初始是否显示"] || "true") == "true";
			DrillUp.menu_gifs[i]['menu'] = DrillUp.menu_gifs[i]["所属菜单"];
			DrillUp.menu_gifs[i]['menu_key'] = DrillUp.menu_gifs[i]["自定义关键字"];
			DrillUp.menu_gifs[i]['x'] = Number(DrillUp.menu_gifs[i]["平移-GIF X"]);
			DrillUp.menu_gifs[i]['y'] = Number(DrillUp.menu_gifs[i]["平移-GIF Y"]);
			DrillUp.menu_gifs[i]['opacity'] = Number(DrillUp.menu_gifs[i]["透明度"]);
			DrillUp.menu_gifs[i]['blendMode'] = Number(DrillUp.menu_gifs[i]["混合模式"]);
			DrillUp.menu_gifs[i]['rotate'] = Number(DrillUp.menu_gifs[i]["旋转速度"]);
			DrillUp.menu_gifs[i]['menu_index'] = Number(DrillUp.menu_gifs[i]["菜单层级"]);
			DrillUp.menu_gifs[i]['zIndex'] = Number(DrillUp.menu_gifs[i]["图片层级"]);
			DrillUp.menu_gifs[i]['src_img'] = JSON.parse(DrillUp.menu_gifs[i]["资源-GIF"]);
			DrillUp.menu_gifs[i]['interval'] = Number(DrillUp.menu_gifs[i]["帧间隔"]);
			DrillUp.menu_gifs[i]['back_run'] = String(DrillUp.menu_gifs[i]["是否倒放"] || "false") == "true";
			DrillUp.menu_gifs[i]['src_bitmaps'] = [];
			
			DrillUp.menu_gifs[i]['breath'] = String(DrillUp.menu_gifs[i]["是否使用呼吸效果"] || "false") == "true";
			DrillUp.menu_gifs[i]['breath_period'] = Number(DrillUp.menu_gifs[i]["呼吸周期"] || 70);
			DrillUp.menu_gifs[i]['breath_spread'] = Number(DrillUp.menu_gifs[i]["呼吸幅度"] || 8);
			DrillUp.menu_gifs[i]['breath_type'] = String(DrillUp.menu_gifs[i]["呼吸类型"] || '上下缩放');
			
			DrillUp.menu_gifs[i]['float'] = String(DrillUp.menu_gifs[i]["是否使用漂浮效果"] || "false") == "true";
			DrillUp.menu_gifs[i]['float_speed'] = Number(DrillUp.menu_gifs[i]["漂浮速度"] || 70);
			DrillUp.menu_gifs[i]['float_spread'] = Number(DrillUp.menu_gifs[i]["漂浮幅度"] || 8);
			DrillUp.menu_gifs[i]['float_type'] = String(DrillUp.menu_gifs[i]["漂浮类型"] || '上下漂浮');
			
		}else{
			DrillUp.menu_gifs[i] = [];
		}
	}
	//alert(JSON.stringify(DrillUp.menu_gifs[0]));
	
	
//=============================================================================
// ** 资源文件夹
//=============================================================================
ImageManager.load_MenuLayerGIF = function(filename) {
    return this.loadBitmap('img/Menu__layer_gif/', filename, 0, true);
};

//=============================================================================
// * 插件指令
//=============================================================================
var _drill_menu_gifs_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_drill_menu_gifs_pluginCommand.call(this, command, args);
	if (command === '>菜单GIF') {
		if(args.length == 4){
			var temp1 = Number(args[1]) - 1;
			var type = String(args[3]);
			if (type === '显示') {
				if( !$gameSystem._drill_sprite_gifs_visible ){ $gameSystem.drill_gifVarInit();}
				$gameSystem._drill_sprite_gifs_visible[temp1] = true;
			}
			if (type === '隐藏') {
				if( !$gameSystem._drill_sprite_gifs_visible ){ $gameSystem.drill_gifVarInit();}
				$gameSystem._drill_sprite_gifs_visible[temp1] = false;
			}
			/*	（呼吸改变中心锚点）
			if (type === '开启呼吸') {
				if( !$gameSystem._drill_sprite_gifs_breath ){ $gameSystem.drill_gifVarInit();}
				$gameSystem._drill_sprite_gifs_breath[temp1] = true;
			}
			if (type === '关闭呼吸') {
				if( !$gameSystem._drill_sprite_gifs_breath ){ $gameSystem.drill_gifVarInit();}
				$gameSystem._drill_sprite_gifs_breath[temp1] = false;
			}*/
		}
	}
};


//=============================================================================
// ** 从 Scene_MenuBase 中进行GIF追加
//=============================================================================

var _drill_menu_gif_createBackground = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function() {
	SceneManager._drill_menu_gif = false;	
   	this._drill_sprite_gifs = [];
   	this._drill_sprite_gifs_data = [];
	if( !$gameSystem._drill_sprite_gifs_visible ){ $gameSystem.drill_gifVarInit();}
	_drill_menu_gif_createBackground.call(this);		//与背景一同创建
};

var _drill_menu_gif_terminate = Scene_MenuBase.prototype.terminate;
Scene_MenuBase.prototype.terminate = function() {
	_drill_menu_gif_terminate.call(this);			//设置需要下次重新创建
	SceneManager._drill_menu_gif = false;
};

Game_System.prototype.drill_gifVarInit = function() {	//显示数据初始化
	$gameSystem._drill_sprite_gifs_visible = [];
	$gameSystem._drill_sprite_gifs_breath = [];
	for(var i = 0; i< DrillUp.menu_gifs.length ;i++){
		$gameSystem._drill_sprite_gifs_visible[i] = DrillUp.menu_gifs[i]['visible'];
		$gameSystem._drill_sprite_gifs_breath[i] = DrillUp.menu_gifs[i]['breath'];
	}
};

//==============================
// ** 层级排序
//==============================
Scene_MenuBase.prototype.drill_sortByZIndex = function() {
   this._backgroundSprite.children.sort(function(a, b){return a.zIndex-b.zIndex});	//比较器
   this._foregroundSprite.children.sort(function(a, b){return a.zIndex-b.zIndex});
};

//==============================
// * 创建GIF
//==============================
Scene_MenuBase.prototype.drill_createGIFs = function() {	
	SceneManager._drill_menu_gif = true;
	if(!this._drill_sprite_gifs){
		this._drill_sprite_gifs = [];		//防止某些覆写的菜单报错
		this._drill_sprite_gifs_data = [];
	}
	if( !this._backgroundSprite ){		//菜单后面层
		this._backgroundSprite = new Sprite();
	}
	if( !this._foregroundSprite ){		//菜单前面层
		this._foregroundSprite = new Sprite();
		this.addChild(this._foregroundSprite);
	}
	
	for (var i = 0; i < DrillUp.menu_gifs_max; i++) {
		if( this.drill_checkGIFs(i) ){
			var temp_sprite_data = JSON.parse(JSON.stringify( DrillUp.menu_gifs[i] ));	//拷贝object（杜绝引用造成的修改）
			
			for(var j = 0; j < temp_sprite_data['src_img'].length ; j++){
				temp_sprite_data['src_bitmaps'].push(ImageManager.load_MenuLayerGIF(temp_sprite_data['src_img'][j]));
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
			temp_sprite.visible = $gameSystem._drill_sprite_gifs_visible[i];
			
			temp_sprite._breath = Math.random() * temp_sprite_data['breath_period'];
			temp_sprite._breath_dir = Math.floor(Math.random() * 2);
			temp_sprite._f_time = 0;
			
			this._drill_sprite_gifs.push(temp_sprite);
			this._drill_sprite_gifs_data.push(temp_sprite_data);
			if( temp_sprite_data['menu_index'] == 0 ){
				this._backgroundSprite.addChild(temp_sprite);
			}else{
				this._foregroundSprite.addChild(temp_sprite);
			}
		}
	}
	this.drill_sortByZIndex();
};

//==============================
// * 检查GIF所在菜单
//==============================
Scene_MenuBase.prototype.drill_checkGIFs = function(i) {
	var temp_sprite_data = DrillUp.menu_gifs[i] ; 	//注意，执行该方法，是在DrillUp.menu_gifs中遍历
	if ( temp_sprite_data === undefined || temp_sprite_data.length == 0  ) {
		return false;	
	}
	if( SceneManager._scene.constructor.name === "Scene_Menu" && temp_sprite_data['menu'] == "主菜单" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Item" && temp_sprite_data['menu'] == "道具" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Skill" && temp_sprite_data['menu'] == "技能" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Equip" && temp_sprite_data['menu'] == "装备" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Status" && temp_sprite_data['menu'] == "状态" ){
		return true;
	}else if( (SceneManager._scene.constructor.name === "Scene_Party"||SceneManager._scene.constructor.name === "Scene_Formation") && temp_sprite_data['menu'] == "队形"  ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Options" && temp_sprite_data['menu'] == "选项" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Save" && temp_sprite_data['menu'] == "保存" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Shop" && temp_sprite_data['menu'] == "商店" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_GameEnd" && temp_sprite_data['menu'] == "游戏结束" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_EnemyBook" && temp_sprite_data['menu'] == "敌人图鉴" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_ItemBook" && temp_sprite_data['menu'] == "物品图鉴" ){
		return true;
	}else if( SceneManager._scene.constructor.name === "Scene_Picture_Gallery" && temp_sprite_data['menu'] == "画廊" ){
		return true;
	}else{
		if( SceneManager._scene.constructor.name === temp_sprite_data['menu_key'] ){
			return true;
		}
	}
	return false;
};

//==============================
// * 刷新GIF
//==============================
var _drill_menu_gif_update = Scene_MenuBase.prototype.update;
Scene_MenuBase.prototype.update = function() {
	_drill_menu_gif_update.call(this);
	
	if ( SceneManager.isCurrentSceneStarted() && !SceneManager._drill_menu_gif ) {
		this.drill_createGIFs();				//创建，进入界面后只执行一次
	}
	if (SceneManager._drill_menu_gif) {this.drill_updateGIFs(); }
};

Scene_MenuBase.prototype.drill_updateGIFs = function() {
	for (var i = 0; i < this._drill_sprite_gifs.length; i++) {
		var t_gif = this._drill_sprite_gifs[i];
		var t_gif_data = this._drill_sprite_gifs_data[i];
		
		//播放gif
		t_gif._time += 1;
		var inter = this._drill_sprite_gifs[i]._time ;
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


