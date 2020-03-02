//=============================================================================
// Drill_CoreOfFixedArea.js
//=============================================================================

/*:
 * @plugindesc [v1.1]        物体触发 - 固定区域核心
 * @author Drill_up
 *
 * 
 * @help  
 * =============================================================================
 * +++ Drill_CoreOfFixedArea +++
 * 作者：Drill_up
 * 如果你有兴趣，也可以来看看我的mog中文全翻译插件哦ヽ(*。>Д<)o゜
 * https://rpg.blue/thread-409713-1-1.html
 * =============================================================================
 * 该插件为基础核心。用于配置、规划自定义区域 与 筛选器。
 * 如果想了解更多内容，去看看"关于物体触发-固定区域.docx"。
 * 
 * -----------------------------------------------------------------------------
 * ----插件扩展
 * 该插件为基础核心，是以下插件的依赖。
 * 可作用于：
 *   - Drill_EventAutoTrigger      物体触发 - 固定区域 & 玩家接近 & 条件触发
 *   - Drill_EventRangeTrigger     物体触发 - 固定区域 & 条件触发
 *   - Drill_EventRangeAnimation   物体触发 - 固定区域 & 播放并行动画
 *   - Drill_EventRandomPoint      物体触发 - 固定区域 & 随机点
 * 可被扩展：
 *   - Drill_CoreOfEventTags       物体 - 事件标签核心
 *     通过该插件，事件的筛选器可以支持"必须含下列标签的事件"的捕获。
 * 
 * -----------------------------------------------------------------------------
 * ----设定注意事项
 * 1.插件的作用域：地图界面。
 *   作用于区域、图块、事件。
 * 固定区域：
 *   (1.默认有 菱形、方形、圆形、十字、横条、竖条 六种形状，都与方向无关。
 *   (2.你可以 自定义区域，自定义区域与方向有关，可在当前核心中配置。
 * 筛选器：
 *   (1.固定区域可经过筛选器筛选。
 *   (2.筛选器需要在相关子插件中开启。
 * 
 * -----------------------------------------------------------------------------
 * ----更新日志
 * [v1.0]
 * 完成插件ヽ(*。>Д<)o゜
 * 
 *
 * @param ---自定义固定区域1至20---
 * @desc 
 * 
 * @param 自定义区域-1
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default {"标签":"--前三格--","点列表":"(0,0),(-1,-1),(-1,0),(-1,1)","是否与事件朝向一致":"true"}
 *
 * @param 自定义区域-2
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default {"标签":"--扇形--","点列表":"(0,0),(-1,-1),(-1,0),(-1,1),(-2,-2),(-2,-1),(-2,0),(-2,1),(-2,2),(-3,0)","是否与事件朝向一致":"true"}
 * 
 * @param 自定义区域-3
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default {"标签":"--突刺剑--","点列表":"(0,0),(-1,-1),(-1,0),(-1,1),(-2,0),(-3,0),(-4,0)","是否与事件朝向一致":"true"}
 *
 * @param 自定义区域-4
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default {"标签":"--回旋环形--","点列表":"(0,0),(3,0),(2,1),(1,2),(0,3),(-1,2),(-2,1),(-3,0),(-2,-1),(-1,-2),(0,-3),(1,-2),(2,-1)","是否与事件朝向一致":"false"}
 * 
 * @param 自定义区域-5
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-6
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-7
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-8
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-9
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-10
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-11
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-12
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-13
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-14
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-15
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-16
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-17
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-18
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-19
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-20
 * @parent ---自定义固定区域1至20---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param ---自定义固定区域21至40---
 * @desc 
 * 
 * @param 自定义区域-21
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-22
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-23
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-24
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-25
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-26
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-27
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-28
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-29
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-30
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-31
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-32
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-33
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-34
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-35
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-36
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-37
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-38
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-39
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-40
 * @parent ---自定义固定区域21至40---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param ---自定义固定区域41至60---
 * @desc 
 * 
 * @param 自定义区域-41
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-42
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-43
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-44
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-45
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-46
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-47
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-48
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-49
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-50
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-51
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-52
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-53
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-54
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-55
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-56
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-57
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-58
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 * 
 * @param 自定义区域-59
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param 自定义区域-60
 * @parent ---自定义固定区域41至60---
 * @type struct<AreaDefine>
 * @desc 设置自定义的固定区域。
 * @default 
 *
 * @param ---筛选器1至20---
 * @desc 
 * 
 * @param 筛选器-1
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default {"标签":"--排除事件--","区域-中心点":"任意","图块-通行":"任意","图块-事件":"必须不含事件","图块-地形标志":"任意","地形标志列表":"[]","图块-R图块标志":"任意","R图块标志列表":"[]"}
 * 
 * @param 筛选器-2
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default {"标签":"--只留事件--","区域-中心点":"任意","图块-通行":"任意","图块-事件":"必须含事件","图块-地形标志":"任意","地形标志列表":"[]","图块-R图块标志":"任意","R图块标志列表":"[]"}
 * 
 * @param 筛选器-3
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default {"标签":"--排除不可通行--","区域-中心点":"任意","图块-通行":"必须可通行","图块-事件":"任意","图块-地形标志":"任意","地形标志列表":"[]","图块-R图块标志":"任意","R图块标志列表":"[]"}
 * 
 * @param 筛选器-4
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default {"标签":"--只留不可通行--","区域-中心点":"任意","图块-通行":"必须不可通行","图块-事件":"任意","图块-地形标志":"任意","地形标志列表":"[]","图块-R图块标志":"任意","R图块标志列表":"[]"}
 * 
 * @param 筛选器-5
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-6
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-7
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-8
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-9
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-10
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-11
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-12
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-13
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-14
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-15
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-16
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-17
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-18
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-19
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-20
 * @parent ---筛选器1至20---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 *
 *
 * @param ---筛选器21至40---
 * @desc 
 * 
 * @param 筛选器-21
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-22
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-23
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-24
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-25
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-26
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-27
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-28
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-29
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-30
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-31
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-32
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-33
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-34
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-35
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-36
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-37
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-38
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-39
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 * @param 筛选器-40
 * @parent ---筛选器21至40---
 * @type struct<AreaCondition>
 * @desc 设置自定义的条件筛选器。
 * @default 
 * 
 */
