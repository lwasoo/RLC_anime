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


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("A85CqIAAlTMA5zAAAIAAFTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185,-17,370.1,34);


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


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25.4,-0.1,1,1,-90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(2,1,1).p("AgBGnIAAgJIAsAAAgCGeIAAAJAgCGeIABAAAgCHDIAAAFAgCGeIguABIAwAxIAxgyAgCnPIAANt");
	this.shape.setTransform(0.8,46.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ACIAAQiIAAiHAA");
	this.shape_1.setTransform(14.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgBAQIgBgBIgBgBIgEgFQgMgBgIgJQgCgCAAgEQAAgDADgDIABAAQAKgBAKABIADABIABAAIAFgBQAHAAAHgDIAJABIABABQAEAFgFAFIgHAFQgHAFgFAHIgDADIgEABIgCgBg");
	this.shape_2.setTransform(0.8,89.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-6.1,34.1,99.8);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-19);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("A83C+IAAl7MA5vAAAIAAF7g");
	this.shape.setTransform(0.3,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185,-36,370.1,72);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0.3,1.909,1.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-3.9,8.4,8.4);


(lib.arrowscap1blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25.1,0.1,1,1,-90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACIAAQiIAAiHAA");
	this.shape.setTransform(13.7,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000FF").ss(2,1,1).p("AAAC9IAAgJIArAAAABjlIgBGZIgwABIAwAxIAxgy");
	this.shape_1.setTransform(0,23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AgBAQIgBgBIgBgBIgEgFQgMgBgIgJQgCgCAAgEQAAgDADgDIABAAQAKgBAKABIADABIABAAIABAAIAEgBQAHAAAHgDIAJABIABABQAEAFgFAFIgHAFQgHAFgFAHIgDADIgEABIgCgBg");
	this.shape_2.setTransform(0.1,43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,-5.8,34.5,53);


// stage content:
(lib.cap2_Canvas_new = function(mode,startPosition,loop) {
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
		/* stop();*/
	}
	this.frame_81 = function() {
		this.stop();
		
		this.button_rew.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80).call(this.frame_80).wait(1).call(this.frame_81).wait(1));

	// Layer 100
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhoHlIAAvJIDRAAIAAPJg");
	this.shape.setTransform(-5.5,366.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(82));

	// blue markers 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAnNIAAOb");
	this.shape_1.setTransform(487.4,460.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAHFIAAuJ");
	this.shape_2.setTransform(487.4,459.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAG4IAAtw");
	this.shape_3.setTransform(487.4,458.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGpIAAtR");
	this.shape_4.setTransform(487.4,456.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGWIAAsr");
	this.shape_5.setTransform(487.4,454.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGAIAAr/");
	this.shape_6.setTransform(487.4,452.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAFnIAArN");
	this.shape_7.setTransform(487.4,450);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAFLIAAqV");
	this.shape_8.setTransform(487.4,447.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAEsIAApX");
	this.shape_9.setTransform(487.4,444);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAEJIAAoR");
	this.shape_10.setTransform(487.4,440.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADkIAAnH");
	this.shape_11.setTransform(487.4,436.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC6IAAl0");
	this.shape_12.setTransform(487.4,432.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACOIAAkb");
	this.shape_13.setTransform(487.4,428.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABfIAAi9");
	this.shape_14.setTransform(487.4,423.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAgrIAABX");
	this.shape_15.setTransform(487.4,418.5);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABeIAAi7");
	this.shape_16.setTransform(487.4,404.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACNIAAkZ");
	this.shape_17.setTransform(487.4,399.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC5IAAlw");
	this.shape_18.setTransform(487.4,395.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADhIAAnB");
	this.shape_19.setTransform(487.4,391.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAEGIAAoL");
	this.shape_20.setTransform(487.4,387.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAEpIAApR");
	this.shape_21.setTransform(487.4,384.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAFIIAAqP");
	this.shape_22.setTransform(487.4,381);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAFkIAArH");
	this.shape_23.setTransform(487.4,378.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAF9IAAr5");
	this.shape_24.setTransform(487.4,375.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGTIAAsl");
	this.shape_25.setTransform(487.4,373.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGlIAAtJ");
	this.shape_26.setTransform(487.4,371.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAG0IAAtn");
	this.shape_27.setTransform(487.4,370.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAHBIAAuB");
	this.shape_28.setTransform(487.4,368.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAnJIAAOT");
	this.shape_29.setTransform(487.4,367.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAHEIAAuH");
	this.shape_30.setTransform(487.4,368.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAG3IAAtt");
	this.shape_31.setTransform(487.4,369.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGnIAAtO");
	this.shape_32.setTransform(487.4,371.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGVIAAsp");
	this.shape_33.setTransform(487.4,373.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAF/IAAr9");
	this.shape_34.setTransform(487.4,375.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAFmIAArL");
	this.shape_35.setTransform(487.4,378);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAFJIAAqR");
	this.shape_36.setTransform(487.4,380.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAEqIAApT");
	this.shape_37.setTransform(487.4,384);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAEHIAAoN");
	this.shape_38.setTransform(487.4,387.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADiIAAnD");
	this.shape_39.setTransform(487.4,391.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC5IAAlx");
	this.shape_40.setTransform(487.4,395.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC4IAAlv");
	this.shape_41.setTransform(487.4,433.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAEoIAApP");
	this.shape_42.setTransform(487.4,444.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAFHIAAqN");
	this.shape_43.setTransform(487.4,447.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAFjIAArF");
	this.shape_44.setTransform(487.4,450.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAF7IAAr1");
	this.shape_45.setTransform(487.4,453);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGRIAAsh");
	this.shape_46.setTransform(487.4,455.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGjIAAtF");
	this.shape_47.setTransform(487.4,456.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGyIAAtj");
	this.shape_48.setTransform(487.4,458.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAG+IAAt7");
	this.shape_49.setTransform(487.4,459.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAnFIAAOL");
	this.shape_50.setTransform(487.4,460.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAG9IAAt5");
	this.shape_51.setTransform(487.4,458.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGwIAAtf");
	this.shape_52.setTransform(487.4,457.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGhIAAtB");
	this.shape_53.setTransform(487.4,455.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAGOIAAsb");
	this.shape_54.setTransform(487.4,453.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAF4IAArw");
	this.shape_55.setTransform(487.4,451.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAFgIAAq/");
	this.shape_56.setTransform(487.4,449.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAFEIAAqH");
	this.shape_57.setTransform(487.4,446.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAElIAApJ");
	this.shape_58.setTransform(487.4,443.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAEDIAAoF");
	this.shape_59.setTransform(487.4,440);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADfIAAm9");
	this.shape_60.setTransform(487.4,436.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC3IAAlt");
	this.shape_61.setTransform(487.4,432.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACLIAAkV");
	this.shape_62.setTransform(487.4,428);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABeIAAi6");
	this.shape_63.setTransform(487.4,423.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{y:460.2}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{y:404.5}}]},1).to({state:[{t:this.shape_17,p:{y:399.8}}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19,p:{y:391.3}}]},1).to({state:[{t:this.shape_20,p:{y:387.6}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).to({state:[{t:this.shape_1,p:{y:367.5}}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_17,p:{y:399.7}}]},1).to({state:[{t:this.shape_16,p:{y:404.5}}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{y:424.5}}]},1).to({state:[{t:this.shape_17,p:{y:429.2}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_19,p:{y:437.6}}]},1).to({state:[{t:this.shape_20,p:{y:441.3}}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50,p:{y:460.5}}]},1).to({state:[]},1).to({state:[{t:this.shape_50,p:{y:459.5}}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(15).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:409.5},0).to({_off:true},1).wait(29).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:419.5},0).to({_off:true},1).wait(29).to({_off:false,y:418.5},0).wait(3));

	// blue markers
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAjiIAAHF");
	this.shape_64.setTransform(487.4,124.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADVIAAmp");
	this.shape_65.setTransform(487.4,123.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADAIAAl/");
	this.shape_66.setTransform(487.4,121.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAClIAAlJ");
	this.shape_67.setTransform(487.4,118.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACDIAAkF");
	this.shape_68.setTransform(487.4,115.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABbIAAi1");
	this.shape_69.setTransform(487.4,111.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAgrIAABX");
	this.shape_70.setTransform(487.4,106.5);
	this.shape_70._off = true;

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABXIAAit");
	this.shape_71.setTransform(487.4,93.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAB8IAAj3");
	this.shape_72.setTransform(487.4,89.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACbIAAk1");
	this.shape_73.setTransform(487.4,86.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC1IAAlp");
	this.shape_74.setTransform(487.4,83.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADIIAAmP");
	this.shape_75.setTransform(487.4,81.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAjVIAAGr");
	this.shape_76.setTransform(487.4,80.3);
	this.shape_76._off = true;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADUIAAmn");
	this.shape_77.setTransform(487.4,80.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC/IAAl9");
	this.shape_78.setTransform(487.4,82.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACkIAAlH");
	this.shape_79.setTransform(487.4,85.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACCIAAkD");
	this.shape_80.setTransform(487.4,88.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABaIAAiz");
	this.shape_81.setTransform(487.4,92.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABYIAAiw");
	this.shape_82.setTransform(487.4,110.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAB+IAAj7");
	this.shape_83.setTransform(487.4,114.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACeIAAk7");
	this.shape_84.setTransform(487.4,117.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC3IAAlt");
	this.shape_85.setTransform(487.4,120.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADKIAAmT");
	this.shape_86.setTransform(487.4,122.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADJIAAmR");
	this.shape_87.setTransform(487.4,122.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC2IAAlr");
	this.shape_88.setTransform(487.4,120.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACdIAAk4");
	this.shape_89.setTransform(487.4,117.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAB9IAAj5");
	this.shape_90.setTransform(487.4,114.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABYIAAiv");
	this.shape_91.setTransform(487.4,110.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABZIAAix");
	this.shape_92.setTransform(487.4,93);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAB/IAAj9");
	this.shape_93.setTransform(487.4,89.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACeIAAk8");
	this.shape_94.setTransform(487.4,85.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC4IAAlv");
	this.shape_95.setTransform(487.4,83.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAjnIAAHP");
	this.shape_96.setTransform(487.4,78.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADbIAAm1");
	this.shape_97.setTransform(487.4,79.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADHIAAmN");
	this.shape_98.setTransform(487.4,81.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACsIAAlX");
	this.shape_99.setTransform(487.4,84.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACLIAAkV");
	this.shape_100.setTransform(487.4,87.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABjIAAjF");
	this.shape_101.setTransform(487.4,91.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAgzIAABn");
	this.shape_102.setTransform(487.4,96.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAjfIAAG/");
	this.shape_103.setTransform(487.4,124.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADSIAAmj");
	this.shape_104.setTransform(487.4,123);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAAC9IAAl5");
	this.shape_105.setTransform(487.4,121);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACiIAAlD");
	this.shape_106.setTransform(487.4,118.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACBIAAkB");
	this.shape_107.setTransform(487.4,115);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAABdIAAi5");
	this.shape_108.setTransform(487.4,92.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACGIAAkL");
	this.shape_109.setTransform(487.4,88.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAACoIAAlQ");
	this.shape_110.setTransform(487.4,84.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADFIAAmI");
	this.shape_111.setTransform(487.4,82.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#0000FF").ss(1.5,1,1).p("AAADZIAAmx");
	this.shape_112.setTransform(487.4,80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_64,p:{y:124.7}}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[]},1).to({state:[{t:this.shape_64,p:{y:79}}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81,p:{y:92.8}}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86,p:{y:122.2}}]},1).to({state:[{t:this.shape_76}]},1).to({state:[]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_92,p:{y:93}}]},1).to({state:[{t:this.shape_93,p:{y:89.1}}]},1).to({state:[{t:this.shape_94,p:{y:85.9}}]},1).to({state:[{t:this.shape_95,p:{y:83.4}}]},1).to({state:[{t:this.shape_86,p:{y:81.5}}]},1).to({state:[{t:this.shape_76}]},1).to({state:[]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_92,p:{y:111}}]},1).to({state:[{t:this.shape_93,p:{y:114.8}}]},1).to({state:[{t:this.shape_94,p:{y:117.9}}]},1).to({state:[{t:this.shape_95,p:{y:120.4}}]},1).to({state:[{t:this.shape_86,p:{y:122.3}}]},1).to({state:[{t:this.shape_76}]},1).to({state:[]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_81,p:{y:111}}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_96}]},1).to({state:[]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(7).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:97.5},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:106.5},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:97.5},0).to({_off:true},1).wait(15).to({_off:false,y:106.5},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,y:97.5},0).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_76).wait(15).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false,y:123.5},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false,y:80.3},0).to({_off:true},1).wait(15).to({_off:false,y:123.5},0).to({_off:true},1).wait(18));

	// markers 2
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgOIAAAd");
	this.shape_113.setTransform(486.1,412);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAeIAAg7");
	this.shape_114.setTransform(486.1,410.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAsIAAhX");
	this.shape_115.setTransform(486.1,409.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA5IAAhx");
	this.shape_116.setTransform(486.2,407.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1.5,1,1).p("AAABFIAAiJ");
	this.shape_117.setTransform(486.2,406.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1.5,1,1).p("AAABRIAAih");
	this.shape_118.setTransform(486.2,405.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(1.5,1,1).p("AAABbIAAi1");
	this.shape_119.setTransform(486.2,404.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1.5,1,1).p("AAABkIAAjH");
	this.shape_120.setTransform(486.2,403.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(1.5,1,1).p("AAABtIAAjZ");
	this.shape_121.setTransform(486.2,402.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB1IAAjo");
	this.shape_122.setTransform(486.2,401.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB7IAAj2");
	this.shape_123.setTransform(486.2,401.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1.5,1,1).p("AAACBIAAkB");
	this.shape_124.setTransform(486.2,400.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1.5,1,1).p("AAACGIAAkL");
	this.shape_125.setTransform(486.2,400.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1.5,1,1).p("AAACKIAAkU");
	this.shape_126.setTransform(486.2,399.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiNIAAEb");
	this.shape_127.setTransform(486.2,399.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiMIAAEZ");
	this.shape_128.setTransform(486.2,399.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1.5,1,1).p("AAACKIAAkT");
	this.shape_129.setTransform(486.2,399.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1.5,1,1).p("AAACFIAAkK");
	this.shape_130.setTransform(486.2,400.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(1.5,1,1).p("AAACAIAAkA");
	this.shape_131.setTransform(486.2,400.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB7IAAj1");
	this.shape_132.setTransform(486.2,401.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB0IAAjn");
	this.shape_133.setTransform(486.2,402);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1.5,1,1).p("AAABsIAAjX");
	this.shape_134.setTransform(486.2,402.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(1.5,1,1).p("AAABaIAAiz");
	this.shape_135.setTransform(486.2,404.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(1.5,1,1).p("AAABQIAAif");
	this.shape_136.setTransform(486.2,405.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(1.5,1,1).p("AAABEIAAiI");
	this.shape_137.setTransform(486.2,406.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA4IAAhv");
	this.shape_138.setTransform(486.2,407.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(1.5,1,1).p("AAAArIAAhV");
	this.shape_139.setTransform(486.2,409.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAdIAAg5");
	this.shape_140.setTransform(486.2,410.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgNIAAAb");
	this.shape_141.setTransform(486.2,412.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAOIAAgb");
	this.shape_142.setTransform(486.2,415.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgcIAAA5");
	this.shape_143.setTransform(486.2,416.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgqIAABV");
	this.shape_144.setTransform(486.2,418.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(1.5,1,1).p("AAAg3IAABv");
	this.shape_145.setTransform(486.2,419.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhDIAACH");
	this.shape_146.setTransform(486.2,420.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhOIAACe");
	this.shape_147.setTransform(486.2,421.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhZIAACz");
	this.shape_148.setTransform(486.2,422.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhiIAADF");
	this.shape_149.setTransform(486.2,423.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhrIAADX");
	this.shape_150.setTransform(486.2,424.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhyIAADl");
	this.shape_151.setTransform(486.2,425.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh4IAADx");
	this.shape_152.setTransform(486.2,426.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh+IAAD9");
	this.shape_153.setTransform(486.2,426.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiDIAAEG");
	this.shape_154.setTransform(486.2,427.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiGIAAEN");
	this.shape_155.setTransform(486.2,427.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiCIAAEF");
	this.shape_156.setTransform(486.2,427.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh9IAAD7");
	this.shape_157.setTransform(486.2,427.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhxIAADj");
	this.shape_158.setTransform(486.2,425.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhqIAADU");
	this.shape_159.setTransform(486.2,425.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhhIAADD");
	this.shape_160.setTransform(486.2,424.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhYIAACx");
	this.shape_161.setTransform(486.2,423.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhNIAACc");
	this.shape_162.setTransform(486.2,422.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhCIAACF");
	this.shape_163.setTransform(486.2,421.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(1.5,1,1).p("AAAg2IAABt");
	this.shape_164.setTransform(486.2,420);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(1.5,1,1).p("AAABEIAAiH");
	this.shape_165.setTransform(486.2,406.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1.5,1,1).p("AAABPIAAid");
	this.shape_166.setTransform(486.2,405.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(1.5,1,1).p("AAABZIAAix");
	this.shape_167.setTransform(486.2,404.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1.5,1,1).p("AAABiIAAjD");
	this.shape_168.setTransform(486.2,403.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(1.5,1,1).p("AAABrIAAjV");
	this.shape_169.setTransform(486.2,402.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(1.5,1,1).p("AAAByIAAjj");
	this.shape_170.setTransform(486.2,402.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB5IAAjx");
	this.shape_171.setTransform(486.2,401.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB/IAAj8");
	this.shape_172.setTransform(486.2,400.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(1.5,1,1).p("AAACDIAAkF");
	this.shape_173.setTransform(486.2,400.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1.5,1,1).p("AAACHIAAkN");
	this.shape_174.setTransform(486.2,400.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiJIAAET");
	this.shape_175.setTransform(486.2,399.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120,p:{y:403.5}}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129,p:{y:399.8}}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_120,p:{y:403.6}}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138,p:{y:407.9}}]},1).to({state:[{t:this.shape_139,p:{x:486.2}}]},1).to({state:[{t:this.shape_140,p:{x:486.2}}]},1).to({state:[{t:this.shape_141,p:{x:486.2}}]},1).to({state:[]},1).to({state:[{t:this.shape_142,p:{y:415.4}}]},1).to({state:[{t:this.shape_143,p:{y:416.9}}]},1).to({state:[{t:this.shape_144,p:{y:418.3}}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152,p:{y:426.1}}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155,p:{y:427.5}}]},1).to({state:[{t:this.shape_129,p:{y:427.8}}]},1).to({state:[]},1).to({state:[{t:this.shape_129,p:{y:428.3}}]},1).to({state:[{t:this.shape_155,p:{y:428}}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_152,p:{y:426.5}}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_144,p:{y:418.8}}]},1).to({state:[{t:this.shape_143,p:{y:417.4}}]},1).to({state:[{t:this.shape_142,p:{y:415.9}}]},1).to({state:[]},1).to({state:[{t:this.shape_141,p:{x:486.1}}]},1).to({state:[{t:this.shape_140,p:{x:486.1}}]},1).to({state:[{t:this.shape_139,p:{x:486.1}}]},1).to({state:[{t:this.shape_138,p:{y:408}}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_175}]},2).wait(1));

	// markers
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgdIAAA7");
	this.shape_176.setTransform(486.1,98.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA6IAAhz");
	this.shape_177.setTransform(486.2,95.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(1.5,1,1).p("AAABRIAAih");
	this.shape_178.setTransform(486.2,93.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(1.5,1,1).p("AAABlIAAjJ");
	this.shape_179.setTransform(486.2,91.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB1IAAjp");
	this.shape_180.setTransform(486.2,89.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(1.5,1,1).p("AAACCIAAkC");
	this.shape_181.setTransform(486.2,88.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiJIAAET");
	this.shape_182.setTransform(486.2,87.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiIIAAER");
	this.shape_183.setTransform(486.2,87.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB/IAAj9");
	this.shape_184.setTransform(486.2,88.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(1.5,1,1).p("AAABxIAAjh");
	this.shape_185.setTransform(486.2,90.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(1.5,1,1).p("AAABfIAAi9");
	this.shape_186.setTransform(486.2,92.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(1.5,1,1).p("AAABIIAAiP");
	this.shape_187.setTransform(486.2,94.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAtIAAhZ");
	this.shape_188.setTransform(486.2,97);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgNIAAAb");
	this.shape_189.setTransform(486.2,100.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAcIAAg3");
	this.shape_190.setTransform(486.2,104.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(1.5,1,1).p("AAAg3IAABv");
	this.shape_191.setTransform(486.2,107.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhQIAACh");
	this.shape_192.setTransform(486.2,110.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhkIAADK");
	this.shape_193.setTransform(486.2,112.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh1IAADr");
	this.shape_194.setTransform(486.2,113.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiBIAAED");
	this.shape_195.setTransform(486.2,115);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(1.5,1,1).p("AAACKIAAkT");
	this.shape_196.setTransform(486.2,115.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB+IAAj7");
	this.shape_197.setTransform(486.2,114.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(1.5,1,1).p("AAABsIAAjX");
	this.shape_198.setTransform(486.2,113.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(1.5,1,1).p("AAABTIAAil");
	this.shape_199.setTransform(486.2,112.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA0IAAhn");
	this.shape_200.setTransform(486.2,110.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAPIAAgd");
	this.shape_201.setTransform(486.2,107.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAdIAAg5");
	this.shape_202.setTransform(486.2,104.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgbIAAA3");
	this.shape_203.setTransform(486.2,98.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA4IAAhv");
	this.shape_204.setTransform(486.2,96);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(1.5,1,1).p("AAABQIAAif");
	this.shape_205.setTransform(486.2,93.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(1.5,1,1).p("AAABkIAAjH");
	this.shape_206.setTransform(486.2,91.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(1.5,1,1).p("AAACBIAAkB");
	this.shape_207.setTransform(486.2,88.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(1.5,1,1).p("AAACLIAAkV");
	this.shape_208.setTransform(486.2,87.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh+IAAD9");
	this.shape_209.setTransform(486.2,88.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhrIAADX");
	this.shape_210.setTransform(486.2,89.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhSIAACl");
	this.shape_211.setTransform(486.2,91.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgzIAABn");
	this.shape_212.setTransform(486.2,93.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAaIAAg0");
	this.shape_213.setTransform(486.2,104.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiIIAAES");
	this.shape_214.setTransform(486.2,115.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB+IAAj6");
	this.shape_215.setTransform(486.2,114.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(1.5,1,1).p("AAABTIAAim");
	this.shape_216.setTransform(486.2,112.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA1IAAhp");
	this.shape_217.setTransform(486.2,110);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAQIAAgf");
	this.shape_218.setTransform(486.2,107.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgaIAAA0");
	this.shape_219.setTransform(486.2,98.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA3IAAht");
	this.shape_220.setTransform(486.2,96);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB2IAAjr");
	this.shape_221.setTransform(486.2,89.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(1.5,1,1).p("AAACCIAAkD");
	this.shape_222.setTransform(486.2,88.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(1.5,1,1).p("AAABnIAAjN");
	this.shape_223.setTransform(486.2,91.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA7IAAh0");
	this.shape_224.setTransform(486.2,95.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_176,p:{x:486.1}}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180,p:{y:89.8}}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182,p:{y:87.8}}]},1).to({state:[]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189,p:{y:100.2}}]},1).to({state:[]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194,p:{y:113.7}}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[]},1).to({state:[{t:this.shape_182,p:{y:115.7}}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198,p:{y:113.8}}]},1).to({state:[{t:this.shape_199,p:{y:112.2}}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_180,p:{y:89.9}}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_183}]},1).to({state:[]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_189,p:{y:95.7}}]},1).to({state:[{t:this.shape_176,p:{x:486.2}}]},1).to({state:[]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194,p:{y:113.8}}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_198,p:{y:113.7}}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_213}]},1).to({state:[]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_221,p:{y:89.8}}]},1).to({state:[{t:this.shape_222,p:{y:88.6}}]},1).to({state:[{t:this.shape_182,p:{y:87.8}}]},1).to({state:[]},1).to({state:[{t:this.shape_182,p:{y:87.8}}]},1).to({state:[{t:this.shape_222,p:{y:88.5}}]},1).to({state:[{t:this.shape_221,p:{y:89.7}}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_199,p:{y:93.3}}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_176,p:{x:486.2}}]},1).to({state:[{t:this.shape_176,p:{x:486.2}}]},2).wait(1));

	// arrows 2
	this.instance = new lib.Tween12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(486.4,413.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-452},81).wait(1));

	// arrows
	this.instance_1 = new lib.arrowscap1blue("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(487.2,101.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-901.8,x:486.6},81).wait(1));

	// buttons
	this.button_stop = new lib.Stop();
	this.button_stop.parent = this;
	this.button_stop.setTransform(484.1,206.4);
	new cjs.ButtonHelper(this.button_stop, 0, 1, 2, false, new lib.Stop(), 3);

	this.button_play = new lib.Play();
	this.button_play.parent = this;
	this.button_play.setTransform(484.1,178.5);
	new cjs.ButtonHelper(this.button_play, 0, 1, 2, false, new lib.Play(), 3);

	this.button_rew = new lib.Rewind();
	this.button_rew.parent = this;
	this.button_rew.setTransform(484,178.1);
	new cjs.ButtonHelper(this.button_rew, 0, 1, 2, false, new lib.Rewind(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_play},{t:this.button_stop}]}).to({state:[{t:this.button_play},{t:this.button_stop}]},1).to({state:[{t:this.button_rew}]},80).wait(1));

	// axis 2b
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(588.6,413.6,1,1,-90);

	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(486.6,314.1,1,1,180);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgDGJQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDESQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAgDCZQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDAhQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg7QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA7QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDhVQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAgDjOQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDlGQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_225.setTransform(486.8,356.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_225},{t:this.instance_3},{t:this.instance_2}]}).wait(82));

	// axis 2
	this.instance_4 = new lib.Symbol1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(576.6,101.6,1,1,-90);

	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(486.6,18.1,1,1,180);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AGlGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAABABQgBAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAEtGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAC1GnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAA9GnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAg6GnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAiyGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAkqGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAmiGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAmqFuQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqD2QAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqB+QAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqAGQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg7QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA7QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqhxQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqjpQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqlhQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_226.setTransform(529.1,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_226},{t:this.instance_5},{t:this.instance_4}]}).wait(82));

	// axis b
	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AGOHmQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAEWHmQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgACeHmQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAAmHmQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAhRHmQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAjJHmQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAlBHmQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAm5HmQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAnLGnQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIgBg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIABA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAnMEuQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIgBg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIABA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAnNC2QAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAnNA/QAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg7QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA7QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAnNg5QAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAnNixQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAnNkoQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAnNmhQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_227.setTransform(532.4,365.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_227).wait(82));

	// axis
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(576.6,101.6,1,1,-90);

	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(486.6,18.1,1,1,180);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AGlGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAABABQgBAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAgAEtGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAC1GnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAA9GnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAg6GnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAiyGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAkqGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAmiGnQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAgAmqFuQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqD2QAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqB+QAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqAGQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg7QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA7QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqhxQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqjpQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAmqlhQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQAAABABAAIAAA8QgBABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_228.setTransform(529.1,60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_228},{t:this.instance_7},{t:this.instance_6}]}).wait(82));

	// Symbols3
	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgfAyQgDgCAAgDQAAgEACgCQACgCADAAIAHACIAFABQACAAADgCQADgDADgHIAEgNIgZg1IgEgFIgDgEIgGgCIAAgDIAiAAIAAADIgCAAQgEAAgCABQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQgBADADAGIAQAjIARgnIABgGIgBgDIgBgBIgFAAIAAgDIAXAAIAAADIgFABIgDAEIgCAFIgdBHQgEAKgHAGQgGAFgHAAQgEAAgDgDg");
	this.shape_229.setTransform(131.9,298.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgUAcQgJgLAAgRQAAgQAKgKQAKgLANAAQAKAAAHAGQAHAFAAAGQAAADgCACQgCACgDAAQgFAAgCgDQgCgCAAgEQAAgFgDgCQgDgDgFAAQgHAAgEAGQgHAIAAAMQAAAMAHAKQAGAKAKAAQAHAAAGgFQAFgEAEgKIACACQgDAOgIAHQgJAIgKAAQgLAAgJgKg");
	this.shape_230.setTransform(124.3,296.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAEAlIAAgDIABAAQAFAAACgCQACgBABgDIAAgHIAAgdQAAgJgCgFQgDgEgGAAQgIAAgJAKIAAAlIAAAJIAEADQABABAGAAIAAADIgjAAIAAgDIABAAQAGAAACgDQACgDAAgHIAAgaIgBgQIgCgEIgDgBIgFACIgBgDIAVgJIAEAAIAAAPQAMgPALAAQAFAAAFADQAEADACAHQACAEAAAKIAAAeIABAJIADADQACABAFAAIAAADg");
	this.shape_231.setTransform(116.8,296.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgUAcQgJgKAAgRQAAgRAJgLQAKgKANAAQAMAAAIAIQAHAIAAANIgwAAQAAAPAIAJQAHAJAKAAQAHAAAFgEQAFgEAEgJIACACQgBAKgIAJQgIAJgMAAQgMAAgJgKgAgMgaQgFAFgBAJIAgAAQAAgHgCgDQgCgEgEgDQgDgCgEAAQgGAAgFAFg");
	this.shape_232.setTransform(109.3,296.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AAPAlIAAgPQgKAKgEACQgEADgFAAQgGAAgFgDQgEgEgCgFQgCgGABgKIAAgfQgBgFgBgCIgDgDIgIgBIAAgDIAZAAIAAAvQAAAKAEADQADADAFAAQACAAAFgCQAEgCAGgGIAAgnQAAgGgDgDQgBgCgIAAIAAgDIAZAAIAAArQgBAMABADIACAEIADABIAFgCIACADIgWAJg");
	this.shape_233.setTransform(101.7,296.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AABA2IAAgDIACAAQAEAAACgBIADgDQABgCAAgHIAAgfQgHAJgGADQgEADgGAAQgKAAgIgKQgIgJAAgPQAAgSAKgLQALgMAPAAIAIABIAGAEIAJgFIADAAIAABbQAAAHABACQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAQABABAGAAIAAADgAgRgoQgGAHAAAPQAAAPAGAGQAGAIAJAAQAEAAAEgCQADgCAEgFIAAggQAAgGgCgDQgBgEgEgCQgEgCgEAAQgJAAgGAHg");
	this.shape_234.setTransform(93.9,298.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgUAcQgJgKAAgRQAAgRAJgLQAKgKANAAQAMAAAIAIQAHAIAAANIgwAAQAAAPAIAJQAHAJAKAAQAHAAAFgEQAFgEAEgJIACACQgBAKgIAJQgIAJgMAAQgMAAgJgKgAgMgaQgFAFgBAJIAgAAQAAgHgCgDQgCgEgEgDQgDgCgEAAQgGAAgFAFg");
	this.shape_235.setTransform(86.2,296.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgZAlIAAgDQAGAAACgCQABAAAAgBQABAAAAAAQAAgBAAgBQABAAAAgBIAAgHIAAgbIAAgPQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgGACIgBgDIAWgJIADAAIAAAQQAIgQAKAAQAEAAADADQADACAAAEQAAADgCACQgDACgCAAQgDAAgDgDIgFgCIgEABQgDADgDAIIAAAhQAAAGABADIADAEIAIABIAAADg");
	this.shape_236.setTransform(80,296.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgnA1IAAgDIAEAAQAGAAAEgEQABgCAAgKIAAhDIgBgLQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQgEgCgDAAIgEAAIAAgDIBOAAIABAXIgDAAQgCgHgDgDQgCgEgEgCQgEgBgJAAIgWAAIAAAqIATAAQAGAAAEgEQACgDABgIIAEAAIAAAjIgEAAQABgHgCgCIgEgEQgDgCgFAAIgTAAIAAAhQAAAJACACQAAABAAAAQAAAAABABQAAAAAAAAQABABABAAQADACADAAIADAAIAAADg");
	this.shape_237.setTransform(72.6,295);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgZAlIAAgDQAGAAACgCQABAAAAgBQABAAAAAAQAAgBAAgBQABAAAAgBIAAgHIAAgbIAAgPQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgGACIgBgDIAWgJIADAAIAAAQQAIgQAKAAQAEAAADADQADACAAAEQAAADgCACQgDACgCAAQgDAAgDgDIgFgCIgEABQgDADgDAIIAAAhQAAAGABADIADAEIAIABIAAADg");
	this.shape_238.setTransform(61.7,296.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgUAcQgJgKAAgRQAAgRAJgLQAKgKANAAQAMAAAIAIQAHAIAAANIgwAAQAAAPAIAJQAHAJAKAAQAHAAAFgEQAFgEAEgJIACACQgBAKgIAJQgIAJgMAAQgMAAgJgKgAgMgaQgFAFgBAJIAgAAQAAgHgCgDQgCgEgEgDQgDgCgEAAQgGAAgFAFg");
	this.shape_239.setTransform(55.5,296.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AATAlIgSgtIgUAtIgCAAIgXg7IgEgIQgDgCgEgBIAAgDIAdAAIAAADQgEAAgBACIgBADIABAGIAPAoIAQghIgEgKQgCgFgDgCIgHgBIAAgDIAhAAIAAADQgFAAgDACQAAABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIAAADIARAoIAPgmIACgHIgCgDIgGgBIAAgDIAWAAIAAADQgGABgEAIIgXA9g");
	this.shape_240.setTransform(46.1,296.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgZAZQgJgLAAgNQAAgJAGgKQAEgKAIgEQAIgFAIAAQARAAAJAMQAJALAAAOQAAAIgFAKQgFAKgIAFQgIAFgJAAQgQAAgJgNgAgJgdQgFACgCAGQgDAGAAAKQAAAPAGALQAGALAJAAQAIAAAFgGQAFgGAAgPQAAgSgJgLQgFgIgHAAQgFAAgDADg");
	this.shape_241.setTransform(36.3,296.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgtA1IAAgDIAEAAQAHAAADgFQACgCAAgJIAAhDQAAgKgCgDQgEgDgGAAIgEAAIAAgDIAvAAIAAADQgHAAgDACQgEABgBACQgBADAAAKIAABBIABAJIADACQACABAJAAIAIAAQAMAAAFgCQAFgCAEgEQAEgEAEgKIADAAIgKAdg");
	this.shape_242.setTransform(27.4,295);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgkAkQgLgPAAgTQAAgPAIgNQAHgOAMgHQAMgIAOAAQALABAMAFIAEACQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBABgFIADAAIACAkIgCAAQgFgQgJgGQgJgIgNAAQgJAAgJAGQgIAFgFAMQgFALAAARQAAAOAEALQAFAKAJAGQAKAFAKAAQALAAAIgEQAIgEAJgNIADABQgIAOgLAHQgLAGgOABQgaAAgOgUg");
	this.shape_243.setTransform(146.5,128.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgFAjQgDgCAAgEQAAgDADgDQACgCADAAQADAAADACQACADAAADQAAAEgCACQgDADgDAAQgDAAgCgDgAgFgWQgDgDAAgDQAAgEADgCQACgDADAAQADAAADADQADACAAAEQAAADgDADQgDACgDAAQgDAAgCgCg");
	this.shape_244.setTransform(135,130.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgZAlIAAgDQAGAAACgCQABAAAAgBQABAAAAAAQAAgBAAgBQABAAAAgBIAAgHIAAgbIAAgPQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgGACIgBgDIAWgJIADAAIAAAQQAIgQAKAAQAEAAADADQADACAAAEQAAADgCACQgDACgCAAQgDAAgDgDIgFgCIgEABQgDADgDAIIAAAhQAAAGABADIADAEIAIABIAAADg");
	this.shape_245.setTransform(130.1,130.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgaAZQgHgLgBgNQAAgJAGgKQAEgKAIgEQAIgFAIAAQARAAAJAMQAJALAAAOQgBAIgEAKQgFAKgIAFQgIAFgJAAQgQAAgKgNgAgJgdQgFACgDAGQgCAGAAAKQAAAPAGALQAHALAIAAQAIAAAFgGQAFgGAAgPQAAgSgJgLQgFgIgHAAQgFAAgDADg");
	this.shape_246.setTransform(123.4,130.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgDAuQgDgCgBgDQgCgEAAgIIAAgvIgMAAIAAgCQAFgCAEgFQAFgEADgFIAFgLIACAAIAAAYIARAAIAAAFIgRAAIAAAtQAAAIACABQACADADAAIAFgCQADgBABgDIACAAQgCAIgFADQgFAEgGAAQgDAAgDgCg");
	this.shape_247.setTransform(117.2,129.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgPA3IAAgCIAHgBIACgEIABgJIAAgbIgBgPIgBgDIgEgBIgEABIgCgCIAVgJIADAAIAAA4IABAJIADAEIAHABIAAACgAgEgpQgDgDABgCQgBgEADgCQADgCACAAQADAAACACQADACAAAEQAAACgDADQgCACgDAAQgCAAgDgCg");
	this.shape_248.setTransform(112.7,128.6);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgUAcQgJgLAAgRQAAgQAKgKQAKgLANAAQAKAAAHAGQAHAFAAAGQAAADgCACQgCACgDAAQgFAAgCgDQgCgCAAgEQAAgFgDgCQgDgDgFAAQgHAAgEAGQgHAIAAAMQAAAMAHAKQAGAKAKAAQAHAAAGgFQAFgEAEgKIACACQgDAOgIAHQgJAIgKAAQgLAAgJgKg");
	this.shape_249.setTransform(106.9,130.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AAKAjQgCgDgBgHIgNAKQgDADgGAAQgHgBgFgFQgEgEAAgJQAAgFACgEQAEgGAHgEQAIgDARgIIAAgCQAAgLgDgEQgDgEgFAAQgGAAgCADQgEADAAADIAAAEQAAAEgBACQgCACgDAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQgBgCAAgEQgBgGAIgGQAGgGANAAQAIAAAGAEQAFACACAFQABADAAALIAAAXIABAMIABAEIACABIACgBIAHgFIAAADQgJANgIAAQgEAAgCgDgAgHAAQgGAEgDADQgCAEAAAEQAAAGADAEQADAEAFAAQAGgBAIgHIAAgaIgOAFg");
	this.shape_250.setTransform(100.1,130.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AglA2IAAgDIACAAQAFAAADgCIACgCQABgCAAgIIAAhDIgBgJIgCgCIgDgBIgFABIgBgDIAWgJIADAAIAAARQAGgJAFgEQAFgEAFAAQAMAAAGAJQAJAKAAAQQAAASgKAMQgJAKgNAAQgFAAgEgCQgDgBgEgDIAAAVQAAAIABACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQACABAFAAIAAADgAgCgoIgJAJIAAAaIABALQABAEAEAEQAEADAGAAQAHAAAFgGQAHgIAAgNQAAgRgIgIQgEgHgHAAQgEAAgDACg");
	this.shape_251.setTransform(92,132.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAKAjQgCgDgBgHIgMAKQgFADgEAAQgHgBgGgFQgEgEAAgJQgBgFADgEQADgGAIgEQAIgDARgIIAAgCQABgLgEgEQgDgEgFAAQgGAAgCADQgDADAAADIAAAEQAAAEgCACQgCACgDAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQgCgCAAgEQAAgGAIgGQAGgGAMAAQAJAAAGAEQAFACACAFQACADAAALIAAAXIAAAMIABAEIACABIACgBIAGgFIAAADQgIANgIAAQgEAAgCgDgAgGAAQgHAEgCADQgDAEAAAEQAAAGADAEQADAEAFAAQAGgBAIgHIAAgaIgNAFg");
	this.shape_252.setTransform(85,130.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgkAkQgLgPAAgTQAAgPAIgNQAHgOAMgHQAMgIAOAAQALABAMAFIAEACQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBABgFIADAAIACAkIgCAAQgFgQgJgGQgJgIgNAAQgJAAgJAGQgIAFgFAMQgFALAAARQAAAOAEALQAGAKAIAGQAKAFAKAAQALAAAIgEQAIgEAJgNIADABQgIAOgLAHQgLAGgOABQgaAAgOgUg");
	this.shape_253.setTransform(75.9,128.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#0000FF").ss(3,1,1).p("AAyhzIAADlAgxhxIAADl");
	this.shape_254.setTransform(47.5,128.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#0000FF").ss(2,1,1).p("ABGABIBkAAAipAAIBkAA");
	this.shape_255.setTransform(47.5,128.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229}]}).to({state:[{t:this.shape_254},{t:this.shape_255},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229}]},81).wait(1));

	// Symbols2
	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgkAkQgLgPAAgTQAAgPAIgNQAHgOAMgHQAMgIAOAAQALABAMAFIAEACQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBABgFIADAAIACAkIgCAAQgFgQgJgGQgJgIgNAAQgJAAgJAGQgIAFgFAMQgFALAAARQAAAOAEALQAFAKAJAGQAKAFAKAAQALAAAIgEQAIgEAJgNIADABQgIAOgLAHQgLAGgOABQgaAAgOgUg");
	this.shape_256.setTransform(146.5,128.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgFAjQgDgCAAgEQAAgDADgDQACgCADAAQADAAADACQACADAAADQAAAEgCACQgDADgDAAQgDAAgCgDgAgFgWQgDgDAAgDQAAgEADgCQACgDADAAQADAAADADQADACAAAEQAAADgDADQgDACgDAAQgDAAgCgCg");
	this.shape_257.setTransform(135,130.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgZAlIAAgDQAGAAACgCQABAAAAgBQABAAAAAAQAAgBAAgBQABAAAAgBIAAgHIAAgbIAAgPQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAIgGACIgBgDIAWgJIADAAIAAAQQAIgQAKAAQAEAAADADQADACAAAEQAAADgCACQgDACgCAAQgDAAgDgDIgFgCIgEABQgDADgDAIIAAAhQAAAGABADIADAEIAIABIAAADg");
	this.shape_258.setTransform(130.1,130.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgaAZQgHgLgBgNQAAgJAGgKQAEgKAIgEQAIgFAIAAQARAAAJAMQAJALAAAOQgBAIgEAKQgFAKgIAFQgIAFgJAAQgQAAgKgNgAgJgdQgFACgDAGQgCAGAAAKQAAAPAGALQAHALAIAAQAIAAAFgGQAFgGAAgPQAAgSgJgLQgFgIgHAAQgFAAgDADg");
	this.shape_259.setTransform(123.4,130.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgDAuQgDgCgBgDQgCgEAAgIIAAgvIgMAAIAAgCQAFgCAEgFQAFgEADgFIAFgLIACAAIAAAYIARAAIAAAFIgRAAIAAAtQAAAIACABQACADADAAIAFgCQADgBABgDIACAAQgCAIgFADQgFAEgGAAQgDAAgDgCg");
	this.shape_260.setTransform(117.2,129.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgPA3IAAgCIAHgBIACgEIABgJIAAgbIgBgPIgBgDIgEgBIgEABIgCgCIAVgJIADAAIAAA4IABAJIADAEIAHABIAAACgAgEgpQgDgDABgCQgBgEADgCQADgCACAAQADAAACACQADACAAAEQAAACgDADQgCACgDAAQgCAAgDgCg");
	this.shape_261.setTransform(112.7,128.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgUAcQgJgLAAgRQAAgQAKgKQAKgLANAAQAKAAAHAGQAHAFAAAGQAAADgCACQgCACgDAAQgFAAgCgDQgCgCAAgEQAAgFgDgCQgDgDgFAAQgHAAgEAGQgHAIAAAMQAAAMAHAKQAGAKAKAAQAHAAAGgFQAFgEAEgKIACACQgDAOgIAHQgJAIgKAAQgLAAgJgKg");
	this.shape_262.setTransform(106.9,130.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAKAjQgCgDgBgHIgNAKQgDADgGAAQgHgBgFgFQgEgEAAgJQAAgFACgEQAEgGAHgEQAIgDARgIIAAgCQAAgLgDgEQgDgEgFAAQgGAAgCADQgEADAAADIAAAEQAAAEgBACQgCACgDAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQgBgCAAgEQgBgGAIgGQAGgGANAAQAIAAAGAEQAFACACAFQABADAAALIAAAXIABAMIABAEIACABIACgBIAHgFIAAADQgJANgIAAQgEAAgCgDgAgHAAQgGAEgDADQgCAEAAAEQAAAGADAEQADAEAFAAQAGgBAIgHIAAgaIgOAFg");
	this.shape_263.setTransform(100.1,130.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AglA2IAAgDIACAAQAFAAADgCIACgCQABgCAAgIIAAhDIgBgJIgCgCIgDgBIgFABIgBgDIAWgJIADAAIAAARQAGgJAFgEQAFgEAFAAQAMAAAGAJQAJAKAAAQQAAASgKAMQgJAKgNAAQgFAAgEgCQgDgBgEgDIAAAVQAAAIABACQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABQACABAFAAIAAADgAgCgoIgJAJIAAAaIABALQABAEAEAEQAEADAGAAQAHAAAFgGQAHgIAAgNQAAgRgIgIQgEgHgHAAQgEAAgDACg");
	this.shape_264.setTransform(92,132.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AAKAjQgCgDgBgHIgMAKQgFADgEAAQgHgBgGgFQgEgEAAgJQgBgFADgEQADgGAIgEQAIgDARgIIAAgCQABgLgEgEQgDgEgFAAQgGAAgCADQgDADAAADIAAAEQAAAEgCACQgCACgDAAQgBAAAAAAQgBAAgBAAQAAgBgBAAQAAgBgBAAQgCgCAAgEQAAgGAIgGQAGgGAMAAQAJAAAGAEQAFACACAFQACADAAALIAAAXIAAAMIABAEIACABIACgBIAGgFIAAADQgIANgIAAQgEAAgCgDgAgGAAQgHAEgCADQgDAEAAAEQAAAGADAEQADAEAFAAQAGgBAIgHIAAgaIgNAFg");
	this.shape_265.setTransform(85,130.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgkAkQgLgPAAgTQAAgPAIgNQAHgOAMgHQAMgIAOAAQALABAMAFIAEACQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBABgFIADAAIACAkIgCAAQgFgQgJgGQgJgIgNAAQgJAAgJAGQgIAFgFAMQgFALAAARQAAAOAEALQAGAKAIAGQAKAFAKAAQALAAAIgEQAIgEAJgNIADABQgIAOgLAHQgLAGgOABQgaAAgOgUg");
	this.shape_266.setTransform(75.9,128.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#0000FF").ss(3,1,1).p("AAyhzIAADlAgxhxIAADl");
	this.shape_267.setTransform(47.5,128.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#0000FF").ss(2,1,1).p("ABGABIBkAAAipAAIBkAA");
	this.shape_268.setTransform(47.5,128.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]}).to({state:[{t:this.shape_267},{t:this.shape_268},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},81).wait(1));

	// Layer 11
	this.instance_8 = new lib.Tween1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(23.6,256.1,1.909,1.909);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({guide:{path:[23.7,256.1,31.5,255.9,36.7,250.6,41.6,245.6,45.7,239.1,49.7,232.8,53,226.3,56.6,219.5,59.1,212.1,59.6,210.6,60.1,209,61.9,204,64,198.1,66.9,190.3,70.7,184.1,74.4,178.1,80.2,172.6,86,167,95.2,167.1,105.1,167.3,109.9,172.9,114.4,178.2,118.7,184.5,123.1,190.9,126.3,198.1,128.8,203.6,130.9,209,131.6,210.9,132.2,212.8,135,220.7,138.5,227.7,141.8,234.6,146.2,240.6,150.7,246.7,155.6,251.7,160.8,256.9,171,255.6,179.5,254.5,184,248.9,189.1,242.7,192.9,236.3,196.8,229.8,199.7,221.8,202.4,214.2,205.1,207.1,207.7,200,211,192.5,214.1,185.5,218.6,179,222.8,173,229.2,169.7,236.8,165.7,245.8,169,253.2,171.7,257.9,177.9,262.7,184,266.2,190.3,269.9,196.8,272.2,203.9,275.1,212.5,278.3,219,281.7,225.9,285.9,233.8,289.7,240.8,294.2,246.5,298.8,252.4,305.8,255.7,314.4,259.8,321.7,255.2,327.6,251.4,331.6,245.1,335.6,238.5,338.3,231.1,341.1,223.8,344.6,218,345.8,215.9,346.4,214.1,348.8,206.6,352.1,198.6,355.2,191.3,359.7,184.1,363.4,177.9,369.5,172.4,374.6,167.7,383.1,167.1]}},80).to({startPosition:0},1).wait(1));

	// Axis Page2 Cap2
	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(2,1,1).p("AcTgXIAyAxIgxAxIAAgyIgBgpAcUAZImKAAIrRAAIrPAAIrNAAIgDgHA9EnMIAygyIAxAwIg5ABIgkABA8VAZIFaAAILYAAA8anNIgBPM");
	this.shape_269.setTransform(205.6,209);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#0000FF").ss(2,1,1).p("AWfABQAUhCAjhOQBJifBQhOQBKhJBLADArPABQCKFYCPBQQBzBAByhuQBQhPBJifQAkhOASg+IABgCQATg/AkhPQBIifBRhPQBxhvBzBBQCQBQCLFcIABACQCLFgCQBQQBzBAByhuQBQhPBJifQAkhOAThAA2kgHQADgIACgIQATg6AghFQBIifBRhOQBxhvBzBBQCMBNCHFNQAEAKAFALA2mABQgTA9gkBPQhICfhRBPQhGBEhHAB");
	this.shape_270.setTransform(203.5,211.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AcYETIAAgCQgCgKACgKIAAgKQAAgHgDgGIABgJIABgBQAFgFAFAFIAGAIQAEAHAHAFIADADQADAFgEAEIgGAEQgBAMgJAIQgDACgDAAQgEAAgCgDgA8yj1IgBgBQgFgFAFgFIAIgGQAHgEAFgHIADgDQAFgDAEAEIAEAGQAMABAIAJQACADAAADQAAAEgDACIgCAAQgKACgKgCIgKAAQgHAAgGADIgJgBg");
	this.shape_271.setTransform(206,186.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_271},{t:this.shape_270},{t:this.shape_269}]}).to({state:[{t:this.shape_271},{t:this.shape_270},{t:this.shape_269}]},81).wait(1));

	// Layer 13
	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgQAjQgJgEgFgKQgGgKAAgKQAAgKAGgKQAGgKAKgGQAKgEAKAAQAIgBAJAEIAHACQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIACgDIACAAIAAAaIgCAAQgDgLgHgFQgHgGgIAAQgIAAgFAFQgGADgCAIQgEAIAAAKQAAAKADAIQACAJAGAFQAEAEAJAAQAIAAAGgDQAGgDAHgIIAAAGQgHAHgHADQgHADgKABQgLAAgKgGg");
	this.shape_272.setTransform(48.7,159.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgCA9IgpheQgHgRgDgDQgCgDgHgBIAAgDIA5AAIAAADIgCAAQgIAAgDACQAAABgBAAQAAAAAAABQgBAAAAABQAAABAAAAIABAEIAFALIAYA7IAYg0IAFgNIABgFQAAgDgCgCQgBgCgDgBQgDgCgHAAIAAgDIAnAAIAAADQgGABgFAGQgEAFgHAQIgpBag");
	this.shape_273.setTransform(38.1,155.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgQAkQgJgGgFgJQgGgJAAgLQAAgKAGgKQAGgKAKgFQAKgGAKAAQAIABAJADIAHACQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAIACgFIACAAIAAAbIgCAAQgDgLgHgFQgHgGgIABQgIAAgFADQgGAFgCAGQgEAJAAALQAAAJADAJQACAIAGAEQAEAFAJAAQAIAAAGgEQAGgCAHgJIAAAIQgHAGgHADQgHAEgKgBQgLAAgKgEg");
	this.shape_274.setTransform(138.9,165.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AARAbIAAgBQAEgBABgCQABgBAAgGIAAgWIAAgJIgCgDIgDgBQgCAAgDACIgFAFIAAAcQAAAGABABQABACAEABIAAABIgbAAIAAgBIADgBIACgDIABgGIAAgWIgBgJIgCgDIgCgBIgFABIgFAGIAAAcQgBAFACADQAAAAABAAQAAABABAAQAAAAABAAQABAAAAABIAAABIgbAAIAAgBQABgBAAAAQABAAABAAQAAAAABgBQAAAAABAAQAAgCABgGIAAgeQgBgFAAgCQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIAAgCIAWAAIAAAHQAEgFAEgCQADgBAFAAQAFgBADADQADADACAEQAFgFADgCQAFgDAEABQAGgBADADQADADACAEIABAMIAAAVQAAAGACACQAAAAAAAAQABABAAAAQABAAAAAAQABAAABABIAAABg");
	this.shape_275.setTransform(130,166.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgCA9IgpheQgHgRgDgDQgCgDgHgBIAAgDIA5AAIAAADIgCAAQgIAAgDACQAAABgBAAQAAAAAAABQgBABAAAAQAAABAAAAIABAEIAFALIAYA7IAYg0IAFgNIABgFQAAgDgCgCQgBgCgDgBQgDgCgHAAIAAgDIAnAAIAAADQgGABgFAGQgEAFgHAQIgpBag");
	this.shape_276.setTransform(118.5,162.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgKQAIgJALAAQAKAAAHAIQAHAIABAQIgiAAQAAAMAGAHQAEAGAHgBQAEAAADgCIAHgIIADABQgGALgGAFQgGAEgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDAAgCAEg");
	this.shape_277.setTransform(391.5,226.1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAVAhIAAgCQAEgBABgCQACgCAAgHIAAgaIAAgMIgDgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgEAAgDACIgFAHIAAAhQAAAHABACQACADAEAAIAAACIggAAIAAgCQAAgBABAAQABAAAAAAQABAAAAAAQABgBAAAAIACgCIAAgIIAAgaIAAgMIgDgDQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgFABIgHAIIAAAhQAAAHACACQABACAEABIAAACIghAAIAAgCQAEgBACgCQABgBAAgIIAAgjQAAgHgBgCQgCgCgEgBIAAgCIAaAAIAAAIQAGgFAEgDQAEgCAGAAQAGAAADADQAFADABAGQAGgHAFgCQAFgDAGAAQAGAAAEADQAEADACAFQABAFAAAKIAAAZQAAAIACABQABACAEABIAAACg");
	this.shape_278.setTransform(382.5,226);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_279.setTransform(374.7,224.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgGApQgEgEgCgEIAAgMIAAgiIgJAAIAAgCQAJgGAHgHQAFgHAEgIIACAAIAAAXIAQAAIAAAHIgQAAIAAAnIAAAHIADACIACABQAEAAAEgGIADABQgGANgNAAQgFAAgEgDg");
	this.shape_280.setTransform(370.5,225);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgTArQgGgBgEgEQgIgFgGgKQgFgHgCgHQgCgHABgDQABgEACgCQADgCADABQAEABAEAEQgBgJAHgFQAEgCAGABQAFAAAHAFQgCgJADgHQACgGAFgEQAIgFAKADQAKADAGAKQADAFACAHIALASIgGAEIgHgKIgCAHQgCADgEACQgGAEgGgBQgGAAgGgEQgGgEgBgEIgFgHQgBgDgDAAQgDgBgCABQgBABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAACACAEIAGAJQAIAMAAAHQABAIgIAFQgEADgFAAIgCAAgAgpABQgDACAAAFQAAAFAGAJQAFAIAFADQAFAEAEgDIABgCIAAgGIgKgRIgGgIIgEgBIgDABgAALgWQgJAFgBAFQgBAEAAADQADAEAFAAQAEAAAJgFQALgHACgFQABgDgCgEQgCgDgFAAIAAAAQgFAAgKAGg");
	this.shape_281.setTransform(285.1,204.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgVATIACgCQADADACAAQACAAAGgDIAXgPIAIgFIACgEIgBgDQgDgFgJAAIgcARQgHAEgBACQgBADACADIgCABIgRgaIACgCQACAEADAAIAIgEIAegTIAHgFQABgDgCgEIACgBIAOAWIgHAEQAHACAEACQAEADADAEQADAFAAAFQgBAFgEAEQgCADgJAGIgVANQgGAEgBACQgBACACAEIgCABg");
	this.shape_282.setTransform(281.7,197.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgsAGIACgCQACAEADAAQACABAGgEIAfgSQAFgEABgDQABgCgCgEIACgBIAOAWIgqAaQgGAEAAACQgBADACADIgCACgAAhgNQgEgBgDgEQgCgDABgFQABgEAEgCQADgDAEABQAFACACADQACAEgBAEQgBAEgDADQgDACgDAAIgCgBg");
	this.shape_283.setTransform(279.9,192.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgTArQgGgBgEgEQgIgFgGgKQgFgHgCgHQgCgHABgDQABgEACgCQADgCADABQAEABAEAEQgBgJAHgFQAEgCAGABQAFAAAHAFQgCgJADgHQACgGAFgEQAIgFAKADQAKADAGAKQADAFACAHIALASIgGAEIgHgKIgCAHQgCADgEACQgGAEgGgBQgGAAgGgEQgGgEgBgEIgFgHQgBgDgDAAQgDgBgCABQgBABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAACACAEIAGAJQAIAMAAAHQABAIgIAFQgEADgFAAIgCAAgAgpABQgDACAAAFQAAAFAGAJQAFAIAFADQAFAEAEgDIABgCIAAgGIgKgRIgGgIIgEgBIgDABgAALgWQgJAFgBAFQgBAEAAADQADAEAFAAQAEAAAJgFQALgHACgFQABgDgCgEQgCgDgFAAIAAAAQgFAAgKAGg");
	this.shape_284.setTransform(275.2,189);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgoACIACgBQADADACAAQADABAHgEIAdgSIAFgFQAAAAABAAQAAgBAAAAQAAgBAAAAQABAAAAgBIgCgEIACgCIAOAXIgMAIQAMgBAFACQAFACADAEQACADgBADQgBADgEADQgEACgDgBQgDAAgCgCQgBgDAAgEIAAgEIAAgBIgDgDQgEgBgEABQgHACgGAEIgMAIIgDABQgBABgBAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAABABIACAFIgCABg");
	this.shape_285.setTransform(272.6,181.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgJAjQgEgCgDgEQgDgFABgEQABgDAEgEQgPgEgFgIQgDgEABgFQACgFAEgCQAGgEAIACQAJACASANIAFgDIAIgGQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgEgDgBQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABIgCADQgBAEgCABQgDACgDgBQgDgBgBgDQgDgEABgDQABgEACgCQAEgDAGABQAFABAGAFQAGAEAEAGQAFAIgBAHQAAAGgDADQgCACgJAGIgVANIgDADIgBACIAAACQAAAAABAAQAAAAAAABQABAAABAAQAAAAAAAAIAAADQgFAAgEgCgAgOgDQgDABAAADQgBACACADQABADAGACIARgLQgIgEgGgBIgCAAQgDAAgDACg");
	this.shape_286.setTransform(268.9,177.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgaAaIACgBQACADADAAQACAAAGgEIAXgPIAIgFIACgEIgBgCQgBgDgDgBQgDgBgGAAIgcARIgGAFQgCADACADIgCACIgRgbIACgBQACADADABIAIgEIA2giQAGgEABgCQABgDgCgDIACgCIAOAWIgfAUQAHABAEADQAEACADAEQADAEAAAGQgBAFgDAEIgMAJIgVANQgGAEgBADQAAACABADIgCACg");
	this.shape_287.setTransform(265.3,169.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgRAbQgHgEgEgGQgHgLAEgKQAEgMAMgHQALgHALABQAOAAAIANQAFAIgBAIQgBAHgFADQgEACgCgBQgEAAgCgEQgCgDABgEQABgDAFgEQADgCABgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgCgDgEAAQgHAAgJAGQgGAFgGAHQgFAFgBAGQgBAGADAEQACADADABIAJADIgBADIgCAAQgIAAgGgDg");
	this.shape_288.setTransform(261.7,165);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgTAaQgEgCgDgFQgDgEgCgIIgBgDQAAgCgFABIgBgCIATgMIACACQgHAHAAAGQgBAHACAEQACADADABQACAAADgBQADgCABgDIABgLQABgMACgFQABgHAGgDQAFgEAIABQAIABAFAIQADAFAAAFIABADIABACIAEAAIACACIgSAMIgCgCQAHgIAAgFQAAgGgCgEQgBgCgDgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAIgCADQgCAEABALQgBAMgCAFQgDAGgFADQgDACgGABIgCAAQgEAAgFgDg");
	this.shape_289.setTransform(258.4,159.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgsAGIACgCQACAEADAAQACABAGgEIAfgSQAFgEABgDQABgCgCgEIACgBIAOAWIgqAaQgGAEAAACQgBADACADIgCACgAAhgNQgEgBgDgEQgCgDABgFQABgEAEgCQADgDAEABQAFACACADQACAEgBAEQgBAEgDADQgDACgDAAIgCgBg");
	this.shape_290.setTransform(256.9,155.6);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgmAUIAJgFQgIgBgEgCQgDgCgDgEQgGgKAFgMQAFgJALgHQAJgFAIgCQAJgBAGADQAGADAEAGQADAEAAAEQAAAEgBAGIAQgKIAHgGQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgCgGIADgCIAPAYIg+AmIgHAFIgCAEIACAFIgCABgAgEgYQgGACgJAFQgKAHgEAEQgEAFgBADIABAEQAEAFAKAAIAbgRQAGgJgEgGIgDgDIgDgBIgEABg");
	this.shape_291.setTransform(254.3,151.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgoACIACgBQADAEACAAQADAAAHgFIAdgRIAFgEQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBIgCgEIACgBIAOAVIgMAJQAMgBAFACQAFACADAEQACADgBAEQgBACgEADQgEACgDgBQgDAAgCgCQgBgDAAgEIAAgEIAAgBIgDgDQgEgBgEABQgHABgGAFIgMAIIgDABQgBABgBAAQgBABAAAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAABABIACAFIgCACg");
	this.shape_292.setTransform(293.6,182.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgGAfQgNgBgIgMQgIgMAFgLQAEgMALgHQAMgHAMABQAMABAIAMQAEAHAAAIQABAIgFAHQgFAHgIAFQgKAGgIAAIgEAAgAAJgPIgRAKQgHAEgEAEQgFADAAADQgBAEACACQABADADABQADABAEgCQAGgCAQgKIANgJQADgDAAgEIgBgEIgFgEIgBAAQgEAAgGADg");
	this.shape_293.setTransform(290.1,177.4);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgkAWQgDgFABgFQABgFACgEIALgGIAcgSIgEgHIACgCQAJAFAJABIASABIACACIgUAMIAIAMIgGAEIgIgMIggAUIgGAEIgCADIABADQACADAIAAIAAADIgEAAQgLAAgGgJg");
	this.shape_294.setTransform(288.1,172.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgsAGIACgCQACAEADAAQACABAGgEIAfgSQAFgEABgDQABgCgCgEIACgBIAOAWIgqAaQgGAEAAACQgBADACADIgCACgAAhgNQgEgBgDgEQgCgDABgFQABgEAEgCQADgDAEABQAFACACADQACAEgBAEQgBAEgDADQgDACgDAAIgCgBg");
	this.shape_295.setTransform(285.7,168.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgRAbQgHgEgEgGQgHgLAEgKQAEgMAMgHQALgHALABQAOAAAIANQAFAIgBAIQgBAHgFADQgEACgCgBQgEAAgCgEQgCgDABgEQABgDAFgEQADgCABgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgCgDgEAAQgHAAgJAGQgGAFgGAHQgFAFgBAGQgBAGADAEQACADADABIAJADIgBADIgCAAQgIAAgGgDg");
	this.shape_296.setTransform(282.3,164.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgJAjQgEgCgDgEQgDgFABgEQABgDAEgEQgPgEgFgIQgDgEABgFQACgFAEgCQAGgEAIACQAJACASANIAFgDIAIgGQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgEgDgBQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABIgCADQgBAEgCABQgDACgDgBQgDgBgBgDQgDgEABgDQABgEACgCQAEgDAGABQAFABAGAFQAGAEAEAGQAFAIgBAHQAAAGgDADQgCACgJAGIgVANIgDADIgBACIAAACQAAAAABAAQAAAAAAABQABAAABAAQAAAAAAAAIAAADQgFAAgEgCgAgOgDQgDABAAADQgBACACADQABADAGACIARgLQgIgEgGgBIgCAAQgDAAgDACg");
	this.shape_297.setTransform(278.4,159.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AAEAoQgGgDgEgGQgCgFgBgFQAAgEABgFIgUAMIgFAEQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAACADAEIgDABIgTgeIADgCQACAEADAAQACAAAFgDIA5gjQAFgEABgCQABgCgCgEIACgBIAOAWIgHAFQAGAAADACQAGACADAFQADAFAAAIQgBAHgFAGQgFAHgHAFQgJAFgIACIgGAAQgFAAgEgBgAAagJIgcARQgEAKAEAFQACADADAAQAHAAAOgJQAOgIACgGQADgEgDgEQgCgEgHAAIgFAAg");
	this.shape_298.setTransform(272.9,152.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgJAjQgEgCgDgEQgDgFABgEQABgDAEgEQgPgEgFgIQgDgEABgFQACgFAEgCQAGgEAIACQAJACASANIAFgDIAIgGQAAgBAAAAQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgDgEgDgBQgBgBAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABIgCADQgBAEgCABQgDACgDgBQgDgBgBgDQgDgEABgDQABgEACgCQAEgDAGABQAFABAGAFQAGAEAEAGQAFAIgBAHQAAAGgDADQgCACgJAGIgVANIgDADIgBACIAAACQAAAAABAAQAAAAAAABQABAAABAAQAAAAAAAAIAAADQgFAAgEgCgAgOgDQgDABAAADQgBACACADQABADAGACIARgLQgIgEgGgBIgCAAQgDAAgDACg");
	this.shape_299.setTransform(270.6,146.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgRAbQgHgEgEgGQgHgLAEgKQAEgMAMgHQALgHALABQAOAAAIANQAFAIgBAIQgBAHgFADQgEACgCgBQgEAAgCgEQgCgDABgEQABgDAFgEQADgCABgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgCgDgEAAQgHAAgJAGQgGAFgGAHQgFAFgBAGQgBAGADAEQACADADABIAJADIgBADIgCAAQgIAAgGgDg");
	this.shape_300.setTransform(267.5,141.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AARAuQgCgCgCgDQgBgDACgHQgIAGgGgDQgEgCgDgGQgCgFAAgIQgHAGgHABQgGACgGgDQgJgFgCgKQgDgJAFgKQADgGAGgFIAKgTIAGADIgFALIAHgBIAIACQAGADADAGQABAFAAAHQAAAIgCADIgEAHQgBADABACQAAADADABQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQADgBABgEIAGgLQAGgMAGgDQAHgFAIAEQAFADADAFQACAFAAAGQgBAJgFAKIgJAOQgFAFgDACIgEAAIgEAAgAAkAAQgDAAgCACIgKASQgDAGAAADQAAAEADACQADABAFgCQAEgCAFgKQAEgJABgGQAAgGgEgBIgCAAIgBAAgAgigTQgEABgBADQgCAEADAEQACAEALAFQAJAEAFAAQAEgBACgDQACgDgDgEQgCgEgJgFQgJgFgGAAIgCAAg");
	this.shape_301.setTransform(215.5,162);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AALAmQABgEgBgCQAAgCgHgDIgfgQQgHgEgCABQgCAAgCAEIgDgCIAMgWIAHAEIgDgMQABgFACgEQADgGAEgCQAGgCAEABQAFABAJAFIAVALQAHADACAAQADgBACgDIACABIgPAcIgCgBQACgEgCgCIgHgEIgYgNIgJgEQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAIgCACQgEAFAGAJIAeAOQAGADACAAIAFgDIABABIgOAcg");
	this.shape_302.setTransform(210.8,168.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAdAfQABgEgBgCQgBgDgGgDIgggRQgGgCgCAAQgCABgCAEIgDgCIAMgXIAsAWQAGADADAAQACAAADgFIACABIgQAfgAgogLQgEgCgBgEQgCgEACgEQACgEAFgBQAEgCAEACQAEACABAFQABAEgCAEQgCAEgEABIgDAAIgFgBg");
	this.shape_303.setTransform(207.1,173.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AARAuQgCgCgCgDQgBgDACgHQgIAGgGgDQgEgCgDgGQgCgFAAgIQgHAGgHABQgGACgGgDQgJgFgCgKQgDgJAFgKQADgGAGgFIAKgTIAGADIgFALIAHgBIAIACQAGADADAGQABAFAAAHQAAAIgCADIgEAHQgBADABACQAAADADABQABAAAAABQABAAAAAAQAAAAAAAAQABAAAAAAQADgBABgEIAGgLQAGgMAGgDQAHgFAIAEQAFADADAFQACAFAAAGQgBAJgFAKIgJAOQgFAFgDACIgEAAIgEAAgAAkAAQgDAAgCACIgKASQgDAGAAADQAAAEADACQADABAFgCQAEgCAFgKQAEgJABgGQAAgGgEgBIgCAAIgBAAgAgigTQgEABgBADQgCAEADAEQACAEALAFQAJAEAFAAQAEgBACgDQACgDgDgEQgCgEgJgFQgJgFgGAAIgCAAg");
	this.shape_304.setTransform(207,178.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AATAlIAAgGQgBgDgIgEIgegPIgGgDIgEABQAAAAAAAAQgBABAAAAQgBAAAAABQAAABgBAAIgCgBIALgXIANAHQgGgKAAgFQgBgGACgEQACgEADgBQADgBAEACQAEACAAADQABADgBADQgBADgDACIgEACIgBABIAAAEQAAADAEAEQAFAEAGADIANAGIADACIAFACIAEgBIADgEIACABIgPAfg");
	this.shape_305.setTransform(202.3,184.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AADAgQgGgDgCgIQgDgJABgWIgFgDQgHgDgCAAIgEABQAAAAgBAAQgBABAAAAQgBAAAAABQAAAAgBABQgCAEABAEQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABIAEAAQADgBADABQADABABADQABADgCAEQgCADgEACQgDACgDgCQgFgCgCgGQgCgFABgHQABgHADgHQAEgIAGgDQAGgDAFABQADAAAIAFIAWALIAFACIACAAIABgBIAAgEIACgBIAEAJQAAAFgCAEQgDAEgEABQgDACgFgCQAEAPgEAIQgDAFgFACIgDAAIgGgBgAAAAHQACADAEACQADACADgBIADgEQACgDgCgFIgSgJQABAJACAGg");
	this.shape_306.setTransform(200,190.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AAXAmQACgEgCgCQAAgCgGgDIg5gcQgHgEgCABQgCAAgCAEIgDgCIAMgXIAhARIgDgMQAAgFACgEQADgFAFgDQAEgCAEABQAFABAKAFIAWALQAGADADAAIAFgEIACABIgPAcIgCgBQABgEgBgCIgIgEIgYgNIgIgEQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgCADACADQAAADACAFIAeAOQAGADADAAQACAAACgDIACABIgOAcg");
	this.shape_307.setTransform(195.2,197.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgLAaQgLgGgGgLQgHgMAHgNQAEgJAHgDQAHgDAGADQADACABADQAAADAAAEQgCADgEABQgEABgGgCQgEgCgCABIgDACQgCADADAEQACAFAKAFQAIAEAIABQAJABAFgDQAEgCADgEQABgCAAgEQAAgDgCgGIADgBQAFAIABAHQAAAIgDAHQgGALgMACIgHABQgHAAgJgEg");
	this.shape_308.setTransform(193.4,202.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AATAlIAAgGQgBgDgIgEIgegPIgGgDIgEABQAAAAAAAAQgBABAAAAQgBAAAAABQAAABgBAAIgCgBIALgXIANAHQgGgKAAgFQgBgGACgEQACgEADgBQADgBAEACQAEACAAADQABADgBADQgBADgDACIgEACIgBABIAAAEQAAADAEAEQAFAEAGADIANAGIADACIAFACIAEgBIADgEIACABIgPAfg");
	this.shape_309.setTransform(199.6,150.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgMAbQgMgGgGgMQgFgKAGgNQAEgHAHgFQAHgEAIAAQAIAAAJAEQAMAGAFALQAGALgHAOQgGAMgNADIgGAAQgIAAgJgEgAgVgQQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAABQgCADABADQABAEAHADIASAKIAMAGQAFABADgBQAEgBABgDQABgCAAgDQgBgDgEgDQgFgDgRgJIgOgGIgDgBIgEABg");
	this.shape_310.setTransform(197,156.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AAVAbQgCAAgJgFIgegPIgEAHIgCgCQgCgKgDgHIgIgQIABgDIAUALIAHgNIAGADIgHANIAjARIAGADIADgBIACgBQACgEgEgGIACgBQAKAKgGALQgDAFgFADIgGABIgDAAg");
	this.shape_311.setTransform(193.7,161);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAdAfQABgEgBgCQgBgDgGgDIgggRQgGgCgCAAQgCABgCAEIgDgCIAMgXIAsAWQAGADADAAQACAAADgFIACABIgQAfgAgogLQgEgCgBgEQgCgEACgEQACgEAFgBQAEgCAEACQAEACABAFQABAEgCAEQgCAEgEABIgDAAIgFgBg");
	this.shape_312.setTransform(191.5,165.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgLAaQgLgGgGgLQgHgMAHgNQAEgJAHgDQAHgDAGADQADACABADQAAADAAAEQgCADgEABQgEABgGgCQgEgCgCABIgDACQgCADADAEQACAFAKAFQAIAEAIABQAJABAFgDQAEgCADgEQABgCAAgEQAAgDgCgGIADgBQAFAIABAHQAAAIgDAHQgGALgMACIgHABQgHAAgJgEg");
	this.shape_313.setTransform(190.3,169.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AADAgQgGgDgCgIQgDgJABgWIgFgDQgHgDgCAAIgEABQgCABgCACQgCAEABAEQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABIAEAAQADgBADABQADABABADQABADgCAEQgCADgEACQgDACgDgCQgFgCgCgGQgCgFABgHQABgHADgHQAEgIAGgDQAGgDAFABQADAAAIAFIAWALIAFACIACAAIABgBIAAgEIACgBIAEAJQAAAFgCAEQgDAEgEABQgDACgFgCQAEAPgEAIQgDAFgFACIgDAAIgGgBgAAAAHQACADAEACQADACADgBIADgEQACgDgCgFIgSgJQABAJACAGg");
	this.shape_314.setTransform(187.5,176.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AAgAuQABgDgBgDQAAgCgHgDIg6gfQgHgDgBABQgEAAgCAEIgCgBIAMgXIAIAEQgDgFAAgEQgBgGADgFQADgGAGgEQAHgDAJABQAHABAIAEQAJAEAFAHQAFAGACAHQAAAHgCAHQgDAEgEADIgIADIAVALIAGACIADgBQACgBACgEIACABIgRAggAgTgdQgEAAgDAEQgCAGAGAJIAdAOQAKgCAEgFQABgDgCgEQgEgFgOgIQgMgGgHAAIgCAAg");
	this.shape_315.setTransform(184.4,183.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AADAgQgGgDgCgIQgDgJABgWIgFgDQgHgDgCAAIgEABQgCABgCACQgCAEABAEQAAAAAAABQAAAAABAAQAAABAAAAQAAAAABABIAEAAQADgBADABQADABABADQABADgCAEQgCADgEACQgDACgDgCQgFgCgCgGQgCgFABgHQABgHADgHQAEgIAGgDQAGgDAFABQADAAAIAFIAWALIAFACIACAAIABgBIAAgEIACgBIAEAJQAAAFgCAEQgDAEgEABQgDACgFgCQAEAPgEAIQgDAFgFACIgDAAIgGgBgAAAAHQACADAEACQADACADgBIADgEQACgDgCgFIgSgJQABAJACAGg");
	this.shape_316.setTransform(180.8,189.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgLAaQgLgGgGgLQgHgMAHgNQAEgJAHgDQAHgDAGADQADACABADQAAADAAAEQgCADgEABQgEABgGgCQgEgCgCABIgDACQgCADADAEQACAFAKAFQAIAEAIABQAJABAFgDQAEgCADgEQABgCAAgEQAAgDgCgGIADgBQAFAIABAHQAAAIgDAHQgGALgMACIgHABQgHAAgJgEg");
	this.shape_317.setTransform(177.7,194.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#0000FF").ss(2,1,1).p("AAAjbIAAG3");
	this.shape_318.setTransform(93.6,189.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(1,1,1).p("ABGhFIiLCL");
	this.shape_319.setTransform(106,174.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272}]}).to({state:[{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272}]},81).wait(1));

	// Layer 51
	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgQAjQgJgEgFgKQgGgKAAgKQAAgKAGgKQAGgKAKgGQAKgEAKAAQAIgBAJAEIAHACQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAABgBIACgDIACAAIAAAaIgCAAQgDgLgHgFQgHgGgIAAQgIAAgFAFQgGADgCAIQgEAIAAAKQAAAKADAIQACAJAGAFQAEAEAJAAQAIAAAGgDQAGgDAHgIIAAAGQgHAHgHADQgHADgKABQgLAAgKgGg");
	this.shape_320.setTransform(47.7,424.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgCA9IgpheQgHgRgDgDQgCgDgHgBIAAgDIA5AAIAAADIgCAAQgIAAgDACQAAABgBAAQAAAAAAABQgBAAAAABQAAABAAAAIABAEIAFALIAYA7IAYg0IAFgNIABgFQAAgDgCgCQgBgCgDgBQgDgCgHAAIAAgDIAnAAIAAADQgGABgFAGQgEAFgHAQIgpBag");
	this.shape_321.setTransform(37,420.8);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgQAjQgJgEgFgKQgGgJAAgLQAAgKAGgKQAGgKAKgFQAKgGAKAAQAIABAJADIAHACQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIACgEIACAAIAAAbIgCAAQgDgKgHgGQgHgGgIABQgIAAgFADQgGAFgCAGQgEAJAAAKQAAAKADAIQACAJAGAFQAEAEAJAAQAIAAAGgEQAGgDAHgHIAAAHQgHAGgHADQgHADgKAAQgLABgKgGg");
	this.shape_322.setTransform(223.9,428.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AASAcIAAgCQADgBABgCQABgCAAgFIAAgWIgBgJIgBgDIgDgBQgDAAgCACIgFAFIAAAcQAAAFABACQABACAEABIAAACIgbAAIAAgCIAEgCIACgCIAAgGIAAgWIAAgJIgCgDIgEgBIgDABIgHAGIAAAcQABAFABACQAAABABAAQAAAAABABQAAAAABAAQABAAABABIAAACIgcAAIAAgCQABgBAAAAQABAAABAAQAAgBABAAQAAAAAAgBQABgBAAgGIAAgeQAAgFgBgCQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIAAgCIAVAAIAAAHQAFgEAEgCQADgCAFAAQAFAAACACQAEADACAEQAEgFAFgCQAEgCAFAAQAFAAAEACQACADACAEIABAMIAAAVQAAAGABABQABABAAAAQABAAAAABQABAAAAAAQABAAABABIAAACg");
	this.shape_323.setTransform(215,430);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgCA9IgpheQgHgRgDgDQgCgDgHgBIAAgDIA5AAIAAADIgCAAQgIAAgDACQAAABgBAAQAAAAAAABQAAAAgBABQAAABAAAAIABAEIAFALIAYA7IAYg0IAFgNIABgFQAAgDgCgCQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAgBAAQgDgCgHAAIAAgDIAnAAIAAADQgGABgFAGQgEAFgHAQIgpBag");
	this.shape_324.setTransform(203.5,425.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgJQAIgKALAAQAKAAAHAIQAHAIABAQIgiAAQAAAMAGAHQAEAGAHgBQAEAAADgCIAHgIIADABQgGALgGAEQgGAFgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDAAgCAEg");
	this.shape_325.setTransform(407.4,536.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAVAhIAAgDQAEAAACgCQABgCAAgHIAAgaIAAgMIgDgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgEACIgFAHIAAAhQgBAHACACQACACAEAAIAAADIggAAIAAgDQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIACgCIABgIIAAgaIgBgMIgDgDQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgFABIgHAIIAAAhQAAAHACACQABACAEAAIAAADIghAAIAAgDQAEAAACgCQABgBAAgIIAAgjQAAgHgBgCQgBgCgFgBIAAgCIAaAAIAAAIQAGgFAEgDQAFgCAFAAQAGAAADADQAEADADAGQAFgHAFgCQAFgDAFAAQAHAAAEADQAEADACAFQABAFAAAKIAAAZQAAAIABABQACACAEAAIAAADg");
	this.shape_326.setTransform(398.5,536.1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_327.setTransform(390.7,534.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgGApQgEgEgCgEIAAgMIAAgiIgJAAIAAgCQAJgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIACACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_328.setTransform(386.4,535);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgRAuQgHgBgDgDQgDgDAAgEQAAgDACgCQADgCAGgCQgJgFAAgHQAAgFAEgEQADgFAIgCQgJgDgEgGQgEgGAAgGQAAgKAHgHQAIgHAMAAQAFAAAHADIAWAAIAAAHIgMAAQADAEABADQACADAAAEQAAAHgEAFQgEAFgGADQgHACgEAAIgIAAQgDAAgCABQgDACABADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAIAKgBQAPAAAFAEQAIAEAAAJQAAAGgDAFQgEAEgGADQgJADgLAAQgIAAgHgCgAgPAcQgEADAAADQAAAEAEADQAEACALAAQAJABAFgDQAGgDAAgEIgBgDQgCgCgEgBIgTgBIgJABgAgIgmQgDADAAANQAAAKADAEQADAEADAAQADAAADgEQACgEAAgKQAAgNgDgEQgBgDgEgBQgDABgDAEg");
	this.shape_329.setTransform(288.2,465.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AACAhIAAgCQADgBACgCQABgCAAgHIAAgbIgBgLIgBgDIgDgBQgFABgGAIIAAAhQAAAHACACQABACADABIAAACIgfAAIAAgCQAEgBABgCQABgBAAgIIAAgjQAAgHgBgCQgBgCgEgBIAAgCIAZAAIAAAIQAGgFADgDQAEgCAGAAQAGAAAEADQAEAEABAFIABAPIAAAYQAAAIACACQABABAEABIAAACg");
	this.shape_330.setTransform(280.7,464.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_331.setTransform(274.9,462.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgRAuQgHgBgDgDQgDgDAAgEQAAgDACgCQACgCAHgCQgJgFAAgHQAAgFADgEQAEgFAIgCQgJgDgEgGQgEgGAAgGQAAgKAHgHQAIgHAMAAQAFAAAHADIAWAAIAAAHIgMAAQADAEABADQACADAAAEQAAAHgEAFQgEAFgHADQgGACgEAAIgIAAQgDAAgCABQgCACgBADQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQACACAEAAIALgBQAPAAAFAEQAIAEAAAJQAAAGgDAFQgEAEgGADQgJADgKAAQgJAAgHgCgAgPAcQgEADAAADQAAAEAEADQAFACAKAAQAJABAGgDQAFgDAAgEIgBgDQgCgCgEgBIgTgBIgJABgAgIgmQgDADAAANQAAAKADAEQADAEADAAQADAAADgEQADgEAAgKQAAgNgEgEQgCgDgCgBQgFABgCAEg");
	this.shape_332.setTransform(269.5,465.6);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgaAhIAAgCQAEgBABgBQABgCAAgJIAAgiIAAgHQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgEgCIAAgCIAZAAIAAAPQAGgKAFgEQAFgDAEAAQAEAAACACQADADAAAEQAAAFgDADQgCACgDAAQgEAAgDgCIgCgDIgCgBIgEACQgDACgBAEQgCAHAAAHIAAAPIABAEIAAAFIACADIAFABIAAACg");
	this.shape_333.setTransform(262.9,464.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAHAfQgDgCgBgGQgKALgKAAQgFgBgEgDQgEgEAAgFQABgIAFgFQAHgGAUgJIAAgGQAAgIgBgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgEAAgDACQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABIACADQADADAAADQAAADgDACQgDADgDAAQgFAAgCgDQgDgCAAgDQAAgGAEgEQAEgFAGgCQAIgDAGAAQAJABAFAEQAGADABAFQABADAAAKIAAAYIAAAGIABABIACABQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBIACACQgCAFgFACQgDACgEABQgGgBgDgCgAgIAHQgDAEAAAEQAAADADACQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAQADAAAEgEIAAgUQgIADgDAGg");
	this.shape_334.setTransform(256.4,464.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AACAuIAAgCQADgBACgCQABgCABgHIAAgcQAAgHgBgCIgCgDIgEgBQgCAAgCACQgDABgDAFIAAAhQAAAHABACQABACAFABIAAACIghAAIAAgCQAEgBACgCQABgBAAgIIAAhAQAAgHgBgCQgCgBgEgBIAAgCIAaAAIAAAlQAFgGAEgCQAEgDAFAAQAGAAAEAEQAFADABAFQABAEABAKIAAAZQAAAIABACQABABAFABIAAACg");
	this.shape_335.setTransform(248.8,462.7);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgSAYQgIgJAAgOQAAgMAHgKQAIgMAOAAQAKAAAGAFQAGAFAAAHQAAADgCACQgDADgEAAQgEAAgCgDQgDgCgBgIQAAgDgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgCAEQgDAEAAAMQAAAIACAIQADAIAEAEQAEADAFAAQAEAAADgCQADgBAEgFIACACQgFAIgGAFQgHAEgIAAQgMAAgHgKg");
	this.shape_336.setTransform(241.9,464.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgKAfIgDgBQgBAAAAABQAAAAgBAAQAAABgBAAQAAABgBAAIgCAAIgBgWIACAAQAEAJAEAEQAGAFAEAAQADAAACgCQACgCAAgDQAAgEgCgCIgIgHQgLgHgDgDQgEgFAAgIQAAgHAFgGQAFgGAKAAQAEAAAFACIADABIACAAIADgDIABAAIABAWIgCAAQgEgJgFgEQgEgDgDAAQgDAAgCABQAAAAgBABQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQADADAJAHQAKAHADADQADAFAAAGQAAAFgDAFQgDAFgEADQgFADgGAAQgEAAgHgDg");
	this.shape_337.setTransform(236,464.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_338.setTransform(231.3,462.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AAIAlQgFAGgDACQgEACgEAAQgMAAgIgLQgFgJgBgNQABgKADgHQADgIAHgEQAGgFAHAAQAEAAADACQAEACAEAEIAAgTIgBgJQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAAAgBIgFgBIAAgCIAbAAIAABIIAAAJQABAAAAABQAAAAAAABQAAAAABABQAAAAAAAAIAGACIAAACIgbAFgAgIgLQgDACgBAFQgCAEAAALQAAAMACAGQACAGADADIAFABQAFAAAFgJIAAghQgFgKgGAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABg");
	this.shape_339.setTransform(225.5,462.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgbAhIAAgDQAFAAABgBQABgCAAgJIAAgiIAAgHQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgFgCIAAgCIAaAAIAAAPQAGgKAFgEQAEgDAFAAQAEAAACACQACADABAEQgBAFgCADQgCACgDAAQgEAAgCgCIgDgDIgCgBIgEACQgDACgBAEQgCAHAAAIIAAAOIABAEIAAAFIACADIAFAAIAAADg");
	this.shape_340.setTransform(274.5,446.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgVAYQgIgKAAgNQAAgNAIgLQAIgKANAAQAIAAAHAEQAIAFADAIQAEAIAAAIQAAANgHAKQgIALgPAAQgOAAgHgKgAgFgZQgDADAAAHIgBAUIABAPQABAEADADQACACACAAQADAAACgBQACgDABgEQACgGAAgUQAAgLgCgEQgBgEgCgCQgCgCgDAAQgCAAgDADg");
	this.shape_341.setTransform(267.8,446.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgGApQgEgEgCgEIAAgMIAAgiIgJAAIAAgCQAJgGAHgHQAFgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIAAAHIADACIACABQAEAAAEgGIACABQgFANgMAAQgGAAgEgDg");
	this.shape_342.setTransform(262,445.5);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_343.setTransform(257.7,445.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgSAYQgIgJAAgOQAAgMAHgKQAIgMAOAAQAKAAAGAFQAGAFAAAHQAAADgCACQgDADgEAAQgEAAgCgDQgDgCgBgIQAAgDgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgCAEQgDAEAAAMQAAAIACAIQADAIAEAEQAEADAFAAQAEAAADgCQADgBAEgFIACACQgFAIgGAFQgHAEgIAAQgMAAgHgKg");
	this.shape_344.setTransform(252.7,446.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AAHAfQgDgCgBgGQgLALgJAAQgGgBgDgDQgEgEABgFQAAgIAFgGQAHgFAUgJIAAgGQAAgIgBgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgEAAgDACQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAABIACAEQACACABADQAAADgCACQgEADgDAAQgEAAgEgDQgCgCAAgDQAAgGADgEQAFgFAGgCQAIgDAGAAQAJABAGAEQAFADABAFQABADAAAKIAAAYIABAGIABABIABABQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBIACACQgDAFgDACQgEACgEABQgGgBgDgCgAgIAHQgDAEAAAEQAAADADACQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAQAEAAADgEIAAgUQgIADgDAGg");
	this.shape_345.setTransform(246.2,446.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgiAwIAAgDQAFAAACgCQABgCAAgGIAAhCQAAgIgBgBQgCgCgFgBIAAgCIAbAAIAAAIQAEgFADgCQAEgDAGAAQAHAAAGAEQAGAFADAIQADAIAAAJQAAAJgEAIQgDAHgGAEQgGAFgHAAQgFAAgEgDQgDgBgEgEIAAAXIABAHQAAAAABABQAAAAAAABQAAAAABAAQAAAAAAAAIAGABIAAADgAgHgdIAAAiQAGAIAGAAQADAAADgEQADgFAAgQQAAgQgDgHQgDgDgEAAQgGgBgFAKg");
	this.shape_346.setTransform(238.4,448);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AAHAfQgDgCgBgGQgKALgKAAQgGgBgDgDQgDgEgBgFQAAgIAHgGQAGgFAUgJIAAgGQAAgIgBgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgEAAgDACQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABIACAEQACACAAADQAAADgCACQgCADgFAAQgEAAgCgDQgEgCAAgDQAAgGAFgEQADgFAHgCQAIgDAGAAQAJABAFAEQAGADABAFQABADAAAKIAAAYIAAAGIABABIACABQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBIABACQgCAFgFACQgDACgFABQgFgBgDgCgAgIAHQgDAEAAAEQAAADADACQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAQAEAAADgEIAAgUQgHADgEAGg");
	this.shape_347.setTransform(231.4,446.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgSAYQgIgJAAgOQAAgMAHgKQAIgMAOAAQAKAAAGAFQAGAFAAAHQAAADgCACQgDADgEAAQgEAAgCgDQgDgCgBgIQAAgDgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgCAEQgDAEAAAMQAAAIACAIQADAIAEAEQAEADAFAAQAEAAADgCQADgBAEgFIACACQgFAIgGAFQgHAEgIAAQgMAAgHgKg");
	this.shape_348.setTransform(224.7,446.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgRAuQgHgBgDgDQgDgDAAgEQAAgDACgCQACgCAHgCQgJgFAAgHQAAgFAEgEQADgFAIgCQgJgDgEgGQgEgGAAgGQAAgKAIgHQAHgHAMAAQAGAAAGADIAWAAIAAAHIgMAAQADAEABADQACADAAAEQAAAHgEAFQgEAFgGADQgHACgEAAIgIAAQgDAAgCABQgDACABADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQACACAFAAIAKgBQAPAAAFAEQAIAEAAAJQAAAGgDAFQgEAEgGADQgJADgLAAQgIAAgHgCgAgPAcQgEADAAADQAAAEAFADQADACALAAQAJABAFgDQAGgDAAgEIgBgDQgCgCgEgBIgSgBIgKABgAgIgmQgDADAAANQAAAKADAEQADAEADAAQADAAADgEQACgEAAgKQAAgNgDgEQgBgDgEgBQgDABgDAEg");
	this.shape_349.setTransform(113.5,452.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AACAhIAAgCQADgBACgCQABgCAAgHIAAgbIgBgLIgBgDIgDgBQgFABgGAIIAAAhQAAAHABACQACACADABIAAACIggAAIAAgCQAEgBACgCQABgBAAgIIAAgjQAAgHgBgCQgCgCgEgBIAAgCIAaAAIAAAIQAGgFADgDQAEgCAFAAQAHAAAEADQAEAEABAFIABAPIAAAYQAAAIABACQACABAEABIAAACg");
	this.shape_350.setTransform(106,450.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_351.setTransform(100.2,449.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgRAuQgHgBgDgDQgDgDAAgEQAAgDACgCQADgCAGgCQgJgFAAgHQAAgFADgEQAEgFAIgCQgJgDgEgGQgEgGAAgGQAAgKAHgHQAIgHAMAAQAFAAAHADIAWAAIAAAHIgMAAQADAEABADQACADAAAEQAAAHgEAFQgEAFgHADQgGACgEAAIgIAAQgDAAgCABQgCACAAADQAAABAAAAQAAABAAAAQAAABABAAQAAABAAAAQADACAEAAIAKgBQAPAAAFAEQAIAEAAAJQAAAGgDAFQgEAEgGADQgJADgKAAQgJAAgHgCgAgPAcQgEADAAADQAAAEAEADQAEACALAAQAJABAFgDQAGgDAAgEIgBgDQgCgCgEgBIgTgBIgJABgAgIgmQgDADAAANQAAAKADAEQADAEADAAQADAAADgEQADgEAAgKQgBgNgDgEQgCgDgCgBQgFABgCAEg");
	this.shape_352.setTransform(94.8,452.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgbAhIAAgCQAFgBABgBQABgCAAgJIAAgiIAAgHQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgFgCIAAgCIAaAAIAAAPQAGgKAFgEQAEgDAFAAQAEAAACACQACADABAEQgBAFgCADQgCACgDAAQgEAAgDgCIgCgDIgCgBIgEACQgDACgBAEQgCAHAAAHIAAAPIABAEIAAAFIACADIAFABIAAACg");
	this.shape_353.setTransform(88.2,450.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AAHAfQgDgCgBgGQgKALgKAAQgGgBgDgDQgEgEAAgFQABgIAFgFQAHgGAUgJIAAgGQAAgIgBgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgEAAgDACQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABIACADQADADAAADQgBADgCACQgDADgDAAQgFAAgCgDQgDgCgBgDQABgGAEgEQAEgFAGgCQAIgDAGAAQAJABAFAEQAFADACAFQABADAAAKIAAAYIAAAGIABABIACABQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABgBIABACQgCAFgFACQgDACgFABQgFgBgDgCgAgIAHQgDAEAAAEQAAADADACQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAQADAAAEgEIAAgUQgIADgDAGg");
	this.shape_354.setTransform(81.7,450.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AACAuIAAgCQAEgBABgCQABgCABgHIAAgcQAAgHgBgCIgDgDIgDgBQgCAAgCACQgCABgDAFIAAAhQAAAHAAACQABACAFABIAAACIggAAIAAgCQADgBACgCQABgBAAgIIAAhAQAAgHgBgCQgCgBgDgBIAAgCIAaAAIAAAlQAEgGAEgCQAFgDAEAAQAGAAAEAEQAEADACAFQABAEABAKIAAAZQgBAIACACQABABAFABIAAACg");
	this.shape_355.setTransform(74.1,449.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgSAYQgIgJAAgOQAAgMAHgKQAIgMAOAAQAKAAAGAFQAGAFAAAHQAAADgCACQgDADgEAAQgEAAgCgDQgDgCgBgIQAAgDgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgCAEQgDAEAAAMQAAAIACAIQADAIAEAEQAEADAFAAQAEAAADgCQADgBAEgFIACACQgFAIgGAFQgHAEgIAAQgMAAgHgKg");
	this.shape_356.setTransform(67.2,450.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgaAhIAAgDQAEAAACgBQABgCAAgJIAAgiIgBgHQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAIgEgCIAAgCIAaAAIAAAPQAFgKAFgEQAEgDAFAAQAEAAADACQABADAAAEQAAAFgBADQgDACgDAAQgEAAgDgCIgDgDIgBgBIgEACQgCACgCAEQgCAHABAIIAAAOIAAAEIAAAFIABADIAGAAIAAADg");
	this.shape_357.setTransform(117,433);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgVAYQgIgKAAgNQAAgNAIgLQAIgKANAAQAIAAAIAEQAHAFAEAIQADAIAAAIQAAANgHAKQgIALgPAAQgNAAgIgKgAgFgZQgCADgBAHIgBAUIABAPQABAEACADQACACADAAQADAAACgBQACgDACgEQABgGAAgUQAAgLgBgEQgCgEgCgCQgCgCgDAAQgDAAgCADg");
	this.shape_358.setTransform(110.2,433.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgGApQgEgEgBgEIgBgMIAAgiIgIAAIAAgCQAIgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIABACIADABQAEAAAEgGIACABQgGANgMAAQgFAAgEgDg");
	this.shape_359.setTransform(104.5,432);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_360.setTransform(100.2,431.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgSAYQgIgJAAgOQAAgMAHgKQAIgMAOAAQAKAAAGAFQAGAFAAAHQAAADgCACQgDADgEAAQgEAAgCgDQgDgCgBgIQAAgDgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgCAEQgDAEAAAMQAAAIACAIQADAIAEAEQAEADAFAAQAEAAADgCQADgBAEgFIACACQgFAIgGAFQgHAEgIAAQgMAAgHgKg");
	this.shape_361.setTransform(95.2,433.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AAHAfQgDgCgBgGQgLALgJAAQgFgBgEgDQgDgEgBgFQAAgIAHgGQAGgFAUgJIAAgGQAAgIgBgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgFAAgDACQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABIACAEQACACAAADQAAADgCACQgCADgFAAQgDAAgDgDQgEgCAAgDQAAgGAFgEQADgFAIgCQAGgDAHAAQAJABAFAEQAFADACAFQABADAAAKIAAAYIABAGIAAABIACABQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBIACACQgEAFgEACQgDACgFABQgFgBgDgCgAgJAHQgCAEAAAEQAAADACACQABABAAAAQABAAAAAAQABABABAAQAAAAABAAQAEAAADgEIAAgUQgHADgFAGg");
	this.shape_362.setTransform(88.7,433.1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgiAwIAAgDQAFAAACgCQABgCAAgGIAAhCQAAgIgBgBQgCgCgFgBIAAgCIAbAAIAAAIQAEgFADgCQAEgDAGAAQAHAAAGAEQAGAFADAIQADAIAAAJQAAAJgEAIQgDAHgGAEQgGAFgHAAQgFAAgEgDQgDgBgEgEIAAAXIABAHQAAAAABABQAAAAAAABQAAAAABAAQAAAAAAAAIAGABIAAADgAgHgdIAAAiQAGAIAGAAQADAAADgEQADgFAAgQQAAgQgDgHQgDgDgEAAQgGgBgFAKg");
	this.shape_363.setTransform(80.9,434.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AAHAfQgDgCgBgGQgLALgJAAQgGgBgDgDQgEgEABgFQAAgIAFgGQAHgFAUgJIAAgGQAAgIgBgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQgEAAgDACQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAABIACAEQACACABADQAAADgCACQgEADgDAAQgEAAgEgDQgCgCAAgDQAAgGADgEQAFgFAGgCQAIgDAGAAQAJABAGAEQAFADABAFQABADAAAKIAAAYIABAGIABABIABABQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAgBIACACQgDAFgDACQgEACgEABQgGgBgDgCgAgIAHQgDAEAAAEQAAADADACQAAABAAAAQABAAAAAAQABABABAAQAAAAABAAQAEAAADgEIAAgUQgIADgDAGg");
	this.shape_364.setTransform(73.9,433.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgSAYQgIgJAAgOQAAgMAHgKQAIgMAOAAQAKAAAGAFQAGAFAAAHQAAADgCACQgDADgEAAQgEAAgCgDQgDgCgBgIQAAgDgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgCAEQgDAEAAAMQAAAIACAIQADAIAEAEQAEADAFAAQAEAAADgCQADgBAEgFIACACQgFAIgGAFQgHAEgIAAQgMAAgHgKg");
	this.shape_365.setTransform(67.2,433.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AARAcIAAgCQADgBACgCQABgCAAgFIAAgWIAAgJIgCgDIgDgBQgDAAgCACIgFAFIAAAcQAAAFABACQABACAEABIAAACIgbAAIAAgCIADgCIACgCIABgGIAAgWIgBgJIgCgDIgCgBIgFABIgFAGIAAAcQAAAFABACQAAABABAAQAAAAABABQAAAAABAAQABAAAAABIAAACIgbAAIAAgCQABgBAAAAQABAAABAAQAAgBABAAQAAAAABgBQABgBAAgGIAAgeQAAgFgBgCQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIAAgCIAWAAIAAAHQAEgEAEgCQAEgCAEAAQAFAAACACQAEADACAEQAFgFAEgCQAEgCAFAAQAFAAAEACQADADABAEIABAMIAAAVQAAAGACABQAAABAAAAQABAAAAABQABAAAAAAQABAAABABIAAACg");
	this.shape_366.setTransform(119.4,322);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgXAuIAAgCIADAAQAEAAACgCIADgDQABgCAAgHIAAg8QAAgHgBgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgGgBIgDAAIAAgCIAvAAIAAACIgDAAQgEAAgDACQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgBABAAAHIAAA8QAAAIABABQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIADAAIAAACg");
	this.shape_367.setTransform(111.7,318.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgQAvIAAgCQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgBgEgBIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAACgAgHgdQgDgDAAgEQAAgEADgDQADgEAEAAQAEAAADAEQADADAAAEQAAAEgDADQgDAEgEAAQgEAAgDgEg");
	this.shape_368.setTransform(28,312.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgKQAIgJALAAQAKAAAHAIQAHAIABAQIgiAAQAAAMAGAHQAEAGAHAAQAEgBADgCIAHgIIADACQgGAKgGAEQgGAFgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgDgBgCAEg");
	this.shape_369.setTransform(388,376.6);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AAVAhIAAgDQAEAAACgCQABgCAAgHIAAgaIAAgLIgDgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgEACIgFAGIAAAiQAAAHABACQABACAFAAIAAADIggAAIAAgDQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIACgCIABgIIAAgaIgBgLIgDgEQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIgFABIgHAHIAAAiQAAAHACACQABACAEAAIAAADIghAAIAAgDQAEAAACgCQABgCAAgHIAAgjQAAgHgBgCQgCgCgEAAIAAgDIAaAAIAAAIQAFgFAFgDQAEgCAGAAQAGAAADADQAEADADAGQAFgGAFgDQAFgDAGAAQAGAAAEADQAEAEACAEQABAEAAALIAAAZQAAAHACACQABACAEAAIAAADg");
	this.shape_370.setTransform(379,376.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgQAvIAAgCQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgBgEgBIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAACgAgHgdQgDgDAAgEQAAgEADgDQADgEAEAAQAEAAADAEQADADAAAEQAAAEgDADQgDAEgEAAQgEAAgDgEg");
	this.shape_371.setTransform(371.2,375.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgGApQgEgEgCgEIAAgMIAAgiIgJAAIAAgCQAJgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIAAAHIADACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_372.setTransform(367,375.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#0000FF").ss(2,1,1).p("AAAnLIAAOX");
	this.shape_373.setTransform(168.1,472.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(1,1,1).p("AolqOIAAFAAImGfIlKDw");
	this.shape_374.setTransform(148.6,394.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(1,1,1).p("ABVhUIipCp");
	this.shape_375.setTransform(105.6,334.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(1,1,1).p("AlYqdIiqCqAolp/IAAFAAImGuIlKDw");
	this.shape_376.setTransform(148.6,393.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320}]}).to({state:[{t:this.shape_376},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320}]},81).wait(1));

	// Layer 4
	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AASAcIAAgCQADgBABgCQABgCAAgFIAAgWIgBgJIgBgDIgDgBQgDAAgCACIgFAFIAAAcQAAAFABACQABACAEABIAAACIgbAAIAAgCIAEgCIACgCIAAgGIAAgWIAAgJIgCgDIgEgBIgDABIgHAGIAAAcQABAFABACQAAABABAAQAAAAABABQAAAAABAAQABAAABABIAAACIgcAAIAAgCQABgBAAAAQABAAABAAQAAgBABAAQAAAAAAgBQABgBAAgGIAAgeQAAgFgBgCQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIAAgCIAVAAIAAAHQAFgEAEgCQADgCAFAAQAFAAACACQAEADACAEQAEgFAFgCQAEgCAFAAQAFAAAEACQACADACAEIABAMIAAAVQAAAGABABQABABAAAAQABAAAAABQABAAAAAAQABAAABABIAAACg");
	this.shape_377.setTransform(84.5,34);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgXAuIAAgCIADAAQAEAAACgCIADgDQABgCAAgHIAAg8QAAgHgBgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgGgBIgDAAIAAgCIAvAAIAAACIgDAAQgEAAgDACQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgBABAAAHIAAA8QAAAIABABQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIADAAIAAACg");
	this.shape_378.setTransform(76.8,30.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_379.setTransform(28.1,22.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgJQAIgKALAAQAKAAAHAIQAHAIABAQIgiAAQAAALAGAIQAEAFAHAAQAEAAADgBIAHgJIADABQgGALgGAFQgGAEgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDABgCADg");
	this.shape_380.setTransform(398.5,84.6);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AAVAhIAAgCQAEgBACgDQABgCAAgGIAAgbIAAgLIgDgCQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDACIgGAHIAAAhQgBAHACABQACAEAEAAIAAACIghAAIAAgCQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIACgDIABgHIAAgbIgBgLIgDgCQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIgFACIgHAHIAAAhQAAAHACACQABACAEABIAAACIghAAIAAgCQAEgBACgCQABgBAAgIIAAgjQAAgIgBgBQgBgCgFgBIAAgCIAaAAIAAAJQAGgGAEgDQAFgCAFAAQAGAAADADQAFADACAGQAFgHAFgCQAFgDAFAAQAHAAAEADQAEAEACAEQABAFAAAKIAAAZQAAAIABABQACACAEABIAAACg");
	this.shape_381.setTransform(389.6,84.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgBQgCgDgEAAIAAgDIAZAAIAAAyQAAAHACACQACACAEAAIAAADgAgHgdQgDgCAAgFQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_382.setTransform(381.8,83.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgGApQgEgEgBgEIgBgMIAAgiIgIAAIAAgCQAIgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIACACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_383.setTransform(377.5,83.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgKQAIgJALAAQAKAAAHAIQAHAIABAQIgiAAQAAAMAGAHQAEAGAHgBQAEAAADgCIAHgIIADABQgGALgGAEQgGAFgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDAAgCAEg");
	this.shape_384.setTransform(301.9,32.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgBAhIgVgwIgGgMQgCgCgDgBIAAgCIAhAAIAAACQAAAAAAABQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAADADAHIAKAXIAIgUQAEgJAAgEQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgCIAAgCIAVAAIAAACQgDABgCACQgCABgEAKIgVAxg");
	this.shape_385.setTransform(295.2,32.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_386.setTransform(289.8,30.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgGApQgEgEgCgEIAAgMIAAgiIgJAAIAAgCQAJgGAHgHQAFgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIAAAHIADACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_387.setTransform(285.5,31);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AAHAfQgEgCAAgGQgKALgKAAQgGgBgDgDQgDgEgBgFQAAgIAHgGQAGgFAUgJIAAgGQAAgIgBgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgFAAgDACQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIACADQADADgBADQAAADgCACQgCADgFAAQgDAAgEgDQgDgCAAgDQAAgGAFgEQADgFAIgCQAGgDAHAAQAJABAFAEQAFADACAFQABADAAAKIAAAYIABAGIAAABIACABQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABgBIACACQgDAFgFACQgDACgFABQgFgBgDgCgAgJAHQgCAEAAAEQAAADACACQABABAAAAQABAAAAAAQABABABAAQAAAAABAAQAEAAADgEIAAgUQgHADgFAGg");
	this.shape_388.setTransform(279.8,32.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgRAuQgHgBgDgDQgDgDAAgEQAAgDACgCQADgCAGgCQgJgFAAgHQAAgFADgEQAFgFAHgCQgJgDgEgGQgEgGAAgGQAAgKAHgHQAIgHAMAAQAGAAAGADIAWAAIAAAHIgNAAQAEAEABADQACADAAAEQAAAHgEAFQgEAFgHADQgGADgEgBIgIAAQgDAAgCABQgCACgBADQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQADACADAAIALgBQAPAAAFAEQAIAEAAAJQAAAGgEAFQgDAEgGADQgJADgKAAQgJAAgHgCgAgPAcQgEADAAADQAAAEAEADQAFACAKAAQAJABAGgDQAFgDAAgEIgBgDQgCgCgDgBIgUgBIgJABgAgJgmQgCADAAANQAAAKACAEQADAEAEAAQADAAADgEQACgEABgKQAAgNgEgEQgCgDgCgBQgFABgDAEg");
	this.shape_389.setTransform(272.8,33.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgKQAIgJALAAQAKAAAHAIQAHAIABAQIgiAAQAAAMAGAHQAEAGAHgBQAEAAADgCIAHgIIADABQgGALgGAEQgGAFgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDAAgCAEg");
	this.shape_390.setTransform(266.1,32.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AACAhIAAgDQAEAAABgCQABgCAAgHIAAgbIAAgLIgDgDIgDgBQgEABgFAIIAAAhQAAAHAAACQACACAEAAIAAADIggAAIAAgDQADAAACgCQABgBAAgIIAAgjQAAgHgBgCQgCgCgDgBIAAgCIAaAAIAAAIQAEgFAEgDQAFgCAFAAQAFAAAFADQAEAEACAFIABAPIAAAYQAAAIAAACQACABAFAAIAAADg");
	this.shape_391.setTransform(259.1,32.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgGApQgEgEgCgEIAAgMIAAgiIgJAAIAAgCQAJgGAHgHQAFgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIAAAHIADACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_392.setTransform(297.7,13.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AACAhIAAgDQADAAACgCQABgCAAgHIAAgbIgBgLIgBgDIgDgBQgFABgGAIIAAAhQAAAHABACQACACADAAIAAADIggAAIAAgDQAEAAACgCQABgBAAgIIAAgjQAAgHgBgCQgCgCgEgBIAAgCIAaAAIAAAIQAGgFADgDQAEgCAFAAQAHAAAEADQAEAEABAFIABAPIAAAYQAAAIABACQACABAEAAIAAADg");
	this.shape_393.setTransform(291.4,14.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgKQAIgJALAAQAKAAAHAIQAHAIABAQIgiAAQAAAMAGAHQAEAGAHgBQAEAAADgCIAHgIIADABQgGALgGAEQgGAFgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDAAgCAEg");
	this.shape_394.setTransform(284.5,14.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgbAhIAAgDQAFAAABgBQABgCAAgJIAAgiIAAgHQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgFgCIAAgCIAaAAIAAAPQAGgKAFgEQAEgDAFAAQAEAAACACQACADABAEQgBAFgCADQgCACgDAAQgEAAgDgCIgCgDIgCgBIgEACQgDACgBAEQgCAHAAAHIAAAPIABAEIAAAFIACADIAFAAIAAADg");
	this.shape_395.setTransform(278.6,14.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgaAhIAAgDQAEAAABgBQABgCAAgJIAAgiIAAgHQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgEgCIAAgCIAZAAIAAAPQAGgKAFgEQAFgDAEAAQAEAAACACQADADAAAEQAAAFgDADQgCACgDAAQgEAAgDgCIgCgDIgCgBIgEACQgDACgBAEQgCAHAAAHIAAAPIABAEIAAAFIACADIAFAAIAAADg");
	this.shape_396.setTransform(272.4,14.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgTAdQgFgDgCgEQgBgFAAgKIAAgZQAAgHgBgCQgBgCgFgBIAAgCIAaAAIAAArIABAIIACADIAEABIACgBQAEgCADgFIAAghQABgHgCgCQgBgCgFgBIAAgCIAaAAIAAAxQABAIABACQABABAEAAIAAADIgaAAIAAgJQgEAGgEACQgFADgFAAQgGAAgDgEg");
	this.shape_397.setTransform(265.2,14.7);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgSAYQgIgJAAgOQAAgMAHgKQAIgMAOAAQAKAAAGAFQAGAFAAAHQAAADgCACQgDADgEAAQgEAAgCgDQgDgCgBgIQAAgDgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgCAEQgDAEAAAMQAAAIACAIQADAIAEAEQAEADAFAAQAEAAADgCQADgBAEgFIACACQgFAIgGAFQgHAEgIAAQgMAAgHgKg");
	this.shape_398.setTransform(258.3,14.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgKQAIgJALAAQAKAAAHAIQAHAIABAQIgiAAQAAAMAGAHQAEAGAHgBQAEAAADgCIAHgIIADABQgGALgGAEQgGAFgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDAAgCAEg");
	this.shape_399.setTransform(226,32.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgBAhIgVgwIgGgMQgCgCgDgBIAAgCIAhAAIAAACQAAAAAAABQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAADADAHIAKAXIAIgUQAEgJAAgEQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgCIAAgCIAVAAIAAACQgDABgCACQgCABgEAKIgVAxg");
	this.shape_400.setTransform(219.3,32.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_401.setTransform(213.9,30.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgGApQgEgEgBgEIgBgMIAAgiIgIAAIAAgCQAIgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIACACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_402.setTransform(209.7,31);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_403.setTransform(205.4,30.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgKAfIgDgBQAAAAgBABQAAAAgBAAQAAABgBAAQAAABgBAAIgCAAIgBgWIADAAQACAJAGAEQAFAFAEAAQADAAACgCQACgCABgDQgBgEgCgCIgIgHQgLgHgDgDQgEgFAAgIQAAgHAFgGQAFgGAKAAQAEAAAFACIADABIACAAIADgDIACAAIABAWIgCAAQgFgJgEgEQgFgDgDAAQgDAAgCABQAAAAgBABQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQACADAKAHQAJAHAEADQADAFAAAGQAAAFgDAFQgDAFgEADQgFADgGAAQgEAAgHgDg");
	this.shape_404.setTransform(200.7,32.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgVAYQgIgKAAgNQAAgNAIgLQAIgKANAAQAIAAAHAEQAIAFADAIQAEAIAAAIQAAANgHAKQgIALgPAAQgOAAgHgKgAgFgZQgDADAAAHIgBAUIABAPQABAEADADQACACACAAQADAAACgBQACgDABgEQACgGAAgUQAAgLgCgEQgBgEgCgCQgCgCgDAAQgCAAgDADg");
	this.shape_405.setTransform(194.4,32.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgiAwIAAgDQAFAAACgCQABgCAAgGIAAhCQAAgIgBgBQgCgCgFgBIAAgCIAbAAIAAAIQAEgFADgCQAEgDAGAAQAHAAAGAEQAGAFADAIQADAIAAAJQAAAJgEAIQgDAHgGAEQgGAFgHAAQgFAAgEgDQgDgBgEgEIAAAXIABAHQAAAAABABQAAAAAAABQAAAAABAAQAAAAAAAAIAGABIAAADgAgHgcIAAAhQAGAIAGAAQADAAADgEQADgFAAgQQAAgQgDgHQgDgDgEAAQgGgBgFALg");
	this.shape_406.setTransform(186.8,33.6);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgGApQgEgEgCgEIAAgMIAAgiIgJAAIAAgCQAJgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIAAAHIADACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_407.setTransform(225.7,13.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AACAhIAAgDQADAAACgCQABgCAAgHIAAgbIgBgLIgBgDIgDgBQgFABgGAIIAAAhQAAAHABACQACACADAAIAAADIggAAIAAgDQAEAAACgCQABgBAAgIIAAgjQAAgHgBgCQgCgCgEgBIAAgCIAaAAIAAAIQAGgFADgDQAEgCAFAAQAHAAAEADQAEAEABAFIABAPIAAAYQAAAIABACQACABAEAAIAAADg");
	this.shape_408.setTransform(219.4,14.5);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgKQAIgJALAAQAKAAAHAIQAHAIABAQIgiAAQAAAMAGAHQAEAGAHgBQAEAAADgCIAHgIIADABQgGALgGAEQgGAFgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDAAgCAEg");
	this.shape_409.setTransform(212.5,14.6);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgbAhIAAgDQAFAAABgBQABgCAAgJIAAgiIAAgHQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgFgCIAAgCIAaAAIAAAPQAGgKAFgEQAEgDAFAAQAEAAACACQACADABAEQgBAFgCADQgCACgDAAQgEAAgDgCIgCgDIgCgBIgEACQgDACgBAEQgCAHAAAHIAAAPIABAEIAAAFIACADIAFAAIAAADg");
	this.shape_410.setTransform(206.6,14.5);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgaAhIAAgDQAEAAABgBQABgCAAgJIAAgiIAAgHQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgEgCIAAgCIAZAAIAAAPQAGgKAFgEQAFgDAEAAQAEAAACACQADADAAAEQAAAFgDADQgCACgDAAQgEAAgDgCIgCgDIgCgBIgEACQgDACgBAEQgCAHAAAHIAAAPIABAEIAAAFIACADIAFAAIAAADg");
	this.shape_411.setTransform(200.4,14.5);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgTAdQgFgDgCgEQgBgFAAgKIAAgZQAAgHgBgCQgBgCgFgBIAAgCIAaAAIAAArIABAIIACADIAEABIACgBQAEgCADgFIAAghQABgHgCgCQgBgCgFgBIAAgCIAaAAIAAAxQABAIABACQABABAEAAIAAADIgaAAIAAgJQgEAGgEACQgFADgFAAQgGAAgDgEg");
	this.shape_412.setTransform(193.2,14.7);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgSAYQgIgJAAgOQAAgMAHgKQAIgMAOAAQAKAAAGAFQAGAFAAAHQAAADgCACQgDADgEAAQgEAAgCgDQgDgCgBgIQAAgDgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgDAAgCAEQgDAEAAAMQAAAIACAIQADAIAEAEQAEADAFAAQAEAAADgCQADgBAEgFIACACQgFAIgGAFQgHAEgIAAQgMAAgHgKg");
	this.shape_413.setTransform(186.3,14.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(1,1,1).p("ABUipIiLCMAhThxIAAEb");
	this.shape_414.setTransform(69.6,54.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377}]}).to({state:[{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377}]},81).wait(1));

	// Layer 47
	this.instance_9 = new lib.Tween8("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(23.2,609.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({guide:{path:[23.3,609.1,25.6,609.2,29.6,608,37.9,605.6,46.4,598.6,73.8,576.2,94.1,517.1,106.9,480.1,123.3,456.5,141,431.2,159.8,426.4,180.4,421.2,199.7,441.8,221.1,464.6,239.6,517.6,258,570.6,279.5,593.3,298.8,613.8,319.4,608.4,338,603.5,355.6,578.1,372,554.5,384.6,517.6]}},80).to({startPosition:0},1).wait(1));

	// Layer 49
	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#0000FF").ss(2,1,1).p("AxGgEQAriBBMihQCYlDCnihQDpjiDlCBQEeChEHLGAxMAGQgrCBhMCiQiZFCimCiQiICDiGALAcRABQgrCBhMCiQiYFCinCiQjpDhjliBQkfihkHrG");
	this.shape_415.setTransform(204.1,518);

	this.timeline.addTween(cjs.Tween.get(this.shape_415).wait(82));

	// Layer 46
	this.instance_10 = new lib.Symbol1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(387.8,517.4,1,1,-90);

	this.instance_11 = new lib.Symbol1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(22.9,424.4,1,1,180);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(2,1,1).p("A8OuOIAAcdA8JAAMA4YAAA");
	this.shape_416.setTransform(203.7,518);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_416},{t:this.instance_11},{t:this.instance_10}]}).to({state:[{t:this.shape_416},{t:this.instance_11},{t:this.instance_10}]},81).wait(1));

	// Layer 42
	this.instance_12 = new lib.Tween1("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(24,71.3,1.909,1.909);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:385,y:71},80).to({startPosition:0},1).wait(1));

	// Layer 5
	this.instance_13 = new lib.Tween1("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(24,71.3,1.909,1.909);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({guide:{path:[24.1,71.3,28.2,64.5,32.6,59.3,38,54.1,44.4,48.7,50.4,44.2,60.8,43.1,70.9,43.2,76.6,48.2,82.3,52.8,87.3,58.4,91.3,64,96.1,71.3,96.1,71.6,96.3,71.6,100,80.3,105.4,84.9,109.6,90.6,116.7,95.4,121.4,100.5,130.6,99.9,139.9,101.4,145.2,95.9,152.6,92,157.5,86,162.8,81.3,168.3,71.6,171.3,66.6,176.3,60.1,181.3,54.6,187,49.9,193.9,46.2,203,43.1,209.4,42.5,215.2,44.9,215.6,44.1,216.7,44.7,217.8,45.3,219.7,47.3,225.2,50.9,229.9,56.2,235.2,61.4,238.9,68.7,242.5,75.8,247,81.3,250.7,88.2,256.7,92,261.6,96.8,268.9,98.9,279.5,101.5,287.3,97,295.9,93.9,300.6,87.2,306.2,82.9,309.3,76.7,313,70.6,317.5,64,322,58.2,327.8,52.6,333.9,48.2,340.8,44.4,349.4,41.8,358.6,44.3,365.1,48,370.7,52.2,376.1,57.9,381.2,64.9,384.3,68.6,384.9,71]}},80).to({startPosition:0},1).wait(1));

	// Layer 44
	this.instance_14 = new lib.Symbol1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(22.6,322.4,1,1,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(81).to({startPosition:0},0).wait(1));

	// Layer 33
	this.instance_15 = new lib.Tween8("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(23,360.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({guide:{path:[23.1,360.5,27,356,34,350.3,48.2,339,64.3,333.3,115.8,315.2,167.6,360.5,219.5,405.9,270.9,388.1,287.1,382.5,301.1,371.1,305.7,367.5,309.2,363.8,312,360.9,312,360.5,313.5,358.9,315.1,357.4,319,353.5,323.7,349.8,338.6,337.8,355.1,331.8,369,326.8,382.5,326.4]}},80).to({startPosition:0},1).wait(1));

	// Layer 32
	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#FFFFFF").ss(2,1,1).p("EAggAJEMhA/AAAIAAyHMBA/AAAg");
	this.shape_417.setTransform(211,365);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(2,1,1).p("AQagRQABgBAAAAIAfggQAngnAvglQCOhyCcg8QAIgDAIgCQCNg0CKgDQACAAADAAAcBg+IAvAvIgxAvIAAgxIgBgqAQagRILMAAIAZAAA8vgSQABgBABgBQAHgIAHgHQAkgnA6guQCOhxChg5QAGgDAGgCQH9irIAHAQABAAABABI2jAAA8vF3IAAmIIAAgBIAAlkAQagRQgEAHgXAXQgjAlguAlQiMBxiiA4QgIADgIADQn5Cln9m7QAAAAgBgBg");
	this.shape_418.setTransform(206.9,363.5);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("EggfAJEIAAyHMBA/AAAIAASHgA9YFnIAAmHgAmvgfQH+G6H4ilIAQgFQCig4CMhyQAugkAjgkQAXgYAEgHI2hAAIABABgAbVhKIABAqIABAxIAwgwIgugvgAWhlBIgQAGQicA8iOBxQgvAmgnAnIgfAfIgBACILMAAIAZAAIgZAAIAAlYIgFAAQiKAEiNAzgA9YgiIAAACIAFAAIWjAAIgCgCQoAm/n9CqIgMAFQihA5iOBxQg5AuglAnIgOAQIgCABIAAljIAAFjIAAAAgA9Ygig");
	this.shape_419.setTransform(211,365);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(2,1,1).p("A8ilxIAvgvIAwAxIhcABA7wGhMA4TAAA");
	this.shape_420.setTransform(201.7,362.3);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgDAFIABgCIAGgHIgEAGIgCADg");
	this.shape_421.setTransform(312.3,361.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AcYDUIAAgBQgCgKACgKIAAgKQAAgHgDgHIABgJIABgBQAFgEAFAFIAGAHQAEAHAHAFIADADQADAFgEAEIgGAEQgBAMgJAIQgDACgDAAQgEAAgCgDgA8yi2IgBgBQgFgFAFgFIAIgGQAHgFAFgHIADgDQAFgCAEAEIAEAFQAMABAIAKQACACAAAEQAAADgDADIgCAAQgKABgKgBIgKAAQgHAAgGADIgJgBg");
	this.shape_422.setTransform(205.2,343.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").ss(2,1,1).p("AQagRQABgBAAAAIAfggQAngnAvglQCOhyCcg8QAIgDAIgCQCNg0CKgDQACAAADAAAQagRILMAAIAZAAIgBgqAcBg+IAvAvIgxAvIAAgxA8vgSQABgBABgBQAHgIAHgHQAkgnA6guQCOhxChg5QAGgDAGgCQH9irIAHAQABAAABABI2jAAA8vF3IAAmIIAAgBIAAlkAQagRQgEAHgXAXQgjAlguAlQiMBxiiA4QgIADgIADQn5Cln9m7QAAAAgBgBg");
	this.shape_423.setTransform(206.9,363.5);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("EggfAJEIAAyHMBA/AAAIAASHgA9YgiIAAACIAAGHIAAmHIAFAAIWjAAIgCgCQoAm/n9CqIgMAFQihA5iOBxQg5AuglAnIgOAQIgCABIAAljIAAFjIAAAAgAmvgfQH+G6H4ilIAQgFQCig4CMhyQAugkAjgkQAXgYAEgHI2hAAIABABgAbWggIABAxIAwgwIgugvIgEAEIABAqIgZAAIAAlYIgFAAQiKAEiNAzIgQAGQicA8iOBxQgvAmgnAnIgfAfIgBACILMAAIAZAAgAbWgggA9Ygig");
	this.shape_424.setTransform(211,365);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417}]}).to({state:[{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_424},{t:this.shape_423},{t:this.shape_417}]},81).wait(1));

	// Layer 35
	this.instance_16 = new lib.Tween9("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-160.9,363.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:198.1,y:364.5},80).to({startPosition:0},1).wait(1));

	// Layer 2
	this.instance_17 = new lib.Tween5("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(190.6,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(81).to({startPosition:0},0).wait(1));

	// Layer 74
	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgDAiIgHgCIgGgBIgBAAIgCAEIgBAAIAAgXIABAAQACAHACADQACAEAEACQAFACAEAAQAGAAAEgCQADgDAAgFIgBgFQgBgCgDgDIgKgGIgMgHIgFgGQgCgDAAgEQAAgIAFgEQAGgGAIAAQAFABAGACIADABIADgBIABgDIACAAIAAAXIgCAAQgBgHgCgEQgDgDgEgCQgEgDgEAAQgFAAgDAEQgDACAAAFQAAACACADQADAEAKAFQAKAFADACQADADACAEQACADAAAEQAAAIgGAFQgGAGgJAAIgEgBg");
	this.shape_425.setTransform(594.8,608.7);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgbAhIAAgCIACAAIAEgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIAAgHIAAgqQAAgGgBgBQgCgDgEAAIgCAAIAAgBIAxAAIABAPIgCAAQgBgGgBgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBgBgBAAIgGAAIgRAAIAAAZIANAAQAFAAACgBQADgDAAgFIACAAIAAAWIgCAAIgBgGIgDgDIgGgBIgNAAIAAAWIAAAGIABABIAEAAIAKAAIAIgBQADAAACgCIAHgJIACAAIgHAQg");
	this.shape_426.setTransform(587.9,608.7);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgbAhIAAgCIACAAQAEAAACgDQABgBAAgGIAAgqQAAgFgBgCQgCgDgEAAIgCAAIAAgBIAdAAIAAABIgHABIgDADIAAAIIAAAoIAAAGIACABIAHABIAEAAQAIAAADgBQADgBACgEQADgCADgHIABABIgFASg");
	this.shape_427.setTransform(580.8,608.7);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AAJAiIAAgCIAFgBIACgDIgCgHIgEgJIgZAAIgEAKIgCAGQAAAAAAAAQAAABAAAAQABAAAAABQAAAAABAAQABACAEAAIAAACIgUAAIAAgCIAFgCQACgCADgHIAYg2IABAAIAWA2QADAHADACQACACAEAAIAAACgAgOAIIAXAAIgLgag");
	this.shape_428.setTransform(573.2,608.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AAQAiIgPgqIgPAqIgCAAIgTg2IgDgHIgDgDIgEgBIAAgCIAYAAIAAACIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgBADIACAIIANAkIALgfIgCgFIgCgFIgCgEIgBgCIgDgBIgDAAIAAgCIAZAAIAAACIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIACAJIANAjIAMgkIADgIIgBgCIgCgBIgEgBIAAgCIATAAIAAACIgEABIgDADIgDAIIgSA1g");
	this.shape_429.setTransform(565.1,608.8);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AAGAhIAAgCIACAAQAEAAACgCQACgCAAgGIAAgUIgeAAIAAAUIAAAHIACACIAFABIACAAIAAACIgcAAIAAgCIACAAQAEAAACgCIABgIIAAgqIAAgGIgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgCAAIAAgBIAcAAIAAABIgCAAIgFABIgCADIAAAGIAAAUIAeAAIAAgUQAAgFgBgBIgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgCAAIAAgBIAcAAIAAABIgCAAIgEABIgCADQgBABAAAFIAAAqQAAAGABABIACACIAEABIACAAIAAACg");
	this.shape_430.setTransform(552.4,608.7);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgNAhIAAgCIACAAQAEAAACgDQABgBAAgGIAAgxIgIAAIgGABQgDAAgCADQgCADAAAFIgCAAIABgQIA1AAIABAQIgCAAIgBgHQgCgCgCgBQgDgCgEAAIgJAAIAAAxQAAAGABACQACACAEAAIACAAIAAACg");
	this.shape_431.setTransform(544.8,608.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgPAeQgGgEgCgGQgCgEAAgMIAAgZQAAgGgBgCQgCgCgEAAIgCAAIAAgCIAcAAIAAACIgCAAQgEAAgCACQgBACAAAGIAAAcIABAIQAAAFACADQACADADACQAEACAEAAQAGAAAGgDQAFgDACgEQABgFAAgKIAAgaIgBgIQgCgCgEAAIgCAAIAAgCIAXAAIAAACIgCAAQgEAAgCADQgBACAAAFIAAAaQAAAKgCAFQgCAGgGAEQgGAEgKAAQgJAAgGgEg");
	this.shape_432.setTransform(537.1,608.8);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgWAZQgKgKABgPQAAgPALgKQAIgIAMgBQANAAAKAKQAKAKAAAOQAAAPgKAKQgKAJgNABQgNAAgJgKgAgNgYQgIAJABAPQgBAPAIAKQAFAGAIAAQAJAAAGgHQAGgHAAgQQAAgQgGgJQgGgGgJAAQgIAAgFAGg");
	this.shape_433.setTransform(528.9,608.7);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgDAiIgHgCIgGgBIgBAAIgCAEIgBAAIAAgXIABAAQACAHACADQACAEAEACQAFACAEAAQAGAAAEgCQADgDAAgFIgBgFQgBgCgDgDIgKgGIgMgHIgFgGQgCgDAAgEQAAgIAFgEQAGgGAIAAQAFABAGACIADABIADgBIABgDIACAAIAAAXIgCAAQgBgHgCgEQgDgDgEgCQgEgDgEAAQgFAAgDAEQgDACAAAFQAAACACADQADAEAKAFQAKAFADACQADADACAEQACADAAAEQAAAIgGAFQgGAGgJAAIgEgBg");
	this.shape_434.setTransform(521.6,608.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AAPAiIgOgqIgOAqIgCAAIgUg2IgDgHIgCgDIgFgBIAAgCIAYAAIAAACIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIgBADIACAIIANAkIALgfIgCgFIgBgFIgDgEIgCgCIgCgBIgCAAIAAgCIAYAAIAAACIgBAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIACAJIANAjIAMgkIACgIIAAgCIgCgBIgFgBIAAgCIAUAAIAAACIgEABIgDADIgDAIIgTA1g");
	this.shape_435.setTransform(509.9,608.8);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgbAhIAAgCIACAAIAEgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIAAgHIAAgqQAAgGgBgBQgCgDgEAAIgCAAIAAgBIAxAAIABAPIgCAAQgBgGgBgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBgBgBAAIgGAAIgRAAIAAAZIANAAQAFAAACgBQADgDAAgFIACAAIAAAWIgCAAIgBgGIgDgDIgGgBIgNAAIAAAWIAAAGIABABIAEAAIAKAAIAIgBQADAAACgCIAHgJIACAAIgHAQg");
	this.shape_436.setTransform(501.1,608.7);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AAZAhIgrg0IAAAoQAAAGACACQABACAEAAIADAAIAAACIgXAAIAAgCIACAAQAEgBACgCQABgBAAgGIAAgtIgEgFIgFgBIgEgBIAAgBIASAAIAnAwIAAglQAAgGgBgCQgCgCgEAAIgCAAIAAgBIAXAAIAAABIgCAAQgEAAgCACQgBACAAAGIAAA2g");
	this.shape_437.setTransform(493.3,608.8);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgYAhIAAgCIACAAQAFAAACgCIABgIIAAgqIgBgGIgCgCQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBgBAAIgCAAIAAgBIAwAAIABAPIgCAAIgCgIIgFgCIgIgBIgNAAIAAAZIALAAQAEAAACgCQACgBAAgGIACAAIAAAWIgCAAIAAgGIgDgDIgFAAIgLAAIAAAUIABAHIABACIAEABIADAAIAAACg");
	this.shape_438.setTransform(482.4,608.7);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgWAZQgKgKAAgPQAAgPAMgKQAIgIAMgBQANAAAKAKQAKAKAAAOQAAAPgKAKQgKAJgNABQgNAAgJgKgAgOgYQgGAJAAAPQAAAPAGAKQAGAGAIAAQAJAAAGgHQAGgHAAgQQAAgQgGgJQgGgGgJAAQgIAAgGAGg");
	this.shape_439.setTransform(475.2,608.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgOAhIAAgCIADAAQAEAAACgDQABgBAAgGIAAgPIgSgbIgEgGIgFgDIgDgBIAAgBIAcAAIAAABIgBAAIgFABQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABIAEAGIAMAVIAOgUQADgEAAgCIgBgDIgCgCIgFgBIAAgBIAYAAIAAABIgBAAIgEABIgEAEIgGAHIgQAYIAAAQQAAAGACACQACACADAAIADAAIAAACg");
	this.shape_440.setTransform(463.8,608.7);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgNAhIAAgCIACAAQAEAAACgDQABgBAAgGIAAgxIgIAAIgGABQgDAAgCADQgCADAAAFIgCAAIABgQIA1AAIABAQIgCAAIgBgHQgCgCgCgBQgDgCgEAAIgJAAIAAAxQAAAGABACQACACAEAAIACAAIAAACg");
	this.shape_441.setTransform(456.2,608.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgNAhIAAgCIACAAQAEAAACgCIABgIIAAgqIAAgGIgCgCIgFgCIgCAAIAAgBIAbAAIAAABIgCAAQgEAAgCADQgBABAAAGIAAAqIAAAHIACACIAFABIACAAIAAACg");
	this.shape_442.setTransform(450.4,608.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgDAiIgHgCIgGgBIgBAAIgCAEIgBAAIAAgXIABAAQACAHACADQACAEAEACQAFACAEAAQAGAAAEgCQADgDAAgFIgBgFQgBgCgDgDIgKgGIgMgHIgFgGQgCgDAAgEQAAgIAFgEQAGgGAIAAQAFABAGACIADABIADgBIABgDIACAAIAAAXIgCAAQgBgHgCgEQgDgDgEgCQgEgDgEAAQgFAAgDAEQgDACAAAFQAAACACADQADAEAKAFQAKAFADACQADADACAEQACADAAAEQAAAIgGAFQgGAGgJAAIgEgBg");
	this.shape_443.setTransform(445,608.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AAQAhIgWgfIgEAAIgBAAIgCAAIAAATQAAAGACACQACACADAAIADAAIAAACIgdAAIAAgCIADAAQAEAAABgDQACgBAAgGIAAgqQAAgFgCgCQgCgDgDAAIgDAAIAAgBIAYAAQAKAAAFABQAFACAEAEQADAEAAAGQAAAGgEAEQgEAFgJABIAOATQAFAGAEACQADADAFAAIAAACgAgNgbIAAAbIACAAIABAAQAKAAADgEQAFgEAAgHQAAgFgEgFQgEgDgGAAIgHABg");
	this.shape_444.setTransform(438,608.7);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgbAhIAAgCIACAAIAEgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAABAAIAAgHIAAgqQAAgGgBgBQgCgDgEAAIgCAAIAAgBIAxAAIABAPIgCAAQAAgGgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAIgHAAIgRAAIAAAZIANAAQAFAAACgBQADgDABgFIABAAIAAAWIgBAAIgCgGIgDgDIgGgBIgNAAIAAAWIAAAGIABABIAEAAIAKAAIAJgBQACAAACgCIAHgJIACAAIgHAQg");
	this.shape_445.setTransform(430.5,608.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AAAAiIgYg4IgCgGIgEgCIgEgBIAAgCIAbAAIAAACIgGABIgCADQABADACAFIAPAmIAQgmIACgHIgBgDIgEgCIgCAAIAAgCIAVAAIAAACQgEAAgCACQgCACgCAFIgXA4g");
	this.shape_446.setTransform(422.9,608.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgNAhIAAgCIACAAQAEAAACgCIABgIIAAgqIAAgGIgCgCIgFgCIgCAAIAAgBIAbAAIAAABIgCAAQgEAAgCADQgBABAAAGIAAAqIAAAHIACACIAFABIACAAIAAACg");
	this.shape_447.setTransform(416.6,608.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AAZAhIgrg0IAAAoQAAAGACACQABACAEAAIADAAIAAACIgXAAIAAgCIACAAQAEgBACgCQABgBAAgGIAAgtIgEgFIgFgBIgEgBIAAgBIASAAIAnAwIAAglQAAgGgBgCQgCgCgEAAIgCAAIAAgBIAXAAIAAABIgCAAQgEAAgCACQgBACAAAGIAAA2g");
	this.shape_448.setTransform(410.2,608.8);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgPAeQgGgEgCgGQgCgEAAgMIAAgZQAAgGgBgCQgCgCgEAAIgCAAIAAgCIAcAAIAAACIgCAAQgEAAgCACQgBACAAAGIAAAcIABAIQAAAFACADQACADADACQAEACAEAAQAGAAAGgDQAFgDACgEQABgFAAgKIAAgaIgBgIQgCgCgEAAIgCAAIAAgCIAXAAIAAACIgCAAQgEAAgCADQgBACAAAFIAAAaQAAAKgCAFQgCAGgGAEQgGAEgKAAQgJAAgGgEg");
	this.shape_449.setTransform(402.1,608.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgcAhIAAgCIADAAIAEgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIABgHIAAgqQAAgGgBgBQgCgDgEAAIgDAAIAAgBIAzAAIAAAPIgBAAQgBgGgCgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBgBgBAAIgHAAIgRAAIAAAZIAOAAQAGAAACgBQACgDAAgFIACAAIAAAWIgCAAIgBgGIgDgDIgGgBIgOAAIAAAWIABAGIABABIAEAAIAKAAIAIgBQADAAACgCIAGgJIADAAIgGAQg");
	this.shape_450.setTransform(391,608.7);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AAGAhIAAgCIACAAQAEAAACgCQACgCAAgGIAAgUIgeAAIAAAUIAAAHIACACIAFABIACAAIAAACIgcAAIAAgCIACAAQAEAAACgCIABgIIAAgqIAAgGIgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgCAAIAAgBIAcAAIAAABIgCAAIgFABIgCADIAAAGIAAAUIAeAAIAAgUQAAgFgBgBIgCgCQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAgBgBAAIgCAAIAAgBIAcAAIAAABIgCAAIgEABIgCADQgBABAAAFIAAAqQAAAGABABIACACIAEABIACAAIAAACg");
	this.shape_451.setTransform(383.3,608.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgNAhIAAgCIACAAQAEAAACgDQABgBAAgGIAAgxIgIAAIgGABQgDAAgCADQgCADAAAFIgCAAIABgQIA1AAIABAQIgCAAIgBgHQgCgCgCgBQgDgCgEAAIgJAAIAAAxQAAAGABACQACACAEAAIACAAIAAACg");
	this.shape_452.setTransform(375.7,608.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425}]}).to({state:[{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425}]},81).wait(1));

	// Layer 87
	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#FFFF00").ss(2,1,1).p("AgTK8IAA15ArRK9IAA15ALSK9IAA16");
	this.shape_453.setTransform(240.2,203.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_453).wait(82));

	// Layer 9
	this.instance_18 = new lib.Tween4("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-161,53.1);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#0000FF").s().p("A83C+IAAl7MA5vAAAIAAF7g");
	this.shape_454.setTransform(-160.8,89.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_454,p:{x:-160.8,y:89.1}},{t:this.instance_18,p:{x:-161,y:53.1}}]}).to({state:[{t:this.shape_454,p:{x:-156.3,y:89.1}},{t:this.instance_18,p:{x:-156.5,y:53.1}}]},1).to({state:[{t:this.shape_454,p:{x:-151.8,y:89.1}},{t:this.instance_18,p:{x:-152,y:53.1}}]},1).to({state:[{t:this.shape_454,p:{x:-147.3,y:89.1}},{t:this.instance_18,p:{x:-147.5,y:53.1}}]},1).to({state:[{t:this.shape_454,p:{x:-142.8,y:89.2}},{t:this.instance_18,p:{x:-143,y:53.2}}]},1).to({state:[{t:this.shape_454,p:{x:-138.3,y:89.2}},{t:this.instance_18,p:{x:-138.5,y:53.2}}]},1).to({state:[{t:this.shape_454,p:{x:-133.8,y:89.2}},{t:this.instance_18,p:{x:-134,y:53.2}}]},1).to({state:[{t:this.shape_454,p:{x:-129.3,y:89.2}},{t:this.instance_18,p:{x:-129.5,y:53.2}}]},1).to({state:[{t:this.shape_454,p:{x:-124.8,y:89.2}},{t:this.instance_18,p:{x:-125,y:53.2}}]},1).to({state:[{t:this.shape_454,p:{x:-120.3,y:89.3}},{t:this.instance_18,p:{x:-120.5,y:53.3}}]},1).to({state:[{t:this.shape_454,p:{x:-115.8,y:89.3}},{t:this.instance_18,p:{x:-116,y:53.3}}]},1).to({state:[{t:this.shape_454,p:{x:-111.3,y:89.3}},{t:this.instance_18,p:{x:-111.6,y:53.3}}]},1).to({state:[{t:this.shape_454,p:{x:-106.8,y:89.3}},{t:this.instance_18,p:{x:-107.1,y:53.3}}]},1).to({state:[{t:this.shape_454,p:{x:-102.3,y:89.3}},{t:this.instance_18,p:{x:-102.6,y:53.3}}]},1).to({state:[{t:this.shape_454,p:{x:-97.8,y:89.3}},{t:this.instance_18,p:{x:-98.1,y:53.3}}]},1).to({state:[{t:this.shape_454,p:{x:-93.3,y:89.4}},{t:this.instance_18,p:{x:-93.6,y:53.4}}]},1).to({state:[{t:this.shape_454,p:{x:-88.8,y:89.4}},{t:this.instance_18,p:{x:-89.1,y:53.4}}]},1).to({state:[{t:this.shape_454,p:{x:-84.3,y:89.4}},{t:this.instance_18,p:{x:-84.6,y:53.4}}]},1).to({state:[{t:this.shape_454,p:{x:-79.8,y:89.4}},{t:this.instance_18,p:{x:-80.1,y:53.4}}]},1).to({state:[{t:this.shape_454,p:{x:-75.3,y:89.4}},{t:this.instance_18,p:{x:-75.6,y:53.4}}]},1).to({state:[{t:this.shape_454,p:{x:-70.8,y:89.5}},{t:this.instance_18,p:{x:-71.1,y:53.5}}]},1).to({state:[{t:this.shape_454,p:{x:-66.3,y:89.5}},{t:this.instance_18,p:{x:-66.6,y:53.5}}]},1).to({state:[{t:this.shape_454,p:{x:-61.8,y:89.5}},{t:this.instance_18,p:{x:-62.1,y:53.5}}]},1).to({state:[{t:this.shape_454,p:{x:-57.3,y:89.5}},{t:this.instance_18,p:{x:-57.6,y:53.5}}]},1).to({state:[{t:this.shape_454,p:{x:-52.8,y:89.5}},{t:this.instance_18,p:{x:-53.1,y:53.5}}]},1).to({state:[{t:this.shape_454,p:{x:-48.3,y:89.6}},{t:this.instance_18,p:{x:-48.6,y:53.6}}]},1).to({state:[{t:this.shape_454,p:{x:-43.8,y:89.6}},{t:this.instance_18,p:{x:-44.1,y:53.6}}]},1).to({state:[{t:this.shape_454,p:{x:-39.3,y:89.6}},{t:this.instance_18,p:{x:-39.6,y:53.6}}]},1).to({state:[{t:this.shape_454,p:{x:-34.8,y:89.6}},{t:this.instance_18,p:{x:-35.1,y:53.6}}]},1).to({state:[{t:this.shape_454,p:{x:-30.3,y:89.6}},{t:this.instance_18,p:{x:-30.6,y:53.6}}]},1).to({state:[{t:this.shape_454,p:{x:-25.8,y:89.7}},{t:this.instance_18,p:{x:-26.1,y:53.7}}]},1).to({state:[{t:this.shape_454,p:{x:-21.4,y:89.7}},{t:this.instance_18,p:{x:-21.6,y:53.7}}]},1).to({state:[{t:this.shape_454,p:{x:-16.9,y:89.7}},{t:this.instance_18,p:{x:-17.1,y:53.7}}]},1).to({state:[{t:this.shape_454,p:{x:-12.4,y:89.7}},{t:this.instance_18,p:{x:-12.6,y:53.7}}]},1).to({state:[{t:this.shape_454,p:{x:-7.9,y:89.7}},{t:this.instance_18,p:{x:-8.1,y:53.7}}]},1).to({state:[{t:this.shape_454,p:{x:-3.4,y:89.8}},{t:this.instance_18,p:{x:-3.6,y:53.8}}]},1).to({state:[{t:this.shape_454,p:{x:1.1,y:89.8}},{t:this.instance_18,p:{x:0.9,y:53.8}}]},1).to({state:[{t:this.shape_454,p:{x:5.6,y:89.8}},{t:this.instance_18,p:{x:5.4,y:53.8}}]},1).to({state:[{t:this.shape_454,p:{x:10.1,y:89.8}},{t:this.instance_18,p:{x:9.9,y:53.8}}]},1).to({state:[{t:this.shape_454,p:{x:14.6,y:89.8}},{t:this.instance_18,p:{x:14.4,y:53.8}}]},1).to({state:[{t:this.shape_454,p:{x:19.1,y:89.9}},{t:this.instance_18,p:{x:18.9,y:53.9}}]},1).to({state:[{t:this.shape_454,p:{x:23.6,y:89.9}},{t:this.instance_18,p:{x:23.4,y:53.9}}]},1).to({state:[{t:this.shape_454,p:{x:28.1,y:89.9}},{t:this.instance_18,p:{x:27.9,y:53.9}}]},1).to({state:[{t:this.shape_454,p:{x:32.6,y:89.9}},{t:this.instance_18,p:{x:32.4,y:53.9}}]},1).to({state:[{t:this.shape_454,p:{x:37.1,y:89.9}},{t:this.instance_18,p:{x:36.9,y:53.9}}]},1).to({state:[{t:this.shape_454,p:{x:41.6,y:89.9}},{t:this.instance_18,p:{x:41.4,y:53.9}}]},1).to({state:[{t:this.shape_454,p:{x:46.1,y:90}},{t:this.instance_18,p:{x:45.9,y:54}}]},1).to({state:[{t:this.shape_454,p:{x:50.6,y:90}},{t:this.instance_18,p:{x:50.4,y:54}}]},1).to({state:[{t:this.shape_454,p:{x:55.1,y:90}},{t:this.instance_18,p:{x:54.9,y:54}}]},1).to({state:[{t:this.shape_454,p:{x:59.6,y:90}},{t:this.instance_18,p:{x:59.4,y:54}}]},1).to({state:[{t:this.shape_454,p:{x:64.1,y:90}},{t:this.instance_18,p:{x:63.9,y:54}}]},1).to({state:[{t:this.shape_454,p:{x:68.6,y:90.1}},{t:this.instance_18,p:{x:68.3,y:54.1}}]},1).to({state:[{t:this.shape_454,p:{x:73.1,y:90.1}},{t:this.instance_18,p:{x:72.8,y:54.1}}]},1).to({state:[{t:this.shape_454,p:{x:77.6,y:90.1}},{t:this.instance_18,p:{x:77.3,y:54.1}}]},1).to({state:[{t:this.shape_454,p:{x:82.1,y:90.1}},{t:this.instance_18,p:{x:81.8,y:54.1}}]},1).to({state:[{t:this.shape_454,p:{x:86.6,y:90.1}},{t:this.instance_18,p:{x:86.3,y:54.1}}]},1).to({state:[{t:this.shape_454,p:{x:91.1,y:90.2}},{t:this.instance_18,p:{x:90.8,y:54.2}}]},1).to({state:[{t:this.shape_454,p:{x:95.6,y:90.2}},{t:this.instance_18,p:{x:95.3,y:54.2}}]},1).to({state:[{t:this.shape_454,p:{x:100.1,y:90.2}},{t:this.instance_18,p:{x:99.8,y:54.2}}]},1).to({state:[{t:this.shape_454,p:{x:104.6,y:90.2}},{t:this.instance_18,p:{x:104.3,y:54.2}}]},1).to({state:[{t:this.shape_454,p:{x:109.1,y:90.2}},{t:this.instance_18,p:{x:108.8,y:54.2}}]},1).to({state:[{t:this.shape_454,p:{x:113.6,y:90.3}},{t:this.instance_18,p:{x:113.3,y:54.3}}]},1).to({state:[{t:this.shape_454,p:{x:118.1,y:90.3}},{t:this.instance_18,p:{x:117.8,y:54.3}}]},1).to({state:[{t:this.shape_454,p:{x:122.6,y:90.3}},{t:this.instance_18,p:{x:122.3,y:54.3}}]},1).to({state:[{t:this.shape_454,p:{x:127.1,y:90.3}},{t:this.instance_18,p:{x:126.8,y:54.3}}]},1).to({state:[{t:this.shape_454,p:{x:131.6,y:90.3}},{t:this.instance_18,p:{x:131.3,y:54.3}}]},1).to({state:[{t:this.shape_454,p:{x:136.1,y:90.4}},{t:this.instance_18,p:{x:135.8,y:54.4}}]},1).to({state:[{t:this.shape_454,p:{x:140.6,y:90.4}},{t:this.instance_18,p:{x:140.3,y:54.4}}]},1).to({state:[{t:this.shape_454,p:{x:145.1,y:90.4}},{t:this.instance_18,p:{x:144.8,y:54.4}}]},1).to({state:[{t:this.shape_454,p:{x:149.6,y:90.4}},{t:this.instance_18,p:{x:149.3,y:54.4}}]},1).to({state:[{t:this.shape_454,p:{x:154.1,y:90.4}},{t:this.instance_18,p:{x:153.8,y:54.4}}]},1).to({state:[{t:this.shape_454,p:{x:158.5,y:90.5}},{t:this.instance_18,p:{x:158.3,y:54.5}}]},1).to({state:[{t:this.shape_454,p:{x:163,y:90.5}},{t:this.instance_18,p:{x:162.8,y:54.5}}]},1).to({state:[{t:this.shape_454,p:{x:167.5,y:90.5}},{t:this.instance_18,p:{x:167.3,y:54.5}}]},1).to({state:[{t:this.shape_454,p:{x:172,y:90.5}},{t:this.instance_18,p:{x:171.8,y:54.5}}]},1).to({state:[{t:this.shape_454,p:{x:176.5,y:90.5}},{t:this.instance_18,p:{x:176.3,y:54.5}}]},1).to({state:[{t:this.shape_454,p:{x:181,y:90.5}},{t:this.instance_18,p:{x:180.8,y:54.5}}]},1).to({state:[{t:this.shape_454,p:{x:185.5,y:90.6}},{t:this.instance_18,p:{x:185.3,y:54.6}}]},1).to({state:[{t:this.shape_454,p:{x:190,y:90.6}},{t:this.instance_18,p:{x:189.8,y:54.6}}]},1).to({state:[{t:this.shape_454,p:{x:194.5,y:90.6}},{t:this.instance_18,p:{x:194.3,y:54.6}}]},1).to({state:[{t:this.shape_454,p:{x:199,y:90.6}},{t:this.instance_18,p:{x:198.8,y:54.6}}]},1).to({state:[{t:this.shape_454,p:{x:199,y:90.6}},{t:this.instance_18,p:{x:198.8,y:54.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,313.3,949.8,613.4);
// library properties:
lib.properties = {
	id: 'A1E3B62069753F429C67ADA65C75D63E',
	width: 600,
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
an.compositions['A1E3B62069753F429C67ADA65C75D63E'] = {
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