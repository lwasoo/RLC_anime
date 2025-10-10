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



(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" from PHYSCLIPS", "11px 'Verdana'", "#0000FF");
	this.text.lineHeight = 13;
	this.text.lineWidth = 111;
	this.text.parent = this;
	this.text.setTransform(2,2,1,0.995);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,17.2);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#990000").ss(2,1,1).p("AgYgxIAxAxIgwAyIgBhc");
	this.shape.setTransform(35.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgNAbIAAgBQgBgKABgKIAAgJQAAgHgDgHIABgJIABgBQAFgEAFAFIAFAHQAFAHAHAFIADADQACAEgEAEIgFAEQgBAMgJAIQgCACgEAAQgDAAgDgDg");
	this.shape_1.setTransform(35.4,-0.1);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25.6,0.1,1,1,-90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACPAAIgjAAQgSAAgSAAIjWAA");
	this.shape_2.setTransform(14.6,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#990000").ss(1,1,1).p("AAyAAIhjAB");
	this.shape_3.setTransform(33.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-6,40.6,12);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.8,-0.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9900FF").s().p("AAAAqQgQAAgNgNQgMgMAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMAMQgNANgRAAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,-4.2,8.4,8.4);


// stage content:
(lib.ac_resistor2b_Canvas_new = function(mode,startPosition,loop) {
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
		
		this.Physclips.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.animations.physics.unsw.edu.au/", "_blank");
		}
		
		this.button_stop.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			var f = this.currentFrame;
			this.gotoAndStop(f);
		}
	}
	this.frame_79 = function() {
		this.stop();
		
		this.button_rew.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndPlay(1);
		}
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(1));

	// Physclips_logo
	this.Physclips = new lib.Symbol40();
	this.Physclips.parent = this;
	this.Physclips.setTransform(534.4,227.3,1,1,0,0,0,57.5,8.6);
	new cjs.ButtonHelper(this.Physclips, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Physclips).wait(80));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("AnaAAIO1AA");
	this.shape.setTransform(527.5,235.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

	// UNSW logo
	this.text = new cjs.Text("THE UNIVERSITY OF NEW SOUTH WALES", "11px 'Arial'");
	this.text.lineHeight = 14;
	this.text.parent = this;
	this.text.setTransform(353.2,243.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({font:"11px 'Times New Roman'",lineHeight:14.4,lineWidth:215},0).wait(78).to({font:"11px 'Arial'",lineHeight:14.2,lineWidth:222},0).wait(1));

	// buttons
	this.button_stop = new lib.Stop();
	this.button_stop.parent = this;
	this.button_stop.setTransform(474.1,186.4);
	new cjs.ButtonHelper(this.button_stop, 0, 1, 2, false, new lib.Stop(), 3);

	this.button_play = new lib.Play();
	this.button_play.parent = this;
	this.button_play.setTransform(474.1,158.5);
	new cjs.ButtonHelper(this.button_play, 0, 1, 2, false, new lib.Play(), 3);

	this.button_rew = new lib.Rewind();
	this.button_rew.parent = this;
	this.button_rew.setTransform(474,158.1);
	new cjs.ButtonHelper(this.button_rew, 0, 1, 2, false, new lib.Rewind(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_play},{t:this.button_stop}]}).to({state:[{t:this.button_play},{t:this.button_stop}]},1).to({state:[{t:this.button_rew}]},78).wait(1));

	// Symbols
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAfA5IgPgYIgLgPIgHgIIgGgDIgIgBIgSAAIAAAzIgQAAIAAhxIAzAAQAPAAAHADQAIADAGAIQAEAIAAAJQAAAMgIAJQgHAHgRACIAJAGQAHAGAFAJIAUAfgAgigGIAgAAQAKAAAFgCQAHgCACgFQADgEAAgGQAAgIgFgFQgHgGgMAAIgjAAg");
	this.shape_1.setTransform(172.9,129.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAqIAAgRIAPAAIAAARgAgHgZIAAgPIAPAAIAAAPg");
	this.shape_2.setTransform(160,131.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWArIAAhSIANAAIAAAMQAFgJAEgCQADgDAFgBQAHAAAHAFIgEANQgFgDgFAAQgFAAgDADQgDADgCAEQgCAIAAAJIAAArg");
	this.shape_3.setTransform(155.7,131.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbAgQgLgLAAgVQAAgWANgLQALgKAOAAQARAAALAMQALALAAAUQAAAPgFAJQgFAJgJAGQgJAEgLAAQgQAAgLgLgAgRgXQgGAIAAAPQAAAQAGAIQAHAIAKAAQAKAAAHgIQAHgIAAgQQAAgPgHgHQgHgJgKABQgKAAgHAHg");
	this.shape_4.setTransform(147.9,131.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBA2QgFgCgBgEQgCgEAAgNIAAguIgKAAIAAgLIAKAAIAAgVIANgJIAAAeIAOAAIAAALIgOAAIAAAvQAAAGABABQAAABAAAAQAAABABAAQAAABAAAAQABAAAAAAIAFACIAGgBIACANIgLAAQgHAAgDgCg");
	this.shape_5.setTransform(141.3,129.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAkQgIgGgDgOIAPgBQAAAIAGAEQAFAFAJAAQAJAAAFgEQAFgEAAgGQAAgEgEgDQgDgCgMgDQgOgEgGgCQgGgCgDgGQgDgEAAgHQAAgFADgEQACgFAEgEQADgCAGgBQAGgCAHgBQAIABAIADQAHADAEAEQADAFABAIIgNACQgCgHgEgDQgFgEgHAAQgJAAgFADQgDADAAAFIABAFIAGAEIALADQAPAEAGADQAGACADAEQADAFABAHQAAAHgFAHQgEAFgHAEQgJADgJAAQgQABgIgIg");
	this.shape_6.setTransform(135,131.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA5IAAhSIANAAIAABSgAgGgoIAAgQIANAAIAAAQg");
	this.shape_7.setTransform(129.2,129.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAkQgIgGgCgOIANgBQABAIAGAEQAFAFAJAAQAJAAAFgEQAFgEAAgGQAAgEgFgDQgCgCgLgDQgPgEgGgCQgGgCgDgGQgDgEAAgHQAAgFACgEQADgFAEgEQADgCAGgBQAGgCAGgBQAJABAHADQAIADAEAEQADAFABAIIgNACQgCgHgEgDQgFgEgHAAQgKAAgEADQgDADAAAFIABAFIAFAEIAMADQAPAEAGADQAFACAEAEQADAFAAAHQAAAHgEAHQgEAFgHAEQgJADgJAAQgPABgJgIg");
	this.shape_8.setTransform(123.4,131.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbAgQgKgLAAgVQAAgTAKgMQALgMAQAAQARAAALAMQAKALAAAUIAAAEIg9AAQABANAHAHQAHAIAJAAQAIAAAFgEQAGgEADgJIAPABQgEAOgJAGQgJAIgPgBQgRAAgLgLgAgPgZQgGAHgBALIAtAAQgBgLgEgEQgHgJgKAAQgJAAgHAGg");
	this.shape_9.setTransform(115,131.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAfA5IgPgYIgLgPIgHgIIgGgDIgIgBIgSAAIAAAzIgPAAIAAhxIAyAAQAPAAAHADQAJADAFAIQAEAIAAAJQAAAMgIAJQgHAHgRACIAJAGQAGAGAHAJIATAfgAgigGIAgAAQAKAAAGgCQAFgCADgFQADgEAAgGQAAgIgFgFQgHgGgMAAIgjAAg");
	this.shape_10.setTransform(105.3,129.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#990000").ss(2,1,1).p("Aj0AIIAAhkIHaAAIAAC5InaAAgAl2AIICCAAAD1ACICCAA");
	this.shape_11.setTransform(54,130.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(80));

	// Layer 97
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#990000").ss(2,1,1).p("AAZgxIgxAxIAwAxIABhb");
	this.shape_12.setTransform(431.7,101.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AACAcQgJgIgBgMIgFgEQgEgEACgEIADgDQAHgFAFgHIAFgHQAFgFAFAEIABABIABAJQgDAHAAAHIAAAJQABAKgBAKIAAABQgDADgDAAQgEAAgCgCg");
	this.shape_13.setTransform(431.9,101.6);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(441.7,101.8,1,1,0,90,-90);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#990000").ss(1,1,1).p("AgxAAIBjAA");
	this.shape_14.setTransform(433.4,101.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AiOAAIAjAAQATAAARAAIDWAA");
	this.shape_15.setTransform(452.7,101.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.instance},{t:this.shape_13},{t:this.shape_12}]},79).wait(1));

	// Layer 98
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADIhAIAACAImPAAIAAiAg");
	this.shape_16.setTransform(445.8,99.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjHBAIAAh/IGPAAIAAB/g");
	this.shape_17.setTransform(445.8,99.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},79).wait(1));

	// Layer 95
	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(466.7,101.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-898.2,x:466.8},79).wait(1));

	// Layer 90
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AGjAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIACAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAErAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgACzAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAA7AFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAg8AFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAgAi0AFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAksAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAmkAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_18.setTransform(509.3,101.8);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(6).to({_off:false},0).to({_off:true},9).wait(6).to({_off:false},0).to({_off:true},9).wait(5).to({_off:false},0).wait(45));

	// Layer 93
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(1,1,1).p("AipAAIFOAAIAFAA");
	this.shape_19.setTransform(448.7,111.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AikBuIgFAAIAAjbIFTAAIAADbg");
	this.shape_20.setTransform(448.2,100.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19}]},39).to({state:[]},1).wait(40));

	// Layer 91
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AGjAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIACAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAgAErAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgACzAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAA7AFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAg8AFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAAAAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQAAAAAAAAgAi0AFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAksAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAgAmkAFQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIA8AAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_21.setTransform(509.3,101.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).to({_off:true},6).wait(9).to({_off:false},0).to({_off:true},6).wait(9).to({_off:false},0).to({_off:true},5).wait(45));

	// Markers
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#990000").ss(1.5,1,1).p("AAAghIAABD");
	this.shape_22.setTransform(467.5,98.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgXIAAAv");
	this.shape_23.setTransform(466,99.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAzIAAhl");
	this.shape_24.setTransform(466,96.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#990000").ss(1.5,1,1).p("AAABGIAAiL");
	this.shape_25.setTransform(467.5,94.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1.5,1,1).p("AAABKIAAiT");
	this.shape_26.setTransform(466,94.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#990000").ss(1.5,1,1).p("AAABmIAAjL");
	this.shape_27.setTransform(467.5,91.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1.5,1,1).p("AAABeIAAi7");
	this.shape_28.setTransform(466,92.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#990000").ss(1.5,1,1).p("AAACCIAAkD");
	this.shape_29.setTransform(467.5,88.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1.5,1,1).p("AAABvIAAjd");
	this.shape_30.setTransform(466,90.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#990000").ss(1.5,1,1).p("AAACZIAAkx");
	this.shape_31.setTransform(467.5,86.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB9IAAj5");
	this.shape_32.setTransform(466,89.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#990000").ss(1.5,1,1).p("AAACrIAAlV");
	this.shape_33.setTransform(467.5,84.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1.5,1,1).p("AAACHIAAkN");
	this.shape_34.setTransform(466,88.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#990000").ss(1.5,1,1).p("AAAC5IAAlx");
	this.shape_35.setTransform(467.5,83);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#990000").ss(1.5,1,1).p("AAAjBIAAGE");
	this.shape_36.setTransform(467.5,82.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiNIAAEb");
	this.shape_37.setTransform(466,87.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#990000").ss(1.5,1,1).p("AAAi8IAAF5");
	this.shape_38.setTransform(467.4,82.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiJIAAET");
	this.shape_39.setTransform(465.9,87.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1.5,1,1).p("AAACCIAAkD");
	this.shape_40.setTransform(465.9,88.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#990000").ss(1.5,1,1).p("AAACyIAAlk");
	this.shape_41.setTransform(467.4,83.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB3IAAjt");
	this.shape_42.setTransform(465.9,89.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#990000").ss(1.5,1,1).p("AAACiIAAlD");
	this.shape_43.setTransform(467.4,85.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1.5,1,1).p("AAABnIAAjN");
	this.shape_44.setTransform(465.9,91.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#990000").ss(1.5,1,1).p("AAACMIAAkX");
	this.shape_45.setTransform(467.4,87.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1.5,1,1).p("AAABSIAAij");
	this.shape_46.setTransform(466,93.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#990000").ss(1.5,1,1).p("AAABwIAAjf");
	this.shape_47.setTransform(467.5,90.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA5IAAhx");
	this.shape_48.setTransform(466,95.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#990000").ss(1.5,1,1).p("AAABOIAAib");
	this.shape_49.setTransform(467.5,93.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgbIAAA3");
	this.shape_50.setTransform(466,98.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#990000").ss(1.5,1,1).p("AAAglIAABL");
	this.shape_51.setTransform(467.5,97.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAZIAAgx");
	this.shape_52.setTransform(466,104.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#990000").ss(1.5,1,1).p("AAAApIAAhR");
	this.shape_53.setTransform(467.5,106.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgxIAABj");
	this.shape_54.setTransform(466,107);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#990000").ss(1.5,1,1).p("AAAhJQAABJAABK");
	this.shape_55.setTransform(467.5,109.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhHIAACP");
	this.shape_56.setTransform(466,109.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#990000").ss(1.5,1,1).p("AAAhmQAABmAABn");
	this.shape_57.setTransform(467.5,112.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhaIAAC2");
	this.shape_58.setTransform(466,111.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#990000").ss(1.5,1,1).p("AAAh/QAAB/AACB");
	this.shape_59.setTransform(467.5,114.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhrIAADX");
	this.shape_60.setTransform(466,112.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#990000").ss(1.5,1,1).p("AAAiVQAACVAACW");
	this.shape_61.setTransform(467.5,117);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh4IAADx");
	this.shape_62.setTransform(466,114);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#990000").ss(1.5,1,1).p("AAAimQAACmAACn");
	this.shape_63.setTransform(467.5,118.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiCIAAEF");
	this.shape_64.setTransform(466,115.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#990000").ss(1.5,1,1).p("AAAizQAACzAAC0");
	this.shape_65.setTransform(467.5,120);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#990000").ss(1.5,1,1).p("AAAC+QAAi+AAi9");
	this.shape_66.setTransform(467.5,121);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(1.5,1,1).p("AAACKIAAkT");
	this.shape_67.setTransform(466,115.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiDIAAEI");
	this.shape_68.setTransform(466,115.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#990000").ss(1.5,1,1).p("AAAi1QAAC1AAC2");
	this.shape_69.setTransform(467.5,120.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh6IAAD1");
	this.shape_70.setTransform(466,114.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#990000").ss(1.5,1,1).p("AAAipQAACpAACq");
	this.shape_71.setTransform(467.5,119);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhtIAADb");
	this.shape_72.setTransform(466,112.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#990000").ss(1.5,1,1).p("AAAiWQAACWAACX");
	this.shape_73.setTransform(467.5,117.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhcIAAC5");
	this.shape_74.setTransform(466,111.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#990000").ss(1.5,1,1).p("AAAh/QAAB/AACA");
	this.shape_75.setTransform(467.5,114.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhGIAACN");
	this.shape_76.setTransform(466,109.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#990000").ss(1.5,1,1).p("AAAhiQAABiAABj");
	this.shape_77.setTransform(467.5,111.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgtIAABb");
	this.shape_78.setTransform(466,106.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#990000").ss(1.5,1,1).p("AAAhAQAABAAABB");
	this.shape_79.setTransform(467.5,108.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#990000").ss(1.5,1,1).p("AAAAZIAAgx");
	this.shape_80.setTransform(467.5,104.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAQIAAgg");
	this.shape_81.setTransform(466,103.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#990000").ss(1.5,1,1).p("AAAgrIAABX");
	this.shape_82.setTransform(467.5,97.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1.5,1,1).p("AAAA7IAAh1");
	this.shape_83.setTransform(466,95.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#990000").ss(1.5,1,1).p("AAABUIAAin");
	this.shape_84.setTransform(467.5,93.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1.5,1,1).p("AAABVIAAip");
	this.shape_85.setTransform(465.9,93.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#990000").ss(1.5,1,1).p("AAAB2IAAjs");
	this.shape_86.setTransform(467.4,89.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(1.5,1,1).p("AAABqIAAjT");
	this.shape_87.setTransform(465.9,91);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#990000").ss(1.5,1,1).p("AAACSIAAkj");
	this.shape_88.setTransform(467.4,86.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB7IAAj1");
	this.shape_89.setTransform(465.9,89.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#990000").ss(1.5,1,1).p("AAACoIAAlP");
	this.shape_90.setTransform(467.4,84.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(1.5,1,1).p("AAACGIAAkL");
	this.shape_91.setTransform(465.9,88.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#990000").ss(1.5,1,1).p("AAAC3IAAlt");
	this.shape_92.setTransform(467.4,83.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiLIAAEX");
	this.shape_93.setTransform(465.9,87.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#990000").ss(1.5,1,1).p("AAAi+IAAF9");
	this.shape_94.setTransform(467.4,82.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#990000").ss(1.5,1,1).p("AAACpIAAlR");
	this.shape_95.setTransform(467.4,84.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1.5,1,1).p("AAABuIAAjb");
	this.shape_96.setTransform(465.9,90.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#990000").ss(1.5,1,1).p("AAACWIAAkr");
	this.shape_97.setTransform(467.4,86.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(1.5,1,1).p("AAABcIAAi3");
	this.shape_98.setTransform(465.9,92.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#990000").ss(1.5,1,1).p("AAAB+IAAj7");
	this.shape_99.setTransform(467.4,88.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1.5,1,1).p("AAABGIAAiL");
	this.shape_100.setTransform(466,94.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#990000").ss(1.5,1,1).p("AAABhIAAjA");
	this.shape_101.setTransform(467.5,91.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAsIAAhX");
	this.shape_102.setTransform(466,97.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#990000").ss(1.5,1,1).p("AAAA+IAAh7");
	this.shape_103.setTransform(467.5,95.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#990000").ss(1.5,1,1).p("AAAgWIAAAt");
	this.shape_104.setTransform(467.5,99.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgNIAAAb");
	this.shape_105.setTransform(466,100.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgqIAABV");
	this.shape_106.setTransform(466,106.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#990000").ss(1.5,1,1).p("AAAg9QAAA9AAA+");
	this.shape_107.setTransform(467.5,108.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhDIAACI");
	this.shape_108.setTransform(466,108.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#990000").ss(1.5,1,1).p("AAAhfQAABfAABg");
	this.shape_109.setTransform(467.5,111.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhZIAACz");
	this.shape_110.setTransform(466,111);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#990000").ss(1.5,1,1).p("AAAh8QAAB8AAB9");
	this.shape_111.setTransform(467.5,114.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#990000").ss(1.5,1,1).p("AAAiUQAACUAACV");
	this.shape_112.setTransform(467.5,116.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1.5,1,1).p("AAAh5IAADz");
	this.shape_113.setTransform(466,114.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#990000").ss(1.5,1,1).p("AAAinQAACnAACo");
	this.shape_114.setTransform(467.5,118.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1.5,1,1).p("AAAiDIAAEH");
	this.shape_115.setTransform(466,115.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#990000").ss(1.5,1,1).p("AAAi0QAAC0AAC1");
	this.shape_116.setTransform(467.5,120.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#990000").ss(1.5,1,1).p("AAAiXQAACXAACY");
	this.shape_117.setTransform(467.5,117.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhfIAAC/");
	this.shape_118.setTransform(466,111.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#990000").ss(1.5,1,1).p("AAAiEQAACEAACF");
	this.shape_119.setTransform(467.5,115.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1.5,1,1).p("AAAhOIAACd");
	this.shape_120.setTransform(466,109.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#990000").ss(1.5,1,1).p("AAAhtQAABtAABu");
	this.shape_121.setTransform(467.5,113);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1.5,1,1).p("AAAg7IAAB3");
	this.shape_122.setTransform(466,108);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#990000").ss(1.5,1,1).p("AAAhTQAABTAABU");
	this.shape_123.setTransform(467.5,110.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1.5,1,1).p("AAAglIAABL");
	this.shape_124.setTransform(466,105.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#990000").ss(1.5,1,1).p("AAAg2QAAA2AAA3");
	this.shape_125.setTransform(467.5,107.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(1.5,1,1).p("AAAAqIAAhT");
	this.shape_126.setTransform(466,97.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#990000").ss(1.5,1,1).p("AAAA9QAAg9AAg8");
	this.shape_127.setTransform(467.5,95.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(1.5,1,1).p("AAABDIAAiF");
	this.shape_128.setTransform(466,94.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#990000").ss(1.5,1,1).p("AAABeQAAheAAhd");
	this.shape_129.setTransform(467.5,92.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(1.5,1,1).p("AAABZIAAiw");
	this.shape_130.setTransform(466,92.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#990000").ss(1.5,1,1).p("AAAB7QAAh7AAh6");
	this.shape_131.setTransform(467.5,89.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#990000").ss(1.5,1,1).p("AAACTQAAiTAAiR");
	this.shape_132.setTransform(467.5,86.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB4IAAjv");
	this.shape_133.setTransform(466,89.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#990000").ss(1.5,1,1).p("AAACmQAAimAAil");
	this.shape_134.setTransform(467.5,84.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(1.5,1,1).p("AAACDIAAkF");
	this.shape_135.setTransform(466,88.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#990000").ss(1.5,1,1).p("AAAC0QAAi0AAiz");
	this.shape_136.setTransform(467.5,83.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#990000").ss(1.5,1,1).p("AAAi8QAAC8AAC+");
	this.shape_137.setTransform(467.5,82.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#990000").ss(1.5,1,1).p("AAAC1IAAlp");
	this.shape_138.setTransform(467.4,83.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(1.5,1,1).p("AAAB5IAAjy");
	this.shape_139.setTransform(465.9,89.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#990000").ss(1.5,1,1).p("AAAClIAAlJ");
	this.shape_140.setTransform(467.4,85);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(1.5,1,1).p("AAABpIAAjQ");
	this.shape_141.setTransform(465.9,91.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#990000").ss(1.5,1,1).p("AAACPIAAkd");
	this.shape_142.setTransform(467.4,87.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(1.5,1,1).p("AAABTIAAil");
	this.shape_143.setTransform(466,93.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#990000").ss(1.5,1,1).p("AAABzIAAjl");
	this.shape_144.setTransform(467.5,90);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#990000").ss(1.5,1,1).p("AAABRIAAih");
	this.shape_145.setTransform(467.5,93.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1.5,1,1).p("AAAgaIAAA0");
	this.shape_146.setTransform(466,98.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#990000").ss(1.5,1,1).p("AAAgoIAABR");
	this.shape_147.setTransform(467.5,97.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32,p:{x:466}}]},1).to({state:[{t:this.shape_35},{t:this.shape_34,p:{x:466,y:88.1}}]},1).to({state:[{t:this.shape_37,p:{x:466}},{t:this.shape_36}]},1).to({state:[{t:this.shape_39,p:{x:465.9}},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60,p:{y:112.7}}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72,p:{y:112.9}}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[]},1).to({state:[{t:this.shape_82},{t:this.shape_50}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87,p:{x:465.9}}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_94},{t:this.shape_37,p:{x:465.9}}]},1).to({state:[{t:this.shape_92},{t:this.shape_34,p:{x:465.9,y:88}}]},1).to({state:[{t:this.shape_95},{t:this.shape_32,p:{x:465.9}}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105,p:{skewX:0,y:100.2}},{t:this.shape_104,p:{skewX:0,y:99.3}}]},1).to({state:[{t:this.shape_104,p:{skewX:180,y:104.3}},{t:this.shape_105,p:{skewX:180,y:103.4}}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_112},{t:this.shape_60,p:{y:112.8}}]},1).to({state:[{t:this.shape_114},{t:this.shape_113,p:{y:114.1}}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_114},{t:this.shape_113,p:{y:114.2}}]},1).to({state:[{t:this.shape_117},{t:this.shape_72,p:{y:113}}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_104,p:{skewX:180,y:104.3}},{t:this.shape_105,p:{skewX:180,y:103.4}}]},1).to({state:[{t:this.shape_105,p:{skewX:0,y:100.2}},{t:this.shape_104,p:{skewX:0,y:99.3}}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_132},{t:this.shape_87,p:{x:466}}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_39,p:{x:466}},{t:this.shape_137}]},1).to({state:[{t:this.shape_94},{t:this.shape_37,p:{x:465.9}}]},1).to({state:[{t:this.shape_138},{t:this.shape_91}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_144},{t:this.shape_143}]},1).to({state:[{t:this.shape_145},{t:this.shape_48}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[]},1).wait(1));

	// Layer 96
	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgDGJQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDERQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDCaQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAgDAhQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg7QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA7QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDhWQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBgAgDjNQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAgDlGQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_148.setTransform(466.8,57.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_148).wait(80));

	// Layer 15
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(554.8,101.8,1,1,-90);

	this.instance_3 = new lib.Symbol1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(467,15.1,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(80));

	// Layer 21
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AARAnIgYgkIgFAAIAAAWQAAAGABACIADADIAHABIAAACIgoAAIAAgCIAIgBIACgDIABgIIAAgxIgBgIIgCgDIgIgBIAAgCIAkAAQANAAAHACQAGACAFAFQAEAGAAAHQAAAIgGAGQgEACgHACIASAaIAFAHIAGACIAAACgAgMAAIAEAAQAIAAACgBQAEgCADgDQACgEAAgGQAAgJgEgEQgEgFgJAAIgGAAg");
	this.shape_149.setTransform(105.2,171.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AARAbIAAgBQADgBACgCQABgBAAgGIAAgWIAAgJIgCgDIgDgBQgDAAgCACIgFAFIAAAcQAAAGABABQABACAEABIAAABIgbAAIAAgBIADgBIACgDIABgGIAAgWIgBgJIgCgDIgCgBIgFABIgFAGIAAAcQAAAGABACQAAAAABAAQAAABABAAQAAAAABAAQABAAAAABIAAABIgbAAIAAgBQABgBAAAAQABAAABAAQAAAAABgBQAAAAABAAQABgCAAgGIAAgdQAAgHgBgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIAAgCIAWAAIAAAHQAEgFAEgCQAEgCAEAAQAFABACACQAEACACAFQAFgFAEgCQAEgCAFgBQAFABAEACQADADABADIABANIAAAVQAAAGACACQAAAAAAAAQABABAAAAQABAAAAAAQABAAABABIAAABg");
	this.shape_150.setTransform(96,173);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgCA9IgpheQgHgRgDgDQgCgDgHgBIAAgDIA5AAIAAADIgCAAQgIAAgDACQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIABAEIAFALIAYA7IAYg0IAFgNIABgFQAAgDgCgCQgBgCgDgBQgDgCgHAAIAAgDIAnAAIAAADQgGABgFAGQgEAFgHAQIgpBag");
	this.shape_151.setTransform(84.5,168.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AANAeIgSgbIgEAAIAAARQAAAFABABIACACIAFABIAAABIgeAAIAAgBIAGgBIACgCIAAgGIAAgmIAAgHIgCgCIgGAAIAAgCIAbAAQAKAAAGACQAEABAEAEQADAEAAAGQAAAGgEAFQgDABgGACIAOAUIAFAFIADACIAAABgAgJAAIADAAIAIAAQADgCACgDQABgDAAgEQAAgHgDgDQgDgEgGAAIgFAAg");
	this.shape_152.setTransform(36.5,162.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgBAhIgVgxIgGgLQgCgCgDAAIAAgDIAhAAIAAADQAAAAAAAAQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAQAAADADAHIAKAXIAIgUQAEgJAAgEQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgFgBIAAgDIAVAAIAAADQgDAAgCACQgCACgEAIIgVAyg");
	this.shape_153.setTransform(29.6,161.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgKQAIgJALAAQAKAAAHAIQAHAIABAQIgiAAQAAAMAGAHQAEAGAHgBQAEAAADgCIAHgIIADABQgGALgGAEQgGAFgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgDAAgCADg");
	this.shape_154.setTransform(398.5,222.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAVAhIAAgDQAEAAACgCQABgCAAgHIAAgaIAAgLIgDgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDACIgGAGIAAAiQgBAHACACQACACAEAAIAAADIghAAIAAgDQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIACgCIABgIIAAgaIgBgLIgDgEQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIgFABIgHAHIAAAiQAAAHACACQABACAEAAIAAADIghAAIAAgDQAEAAACgCQABgBAAgIIAAgjQAAgHgBgCQgBgCgFAAIAAgDIAaAAIAAAIQAGgFAEgDQAFgCAFAAQAGAAADADQAFADACAGQAFgHAFgCQAFgDAFAAQAHAAAEADQAEADACAFQABAFAAAKIAAAZQAAAIABABQACACAEAAIAAADg");
	this.shape_155.setTransform(389.6,222.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgBgEgBIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgEAEAAQAEAAADAEQADADAAAEQAAAEgDADQgDAEgEAAQgEAAgDgEg");
	this.shape_156.setTransform(381.8,221.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgGApQgEgEgBgEIgBgMIAAgiIgIAAIAAgCQAIgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIACACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_157.setTransform(377.5,221.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#990000").ss(1,1,1).p("AAAjAIABGB");
	this.shape_158.setTransform(61.1,188.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(1,1,1).p("ABGhFIiLCL");
	this.shape_159.setTransform(71,177.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]}).wait(80));

	// Layer 20
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AARAbIAAgCQAEAAABgCQABgCAAgFIAAgWIgBgJIgBgDIgDgBQgCAAgDACIgFAFIAAAcQAAAFABACQABACAEAAIAAACIgbAAIAAgCIADgBIADgCIAAgGIAAgWIAAgJIgDgDIgDgBIgDABIgGAGIAAAcQgBAFACACQAAABABAAQAAAAABABQAAAAABAAQABAAABAAIAAACIgcAAIAAgCQABAAAAAAQABAAABAAQAAgBABAAQAAAAABgBQAAgBAAgGIAAgdQAAgGAAgCQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIAAgCIAWAAIAAAHQAEgFAEgBQAEgDAEAAQAFAAADADQADADACAEQAEgFAEgCQAFgDAEAAQAGAAADADQADACACAEIABANIAAAVQAAAGABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIAAACg");
	this.shape_160.setTransform(90.5,31);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgXAuIAAgCIADAAQAEAAACgCIADgDQABgCAAgHIAAg8QAAgHgBgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBIgGgBIgDAAIAAgCIAvAAIAAACIgDAAQgEAAgDACQAAAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABQgBABAAAHIAAA8QAAAIABABQAAABAAAAQAAABABAAQAAAAABABQAAAAABAAQACACAEAAIADAAIAAACg");
	this.shape_161.setTransform(82.8,27.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgQAvIAAgCQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgBgEgBIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAACgAgHgdQgDgDAAgEQAAgEADgDQADgEAEAAQAEAAADAEQADADAAAEQAAAEgDADQgDAEgEAAQgEAAgDgEg");
	this.shape_162.setTransform(28.1,15.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgUAXQgGgJAAgNQAAgPAJgJQAIgKALAAQAKAAAHAIQAHAIABAQIgiAAQAAAMAGAHQAEAGAHgBQAEAAADgCIAHgIIADABQgGALgGAEQgGAFgIAAQgOAAgHgLgAgEgZQgEAGAAALIAAACIASAAIgBgPQgCgEgCgCQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQgDAAgCAEg");
	this.shape_163.setTransform(398.5,77.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AAVAhIAAgDQAEAAACgCQABgCAAgHIAAgaIAAgMIgDgDQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgCAAgDACIgGAHIAAAhQgBAHACACQACACAEAAIAAADIghAAIAAgDQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIACgCIABgIIAAgaIgBgMIgDgDQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAIgFABIgHAIIAAAhQAAAHACACQABACAEAAIAAADIghAAIAAgDQAEAAACgCQABgBAAgIIAAgjQAAgHgBgCQgBgCgFgBIAAgCIAaAAIAAAIQAGgFAEgDQAFgCAFAAQAGAAADADQAFADACAGQAFgHAFgCQAFgDAFAAQAHAAAEADQAEADACAFQABAFAAAKIAAAZQAAAIABABQACACAEAAIAAADg");
	this.shape_164.setTransform(389.6,77.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgQAwIAAgDQAEAAACgDQABgBAAgHIAAgkQAAgHgBgCQgCgCgEAAIAAgCIAZAAIAAAxQAAAHACACQACACAEAAIAAADgAgHgdQgDgDAAgEQAAgEADgDQADgDAEgBQAEABADADQADADAAAEQAAAEgDADQgDADgEABQgEgBgDgDg");
	this.shape_165.setTransform(381.8,76.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgGApQgEgEgBgEIgBgMIAAgiIgIAAIAAgCQAIgGAGgHQAGgHAEgIIACAAIAAAXIAPAAIAAAHIgPAAIAAAnIABAHIACACIACABQAEAAAEgGIACABQgFANgNAAQgFAAgEgDg");
	this.shape_166.setTransform(377.5,76.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(1,1,1).p("ABUipIiLCMAhThxIAAEb");
	this.shape_167.setTransform(69.6,47.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160}]}).wait(80));

	// Layer 82
	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(23.6,207.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({guide:{path:[23.7,207.6,23.8,207.5,23.9,207.4,26,202,29.9,195.3,37.8,182,46.2,175.3,73.2,154,95.7,207.3,95.9,207.7,96,208,118.7,261.1,144.7,242.5,153.4,236.3,161.2,223,166.6,213.8,168.3,208,168.4,207.6,168.5,207.3,170.1,201.7,175.9,192.1,183.8,179.2,192.4,173.3,218.6,155.5,240.4,207.3,240.5,207.7,240.7,208,262.4,259.3,287.1,243.3,300.3,234.7,312.4,208,312.6,207.7,312.8,207.3,324.5,181.2,338.8,172.3,363.7,156.9,384.1,207.2]}},79).wait(1));

	// Layer 18
	this.instance_5 = new lib.Tween7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(24.1,65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:27.4,y:59.2},0).wait(1).to({x:31,y:54.3},0).wait(1).to({x:35.2,y:49.9},0).wait(1).to({x:39.7,y:45.8},0).wait(1).to({x:44.3,y:41.7},0).wait(1).to({x:49.7,y:38.7},0).wait(1).to({x:55.6,y:36.9},0).wait(1).to({x:61.6,y:36.1},0).wait(1).to({x:67.6,y:36.8},0).wait(1).to({x:73.2,y:38.9},0).wait(1).to({x:78.1,y:42.5},0).wait(1).to({x:82.6,y:46.6},0).wait(1).to({x:86.8,y:51},0).wait(1).to({x:90.4,y:55.9},0).wait(1).to({x:93.8,y:60.9},0).wait(1).to({x:96.9,y:66.1},0).wait(1).to({x:99.7,y:71.4},0).wait(1).to({x:103.4,y:76.2},0).wait(1).to({x:107.5,y:80.7},0).wait(1).to({x:111.9,y:84.9},0).wait(1).to({x:116.8,y:88.6},0).wait(1).to({x:121.8,y:92},0).wait(1).to({x:127.9,y:93.1},0).wait(1).to({x:133.9,y:93.3},0).wait(1).to({x:139.8,y:92.4},0).wait(1).to({x:145,y:89.2},0).wait(1).to({x:150.1,y:86},0).wait(1).to({x:154.7,y:82.1},0).wait(1).to({x:159,y:77.7},0).wait(1).to({x:163,y:73},0).wait(1).to({x:166.4,y:67.8},0).wait(1).to({x:169.6,y:62.6},0).wait(1).to({x:173,y:57.5},0).wait(1).to({x:176.8,y:52.7},0).wait(1).to({x:181,y:48.3},0).wait(1).to({x:185.5,y:44.2},0).wait(1).to({x:190.7,y:41.1},0).wait(1).to({x:196.3,y:38.6},0).wait(1).to({x:202,y:36.5},0).wait(1).to({x:208,y:36.1},0).wait(1).to({x:214,y:37.4},0).wait(1).to({x:219.2,y:39.8},0).wait(1).to({x:224,y:43.5},0).wait(1).to({x:228.5,y:47.7},0).wait(1).to({x:232.6,y:52.2},0).wait(1).to({x:236.2,y:57.1},0).wait(1).to({x:239.3,y:62.4},0).wait(1).to({x:242.3,y:67.7},0).wait(1).to({x:245.7,y:72.7},0).wait(1).to({x:249.1,y:77.7},0).wait(1).to({x:253.1,y:82.3},0).wait(1).to({x:257.8,y:86.1},0).wait(1).to({x:262.8,y:89.6},0).wait(1).to({x:268.5,y:91.9},0).wait(1).to({x:274.4,y:92.9},0).wait(1).to({x:280.4,y:92.6},0).wait(1).to({x:286.2,y:90.7},0).wait(1).to({x:291.7,y:88.2},0).wait(1).to({x:296.7,y:84.8},0).wait(1).to({x:300.7,y:80.3},0).wait(1).to({x:305.2,y:76.1},0).wait(1).to({x:308.6,y:71.1},0).wait(1).to({x:311.8,y:65.9},0).wait(1).to({x:315.1,y:60.8},0).wait(1).to({x:318.6,y:55.8},0).wait(1).to({x:322.6,y:51.1},0).wait(1).to({x:326.8,y:46.7},0).wait(1).to({x:331.6,y:43},0).wait(1).to({x:336.7,y:39.8},0).wait(1).to({x:342.2,y:37.1},0).wait(1).to({x:348.2,y:36.1},0).wait(1).to({x:354.3,y:36.4},0).wait(1).to({x:360.1,y:38.1},0).wait(1).to({x:365.2,y:41.4},0).wait(1).to({x:370.2,y:44.9},0).wait(1).to({x:374.4,y:49.3},0).wait(1).to({x:378.2,y:54},0).wait(1).to({x:381.9,y:58.9},0).wait(1).to({x:384.9,y:64.8},0).wait(1));

	// Layer 47
	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(1,1,1).p("AQ9gCQAWgpAmgxQBNhkBUgwQEMifDmGNAQ5AAQgUAngoA0QgXAdgSAUQg7BAg9AkQjTB8i6jZQgyg5g1haQjnmNkLCfQhUAyhNBjQgoA2gUAjAlqADQgWApgmAxQgYAdgRATQg6A/g+AlQjSB9i7jZQg0g8gxhWA8LAAQAWgoAmgxQBOhjBTgxQELifDnGM");
	this.shape_168.setTransform(204.5,64.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_168).wait(80));

	// Layer 22
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(2,1,1).p("AgYgwIAxAxIgwAwIgBhb");
	this.shape_169.setTransform(389,208.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgNAbIAAgBQgBgKABgKIAAgJQAAgHgDgHIABgJIABgBQAFgEAFAFIAFAHQAFAHAHAFIADADQACAEgEAEIgFAEQgBAMgJAIQgCACgEAAQgDAAgDgDg");
	this.shape_170.setTransform(388.8,208.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(2,1,1).p("AgwAZIAxgxIAwAvIhbAC");
	this.shape_171.setTransform(24.2,169.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgaAQIgBgBQgEgFAFgFIAHgFQAHgFAFgHIADgDQAEgCAEAEIAEAFQAMABAIAJQACACAAAEQAAADgDADIgBAAQgKABgKgBIgJAAQgHAAgHADIgJgBg");
	this.shape_172.setTransform(24.2,169.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#990000").ss(1,1,1).p("AQ9AAQABgBABgBQAUg5AmhGQAeg2AggsQAwhEAzgqQDLioC2EWQA6BZA2CIQABABABABAlnAAQATgyAphLQAgg5AggtQAwhBAxgpQDJioC0ESQA8BaA6CJIAAAAQAyB7A0BTQC7EwDSiuQA+gzA6hZQAUggAVgkQAmhGAWg6A8MAAQAWg3AnhGQAfg4AhguQAvhBAygpQDJinC1ERQA7BaA5CJAlrAEQgVA4gmBGQgVAkgUAgQg6BZg+AzQjSCui7kwQg0hTgxh5AFpAAIAAAA");
	this.shape_173.setTransform(204.5,208.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(2,1,1).p("A8RgRILQAAILUAAILRAAIAAAAILQAAIAEAAILQAAIAPAAA8WF3IAArt");
	this.shape_174.setTransform(205,210);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169}]}).wait(80));

	// Layer 16
	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(2,1,1).p("AgYgwIAxAxIgwAwIgBhb");
	this.shape_175.setTransform(389,64.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgNAbIAAgBQgBgKABgKIAAgJQAAgHgDgHIABgJIABgBQAFgEAFAFIAFAHQAFAHAHAFIADADQACAEgEAEIgFAEQgBAMgJAIQgCACgEAAQgDAAgDgDg");
	this.shape_176.setTransform(388.8,64.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(2,1,1).p("AgwAZIAxgxIAwAvIhbAC");
	this.shape_177.setTransform(24.2,25.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgaAQIgBgBQgEgFAFgFIAHgFQAHgFAFgHIADgDQAEgCAEAEIAEAFQAMABAIAJQACACAAAEQAAADgDADIgBAAQgKABgKgBIgJAAQgHAAgHADIgJgBg");
	this.shape_178.setTransform(24.2,25.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#FFFFFF").ss(2,1,1).p("EAioAJEMhFPAAAIAAyHMBFPAAAg");
	this.shape_179.setTransform(190.6,62);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(1,1,1).p("AWjgCIAAAAAABgCIABgBAAAAAIgBABALRgCIAAAAQACADACADArTgDIABABArQABIAAgBA2igCIAAgB");
	this.shape_180.setTransform(168.3,64.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(2,1,1).p("AcXgRIrjAAIrSAAIrPAAIrUAAIrQAAA8WF3IAArt");
	this.shape_181.setTransform(205,66);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("EgimAJEIAAyHMBFOAAAIAASHgA6GGfIAArtgAHzAXIADAGQAyBpAvBEIABADIACACQC7EPDSibQA9gtA7hRQASgYAXgkQAohBAUgxIAAgBILjAAIrjAAIrRAAQjnmMkLCfQhTAxhNBjQgoA0gVAkIAAABIrUAAIgBgBQjnmLkLCfQhTAxhOBkQgmAxgWAmIAAABILQAAIACAEIAAAAQAzBYAyA5QC7DZDSh8QA/gmA5g+QAVgWAUgbQAngxAVgoIABAAIACgEILPAAg");
	this.shape_182.setTransform(190.6,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(258,133,623.9,254.5);
// library properties:
lib.properties = {
	id: '09AB100F57CE914DBE2EF1BE77DDCD92',
	width: 580,
	height: 260,
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
an.compositions['09AB100F57CE914DBE2EF1BE77DDCD92'] = {
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