/*~struct~AreaDefine:
 * 
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default --新的区域--
 *
 * @param 点列表
 * @desc 自定义区域的所有点，为相对坐标，(0,0)表示事件中心。格式为：(0,0),(1,0),(-1,0),(1,1)……
 * @default (0,0)
 * 
 * @param 是否与事件朝向一致
 * @type boolean
 * @on 一致
 * @off 关闭
 * @desc true - 一致，false - 关闭
 * @default true
 *
 */
/*~struct~AreaCondition:
 * 
 * @param 标签
 * @desc 只用于方便区分查看的标签，不作用在插件中。
 * @default --新的筛选器--
 * 
 * @param 区域-中心点
 * @type select
 * @option 一定包含
 * @value 一定包含
 * @option 一定不含
 * @value 一定不含
 * @option 任意
 * @value 任意
 * @desc 区域的中心点，不管是否符合后面条件，一定包含/不含。
 * @default 任意
 *
 * @param 图块-通行
 * @type select
 * @option 必须可通行
 * @value 必须可通行
 * @option 必须不可通行
 * @value 必须不可通行
 * @option 任意
 * @value 任意
 * @desc 设置区域内图块必须满足的通行条件。
 * @default 任意
 *
 * @param 图块-事件
 * @type select
 * @option 必须含事件
 * @value 必须含事件
 * @option 必须含下列标签的事件
 * @value 必须含下列标签的事件
 * @option 必须含除下列标签以外的事件
 * @value 必须含除下列标签以外的事件
 * @option 必须不含事件
 * @value 必须不含事件
 * @option 只排除下列标签的事件
 * @value 只排除下列标签的事件
 * @option 只排除除下列标签以外的事件
 * @value 只排除除下列标签以外的事件
 * @option 任意
 * @value 任意
 * @desc 设置区域内图块必须满足的事件条件。
 * @default 任意
 * 
 * @param 事件标签列表
 * @parent 图块-事件
 * @type text[]
 * @desc 填入事件标签，指定的标签都会作为条件放入筛选器进行筛选。
 * @default []
 *
 * @param 图块-地形标志
 * @type select
 * @option 必须含下列标志
 * @value 必须含下列标志
 * @option 必须不含下列标志
 * @value 必须不含下列标志
 * @option 任意
 * @value 任意
 * @desc 设置区域内图块必须满足的地形标志条件。
 * @default 任意
 * 
 * @param 地形标志列表
 * @parent 图块-地形标志
 * @type number[]
 * @min 0
 * @max 7
 * @desc 填入地形标志，这些设置会作为条件放入筛选器进行筛选。
 * @default []
 *
 * @param 图块-R图块标志
 * @type select
 * @option 必须含下列R图块值
 * @value 必须含下列R图块值
 * @option 必须不含下列R图块值
 * @value 必须不含下列R图块值
 * @option 任意
 * @value 任意
 * @desc 设置区域内图块必须满足的R图块标志条件。
 * @default 任意
 * 
 * @param R图块标志列表
 * @parent 图块-R图块标志
 * @type number[]
 * @min 0
 * @max 255
 * @desc 填入区域id，这些设置会作为条件放入筛选器进行筛选。
 * @default []
 * 
 * @param 区域-中心点
 * @type select
 * @option 一定包含
 * @value 一定包含
 * @option 一定不含
 * @value 一定不含
 * @option 任意
 * @value 任意
 * @desc 区域的中心点，不管是否符合后面条件，一定包含/不含。
 * @default 任意
 *
 */
 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//		插件简称		COFA（Core_Of_Fixed_Area）
