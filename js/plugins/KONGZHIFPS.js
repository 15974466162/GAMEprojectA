//=============================================================================
// Alternative Screen Refresh Timer
// TimerRefreshRate.js
// Version: 1.02
// Changelog:         1.02:
//                                - Fix a bug that when Using Custom Timer the game not progress.
//                                1.01:
//                                - Fix Refresh Rate is not working at monitor with <60 Hz.
//=============================================================================
var Imported = Imported || {};
Imported.Kien_Alt_Screen_Refresh_Timer = true;
 
var Kien = Kien || {};
Kien.ASRT = {};
//=============================================================================
/*:
 * @plugindesc Provide an alternative refresh rate process, or just fix the glitch
 * when the game is played at monitor with higher refresh rate.
 * @author Kien
 *
 * @param Use Alternative Timer
 * @desc Use Alternative timer to solve the problem of refresh rate and background
 * movements, but is not stable as default
 * @default false
 
 * @param Allow Backgronud
 * @desc allow the game process when the tab/browser is not active. Only works
 * when using alternative timer. Currently have no work
 * @default true
 *
 * @param Custom FPS
 * @desc use a refresh rate other than 60. don't chagne this unless you know
 * what you are doing.
 * @default 60
 *
 * @param Fix Refresh Rate
 * @desc fix the problem with higher refresh rates. Only works when NOT using
 * alternative timer.
 * @default true
 *
 * @help
 * ============================================================================
 * Alternative Screen Refresh Timer (English Document)
 * ============================================================================
 *                 Provide an alternative refresh rate process, or just fix the glitch
 * when the game is played at monitor with higher refresh rate.
 * ============================================================================
 * * About Refresh Rate
 * ============================================================================
 *                 In RPG Maker MV, the refresh rate is controlled by requestAnimationFrame()
 * function provided by the browser. This function will automatically ensures
 * the animation works in a proper rate, but there have some problem when we use
 * this directly in a game.
 * 1. Refresh Rate
 *             Refresh rate of the monitor is not a fixed value, while we want our game
 * have a fixed 60 fps. This will make the game have accelerated game speed in
 * those monitor have a refresh ratemore than 60, and deccelerated game speed 
 * in those monitor have a refresh rate lower than 60.
 * 
 * 2. No Background Proess
 *             requestAnimationFrame() is used to show animation, so it will NOT give
 * timing when the animation not need to show. That is, when the game is at
 * a tab/browser that is not the active tab/browser, the game will not have any
 * process.
 * ============================================================================
 * * What does this plugin do
 * ============================================================================
 *           This plugin will fix both problem by adding a timer like other games 
 * and (maybe) previous RPG Makers, or just solve the first problem by give
 * pauses to default process. This can tweeks at Options provided by this 
 * plugin.
 * ============================================================================
 * * Note
 * ============================================================================
 *                 Make sure to put this plugin at top of the list, or maybe there have
 * some problems. Also, it seems that setTimeout is not precise as
 * requestAnimationFrame(), so in some time, this custom timer will not work.
 * ============================================================================
 * * End of Document (English Document)
 * ============================================================================
 * ============================================================================
 * * ����FPS�����ީ`��Japanese Document��
 * ============================================================================
 * ����FPS�����ީ`��e��׷�Ӥ����ǥե����״�B��һ���ΥХ����ޏͤ��ޤ����ޤ��ϡ��ǥե���Ȥǰk�������ե�å���
 * ��`�Ȥθߤ���˥��`�ǰk������Х����ޏͤ��ޤ���
 * ============================================================================
 * * ��ե�å����`�ȤˤĤ���
 * ============================================================================
 * ����RPG�ĥ��`��MV�Ǥϡ������Υ����ީ`ʽ���Ɯy�����FPS�M�Ф�֥饦���`���ṩ����
 * requestAnimationFrame()�Ȥ����v���ǹ�����褦�ˤ��Ƥ��ޤ��������v���ϡ��֥饦���`���m�Фʥ����ߥ�
 * �ǥ��`��Хå�����ӳ������Ȥǡ����˥�`���������_�˸��¤Ǥ���褦�ˤ��뤿��Τ�ΤǤ��������`��Ȥ���ʹ�ä���
 * ���ϡ����¤Τ褦�ʲ����Ϥ��k�����ޤ���
 * 1.����ե�å����`��
 * ����requestAnimationFrame�����v���ϥ�˥��`�Υ�ե�å����`�Ȥ˺Ϥ碌��褦�˥��`��Хå�����ӳ���
 * �ޤ��������٤ƤΥ�˥��`��60FPS�Ǹ��¤���Ƥ���櫓�ǤϤ���ޤ��󡣤��Τ��ᡢ60FPS�Ȥ����붨����Ƥ���RPG
 * �ĥ��`��MV�u�Υ��`��򤽤��Υ�˥��`��ʹ�ä���ȡ����`�ब���٤��뤤�Ϝp�٤���״�B�ǄI����Ƥ��ޤ��ޤ�
 * ��
 * 2. �Хå����饦��ɄI��
 *   requestAnimationFrame()�ϥ��˥�`�������ʾ���뤿����ṩ����Ƥ����v���Ǥ��������˥�`������
 * ��ʾ�����Ҫ���ʤ����ϡ��Ĥޤ꥿��?�֥饦���`���ǥ����ƥ��֕r��ȫ���I����ʤ��ʤ�Ȥ������ȤǤ���
 * ============================================================================
 * * ���Υץ饰����ˤĤ���
 * ============================================================================
 * �������Υץ饰�������ӛ�Ά��}��������FPS�����ީ`��FPS������뤳�Ȥǽ������ޤ����ޤ����ǥե���Ȥ�FPS
 * ����Ǥ����Ȥ����ˤΤ���ˡ������Ĥ�һ��Ŀ�Ά��}�������Q���벿�֤��ṩ���ޤ���
 * ============================================================================
 * * ע��
 * ============================================================================
 * �������Υץ饰����ϡ����ܤ��ޤ�ꥹ�Ȥ�һ���Ϥ�����褦�ˤ��Ƥ����������ޤ��������ީ`�Ȥ����ä��Ƥ���
 * setTimeout()���v����requestAnimationFrame()�ۤ����_�ǤϤʤ����ᡢ�����h���ˤ�äƤϥǥե����
 * �����ީ`�Τۤ�������Ƥ��롣
 * ============================================================================
 * * �ɥ�����ȽK�� (Japanese Document)
 * ============================================================================
 * ============================================================================
 * * FPSʱ�ӣ�Chinese Document��
 * ============================================================================
 *     �ṩ����һ��FPS���㷽��������ֻ�޸�һ��Ĭ��ϵͳ��BUG��
 * ============================================================================
 * * ����ˢ����
 * ============================================================================
 *     RPG Maker MVʹ��������ṩ��requestAnimationFrame() ������������Ϸ��FPS����������
 * ͨ������Ϸʹ�ü�ʱ�������С���Ȼ��������ṩ���ȶ���FPS�����ǻ�������µ��������⣺
 * 1. ˢ����
 *    requestAnimationFrame() ����������Ļ��ˢ�����������ص����������ǲ������е���Ļ����
 * 60Hz������Щ�в���60Hzˢ���ʵ���Ļ��ִ��MV����Ϸ�������Ϸ�ٶȱ��٣�����Ӱ����Ϸ���顣
 * 2. ��̨����
 *    requestAnimationFrame() �����������������ƶ�����������Ҫ���ƶ���������ҳ���ں�̨״
 * ̬ʱ��requestAnimationFrame() ����������ûص�����������Ϸ�޷���̨���С�
 * ============================================================================
 * * ����������
 * ============================================================================
 *     �����ͨ��ʹ�ü�ʱ��������FPS�����������������⡣Ҳ�ṩ�����ü�ʱ���ķ���������Ƚ�
 * ���صĵ�һ�����⡣���⣬setTimeout()�ľ�׼��û��requestAnimationFrame����׼ȷ����˸���
 * ������ܻ���ɸ����ӳ١�
 * ============================================================================
 * * ע��
 * ============================================================================
 *     �뽫������ŵ�����б�����Ϸ��Է�ֹ���ֲ���Ԥ�ϵĳ�ͻ��
 * ============================================================================
 * * �ĵ����� (Chinese Document)
 * ============================================================================
 */
 
 Kien.ASRT.parameters = PluginManager.parameters("TimerRefreshRate");
 Kien.ASRT.useTimer = Kien.ASRT.parameters["Use Alternative Timer"];
 Kien.ASRT.allowBackground = Kien.ASRT.parameters["Allow Backgronud"];
 Kien.ASRT.fps = Kien.ASRT.parameters["Custom FPS"];
 Kien.ASRT.fixFPS = Kien.ASRT.parameters["Fix Refresh Rate"];
 
