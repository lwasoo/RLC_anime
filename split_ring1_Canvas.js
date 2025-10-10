(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 600,
	height: 375,
	fps: 6,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855A40").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(121,24.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A110A").s().p("AJ2C4IANgMICMAQIh6gpIAEgGIDcBKgAG+CiIACgFIgJgHIBlALIgWAKgACqCBIwelXIIPANII8DBIAXAHIAHACIgbgBIoSiyIntgQIOwEzIDSAZIAHAOgAGOA8IgCgJIDCBAIgEAHgAJjBEIgBgBQgMAEgrgSIifgOIAAgJICiAPIA1ASIANAFgAFDAhIgigLIAjADIAAAIg");
	this.shape_1.setTransform(88.6,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A110B").s().p("AA0AIIABgIIAHAAIgGgBIABgFIACgDIBLAXgAhlgCIgHgEIgXgHIBxAIIgCAHg");
	this.shape_2.setTransform(123.4,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#685543").s().p("AgLCzQgigagKgWIgIgNIgSgsQgKgjADgZIAAgCIAAgIIADgQIABgJQAoiYCFgGIgkAJIgYALQhPAsgSBdQgQBFAiBDIAUAhIAgAhg");
	this.shape_3.setTransform(129.9,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#835A40").s().p("AgyCTIgUghQghhDAQhFQAShdBPgsIAXgLIAlgJIAHAAIAQA6QhXACggBfIgBACIgBAGIgCACIgBAJIgEAPIAAAJIAAALIACAJQgBAvAoArIAJAIIgCAEIgVAiIgIAFg");
	this.shape_4.setTransform(131.9,23.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6F5A47").s().p("AhGB7IARgCIADAAIAFgBIADgCIAXgKIAagSIASgUIAEgIIAOgYIAGgXIABABIANAAIgNgGIAFgeIgBgNIAAgBIgBgLIAAgDIgBgFQgHgegNgTIgRgWIARABIAVAbIANAmIABAFIACAGIABAGIAAADIACAMQgHCIh3AOg");
	this.shape_5.setTransform(144.7,26.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#82573F").s().p("Ag9CyIAAg2IAQACIAAA0gAAZh6IAZg3IAMAIIgUAwg");
	this.shape_6.setTransform(143.8,26.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#805840").s().p("AheCzIAAgCIAAg1QB3gOAHiIIgCgNIAAgCIgBgHIgBgFIgBgGIgOglIgSgbIASgvIAEgJQB+B0hPCXIgEAGIgSAZIgNANQgxAwhBAAIgJgBg");
	this.shape_7.setTransform(148.7,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#524438").s().p("Ag/CxIAQAAIAAACgAAwizIAQAAIgEAJg");
	this.shape_8.setTransform(144,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,177.2,44.8);


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#665442").s().p("AARADIADAAIAAABgAgTgEIAMAAIARAGg");
	this.shape.setTransform(126.6,63.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56483A").s().p("AgGgBIANABIAAACg");
	this.shape_1.setTransform(126.6,57.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#855A41").s().p("AAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(113.2,47.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A100A").s().p("AMbGbIi4ghICbAEIAiAaIACADgAHdFkIALgeIAuAHIAHAigAK3FfIh0haIgVgcIgSgFIAWgFICiB+IgDACgAJYFdIACgFIAcAFgABnElIuIqoIIigXIHkF6IAcAWIgegBIm/leIn8AMIMoJiIFZA3IgNAcgAHWCmIgPgDIgBAAIgmgeIAGgHIgMgSIBPA8gAIjBMIiVgOIAAgUICfAOIAwAlIAKAKIAAAAIgQgBQgCACgDAAQgNAAgigcgAFIBAIgpggIAoAEIACAcg");
	this.shape_3.setTransform(80.3,41.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#77614C").s().p("AAdAmIAPACIABAAIgLgKIALgcIAFgWIgBgwIgMglIAPAAIAIAPIAFAYIACAtIgGAbQgWBchqAIQBLgQAVg0g");
	this.shape_4.setTransform(137.3,47.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#82583F").s().p("AhlCZIgFgDIAQg0IABAAIAPAFIgQAygAA9hrIAogtIAGAKIgeAjg");
	this.shape_5.setTransform(134.9,47.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4E4236").s().p("AgHgEIAPACIgIAHg");
	this.shape_6.setTransform(145.8,32.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#805940").s().p("AhcCcIAAgCIgDAAIgFAAIgBgBIgBAAIgTgHIAPgyIAAgDIAUADIANABQBpgIAXhaIAGgdIgDgtIgFgYIgHgPIAegjIAKgIQA2BOgbBhQgZBghlAlIgXAFIgOACg");
	this.shape_7.setTransform(138,48.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1A110B").s().p("AArASIABgEIAHgQIAMAAIgIgGIAJgPIAHAAIA8AvgAhnAFIgbgUIBrAHIgFATg");
	this.shape_8.setTransform(116.4,39.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6A5744").s().p("AhaBDIAAgCIgDgcIAFgoIAFgVQA/iSByAMIgmAHIggAMQhRA2gQBUQgLBWAdAxIAPAZQgjgBgPhbg");
	this.shape_9.setTransform(122.4,41);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C5845").s().p("AAEADIgVgFIAXACIAMADg");
	this.shape_10.setTransform(134.9,31.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#845A40").s().p("AhbCGQgdgxAMhWQAPhUBTg2IAfgNIAlgGIA2AEIAAA/IgFAAIgLgGIgZgCQg4gDgtA/IgIAPIgEAGIgIASIgBABIAAABIgGApIAAATIAMAvIAMARIgHAIIgkAZg");
	this.shape_11.setTransform(126,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.5,82.3);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#805840").s().p("AAFgLIABAAIgBAGIgFAOIgFADg");
	this.shape.setTransform(129.7,66.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82543B").s().p("AAHgMIgBAJIgMAQg");
	this.shape_1.setTransform(127.9,66.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58493B").s().p("AAOAMQgVgSgVgFIAYAEQAUAGANANg");
	this.shape_2.setTransform(124.3,49);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#534639").s().p("AgGgDIANABIgLAGg");
	this.shape_3.setTransform(135.4,54.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#615040").s().p("AAUAPIgbgLIgBgBIgCAAIgBgCIgdgTIARADIAhAXIAfALg");
	this.shape_4.setTransform(110.5,78);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#735E49").s().p("AhKBVQAdAAAUgKIAggYIASACIgIgMIANgRIAPgTIABgHIALguIgCgkIARABIACAhIgJArIgCAHIgBAAIgNAXQgkA+hJAAIgOAAg");
	this.shape_5.setTransform(124,65.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#65432A").s().p("AgNGpIqNu0IIfguQAjgLAIAdIFMH2IAUAhIgggDIk+nkIgHAAIoLAjIJJNPIJlB9IhoidIAJgcIAEABICoD9gAEdAvIgBgEIAwAEQAAAmAJATIAQABIAtBFIgGANIAdAVIAAABIACAAIAAABIAhAxIgRAYgAJDCFIgPgBIgEgCIgXghIiDgNIgHgfICaAOIAkA4IAIALg");
	this.shape_6.setTransform(66.8,57.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#82583F").s().p("AhtB6IAAgBIABABgAiNBjIAHgNIAWggIALAHIgXAogABZhbIAzgeIACAJIgkAWg");
	this.shape_7.setTransform(120.6,66.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#534538").s().p("AACADIgIgFIAOABIgEAEg");
	this.shape_8.setTransform(110.1,72);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#805940").s().p("AhCCBIgEgBIgCAAIgFgCIgCAAIgfgLIgjgZIAYgoIABAAIAEgGIAsAWIAMACQBTAGAohFIAFgCIAIgPIABgFIACgHIAJgsIgCggIAkgXIAMgHQAhBgg/BdQg5BIhPAAQgRAAgRgCg");
	this.shape_9.setTransform(122.6,67.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#855A40").s().p("AAAAAIAAAAIAAAAg");
	this.shape_10.setTransform(101.6,53);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#65462D").s().p("AAeAbIAPgcIACgBIAWABIgKgQIAPgPIAKAAIAsBBgAhrAQIgUgfIBgAGIABACIgKAcg");
	this.shape_11.setTransform(104.8,54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#695644").s().p("AhUCEQgIgTgBgmIAGg8IAKgcIAAgCQBViHBWAUIgeAEIgnAPQhZA7gIBNQgHAYACAqIAJAqg");
	this.shape_12.setTransform(109.4,54.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#845A40").s().p("AiIBaQgDgqAIgYQAIhNBbg7IAkgPIAegEQAkgCAhAMIAjASIgQA8IgEAAQgMgPgXgGIgXgEIgLgBIgaACIgEABIgBAAIgEACIgCAAIgDABIgBAAIgSAJIgUAPIgPAPIgMAPIgCABIgPAcIgBACIgBADIgGAWIgDAhIAGAfIACAGIgyAPg");
	this.shape_13.setTransform(115.4,54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137.2,114.7);


(lib.Symbol56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#82543B").s().p("AgJAJIATgSIgSASg");
	this.shape.setTransform(109.7,79.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B97C4E").s().p("AjEH8IlTxeIJVhBIAFAAICwJkIAKAlIgggFIiXoNQgNg6gHATIofAvIEuPoIJSCPIigooIENAbIAVBGIADAKIgDAAIgRgCIgSgCIgLgoIjIgVQBDEKBoFFg");
	this.shape_1.setTransform(53.6,67.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#805840").s().p("AAIgIIACAAIgDAFIgPAMg");
	this.shape_2.setTransform(111.4,79.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#58493B").s().p("Ag9gpIAQABQAaA2BRAcQhOgNgthGg");
	this.shape_3.setTransform(92.8,85.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#534538").s().p("AAAADIgHgFIAOABIgHAEg");
	this.shape_4.setTransform(91.5,78.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BB8254").s().p("AAOAgIAMgaIAMgJIAlACIgJgdIATgIIAQABIAWBNgAhwAWIgKgkIBQAFIgNAig");
	this.shape_5.setTransform(90.3,62.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#645241").s().p("AhbBlIgBgEIACgjIAHgZIANgkQAthgB2gGIgXAEIgrAPQhNArgWBcIgEAxg");
	this.shape_6.setTransform(93.1,61.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#615040").s().p("AgFgBIALABIgLABg");
	this.shape_7.setTransform(120.2,70);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#82583F").s().p("AikA5IAqgiIAGAIIgfAbgABvguIA2gLIAAAEIgnAIg");
	this.shape_8.setTransform(103,75.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#76604B").s().p("AhLA9IAhgDIAQgHIARACIgWAIIgPADgAgJArIAPgMIABAAIAUgUIAWgkIAIgiIAEgEIAPABIgHAeIgXAqIgDAEIgBAAIgTATIgdAUg");
	this.shape_9.setTransform(108,77.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#805940").s().p("Ag2BhQhTgdgag3IAfgaIACAAIAIgGIAhAhQAjAVAOgCIAcACIANgCIAXgJIACAAIAggUIARgMIADgFIACgDIAYgsIAGgeIAngJIAOgCQAJBYhOBIQg9ArgzAAQgSAAgSgFg");
	this.shape_10.setTransform(104.6,80.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#594A3B").s().p("AAcAbQgYgpgvgMIAGAAQBDARAOAkg");
	this.shape_11.setTransform(109.3,60.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#855A40").s().p("AAAAAIABAAIAAAAg");
	this.shape_12.setTransform(104.3,57.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#835339").s().p("AAAAAIgEAAIAAAAIAIAAg");
	this.shape_13.setTransform(105,57.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#835A40").s().p("AieBlIAEgwQAWhcBPgsIArgPIAVgEQBWAAAwA0IAOAUIgfAtIgEAAQgOgkhFgRIgKgBIgDAAIgbABIgYAKIgTAJIgcAYIgMALIgMAbQgOAUABAog");
	this.shape_14.setTransform(101.3,61.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,135.3);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#58493B").s().p("AgHgBIAPABIgNACg");
	this.shape.setTransform(73.6,77);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#76624F").s().p("AgFAAIADAAIACAAIAGABg");
	this.shape_1.setTransform(73.4,69.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#855A40").s().p("AgWgFIAQABIAeAMIgDACgAgXgJIABAAIgBABg");
	this.shape_2.setTransform(70.6,68.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#524538").s().p("ABDBFIADAAIAAABgAhDg2IgCgPIAPACIASAwQAmBDBAAVQhLgEg6h3g");
	this.shape_3.setTransform(75.1,85.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8AC6E").s().p("AmzITIANyZIJuhBIALAAIgBAJIgHJzIgDAnIgBAAIgegFIAHpLIgNAAIoyAuIgNQfII8CXIAIpLIEMAcIgBBQIAAAEIgEABIgGgBIgEAAIgKgBIgMgDIAAgpIhHgHIgCgCIgSgoIgSgBIgvASIACAPIgtgGIgJJ2g");
	this.shape_4.setTransform(43.7,71.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#805840").s().p("AAPgHIABAAIgGAFIgZAKg");
	this.shape_5.setTransform(91.9,84.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#77604B").s().p("AgpAmIAPgEIAegQQAdgSATgoIARABIgLAXIgeAeIgFAEIAAABIgDAAIAAABIAAAAIgfARIgCAAIgBABIgbADgAhEAoIADAAIAKABg");
	this.shape_6.setTransform(91.5,82);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#815940").s().p("AgmBOIgDgCIgFAAIAAgBIgCAAIgBAAQhBgUgohEIgSgvIAjgOIAQgFIASAoIACABQAjAvAtACIANACIAEAAIAEABIAEgBIAcgEIAAgBIACAAIAbgKIAGgFIAAgBIADAAIAAgBIAFgEIAeggIALgXIA5AKQgCAkhBBBQgnAlhDAAQgSAAgUgCg");
	this.shape_7.setTransform(86.8,84.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5B4B3C").s().p("AhbBFIgBgCIABgCIAPgmQA5hmBwAGIgkAEIgnAOQhQAzgOBGg");
	this.shape_8.setTransform(77.5,61.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFBB7D").s().p("AgDAhIAIgWIAPgPIA/AEIABgqIAjACIAABTgAhJAaIgtgDIABAAIADglIA6AEIgQAkg");
	this.shape_9.setTransform(75.6,65.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#845A41").s().p("AgBAAIABAAIAAAAIAAAAIABgBIABAAIAFgCIACAAIACgCIACAAIgYALg");
	this.shape_10.setTransform(81.6,61.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#524438").s().p("AAoAuQgOg1gugbIglgMIAiAFIAFADIAJADIABAAQAxAaARA4g");
	this.shape_11.setTransform(93.2,65);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#825239").s().p("AADABIgGgBIAIABg");
	this.shape_12.setTransform(91.8,61.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#835940").s().p("AiwB5IAvgTIACAGIgjAOgAh7AgIgEAAIgggOQAOhEBSg1IAngOIAigEQBRgGA6BKQAZAhADAUIgtAhIAAAAQgRg4gzgZIgKgEIgFgDIgigFIgQAAIgbAIIgBAAIgCABIgCAAIgFADIgBAAIgBABIgBAAIgCABIgBAAIgKAGIgCACIAAAAIgCABIgBABIgCAAIgUATIgOARIgLAUIgEAPIgHABg");
	this.shape_13.setTransform(85.8,66.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.1,142.4);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#805940").s().p("AAUgBIgMABIgbACg");
	this.shape.setTransform(106.2,81.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82543B").s().p("AgCAAIAFAAIgEAAg");
	this.shape_1.setTransform(103.1,81.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#78614B").s().p("Ag2AVIAGgBIAdgEIAmgSIAUgUIABAAIAPABIgRASIgUANIgSAHIgqAGg");
	this.shape_2.setTransform(108.4,79.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#625040").s().p("AgHABIAAgBIAPABg");
	this.shape_3.setTransform(90.9,67.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#835940").s().p("AgQAlIABAAIAAABgAgYgjIAAgBIAxgBIAAACIgiABg");
	this.shape_4.setTransform(87.6,71.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#514437").s().p("Ag5gWIAAgCIgJgnIAAgiIAPABIAFA8IAUAvQAlBFA4ASQhhgcgbhcg");
	this.shape_5.setTransform(91.7,77.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#815941").s().p("AgVBiIgEgBIgBAAIgRgEQg4gSgmhFIgUgvIgFg8IAkgBIAQAAIAGApIAIAYIAOAUIAPASIASAMIAbANIABADIAGAAIAPADIAAAAIAMACIAdgCIAMgEIAUgHIAUgPIASgQIA0AXIgPAYIgUAUQg6Aug4AAQgRAAgSgFg");
	this.shape_6.setTransform(102.9,78.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D5845").s().p("AgFACIAFgEIAGAFg");
	this.shape_7.setTransform(92.7,61.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#845A41").s().p("AgBACIgTgRIAPACIAbAXIgGAGg");
	this.shape_8.setTransform(90.3,59.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D4D3D").s().p("AhJApQA/hVBUACIgiAIIgaALQgWALgXAVIgbAig");
	this.shape_9.setTransform(95.6,53.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFEDA3").s().p("AiDAVIAPgkIA/AEIATAMIANABIAGgBIAGgIIBbAHIAMgoIAkADIABABIgYBNg");
	this.shape_10.setTransform(95.6,61.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#835A41").s().p("AgIAAIACAAIAFAAIARAAIggABg");
	this.shape_11.setTransform(102.8,55.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#825940").s().p("ABnA3IgSgoIgRgRIgFgDIgDgFIgngWIgfgGIgDAAIgUAAIgEABIgDAAIgHADIgBAAIgmAQIgbAYIgHAKIgFACIgIgIIgdgXIAagiQAYgXAYgKIAagMIAigHQBhgBA0BDQAsBBgCAwIg3AUg");
	this.shape_12.setTransform(106,59.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#554639").s().p("AAtBEQABgvgWgfIgYgcIgSgNIgBgCIgpgQIADAAIAhAGIAlAWIADAFIAFADIARAUIASAmIAFAtg");
	this.shape_13.setTransform(110.7,62.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCE85").s().p("AoFHxIFpxcIKSg4IAFADIhzFpIgEAEIgQABIADAWIAHAIIg/DFIgOAmQgxADAVgTICsoeIgPAAIpIAnIlEPlIAAAEIIjCWICxozIAFAAIBMAJIAJAoIgBAAIhFgIIi+JdIgHACgAHoCJIgBgEIgbgMIAJgcIgqgFIgPgUIgHgYIBwANIgXBQg");
	this.shape_14.setTransform(51.8,67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,122.4,135.3);


(lib.Symbol53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#78624C").s().p("AgfAKIgFgCIASgCQAvgXAIAKIgXALQgWAHgPAAIgIgBg");
	this.shape.setTransform(123.6,70.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#815940").s().p("AgOgBIgBgBIAZADIAGACg");
	this.shape_1.setTransform(118.7,70.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#55473A").s().p("ABLCDIADAAIAAABgAhGgEIgGgkIgBgqIAGgaIAHgXIAPABIgJAhQgMBHAgBAQAqBLBEAQIAAACQhwgbgehsg");
	this.shape_2.setTransform(108.8,64.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#825A41").s().p("AgDCDIAAgBIgCAAIgEAAIAAgCQhDgRgshKQghhAANhHIAJghIAyAPIgCAOIgFAeIAFAoIARAjIAMASIASAQIABAGIAGAAIAdARIAAABIAhAGQAOADAggJIAYgNIApArIgGAGQghAjhQAAIgcgBg");
	this.shape_3.setTransform(117,64.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6A5744").s().p("AgGACIAIgEIAFAFg");
	this.shape_4.setTransform(111.5,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E4236").s().p("Ag6AUQA6gtA7AHIgpAHIgcALIghAUg");
	this.shape_5.setTransform(113.9,40.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFEC9F").s().p("AgwAYIABgOIgxgNIgQgBIgHAUIgVgBIAYgeIDHAPQARgxAiATIAHABIgBAEIgBABIgrA8g");
	this.shape_6.setTransform(113.6,51.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#835A41").s().p("ABhAfIABgBIAAABgAhggeIAPAAIAWAkIgKAGg");
	this.shape_7.setTransform(117.8,45.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#825940").s().p("ABSB5QAUhIgmg0IgbgeIgfgTIgZgJIgRgBIgGABIgfAEIgpAWIgFgHIgXgmIAhgVIAegMIApgHQBfgFBABmQAfA0gNBcg");
	this.shape_8.setTransform(123.8,50.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#835A40").s().p("AAAAAIgVgEIARACIAZAHg");
	this.shape_9.setTransform(122.3,45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#84573D").s().p("AgPgCIAGgBIASADIAHAEg");
	this.shape_10.setTransform(121.1,45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5C4C3D").s().p("AAdBZQAYhIg0hCIAAgBIACgDIgGgBIgTgSIgXgNIgHgEIAYAGIAdATIAbAdQAmA1gUBIg");
	this.shape_11.setTransform(127.4,54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD689").s().p("AqoGYIKjuxIKrgjIADACIjPEpIgPgeICQjNIgGgBIplAWIpcNOIINCMIFLnhIBdAKIAFAkIhYgKIlkIHgAHEByIgBgGIgSgRIAKgPIgWgCIgRgmIBjAKIgtBEgAEZgtICNjIIARAXIhnCVIgYAhg");
	this.shape_12.setTransform(68.1,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.2,114.7);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#815941").s().p("AgJgDIgBgDIAVANg");
	this.shape.setTransform(128.1,53.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#735D49").s().p("AgUAAIApAAIgOABg");
	this.shape_1.setTransform(134.3,55.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A3F34").s().p("AgEAAIAAAAIAEAAIAFABg");
	this.shape_2.setTransform(147.1,52.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#845A40").s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(114.3,36.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#54463A").s().p("AhIAGIgCgaIgBgUIAFggIACgMIAAgBIALgjIACgBIAVgkIAQABIgVAiIgQA0QgNBXAhAxQAeBEBRAYQiCgigSh2g");
	this.shape_4.setTransform(121.3,45.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD48A").s().p("Ag/ANIAAgFIAHgSICKAKQAigkAWAQIAMAAIgHAGIg3AogAiVAEIAOgIIABAAIgCAJg");
	this.shape_5.setTransform(127.9,37.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#675442").s().p("AgFABIAJgCIACADg");
	this.shape_6.setTransform(127.8,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#825940").s().p("AAOAJIgDgBIAEABgAAKAGIgYgOIAKADIAPALg");
	this.shape_7.setTransform(138.8,30.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#84563D").s().p("AgOgIIAWAJIAHAIg");
	this.shape_8.setTransform(137,29.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#615040").s().p("AAYBvQAmhBgdhQIAGgFIgLAAIgNgXIgSgVIgHgIIgYgLIgagJIATACIAXAHIADACIAYARIABAAIAAABIADABIABAAQBRA+g5CDg");
	this.shape_9.setTransform(138.9,39.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#825A41").s().p("AgLC6IgFgBIgCAAQhTgYgehEQghgxANhXIAQg0IAVgiIAFACIASAOIAUAPIgPAjIgIAUIAAAFIgCANIACAnIAKAdIADAGIAKAQIABAEIgEACIAGAAIASAXIALAHIABADIAXALIABABIAaAIIAcACIAOgDIAEABIAZA2IgpALIgWABQgSAAgNgEgABoBOIAOABIAlAOIAAACgAgoiKIgEgLIABgBIgGgXIgEgQIARAAIALAvIgLAEg");
	this.shape_10.setTransform(130.9,42.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#815840").s().p("ABOCRIgEAAIglgOQA5iDhRg+IgEgBIAAgCIgPgNIgKgDIgDgCIgXgIIgTgBIgYABIgUAGIgBgFIgLgvIAWgIIAfgCQCAAJAjBhQAtBcg6Bhg");
	this.shape_11.setTransform(139,37.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#544639").s().p("AgiAFIAUgFIATgDIABgBIAcABIgeADIgVAFg");
	this.shape_12.setTransform(129,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCA7F").s().p("AsrERIOTqlILEgHIgKAIIibAjIozgBIs1JfIH6B3IHHldIBlAMIACAbIhngMInpF5gAGlBWIAEgDIgBgEIgKgQIAHgDIgKgDIgKgdIBXAKIg9AwgAEbgkIA7grIgLAjIgCABIgNALgAGChwIA8guIAGAWIgBABIgvAkgAJBkEIBrhOQBgghhtBDIhjBMg");
	this.shape_13.setTransform(81.3,41.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.5,82.5);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B3F34").s().p("AgFABIAEgDIAHAFg");
	this.shape.setTransform(151.4,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#544639").s().p("AhJADIgBgPIADgeIAAgCIABgGIACgJQAjhxA5gGQgzAfgbBhQgNBPAhA4QAqBPBDAOIAAABQiHgjgNiNg");
	this.shape_1.setTransform(129.1,26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#835A41").s().p("AAqCxIAAgBQhBgOgshPQghg4ANhPQAbhhA1gfIAdAuIgdAhIgEAJIgIARIgHAYIgDAPIACAgIACAPIAAABIADAHIAAAHIgEAAIAFABIAKAZIALAQIACAFIABAAIAAABIAFAFQASAeA5AKIAJA+g");
	this.shape_2.setTransform(132.4,26.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#615040").s().p("AgCAAIAFAAIAAAAg");
	this.shape_3.setTransform(139.9,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB776").s().p("AhFAAIACgOICXAOQAlgTAYALIAIABIgHACIgBABIg7ATgAiYgGIAHgCIAAACg");
	this.shape_4.setTransform(136.4,22.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#825A41").s().p("AAsCIIAQACIAiAcIgEAFgAhZBxIgEgFIAFAFgABdgCIABgBIAAABgAgbiqIARABIgDAzIgHAAQgDAEgCAAQgIAAAGg4g");
	this.shape_5.setTransform(141.7,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#83563D").s().p("AgJgLIAPAOIAEAJg");
	this.shape_6.setTransform(147.9,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#825940").s().p("AAKAMIgUgXIAKAHIALAQg");
	this.shape_7.setTransform(149.5,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#665443").s().p("AgIB+QA9g3gNhTIAAgBIAHgCIgIgCIgKghIgKgTIgEgJIgPgQIgEgFIgBAAIgNgJIgXgOIgSgFIAnAIIAhAYIAVAaIABAAIAPAfQALAggCAaQAEA2g4A2g");
	this.shape_8.setTransform(147,23.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDB06E").s().p("At7B4IQtlXID5AKIAUAYIktgOIu1EvIgEABIABADIHtBaIIOiyIBtAKIABARIhxgMIo7DBgAGTBEIAEAAIAAgHIgCgHIADAAIgDgBIgDgRIBOAJIhIAYgAEggHIAogMIgCAJIgBAGIgHACgAGigyICMgtIAMAIIigA2gAJ5h6ICeg0IjlgKIAIgXIFCANIj4BUg");
	this.shape_9.setTransform(89.3,22.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#81583F").s().p("AAQClIgfgcQA2g2gEg2QACgcgLgeIgPggIgLgSIgJgHIgjgYIgngIIgHAAIAAgBIACg0IAyAFQAdAGAoAiIAMAMQBqCuh8Bvg");
	this.shape_10.setTransform(149.4,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,178.5,44.9);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#554739").s().p("AhKgDIABgCIAAgHIAAgDIAGgjIACgEQA6iHBSAFIgkAOQhOAzgPBWQgOBKAfA+QAlA9AqAWQh5g0AFiJg");
	this.shape.setTransform(130.4,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#835B41").s().p("AAwC9QgLgCgLgGQgpgVgmg+Qgfg9AOhKQAPhXBOgyIAkgPIAQA1QhBAcgNA5IgBAEIgGAeIAAACIAAAEIAAAEIAAAGIgBADIgFAAIAGACQAEBaBCAhIgGA5IgBAFg");
	this.shape_1.setTransform(132,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#82553C").s().p("AgEgNIAHANIACAOg");
	this.shape_2.setTransform(151.4,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C98A59").s().p("ABqAJIhEgBIiSgMIAAgFICbAPIA7ACIADABg");
	this.shape_3.setTransform(141.9,18.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#815940").s().p("AgEgNIAJATIAAAIg");
	this.shape_4.setTransform(153.1,12.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC8654").s().p("AGRAxIgHgBIAGAAIABgGIBHAIgAKyAiIAAgDIBtADIhtgMIAAgDIDZAUgADWAZIpkgMIn8g+IRQAYICEAMIgCAEIiggPIvdgWIHeA6IIxAKIBoAMIgCADgAGRAdIAAgCIDYADIAAACgAEkAYIAeAAIAAAEgAGXgCIABgDIDQARIAAAEg");
	this.shape_5.setTransform(90.8,14.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#825A41").s().p("AgUCKIACgFIAPAEIAYApIgKAGgAgSiFIAPgxIADgCIALAGIgNAug");
	this.shape_6.setTransform(146,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56483A").s().p("AAAC4IAIgGIAFAHgAgMi4IAMABIAAAEg");
	this.shape_7.setTransform(147.2,18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#80583F").s().p("AgtCxIgagqQBNgtAEgxIAFg2IgHggIAAgIIgJgUIgEgGQgFgOgZgWIgjgTIAPguIACgDQB4A3ADBrIAAADIABAJIAAADQALByh6BNg");
	this.shape_8.setTransform(152.7,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#695644").s().p("AgyCEQBOglAFhUIAEAAIgEgBIAAgRIAAgDIgBgNIAAgFIgEgRIgCgNIgJgPQgQgegVgRIgegPIAQACIAiASQAYAWAFAPIAEAFIALAcIAHAgIgFA2QgEAyhNAtg");
	this.shape_9.setTransform(149.1,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.5,38);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#855A41").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape.setTransform(120.3,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#805840").s().p("AAAgCIABAEIgBABg");
	this.shape_1.setTransform(152,26.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A100A").s().p("AJkDLIAPgMICWAVIh9gvIAFgHIDcBTgAGuCyIACgBIAEgMIA7AIIAEAOgACwCOIwdl+IILAXII2DUIBzAKIAAAKIhugMIoLjCInogZIOqFVIDUAcIAKAPgAGYBLIgBgJICyBBIgGAGgAEiAeIAdACIADABIACAAIABACIgBAHgAGXAWIABgKIACgJIBFAbg");
	this.shape_2.setTransform(87.8,24.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A110B").s().p("ABPAHIiPgNIgBgCIAAgIICTAQIA+AVIAHAEIgJAAIgFAAQgSAAgogSgAiSgXIgEgBIAFAAIAAABg");
	this.shape_3.setTransform(134.9,30);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#544639").s().p("AgLCzIgjgiIgKgPIgYgzIgJg8IABgIIAAgCIACgQIABgJQAbiTCTgQIgkAJIgYALQhOArgTBeQgQBGAiBCIAUAhIAgAhg");
	this.shape_4.setTransform(129.3,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#835B41").s().p("AgTC0IgighIgUghQghhCAQhGQASheBPgrIAXgLIAlgJIAcADIACA0QhrARgPBZIgDAJIgBAJIgCASIAAAHIABADIABAPIABAJQAMAzAXAUIgHATIgEAMIgBABIgKAZg");
	this.shape_5.setTransform(131.5,26.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#80583F").s().p("AhKCzIAAgEIgQg2QB7gSADh/IADgBIgDgHIAAgCIgBgNIAAgBIgBgEIgBgGIgRgsIgcghIAWgjIAFgIQCDBshdCuIgEAGIgZAaIgQANIglAVQgVAJgSAAIgGAAg");
	this.shape_6.setTransform(148.2,29.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#825A41").s().p("AgqCyIgMgtIgEgOIADAAIANADIAQA2IgIACgAATiIIAdgpIALAHIgYAjg");
	this.shape_7.setTransform(143.3,29.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6E5A47").s().p("AhGB/QAeABAWgOIAcgXIAGgGIAUgcIAHgUIAJAAIgGgEIAJg0IgCgMIAAgCIgBgJQgIgpgLgNIgcghIAQACIAeAiIAQAsIABAFIACAFIAAAAIABANIAAADIAAAHQgDB/h8ATg");
	this.shape_8.setTransform(144.7,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5A4B3C").s().p("AgwCyIAIgDIAAAEgAAhiyIARAAIgGAIg");
	this.shape_9.setTransform(144.8,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175.6,48.3);


(lib.Symbol48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4136").s().p("AABAAIADAAIAAABgAgDAAIABAAIAAAAg");
	this.shape.setTransform(126.8,64.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#745F4A").s().p("AgFgBIABAAIAKABIAAACg");
	this.shape_1.setTransform(126,58.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#805139").s().p("AAAAAIAAAAIgCABgAACAAIABAAIgDAAg");
	this.shape_2.setTransform(137.1,57.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A110B").s().p("ABQAHIiFgNIgCgVICLAPIA3ApIABACIAFAFIgKAAIgIABQgWAAgZgegAiGgbIgKgJIAKAAIABAJg");
	this.shape_3.setTransform(125.2,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#805840").s().p("AACgKIgBAQIgCAFg");
	this.shape_4.setTransform(143.2,47.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#645241").s().p("AgGgCIANAAIgIAFg");
	this.shape_5.setTransform(144.4,33.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1A100A").s().p("AHXFrIALgdIA2AJIAEAZIAGACQASAGCqACIA4AtIgIABgAKcFcIhPhAQgEACgLglIB6BjgABjElIt4q/IIfgNIHYGFIBtAKIgGATIAAACIhrgLImzlnIn3AEIMZJ1IFVA9IgHAWIgWAAIAAADIgEACgAIVDiIANgCIAEAEgAHJCuIg3grIAAgBIANgOIAxArIgBAAIgDAAIgBAPgAEbAhIAhADIAKAJIABABIABAWgAGZAEIAHgTIAFAAIgEgDIABgBIAIgQIgEgDIAFAAIA9Awg");
	this.shape_6.setTransform(79,42.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#594A3C").s().p("AhZBKIgBgDIgCgVIAAgBIgBgJIAEgoIAAgCIAFgTQA3iPB7AGIgmAGIggANQhRA1gQBUQgLBXAdAxIAPAZIgEAAQgaAAgThVg");
	this.shape_7.setTransform(121.1,42.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#825A41").s().p("AhPCcIgPgBIgCgwIACAAIABgPIAEAAIAMAGIgBA6gAAuAlIABAAIAAACgAAyh9IApgeIAGAHIgeAYg");
	this.shape_8.setTransform(134.5,49.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6F5A47").s().p("AhnCdIAAgBIgCAAIgFAAIAAgBIABg7IAAgDIATAEIApgGIAdgQIAEgCIAagfIAKAAIgFgFIAAgBIANgVIALgmIAAgCIABgFIgCg1QgNgpgHgDIARABIAdgYIAKgHQA6BLghBxQgoBphiAUIgMACgAgIBQIAEgCIgBAAgAgEBNIAEgBIgBAAgAA0gCIADgFIACgSg");
	this.shape_9.setTransform(137.7,49.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#835B41").s().p("AhlCGQgdgxALhWQAQhUBTg2IAegNIAmgGIAjAAIAoAMIgPA1IgFAAIgPgDIgBAAIAAgBIgFAAIgCAAIgDgBQhDgKgwBKIgFAAIAEADIgHAPIgCACIgBADIgGASIgFAqIACAVQACAYALASIgFAIIgNAOIAAABIgXAYg");
	this.shape_10.setTransform(125.7,42.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#855A41").s().p("AhwBJIABAAIAAABgABshJIAFAAIAAABg");
	this.shape_11.setTransform(123,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,84.9);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81553C").s().p("AAGgLIgFANIgGAKg");
	this.shape.setTransform(127.2,66.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#675443").s().p("AgEACIgBgDIALABIgJACg");
	this.shape_1.setTransform(133.8,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#594A3C").s().p("AAKAHIgogRIAOAAIAQAKIAfALg");
	this.shape_2.setTransform(110,79.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#855A41").s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(98.4,62.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#68482E").s().p("ABQAHIiJgOIASgLIgCgSICIAPIAnA8IABABIADAGIgKgBQgGACgFAAQgWAAgPgogAiJguIATACIABABIADAeg");
	this.shape_4.setTransform(110.3,67.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#80583F").s().p("AhLCBIgEgBIgCAAIgFgCIgCAAIgfgLIgRgLIAPg1IABAAIABgGIAkAUIAXAEIAkAAIAEgBIABAAIANgEIABgBIAEAAIAAgCQALgCAdgYIAUgZIAQgcIADgGIAJgyIgDgaIgEgPIAggMIABAAIALgDQAlBUhCBpQg5BIhQAAQgQAAgRgCg");
	this.shape_5.setTransform(122,67.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#825940").s().p("AiBB2IgDAAIAAgBIAUg8IAMAJIgPA0gAAmAyIABAAIAAABgABWhmIAtgPIACAFIggALg");
	this.shape_6.setTransform(119.9,66.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6F5B47").s().p("AglBdIAWgCIAPgFIAYgLIAKgJIAKABIgDgGIAAgBIAWgUIAFgKIAIgKIAFgPIAMgrQAAgvgHgGIADgBIAPABIAEAPIACAaIgJAyIgCAFIgQAeIgUAZQgdAYgOACIAAABIgEAAIgBABIgMAEIgCAAIgBABgAhiBMIgLgJIAOADIgCAGg");
	this.shape_7.setTransform(119.7,65.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#69462C").s().p("AgNGnIqAvAIIvgpIAFAAIFRIPIBhAJIgJAeIhkgJIk3noIoHAaIAAAEII6NWIJcCGIhkiaIAJgeIAEABIChD9gAEcA0QgXgSAxALIAXAhIABACIAFAVIAJABIA/BhIAAABIAqBAIgPAZgAGggDIAAgGIAOgZIALAAIgGgIIADgDIAPgQIgCgFIAFAAIAsBDg");
	this.shape_8.setTransform(65.4,58);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F4F3F").s().p("AhLCEIgJgBIgFgVIgBgDIgDgeIAAgBIABglIAFgXIAJgcQA9h7BvAEIgeAEIgnAPQhZA7gIBNQgHAYACAqIAJAqg");
	this.shape_9.setTransform(107.9,55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#835B41").s().p("AiSBZQgCgpAHgYQAIhOBbg6IAngPIAcgEQBZADAhAnIgfAvIgkgVIghgGQgqgDgpAkIgFAAIACAEIgPAQIgDAEIgBABIgEAGIgOAXIAAAHIgBAAIgBABIgGAXIgDAkIADARIgSAMIgjASg");
	this.shape_10.setTransform(114.8,55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4F4337").s().p("AAWANIgJgHIgEgBIAAgBIgIgEIgKgFIgYgHIAgAFIAjAUg");
	this.shape_11.setTransform(123.1,49.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.8,115.9);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81553C").s().p("AgJAKIATgSIgOAPIgEADg");
	this.shape.setTransform(108.9,79.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA8053").s().p("AB5A0IgfgFIgLgoIjBgVIgNglIDoAZIAVBKIAAABIACADg");
	this.shape_1.setTransform(92.2,77.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C4C3D").s().p("Ag2gfIAPABQASAZAXANIA1AYQhBgKgsg1g");
	this.shape_2.setTransform(92.1,86.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#453B31").s().p("AgGgEIANACIgHAHg");
	this.shape_3.setTransform(90.8,78.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#82583F").s().p("AABAAIgFAAIAJAAg");
	this.shape_4.setTransform(99.7,83.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#815239").s().p("AgDAAIAQAAIAAABgAgMAAIAEAAIABAAIAAAAg");
	this.shape_5.setTransform(101.2,84);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#845B41").s().p("AgHAIIAFgHIAJgIIABAAIgMANIgCACg");
	this.shape_6.setTransform(94.1,61.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC7C4E").s().p("AitH4IlExSIgEgQIJEg7IAJAAICrJkIBUAGIgPAlIhagIIifo3IgNAAIoPArIEnPrIJGCSIicolIAAgDIAFAAIAaADIAMAmICnJSgAGXgPIAWgjIABAAIADgCIAWACIgHgSIAFgFIAbgPIAWBRg");
	this.shape_7.setTransform(50.3,67.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#635242").s().p("AhcBiIAHg6IAPgmQAthiB2gFIgXAEIgrAPQhNArgWBcIgEAxg");
	this.shape_8.setTransform(91.7,61.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#825A41").s().p("AibBEIAjg0IAIAMIgcApgAAbA8IABAAIgBABgAB/hDIgEgBIAhABg");
	this.shape_9.setTransform(102.1,76.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6A5744").s().p("AhDBHIgEAAIAAgBIAogJIAHAAIgCgCIACgBIAUgKIAGgIIACAAIADgCIAQgSIAWgiQALgZAAgfIAMAAIAEABIgDAiQgMAmgOAPIgCADIgCAAIgRARIgDAFIgcASIgoAKg");
	this.shape_10.setTransform(107.6,76.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#80583F").s().p("Ag8BhIg1gYQgZgPgSgZIAbgnIAIgJQAbAiANADIAkAOIAHABIAFABIAEAAIASACIAAgCIAngKIAdgSIADgFIASgPIABAAIADgDQAOgPAMgoIACgiIAdAAIAGAAIAMABQAJBZhOBIQg9ArgzAAQgTAAgRgGg");
	this.shape_11.setTransform(103.8,80.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#534538").s().p("AAfAcQgbgrgxgMQAkACAZAUIAeAhg");
	this.shape_12.setTransform(108.4,60.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#835A41").s().p("AihA1QAXhbBPgsIAqgPIAWgEQBWAAAwA0QAWAWAEAQIgpAfIgeghQgbgUgjgCIgfABIgWAJIgbAQIgFAFIgBABIgBAAIgLAIIgGAGIgWAjQgKAQgCAbIg6ANg");
	this.shape_13.setTransform(100.6,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119.6,135.7);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#473D33").s().p("AgFgEIALABIgIAHg");
	this.shape.setTransform(73.1,77.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825940").s().p("AgYASIAJgJIAkgbIAEAKIghAbg");
	this.shape_1.setTransform(70.2,79.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#855940").s().p("AgCAAIAEAAIAAAAg");
	this.shape_2.setTransform(68.6,68.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#81553C").s().p("AAQgHIgLAHIgUAIg");
	this.shape_3.setTransform(90,85.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFB779").s().p("ABRAyIgCgqIg+gIIgRgiIgOgBIgmAcIg+gGIgBgoIDnAYIAABTg");
	this.shape_4.setTransform(73.9,80.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#675443").s().p("AhJAvIAZAAIAXgGIAVgIIAJgJQAogZAMgvIARACIgMAgIgcAeIgKAIIAAACIgDAAIAAABIgBAAIgfAQIgBABIgWAGg");
	this.shape_5.setTransform(91.1,81.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#80583F").s().p("AgqBMIgDgBIgEAAIAAgBIgDAAIgBAAQhBgVgohDIgKgYIAjgdIAKgJIATAlQAjAxAtAFIAlACIAWgFIABgBIAhgOIABAAIAAgBIADAAIAAgCIAKgIIAbghIANgfIAuARQgFApg9A9QgnAmhDAAQgTAAgUgDg");
	this.shape_6.setTransform(86.2,85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#594A3B").s().p("AgVCdIACAAIAAABgAiaAqIARAAIAKAZQAoBFBBAVQhSgLgyhogACIhAQgLgvgrgeIgpgPQBaANAUBKIAEAGg");
	this.shape_7.setTransform(83.1,76.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7AC6D").s().p("AmpIUIgCgBIAMyZII9g9QBDgJgVAOIgHJzIAJABIA0ADIgQAnIhPgGIAJpOIgQAAIokAvIgMQeIIuCXIAIo6IABgRIAeAFIABAnIgIJ2gAE/gaIAHgNIAVgZIAtACIAAgdIAFgFIAFgCIAagDIgBBUg");
	this.shape_8.setTransform(42.9,71.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#615141").s().p("AhRBGIgLgDIAQgoQA5hmBwAGIgkAEIgnAOQhQAzgOBGg");
	this.shape_9.setTransform(76.5,61.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#845B41").s().p("AAAAAIAAAAIABAAIACgBIABAAIAFgDIABAAIADgCIABAAIgFAFIgWAIg");
	this.shape_10.setTransform(81.2,62.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#835A41").s().p("AB6BKQgVhKhagLIgMAAIgbADIgFADIgBAAIgCABIgCAAIgFADIgBAAIgBABIgBAAIgCAAIgOAHIgBABIgBAAIgCACIgCAAIgBACIgOAMIgVAZIgGAOIgEAGIgSgCIgCAAIgHgCIgCAAIgGgBIgDAAIgGgBIgDAAIgGgBIgEAAIAAgCQANhEBTg1IAngOIAkgEQBQgDA0BAQAhAnAHAqIgvARg");
	this.shape_11.setTransform(86.1,62.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,103.4,142.4);


(lib.Symbol44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#805840").s().p("AAVgBIgMABIgdACg");
	this.shape.setTransform(105,82.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#82553C").s().p("AgTACIAngDIgOACIgVABg");
	this.shape_1.setTransform(103.6,82.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#625040").s().p("Ag7AbIAXgBIAPgEIAigTQAdgYAAgIIASABIgTAYIgRANIgeAPIgrAGg");
	this.shape_2.setTransform(108,80);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE69E").s().p("ABaAzIgHgBIgNgGIgHgGIAKgeIgmgEIgCgBIgRgpIBpALIgYBOgAh4gNIAKglIA2AFIAJApg");
	this.shape_3.setTransform(89.4,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#81583F").s().p("AgVBgIgEgBIgBAAIgIgCIgDgBQg8gQgohIIgRghIgIgxIAogQIABAAIAOgEIADAiIASAqIABABIAVAaIAIAGIAGAGIAOAHIAUAKIAQADIADAAIAKADIAfgDIAMgDIAggPIASgPIASgWIAnAgQgiAtgRAIQgqAgg3AAQgRAAgTgDg");
	this.shape_4.setTransform(101.5,79);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E4236").s().p("AgFACIgCgDIAPABIgMACg");
	this.shape_5.setTransform(89.8,69.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D4D3E").s().p("Ag8glIgJgpIAAgHIAPABIAJAxIARAjQAmBGA8AQQhkgYgehjg");
	this.shape_6.setTransform(90.7,79.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#835A41").s().p("AgaAJIAAgCIA0gQIABAFIgmAOg");
	this.shape_7.setTransform(86.4,70);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F4F3F").s().p("AhJApQA/hVBUACIgiAIIgaALQgWALgXAVIgbAig");
	this.shape_8.setTransform(94.2,54.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#845A40").s().p("AAGAFIgggRIAPABIAmATIgEAFg");
	this.shape_9.setTransform(89.5,59.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#55473A").s().p("AgFACIAEgDIAHADg");
	this.shape_10.setTransform(92.5,61);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5C4C3D").s().p("AArBEQABgxgXggIgfgiIgWgLIAAgFIgNAAIgPgFIAEAAIACABQBHAEAkBRIAIAzg");
	this.shape_11.setTransform(109.8,63.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#835B41").s().p("AgKAAIABAAIACAAIAHAAIAEgBIAQABIgEAAIgEAAIgfACg");
	this.shape_12.setTransform(102,57);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#825A41").s().p("ABpA0QglhQhGgFIgDAAIgQgCIgEACIgIAAIgCABIgBAAIgJACIgBAAIgjAPIgVARIgGAIIgFgCIgJgFIgogTIAagiQAYgXAYgKIAagMIAigHQBwADAqBHQAnA2gCBCIgCAKIgxABg");
	this.shape_13.setTransform(104.6,60.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCD84").s().p("AoDH8IgQgHIFhxdIKBg9IAGAAIABAEIhvFqIgCAFIgNABIAFAbIg+DGIBSAHIARAIIANAAIAFACIAGgIIBKAFQADgkANgGIAEAAIAPAFIAMAAIAAAFIgWBJIgEACIkFgWIChoOQAWgrggAOIo4ArIk8PrIIXCTICtoyIAfABIgKAmIi6Jgg");
	this.shape_14.setTransform(53.2,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,135.8);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#826850").s().p("AgFAAIAAAAIALABg");
	this.shape.setTransform(134.4,66.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#635140").s().p("AgjAPIgFgCIAfgGQAqgfAIANIgaAQQgaALgSAAIgGgBg");
	this.shape_1.setTransform(122.8,71.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEDA0").s().p("ABHArIgPgTIALgQIgWgDIgNgjIBeAKIgsBAIgHABgAh9gMIAUggIBBAGIAFAkg");
	this.shape_2.setTransform(103.6,64.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4E3E").s().p("ABLB3IADAAIAAABgAhGgSIgFgkQgEgxAGgOIAKgCIAIABIgDAJQgMBHAgBAQArBLBDAQIAAACQhygcgchtg");
	this.shape_3.setTransform(107.2,66.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#835A40").s().p("AgPAAIgIAAIAcAAIATAAIAAAAg");
	this.shape_4.setTransform(103.2,54.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F4E3E").s().p("AgGAAIAAAAIANAAg");
	this.shape_5.setTransform(106.4,54.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#815840").s().p("AAAB2IgCAAIgEAAIAAgBQhDgRgshKQghhBANhGIACgJIAqAAIAPAAIABABIgGAaIACAsIANAmIALAQIAPATIAEACIAMANIAbAPIAiAGIAFACQASADAigMIAagTQBTBMjJAHg");
	this.shape_6.setTransform(115.1,66.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#835A41").s().p("AAAAAIgCAAIgPgDIAMABIAXAGg");
	this.shape_7.setTransform(120.9,46.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#84553C").s().p("AgQgCIANAAIANACIADABIADACg");
	this.shape_8.setTransform(119.5,46.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5A4B3C").s().p("AgFABIAFgDIAGAFg");
	this.shape_9.setTransform(111.4,47.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#83583F").s().p("ABgBhIAJAAIAfAMIAAADgAhihFIglgqIAPAAIAjAmIgHAFg");
	this.shape_10.setTransform(120.1,55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#695644").s().p("Ag6AUQA6gtA7AHIgpAHIgcALIghAUg");
	this.shape_11.setTransform(112.3,41.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD688").s().p("AqaGkIKTu6IKigtIjGErIgDABIgOgcICLjPIpVAdIgOADIpLNUIADAEIIBCDIE/nhIAIgFIAaACIgUAhIldIOgAGVghIgBgBIgPgBIgTAAIhegKICKjNIARAaIhmCXIDFAOQAUguAZANIANAAIACAAIAAABIgFAIIgoA8g");
	this.shape_12.setTransform(66.8,58.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#825941").s().p("AByCBIgfgMQAbhihQg7IABgBIgCAAQgLgIgMgHIgCAAIgXgHIgMgBIgNAAIgeAFIgbAMIgGgGIgjgmIAggVIAegMIApgHQBWgIBDBfQA0BqgnBGg");
	this.shape_13.setTransform(122.3,53);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#625140").s().p("AAlBZIgJgBQAOgngLgsIgUgqIgVgXIAFgIQBOA8gbBhgAgUhFIgagQIgBAAIgEgDIAUAEIABAAQANAHAKAIg");
	this.shape_14.setTransform(126,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.7,116.2);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#815940").s().p("AgGgBIgFgFIAYANg");
	this.shape.setTransform(126.6,56);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#645141").s().p("AgYAEIAhgHIAQACIgQAFg");
	this.shape_1.setTransform(133.7,57.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F664E").s().p("AgFACIADgEIAIAFg");
	this.shape_2.setTransform(144.4,55.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD88D").s().p("ABAAkIgCgCIgKgUIAKgHIgNgBIAAgCIgFgZIBVAJIg9AwgAiBgLIAcgYIBHAGIADAcg");
	this.shape_3.setTransform(115.4,47.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#645241").s().p("AhJgGIgCgcIAGg0IAKgnIAJgRIABgDIAEgCIANABIgMAZIgLApQgNBXAhAxQAeBEBRAYQiCgggTh6g");
	this.shape_4.setTransform(119.9,48);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#825940").s().p("AAXCSIgFgBIgBAAQhRgYgfhEQgggxAMhXIALgpIANgZIAOAFIAqAOIgMAVIgJAaIgFAeIABAYIAGAbIAAACIADAGIAKAUIABACIAKARIAZAYIAFAFIATAKIACABIAfAIIAjAAIAQgHIAEAAIAMA0IgpALIgWABQgSAAgPgEg");
	this.shape_5.setTransform(125.9,48.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#483D33").s().p("AgFABIAKgBIABABg");
	this.shape_6.setTransform(127.7,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#82583F").s().p("AA7B8IANABIAJAFIASAQIgDAHgAA4gjIABgCIAAACgAhWh9IgIgSIgCgEIgCgFIAQAAIADAJIAWAsIgNACg");
	this.shape_7.setTransform(134.1,40.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#825A41").s().p("AAOAIIgbgPIAOAGIANAJg");
	this.shape_8.setTransform(137.1,32.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#675443").s().p("AAcBvQAoh9gqgiIAAgBIAJgJIgPAAIgBgBIgVgZIgLgKIgRgIIghgKIAuAJIADADIAbARIABAAQBUBAg5CEg");
	this.shape_9.setTransform(137.2,41.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#84553C").s().p("AgNgHIAQAHIALAIg");
	this.shape_10.setTransform(135.4,32.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#815941").s().p("ABBCXIgTgQIgJgFQA5iEhUhAIgMgLIgQgGIgDgDIgugJIgYADIgBgDIgVgrIgEgJIAXgIIAfgCQB9AHAmBiQAtCEhGBOg");
	this.shape_11.setTransform(137.6,40.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#77604A").s().p("AghAFIARgFIACgBIAVgDIAcABIggACIgUAGg");
	this.shape_12.setTransform(127.6,24.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC81").s().p("AseEoIOGq+IKpgTIAOACIgnAfQAJADg6ALIp0AIIsnJ2IHzBuIG9loIAfACIgbAYInjGGgAGRgaIAJgaICFAJQAegkASAMIACABIAPAAIgJAJIgBABIg0ApgAEZglIBDgzIgJARIgKAngAFuhcIgNgBIBbhKIACAEIAIARIhKA7gAHWi7IAOAEIgYADgAJEkVIBAgzIAtgIIhxBZg");
	this.shape_13.setTransform(79.9,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,159.9,85.3);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#845A40").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(120.6,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#77614B").s().p("AgGACIAHgFIAGAHg");
	this.shape_1.setTransform(148.6,42);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825940").s().p("AAAACIgBgDIADADg");
	this.shape_2.setTransform(131.3,35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBD7A").s().p("AA5AXIgEgNIAHgCIgHgCIgBgOIBPAHIhCAYgAgVAAIhtgIIAhgOIBMAGIABAQg");
	this.shape_3.setTransform(122.7,27.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#685543").s().p("AhJgFIAAgBIgBgQIAEggIAAgDIADgPIABgCQAnhrAgALQgiAmgGAVIgTA2QgMBPAgA4QAqBPBDAOIAAABQiIghgMiQg");
	this.shape_4.setTransform(128.1,28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#835940").s().p("AAoCpIAAgBQhBgOgshOQggg5AMhPIATg2QAGgUAkgmIAuAlIgVAVIgMAUIgNAcIgDAQIgDAhIABAQIAAACIAEANIAKAgIAPAXIAEAFIAAAAIAAADIAhAdIAgALIAcAEIgDA0g");
	this.shape_5.setTransform(131.5,28.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#82583F").s().p("AAMCIIARACIAWAhIgJAIgAA4gTIABgBIAAABgAgnh1IgEAAIgEgBIgJg8IARABIAJA8IgHACg");
	this.shape_6.setTransform(143.6,24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#83553B").s().p("AgIgKIAGADIALASg");
	this.shape_7.setTransform(146.6,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6C5845").s().p("AgHB+QBJhYgehDIAAgBIAOgFIACAFQAXBMgxA7IgTAXgAAhgmIgPggIgNgUIgFgDIgagUIgQgHIgQgFIAHgCIAdAIIAgAVIAFAFIAUAZIABAAIAOAfg");
	this.shape_8.setTransform(145.7,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#825941").s().p("AAJAMIgSgXIAJAIIAKAPg");
	this.shape_9.setTransform(148.3,17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEB471").s().p("AtyCPIQil8IDmAEQAGgJAUAhIkegGIutFPIgHAEIHoBSIIBjAQAKgJAjAGIggAOIo5DVgAGOgFIAEgRICXAMQAmgWAQAJIAQABIAAACIgOAFIgBABIg3ASgAEbgPIAtgPIgEAPIAAADgAGrhFIBmgkIARAHIiEAxgAJpiLIClg9IjXgFIAFgXIAFgBIEyAFIj+BfgAHojgIgBgGIAQAAIgFAQg");
	this.shape_10.setTransform(88.4,23.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#805940").s().p("AABCqIgUghIASgXQAwg7gXhMIgDgFIAAgCIgOgfIgIgQIgLgJIgFgFIgigVIgcgIIgKg8QAxgGA3AnIAMAKQCHC5ibCBg");
	this.shape_11.setTransform(148.6,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,176.8,47.7);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5935F").s().p("AAzABIBOAIIhPABgAiAgIIAUgBIBYAGIAAADg");
	this.shape.setTransform(125.4,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#675443").s().p("AhAgMIAAgFIAAgHIAAgEIAKgrIACgGQA9hyA0AIIgOAGQhOAzgPBXQgNBKAfA9QApBIA0ARQiDgpACicg");
	this.shape_1.setTransform(129.8,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#835940").s().p("AArC4QgygSgshHQgfg+AOhKQAPhWBOgzIAOgHIAjAyQgbgBgtBAIgCAFIAAABIgJAaIgCAJIAAADIgBABIAAAEIgBADIAAAIIgBAJQgCBmBXAkIgPAyIgGABIgHgCg");
	this.shape_2.setTransform(132.1,19.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#815940").s().p("AAFAOIgKgbIAGAJIAFASg");
	this.shape_3.setTransform(152.7,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D48D59").s().p("AGOAbIACgDICbAMIA8ABIAMABIgMAAIg/ACgAuKgQIRLgWICQAJIgCAFQjAgQgfAFIusATIHlAyIIigPIAiADIgUACIpsANgAEnASIAdgBIAAAEgAGRAQIDTgFIAAAEIjTADgAKyAJIBzgCIhzgHIgCgGIDbANIjZAFgAGdgSIADgGIC6AMIADAGg");
	this.shape_4.setTransform(90.8,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#82543B").s().p("AACAGIgCgGIgEgMIAEAIIAFARg");
	this.shape_5.setTransform(151.1,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#715C48").s().p("AgxCDIAMgHIAEgBQBMg3gIhOIANAAIgNgBIgCgXIAAgDIgEgNIgFgTIgGgHQAFgCgjgnIgWgPIAQABIAXAQIAaAiIADAFIALAdIABAAIACAGQASCEhjAqg");
	this.shape_6.setTransform(148.7,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#82583F").s().p("AgGC2IgMgtIARADIAKArIgKAFgAgDh+IAEg5IAEgEIAOAFIgHA5g");
	this.shape_7.setTransform(145.6,18.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#805940").s().p("Ag9C1IgMgrQBjgqgTiFIgBgGIgFgUIgGgJIgCgFIgaghIgZgRIAHg5IAAgEQBVAYAiBwIACAHIABALIAAACQAZCOiaBPg");
	this.shape_8.setTransform(152.7,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6F5B47").s().p("AgJC7IAJgFIADAHgAgCi9IAMACIAAAEg");
	this.shape_9.setTransform(146.4,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,181.5,38);


(lib.Stop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer: Text
	this.text = new cjs.Text("stop", "14px 'Helvetica'", "#CCCCCC");
	this.text.lineHeight = 0;
	this.text.lineWidth = 48;
	this.text.setTransform(13.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:NaN},0).wait(1).to({color:NaN},0).to({_off:true},1).wait(1));

	// Layer: ||
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxAyIAAhjIBjAAIAABjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxAyIAAhjIBjAAIAABjg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer: Circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AAAB3QgwABgjgkQgkgjABgxQgBgwAkgjQAjgkAwABQAxgBAjAkQAkAjgBAwQABAxgkAjQgjAjgxAAIAAAAgAhFhFQgeAdABAoQgBApAeAdQAdAeAogBQApABAdgeQAegdgBgpQABgogegdQgdgegpABIAAAAQgoAAgdAdg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AifB4IAAgCQgJABgLABQgxgBgjgjQgjgjAAgxQAAgwAjgjQAjgjAxgBQALABAJABIAAgCIHKAAIAADvg");
	this.shape_6.setTransform(19,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,75.5,21.5);


(lib.StepAhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer: Text
	this.text = new cjs.Text("step", "14px 'Helvetica'", "#CCCCCC");
	this.text.lineHeight = 0;
	this.text.lineWidth = 48;
	this.text.setTransform(13.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:NaN},0).wait(1).to({x:14.5,color:NaN},0).to({_off:true},1).wait(1));

	// Layer: Triangle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAGIg2A2IAAh3IA2A1IAAg1IA7A7Ig7A8g");
	this.shape.setTransform(1.3,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAGIg2A2IAAh3IA2A1IAAg1IA7A7Ig7A8g");
	this.shape_1.setTransform(1.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer: Circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AAAB3QgwABgjgkQgkgjABgxQgBgwAkgjQAjgkAwABQAxgBAjAkQAkAjgBAwQABAxgkAjQgjAjgxAAIAAAAgAhFhFQgeAdABAoQgBApAeAdQAdAeAogBQApABAdgeQAegdgBgpQABgogegdQgdgegpABIAAAAQgoAAgdAdg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AifB4IAAgCQgJABgLABQgxgBgjgjQgjgjAAgxQAAgwAjgjQAjgjAxgBQALABAJABIAAgCIHKAAIAADvg");
	this.shape_6.setTransform(19,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,75.5,21.5);


(lib.Rewind = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer: Text
	this.text = new cjs.Text("rew", "14px 'Helvetica'", "#CCCCCC");
	this.text.lineHeight = 0;
	this.text.lineWidth = 48;
	this.text.setTransform(13.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:NaN},0).wait(1).to({color:NaN},0).to({_off:true},1).wait(1));

	// Layer: Triangle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAAIBOguIAABegAg3AwIAAheIAgAAIAABeg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAAIBOguIAABegAg3AwIAAheIAgAAIAABeg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer: Circle
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AAAB3QgwABgjgkQgkgjABgxQgBgwAkgjQAjgkAwABQAxgBAjAkQAkAjgBAwQABAxgkAjQgjAjgxAAIAAAAgAhFhFQgeAdABAoQgBApAeAdQAdAeAogBQApABAdgeQAegdgBgpQABgogegdQgdgegpABIAAAAQgoAAgdAdg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AifB4IAAgCQgJABgLABQgxgBgjgjQgjgjAAgxQAAgwAjgjQAjgjAxgBQALABAJABIAAgCIHKAAIAADvg");
	this.shape_6.setTransform(19,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,75.5,21.5);


(lib.Play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer: Text
	this.text = new cjs.Text("play", "14px 'Helvetica'", "#CCCCCC");
	this.text.lineHeight = 0;
	this.text.lineWidth = 48;
	this.text.setTransform(13.5,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:NaN},0).wait(1).to({color:NaN},0).to({_off:true},1).wait(1));

	// Layer: Triangle
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agxg5IBjA5IAAAAIhjA6g");
	this.shape.setTransform(1.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(6.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Agyg5IBkA5IABAAIgBAAIAAAAIhkA6g");
	this.shape_2.setTransform(1.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF9900").s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(6.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Agyg5IBkA5IAAAAIAAAAIAAAAIhkA6g");
	this.shape_4.setTransform(1.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(2));

	// Layer: Circle
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9900").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAABjQgoABgdgeQgegdABgpQgBgoAegdQAdgeAoABQApgBAdAeQAeAdgBAoQABApgeAdQgdAdgpAAIAAAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9900").s().p("AAAB3QgwABgjgkQgkgjABgxQgBgwAkgjQAjgkAwABQAxgBAjAkQAkAjgBAwQABAxgkAjQgjAjgxAAIAAAAgAhFhFQgeAdABAoQgBApAeAdQAdAeAogBQApABAdgeQAegdgBgpQABgogegdQgdgegpABIAAAAQgoAAgdAdg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AifB4IAAgCQgJABgLABQgxgBgjgjQgjgjAAgxQAAgwAjgjQAjgjAxgBQALABAJABIAAgCIHKAAIAADvg");
	this.shape_9.setTransform(19,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,75.5,21.5);


(lib.Symbol40_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" from PHYSCLIPS", "11px 'Verdana'", "#0000FF");
	this.text.lineHeight = 0;
	this.text.lineWidth = 111;
	this.text.setTransform(0,0,1,0.995);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,17.3);


// stage content:
(lib.split_ring1_Canvas = function(mode,startPosition,loop) {
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
		
		this.button_step.addEventListener("click", fl_ClickToGoToAndStopFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndStopFromFrame_2()
		{
			var frameNumber = this.currentFrame+1; //step goes higher after we click rewind button
			if (frameNumber > 43){
				this.gotoAndStop(1);
			}
			else {
				this.gotoAndStop(frameNumber);
			}
		}
		
		this.Physclips.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.animations.physics.unsw.edu.au/", "_blank");
		}
		
		this.button_rew.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndPlay(1);
		}
		
		this.button_stop.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			var f = this.currentFrame;
			this.gotoAndStop(f);
		}
	}
	this.frame_42 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(1));

	// Layer 25
	this.text = new cjs.Text("THE UNIVERSITY OF NEW SOUTH WALES", "11px 'Optima'");
	this.text.lineHeight = 15;
	this.text.setTransform(382.9,7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(43));

	// Physclips_logo
	this.Physclips = new lib.Symbol40_1();
	this.Physclips.setTransform(538.3,358.4,1,1,0,0,0,57.5,8.6);
	new cjs.ButtonHelper(this.Physclips, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Physclips).wait(43));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("AnaAAIO1AA");
	this.shape.setTransform(536.1,364);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(43));

	// buttons
	this.button_rew = new lib.Rewind();
	this.button_rew.setTransform(396.8,136.5);
	new cjs.ButtonHelper(this.button_rew, 0, 1, 2, false, new lib.Rewind(), 3);

	this.button_stop = new lib.Stop();
	this.button_stop.setTransform(396.8,78);
	new cjs.ButtonHelper(this.button_stop, 0, 1, 2, false, new lib.Stop(), 3);

	this.button_step = new lib.StepAhead();
	this.button_step.setTransform(396.8,106.5);
	new cjs.ButtonHelper(this.button_step, 0, 1, 2, false, new lib.StepAhead(), 3);

	this.button_play = new lib.Play();
	this.button_play.setTransform(396.8,49.5);
	new cjs.ButtonHelper(this.button_play, 0, 1, 2, false, new lib.Play(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_play},{t:this.button_step},{t:this.button_stop},{t:this.button_rew}]}).to({state:[{t:this.button_play},{t:this.button_step},{t:this.button_stop},{t:this.button_rew}]},1).to({state:[{t:this.button_play},{t:this.button_step},{t:this.button_stop},{t:this.button_rew}]},41).wait(1));

	// Colors (Motion)
	this.instance = new lib.Symbol40("synched",0);
	this.instance.setTransform(126.6,191.4,1,1,0,0,0,90.8,19);

	this.instance_1 = new lib.Symbol41("synched",0);
	this.instance_1.setTransform(126.7,189.2,1,1,0,0,0,88.4,23.8);

	this.instance_2 = new lib.Symbol42("synched",0);
	this.instance_2.setTransform(126.4,190.2,1,1,0,0,0,79.9,42.6);

	this.instance_3 = new lib.Symbol43("synched",0);
	this.instance_3.setTransform(127.8,190.2,1,1,0,0,0,68.4,58.1);

	this.instance_4 = new lib.Symbol44("synched",0);
	this.instance_4.setTransform(135.6,189.7,1,1,0,0,0,60.5,67.8);

	this.instance_5 = new lib.Symbol45("synched",0);
	this.instance_5.setTransform(143.9,189.1,1,1,0,0,0,51.6,71.2);

	this.instance_6 = new lib.Symbol46("synched",0);
	this.instance_6.setTransform(136.1,188.4,1,1,0,0,0,59.8,67.8);

	this.instance_7 = new lib.Symbol47("synched",0);
	this.instance_7.setTransform(128.2,188.1,1,1,0,0,0,67.9,58);

	this.instance_8 = new lib.Symbol48("synched",0);
	this.instance_8.setTransform(126.1,188.2,1,1,0,0,0,79,42.4);

	this.instance_9 = new lib.Symbol49("synched",0);
	this.instance_9.setTransform(126.3,187.5,1,1,0,0,0,87.8,24.1);

	this.instance_10 = new lib.Symbol50("synched",0);
	this.instance_10.setTransform(126.8,191.4,1,1,0,0,0,90.8,19);

	this.instance_11 = new lib.Symbol51("synched",0);
	this.instance_11.setTransform(126.5,188.7,1,1,0,0,0,89.2,22.4);

	this.instance_12 = new lib.Symbol52("synched",0);
	this.instance_12.setTransform(126.3,190.5,1,1,0,0,0,81.2,41.2);

	this.instance_13 = new lib.Symbol53("synched",0);
	this.instance_13.setTransform(126.8,190.4,1,1,0,0,0,69,57.3);

	this.instance_14 = new lib.Symbol54("synched",0);
	this.instance_14.setTransform(134.9,189.9,1,1,0,0,0,61.1,67.6);

	this.instance_15 = new lib.Symbol55("synched",0);
	this.instance_15.setTransform(143.4,189.1,1,1,0,0,0,52.1,71.2);

	this.instance_16 = new lib.Symbol56("synched",0);
	this.instance_16.setTransform(135.4,188.2,1,1,0,0,0,60.5,67.6);

	this.instance_17 = new lib.Symbol57("synched",0);
	this.instance_17.setTransform(127.4,187.8,1,1,0,0,0,68.6,57.4);

	this.instance_18 = new lib.Symbol58("synched",0);
	this.instance_18.setTransform(126,187.9,1,1,0,0,0,80.2,41.1);

	this.instance_19 = new lib.Symbol59("synched",0);
	this.instance_19.setTransform(126.4,188.7,1,1,0,0,0,88.5,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).to({_off:true},1).wait(19).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1));

	// Colors (Stationary)
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE4A4").s().p("AgXAKIABgVIAFgDIApAFIgCAYg");
	this.shape_1.setTransform(167.4,224.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEEFB2").s().p("AhBA4IAehBQAXgmAMgHIAMgHIA2ADIgOAEIgNAKIgVAcIgiBLIgLADg");
	this.shape_2.setTransform(173.9,216.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCB27C").s().p("AAPACIgpgDIARAAIAkADg");
	this.shape_3.setTransform(168.3,222.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A07658").s().p("AgLA3QgHg7gSgmIAAgBQAegjAPAjIAQApIAMA/g");
	this.shape_4.setTransform(181.4,219.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEA976").s().p("AjlAAIAAgEIFxAEIBaAFg");
	this.shape_5.setTransform(209.3,223.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#846249").s().p("AieBEIgMhBIgRgnQgQgkgeAkIAAABQgjAygKAxIgjAEIACgaIAMAAIALgDIAlhLIAUgcIANgKIAOgEQAkgFAVB7IAAAEIHLAIIACAIIgEATg");
	this.shape_6.setTransform(201.1,218.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAAACIAAgDIABADg");
	this.shape_7.setTransform(37,299.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DCDCDC").s().p("AgugIIgEgWIASgGIADAAIAHAcQAHAjBCAIQgPACgNAAQg7AAgKgtg");
	this.shape_8.setTransform(74.1,339.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8F8F8F").s().p("ABAAsIgIgcIgVgWQiKg4AdgeIALgVIAVgGIgKAOIgCANIADASIAKAMIA9AgIAfATIASAVIAKAiQAHA5g5ATQAvglgMgng");
	this.shape_9.setTransform(77.6,334.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#900000").s().p("AmHEiIkqgwIiohFIgchQIgCl4IABAAIAYA3QDUBMAhgOIDiAdIFtALIF7gRICegXQCXgGC5hHIAng7IACF8IgoBOIi1BIIk2A2IlnAVgApUBWIACAVQAjBoBrgcQA5gTgHg5IgKgiIgSgWIgfgUIg/gfIgKgLIgDgRIACgOIAKgOQA0gBAOAdIAIAdIAeAAIAMgCIgDgbQgihThVAXIgDAAIgBABQgvAIgEAzIACAaQAKAZAMAIQB8A2gIAWIgBAcIgEAHIgOAKQhDgIgIglIgGgbIgEAAIgYgCg");
	this.shape_10.setTransform(125.9,328);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D5D5D5").s().p("AhaA8IgCgWIAdAAIADAWQANA5BUgMIAOgKIAEgIIABgbQAIgWh6g1QgMgHgKgcIgCgaQAEgzAvgIIABgBIADAAQBTgXAiBTIADAcIgMADIgeAAIgIgfQgOgdgyACIgVAGIgLAVQgdAeCKA1IAVAZIAIAcQAMAngvAlQgXAGgTAAQhHAAgbhSg");
	this.shape_11.setTransform(75.5,332.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#555555").s().p("AgIhXIACgPIAQAkIgCClIgRAEg");
	this.shape_12.setTransform(70.6,292.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B2B2B2").s().p("AA0BpIhsjUIAOgDIBjDBIABAWIgDAGg");
	this.shape_13.setTransform(75.8,286.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000BD").s().p("An4BeIiygPIi1gqIgWgmIgDgBQDHhmKHgIIFdADIENARIDWAfIBjAoIABAEIgnAqQiNAyk0ATQjMATjhAAQjjAAj6gTg");
	this.shape_14.setTransform(125.4,260.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000055").s().p("AmDEPIjigdQggAOjVhMIgYg3IgCgGIgFmBIAEABIAVAoIC1ApICyAPQH0AmGWgmQE0gSCNgzIAngrIABGDIgnA6Qi4BHiYAHIidAWIl8ASgAm4CtIAgAEIALgFIgBkLIgigBIgDAUIgDCeIhkjBIgggDIgNAEIgEEJIAdAFIATgFIACilg");
	this.shape_15.setTransform(125.4,287);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C4C4C").s().p("AgBiFIAFgCIABELIgJAEg");
	this.shape_16.setTransform(85.1,291.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E1E1E1").s().p("AA3CMIhei3IgSgkIgCAPIgBC/IgdgFIAEkJIAeADIBtDUIACAFIADgFIgBgXIACieIAEgUIAaADIgCEOg");
	this.shape_17.setTransform(75.7,290.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8E8E8E").s().p("AgZgdIAOACQgCApAnAQQgvgFgEg2g");
	this.shape_18.setTransform(74.1,87.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000010").s().p("AAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(36.1,66.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#636363").s().p("AABBrIgGgCIABjTIAEABIAGARIgCDDIgDABg");
	this.shape_20.setTransform(72.6,39.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5D5D5D").s().p("AgcB+IAogFIAegUQA+hwhogYIACAAQB1AdhFBrQgRAZgtAAIgQAAgAg7g0IgMgMIgDgWQAKguA6AIIgjAHQgHgBgOAgQgGAaAbAOg");
	this.shape_21.setTransform(80.1,81.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7D7D7D").s().p("AAHAcQgGgngOgSQAgAYgGAjg");
	this.shape_22.setTransform(85.5,70.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#787878").s().p("AA2BkIhujHIgBgCIAIACIBrDDIAAAGg");
	this.shape_23.setTransform(78.4,32.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("ABNB2IAGACIgjACgAhchvIAdgBIAHABIAAABgAA8h3IAbgCIAGACg");
	this.shape_24.setTransform(78.5,61.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#565656").s().p("AgECKIADkVIAGACIgFEVg");
	this.shape_25.setTransform(87.8,35.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhqYpIAXgHIAYABIgRAGgAA0PYIAjABIgIACgAhhPKIANgEIAgADIgOADgAgltaIgTgQQgbgdACgkIAdgFQAEA4AwAFIAAAAIAEABQBZgMgcg8IgOgMIhQgZIgTgLIgIgKQgvh+CRAHQASACAMANQARATAFApIgdAEQgDgsglgFQg4gJgKAvIADAWIALAMIATAFIAcAJIACAAIADABIABAAIAEACIACAAQBpAXg+BzIgeATIgqAGgAhJ4aIAggCIABACIBuDJIAEABIAAgFIADjFIAAgMIAdgCIgCEXIgbACIgGAAIhpi9IgHgRIgFgBIAADWIgdABg");
	this.shape_26.setTransform(76.8,178.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#614B3B").s().p("AhDgxIAZABIAQgDIAIACQA4BfAeAEQgKACgJAAQhFAAgvhlg");
	this.shape_27.setTransform(172.5,166.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FBB17C").s().p("AgkABIAXgCIAxAAIgfADg");
	this.shape_28.setTransform(167.1,159);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEB785").s().p("AABAMIgVAAIgFgYIAGAAIAoABIADAIIACAQg");
	this.shape_29.setTransform(165.4,160.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFF8C0").s().p("AggAxIALgsIAEg+IABgGIAFAAIAsABIgCAlQAABZgfAAQgNAAgTgPg");
	this.shape_30.setTransform(179.9,162.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FBB881").s().p("AkAAwIG2hbQgCgGBNAAInSBig");
	this.shape_31.setTransform(204.3,151.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#82624A").s().p("AjFB/QgegFg6hgIgIgDIgQAEIgDgTIgCgHIAfgDIAEABIAiA8IAUAZQBBA1AAiBIACgiIHShkIADAAIAEAdInLBcQABCEg0AAIgCAAg");
	this.shape_32.setTransform(199.2,159.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2E0000").s().p("AtvAGIAZgQIAOgDQBqgUE8gKIIRgGIDtACIEqAMIC5ARIATAFIAeANIhRATIi0APIjsAKIliAGIgrAAQqYAAjJgsg");
	this.shape_33.setTransform(124.4,106.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B20000").s().p("AtxiTIABgBIAWggQBrgsFpgSIGegJIFUAHIEhAXIC9AiIAoAkIAAGNIgegPIgTgFIi5gRIkrgMIjsgDIoRAHQk9AKhqAUIgNACIgZATgAorAdQgCAkAaAdIAUAQIApAJQA8AEAUgdQBFhsh0gcIgEAAIgCAAIgDgCIgBAAIgEgBIgCAAIgdgJQgbgNAFgaQAOggAIAAIAjgGQAlAFACAsIAjgCQAHglgigZQgNgNgRgCQiTgHAuB+IAIAKIATALIBTAXIANAMQAdA8haAMIgDgBIgBAAQgpgQABgrIgNgCg");
	this.shape_34.setTransform(124.3,81.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00006F").s().p("AtvEUIgFmOIAZg1ICtgzIEMggIGVgRIF2ANIEwAjICuAvIAIAEIAGAKIAfApIAAGOIgngkIi9giIkhgWIlUgIImeAJQlpAThrAsIgXAfgAohimIgCERIAkABIADgBIACjCIBrC7IAGAAIAhAAIAEkVIgIgDIgdADIAAALIgDDEIhtjEIgIgBg");
	this.shape_35.setTransform(124,39.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},41).wait(1));

	// Voltage V
	this.text_1 = new cjs.Text("V", "24px 'Verdana'");
	this.text_1.lineHeight = 31;
	this.text_1.setTransform(263,169.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("ABfj7QASAAASADQBSAKA9A8QA2A3AOBIQAFAZAAAaQAAAbgFAZQgOBHg2A3QhLBKhoAAQhnAAhJhKQhLhKAAhoQAAhnBLhLQBJhJBnAAgAlal8IG6AAIAAB6ABeEGIAAB3ABZF9ImzAA");
	this.shape_36.setTransform(262.7,186.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.text_1}]}).to({state:[{t:this.shape_36},{t:this.text_1}]},1).to({state:[{t:this.shape_36},{t:this.text_1}]},41).wait(1));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3jcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_1 = new cjs.Graphics().p("A3jcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_2 = new cjs.Graphics().p("A3EcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_3 = new cjs.Graphics().p("A2lcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_4 = new cjs.Graphics().p("A2FcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_5 = new cjs.Graphics().p("A1mcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_6 = new cjs.Graphics().p("A1GcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_7 = new cjs.Graphics().p("A0ncMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_8 = new cjs.Graphics().p("A0HcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_9 = new cjs.Graphics().p("AzocMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_10 = new cjs.Graphics().p("AzIcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_11 = new cjs.Graphics().p("AypcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_12 = new cjs.Graphics().p("AyJcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_13 = new cjs.Graphics().p("AxpcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_14 = new cjs.Graphics().p("AxKcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_15 = new cjs.Graphics().p("AwqcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_16 = new cjs.Graphics().p("AwKcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_17 = new cjs.Graphics().p("AvqcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_18 = new cjs.Graphics().p("AvLcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_19 = new cjs.Graphics().p("AurcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_20 = new cjs.Graphics().p("AuLcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_21 = new cjs.Graphics().p("AtscMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_22 = new cjs.Graphics().p("AtMcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_23 = new cjs.Graphics().p("AstcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_24 = new cjs.Graphics().p("AsNcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_25 = new cjs.Graphics().p("ArucMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_26 = new cjs.Graphics().p("ArOcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_27 = new cjs.Graphics().p("AqvcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_28 = new cjs.Graphics().p("AqQcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_29 = new cjs.Graphics().p("ApwcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_30 = new cjs.Graphics().p("ApRcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_31 = new cjs.Graphics().p("AoxcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_32 = new cjs.Graphics().p("AoRcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_33 = new cjs.Graphics().p("AnxcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_34 = new cjs.Graphics().p("AnRcMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_35 = new cjs.Graphics().p("AmycMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_36 = new cjs.Graphics().p("AmScMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_37 = new cjs.Graphics().p("AlycMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_38 = new cjs.Graphics().p("AlScMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_39 = new cjs.Graphics().p("AkycMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_40 = new cjs.Graphics().p("AkScMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_41 = new cjs.Graphics().p("AjycMIAA3dMAxwAAAIAAXdg");
	var mask_graphics_42 = new cjs.Graphics().p("AjycMIAA3dMAxwAAAIAAXdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:167.7,y:180.4}).wait(1).to({graphics:mask_graphics_1,x:167.7,y:180.4}).wait(1).to({graphics:mask_graphics_2,x:170.8,y:180.4}).wait(1).to({graphics:mask_graphics_3,x:174,y:180.4}).wait(1).to({graphics:mask_graphics_4,x:177.1,y:180.4}).wait(1).to({graphics:mask_graphics_5,x:180.3,y:180.4}).wait(1).to({graphics:mask_graphics_6,x:183.4,y:180.4}).wait(1).to({graphics:mask_graphics_7,x:186.6,y:180.4}).wait(1).to({graphics:mask_graphics_8,x:189.7,y:180.4}).wait(1).to({graphics:mask_graphics_9,x:192.9,y:180.4}).wait(1).to({graphics:mask_graphics_10,x:196,y:180.4}).wait(1).to({graphics:mask_graphics_11,x:199.2,y:180.4}).wait(1).to({graphics:mask_graphics_12,x:202.3,y:180.4}).wait(1).to({graphics:mask_graphics_13,x:205.5,y:180.4}).wait(1).to({graphics:mask_graphics_14,x:208.7,y:180.4}).wait(1).to({graphics:mask_graphics_15,x:211.9,y:180.4}).wait(1).to({graphics:mask_graphics_16,x:215,y:180.4}).wait(1).to({graphics:mask_graphics_17,x:218.2,y:180.4}).wait(1).to({graphics:mask_graphics_18,x:221.4,y:180.4}).wait(1).to({graphics:mask_graphics_19,x:224.6,y:180.4}).wait(1).to({graphics:mask_graphics_20,x:227.7,y:180.4}).wait(1).to({graphics:mask_graphics_21,x:230.9,y:180.4}).wait(1).to({graphics:mask_graphics_22,x:234,y:180.4}).wait(1).to({graphics:mask_graphics_23,x:237.2,y:180.4}).wait(1).to({graphics:mask_graphics_24,x:240.3,y:180.4}).wait(1).to({graphics:mask_graphics_25,x:243.5,y:180.4}).wait(1).to({graphics:mask_graphics_26,x:246.6,y:180.4}).wait(1).to({graphics:mask_graphics_27,x:249.8,y:180.4}).wait(1).to({graphics:mask_graphics_28,x:252.9,y:180.4}).wait(1).to({graphics:mask_graphics_29,x:256,y:180.4}).wait(1).to({graphics:mask_graphics_30,x:259.2,y:180.4}).wait(1).to({graphics:mask_graphics_31,x:262.3,y:180.4}).wait(1).to({graphics:mask_graphics_32,x:265.5,y:180.4}).wait(1).to({graphics:mask_graphics_33,x:268.7,y:180.4}).wait(1).to({graphics:mask_graphics_34,x:271.9,y:180.4}).wait(1).to({graphics:mask_graphics_35,x:275.1,y:180.4}).wait(1).to({graphics:mask_graphics_36,x:278.3,y:180.4}).wait(1).to({graphics:mask_graphics_37,x:281.5,y:180.4}).wait(1).to({graphics:mask_graphics_38,x:284.7,y:180.4}).wait(1).to({graphics:mask_graphics_39,x:287.9,y:180.4}).wait(1).to({graphics:mask_graphics_40,x:291.1,y:180.4}).wait(1).to({graphics:mask_graphics_41,x:294.3,y:180.4}).wait(1).to({graphics:mask_graphics_42,x:294.3,y:180.4}).wait(1));

	// sine
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#990000").ss(1,1,1).p("Ap4EzIAyjDQBBjYBIhuQBkiZBkBYQB9BtB1HfAAAE4IAzjFQBBjYBIhuQBkiZBkBYQB9BtB1HeIA1jFQBBjZBIhtQBkiZBkBXQB9BtB1HgAztE3IAyjFQBBjZBIhtQBliZBkBXQB8BtB1HcQAAACABAC");
	this.shape_37.setTransform(461.8,252.1);

	this.shape_37.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(43));

	// Layer 27
	this.text_2 = new cjs.Text("-", "bold 14px 'Verdana'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 16;
	this.text_2.setTransform(278.5,145.4);

	this.text_3 = new cjs.Text("+", "bold 12px 'Verdana'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 15;
	this.text_3.lineWidth = 16;
	this.text_3.setTransform(278.6,208.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_3},{t:this.text_2}]}).to({state:[{t:this.text_3},{t:this.text_2}]},1).to({state:[{t:this.text_3},{t:this.text_2}]},41).wait(1));

	// arrowheads
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000033").ss(1,1,1).p("A06llIAzgzIAxAxAUKGZIAxgxIgzgz");
	this.shape_38.setTransform(463.7,247.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(43));

	// graph axis
	this.text_4 = new cjs.Text("Voltage", "11px 'Verdana'");
	this.text_4.lineHeight = 15;
	this.text_4.setTransform(289,231,1,1.002);

	this.text_5 = new cjs.Text("Time", "11px 'Verdana'");
	this.text_5.lineHeight = 15;
	this.text_5.setTransform(560,284.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000033").ss(1,1,1).p("A0cAAMAo5AAA");
	this.shape_39.setTransform(466,284);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000033").ss(1,1,1).p("AAAr+IAAMAIAAL9");
	this.shape_40.setTransform(335,283.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.text_5},{t:this.text_4}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.text_5},{t:this.text_4}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.text_5},{t:this.text_4}]},41).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(335.5,194.5,563.2,360.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;