//		临时全局变量	DrillUp.g_COFA_xxx
//		临时局部变量	无
//		存储数据变量	无
//		全局存储变量	无
//		覆盖重写方法	无
//
//插件记录：
//		★大体框架与功能如下：
//			区域核心：
//				->固定区域/自定义区域
//				->点集合（只操作点）
//				->条件筛选
//				->根据独立性封装函数
//				
//		★必要注意事项：
//			1.isPassable在地图载入时，因为未加载完全，会出现filter错误。（this.tileEvents造成的）
//			  但是，这是一个诡异的rmmv bug，tileEvents是数组，却不知道哪里被赋值了空字符串。
//
//		★其它说明细节：
//			1.概念与思路的建设难度远比插件要大。
//			  为了分离出"筛选器"的概念，我苦思冥想花费了一星期的时间，由于区域纠缠在一起，实在难以分割。
//				
//		★存在的问题：
//			暂无
//

//=============================================================================
// ** 变量获取
//=============================================================================
　　var Imported = Imported || {};
　　Imported.Drill_CoreOfFixedArea = true;
　　var DrillUp = DrillUp || {}; 
    DrillUp.parameters = PluginManager.parameters('Drill_CoreOfFixedArea');

	DrillUp.g_COFA_area_list_length = 60;
	DrillUp.g_COFA_area_list = [];
	
	for (var i = 0; i < DrillUp.g_COFA_area_list_length; i++) {
		if( DrillUp.parameters['自定义区域-' + String(i+1) ] != "" ){
			DrillUp.g_COFA_area_list[i] = JSON.parse(DrillUp.parameters['自定义区域-' + String(i+1) ]);
			DrillUp.g_COFA_area_list[i]['consistent'] = String(DrillUp.g_COFA_area_list[i]["是否与事件朝向一致"] || "true") == "true";
			var points = String( DrillUp.g_COFA_area_list[i]['点列表'] );
			points = points.replace(/[ ]/g,"");
			points = points.replace(/[\(（]/g,"");
			points = points.replace(/[\)）]/g,"");
			points = points.split(/[,，]/g);
			if(points.length == 0 || points.length %2 == 1 ){
				continue;
			}
			DrillUp.g_COFA_area_list[i]['points'] = [];
			for ( var j = 0; j < points.length ; j+=2 ) {
				var x = Number( points[j] );
				var y = Number( points[j+1] );
				DrillUp.g_COFA_area_list[i]['points'].push({ 'x':x,'y':y });
			}
			//alert(JSON.stringify(DrillUp.g_COFA_area_list[i]));
		}else{
			DrillUp.g_COFA_area_list[i] = [];
		}
	}
	
	DrillUp.g_COFA_condition_list_length = 40;
	DrillUp.g_COFA_condition_list = [];
	
	for (var i = 0; i < DrillUp.g_COFA_condition_list_length; i++) {
		if( DrillUp.parameters['筛选器-' + String(i+1) ] != "" ){
			DrillUp.g_COFA_condition_list[i] = JSON.parse(DrillUp.parameters['筛选器-' + String(i+1) ]);
			DrillUp.g_COFA_condition_list[i]['center'] = String(DrillUp.g_COFA_condition_list[i]["区域-中心点"] || "任意");
			DrillUp.g_COFA_condition_list[i]['block'] = String(DrillUp.g_COFA_condition_list[i]["图块-通行"] || "任意");
			DrillUp.g_COFA_condition_list[i]['event'] = String(DrillUp.g_COFA_condition_list[i]["图块-事件"] || "任意");
			DrillUp.g_COFA_condition_list[i]['tlie'] = String(DrillUp.g_COFA_condition_list[i]["图块-地形标志"] || "任意");
			DrillUp.g_COFA_condition_list[i]['tlie_list'] = JSON.parse(DrillUp.g_COFA_condition_list[i]['地形标志列表']);
			DrillUp.g_COFA_condition_list[i]['rRegion'] = String(DrillUp.g_COFA_condition_list[i]["图块-R图块标志"] || "任意");
			DrillUp.g_COFA_condition_list[i]['rRegion_list'] = JSON.parse(DrillUp.g_COFA_condition_list[i]['R图块标志列表']);
			if( DrillUp.g_COFA_condition_list[i]['事件标签列表'] ){
				DrillUp.g_COFA_condition_list[i]['eventTag_list'] = JSON.parse(DrillUp.g_COFA_condition_list[i]['事件标签列表']);
			}else{
				DrillUp.g_COFA_condition_list[i]['eventTag_list']
			}
		}
	}
	