Kien.ASRT.Timer = function(){
        this._fps = Kien.ASRT.fps;
        this._lastDate = Date.now();
        this._msToNext10 = 10000 / this._fps
        this._msPassed10 = 0;
}
 
Kien.ASRT.Timer.prototype.updateTimer = function(){
        var nowDate = Date.now();
        this._msPassed10 += (nowDate - this._lastDate) * 10;
        this._lastDate = nowDate;
}
 
Kien.ASRT.Timer.prototype.checkTimer = function(){
        if (this._msPassed10 > this._msToNext10){
                this._msPassed10 -= this._msToNext10;
                return true;
        }
        return false;
}
 
Kien.ASRT.SceneManager_requestUpdate = SceneManager.requestUpdate;
SceneManager.requestUpdate = function() {
        if (!Kien.ASRT.useTimer){
                Kien.ASRT.SceneManager_requestUpdate.call(this);
        } else {
                this._timer.updateTimer();
                while (this._timer.checkTimer()){
                        this.update();
                }
                setTimeout(this.requestUpdate.bind(this),1);
        }
};
 
Kien.ASRT.SceneManager_initialize = SceneManager.initialize;
SceneManager.initialize = function() {
        Kien.ASRT.SceneManager_initialize.call(this);
        this._timer = new Kien.ASRT.Timer();
};
 
 
if(Kien.ASRT.fixFPS && !Kien.ASRT.useTimer){
        Kien.ASRT.SceneManager_update = SceneManager.update;
        SceneManager.update = function() {
                this._timer.updateTimer()
                while (this._timer.checkTimer()){
                        Kien.ASRT.SceneManager_update.call(this);
                }
        }
};