(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[219,170,226,78],[302,0,178,79],[219,250,176,68],[219,320,173,65],[302,81,177,78],[0,170,217,206],[0,0,300,168]]}
];


// symbols:



(lib._01logo = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._01menu1 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._01menu2 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._01menu3 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._01menu4 = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._293326492_776904773332607_6463461162067925256_n = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.images = function() {
	this.initialize(ss["index_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.works = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._01menu3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.works, new cjs.Rectangle(0,0,173,65), null);


(lib.photo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._01menu2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.photo, new cjs.Rectangle(0,0,176,68), null);


(lib.mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._293326492_776904773332607_6463461162067925256_n();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc, new cjs.Rectangle(0,0,217,206), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._01logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,226,78), null);


(lib.contect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._01menu4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.contect, new cjs.Rectangle(0,0,177,78), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.images();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,168), null);


(lib.about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib._01menu1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.05,1.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.about, new cjs.Rectangle(0,0,186.9,83), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-961,-541,1922,1082);


(lib.場景_1_work = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// work
	this.instance = new lib.works();
	this.instance.parent = this;
	this.instance.setTransform(920.65,796.25,3.7214,3.7214,0,0,0,86.5,32.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).to({x:1427.5,y:623.65},22).wait(61));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_photo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// photo
	this.instance = new lib.photo();
	this.instance.parent = this;
	this.instance.setTransform(2295.6,470.9,3.2926,3.2926,0,0,0,88.2,34);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(93).to({_off:false},0).to({x:1434.25,y:431.1},26).wait(91));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_MC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MC
	this.instance = new lib.mc();
	this.instance.parent = this;
	this.instance.setTransform(-82.3,508,2.5728,2.5728,0,0,0,108.7,103);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({guide:{path:[-82.3,508.1,-62.7,491.5,-43,474.8,40.4,417,123.8,359.1,159.1,343.4,194.4,327.7,272.9,304.2,351.4,280.6,957.6,243.4,1563.9,206.1,1606,218.9,1648.2,231.6,1651.1,231.6,1654.1,231.6,1732.6,281.7,1811.1,331.7,1820.9,351.3,1830.7,370.9,1839.5,413.1,1848.4,455.3,1848.4,458.3,1848.4,461.2,1854.8,506.1,1856.8,551.3,1858.2,583.7,1844.5,613.1,1830.2,643.7,1812.9,674.8,1777.2,738.7,1720.8,780.9,1674.7,814.3,1628.6,847.6,1625.6,847.6,1622.7,847.6,1367.6,886.9,1112.6,926.1,745.7,846.7,378.8,767.2]}},18).to({scaleX:2.5727,scaleY:2.5727,guide:{path:[378.7,767.2,378.8,767.2,378.9,767.3]}},13).to({regY:103.1,guide:{path:[379,767.2,379.2,767.3,379.4,767.3]}},34).to({regY:103,scaleX:2.5728,scaleY:2.5728,guide:{path:[379.4,767.4,379.5,767.4,379.7,767.5]}},23).wait(81));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-468.9,176.45,3.1637,3.1637,0,0,0,113,39.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:556.3,y:217.35},29).wait(181));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_kun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kun
	this.instance = new lib.mc();
	this.instance.parent = this;
	this.instance.setTransform(521.85,567.9,1,1,0,0,0,108.5,103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:539.65,y:569.45},0).wait(1).to({x:557.5,y:571.05},0).wait(1).to({x:575.3,y:572.6},0).wait(1).to({x:593.15,y:574.2},0).wait(1).to({x:610.95,y:575.75},0).wait(1).to({x:628.8,y:577.35},0).wait(1).to({x:646.65,y:578.95},0).wait(1).to({x:664.45,y:580.5},0).wait(1).to({x:682.3,y:582.1},0).wait(1).to({x:700.1,y:583.65},0).wait(1).to({x:717.95,y:585.25},0).wait(1).to({x:735.8,y:586.85},0).wait(1).to({x:753.6,y:588.4},0).wait(1).to({x:771.45,y:590},0).wait(1).to({x:789.25,y:591.55},0).wait(1).to({x:807.1,y:593.15},0).wait(1).to({x:824.95,y:594.75},0).wait(1).to({x:842.75,y:596.3},0).wait(1).to({x:860.6,y:597.9},0).wait(1).to({x:878.4,y:599.45},0).wait(1).to({x:896.25,y:601.05},0).wait(1).to({x:914.05,y:602.6},0).wait(1).to({x:931.9,y:604.2},0).wait(1).to({x:949.75,y:605.8},0).wait(1).to({x:967.55,y:607.35},0).wait(1).to({x:985.4,y:608.95},0).wait(1).to({x:1003.2,y:610.5},0).wait(1).to({x:1021.05,y:612.1},0).wait(1).to({x:1038.9,y:613.7},0).wait(1).to({x:1056.7,y:615.25},0).wait(1).to({x:1074.55,y:616.85},0).wait(1).to({x:1092.35,y:618.4},0).wait(1).to({x:1110.2,y:620},0).wait(1).to({x:1128.05,y:621.6},0).wait(1).to({x:1119.1,y:631.15},0).wait(1).to({x:1110.2,y:640.75},0).wait(1).to({x:1101.25,y:650.35},0).wait(1).to({x:1092.35,y:659.95},0).wait(1).to({x:1083.4,y:669.55},0).wait(1).to({x:1074.5,y:679.15},0).wait(1).to({x:1065.6,y:688.7},0).wait(1).to({x:1056.65,y:698.3},0).wait(1).to({x:1047.75,y:707.9},0).wait(1).to({x:1038.8,y:717.5},0).wait(1).to({x:1029.9,y:727.1},0).wait(1).to({x:1020.95,y:736.7},0).wait(1).to({x:1012.05,y:746.3},0).wait(1).to({x:1003.15,y:755.85},0).wait(1).to({x:994.2,y:765.45},0).wait(1).to({x:985.3,y:775.05},0).wait(1).to({x:976.35,y:784.65},0).wait(1).to({x:967.45,y:794.25},0).wait(1).to({x:958.5,y:803.85},0).wait(1).to({x:949.6,y:813.45},0).wait(1).to({x:940.7,y:823},0).wait(1).to({x:931.75,y:832.6},0).wait(1).to({x:922.85,y:842.2},0).wait(1).to({x:913.9,y:851.8},0).wait(1).to({x:905,y:861.4},0).wait(1).to({x:896.05,y:871},0).wait(1).to({x:887.15,y:880.55},0).wait(1).to({x:878.25,y:890.15},0).wait(1).to({x:869.3,y:899.75},0).wait(1).to({x:860.4,y:909.35},0).wait(1).to({x:851.45,y:918.95},0).wait(1).to({x:842.55,y:928.55},0).wait(1).to({x:833.6,y:938.15},0).wait(1).to({x:824.7,y:947.7},0).wait(1).to({x:815.8,y:957.3},0).wait(1).to({x:806.85,y:966.9},0).wait(1).to({x:797.95,y:976.5},0).wait(1).to({x:789,y:986.1},0).wait(1).to({x:780.1,y:995.7},0).wait(1).to({x:771.2,y:1005.3},0).wait(1).to({x:762.2,y:989.2},0).wait(1).to({x:753.25,y:973.1},0).wait(1).to({x:744.3,y:957.05},0).wait(1).to({x:735.35,y:940.95},0).wait(1).to({x:726.4,y:924.9},0).wait(1).to({x:717.45,y:908.8},0).wait(1).to({x:708.5,y:892.75},0).wait(1).to({x:699.55,y:876.65},0).wait(1).to({x:690.6,y:860.55},0).wait(1).to({x:681.65,y:844.5},0).wait(1).to({x:672.7,y:828.4},0).wait(1).to({x:663.75,y:812.35},0).wait(1).to({x:654.8,y:796.25},0).wait(1).to({x:645.85,y:780.2},0).wait(1).to({x:636.85,y:764.1},0).wait(1).to({x:627.9,y:748},0).wait(1).to({x:618.95,y:731.95},0).wait(1).to({x:610,y:715.85},0).wait(1).to({x:601.05,y:699.8},0).wait(1).to({x:592.1,y:683.7},0).wait(1).to({x:583.15,y:667.65},0).wait(1).to({x:574.2,y:651.55},0).wait(1).to({x:565.25,y:635.45},0).wait(1).to({x:556.3,y:619.4},0).wait(1).to({x:547.35,y:603.3},0).wait(1).to({x:538.4,y:587.25},0).wait(1).to({x:529.45,y:571.15},0).wait(1).to({x:520.5,y:555.1},0).wait(1).to({x:511.5,y:539},0).wait(1).to({x:502.55,y:522.9},0).wait(1).to({x:493.6,y:506.85},0).wait(1).to({x:484.65,y:490.75},0).wait(1).to({x:475.7,y:474.7},0).wait(1).to({x:466.75,y:458.6},0).wait(1).to({x:457.8,y:442.55},0).wait(1).to({x:448.85,y:426.45},0).wait(1).to({x:439.9,y:410.35},0).wait(1).to({x:430.95,y:394.3},0).wait(1).to({x:422,y:378.2},0).wait(1).to({x:413.05,y:362.15},0).wait(1).to({x:404.1,y:346.05},0).wait(1).to({x:395.15,y:330},0).wait(1).to({x:434.8,y:332.8},0).wait(1).to({x:474.5,y:335.6},0).wait(1).to({x:514.2,y:338.4},0).wait(1).to({x:553.9,y:341.2},0).wait(1).to({x:593.6,y:344},0).wait(1).to({x:633.3,y:346.8},0).wait(1).to({x:673,y:349.6},0).wait(1).to({x:712.7,y:352.4},0).wait(1).to({x:752.4,y:355.2},0).wait(1).to({x:792.1,y:358},0).wait(1).to({x:831.8,y:360.8},0).wait(1).to({x:871.5,y:363.6},0).wait(1).to({x:911.2,y:366.45},0).wait(1).to({x:950.9,y:369.25},0).wait(1).to({x:990.6,y:372.05},0).wait(1).to({x:1030.3,y:374.85},0).wait(1).to({x:1070,y:377.65},0).wait(1).to({x:1109.7,y:380.45},0).wait(1).to({x:1149.4,y:383.25},0).wait(1).to({x:1189.1,y:386.05},0).wait(1).to({x:1228.8,y:388.85},0).wait(1).to({x:1268.5,y:391.65},0).wait(1).to({x:1308.2,y:394.45},0).wait(1).to({x:1347.9,y:397.25},0).wait(1).to({x:1387.6,y:400.05},0).wait(1).to({x:1427.3,y:402.9},0).wait(1).to({x:1348.25,y:398},0).wait(1).to({x:1269.2,y:393.15},0).wait(1).to({x:1190.15,y:388.3},0).wait(1).to({x:1111.1,y:383.45},0).wait(1).to({x:1032.05,y:378.6},0).wait(1).to({x:953,y:373.7},0).wait(1).to({x:873.95,y:368.85},0).wait(1).to({x:794.95,y:364},0).wait(1).to({x:715.9,y:359.15},0).wait(1).to({x:636.85,y:354.3},0).wait(1).to({x:557.8,y:349.4},0).wait(1).to({x:478.75,y:344.55},0).wait(1).to({x:399.7,y:339.7},0).wait(1).to({x:320.65,y:334.85},0).wait(1).to({x:241.65,y:330},0).wait(54));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_contect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// contect
	this.instance = new lib.contect();
	this.instance.parent = this;
	this.instance.setTransform(920.65,796.6,3.5859,3.5859,0,0,0,88.5,39.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(152).to({_off:false},0).to({x:1376.35,y:850.2},11).wait(47));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(965.25,539.1,6.4391,6.4391,0,0,0,149.9,84);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210));

}).prototype = p = new cjs.MovieClip();