//=============================================================================
// * 点集合
//=============================================================================
//==============================
// * 点集合 - 固定形状
//			  参数：绝对中心点xy，区域类型，区域范围
//			  返回：绝对坐标列表 { x:12 , y:23 } 
//==============================
Game_Map.prototype.drill_COFA_getShapePoints = function(c_x, c_y, type, range ) {
	var c_area = [];
	for (var i = -range; i <= range; i++) {
		for (var j = -range; j <= range; j++) {
			if( type == "方形区域" ){		//deltaX()函数考虑了循环地图的情况（公式：dx <= r，dy <= r）
				if( Math.abs(i) <= range && Math.abs(j) <= range){	
					c_area.push({'x':c_x + i,'y':c_y + j});
				}
			}
			if( type == "菱形区域" ){		//（公式：dx + dy <= r）
				if( Math.abs(i) + Math.abs(j) <= range ){
					c_area.push({'x':c_x + i,'y':c_y + j});
				}
			}
			if( type == "圆形区域" ){		//（公式：dx^2 + dy^2 <= r^2）
				if( Math.pow( i ,2) + Math.pow( j ,2) <= Math.pow(range,2) ){	
					c_area.push({'x':c_x + i,'y':c_y + j});
				}
			}
			if( type == "十字区域" ){		//（公式：dx + dy <= r 且 (dx==0 或 dy==0) ）
				if( Math.abs(i) <= range && Math.abs(j) <= range &&
					( i == 0 || j == 0 ) ){	
					c_area.push({'x':c_x + i,'y':c_y + j});
				}
			}
			if( type == "横条区域" ){		//（公式：dx + dy <= r 且 (dy==0) ）
				if( Math.abs(i) <= range && Math.abs(j) <= range &&
					( j == 0 ) ){	
					c_area.push({'x':c_x + i,'y':c_y + j});
				}
			}
			if( type == "竖条区域" ){		//（公式：dx + dy <= r 且 (dx==0) ）
				if( Math.abs(i) <= range && Math.abs(j) <= range &&
					( i == 0 ) ){	
					c_area.push({'x':c_x + i,'y':c_y + j});
				}
			}
		}
	}
	return c_area;
}

