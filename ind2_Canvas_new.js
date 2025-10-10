(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AgYgwIAxAxIgvAwIgChb");
	this.shape.setTransform(198.5,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAbIAAgBQgBgKABgKIAAgJQAAgHgDgHIABgJIABgBQAFgEAFAFIAFAHQAFAHAHAFIADADQACAEgEAEIgFAEQgBAMgJAIQgCACgEAAQgDAAgDgDg");
	this.shape_1.setTransform(198.2,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AgwAZIAxgxIAwAwIhbAB");
	this.shape_2.setTransform(-166.3,-36.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAQIgBgBQgEgFAFgFIAHgFQAHgFAFgHIADgDQAEgCAEAEIAEAFQAMABAIAJQACACAAAEQAAADgDADIgBAAQgKABgKgBIgJAAQgHAAgHADIgJgBg");
	this.shape_3.setTransform(-166.4,-36.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AlsgRILPAAIABAAILQAAILUAAIAPAAAxBgRILVAAAxBgRIrQAAA8WF3IAArt");
	this.shape_4.setTransform(14.5,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,1,1).p("EAioAJEMhFPAAAIAAyHMBFPAAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AQ9gCQAWgoAmgyQBOhjBTgxQEMifDnGNAQ5AAQgWApgmAyQgUAagVAXQg6A/g+AlQjSB8i7jZQg0g8gyhXAlnAAQATgjApg2QBOhkBTgxQELifDnGNA8MAAQAWgnAngyQBNhjBUgxQELifDnGMAlqADQgWAogmAyQgUAagVAWQg6BAg+AkQjSB9i7jZQg0g8gyhW");
	this.shape_6.setTransform(13.9,2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EginAJEIAAyHMBFPAAAIAASHgA6FGfIAArtgAuuAaQAxBVA0A8QC7DZDSh8QA+glA6g/QAVgXAUgaQAmgyAXgnIACgEIrVAAgAJaCqQC7DZDSh9QA+gkA6hAQAVgWAUgaQAmgyAWgqIrQAAQAyBYA0A8gAWljaQhTAxhOBkQgmAygWAmIgEADILUAAIAPAAIgPAAIAAgDQilkai3AAQhKAAhNAtgAABjXQhTAxhNBjQgpA2gUAjILPAAIABAAIgBAAQilkbi4AAQhJAAhMAugA2jjXQhUAyhNBjQgmAygXAmILQAAQikkai4AAQhKAAhMAtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.5,-59,445.1,118.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-2.2,4.4,4.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAxgYIgxAxIgwgwIBbgB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAOIgEgFQgMgBgIgJQgCgCAAgEQAAgDADgDIABAAQAKgBAKABIAJAAQAHAAAHgDIAJABIABABQAEAFgFAFIgHAFQgHAFgFAHIgDADIgEABQgCAAgCgDg");
	this.shape_1.setTransform(0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-3.5,11.9,7);


(lib.Stop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer: Text
	this.text = new cjs.Text("stop", "14px 'Arial'", "#CCCCCC");
	this.text.lineHeight = 16;
	this.text.lineWidth = 48;
	this.text.parent = this;
	this.text.setTransform(15.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#000000"},0).wait(1).to({color:"#FF9900"},0).to({_off:true},1).wait(1));

	// Layer: ||
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxAyIAAhjIBjAAIAABjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxAyIAAhjIBjAAIAABjg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer: Circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAABkQgoAAgegdQgdgeAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAIAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAABkQgoAAgegdQgdgeAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAIAAAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABkQgoAAgegdQgdgeAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAIAAAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AAAB4QgxAAgjgjQgjgjAAgyQAAgxAjgjQAjgjAxAAQAyAAAjAjQAjAjAAAxQAAAygjAjQgjAjgyAAIAAAAgAhGhGQgdAeAAAoQAAApAdAeQAeAdAoAAQApAAAegdQAdgeAAgpQAAgogdgeQgegdgpAAIAAAAQgoAAgeAdg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AifB4IAAgCQgKACgKAAQgyAAgjgjQgjgjAAgyQAAgxAjgjQAjgjAyAAQAKAAAKACIAAgCIHLAAIAADvg");
	this.shape_6.setTransform(19,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,75.5,21.1);


(lib.Rewind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer: Text
	this.text = new cjs.Text("replay", "14px 'Arial'", "#CCCCCC");
	this.text.lineHeight = 16;
	this.text.lineWidth = 48;
	this.text.parent = this;
	this.text.setTransform(15.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#000000"},0).wait(1).to({color:"#FF9900"},0).to({_off:true},1).wait(1));

	// Layer: Triangle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAAIBPgvIAABfgAg3AwIAAhfIAgAAIAABfg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAAIBPgvIAABfgAg3AwIAAhfIAgAAIAABfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer: Circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAABkQgoAAgegdQgdgeAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAIAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAABkQgoAAgegdQgdgeAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAIAAAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABkQgoAAgegdQgdgeAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAIAAAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AAAB4QgxAAgjgjQgjgjAAgyQAAgxAjgjQAjgjAxAAQAyAAAjAjQAjAjAAAxQAAAygjAjQgjAjgyAAIAAAAgAhGhGQgdAeAAAoQAAApAdAeQAeAdAoAAQApAAAegdQAdgeAAgpQAAgogdgeQgegdgpAAIAAAAQgoAAgeAdg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AifB4IAAgCQgKACgKAAQgyAAgjgjQgjgjAAgyQAAgxAjgjQAjgjAyAAQAKAAAKACIAAgCIHLAAIAADvg");
	this.shape_6.setTransform(19,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,75.5,21.1);


(lib.Play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer: Text
	this.text = new cjs.Text("play", "14px 'Arial'", "#CCCCCC");
	this.text.lineHeight = 16;
	this.text.lineWidth = 48;
	this.text.parent = this;
	this.text.setTransform(15.5,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#000000"},0).wait(1).to({color:"#FF9900"},0).to({_off:true},1).wait(1));

	// Layer: Triangle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agyg6IBlA6IgBABIhkA6g");
	this.shape.setTransform(1.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(6.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Agyg6IBlA6IAAAAIAAABIgBAAIhkA6g");
	this.shape_2.setTransform(1.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(6.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Agyg6IBlA6IAAAAIAAABIgBAAIhkA6g");
	this.shape_4.setTransform(1.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(2));

	// Layer: Circle
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAABkQgoAAgegdQgdgeAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAIAAAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AAABkQgoAAgegdQgdgeAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAIAAAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAABkQgoAAgegdQgdgeAAgpQAAgoAdgeQAegdAoAAQApAAAeAdQAdAeAAAoQAAApgdAeQgeAdgpAAIAAAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AAAB4QgxAAgjgjQgjgjAAgyQAAgxAjgjQAjgjAxAAQAyAAAjAjQAjAjAAAxQAAAygjAjQgjAjgyAAIAAAAgAhGhGQgdAeAAAoQAAApAdAeQAeAdAoAAQApAAAegdQAdgeAAgpQAAgogdgeQgegdgpAAIAAAAQgoAAgeAdg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AifB4IAAgCQgKACgKAAQgyAAgjgjQgjgjAAgyQAAgxAjgjQAjgjAyAAQAKAAAKACIAAgCIHLAAIAADvg");
	this.shape_9.setTransform(19,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,75.5,21.1);


(lib.axisball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9900CC").ss(2,1,1).p("AgqBEIARgbIAohIIAyhIIBChpABBhnIguBKIgsBHIgRAaIgFAJIgXAkIg8Bg");
	this.shape.setTransform(0.5,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9900CC").s().p("AgCAqQgKgBgIgFIAshGIgsBGIAAAAIAohIIADACIABAAIAFAFQALALACAOIAAAEIAAABQAAAQgNAMQgMANgRAAIgCAAgAgWAkIgEgEIgDgDQgMgMAAgQIAAgBIAAAAIAAgEQACgOAKgLQALgLAQgBIACAAIAAAAQAKAAAJAEIABABIgoBIIgCAAgAAUgkIAAAAg");
	this.shape_1.setTransform(-0.1,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-21.8,28.1,43.8);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25.4,-0.1,1,1,-90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACJAAQiJAAiIAB");
	this.shape.setTransform(14,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(2,1,1).p("AAAmYIAAgDAAAmYIABgBIAvAvIgwABIgBMFAAAlpIgvABIAvgw");
	this.shape_1.setTransform(0.3,-42.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AAAgWIABgBIAvAtIgwABIgvABg");
	this.shape_2.setTransform(0.3,-80.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-84.5,34.4,90.3);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.3,1.909,1.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-3.9,8.4,8.4);


(lib.arrows_short_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25.4,-0.3,1,1,-90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACJAAQiJAAiIAB");
	this.shape.setTransform(14,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(2,1,1).p("AAwidIhfABIAxgwgAAAiTIAAFg");
	this.shape_1.setTransform(0.2,-21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AACgXIAuAuIhfABg");
	this.shape_2.setTransform(0.2,-39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-43.3,34.4,48.8);


// stage content:
(lib.ind2_Canvas_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.button_play.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			var frameNumber = this.currentFrame;
			this.gotoAndPlay(frameNumber);
		}
		
		this.button_stop.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			var f = this.currentFrame;
			this.gotoAndStop(f);
		}
	}
	this.frame_80 = function() {
		this.stop();
		
		this.button_rew.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndPlay(1);
		}
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80).call(this.frame_80).wait(1));

	// green markers 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAjUIAAGp");
	this.shape.setTransform(487.4,493.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADRIAAmh");
	this.shape_1.setTransform(487.4,494);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADLIAAmV");
	this.shape_2.setTransform(487.4,494.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADEIAAmH");
	this.shape_3.setTransform(487.4,495.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAC7IAAl1");
	this.shape_4.setTransform(487.4,496.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACyIAAlj");
	this.shape_5.setTransform(487.4,497.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACmIAAlL");
	this.shape_6.setTransform(487.4,498.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACaIAAky");
	this.shape_7.setTransform(487.4,499.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACLIAAkV");
	this.shape_8.setTransform(487.4,501);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAB8IAAj3");
	this.shape_9.setTransform(487.4,502.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABrIAAjV");
	this.shape_10.setTransform(487.4,504.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABZIAAix");
	this.shape_11.setTransform(487.4,506);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABFIAAiJ");
	this.shape_12.setTransform(487.4,508);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAAwIAAhf");
	this.shape_13.setTransform(487.4,510.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAgZIAAAy");
	this.shape_14.setTransform(487.4,512.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAgaIAAA1");
	this.shape_15.setTransform(487.4,517.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAAyIAAhi");
	this.shape_16.setTransform(487.4,519.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABHIAAiN");
	this.shape_17.setTransform(487.4,521.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABbIAAi1");
	this.shape_18.setTransform(487.4,523.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABtIAAjZ");
	this.shape_19.setTransform(487.4,525.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAB+IAAj7");
	this.shape_20.setTransform(487.4,527.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACOIAAkb");
	this.shape_21.setTransform(487.4,529);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACcIAAk3");
	this.shape_22.setTransform(487.4,530.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACpIAAlR");
	this.shape_23.setTransform(487.4,531.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAC0IAAln");
	this.shape_24.setTransform(487.4,532.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAC+IAAl7");
	this.shape_25.setTransform(487.4,533.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADGIAAmL");
	this.shape_26.setTransform(487.4,534.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADNIAAmZ");
	this.shape_27.setTransform(487.4,535.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADSIAAmj");
	this.shape_28.setTransform(487.4,535.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAjVIAAGr");
	this.shape_29.setTransform(487.4,536.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAjaIAAG1");
	this.shape_30.setTransform(487.4,536.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADYIAAmv");
	this.shape_31.setTransform(487.4,536.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADSIAAmk");
	this.shape_32.setTransform(487.4,535.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADMIAAmX");
	this.shape_33.setTransform(487.4,535);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAC5IAAly");
	this.shape_34.setTransform(487.4,533.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACuIAAlb");
	this.shape_35.setTransform(487.4,532.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAChIAAlB");
	this.shape_36.setTransform(487.4,530.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACSIAAkj");
	this.shape_37.setTransform(487.4,529.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACCIAAkD");
	this.shape_38.setTransform(487.4,527.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABxIAAjh");
	this.shape_39.setTransform(487.4,526);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABdIAAi5");
	this.shape_40.setTransform(487.4,524.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABIIAAiP");
	this.shape_41.setTransform(487.4,522);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAAyIAAhj");
	this.shape_42.setTransform(487.4,519.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAgYIAAAy");
	this.shape_43.setTransform(487.4,517.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAgQIAAAh");
	this.shape_44.setTransform(487.4,513);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAApIAAhR");
	this.shape_45.setTransform(487.4,510.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABAIAAh/");
	this.shape_46.setTransform(487.4,508.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABVIAAip");
	this.shape_47.setTransform(487.4,506.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABpIAAjR");
	this.shape_48.setTransform(487.4,504.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAB7IAAj1");
	this.shape_49.setTransform(487.4,502.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACaIAAkz");
	this.shape_50.setTransform(487.4,499.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACoIAAlP");
	this.shape_51.setTransform(487.4,498.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACzIAAll");
	this.shape_52.setTransform(487.4,497);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAC9IAAl5");
	this.shape_53.setTransform(487.4,496);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAjXIAAGu");
	this.shape_54.setTransform(487.4,493.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADUIAAmn");
	this.shape_55.setTransform(487.4,494);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADOIAAmb");
	this.shape_56.setTransform(487.4,494.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADIIAAmO");
	this.shape_57.setTransform(487.4,495.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAC/IAAl9");
	this.shape_58.setTransform(487.4,496);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAC1IAAlp");
	this.shape_59.setTransform(487.4,496.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACqIAAlT");
	this.shape_60.setTransform(487.4,498);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACeIAAk7");
	this.shape_61.setTransform(487.4,499.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACPIAAkd");
	this.shape_62.setTransform(487.4,500.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACAIAAj/");
	this.shape_63.setTransform(487.4,502.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABuIAAjb");
	this.shape_64.setTransform(487.4,503.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAABHIAAiO");
	this.shape_65.setTransform(487.4,507.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:495.3}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{y:501}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).to({state:[{t:this.shape_15,p:{y:517.2}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{y:523.8}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26,p:{y:534.6}}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33,p:{y:535}}]},1).to({state:[{t:this.shape_3,p:{y:534.2}}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42,p:{y:519.8}}]},1).to({state:[{t:this.shape_43}]},1).to({state:[]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_8,p:{y:500.9}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_26,p:{y:495.2}}]},1).to({state:[{t:this.shape_33,p:{y:494.5}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_18,p:{y:505.7}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_42,p:{y:509.7}}]},1).to({state:[{t:this.shape_15,p:{y:512}}]},1).to({state:[{t:this.shape_15,p:{y:512}}]},1).wait(1));

	// green markers
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAmdIAAM7");
	this.shape_66.setTransform(487.4,60.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAGGIAAsL");
	this.shape_67.setTransform(487.4,62.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAFfIAAq9");
	this.shape_68.setTransform(487.4,66.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAEqIAApT");
	this.shape_69.setTransform(487.4,71.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADoIAAnP");
	this.shape_70.setTransform(487.4,78.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACXIAAkt");
	this.shape_71.setTransform(487.4,86.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAg4IAABx");
	this.shape_72.setTransform(487.4,96);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAhDIAACH");
	this.shape_73.setTransform(487.4,108.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACdIAAk5");
	this.shape_74.setTransform(487.4,117.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADpIAAnR");
	this.shape_75.setTransform(487.4,125.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAEoIAApP");
	this.shape_76.setTransform(487.4,131.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAFaIAAqz");
	this.shape_77.setTransform(487.4,136.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAF+IAAr7");
	this.shape_78.setTransform(487.4,140.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAmUIAAMq");
	this.shape_79.setTransform(487.4,142.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAmYIAAMx");
	this.shape_80.setTransform(487.4,142.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAGDIAAsF");
	this.shape_81.setTransform(487.4,140.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAFgIAAq/");
	this.shape_82.setTransform(487.4,137);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAEvIAApd");
	this.shape_83.setTransform(487.4,132.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADwIAAnf");
	this.shape_84.setTransform(487.4,125.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACjIAAlF");
	this.shape_85.setTransform(487.4,118.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAhIIAACR");
	this.shape_86.setTransform(487.4,109.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAhNIAACb");
	this.shape_87.setTransform(487.4,93.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAACmIAAlL");
	this.shape_88.setTransform(487.4,85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAADxIAAnh");
	this.shape_89.setTransform(487.4,77.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAFeIAAq7");
	this.shape_90.setTransform(487.4,66.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAGBIAAsB");
	this.shape_91.setTransform(487.4,63);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#00FF00").ss(1.5,1,1).p("AAAmVIAAMr");
	this.shape_92.setTransform(487.4,60.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83,p:{y:132.1}}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_83,p:{y:71.3}}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83,p:{y:132.1}}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_83,p:{y:71.3}}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[]},1).wait(1));

	// markers 2
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgNIAAAb");
	this.shape_93.setTransform(486.1,513.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAdIAAg5");
	this.shape_94.setTransform(486.1,511.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAsIAAhX");
	this.shape_95.setTransform(486.1,510.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA5IAAhx");
	this.shape_96.setTransform(486.2,508.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(1.5,1,1).p("AAABGIAAiL");
	this.shape_97.setTransform(486.2,507.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1.5,1,1).p("AAABRIAAih");
	this.shape_98.setTransform(486.2,506.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1.5,1,1).p("AAABbIAAi1");
	this.shape_99.setTransform(486.2,505.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1.5,1,1).p("AAABlIAAjJ");
	this.shape_100.setTransform(486.2,504.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(1.5,1,1).p("AAABtIAAjZ");
	this.shape_101.setTransform(486.2,503.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB0IAAjn");
	this.shape_102.setTransform(486.2,502.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB7IAAj1");
	this.shape_103.setTransform(486.2,502.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1.5,1,1).p("AAACAIAAj/");
	this.shape_104.setTransform(486.2,501.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1.5,1,1).p("AAACFIAAkI");
	this.shape_105.setTransform(486.2,501.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1.5,1,1).p("AAACIIAAkP");
	this.shape_106.setTransform(486.2,501);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiJIAAET");
	this.shape_107.setTransform(486.2,500.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiKIAAEV");
	this.shape_108.setTransform(486.2,500.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(1.5,1,1).p("AAACJIAAkR");
	this.shape_109.setTransform(486.2,500.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1.5,1,1).p("AAACGIAAkL");
	this.shape_110.setTransform(486.2,501.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(1.5,1,1).p("AAACBIAAkB");
	this.shape_111.setTransform(486.2,501.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB8IAAj3");
	this.shape_112.setTransform(486.2,502.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB2IAAjq");
	this.shape_113.setTransform(486.2,502.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1.5,1,1).p("AAABuIAAjb");
	this.shape_114.setTransform(486.2,503.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1.5,1,1).p("AAABmIAAjL");
	this.shape_115.setTransform(486.2,504.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1.5,1,1).p("AAABcIAAi3");
	this.shape_116.setTransform(486.2,505.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1.5,1,1).p("AAABSIAAij");
	this.shape_117.setTransform(486.2,506.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA6IAAhz");
	this.shape_118.setTransform(486.2,508.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAPIAAgd");
	this.shape_119.setTransform(486.2,516.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgdIAAA7");
	this.shape_120.setTransform(486.2,518);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgrIAABX");
	this.shape_121.setTransform(486.2,519.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1.5,1,1).p("AAAg4IAABx");
	this.shape_122.setTransform(486.2,520.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhEIAACJ");
	this.shape_123.setTransform(486.2,521.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhPIAACf");
	this.shape_124.setTransform(486.2,523);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhaIAAC1");
	this.shape_125.setTransform(486.2,524);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhjIAADH");
	this.shape_126.setTransform(486.2,525);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhrIAADX");
	this.shape_127.setTransform(486.2,525.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhzIAADn");
	this.shape_128.setTransform(486.2,526.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh5IAADz");
	this.shape_129.setTransform(486.2,527.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh/IAAD/");
	this.shape_130.setTransform(486.2,527.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiDIAAEH");
	this.shape_131.setTransform(486.2,528.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiGIAAEN");
	this.shape_132.setTransform(486.2,528.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(1.5,1,1).p("AAACKIAAkT");
	this.shape_133.setTransform(486.2,528.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhZIAACz");
	this.shape_134.setTransform(486.2,524.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(1.5,1,1).p("AAAg3IAABv");
	this.shape_135.setTransform(486.2,521.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgqIAABV");
	this.shape_136.setTransform(486.2,519.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgcIAAA5");
	this.shape_137.setTransform(486.2,518.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAOIAAgb");
	this.shape_138.setTransform(486.2,516.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(1.5,1,1).p("AAAArIAAhV");
	this.shape_139.setTransform(486.1,510.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1.5,1,1).p("AAABFIAAiJ");
	this.shape_140.setTransform(486.2,507.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(1.5,1,1).p("AAABQIAAig");
	this.shape_141.setTransform(486.2,506.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1.5,1,1).p("AAABkIAAjH");
	this.shape_142.setTransform(486.2,504.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(1.5,1,1).p("AAABsIAAjX");
	this.shape_143.setTransform(486.2,503.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB6IAAjz");
	this.shape_144.setTransform(486.2,502.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(1.5,1,1).p("AAACEIAAkH");
	this.shape_145.setTransform(486.2,501.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1.5,1,1).p("AAACHIAAkO");
	this.shape_146.setTransform(486.2,501);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_93,p:{x:486.1}}]},1).to({state:[{t:this.shape_94,p:{x:486.1}}]},1).to({state:[{t:this.shape_95,p:{x:486.1,y:510.2}}]},1).to({state:[{t:this.shape_96,p:{y:508.8}}]},1).to({state:[{t:this.shape_97,p:{y:507.6}}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99,p:{y:505.4}}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102,p:{y:502.9}}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104,p:{y:501.7}}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_97,p:{y:507.5}}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_95,p:{x:486.2,y:510.1}}]},1).to({state:[{t:this.shape_94,p:{x:486.2}}]},1).to({state:[{t:this.shape_93,p:{x:486.2}}]},1).to({state:[]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123,p:{y:521.9}}]},1).to({state:[{t:this.shape_124,p:{y:523}}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126,p:{y:525}}]},1).to({state:[{t:this.shape_127,p:{y:525.8}}]},1).to({state:[{t:this.shape_128,p:{y:526.5}}]},1).to({state:[{t:this.shape_129,p:{y:527.2}}]},1).to({state:[{t:this.shape_130,p:{y:527.7}}]},1).to({state:[{t:this.shape_131,p:{y:528.2}}]},1).to({state:[{t:this.shape_132,p:{y:528.5}}]},1).to({state:[{t:this.shape_133,p:{y:528.8}}]},1).to({state:[]},1).to({state:[{t:this.shape_133,p:{y:529.3}}]},1).to({state:[{t:this.shape_132,p:{y:529}}]},1).to({state:[{t:this.shape_131,p:{y:528.7}}]},1).to({state:[{t:this.shape_130,p:{y:528.2}}]},1).to({state:[{t:this.shape_129,p:{y:527.7}}]},1).to({state:[{t:this.shape_128,p:{y:527}}]},1).to({state:[{t:this.shape_127,p:{y:526.3}}]},1).to({state:[{t:this.shape_126,p:{y:525.5}}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_124,p:{y:523.5}}]},1).to({state:[{t:this.shape_123,p:{y:522.4}}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[]},1).to({state:[{t:this.shape_93,p:{x:486.1}}]},1).to({state:[{t:this.shape_94,p:{x:486.1}}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_96,p:{y:508.9}}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_99,p:{y:505.5}}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_102,p:{y:503}}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_104,p:{y:501.8}}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_107}]},1).wait(1));

	// markers
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgdIAAA7");
	this.shape_147.setTransform(486.1,98.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA7IAAh0");
	this.shape_148.setTransform(486.2,95.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(1.5,1,1).p("AAABTIAAil");
	this.shape_149.setTransform(486.2,93.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1.5,1,1).p("AAABnIAAjN");
	this.shape_150.setTransform(486.2,91.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB3IAAjs");
	this.shape_151.setTransform(486.2,89.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1.5,1,1).p("AAACCIAAkD");
	this.shape_152.setTransform(486.2,88.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiJIAAET");
	this.shape_153.setTransform(486.2,87.8);
	this.shape_153._off = true;

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1.5,1,1).p("AAACDIAAkF");
	this.shape_154.setTransform(486.2,88.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB3IAAjt");
	this.shape_155.setTransform(486.2,89.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1.5,1,1).p("AAABoIAAjP");
	this.shape_156.setTransform(486.2,91.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(1.5,1,1).p("AAABUIAAin");
	this.shape_157.setTransform(486.2,93.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA8IAAh3");
	this.shape_158.setTransform(486.2,95.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgfIAAA+");
	this.shape_159.setTransform(486.2,98.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAZIAAgx");
	this.shape_160.setTransform(486.2,104.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(1.5,1,1).p("AAAg2IAABt");
	this.shape_161.setTransform(486.2,107.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhPIAACf");
	this.shape_162.setTransform(486.2,110);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhkIAADK");
	this.shape_163.setTransform(486.2,112.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh1IAADr");
	this.shape_164.setTransform(486.2,113.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiBIAAED");
	this.shape_165.setTransform(486.2,115);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1.5,1,1).p("AAACKIAAkT");
	this.shape_166.setTransform(486.2,115.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiHIAAEQ");
	this.shape_167.setTransform(486.2,115.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB+IAAj7");
	this.shape_168.setTransform(486.2,114.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(1.5,1,1).p("AAABtIAAjY");
	this.shape_169.setTransform(486.2,113.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1.5,1,1).p("AAABVIAAip");
	this.shape_170.setTransform(486.2,112);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA4IAAhu");
	this.shape_171.setTransform(486.2,109.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAUIAAgn");
	this.shape_172.setTransform(486.2,107.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAXIAAgt");
	this.shape_173.setTransform(486.2,104.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_153).wait(7).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(7));

	// arrows 2
	this.instance = new lib.arrows_short_green("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(486.7,515.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-450},80).wait(1));

	// arrows
	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(486.4,101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-900},80).wait(1));

	// axis 2b
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(591.6,514.6,1,1,-90);

	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(486.6,417.1,1,1,180);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgDHGQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAgDFNQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDDVQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDBeQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAgDgaQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDiSQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDkJQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAgDmCQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_174.setTransform(486.8,464.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_174},{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.shape_174},{t:this.instance_3},{t:this.instance_2}]},80).wait(1));

	// buttons
	this.button_stop = new lib.Stop();
	this.button_stop.parent = this;
	this.button_stop.setTransform(514.1,256.4);
	new cjs.ButtonHelper(this.button_stop, 0, 1, 2, false, new lib.Stop(), 3);

	this.button_play = new lib.Play();
	this.button_play.parent = this;
	this.button_play.setTransform(514.1,228.5);
	new cjs.ButtonHelper(this.button_play, 0, 1, 2, false, new lib.Play(), 3);

	this.button_rew = new lib.Rewind();
	this.button_rew.parent = this;
	this.button_rew.setTransform(514,229.1);
	new cjs.ButtonHelper(this.button_rew, 0, 1, 2, false, new lib.Rewind(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_play},{t:this.button_stop}]}).to({state:[{t:this.button_play},{t:this.button_stop}]},1).to({state:[{t:this.button_rew}]},79).wait(1));

	// axis 2
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(586.1,101.6,1,1,-90);

	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(486.6,8.6,1,1,180);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AHSHZQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIAgAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAABABQgBAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAFaHZQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgADiHZQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgABqHZQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAgNHZQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAiFHZQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAj9HZQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAl1HZQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAntHZQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAn1E8QAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAn1DEQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAn1BMQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAn1grQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAn1ijQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAn1kbQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAn1mTQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_175.setTransform(536.6,55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_175},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.shape_175},{t:this.instance_5},{t:this.instance_4}]},80).wait(1));

	// axis b
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AHbGnQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAPAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAFjGnQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgADrGnQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgABzGnQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAgEGnQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIA7AAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAh8GnQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAj0GnQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAlsGnQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAnkGnQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAgAnsFuQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAA8QAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAnsD2QgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAA8QAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAnsB+QgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAA8QAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAnsAGQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAg7QAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAA7QAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAnshxQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAA8QAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAnsjpQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAA8QAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAnslhQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAA8QAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape_176.setTransform(535.7,473);

	this.timeline.addTween(cjs.Tween.get(this.shape_176).wait(81));

	// axis
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AGlGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAABABQgBAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAEtGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAC1GnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAA9GnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAg6GnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAiyGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAkqGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAmiGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAmqFuQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqD2QAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqB+QAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqAGQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg7QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA7QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqhxQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqjpQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqlhQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_177.setTransform(529.1,60);

	this.timeline.addTween(cjs.Tween.get(this.shape_177).wait(81));

	// Layer 100
	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgKQAIgJALAAQAKAAAHAIQAHAIABAQIgiAAQAAALAGAIQAEAFAHABQAEAAADgCIAHgJIADACQgGAKgGAEQgGAFgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgDAAgCADg");
	this.shape_178.setTransform(400.1,446.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAVAhIAAgDQAEAAABgDQACgCAAgGIAAgbIgBgKIgCgDQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgCADIgHAFIAAAiQABAHABABQACADAEAAIAAADIghAAIAAgDQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIACgCIAAgIIAAgbIAAgKIgCgDQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIgFACIgHAGIAAAiQAAAHABACQACACAEAAIAAADIghAAIAAgDQAEAAACgCQABgCAAgHIAAgjQAAgIgBgBQgCgCgEAAIAAgDIAaAAIAAAJQAFgGAFgCQAEgDAGAAQAGAAADADQAEADACAGQAGgGAFgDQAFgDAFAAQAHAAAEADQAEADABAFQACAEAAALIAAAZQAAAHABACQACACAEAAIAAADg");
	this.shape_179.setTransform(391.1,446.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgQAvIAAgCQAEAAACgCQABgCAAgHIAAgkQAAgHgBgBQgCgCgEgBIAAgDIAZAAIAAAyQAAAHACACQACACAEAAIAAACgAgHgcQgDgEAAgEQAAgEADgDQADgEAEABQAEgBADAEQADADAAAEQAAAEgDAEQgDACgEABQgEgBgDgCg");
	this.shape_180.setTransform(383.3,445);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgGApQgEgEgBgEIgBgMIAAgiIgIAAIAAgCQAIgGAGgHQAGgHAEgIIACAAIAAAXIAQAAIAAAHIgQAAIAAAnIABAHIABACIADABQAEAAAEgGIADABQgHANgLAAQgGAAgEgDg");
	this.shape_181.setTransform(379.1,445.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgbAeIAAgBIACAAIAEgBIACgCIABgGIAAgnIgBgFIgCgCIgEgBIgCAAIAAgCIAfAAIAAACIgDAAIgCABIgDACIAAAFIAAAmIAAAGIADABIAEABIAFAAQAFAAADgCQADgCACgDQADgEACgHIACAAIgCAVg");
	this.shape_182.setTransform(44,158);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgBAhIgVgwIgGgMQgCgCgDgBIAAgCIAhAAIAAACQAAAAAAABQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAADADAHIAKAXIAIgUQAEgJAAgEQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgCIAAgCIAVAAIAAACQgDABgCACQgCABgEAKIgVAxg");
	this.shape_183.setTransform(37.5,156.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgbAeIAAgBIACAAIAEgBIACgCIABgGIAAgnIgBgFIgCgCIgEgBIgCAAIAAgCIAfAAIAAACIgCAAIgEABIgCACIAAAFIAAAmIAAAGIADABIAEABIAFAAQAFAAADgCQADgCACgDQADgEACgHIACAAIgCAVg");
	this.shape_184.setTransform(208.1,172);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AANAWIAAgCQABAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAIABgGIAAgRIAAgHIgCgCIgCAAIgEABIgEAEIAAAVQAAAFABABQAAAAABABQAAAAAAAAQABAAABABQAAAAABAAIAAACIgUAAIAAgCIACgBIABgCIAAgFIAAgRIAAgHIgBgCIgCAAIgEAAIgEAFIAAAVIABAHIADABIAAACIgVAAIAAgCQABAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAQABgBAAgFIAAgWIgBgGIgDgBIAAgCIARAAIAAAFQADgDADgCQADgBADgBQAFAAABACQADADABADIAHgGQADgCAEAAQAFAAACACQACADABACIABAKIAAAQIABAHIAEABIAAACg");
	this.shape_185.setTransform(201.5,172.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgBAvIgghIQgGgOgCgCQgCgCgFgBIAAgCIAsAAIAAACIgBAAQgGAAgCACQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABIABADIADAIIATAuIASgoIAEgKIABgFIgBgDIgDgDIgIgBIAAgCIAeAAIAAACQgFABgEAEIgIARIggBFg");
	this.shape_186.setTransform(192.5,169.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgLAtQgGgEgDgGQgDgFgDgHQgDgLAAgLQAAgOAEgNQAEgKAHgGQAHgFAHAAQAIAAAHAFQAHAGADAJQAFANAAAOQAAAOgEAMQgDAHgDAFQgEAFgFACQgFADgGAAQgGAAgFgDgAgEgpQgDACgBAGIAAAqIABAaQABAFACACQACABACAAQAEAAACgCQACgEAAgIIABgdIgBgcQAAgJgCgDQgCgDgEAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAABg");
	this.shape_187.setTransform(119.5,287.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgkADIAAgEIBJggIAAAKIg5AXIA5AYIAAAKg");
	this.shape_188.setTransform(108.5,287.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgGApQgEgEgCgEIAAgMIAAgiIgJAAIAAgCQAJgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIACACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_189.setTransform(95.7,296.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AAIAlQgFAGgDACQgEACgEAAQgMAAgIgLQgFgJgBgNQABgKADgHQADgIAHgEQAGgFAHAAQAEAAADACQADACAFAEIAAgTIgBgJQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIAAgCIAbAAIAABIIABAJQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgbAFgAgIgLQgDACgBAFQgCAEAAALQAAAMACAGQACAGADADIAFABQAEAAAGgJIAAghQgGgKgGAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAABg");
	this.shape_190.setTransform(89.5,296);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgQAvIAAgCQAEAAACgCQABgCAAgHIAAgkQAAgHgBgBQgCgCgEgBIAAgDIAZAAIAAAyQAAAHACACQACACAEAAIAAACgAgHgcQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAFgDADQgDACgEAAQgEAAgDgCg");
	this.shape_191.setTransform(95.3,278.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AAIAlQgFAGgDACQgEACgEAAQgMAAgIgLQgFgJgBgNQABgKADgHQADgIAHgEQAGgFAHAAQAEAAADACQADACAFAEIAAgTIgBgJQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBQgBgBgDAAIAAgCIAbAAIAABIIABAJQAAAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgbAFgAgIgLQgDACgBAFQgCAEAAALQAAAMACAGQACAGADADIAFABQAEAAAGgJIAAghQgGgKgGAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAABg");
	this.shape_192.setTransform(89.5,278.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgqAuIAAgCIADAAQAEAAACgCIADgDIABgJIAAg8IgBgIIgDgEIgGgBIgDAAIAAgCIAxAAIAAACIgFAAQgCAAgDACQAAAAgBAAQAAAAgBABQAAAAAAABQgBAAAAABIgBAIIAAA6QAAAIABACQABAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQACABAFAAIAIAAQAIAAAFgDQAEgCAFgGQADgFADgLIADAAIgEAgg");
	this.shape_193.setTransform(79.1,288.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgLAtQgGgEgEgGQgDgFgCgHQgDgLAAgLQAAgOAFgNQADgKAHgGQAHgFAHAAQAIAAAHAFQAHAGADAJQAFANAAAOQAAAOgEAMQgDAHgDAFQgEAFgFACQgFADgGAAQgGAAgFgDgAgEgpQgCACgBAGIgBAqIABAaQABAFACACQACABACAAQADAAACgCQADgEAAgIIABgdIgBgcQAAgJgDgDQgBgDgEAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgBAAAAABg");
	this.shape_194.setTransform(333.5,234.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgkAYIA4gYIg4gXIAAgJIBJAeIAAAEIhJAfg");
	this.shape_195.setTransform(322.5,234.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgGApQgEgEgBgEIgBgMIAAgiIgIAAIAAgCQAIgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIACACIACABQAEAAAEgGIACABQgGANgMAAQgFAAgEgDg");
	this.shape_196.setTransform(309.7,243.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAHAlQgEAGgDACQgEACgFAAQgMAAgHgLQgGgJAAgNQAAgKAEgHQADgIAHgEQAGgFAHAAQAEAAADACQAEACADAEIAAgTIAAgJQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgGgBIAAgCIAcAAIAABIIAAAJQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAFACIAAACIgbAFgAgIgLQgDACgBAFQgBAEAAALQAAAMABAGQACAGADADIAFABQAFAAAEgJIAAghQgEgKgGAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_197.setTransform(303.5,243.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgQAvIAAgCQAEAAACgCQABgCAAgHIAAgkQAAgHgBgBQgCgCgEgBIAAgDIAZAAIAAAyQAAAHACACQACACAEAAIAAACgAgHgcQgDgDAAgFQAAgEADgDQADgEAEABQAEgBADAEQADADAAAEQAAAFgDADQgDACgEAAQgEAAgDgCg");
	this.shape_198.setTransform(309.3,225.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAHAlQgEAGgDACQgEACgFAAQgMAAgHgLQgGgJAAgNQAAgKAEgHQADgIAHgEQAGgFAHAAQAEAAADACQAEACADAEIAAgTIAAgJQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgGgBIAAgCIAcAAIAABIIAAAJQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAFACIAAACIgbAFgAgIgLQgDACgBAFQgBAEAAALQAAAMABAGQACAGADADIAFABQAFAAAEgJIAAghQgEgKgGAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_199.setTransform(303.5,225.7);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgqAuIAAgCIADAAQAEAAACgCIAEgDIAAgJIAAg8IAAgIIgEgEIgGgBIgDAAIAAgCIAxAAIAAACIgFAAQgDAAgCACQgBAAAAAAQAAAAgBABQAAAAAAABQgBAAAAABIgBAIIAAA6QAAAIABACQABAAAAAAQAAABAAAAQABAAAAABQABAAABAAQABABAGAAIAHAAQAIAAAFgDQAEgCAFgGQADgFADgLIADAAIgEAgg");
	this.shape_200.setTransform(293,236.1);

	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(23.9,159.4,1,1,180);

	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(391.8,259.6,1,1,-90);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgjA5IAAhxIAQAAIAABkIA3AAIAAANg");
	this.shape_201.setTransform(148,129.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgHAqIAAgRIAPAAIAAARgAgHgZIAAgPIAPAAIAAAPg");
	this.shape_202.setTransform(136.6,131.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgVArIAAhSIAMAAIAAAMQAFgJAEgCQADgDAFgBQAHAAAIAFIgGANQgEgDgGAAQgFAAgCADQgEADgBAEQgCAIAAAJIAAArg");
	this.shape_203.setTransform(132.3,131.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQAAgLgLgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgHQgHgJgKABQgKAAgHAHg");
	this.shape_204.setTransform(124.5,131.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgBA2QgFgCgBgEQgCgEAAgNIAAguIgKAAIAAgLIAKAAIAAgVIANgJIAAAeIAOAAIAAALIgOAAIAAAvQAAAGABABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAFACIAGgBIACANIgLAAQgHAAgDgCg");
	this.shape_205.setTransform(118,129.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgZAhQgKgMAAgVQAAgMAEgKQAFgLAJgFQAJgEAJgBQAOABAIAGQAKAIACAMIgOACQgCgIgFgFQgFgEgHAAQgKAAgGAIQgHAIAAAPQAAARAGAHQAHAIAJAAQAJAAAFgGQAFgEACgLIAOACQgCAOgJAIQgKAJgOgBQgPABgLgLg");
	this.shape_206.setTransform(111.9,131.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgSAoQgGgDgDgEQgDgFgCgGIgBgNIAAgyIAPAAIAAAtIAAAOQACAGAEADQAEADAHABQAFgBAGgDQAFgDACgGQADgGAAgKIAAgrIAOAAIAABSIgNAAIAAgMQgKAOgPgBQgHAAgHgCg");
	this.shape_207.setTransform(103.1,131.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgRA1QgJgGgFgKQgEgJAAgNQAAgNAEgJQAEgKAJgFQAIgGAKAAQAHAAAFAEQAHADADAFIAAgpIAOAAIAABxIgNAAIAAgKQgIAMgPAAQgJAAgIgFgAgOgIQgHAHABAQQgBAQAHAIQAHAIAIAAQAJAAAHgIQAGgIAAgPQAAgQgGgIQgHgIgKAAQgIAAgGAIg");
	this.shape_208.setTransform(94,129.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AAUArIAAgyQAAgIgCgFQgCgEgEgDQgEgCgGAAQgIAAgGAFQgHAHAAAPIAAAtIgOAAIAAhSIANAAIAAAMQAJgPAQAAQAIABAGADQAGACAEAFQADAEABAGIABANIAAAzg");
	this.shape_209.setTransform(85.4,131.1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_210.setTransform(78.8,129.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#00FF00").ss(1,1,1).p("AAAm3IAANv");
	this.shape_211.setTransform(168.5,216);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#00FF00").ss(2,1,1).p("ABvhRIARAbQANAcABAbQAAAGgBAGIBSABABphSIgcA3QgGAUgBARQgDAoAZAgAA0hTIgcA3QgGAUgBARQgCAoAZAgAAEhRIgaA4QgFATgBARQgDAoAZAgACLABIADAAAgshSIgcA3QgGAVgBARQgDApAZAfAjeARIBYAAAhbhQIgcA4QgGATgCARQgCApAZAf");
	this.shape_212.setTransform(47,128.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(1,1,1).p("AhDBEICHiH");
	this.shape_213.setTransform(177.3,183.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.instance_7},{t:this.instance_6},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178}]}).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.instance_7},{t:this.instance_6},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178}]},80).wait(1));

	// lines
	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(2,1,1).p("Ag3AAIBvAA");
	this.shape_214.setTransform(91.6,287);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(2,1,1).p("Ag3AAIBvAA");
	this.shape_215.setTransform(305.6,234.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(2,1,1).p("AxlEHIBwAAAP2kGIBwAA");
	this.shape_216.setTransform(198.6,260.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_215},{t:this.shape_214}]}).to({state:[{t:this.shape_216}]},80).wait(1));

	// Layer 64
	this.instance_8 = new lib.Tween8("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(24.4,169.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({guide:{path:[24.4,169.8,26.3,170.7,28.1,171.6,33.1,175,37.8,182.2,53.1,205.6,60.6,259,65.3,292.5,73.2,316.3,81.7,341.7,91.3,347.6,102,354.2,112,334.8,123.3,312.8,132.6,259.5,141.8,206.4,153.3,184.8,163.5,165.9,174.4,172.8,184.1,178.9,192.6,204,200.4,227.7,204.5,259.5,208.6,291.6,216.4,315.5,224.7,341.2,234.3,347.7,245.1,355,255.3,335.7,266.9,313.9,276.5,259.5,286,205.2,297.5,183.9,307.5,165.3,318.3,172.9,327.7,179.6,336.2,205,343.9,228.1,348.5,259,356.1,310.3,368.4,334.2,373.1,343.4,377.9,347.1,381.8,350.1,384.7,348.6]}},79).to({startPosition:0},1).wait(1));

	// Waveform L2
	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#00FF00").ss(1,1,1).p("A8MuEIAoAUQAyAiAwBJQCYDqBLIWQAvFOBQDuQBVD+BgA7QBrBCBkjCQBxjcBcoUQBcoTB0jYQBli+BtBFQBiA+BUD7QBPDtAoE+QAqFABNDvQBTEBBgBBQBtBJBmjBQB0jaBfofQACgKACgKQAwkNA1i6QAyizA3hmQBli7BrBMQBeBEBVD+QAMAiAKAkQAZBTAVBcQAgCKAXCdQBNIAB6DvQAwBcAvAlQApAfAegR");
	this.shape_217.setTransform(204.5,259.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_217).wait(81));

	// Inductor2 Page4
	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(2,1,1).p("A8bAAMA43AAA");
	this.shape_218.setTransform(206,260);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(2,1,1).p("AAAuXIAAPHIAANo");
	this.shape_219.setTransform(24,255.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(2,1,1).p("A8bAwIAANoA8buXIAAPHMA43AAA");
	this.shape_220.setTransform(206,255.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_219},{t:this.shape_218}]}).to({state:[{t:this.shape_220}]},80).wait(1));

	// Layer 4
	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AASAcIAAgCQADgBABgCQABgCAAgFIAAgWIgBgJIgBgDIgDgBQgDAAgCACIgFAFIAAAcQAAAFABACQABACAEABIAAACIgbAAIAAgCIAEgCIACgCIAAgGIAAgWIAAgJIgCgDIgEgBIgDABIgHAGIAAAcQABAFABACQAAABABAAQAAAAABABQAAAAABAAQABAAABABIAAACIgcAAIAAgCQABgBAAAAQABAAABAAQAAgBABAAQAAAAAAgBQABgBAAgGIAAgeQAAgFgBgCQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIAAgCIAVAAIAAAHQAFgEAEgCQADgCAFAAQAFAAACACQAEADACAEQAEgFAFgCQAEgCAFAAQAFAAAEACQACADACAEIABAMIAAAVQAAAGABABQABABAAAAQABAAAAABQABAAAAAAQABAAABABIAAACg");
	this.shape_221.setTransform(84.5,34);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgXAuIAAgCIADAAQAEAAACgCIADgDQABgCAAgHIAAg8QAAgHgBgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgGgBIgDAAIAAgCIAvAAIAAACIgDAAQgEAAgDACQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgBABAAAHIAAA8QAAAIABABQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIADAAIAAACg");
	this.shape_222.setTransform(76.8,30.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_223.setTransform(28.1,22.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgJQAIgKALAAQAKAAAHAIQAHAIABAQIgiAAQAAALAGAIQAEAFAHAAQAEAAADgBIAHgJIADABQgGALgGAFQgGAEgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgCADg");
	this.shape_224.setTransform(398.5,84.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAVAhIAAgCQAEgBACgDQABgCAAgGIAAgbIAAgLIgDgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDACIgGAHIAAAhQgBAHACABQACAEAEAAIAAACIghAAIAAgCQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIACgDIABgHIAAgbIgBgLIgDgCQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIgFACIgHAHIAAAhQAAAHACACQABACAEABIAAACIghAAIAAgCQAEgBACgCQABgBAAgIIAAgjQAAgIgBgBQgBgCgFgBIAAgCIAaAAIAAAJQAGgGAEgDQAFgCAFAAQAGAAADADQAFADACAGQAFgHAFgCQAFgDAFAAQAHAAAEADQAEAEACAEQABAFAAAKIAAAZQAAAIABABQACACAEABIAAACg");
	this.shape_225.setTransform(389.6,84.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgBQgCgDgEAAIAAgDIAZAAIAAAyQAAAHACACQACACAEAAIAAADgAgHgdQgDgCAAgFQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_226.setTransform(381.8,83.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgGApQgEgEgBgEIgBgMIAAgiIgIAAIAAgCQAIgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIACACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_227.setTransform(377.5,83.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(1,1,1).p("AhThxIAAEbABUipIiLCM");
	this.shape_228.setTransform(69.6,54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221}]}).to({state:[{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221}]},80).wait(1));

	// Layer 49
	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgdA5IgCgNIAIABQAEAAADgCIAFgEIAEgLIABgDIgfhSIAPAAIARAwIAFASIAHgSIARgwIAOAAIgfBTQgGAOgBAFQgEAHgFADQgFADgGAAIgJgBg");
	this.shape_229.setTransform(142.3,372.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgZAhQgKgMAAgVQAAgMAEgKQAFgLAJgEQAJgGAKAAQANAAAJAIQAJAHABAMIgNACQgCgJgFgEQgFgEgHAAQgJAAgHAIQgHAHAAAQQAAARAHAHQAGAIAKAAQAHAAAGgGQAFgEACgLIAOACQgCAOgKAIQgJAJgNAAQgRgBgKgKg");
	this.shape_230.setTransform(134.5,370.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAUArIAAgyQAAgJgCgEQgCgEgEgCQgEgDgGAAQgIAAgGAFQgHAHAAAPIAAAtIgOAAIAAhTIANAAIAAANQAJgOAQgBQAIAAAGAEQAGACAEAEQADAFABAGIABANIAAAzg");
	this.shape_231.setTransform(125.7,370.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_232.setTransform(116.8,370.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgSAoQgGgDgDgEQgDgFgCgGIgBgNIAAgzIAPAAIAAAuIAAAOQACAGAEADQAEAEAHAAQAFAAAGgEQAFgDACgGQADgGAAgKIAAgsIAOAAIAABTIgNAAIAAgNQgKAOgPABQgHAAgHgDg");
	this.shape_233.setTransform(107.9,370.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAWA6IAAgoQgEAEgFAEQgGADgHAAQgOgBgKgLQgLgMAAgUQAAgMAEgKQAFgKAIgFQAIgFAKgBQAPABAIANIAAgMIANAAIAABygAgOgnQgHAIAAARQABAPAGAIQAHAIAJAAQAJAAAGgIQAHgHgBgPQAAgRgGgIQgIgIgIAAQgJAAgGAHg");
	this.shape_234.setTransform(98.8,371.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_235.setTransform(90.1,370.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgWArIAAhTIANAAIAAANQAFgIAEgDQADgEAFAAQAHABAHAEIgEANQgFgDgFAAQgFAAgDADQgDADgCAEQgCAIgBAJIAAArg");
	this.shape_236.setTransform(83.7,370.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgmA5IAAhxIBNAAIAAANIg9AAIAAAkIA0AAIAAAMIg0AAIAAA0g");
	this.shape_237.setTransform(75.8,368.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgWArIAAhTIANAAIAAANQAFgIAEgDQADgEAFAAQAHABAHAEIgEANQgGgDgEAAQgGAAgCADQgDADgCAEQgDAIABAJIAAArg");
	this.shape_238.setTransform(64.1,370.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAADIg9AAQABAOAHAIQAHAHAJAAQAIAAAFgEQAGgFADgIIAPACQgEANgJAGQgJAIgPAAQgRAAgLgMgAgPgZQgGAHgBALIAtAAQgBgKgEgGQgHgIgKAAQgJAAgHAGg");
	this.shape_239.setTransform(56.3,370.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AARAqIgOgxIgDgOIgQA/IgPAAIgZhTIAOAAIANAwIAFARIAFgRIANgwIAOAAIAMAwIAEAQIAFgQIAOgwIAOAAIgaBTg");
	this.shape_240.setTransform(46.1,370.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAFQgJAGgLAAQgQAAgLgMgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgIQgHgHgKAAQgKgBgHAIg");
	this.shape_241.setTransform(35.9,370.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgjA5IAAhxIAQAAIAABkIA3AAIAAANg");
	this.shape_242.setTransform(27.3,368.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229}]}).to({state:[{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229}]},80).wait(1));

	// Layer 44
	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgbAeIAAgBIACAAIAFgBIABgCIABgGIAAgnIgBgFIgCgCIgEgBIgCAAIAAgCIAgAAIAAACIgEAAIgCABIgCACIgBAFIAAAmIABAGIACABIAEABIAFAAQAFAAADgCQAEgCABgDQADgEACgHIACAAIgCAVg");
	this.shape_243.setTransform(350.6,498.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAOAVIAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABgBAAAAIABgGIAAgQIgBgIIgBgCIgCAAIgEABIgEAEIAAAVQAAAFABABQAAAAABABQAAAAABAAQAAAAABABQAAAAABAAIAAABIgVAAIAAgBIADgBIABgCIAAgFIAAgQIAAgIIgBgCIgDAAIgDAAIgEAFIAAAVIAAAHIAFABIAAABIgWAAIAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAgBABAAQABgBAAgFIAAgWIgBgGIgEgBIAAgCIARAAIAAAFQADgDADgCQADgBAEgBQAEAAABACQADADACADIAGgGQAEgCADAAQAEAAADACQACADABACIACAKIAAAQIABAHIADABIAAABg");
	this.shape_244.setTransform(344,499.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgBAvIgghIQgGgOgCgCQgCgCgFgBIAAgCIAsAAIAAACIgBAAQgGAAgCACQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABIABADIADAIIATAuIASgoIAEgKIABgFIgBgDIgDgDIgIgBIAAgCIAeAAIAAACQgFABgEAEIgIARIggBFg");
	this.shape_245.setTransform(335,495.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(1,1,1).p("AhDBEICHiH");
	this.shape_246.setTransform(322.8,509);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243}]}).to({state:[{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243}]},80).wait(1));

	// Layer 79
	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AASAcIAAgDQADAAABgCQABgCAAgFIAAgWIgBgJIgBgDIgDgBQgDAAgCACIgFAFIAAAcQAAAFABACQABACAEAAIAAADIgbAAIAAgDIAEgBIACgCIAAgGIAAgWIAAgJIgCgDIgEgBIgDABIgHAGIAAAcQABAFABACQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIAAADIgcAAIAAgDQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBQABgBAAgGIAAgdQAAgHgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIAAgCIAVAAIAAAHQAFgEAEgCQADgCAFgBQAFAAADADQADACACAFQAEgFAFgCQAEgDAFAAQAFAAAEADQACACACAEIABANIAAAVQAAAGABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIAAADg");
	this.shape_247.setTransform(123.6,392);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgXAuIAAgCIADAAQAEAAACgCIADgDQABgCAAgHIAAg8QAAgHgBgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgGgBIgDAAIAAgCIAvAAIAAACIgDAAQgEAAgDACQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgBABAAAHIAAA8QAAAIABABQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIADAAIAAACg");
	this.shape_248.setTransform(115.9,388.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#00FF00").ss(1,1,1).p("AAAjPIAAGf");
	this.shape_249.setTransform(313.5,525.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(1,1,1).p("AhThxIAAEbABUipIiLCM");
	this.shape_250.setTransform(108.7,412.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247}]}).to({state:[{t:this.shape_249},{t:this.shape_250},{t:this.shape_248},{t:this.shape_247}]},80).wait(1));

	// Layer 81
	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#FFFF00").ss(2,1,1).p("AWtv1IAAj8AWZPyIAAj9AK/nFIAAj8ArhnFIAAj8ArXTyIAAj8A2sTyIAAj8ALCP2IAAj9");
	this.shape_251.setTransform(205.2,158.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_251).wait(81));

	// Layer 60
	this.instance_9 = new lib.axisball("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(23.6,70.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1,scaleY:1,rotation:125.6,guide:{path:[23.6,70.7,25.8,66.8,29.7,61.9,37.4,52.2,45.8,47.5,72.6,31.9,95.8,70.7,119.2,109.9,144.7,96.1,152.9,91.7,160.8,81.8,161.6,80.9,168.6,70.7,181.3,52.4,193,46.5,218.5,33.6,239.9,70.7,261.6,108.3,286.8,96.8,295.4,92.9,303.6,83.5,309,77.3,312.8,70.7,316.4,64.3,321.8,58.2,329.9,49.2,338.4,45.5,363.1,34.5,384.6,70.7], orient:'fixed'}},80).wait(1));

	// Layer 72
	this.instance_10 = new lib.axisball("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(25.4,428.4,1,1,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,rotation:59.2,guide:{path:[25.5,428.3,29.6,424.8,34.4,421.5,49.8,410.7,66.5,405.2,120,387.5,167.1,428.3,167.1,428.3,167.1,428.3,214,469.3,267.5,451.6,284.2,446.1,299.6,435.3,304.4,431.9,308.5,428.4,312.7,424.9,317.5,421.6,332.9,410.8,349.7,405.3,367.6,399.3,384.8,400], orient:'fixed'}},80).wait(1));

	// Layer 71
	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(1,1,1).p("AcFkbQisgGizA7QinA3iaBsQgwAhgqAjQgpAjgwAhQiaBsioA3QoXCxnUmZQgBAAAAAAQnXmYoWCxQioA3iaBsQgwAhgpAj");
	this.shape_252.setTransform(205.1,428.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_252).wait(81));

	// Layer 101
	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(2,1,1).p("AgYgwIAxAxIgvAwIgChb");
	this.shape_253.setTransform(389.4,429.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgNAbIAAgBQgBgKABgKIAAgJQAAgHgDgHIABgJIABgBQAFgEAFAFIAFAHQAFAHAHAFIADADQACAEgEAEIgFAEQgBAMgJAIQgCACgEAAQgDAAgDgDg");
	this.shape_254.setTransform(389.2,429.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(2,1,1).p("AgwAZIAxgxIAwAwIhbAB");
	this.shape_255.setTransform(24.6,391);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgaAQIgBgBQgEgFAFgFIAHgFQAHgFAFgHIADgDQAEgCAEAEIAEAFQAMABAIAJQACACAAAEQAAADgDADIgBAAQgKABgKgBIgJAAQgHAAgHADIgJgBg");
	this.shape_256.setTransform(24.6,391.2);

	this.instance_11 = new lib.Tween5("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(190.6,69);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(2,1,1).p("A8TAAILQAAILUAAILPAAIACAAILQAAILTAAIAQAA");
	this.shape_257.setTransform(205.7,429.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#00FF00").ss(1,1,1).p("AgOAOIAdgb");
	this.shape_258.setTransform(241.5,69.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#FFFFFF").ss(2,1,1).p("EAioAJEMhFPAAAIAAyHMBFPAAAg");
	this.shape_259.setTransform(191,427.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(2,1,1).p("AAAF3IAArt");
	this.shape_260.setTransform(23.9,431.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("EginAJEIAAyHMBFOAAAIAASHgA6FGfIAArtgA2jjXQhUAyhNBjQgWAcgQAZQgNASgKARILQAAIACAEQAfA1AgArQATAbAUAWQC7DZDSh8QA+glA6g/QASgUASgWIAFgHQAaghATgeIACgDIANgXIADgEIrVAAQh3jMiCg5QgxgVgyAAQhKAAhMAtgAAAjXQhSAxhOBjQgoA2gUAjILPAAIACAAQAfA4AhAsQASAaATAWQBJBUBMAhIAMAFQByArB6hJQA+gkA6hAQARgTARgVIAHgIQAmgyAXgqIrQAAIgCAAQilkbi4AAQhJAAhNAugAeoAWIgQAAgAWmjaQhUAxhNBkQgnAygWAmIgDADILTAAIAAgDQilkai3AAQhKAAhMAtg");
	this.shape_261.setTransform(191,427.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(2,1,1).p("A8RgRILQAAILVAAILPAAIABAAILQAAILUAAIAPAAA8WF3IAArt");
	this.shape_262.setTransform(205.4,431.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.instance_11},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253}]}).to({state:[{t:this.shape_261},{t:this.shape_258},{t:this.shape_262},{t:this.shape_259},{t:this.instance_11},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253}]},80).wait(1));

	// Layer 2
	this.instance_12 = new lib.Tween5("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(190.6,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(80).to({startPosition:0},0).wait(1));

	// Layer 76
	this.instance_13 = new lib.Tween8("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(24,505.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({guide:{path:[24.1,505.7,60.2,506.1,95.1,546,95.6,546.5,96,547.1,145.6,603.6,197.5,580.7,213.9,573.4,228.6,559,235.9,551.7,240,546,244.1,540.3,251.4,533,266.1,518.6,282.5,511.4,335,488.2,385,546]}},80).wait(1));

	// Layer 75
	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#00FF00").ss(1,1,1).p("AcNAAQn0pBoNDnQikBJiTCQQhKBJgoA4QgpA5hJBJQiTCQijBJQoIDlnwo1QgFgGgEgFQldmOlpgE");
	this.shape_263.setTransform(204.5,546);

	this.timeline.addTween(cjs.Tween.get(this.shape_263).wait(81));

	// Layer 74
	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(2,1,1).p("AgYgwIAxAxIgwAwIgBhb");
	this.shape_264.setTransform(389,547);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgNAbIAAgBQgBgKABgKIAAgJQAAgHgDgHIABgJIABgBQAFgEAFAFIAFAHQAFAHAHAFIADADQACAEgEAEIgFAEQgBAMgJAIQgCACgEAAQgDAAgDgDg");
	this.shape_265.setTransform(388.8,547);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(2,1,1).p("AcVAAMg4pAAA");
	this.shape_266.setTransform(205.3,547);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(2,1,1).p("AgwAZIAxgxIAwAvIhbAC");
	this.shape_267.setTransform(23.7,490.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgaAQIgBgBQgEgFAFgFIAHgFQAHgFAFgHIADgDQAEgCAEAEIAEAFQAMABAIAJQACACAAAEQAAADgDADIgBAAQgKABgKgBIgJAAQgHAAgHADIgJgBg");
	this.shape_268.setTransform(23.7,490.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(2,1,1).p("AAAIcIAAw3");
	this.shape_269.setTransform(23.5,548.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264}]}).to({state:[{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264}]},80).wait(1));

	// Layer 9
	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgJQAIgKALAAQAKAAAHAIQAHAIABAQIgiAAQAAALAGAIQAEAFAHAAQAEAAADgBIAHgJIADABQgGALgGAFQgGAEgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgCADg");
	this.shape_270.setTransform(400.8,276.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAVAhIAAgCQAEgBABgDQACgCAAgGIAAgbIgBgLIgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgEADIgGAGIAAAhQAAAHACABQABAEAFAAIAAACIggAAIAAgCQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIACgDIAAgHIAAgbIAAgLIgCgCQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgFACIgHAHIAAAhQAAAHABACQACACAEABIAAACIghAAIAAgCQAEgBACgCQABgBAAgIIAAgjQAAgIgBgBQgCgCgEgBIAAgCIAaAAIAAAJQAGgGAEgCQAFgDAFAAQAGAAADADQAEADACAGQAGgHAFgCQAFgDAGAAQAGAAAEADQAEAEABAEQACAFAAAKIAAAZQAAAIACABQABACAEABIAAACg");
	this.shape_271.setTransform(391.9,276.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgDIAZAAIAAAyQAAAHACACQACACAEAAIAAADgAgHgcQgDgDAAgFQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAFgDADQgDACgEAAQgEAAgDgCg");
	this.shape_272.setTransform(384.1,275.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgGApQgEgEgCgEIAAgMIAAgiIgJAAIAAgCQAJgGAHgHQAFgHAEgIIACAAIAAAXIAQAAIAAAHIgQAAIAAAnIAAAHIACACIADABQAEAAAEgGIADABQgHANgLAAQgGAAgEgDg");
	this.shape_273.setTransform(379.8,275.6);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgJQAIgKALAAQAKAAAHAIQAHAIABAQIgiAAQAAALAGAIQAEAFAHABQAEAAADgCIAHgJIADACQgGAKgGAFQgGAEgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQgDABgCADg");
	this.shape_274.setTransform(400.8,448.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AAVAhIAAgCQAEgBABgDQACgCAAgGIAAgbIgBgLIgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgDAAgEADIgGAFIAAAiQAAAHACABQABADAFABIAAACIggAAIAAgCQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIACgDIAAgHIAAgbIAAgLIgCgCQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgFACIgHAGIAAAiQAAAHABACQACACAEABIAAACIghAAIAAgCQAEgBACgCQABgCAAgHIAAgjQAAgIgBgBQgCgCgEgBIAAgCIAaAAIAAAJQAGgGAEgCQAFgDAFAAQAGAAADADQAEADACAGQAGgGAFgDQAFgDAGAAQAGAAAEADQAEAEABAEQACAFAAAKIAAAZQAAAHACACQABACAEABIAAACg");
	this.shape_275.setTransform(391.9,448.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgQAvIAAgCQAEAAACgCQABgCAAgHIAAgkQAAgHgBgBQgCgCgEgBIAAgDIAZAAIAAAyQAAAHACACQACACAEAAIAAACgAgHgcQgDgDAAgFQAAgEADgDQADgEAEABQAEgBADAEQADADAAAEQAAAFgDADQgDACgEAAQgEAAgDgCg");
	this.shape_276.setTransform(384.1,446.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgGApQgEgEgCgEIAAgMIAAgiIgJAAIAAgCQAJgGAHgHQAFgHAEgIIACAAIAAAXIAQAAIAAAHIgQAAIAAAnIAAAHIACACIADABQAEAAAEgGIADABQgHANgLAAQgGAAgEgDg");
	this.shape_277.setTransform(379.8,447.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgJQAIgKALAAQAKAAAHAIQAHAIABAQIgiAAQAAALAGAIQAEAFAHAAQAEABADgCIAHgJIADABQgGALgGAFQgGAEgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgCADg");
	this.shape_278.setTransform(400.3,564.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAVAhIAAgCQAEgBACgDQABgCAAgGIAAgbIAAgLIgDgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDADIgGAGIAAAhQgBAHACABQACAEAEAAIAAACIghAAIAAgCQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIACgDIABgHIAAgbIgBgLIgDgCQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIgFACIgHAHIAAAhQAAAHACACQABACAEABIAAACIghAAIAAgCQAEgBACgCQABgCAAgHIAAgjQAAgIgBgBQgBgCgFgBIAAgCIAaAAIAAAJQAGgGAEgCQAFgDAFAAQAGAAADADQAFADACAGQAFgGAFgDQAFgDAFAAQAHAAAEADQAEAEACAEQABAFAAAKIAAAZQAAAHABACQACACAEABIAAACg");
	this.shape_279.setTransform(391.4,564.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgQAvIAAgCQAEAAACgCQABgCAAgHIAAgkQAAgHgBgBQgCgCgEgBIAAgDIAZAAIAAAyQAAAHACACQACACAEAAIAAACgAgHgcQgDgDAAgFQAAgEADgDQADgEAEABQAEgBADAEQADADAAAEQAAAFgDADQgDACgEAAQgEAAgDgCg");
	this.shape_280.setTransform(383.6,562.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgGApQgEgEgBgEIgBgMIAAgiIgIAAIAAgCQAIgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIACACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_281.setTransform(379.3,563.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AASAcIAAgCQADgBABgCQABgCAAgFIAAgWIgBgJIgBgDIgDgBQgDAAgCACIgFAFIAAAcQAAAFABACQABACAEABIAAACIgbAAIAAgCIAEgCIACgCIAAgGIAAgWIAAgJIgCgDIgEgBIgDABIgHAGIAAAcQABAFABACQAAABABAAQAAAAABABQAAAAABAAQABAAABABIAAACIgcAAIAAgCQABgBAAAAQABAAABAAQAAgBABAAQAAAAAAgBQABgBAAgGIAAgeQAAgFgBgCQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIAAgCIAVAAIAAAHQAFgEAEgCQADgCAFAAQAFAAACACQAEADACAEQAEgFAFgCQAEgCAFAAQAFAAAEACQACADACAEIABAMIAAAVQAAAGABABQABABAAAAQABAAAAABQABAAAAAAQABAAABABIAAACg");
	this.shape_282.setTransform(84.5,34);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgXAuIAAgCIADAAQAEAAACgCIADgDQABgCAAgHIAAg8QAAgHgBgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgGgBIgDAAIAAgCIAvAAIAAACIgDAAQgEAAgDACQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgBABAAAHIAAA8QAAAIABABQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIADAAIAAACg");
	this.shape_283.setTransform(76.8,30.7);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_284.setTransform(28.1,22.1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgJQAIgKALAAQAKAAAHAIQAHAIABAQIgiAAQAAALAGAIQAEAFAHAAQAEAAADgBIAHgJIADABQgGALgGAFQgGAEgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgCADg");
	this.shape_285.setTransform(401.8,84.6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AAVAhIAAgCQAEgBACgDQABgCAAgGIAAgbIgBgLIgCgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgCACIgGAHIAAAhQAAAHABABQACAEAEAAIAAACIghAAIAAgCQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIACgDIABgHIAAgbIgBgLIgCgCQgBgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIgFACIgHAHIAAAhQAAAHABACQACACAEABIAAACIghAAIAAgCQAEgBACgCQABgBAAgIIAAgjQAAgIgBgBQgBgCgFgBIAAgCIAaAAIAAAJQAGgGAEgDQAFgCAFAAQAGAAADADQAFADACAGQAFgHAFgCQAFgDAFAAQAHAAAEADQAEAEACAEQABAFAAAKIAAAZQAAAIABABQACACAEABIAAACg");
	this.shape_286.setTransform(392.8,84.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgBQgCgDgEAAIAAgDIAZAAIAAAyQAAAHACACQACACAEAAIAAADgAgHgdQgDgCAAgFQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_287.setTransform(385,83.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgGApQgEgEgBgEIgBgMIAAgiIgIAAIAAgCQAIgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIACACIACABQAEAAAEgGIACABQgGANgMAAQgFAAgEgDg");
	this.shape_288.setTransform(380.8,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270}]}).to({state:[{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270}]},80).wait(1));

	// Layer 1
	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgNAjQgHgDgDgGQgFgGAAgHIAJgBQABAGADADQACAEAEACQAGABAFAAQAFABAEgCQAEgBACgEQACgCABgDQgBgEgCgDQgCgCgEgBIgMgEIgNgDQgGgDgCgEQgDgEAAgFQAAgFAEgFQACgFAHgDQAFgCAHAAQAHAAAHADQAFADAEAFQADAEAAAGIgJABQAAgGgEgEQgFgEgIABQgIAAgEACQgDAEAAAEQAAAEACADQADACAKADIAQAFQAHABACAFQADAEABAGQAAAGgEAFQgDAFgGADQgGACgIAAQgJAAgGgCg");
	this.shape_289.setTransform(611,608.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgaAkIAAhHIAzAAIAAAJIgpAAIAAAWIAmAAIAAAHIgmAAIAAAYIArAAIAAAJg");
	this.shape_290.setTransform(603.5,608.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgVAkIAAhHIAJAAIAAA+IAiAAIAAAJg");
	this.shape_291.setTransform(596.5,608.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AAXAkIgJgWIgdAAIgHAWIgLAAIAchHIAJAAIAeBHgAgEgOIgIAUIAXAAIgHgSIgFgPQgBAHgCAGg");
	this.shape_292.setTransform(589.2,608.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AARAkIgPg2IgCgIIgBAIIgPA2IgKAAIgThHIAKAAIALAuIADAPIADgNIANgwIALAAIAKAjIAGAaIADgQIALgtIAKAAIgUBHg");
	this.shape_293.setTransform(580.5,608.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AASAkIAAgiIgkAAIAAAiIgJAAIAAhHIAJAAIAAAeIAkAAIAAgeIAKAAIAABHg");
	this.shape_294.setTransform(567.4,608.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgEAkIAAg+IgXAAIAAgJIA3AAIAAAJIgXAAIAAA+g");
	this.shape_295.setTransform(559.7,608.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgPAhQgHgDgCgHQgDgHAAgLIAAgoIAJAAIAAAoQAAAJACAFQACAEAEADQAEACAGAAQAKAAAEgFQAFgFgBgNIAAgoIAKAAIAAAoQAAALgDAGQgCAHgGAEQgHADgKAAQgJAAgGgDg");
	this.shape_296.setTransform(552.1,608.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgRAhQgIgGgEgIQgEgJAAgJQAAgRAJgJQAKgLAOAAQAKAAAIAFQAIAFAEAIQAEAIAAAKQAAALgEAJQgFAIgIAFQgIAEgJAAQgJAAgIgEgAgQgVQgIAHAAAPQAAANAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgOQAAgIgDgGQgDgHgFgDQgGgEgHABQgJAAgHAGg");
	this.shape_297.setTransform(543.6,608.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgNAjQgHgDgDgGQgFgGAAgHIAJgBQABAGACADQADAEAEACQAGABAEAAQAGABAEgCQAEgBACgEQACgCAAgDQAAgEgCgDQgCgCgEgBIgMgEIgNgDQgGgDgCgEQgDgEAAgFQAAgFAEgFQACgFAHgDQAFgCAHAAQAHAAAHADQAFADAEAFQADAEAAAGIgJABQAAgGgEgEQgFgEgIABQgIAAgDACQgEAEgBAEQAAAEADADQADACAKADIAQAFQAHABACAFQADAEAAAGQAAAGgDAFQgDAFgGADQgGACgIAAQgIAAgHgCg");
	this.shape_298.setTransform(535.3,608.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AARAkIgPg2IgCgIIgBAIIgPA2IgKAAIgThHIAKAAIALAuIADAPIADgNIANgwIALAAIAKAjIAGAaIADgQIALgtIAKAAIgUBHg");
	this.shape_299.setTransform(522.5,608.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgaAkIAAhHIAzAAIAAAJIgpAAIAAAWIAmAAIAAAHIgmAAIAAAYIArAAIAAAJg");
	this.shape_300.setTransform(513.6,608.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AATAkIglg3IAAA3IgJAAIAAhHIAKAAIAkA3IAAg3IAJAAIAABHg");
	this.shape_301.setTransform(505.5,608.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgXAkIAAhHIAvAAIAAAJIgmAAIAAAWIAhAAIAAAHIghAAIAAAhg");
	this.shape_302.setTransform(494.2,608.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgRAhQgIgGgEgIQgEgJAAgJQAAgRAJgJQAKgLAOAAQAKAAAIAFQAIAFAEAIQAEAIAAAKQAAALgEAJQgFAIgIAFQgIAEgJAAQgJAAgIgEgAgQgVQgIAHAAAPQAAANAHAHQAHAIAKAAQAKAAAHgIQAHgHAAgOQAAgIgDgGQgDgHgFgDQgGgEgHABQgJAAgHAGg");
	this.shape_303.setTransform(486.1,608.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgEAkIAAgfIgcgoIAMAAIAOAWIAGAMIAIgNIAOgVIALAAIgdAoIAAAfg");
	this.shape_304.setTransform(474.3,608.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgEAkIAAg+IgXAAIAAgJIA3AAIAAAJIgXAAIAAA+g");
	this.shape_305.setTransform(466.9,608.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_306.setTransform(461.5,608.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgNAjQgHgDgEgGQgDgGAAgHIAJgBQAAAGACADQACAEAGACQAFABAFAAQAFABAEgCQAFgBACgEQACgCgBgDQABgEgCgDQgCgCgFgBIgMgEIgOgDQgEgDgDgEQgDgEAAgFQAAgFADgFQAEgFAFgDQAGgCAHAAQAHAAAGADQAHADADAFQADAEABAGIgKABQAAgGgFgEQgEgEgIABQgIAAgEACQgEAEAAAEQABAEACADQADACALADIAQAFQAFABAEAFQACAEAAAGQAAAGgDAFQgDAFgGADQgGACgIAAQgJAAgGgCg");
	this.shape_307.setTransform(455.7,608.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AATAkIgJgPIgHgKIgDgFIgFgCIgFAAIgLAAIAAAgIgKAAIAAhHIAfAAQAJAAAGACQAEACADAFQAEAFAAAGQAAAHgGAGQgFAEgJABIAFAEQAEAEAEAFIAMAUgAgVgDIAUAAQAGAAAEgCQADgBACgDQACgDAAgDQAAgFgEgEQgDgDgJAAIgVAAg");
	this.shape_308.setTransform(448.2,608.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgaAkIAAhHIAzAAIAAAJIgpAAIAAAWIAmAAIAAAHIgmAAIAAAYIArAAIAAAJg");
	this.shape_309.setTransform(440,608.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgEAkIgchHIAKAAIATAzIADAMIAEgMIATgzIAKAAIgcBHg");
	this.shape_310.setTransform(432.2,608.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgEAkIAAhHIAJAAIAABHg");
	this.shape_311.setTransform(426.5,608.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AATAkIglg3IAAA3IgJAAIAAhHIAKAAIAkA3IAAg3IAJAAIAABHg");
	this.shape_312.setTransform(420.5,608.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgPAhQgHgDgCgHQgDgHAAgLIAAgoIAKAAIAAAoQAAAJABAFQACAEAEADQAEACAGAAQAKAAAEgFQAFgFAAgNIAAgoIAJAAIAAAoQAAALgDAGQgCAHgGAEQgGADgLAAQgJAAgGgDg");
	this.shape_313.setTransform(412.3,608.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgaAkIAAhHIAzAAIAAAJIgpAAIAAAWIAmAAIAAAHIgmAAIAAAYIArAAIAAAJg");
	this.shape_314.setTransform(400.7,608.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AASAkIAAgiIgkAAIAAAiIgJAAIAAhHIAJAAIAAAeIAkAAIAAgeIAKAAIAABHg");
	this.shape_315.setTransform(392.7,608.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgEAkIAAg+IgXAAIAAgJIA3AAIAAAJIgXAAIAAA+g");
	this.shape_316.setTransform(385,608.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289}]}).to({state:[{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289}]},80).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278,315.1,652.6,611.6);
// library properties:
lib.properties = {
	id: '015B51188996744EBCB531AFB2D3F9BC',
	width: 620,
	height: 620,
	fps: 7,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
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
an.compositions['015B51188996744EBCB531AFB2D3F9BC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
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



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;