(lib.場景_1_about = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// about
	this.instance = new lib.about();
	this.instance.parent = this;
	this.instance.setTransform(2570.75,73.25,3.9764,3.9764,0,0,0,93.5,41.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70).to({_off:false},0).to({x:1430.8,y:221.95},19).wait(121));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._0319_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_210 = function() {
		this.___loopingOver___ = true;
		/* this.stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(210).call(this.frame_210).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(960,540);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({scaleX:0.9975,scaleY:0.9975,x:952.6742,y:553.3712},0).wait(1).to({scaleX:0.9949,scaleY:0.9949,x:945.3485,y:566.7424},0).wait(1).to({scaleX:0.9924,scaleY:0.9924,x:938.0227,y:580.1136},0).wait(1).to({scaleX:0.9898,scaleY:0.9898,x:930.697,y:593.4849},0).wait(1).to({scaleX:0.9873,scaleY:0.9873,x:923.3712,y:606.8561},0).wait(1).to({scaleX:0.9848,scaleY:0.9848,x:916.0455,y:620.2273},0).wait(1).to({scaleX:0.9822,scaleY:0.9822,x:908.7197,y:633.5985},0).wait(1).to({scaleX:0.9797,scaleY:0.9797,x:901.3939,y:646.9697},0).wait(1).to({scaleX:0.9771,scaleY:0.9771,x:894.0682,y:660.3409},0).wait(1).to({scaleX:0.9746,scaleY:0.9746,x:886.7424,y:673.7121},0).wait(1).to({scaleX:0.9721,scaleY:0.9721,x:879.4167,y:687.0833},0).wait(1).to({scaleX:0.9695,scaleY:0.9695,x:872.0909,y:700.4546},0).wait(1).to({scaleX:0.967,scaleY:0.967,x:864.7652,y:713.8258},0).wait(1).to({scaleX:0.9644,scaleY:0.9644,x:857.4394,y:727.197},0).wait(1).to({scaleX:0.9619,scaleY:0.9619,x:850.1136,y:740.5682},0).wait(1).to({scaleX:0.9594,scaleY:0.9594,x:842.7879,y:753.9394},0).wait(1).to({scaleX:0.9568,scaleY:0.9568,x:835.4621,y:767.3106},0).wait(1).to({scaleX:0.9543,scaleY:0.9543,x:828.1364,y:780.6818},0).wait(1).to({scaleX:0.9517,scaleY:0.9517,x:820.8106,y:794.053},0).wait(1).to({scaleX:0.9492,scaleY:0.9492,x:813.4849,y:807.4242},0).wait(1).to({scaleX:0.9466,scaleY:0.9466,x:806.1591,y:820.7955},0).wait(1).to({scaleX:0.9441,scaleY:0.9441,x:798.8333,y:834.1667},0).wait(1).to({scaleX:0.9416,scaleY:0.9416,x:791.5076,y:847.5379},0).wait(1).to({scaleX:0.939,scaleY:0.939,x:784.1818,y:860.9091},0).wait(1).to({scaleX:0.9365,scaleY:0.9365,x:776.8561,y:874.2803},0).wait(1).to({scaleX:0.9339,scaleY:0.9339,x:769.5303,y:887.6515},0).wait(1).to({scaleX:0.9314,scaleY:0.9314,x:762.2046,y:901.0227},0).wait(1).to({scaleX:0.9289,scaleY:0.9289,x:754.8788,y:914.3939},0).wait(1).to({scaleX:0.9263,scaleY:0.9263,x:747.553,y:927.7652},0).wait(1).to({scaleX:0.9238,scaleY:0.9238,x:740.2273,y:941.1364},0).wait(1).to({scaleX:0.9212,scaleY:0.9212,x:732.9015,y:954.5076},0).wait(1).to({scaleX:0.9187,scaleY:0.9187,x:725.5758,y:967.8788},0).wait(1).to({scaleX:0.9162,scaleY:0.9162,x:718.25,y:981.25},0).wait(1).to({scaleX:0.9136,scaleY:0.9136,x:734.9932,y:956.3966},0).wait(1).to({scaleX:0.9111,scaleY:0.9111,x:751.7364,y:931.5432},0).wait(1).to({scaleX:0.9085,scaleY:0.9085,x:768.4796,y:906.6898},0).wait(1).to({scaleX:0.906,scaleY:0.906,x:785.2227,y:881.8364},0).wait(1).to({scaleX:0.9035,scaleY:0.9035,x:801.9659,y:856.983},0).wait(1).to({scaleX:0.9009,scaleY:0.9009,x:818.7091,y:832.1296},0).wait(1).to({scaleX:0.8984,scaleY:0.8984,x:835.4523,y:807.2761},0).wait(1).to({scaleX:0.8958,scaleY:0.8958,x:852.1955,y:782.4227},0).wait(1).to({scaleX:0.8933,scaleY:0.8933,x:868.9386,y:757.5693},0).wait(1).to({scaleX:0.8908,scaleY:0.8908,x:885.6818,y:732.7159},0).wait(1).to({scaleX:0.8882,scaleY:0.8882,x:902.425,y:707.8625},0).wait(1).to({scaleX:0.8857,scaleY:0.8857,x:919.1682,y:683.0091},0).wait(1).to({scaleX:0.8831,scaleY:0.8831,x:935.9114,y:658.1557},0).wait(1).to({scaleX:0.8806,scaleY:0.8806,x:952.6546,y:633.3023},0).wait(1).to({scaleX:0.8781,scaleY:0.8781,x:969.3977,y:608.4489},0).wait(1).to({scaleX:0.8755,scaleY:0.8755,x:986.1409,y:583.5955},0).wait(1).to({scaleX:0.873,scaleY:0.873,x:1002.8841,y:558.742},0).wait(1).to({scaleX:0.8704,scaleY:0.8704,x:1019.6273,y:533.8886},0).wait(1).to({scaleX:0.8679,scaleY:0.8679,x:1036.3705,y:509.0352},0).wait(1).to({scaleX:0.8654,scaleY:0.8654,x:1053.1136,y:484.1818},0).wait(1).to({scaleX:0.8628,scaleY:0.8628,x:1069.8568,y:459.3284},0).wait(1).to({scaleX:0.8603,scaleY:0.8603,x:1086.6,y:434.475},0).wait(1).to({scaleX:0.8577,scaleY:0.8577,x:1103.3432,y:409.6216},0).wait(1).to({scaleX:0.8552,scaleY:0.8552,x:1120.0864,y:384.7682},0).wait(1).to({scaleX:0.8526,scaleY:0.8526,x:1136.8295,y:359.9148},0).wait(1).to({scaleX:0.8501,scaleY:0.8501,x:1153.5727,y:335.0614},0).wait(1).to({scaleX:0.8476,scaleY:0.8476,x:1170.3159,y:310.208},0).wait(1).to({scaleX:0.845,scaleY:0.845,x:1187.0591,y:285.3546},0).wait(1).to({scaleX:0.8425,scaleY:0.8425,x:1203.8023,y:260.5011},0).wait(1).to({scaleX:0.8399,scaleY:0.8399,x:1220.5455,y:235.6477},0).wait(1).to({scaleX:0.8374,scaleY:0.8374,x:1237.2886,y:210.7943},0).wait(1).to({scaleX:0.8349,scaleY:0.8349,x:1254.0318,y:185.9409},0).wait(1).to({scaleX:0.8323,scaleY:0.8323,x:1270.775,y:161.0875},0).wait(1).to({scaleX:0.8298,scaleY:0.8298,x:1287.5182,y:136.2341},0).wait(1).to({scaleX:0.8272,scaleY:0.8272,x:1304.2614,y:111.3807},0).wait(1).to({scaleX:0.8247,scaleY:0.8247,x:1321.0045,y:86.5273},0).wait(1).to({scaleX:0.8222,scaleY:0.8222,x:1337.7477,y:61.6739},0).wait(1).to({scaleX:0.8196,scaleY:0.8196,x:1354.4909,y:36.8205},0).wait(1).to({scaleX:0.8171,scaleY:0.8171,x:1371.2341,y:11.967},0).wait(1).to({scaleX:0.8145,scaleY:0.8145,x:1387.9773,y:-12.8864},0).wait(1).to({scaleX:0.812,scaleY:0.812,x:1404.7205,y:-37.7398},0).wait(1).to({scaleX:0.8095,scaleY:0.8095,x:1421.4636,y:-62.5932},0).wait(1).to({scaleX:0.8069,scaleY:0.8069,x:1438.2068,y:-87.4466},0).wait(1).to({scaleX:0.8044,scaleY:0.8044,x:1454.95,y:-112.3},0).wait(1).to({scaleX:0.8018,scaleY:0.8018,x:1444.8196,y:-97.3793},0).wait(1).to({scaleX:0.7993,scaleY:0.7993,x:1434.6891,y:-82.4587},0).wait(1).to({scaleX:0.7968,scaleY:0.7968,x:1424.5587,y:-67.538},0).wait(1).to({scaleX:0.7942,scaleY:0.7942,x:1414.4283,y:-52.6174},0).wait(1).to({scaleX:0.7917,scaleY:0.7917,x:1404.2978,y:-37.6967},0).wait(1).to({scaleX:0.7891,scaleY:0.7891,x:1394.1674,y:-22.7761},0).wait(1).to({scaleX:0.7866,scaleY:0.7866,x:1384.037,y:-7.8554},0).wait(1).to({scaleX:0.7841,scaleY:0.7841,x:1373.9065,y:7.0652},0).wait(1).to({scaleX:0.7815,scaleY:0.7815,x:1363.7761,y:21.9859},0).wait(1).to({scaleX:0.779,scaleY:0.779,x:1353.6457,y:36.9065},0).wait(1).to({scaleX:0.7764,scaleY:0.7764,x:1343.5152,y:51.8272},0).wait(1).to({scaleX:0.7739,scaleY:0.7739,x:1333.3848,y:66.7478},0).wait(1).to({scaleX:0.7714,scaleY:0.7714,x:1323.2543,y:81.6685},0).wait(1).to({scaleX:0.7688,scaleY:0.7688,x:1313.1239,y:96.5891},0).wait(1).to({scaleX:0.7663,scaleY:0.7663,x:1302.9935,y:111.5098},0).wait(1).to({scaleX:0.7637,scaleY:0.7637,x:1292.863,y:126.4304},0).wait(1).to({scaleX:0.7612,scaleY:0.7612,x:1282.7326,y:141.3511},0).wait(1).to({scaleX:0.7586,scaleY:0.7586,x:1272.6022,y:156.2717},0).wait(1).to({scaleX:0.7561,scaleY:0.7561,x:1262.4717,y:171.1924},0).wait(1).to({scaleX:0.7536,scaleY:0.7536,x:1252.3413,y:186.113},0).wait(1).to({scaleX:0.751,scaleY:0.751,x:1242.2109,y:201.0337},0).wait(1).to({scaleX:0.7485,scaleY:0.7485,x:1232.0804,y:215.9544},0).wait(1).to({scaleX:0.7459,scaleY:0.7459,x:1221.95,y:230.875},0).wait(1).to({scaleX:0.7434,scaleY:0.7434,x:1211.8196,y:245.7957},0).wait(1).to({scaleX:0.7409,scaleY:0.7409,x:1201.6891,y:260.7163},0).wait(1).to({scaleX:0.7383,scaleY:0.7383,x:1191.5587,y:275.637},0).wait(1).to({scaleX:0.7358,scaleY:0.7358,x:1181.4283,y:290.5576},0).wait(1).to({scaleX:0.7332,scaleY:0.7332,x:1171.2978,y:305.4783},0).wait(1).to({scaleX:0.7307,scaleY:0.7307,x:1161.1674,y:320.3989},0).wait(1).to({scaleX:0.7282,scaleY:0.7282,x:1151.037,y:335.3196},0).wait(1).to({scaleX:0.7256,scaleY:0.7256,x:1140.9065,y:350.2402},0).wait(1).to({scaleX:0.7231,scaleY:0.7231,x:1130.7761,y:365.1609},0).wait(1).to({scaleX:0.7205,scaleY:0.7205,x:1120.6457,y:380.0815},0).wait(1).to({scaleX:0.718,scaleY:0.718,x:1110.5152,y:395.0022},0).wait(1).to({scaleX:0.7155,scaleY:0.7155,x:1100.3848,y:409.9228},0).wait(1).to({scaleX:0.7129,scaleY:0.7129,x:1090.2543,y:424.8435},0).wait(1).to({scaleX:0.7104,scaleY:0.7104,x:1080.1239,y:439.7641},0).wait(1).to({scaleX:0.7078,scaleY:0.7078,x:1069.9935,y:454.6848},0).wait(1).to({scaleX:0.7053,scaleY:0.7053,x:1059.863,y:469.6054},0).wait(1).to({scaleX:0.7028,scaleY:0.7028,x:1049.7326,y:484.5261},0).wait(1).to({scaleX:0.7002,scaleY:0.7002,x:1039.6022,y:499.4467},0).wait(1).to({scaleX:0.6977,scaleY:0.6977,x:1029.4717,y:514.3674},0).wait(1).to({scaleX:0.6951,scaleY:0.6951,x:1019.3413,y:529.288},0).wait(1).to({scaleX:0.6926,scaleY:0.6926,x:1009.2109,y:544.2087},0).wait(1).to({scaleX:0.6901,scaleY:0.6901,x:999.0804,y:559.1294},0).wait(1).to({scaleX:0.6875,scaleY:0.6875,x:988.95,y:574.05},0).wait(1).to({scaleX:0.6993,scaleY:0.6993,x:987.9591,y:572.4864},0).wait(1).to({scaleX:0.711,scaleY:0.711,x:986.9682,y:570.9227},0).wait(1).to({scaleX:0.7227,scaleY:0.7227,x:985.9773,y:569.3591},0).wait(1).to({scaleX:0.7345,scaleY:0.7345,x:984.9864,y:567.7955},0).wait(1).to({scaleX:0.7462,scaleY:0.7462,x:983.9955,y:566.2318},0).wait(1).to({scaleX:0.7579,scaleY:0.7579,x:983.0046,y:564.6682},0).wait(1).to({scaleX:0.7697,scaleY:0.7697,x:982.0136,y:563.1046},0).wait(1).to({scaleX:0.7814,scaleY:0.7814,x:981.0227,y:561.5409},0).wait(1).to({scaleX:0.7931,scaleY:0.7931,x:980.0318,y:559.9773},0).wait(1).to({scaleX:0.8049,scaleY:0.8049,x:979.0409,y:558.4136},0).wait(1).to({scaleX:0.8166,scaleY:0.8166,x:978.05,y:556.85},0).wait(1).to({scaleX:0.8284,scaleY:0.8284,x:977.0591,y:555.2864},0).wait(1).to({scaleX:0.8401,scaleY:0.8401,x:976.0682,y:553.7227},0).wait(1).to({scaleX:0.8518,scaleY:0.8518,x:975.0773,y:552.1591},0).wait(1).to({scaleX:0.8636,scaleY:0.8636,x:974.0864,y:550.5955},0).wait(1).to({scaleX:0.8753,scaleY:0.8753,x:973.0955,y:549.0318},0).wait(1).to({scaleX:0.887,scaleY:0.887,x:972.1046,y:547.4682},0).wait(1).to({scaleX:0.8988,scaleY:0.8988,x:971.1136,y:545.9046},0).wait(1).to({scaleX:0.9105,scaleY:0.9105,x:970.1227,y:544.3409},0).wait(1).to({scaleX:0.9223,scaleY:0.9223,x:969.1318,y:542.7773},0).wait(1).to({scaleX:0.934,scaleY:0.934,x:968.1409,y:541.2136},0).wait(1).to({scaleX:0.9457,scaleY:0.9457,x:967.15,y:539.65},0).wait(66));

	// kun_obj_
	this.kun = new lib.場景_1_kun();
	this.kun.name = "kun";
	this.kun.parent = this;
	this.kun.setTransform(521.9,567.9,1,1,0,0,0,521.9,567.9);
	this.kun.depth = 0;
	this.kun.isAttachedToCamera = 0
	this.kun.isAttachedToMask = 0
	this.kun.layerDepth = 0
	this.kun.layerIndex = 0
	this.kun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.kun).wait(1).to({regX:834.5,regY:667.7,x:834.5,y:667.7},0).wait(210));

	// contect_obj_
	this.contect = new lib.場景_1_contect();
	this.contect.name = "contect";
	this.contect.parent = this;
	this.contect.depth = 0;
	this.contect.isAttachedToCamera = 0
	this.contect.isAttachedToMask = 0
	this.contect.layerDepth = 0
	this.contect.layerIndex = 1
	this.contect.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.contect).wait(163).to({_off:true},47).wait(1));

	// work_obj_
	this.work = new lib.場景_1_work();
	this.work.name = "work";
	this.work.parent = this;
	this.work.depth = 0;
	this.work.isAttachedToCamera = 0
	this.work.isAttachedToMask = 0
	this.work.layerDepth = 0
	this.work.layerIndex = 2
	this.work.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.work).wait(149).to({_off:true},61).wait(1));

	// photo_obj_
	this.photo = new lib.場景_1_photo();
	this.photo.name = "photo";
	this.photo.parent = this;
	this.photo.depth = 0;
	this.photo.isAttachedToCamera = 0
	this.photo.isAttachedToMask = 0
	this.photo.layerDepth = 0
	this.photo.layerIndex = 3
	this.photo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.photo).wait(119).to({_off:true},91).wait(1));

	// about_obj_
	this.about = new lib.場景_1_about();
	this.about.name = "about";
	this.about.parent = this;
	this.about.depth = 0;
	this.about.isAttachedToCamera = 0
	this.about.isAttachedToMask = 0
	this.about.layerDepth = 0
	this.about.layerIndex = 4
	this.about.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.about).wait(89).to({_off:true},121).wait(1));

	// MC_obj_
	this.MC = new lib.場景_1_MC();
	this.MC.name = "MC";
	this.MC.parent = this;
	this.MC.depth = 1;
	this.MC.isAttachedToCamera = 0
	this.MC.isAttachedToMask = 0
	this.MC.layerDepth = 0
	this.MC.layerIndex = 5
	this.MC.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.MC).wait(41).to({x:153.75,y:345.65,depth:0},0).wait(18).to({guide:{path:[153.8,345.7,153.8,345.7,153.8,345.7]},depth:1},13).wait(34).to({guide:{path:[153.8,345.7,153.8,345.7,153.8,345.7]},depth:-1},23).to({_off:true},81).wait(1));

	// logo_obj_
	this.logo = new lib.場景_1_logo();
	this.logo.name = "logo";
	this.logo.parent = this;
	this.logo.setTransform(-468.9,176.1,1,1,0,0,0,-468.9,176.1);
	this.logo.depth = 0;
	this.logo.isAttachedToCamera = 0
	this.logo.isAttachedToMask = 0
	this.logo.layerDepth = 0
	this.logo.layerIndex = 6
	this.logo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(29).to({_off:true},181).wait(1));

	// background_obj_
	this.background = new lib.場景_1_background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(965.9,539.1,1,1,0,0,0,965.9,539.1);
	this.background.depth = 10;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 7
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).to({_off:true},210).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.6,-7.6,2808.6,1484.6);
// library properties:
lib.properties = {
	id: 'BA50BEDB6AB3C6449A5719310CE63B4C',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['BA50BEDB6AB3C6449A5719310CE63B4C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;