//==============================
// * 点集合 - 自定义形状
//			  参数：绝对中心点xy，朝向(2/4/6/8)，相对中心区域列表[{x:1,y:1}……]
//			  返回：绝对坐标列表 { x:12 , y:23 } 
//==============================
Game_Map.prototype.drill_COFA_getCustomPoints = function(c_x, c_y, direction, def_area ) {
	var c_area = [];	//根据方向变化后的区域
	for (var i = 0; i < def_area.length ; i++) {
		var temp_point = def_area[i];
		if( direction == 2 ){
			var x = this.roundX(c_x - temp_point['y']);	//下
			var y = this.roundY(c_y - temp_point['x']);
			c_area.push({'x':x,'y':y});
		}else if( direction == 4 ){
			var x = this.roundX(c_x + temp_point['x']);	//左
			var y = this.roundY(c_y + temp_point['y']);
			c_area.push({'x':x,'y':y});
		}else if( direction == 6 ){
			var x = this.roundX(c_x - temp_point['x']);	//右
			var y = this.roundY(c_y - temp_point['y']);
			c_area.push({'x':x,'y':y});
		}else{
			var x = this.roundX(c_x + temp_point['y']);	//上
			var y = this.roundY(c_y + temp_point['x']);
			c_area.push({'x':x,'y':y});
		}
	}
	return c_area;
}
//==============================
// * 点集合 - 自定义形状（id）
//			  参数：事件id，自定义区域id
//			  返回：绝对坐标列表 { x:12 , y:23 } 
//==============================
Game_Map.prototype.drill_COFA_getCustomPointsById = function( event_id, def_area_id ) {
	var e = this.event( Number(event_id) );
	var def_area = DrillUp.g_COFA_area_list[ Number(def_area_id) ];
	if( e == undefined ){ return [] }
	if( def_area == undefined ){ return [] }
	
	var direction = e._direction;
	if( def_area['consistent'] !== true ){ direction = 2; }
	return this.drill_COFA_getCustomPoints( e._x, e._y, direction, def_area['points'] );
}
//==============================
// * 点集合 - 自定义形状（玩家位置）
//			  参数：自定义区域id
//			  返回：绝对坐标列表 { x:12 , y:23 } 
//==============================
Game_Map.prototype.drill_COFA_getCustomPointsByPlayer = function( def_area_id ) {
	var def_area = DrillUp.g_COFA_area_list[ Number(def_area_id) ];
	if( def_area == undefined ){ return [] }
	
	var direction = $gamePlayer._direction;
	if( def_area['consistent'] !== true ){ direction = 2; }
	return this.drill_COFA_getCustomPoints( $gamePlayer._x, $gamePlayer._y, direction, def_area['points'] );
}

//=============================================================================
// * 条件筛选
//=============================================================================
//==============================
// * 条件 - 综合筛选（固定形状）
//			参数：绝对中心点xy，区域类型，区域范围，条件obj
//			返回：绝对坐标列表 { x:12 , y:23 } 
//==============================
Game_Map.prototype.drill_COFA_getShapePointsWithCondition = function( c_x, c_y, type, range, condition ) {
	var area = this.drill_COFA_getShapePoints( c_x, c_y, type, range );		//获取点集合
	return this.drill_COFA_selectPoints( area,condition );					//条件筛选
}

//==============================
// * 条件 - 综合筛选（自定义形状）
//			参数：事件id，自定义区域id，条件obj
//			返回：绝对坐标列表 { x:12 , y:23 } 
//==============================
Game_Map.prototype.drill_COFA_getCustomPointsByIdWithCondition = function( event_id, def_area_id, condition ) {
	var area = this.drill_COFA_getCustomPointsById( event_id, def_area_id );	//获取点集合
	return this.drill_COFA_selectPoints( area,condition );						//条件筛选
}
//==============================
// * 条件 - 综合筛选
//==============================
Game_Map.prototype.drill_COFA_selectPoints = function( c_area, condition ) {
	if( condition['block'] == "必须可通行" ){
		c_area = this.drill_COFA_selectPoints_block( c_area,false );
	}
	if( condition['block'] == "必须不可通行" ){
		c_area = this.drill_COFA_selectPoints_block( c_area,true );
	}
	if( condition['event'] == "必须含事件" ){
		c_area = this.drill_COFA_selectPoints_event( c_area,true );
	}
	if( condition['event'] == "必须含下列标签的事件" ){
		c_area = this.drill_COFA_selectPoints_eventWithTag( c_area,true, condition['eventTag_list'] );
	}
	if( condition['event'] == "必须含除下列标签以外的事件" ){
		c_area = this.drill_COFA_selectPoints_eventWithTag( c_area,false, condition['eventTag_list'] );
	}
	if( condition['event'] == "必须不含事件" ){
		c_area = this.drill_COFA_selectPoints_event( c_area,false );
	}
	if( condition['event'] == "只排除下列标签的事件" ){
		c_area = this.drill_COFA_selectPoints_eventWithoutTag( c_area,true, condition['eventTag_list'] );
	}
	if( condition['event'] == "只排除除下列标签以外的事件" ){
		c_area = this.drill_COFA_selectPoints_eventWithoutTag( c_area,false, condition['eventTag_list'] );
	}
	if( condition['tlie'] == "必须含下列标志" ){
		c_area = this.drill_COFA_selectPoints_tlie( c_area,true, condition['tlie_list'] );
	}
	if( condition['tlie'] == "必须不含下列标志" ){
		c_area = this.drill_COFA_selectPoints_tlie( c_area,false, condition['tlie_list'] );
	}
	if( condition['rRegion'] == "必须含下列R图块值" ){
		c_area = this.drill_COFA_selectPoints_rRegion( c_area,true, condition['rRegion_list'] );
	}
	if( condition['rRegion'] == "必须不含下列R图块值" ){
		c_area = this.drill_COFA_selectPoints_rRegion( c_area,false, condition['rRegion_list'] );
	}
	if( condition['center'] == "一定包含" ){
		var e = this.event(event_id);
		if( e == undefined ){ return [] }
		c_area = this.drill_COFA_addPointNoRepeat( c_area, e._x, e._y );
	}
	if( condition['center'] == "一定不含" ){
		var e = this.event(event_id);
		if( e == undefined ){ return [] }
		c_area = this.drill_COFA_removePoint( c_area, e._x, e._y );
	}
	return c_area;
}

//==============================
// * 条件 - 筛选堵路的点（isBlock：true堵路，false不堵路）
//==============================
Game_Map.prototype.drill_COFA_selectPoints_block = function( c_area, isBlock ) {
	var result_area = [];
	for (var i = 0; i < c_area.length ; i++) {
		var x = c_area[i].x;
		var y = c_area[i].y;
		if( this.isPassable(x, y, 2)||this.isPassable(x, y, 4)||this.isPassable(x, y, 6)||this.isPassable(x, y, 8) ){
			//可通行
			if( isBlock == false ){
				result_area.push( c_area[i] );
			}
		}else{
			//不可通行
			if( isBlock == true ){
				result_area.push( c_area[i] );
			}
		}
	}
	return result_area;
}
//==============================
// * 条件 - 筛选含事件的点（hasEvent：true有事件，false无事件）
//==============================
Game_Map.prototype.drill_COFA_selectPoints_event = function( c_area, hasEvent, options ) {
	var result_area = [];
	for (var i = 0; i < c_area.length ; i++) {
		var x = c_area[i].x;
		var y = c_area[i].y;
		if( this.eventsXy(x, y).length > 0 ){
			//有事件
			if( hasEvent == true ){
				result_area.push( c_area[i] );
			}
		}else{
			//无事件
			if( hasEvent == false ){
				result_area.push( c_area[i] );
			}
		}
	}
	return result_area;
}
//==============================
// * 条件 - 筛选含标签事件的点（hasTag：true含其中标签，false不含任一标签）
//==============================
Game_Map.prototype.drill_COFA_selectPoints_eventWithTag = function( c_area, hasTag, tag_list ) {
	var result_area = [];
	for (var i = 0; i < c_area.length ; i++) {
		var x = c_area[i].x;
		var y = c_area[i].y;
		var events = this.eventsXy(x, y);
		if( events.length > 0 ){
			//有事件
			if( Imported.Drill_CoreOfEventTags ){
				if( hasTag == true ){
					if( this.drill_COET_selectEventsByTaglist(events,tag_list).length > 0 ){
						result_area.push( c_area[i] );
					}
				}else{
					if( this.drill_COET_selectEventsByTaglist(events,tag_list).length == 0 ){
						result_area.push( c_area[i] );
					}
				}
			}else{
				result_area.push( c_area[i] );
			}
		}else{
			//无事件
		}
	}
	return result_area;
}
//==============================
// * 条件 - 筛选排除含标签事件的点（hasTag：true含其中标签，false不含任一标签）
//==============================
Game_Map.prototype.drill_COFA_selectPoints_eventWithoutTag = function( c_area, hasTag, tag_list ) {
	var result_area = [];
	for (var i = 0; i < c_area.length ; i++) {
		var x = c_area[i].x;
		var y = c_area[i].y;
		var events = this.eventsXy(x, y);
		if( events.length > 0 ){
			//有事件
			if( Imported.Drill_CoreOfEventTags ){
				if( hasTag == true ){
					if( this.drill_COET_selectEventsByTaglist(events,tag_list).length > 0 ){
						
					}else{
						result_area.push( c_area[i] );
					}
				}else{
					if( this.drill_COET_selectEventsByTaglist(events,tag_list).length == 0 ){
						
					}else{
						result_area.push( c_area[i] );
					}
				}
			}else{
			}
		}else{
			//无事件
			result_area.push( c_area[i] );
		}
	}
	return result_area;
}
//==============================
// * 条件 - 筛选含地形标志的点（fit：true符合，false不符合）
//==============================
Game_Map.prototype.drill_COFA_selectPoints_tlie = function( c_area, fit, list ) {
	var result_area = [];
	for (var i = 0; i < c_area.length ; i++) {
		var x = c_area[i].x;
		var y = c_area[i].y;
		var t_tag = String($gameMap.terrainTag(x,y));
		if( list.indexOf(t_tag) != -1 ){
			if( fit == true ){
				result_area.push( c_area[i] );
			}
		}else{
			if( fit == false ){
				result_area.push( c_area[i] );
			}
		}
	}
	return result_area;
}
//==============================
// * 条件 - 筛选含R图块的点（fit：true符合，false不符合）
//==============================
Game_Map.prototype.drill_COFA_selectPoints_rRegion = function( c_area, fit, list ) {
	var result_area = [];
	for (var i = 0; i < c_area.length ; i++) {
		var x = c_area[i].x;
		var y = c_area[i].y;
		var r_id = String($gameMap.regionId(x,y));
		if( list.indexOf(r_id) != -1 ){
			if( fit == true ){
				result_area.push( c_area[i] );
			}
		}else{
			if( fit == false ){
				result_area.push( c_area[i] );
			}
		}
	}
	return result_area;
}
//==============================
// * 条件 - 添加点（不重复添加）
//==============================
Game_Map.prototype.drill_COFA_addPointNoRepeat = function( c_area, c_x, c_y ) {
	for (var i = 0; i < c_area.length ; i++) {
		var x = c_area[i].x;
		var y = c_area[i].y;
		if( x == c_x && y == c_y ){	//如果有点则直接返回
			return c_area;
		}
	}
	c_area.push( {'x':c_x,'y':c_y} );
	return c_area;
}
//==============================
// * 条件 - 去除点
//==============================
Game_Map.prototype.drill_COFA_removePoint = function( c_area, c_x, c_y ) {
	for (var i = 0; i < c_area.length ; i++) {
		var x = c_area[i].x;
		var y = c_area[i].y;
		if( x == c_x && y == c_y ){	//如果有点则直接返回
			c_area.splice(i,1);
			return c_area;
		}
	}
	return c_area;
}

//=============================================================================
// * 其他
//=============================================================================
//==============================
// * 其他 - 图块容错捕获
//==============================
var _drill_COFA_map_setup = Game_Map.prototype.setup;	
Game_Map.prototype.setup = function(mapId) {
	this.tileEvents = [];					//去除空指针的问题
	_drill_COFA_map_setup.call(this,mapId);
}
/*
var _drill_COFA_tileEventsXy = Game_Map.prototype.tileEventsXy;		//（诡异的rmmv bug，tileEvents是数组，却不知道哪里赋值了空字符串）
Game_Map.prototype.tileEventsXy = function(x, y) {
	if( !this.tileEvents ){ return []; }
	if( this.tileEvents == "" ){ return []; }
	return _drill_COFA_tileEventsXy(this,x,y);
};
*/



