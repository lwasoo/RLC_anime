(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 600,
	height: 420,
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



(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text(" from PHYSCLIPS", "11px 'Verdana'", "#0000FF");
	this.text.lineHeight = 0;
	this.text.lineWidth = 111;
	this.text.setTransform(0,0,1,0.995);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,17.3);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE9869").s().p("AhJATIAAgTIADgmIABgCIADgRQAWhZAsglIAWgOIA1AEIgXAPQguAigVBoIgEBBQABAvAJAXQALBIBDAdIgTACQhrAAgQizg");
	this.shape.setTransform(226.1,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A06F").s().p("Ag5B7QBth+hXh+QBEgYAUBdQAPBPgcA5QgbA7gjAAQgRAAgSgMg");
	this.shape_1.setTransform(266,42.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C59E6E").s().p("Ag4B5QAVgJAQgbIATgwIA0AFIgKAeIgPAYQgVAkgbAAQgQAAgTgLgAACARIADgpIABgCIApgeIgvgDQgBgZgOgWIgUgVQBJgYATBwIgCA9g");
	this.shape_2.setTransform(238.3,40.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EAEAEA").s().p("AgLAGIgCgBIAAgFIgBAAIADgEIABgBIAEgDIABgBIAKgJIACgBIABABIAEALIACAKIgDADIgTAOg");
	this.shape_3.setTransform(255.8,48.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC07D").s().p("A0eCqIPFn8IU4BKIALACIgpAbQgygJgWAPIAEAdIALABIkgC5IEKAUIgDARIgBACIligcIFtjoIzOhLItaHGIToCVIGckIIGVAjIAAAUIlqghInAEggATqCLIgEgLIgBgCIgCgcIA8AGIgwAkgARjBqIg2gFIhhgIIgBgUIBmAIIA2AFIAYACIABAVgAPQAiIABgLIACgIIAsADQASgXAfAIIAuADIgpAeIgBACIgHADg");
	this.shape_4.setTransform(131.1,33.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEEEEE").s().p("AgMgDIAUgNIABAAIADAUIgSAOg");
	this.shape_5.setTransform(245.1,33.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#80563E").s().p("AAAAKIAAgBIAAABgAAAAAIAAAAIAAAAgAAAgIIABgBIAAABg");
	this.shape_6.setTransform(257.2,34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F4C28").s().p("AgDAhIABgDIACAAIgBACIgBABgAgCAXIABgGIABABIAAAEIAAAAIgBABgAgBANIABgIIACAFIAAACIgCAAIAAABgAAAADIAAgdIAEgGIgBAhIAAABIgBAAIgCABg");
	this.shape_7.setTransform(257.8,28.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7E5840").s().p("AgeDIQhCgYgQhnQgFADAAhTIAJg4IAUg8IAbgqIAAAfIAAABIgBAJIAAAEIgBAGIAAAGIgCAEIAAAJIgBABIAAAJIgBABIAAAJIgBABIABAJIABgIIAEgfIAAgBIABgDIABgHIAAgEIACgGIAAgDIABgHIAAgCIAGgoIAcgWIASAQIAMAGQBCAGAAgGIAIAKQAsBLgIBdQgXDHh6AAIgCAAgAgzBqIAOAOQA6AnAnhWQAcg5gPhPQgUhdhEAYQhIBHALBHIADAdIgCABIgMAJIgBABIgEADIgBABIgDAFIABABIAAAFIACABIACAOIAVgOgAhHgxIABgFIgBAAgAhGg6IACgGIgCAAg");
	this.shape_8.setTransform(264,42.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F4D2A").s().p("AgIA6IABAAIgBAFgAgHAwIABAAIgBAHgAgGAmIABAAIAAgBIAAgJIABAAIAAgBIAAgJIABAAIAAgBIAAgJIACAAIABgBIAAABIgEAgIgBAHgAgBAFIAAgFIABAAIAAgBIABAAIgBAGgAAAgGIAAgEIAAAAIABgBIABAAIgBAGgAAAgSIAAgCIABAAIABgBIABAAIgBAIgAAEg5IAGgFIgHAog");
	this.shape_9.setTransform(257.8,31.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BD9767").s().p("AhHA+IgDgoIgBgVIABAAIAEgoIALg0QAwiFBKAZIANABIgcAWIgFAFIgFAHIgbAqIgSA8IgJA4QAABTAFgDQAOBnBCAYQgMADgMAAQhUAAggiOg");
	this.shape_10.setTransform(253.9,42.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#895E44").s().p("AgXDEIgEgCIgBAAQhCgdgNhIQgJgXgCgvIAFhBQAXhoAugiIAWgPIAeATQBCAIgEgJIAEADIAYAiQALAVAKAwIgLAzIgEApIgBAAIgYgCIABg9QgShwhKAYQgIgBgZAgIgWAxIgCAIIgBALIgFAlIABAUQAHBHAiAVQAzAeAgg3IAPgYIAKgeIAdADIACAoQgoByhTAAIgGAAgABOhKIAFAXIAVgOIgEgWIgBAAg");
	this.shape_11.setTransform(235.9,40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275.9,67.9);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EEEEEE").s().p("AgMACIARgWIAIATIgQAWg");
	this.shape.setTransform(235.1,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C59D6D").s().p("Ag5B7QAVgMANgVIAOgdIA0AFIgRAgQgYAkgaAAQgQAAgRgLgAAAAeIAEgdIgDgsIACgBIAfgtIgsgEIgJgPIgSgRQA/giAeB5IACAmIgFAjg");
	this.shape_1.setTransform(229.8,57.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0996A").s().p("AhHAsIgBgfIAFg8IAHgeQA3iWBOAlIgVAPQg5A9gJBMQgHAkACApIAKA7QAeBeAyAHQiEAAgKibg");
	this.shape_2.setTransform(217.5,57.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#895E44").s().p("AgaDDQgygHggheIgKg7QgCgpAHgkQAJhMA7g9IAVgPIAfASQBBAIAAgJIAcAsIATA8IgOBBIgCAqIgagDIAFghIgCgoQgeh5g/AiIgaAVIgUAkIgKAeIgFAXIgBAkIAEAhIAPAqQAIARAPAKQAuAeAlg3IARggIAmAEIAAASQgoBvhQAAIgLAAgAA/hrIAJATIASgYIgIgTg");
	this.shape_3.setTransform(227.4,57.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C69F6E").s().p("Ag5B7QA2gkAFhbQAChagngjQBEgYAUBdQAPBPgcA5QgbA7gjAAQgRAAgSgMg");
	this.shape_4.setTransform(257.4,59.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD78B").s().p("Az2FOIMqtfIU/AyIAKACIlLGlIEYAXIgHAeIlqgfIE7mNIzWg0IrOMCITiCsIFam1IGSAjIABAeIlnggIl0HbgATACTIgLg5IBCAHIgpA8IgHAAgAQuBuIg2gFIhWgIIgEggIBkAJIA2AFIAaADIACAggAOkAEIAKgcIAaADQARgsAeAQIAuADIgfAtIgCABIgIAMg");
	this.shape_5.setTransform(127.1,53.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(248.6,68.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAEAEA").s().p("AgKAJIgDgHIADgCIABgBIABgBIAJgRIACAAIAAgBIABgCIAHALIADALIgQAXg");
	this.shape_7.setTransform(248.3,70.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#80563E").s().p("AAAALIAAgBIABAAIAAABgAAAgIIAAgCIAAACg");
	this.shape_8.setTransform(247.3,56.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E5840").s().p("AhxBJIgEhOIAJg6IASg3IAHAeIAAABIACArIAAABIAAADIABAAIAAAUIAAABIACAAIAAgBIAAgYIgCgoIgBgyIAAgBIAXgjIAjgdIASAQIAMAGQBCAGAAgGIAIAKQAsBMgIBbQgVDGh+ACQhBgYgShngAglB4QA6AnAnhWQAcg5gPhPQgUhdhEAYQg7AjgCB2IALA5IgBACIgBABIgLARIgCABIgBACIgCADIACAHIAJAOIARgYg");
	this.shape_9.setTransform(255.4,59.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F4C28").s().p("AADApIgDgpIAEABIABAogAgEgfIAEgJIAAAng");
	this.shape_10.setTransform(246.8,51.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F4D2A").s().p("AABA5IAAgVIgBgCIAAgCIADAAIAAAZgAAAgIIAAgBIgCgnIACgIIABAzg");
	this.shape_11.setTransform(247.1,52.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BF9768").s().p("AhIBBIAAgSIgCggIACgqIAOhBQAziHBHAdIALABIgjAdIgWAjIAAABIgEAHIgFAJIgRA3IgJA6IAEBOQAQBnBCAYQgMACgKAAQhYAAgfiLg");
	this.shape_12.setTransform(245.3,59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.3,106.1);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("AgGgFIABAAIAAgCIACgFIABAAIAAgBIABgFIABAAIAAgBIAAgEIAKAIIAAABIACACIABAFIgMAfQgYgKARgTg");
	this.shape.setTransform(237.5,86.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBAGIABgBIAAABgAAAAAIAAAAIAAAAgAABgEIABgBIAAABg");
	this.shape_1.setTransform(237.1,85.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7F563D").s().p("AACAJIAAgBIABAAIAAABgAgCgHIAAgCIABACg");
	this.shape_2.setTransform(234.1,75.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EFEFEF").s().p("AgMAIIANgdIAMAOIgNAdg");
	this.shape_3.setTransform(220.2,57.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C39A6B").s().p("Ag5B5QAMgEAUgYIAIgQIA0AFIgKAPQgVAigbAAQgQAAgSgKgAAAAmIAFgxQABgfgGgXIAAgCIAQgxIgsgEIgHgHQBOgUANBtIACApIgIAog");
	this.shape_4.setTransform(216.9,71.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4C28").s().p("AAKAkIgUg9IAAgCIACgIIAOAwIAAABIACAEIAAACIAAABIABAAIACAPg");
	this.shape_5.setTransform(232.7,70.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#895E44").s().p("AgcDCQhEgjgKhBIgKgyQgFgdAIg4QAOhXA2gzIAYgPIALAKIARAJQBBAJAAgMIAcAsIATA8IgOBAIgCA1IgdgDIAIgoIgCgpQgNhthOAUIgKAGIgNALIgFAIIgMARIgPAmIgIAjIAAAqIAIAoIABABIAMAeIAUAUQAxAdAhg1IAKgPIAtAEIABAAIAAABQgkBvhZAAIgIgBgAAriDIALANIAPgfIgLgOg");
	this.shape_6.setTransform(214.5,71.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F4D2A").s().p("AAMA3IAAgFIABAAIAAAFgAALAxIgEgRIgBgCIAAgCIABAAIAFAVgAADANIAAgBIABABgAACAEIgOgvIACgKIANA5g");
	this.shape_7.setTransform(233.1,71.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF9667").s().p("AhIBBIAAgCIACAAIgEgoIACg1IAOg/QA0iFBDAcIAOABQgoAKgmBuIAAABIgCAKIgDAJIAAABQglC8ByBGIgUACQhcAAgdiLg");
	this.shape_8.setTransform(232.4,73.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF9668").s().p("AhGA7IgDgoIACg1IAFgXIAKgmIAXgyQASgcAWgRIAMgHIA3AEIgXAPQg0AzgOBXQgIA4AFAdIAKAyQAIBBBEAjQgMADgLAAQhSAAghiLg");
	this.shape_9.setTransform(204.8,71.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFEBA2").s().p("Ay5HLII+xsIVQAfIjzI0IEpAXIgJAmIlygeIDnoQIzdgmIn/P1ITfC5ID1oxIGLAjIAEAoIldghIkIJggASXCyIgKgIIgRgbIgKglIAAgNIBIAHIgeBMIgFADgAQQB8IAAAAIgtgEIg3gFIhIgGIgBgBIgHgoIBhAIIA1AFIAcADIAEAogANjgJIAPgmIAHAAIAGgRIAEgIIANgLIASABIAuAEIgTAxIAAACIgLAYg");
	this.shape_10.setTransform(121,67.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C6A06F").s().p("Ag2B/IgBAAIgBgFQBrh8hXh+QBFgZATBeIAGA4QgBAogSAnQgYA6gmAAQgPAAgQgHg");
	this.shape_11.setTransform(244.6,73.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E5840").s().p("AgeDIQhzhGAli8IAWA+IAAACIAAACIABAAIAEARIAAABIABAAIAAAEIACAAIAAgEIgCAAIAAgBIgFgVIgCgNIgBgBIAAgDIgCgEIAAgBIACAAIgPg8IAAgBQAohuAogKIASAQIAMAGQBCAGAAgGIAIAKQAqBBgGBnQgXDHh6AAIgCAAgAgPiEQhGA6AKBoIAAAOIAKAkIARAcIgCADIgBACIgBAFIgBABIgCAFIgBABQgRAWAaAJIAMggIACAAQA8AcAhhPQASgoAAgoIgFg4QgPhKgwAAQgKAAgPAFg");
	this.shape_12.setTransform(242.5,73.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254.3,134.9);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C89F6F").s().p("AgrCGIAJgyQA4iZhEg8QBEgZAUBeQAPBPgcA4QgYA8gvAAg");
	this.shape.setTransform(230.5,82.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AgJASIgCgHIACgBIABgKIACAAIAAgCIABgMIABAAIAAgBIAAgFIABAAIANADIACACIgIAkg");
	this.shape_1.setTransform(225,97.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBAKIABgBIAAABgAAAgCIABgBIAAABgAABgIIAAgBIABABg");
	this.shape_2.setTransform(224.3,96.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7F563D").s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(220,89.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F4D2A").s().p("AAXAvIAAgFIABAFgAATAnIgBgBIgEgIIABgBIAAABIAFAMgAgXgkIABgKIAcA7g");
	this.shape_4.setTransform(218.1,85.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5E4B28").s().p("AgTgVIAAgLIAeAwIAAABIAJAPIgCABg");
	this.shape_5.setTransform(217.7,85.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF9869").s().p("AhGBIIABAAIgFgtIACg5IAOg/QAxiCBGAZIAOABQhDAvgQBZIgGAwIAAABIgBAKIAAAJQgLCJBfA6IgOABQhkAAgZiDg");
	this.shape_6.setTransform(217.3,82.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E5840").s().p("AgeDIQhhg6ALiJIAnA4IAEAHIAAACIABAAIABADIgFgMIAAgBIgJgPIAAgCIgeg6IAAgBIAHgvQARhaBEgvIAaAWQBEAGACgFIAKAPQApBGgHBdQgdDIhqAAIgMgBgAgPiEQhGA3AKBwIAJAqIABAEIAAABIACABIAAACIAVAfIAOAKIAAABIAAAFIgCABIgBANIgBABIgBANIgCABIACAGIAPAEIAHgnQAvAAAYg8QAcg4gPhPQgQhKgvAAQgKAAgPAFgAhEBNIABAAIgBgEg");
	this.shape_7.setTransform(227.4,82.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C2976A").s().p("Ag5B6IAWgQIANgSIA0AFIgFAHQgZAhgZAAQgQAAgQgLgAgCAtQAThOgbg5IAAgDIAHglIgPgBQA0gNAWBsIACAZIgIA9g");
	this.shape_8.setTransform(201.9,80);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#895E44").s().p("AgcDCQg6gUgUhOIgKg2QgFgSAIhAQARheAygrIAWgRIAYATIAZADIgGAgIANAFIAIgkIAUAAIANgFIAHAJIASAbQAOAdAHAnIgOA/IgCA5IgdgCIAJg9IgDgZQgWhsg2ANQgyALgTBIIgJAoIABAtIAMAtIAMAZIAQAPQAsAfAmg1IAFgHIAwAEQgkBmhVAAIgJgBg");
	this.shape_9.setTransform(199.4,80.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EFEFEF").s().p("AgJANIAGgeIANABIgIAig");
	this.shape_10.setTransform(202.5,64.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE9A5").s().p("AxxIYIEd0LIVYASIiCKRIE+AXIgNArIl6gfIB4pkIzigbIj8SDITYC+IB8pxIGFAiIAFAtIlPgfIiGKggARSDGIgBgCIgOgKIgVgfIAAgBIgBgBIAAgCIgBgDIgJgrIBPAGIgIAoIgJAygAPDCMIgFAAIgwgEIg2gFIg/gGIgMgtIBfAIIA2AFIAdACIAFAtgAMVgFQAThIA0gLIAPABIgGAlIAAADIgKAvg");
	this.shape_11.setTransform(113.8,75.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BF996A").s().p("AhDBGIgFgtIAAgrIAIgqIAMgqIAcg1IAmgmIAPgDIAsAEIgXAQQgxAsgPBeQgIA/AEASIAKA2QATBOA6AVIgSABQhZAAgdh/g");
	this.shape_12.setTransform(189.6,80.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.3,151.4);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAFIAAgIIAAgBIAAAJg");
	this.shape.setTransform(214.1,99.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5A170").s().p("AgwCFIAQACIgBABgAgQAuQAeh1g5g6QBBgbAXBgQAOBPgcA4IgPAdQgUAagNABg");
	this.shape_1.setTransform(217.5,85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAEAEA").s().p("AgHAUIAAgaIABAAIAAgLIAFAAIABgCIAHADIABAjIgHABg");
	this.shape_2.setTransform(214.9,100.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4B28").s().p("AgSgJIgJgFIgBgJIA0AoIAFAFIAAACg");
	this.shape_3.setTransform(206,94);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F4D29").s().p("AAfAcIABAAIAEAFgAgigWIgBgKIA1AwIAAABg");
	this.shape_4.setTransform(206.5,93.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E5840").s().p("AhxBJIAAgFIAIAFIAyAjIAAgCIgGgGIAAgBIg3gyIgBg4IAJg4QAZhmA8giIASAQIAMAGQBCAGAAgGIAHAJQArBAgGBpQgVDEh+ADQhBgYgShngAgPiEQhGA4AKBvIAJAmIASAmIAFAFIABACIAWAMIAPAEIAAAKIAAAbIAIAAIAIgBIgBgkIABgEIgBgBQAMgBAXgbIAPgcQAcg5gPhPQgRhLgtAAQgLAAgPAGg");
	this.shape_5.setTransform(214.6,85.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BD9869").s().p("AhGBJIABAAIgFgtIACg3IAOhBQA2iHBDAeIAMABQg8AigXBmIgJA4IACA4IABAKIABAJIAAAFQAQBnBCAYIgOABQhkAAgZiDg");
	this.shape_6.setTransform(204.6,85.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BD986B").s().p("AhCBIIgFgtIACg6IAGgaIAMgrQAzh9BIAjIgXARQg1A6gKBPIgDBOIALA6QAJA/BDAiIgRABQhaAAgdh+g");
	this.shape_7.setTransform(176.8,82.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EFEFEF").s().p("AgIASIAAgkIACgCIANAFQAGAkgNAAQgDAAgFgDg");
	this.shape_8.setTransform(186.9,67.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C0986A").s().p("Ag5B6IAZgTIAKgOIAzAFIgEAHQgYAggZAAQgQAAgRgLgAgCAuQAVh5gvgqIAAgMQBAgTAWBxIAAAuIgJAog");
	this.shape_9.setTransform(189.1,82.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFB97B").s().p("AwVIrIgg0tIVeAOIAFKwIFOAaIgNAqImDgfIgFp7IgBgEIzngZIAdShITVC7IgFpyIF8AiIAFAtIk+geIAEKfgAQsDYIgBABIgFAAIgQgCIgXgNIgBgBIgEgFIgBAAIgRgnIgJglIBXAIIgBBVIABACIgBADgAN/CbIgHAAIgvgEIg1gFIg/gGIgMgtIBfAHIA1AFIAeADIAFAtgALRAHQAMg3AxgYIAAALIAABIg");
	this.shape_10.setTransform(107.9,77.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#895E44").s().p("AgYDCIgDgBIgCAAQhCgigLg/IgLg6IADhOQAKhPA3g6IAXgRIAGACIAPANIgBACIAAAmQAWANgIgwIAuAEIASgHIAYAhQAQAgAGAoIgOBBIgCA3IgegCIAJgoIAAguQgWhxhAATQgxAZgMA5IgJAoIABAtIAMAtIANAZIAPAOQAsAeAmgzIAEgHIAvAEQgpBmhEAAIgOgBg");
	this.shape_11.setTransform(186.8,83.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.5,154.3);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EAEAEA").s().p("AgEARIgBgBIgDgRIgBgBIgCgJIAAgBIACAAIADgDIABgBIABAAIABgBIAGABIABAAIAIAcIgPALgAAEgTIgBAAIgBgDIADADg");
	this.shape.setTransform(234,95.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(232.7,94.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C49E6F").s().p("AgpCGIgBgBIgBAAIgCAAIgBgCIgLgIIAGgEIA2AFIgBABIgCADIAAAAIgBABIgKAFIgZABgAAMBzIgMhKIgDAAQAVh6g1gwQBEgZAUBeQAPBPgcA4IgFANIgWAbg");
	this.shape_2.setTransform(232.9,81.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E4C29").s().p("AAoALIAAgBIABAAIAAABgAglgCIgDgIIBJATIAEAAIABABg");
	this.shape_3.setTransform(224.4,93.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5D4B27").s().p("AgiABIgEgHIBLAMIACAAIAAABg");
	this.shape_4.setTransform(224.5,94.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BD9869").s().p("AhGA/IgEgoIAEg8IAMg4QAziFBGAcIAMABQgyATghB1IgJA4QAABTAFgDIAIAjIACAIIACAJIAZAtQAcAbAQADQgLACgKAAQhcAAgaiNg");
	this.shape_5.setTransform(220.8,81.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E5840").s().p("AgeDIQgPgDgcgbIgZgtIBLAGIABAAIAAgBIABABIAFACIAXgCIAKgFIABAAIACAJIABABIACATIACABIABAHIAQgMIgHgeIAAgCIABAAIgEgEIAAgCIABAAIAWgcIAFgMQAcg5gPhPQgUhdhEAYQhGA6AKBoIAIApIABACIAJAWIAUAZIALAJIgEAAIhLgVIgHgjQgFADAAhTIAJg4QAjh1AygTIASAQIAMAGQBCAGAAgGIAIAKQAsBLgIBdQgXDHh6AAIgCAAg");
	this.shape_6.setTransform(230.9,81.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0986A").s().p("Ag5B7IAbgUIAMgUIA0AFIgKAPQgXAfgYAAQgQAAgSgLgAgCAsQAchlg9hDQA8gmAhCBIAAAnIgIArg");
	this.shape_7.setTransform(205.3,78.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0F0F0").s().p("AgKgNIAMgHIABAAIAIAgIgNAJg");
	this.shape_8.setTransform(200.1,64.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D48B5E").s().p("As1ICIlezNIVaAVQAMgXAJBFICGJcIFbAbIgKAlImLgeIiHpaIgEgBIzngdIE1RKITOCxIh/o3IFzAhIAEAoIksgcICHJdgASSDgIgIgBIgBABIgBAAIg4gFIgKgBIgIgqIgRgBIgBgBIgIgpIBbAIIAEAAIAOBKIAAADIABADIABAAIAAADgAPBCkIgugEIg2gFIhGgGIgJgpIBgAIIA2AFIAcADIAEAogAMVAdIANgmIAZgfIARBJg");
	this.shape_9.setTransform(117.2,71.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BD996B").s().p("AhEA/IgEgoIAAgpIAHgjIAKgnQAwiDBOAgIgXASQgxAzgNBWQgGAJACBGIALA5QAcBYA0AJIgTABQhdAAgdiHg");
	this.shape_10.setTransform(193.1,79.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#895E44").s().p("AgYDCQg0gJgehYIgLg5QgChGAGgJQANhWAzgzIAXgSQASAiBQgQIAZAkQARAjAFAiIgNA4IgEA8IgcgCIAHgrIAAgnQggiBg9AmIgQALIgZAfIgOAoIgHAlIABAoIAJApIANAeIASARQAsAeAkgyIAKgPIAvADQgjBuhbAAIgCgBgAgmigIAHAkIAPgJIgHgjIgBAAg");
	this.shape_11.setTransform(203,79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242.8,143.4);


(lib.Symbol33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D4C29").s().p("AgkAGIBJgSIhFAZg");
	this.shape.setTransform(241.1,86.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F0F0").s().p("AgLgFIALgPIAMAYIgBAGIgLALg");
	this.shape_1.setTransform(212.4,57.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF9869").s().p("AhIA8IAAgNIgCghIAEg1IAMg4QAziDBHAbIALABQhDAvgQBaIgJA5IAEBOIAKAoIATAsIAEAGIAFAGIAPARIAdAPQgMACgMAAQhXAAgeiQg");
	this.shape_2.setTransform(235.7,71.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C39B6C").s().p("Ag5B6QARgIAQgWIAOgbIAzAFIgSAgQgXAfgaAAQgPAAgQgLgAAAAjQAUhxg3gwQBHgdAUB5IACAmIgHAjg");
	this.shape_3.setTransform(220.2,68.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#895E44").s().p("AhqBjQgIgUgEg1IAFg/QAThmArgkIAZgTQASAkBSgRIAXAhQAPAiAHAlIgMA5IgFA1IgbgDIAGgjIgBgmQgUh5hHAcIgYASIgNAUIgOAZIgHAcIgHAmIACAYIAFAgIAOAlIAGALIAQAQQAoAdAngxIATggIAoAEIAAANQgiBuhhAAQg7gTgVhMgAhBh8IAMAcIALgLIABgGIgNgbg");
	this.shape_4.setTransform(217.8,69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BE996A").s().p("AhFAwIgCggIAEg9IAIggIAVg3QAKgWAcgdIATgMIA1ADIgZATQgrAkgRBmIgFA/QAEA1AIATQATBNA7ATIgHAAQh3AAgPiUg");
	this.shape_5.setTransform(207.8,68.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAEIACgEIgBAEgAACgDIABAAIgDADg");
	this.shape_6.setTransform(250.1,81.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9E9E9").s().p("AAAAXIgCgIIgBgBIgEgKIgBgBIgEgHIACgEIAAgBIAEgEIAGABIgBgIIgBgCIABAAIABAAIANAaIgLATg");
	this.shape_7.setTransform(251.2,82.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D4A27").s().p("AgpAMIBFgYIABAAIABAAIAAgBIACACIhEAdgAAjgPIACgBIACAAIgEADgAAogQIACgBIAAABg");
	this.shape_8.setTransform(242,86.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D553D").s().p("AgBABIAAgBIABAAIAAABgAAAAAIACAAIAAAAg");
	this.shape_9.setTransform(245.3,85.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#815940").s().p("ApyGfIp1v0IVmAmIETIgIFnAaIgIAgImHggIgKgDIkAnyIzugsIItOIITMCgIjpnIIFqAgIADAgIkbgbID2HngATgDXIgBAAIg4gFIAAABQgKANgPgxIgmgCIgEghIBdAIIAKABIAZA5IABACIADAIgAPbCfIg2gFIhSgIIgFgfIBhAJIA2AEIAbACIADAhgANTAzIAHgcIAOgXIAbA2g");
	this.shape_10.setTransform(125.6,59.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C69F6F").s().p("AgQCHIgCAAIgSAAIgVgMIAUgPIAJgMIAAgBIA2AFIgDAEIAAABIgDAEIgMAMIgTAMIgBABIgBAAIgCABgAAfBbIgZg5IgIgBQAThtg0g1QBEgZAUBeQAPBPgcA4IgIAQg");
	this.shape_11.setTransform(247.7,71.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E5840").s().p("Ag6C5IgPgQIBGgfIgCgDIgBAAIAAABIgBAAIhLAUIgVgrIgKgoIgEhOIAJg6QARhZBEgvIASAQIAMAGQBCAGAAgGIAIAKQAsBMgIBbQgVDGh+ACgAApBqIAEAJIABABIAEAKIABACIACAHIAEAAIALgTIgNgbIgDAAIAIgQQAcg5gPhPQgUhdhEAYQg8AjAAB4IAEAgIALAjQAHARAQANIAVANIAQAAIgBABIgBAAIABABIADgCIABAAIACAAIAAgCIABAAIABgBIAVgLIAMgNg");
	this.shape_12.setTransform(245.7,71.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.6,119.7);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C59D6D").s().p("Ag5B4QAPgEAXgiIARgmIAyAFIgHAXIgTAdQgWAegYAAQgQAAgRgLgAABAYQALh6gvgeQBUgPAIBtIABAgIgEAdg");
	this.shape.setTransform(232.3,52.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0F0F0").s().p("AgNAAIAHgPIADgEIARATIgDAHIgBADIgBAEIAAABIgBABIgCAAIgDAEg");
	this.shape_1.setTransform(222.5,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#895E44").s().p("AgcDBQg/gfgPhAQgIgQgEg1IAEhDQANhZAxgwIAagTQASAjBSgQIAXAgQAPAiAHAnIgLAvIgGAxIgYgCIADgdIgBghQgIhshTAOIgZATIgXAiIgTgVIgDADIgHASIASAUIADgEIACAAIgIAjIgDAnIACAUIAKArQAPAkAPAGQAsAeAjgwIATgdIAHgYIAfADIADAgIAAADQgwBwhAAAQgKAAgLgCg");
	this.shape_2.setTransform(230,53.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF9869").s().p("AhHAZIAAgUIADgoIACgVIAahKQAKgUAeghIARgNIA3AEIgZATQgvAwgNBZIgFBDQAFA1AIAQQAMBAA/AfQgMACgLAAQhfAAgXisg");
	this.shape_3.setTransform(219.9,52.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D543D").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(259.7,68.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C4A27").s().p("AgiAhIAzgwIgtAygAAQgRIAGgGIAHgGIABAAIgNAMgAAegeIADgDIABgBIABAAIgFAFg");
	this.shape_5.setTransform(256.7,71.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5D4B29").s().p("AgmAgIA2guIACAAIABAAIAAACIg0AwgAAjgfIAAgBIAEgDIAAABIgDADg");
	this.shape_6.setTransform(256.6,71.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAJIABgBIAAABgAgCAFIACgEIgBAEIAAABgAADgIIABAAIAAABg");
	this.shape_7.setTransform(264.2,62.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9E9E9").s().p("AgNABIAAgBIABAAIAAAAIACgEIAAgBIABgCIAAgBIAHAAIgDgGIAAgBIgCAAIAAgCIACgCIABAAIAEABIAOASIgIAUg");
	this.shape_8.setTransform(265.3,63.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#382D26").s().p("AnaEOItSq5IUiA+QBbgCgIATIFxFpIFsAeIgCAVImUgiIlllZIzthAILxJsITKCMIk7kzIFjAfIAAAUIkLgYIFKFHgAUlDBIg4gFQgHAJgYghIg1gFIgBgVIBgAIIAPADIAgAjIABABIABABIADAHgAQWCUIg0gFIhggJIgBgUIBlAJIA2ADIAZADIAAAVgAODBJIAIgjIABgCIAAACIAnAmg");
	this.shape_9.setTransform(132.5,42.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C79F6F").s().p("AguCDIgLgJQAPgGAPgVIAQghIA2AFIAAABIgBACIAAABIgCAEIABABIgBABIgCABIgIASIgYAaIgEADIAAABIgBABIgBAAIgbAJgAAtA6IgggjIgNgCQAQhcgzg7QBEgYAUBdIAFA7IgLA6IgBACg");
	this.shape_10.setTransform(259.9,55.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E5840").s().p("AgdDIIgKgFIAtg0IAAgCIANgMIAFgFIACgDIAAgBIAYgaIAJgSIABAAIAVATIAIgWIgPgSIgFgBIgBAAIALg6IgFg7QgUhdhEAYQg5AkgEBqIABAVIALAyQAOAhAMAGIAMAJIASAFIAbgJIABAAIgCADIgBABIgIAGIgFAGIgBAAIg2AwQglgMgZhoQgHgWACg6IAJg4QAjh1AygTIATAQIAMAGQBCAGgBgGIAIAKQAqBBgFBnQgYDHh5AAIgCAAgABBA4IABAAIAAACg");
	this.shape_11.setTransform(257.8,55.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BF9868").s().p("AhIA8IAAgDIgCggIAAgWIAFgxIALgvQA0iFBDAcIAOABQgyATghB1IgJA4QgCA6AHAWQAXBoAlAMIAFAEIAGACIAKAFQgMACgKAAQhaAAgdiQg");
	this.shape_12.setTransform(247.8,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269.7,85.7);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("AgNAJIAEgYIAWAKIABAAIgCAKIgCAIIgBAAIgFADg");
	this.shape.setTransform(228.6,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF996A").s().p("Ag3BrIgDgGIgBgHIgDgCIACAAIgFgTIgHhJIACgGIAAgPIABgIQAei5BwAWIgbAUQgvAzgMBWQgIAzAEAbIAMA6QASBKA6AVIgIAAQhbAAgbhZg");
	this.shape_1.setTransform(227.2,32.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C4B28").s().p("AgeAzIAhg0IABAAIgcA0gAAFgDIgBAAIACgEIACAAIABABIgBADgAAdguIABgBIAAABgAAegwIABgCIAAACg");
	this.shape_2.setTransform(266.7,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C4927").s().p("AgfA4IAfg2IAAgBIAAAAIAAgBIABAAIgZA4gAABgCIABgEIACAAIAAgBIAEgIIABAAIAAgBIADgHIACAAIAAgCIAEgFIgQAdgAATgjIABgBIAAgBIABgBIACAAIgDAGIgCABgAAYgrIABAAIgBABgAAdgzIABgBIAAABgAAeg1IACgCIAAACg");
	this.shape_3.setTransform(267.3,49.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D543C").s().p("AgLAVIAAgBIABAAIAAABgAgGAMIABgBIAAABgAgBADIABgBIAAABgAACgDIABgCIAAACgAALgSIAAgCIABACg");
	this.shape_4.setTransform(268.4,47.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C79F6E").s().p("Ag5B6QAugfALhEIA3AEIAAABIgCAFIAAACIgBAFIgMAjIgIAQIgBABIAAABIgBACIgCACIgBABIAAACIgBABIgBABIAAABIgCACIgBABIAAABIgBABIAAACIgBABIgCAAQgaAZgVAAQgQAAgMgOgAA1AXIgjgNIgRgDQABh0glgVQBEgYAUBdIAFAhIgCArIAAADIAAACIAAABIgBACg");
	this.shape_5.setTransform(267.2,35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgBAKIABgFIAAAFgAAAAEIAAgEIAAAEgAAAgDIAAgBIABAAIAAABgAABgIIAAgBIABAAIAAABg");
	this.shape_6.setTransform(272.8,37.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9E9E9").s().p("AgMAIIAAgFIAAgCIABAAIAAgDIAAgBIAIAAIgHgCIAAgCIgBAAIABgCIAAgBIACAAIAAgCIgCAAIAAgDIACAAIAUAHIABAFIgGATg");
	this.shape_7.setTransform(274,38.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C9A271").s().p("Ag5B7QA4gpADg9IA1AFIgLAqIgXAlQgRAcgZAAQgQAAgUgKgAACANQANhagygwQBBgiAbCAIgBAxg");
	this.shape_8.setTransform(239.6,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#382D26").s().p("Al8BgIvak2IVkBhIHFClIFuAdIgBAIImWgiImiiWIzthcINoEUITIB1IABAHIADAGgANJDIIloiBIAVAAIFKAdIgBAHIkAgVIEGBgIAFASgAVQChIg5gEIgpgMIg3gEIABgHIBiAHIARADIAjANIACACIABAAIAGACgAQ7CCIg1gFIhngJIABgHIBmAJIA3AEIAZADIgCAHgAOgBeIAAgFIACgHIAqAPg");
	this.shape_9.setTransform(136.8,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E5840").s().p("AAXCRIABgDIAPgdIgEAFIgBACIgEAHIgBABIgEAIIgBABIgBAEIgCAAIgCAEIAAABIAAABIgBAAIghA2IgOgBQg4gJgch3IgEhPIAJg4QAShaBDgvQAVAjBLgNQAlAvAIBTQAGDHh/AygAgOiEQg6AqgCBZIgBAGQgCBKAoApQAdAhAvgtIABAAIgBAEIACgBIADgGIgBgCIABgBIABAAIAAgBIABgBIAAgCIACgBIAAgBIABgBIABgDIABAAIAAgBIAAgBIACAAIAAgCIAHgQIANgjIABAAIAVAJIAGgVIgBgFIgWgIIgCAAIADgrIgFggQgQhKgvAAQgLAAgOAFgABKAVIABAAIAAABg");
	this.shape_10.setTransform(265.2,35.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#895E44").s().p("AgbDCQg6gUgVhLIgLg5QgFgcAJgyQALhXAygzIAagUQATAlBSgRIAXAkIAWBFIgNA3IgCAdIgZgCIABgxQgciBhBAjQgkAMgXBPIgBAAIgYgKIgEAaIATAIIAFgEIABAAIAAAFIAAAOIgBAHQAEBWAnAZQAyAbAcguIAWgkIALgrIAZADIADA4IgBADQghBxhhAAIgCgBg");
	this.shape_11.setTransform(237.2,32.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BF9869").s().p("AhJA5IABgDIgCg2IABgIIADgfIAMg3QAxiCBGAZIAOABQhDAvgQBaIgJA4IAEBPQAaB3A4AJQgMACgLAAQhZAAgeiTg");
	this.shape_12.setTransform(255.2,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.1,55.5);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0F0").s().p("AgLgKIAWgCIABAAIAAAGIAAANIgBAEIgWACg");
	this.shape.setTransform(229.8,22.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD996A").s().p("AhHAAIAAgIIACgMIAAgHIAMg6IAFgOIABgEIAEgKQAbg9AlgVIA3ACIgZAUQgsApgRBhIgDBJIAMA+QAdBXAwAIIgOABQh8AAgFjEg");
	this.shape_1.setTransform(228.8,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C4B28").s().p("AAAAGIgOA2IgGADgAAPgvIABgBIAAABgAAQgyIACgBIAAABgAASg1IABgCIAAACgAATg5IABgBIAAABgAAUg9IABgBIAAABg");
	this.shape_2.setTransform(271.1,36.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C543C").s().p("AgLAkIACgCIAAACgAgDAMIABgBIAAABgAgCAIIABgBIAAABgAAKgiIACgBIAAABg");
	this.shape_3.setTransform(272.2,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C4927").s().p("AgFAPIAAgBIACAAIAAgCIAEgSIAAgCIABAAIAAgBIAAgDIABAAIAAgBIAIgWIgaBkIAAABIgFADgAALgnIAAgCIABAAIAAAAIAAgDIABAAIAAADIgCADgAANgwIACAAIAAABIgCABgAAPgzIABAAIgBACgAAQg2IAAgCIABAAIAAACgAARg6IABgBIAAABgAAUhDIABgBIAAABg");
	this.shape_4.setTransform(271.6,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C8A170").s().p("Ag4B6QA6gwAChKIA0ADQAEALgPAwIgYApQgSAdgZAAQgQAAgSgKgAAEgGQAGhJgugvQBLgbARB5IABAfg");
	this.shape_5.setTransform(241.2,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BD9869").s().p("AhKA3IABgDIgBhLIABAAIAAgGIANg9QAyiIBIAbIANABQg9AjgXBmIgJA4IAFBPQAPBoBCAYQgNACgMAAQhVAAggiVg");
	this.shape_6.setTransform(256.9,23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#895E44").s().p("AgbDCQgwgIgehXIgNg/IAEhJQAThgArgpIAZgUQAWAlBPgRIAZAlQAPAiAFAlIgNA+IgZgCIgBgfQgRh5hMAbIgLAHIgQARIgDAEIgUAkIgLAwIAAAGIgBAMIAAADIgCAAIgBAAIgYADIAAAZIAYgDIABgDQASBYAaAFQAwAbAegtIAYgqQAOgwgDgJIAZAAIABBMIgBAEQgtBzhFAAQgIAAgKgBg");
	this.shape_7.setTransform(238.8,21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E9E9E9").s().p("AAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(274.7,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAFIAAgJIAAAAIAAAJg");
	this.shape_9.setTransform(274.8,21.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EAEAEA").s().p("AgLAEIAAgBIAGgBIgGgBIAAgBIABAAIAAgKIAEAAIABgBIARgDIAAAZIgXADg");
	this.shape_10.setTransform(276,21.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C8A06E").s().p("Ag5B8QA5gpAChWIASACIAlgHIABAAIAAAIIgKA3IgBACIAAACIgBAFIgBABIAAACIgCABIAAABIAAABIgBACIAAACIgBABIAAADIgBABIAAADIgCABIAAABIgBABQgXAygjAAQgRAAgTgLgAACgPQgEhcghgVQBCgbAWBgIAFAjIAAAKIAAADg");
	this.shape_11.setTransform(268.9,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F09C68").s().p("A1ggNIP/hpIS/BeIgFAKIzIheIuDBdITyB3IGyg8IGTAjIAAAHIlqggInpBBgAUiBsIhigJIAAgHIBEAGIAegDIA4AEIAGABIgGABIgBABIgmAHgAOlBcIABAAIAAgEIAtAEIguAHgARcBaIgZgBIg0gFIhogJIAAgGIBoAIIA1AGIAZABIAAAGgAHnAlIFxgwIgEAMIkLAlID+AWIAAAGgAPJgQIASACIgVABg");
	this.shape_12.setTransform(137.7,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E5840").s().p("AgcDIQhCgYgShnIgEhQIAJg4QAZhmA8giQARAjBNgPIAXAjQAMAXAIApQAODLhhA/IAchmIgIAWIgBACIAAACIgBABIAAACIgGAVIgCABIAAABIgVA6IgBABIgNAFgAgNiEQguAcgNBSIAAAHQgGBtAqAaQA8AiAjhJIABAAIACgDIAAgDIAAgBIACgBIAAgCIAAgBIABgCIAAgCIAAgBIABAAIAAgBIAAgBIAAgCIABAAIAAgBIACgFIAAgCIABAAIAAgCIAKg1IAZgDIAAgbIgTADIgBABIgEAAIgBAAIgFgjQgShLgtAAQgMAAgNAGg");
	this.shape_13.setTransform(266.7,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278.5,43.9);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AgMgEIAUgNIABAAIADALIABAKIgWANg");
	this.shape.setTransform(227.3,46.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD9869").s().p("AhHAYIAAgUIACgkIABgDIACgQQAminBlAaIgbAUQgvAzgNBWQgHAjAFAsIALA5QAPBIA+AXIgOABQhzAAgOitg");
	this.shape_1.setTransform(225.7,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C543C").s().p("AAAAFIAAgBIAAAAIAAABgAAAgDIAAgBIABAAIAAABg");
	this.shape_2.setTransform(271.3,46.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C4A28").s().p("AgBAbIABAEIAAABIgDAeIgGAGgAAAATIABACIAAABIgCACgAAFgxIAAgBIACAAIAAABgAAHg4IABgDIAAADgAAIhCIAAgBIACABg");
	this.shape_3.setTransform(270.4,52.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5B4927").s().p("AgCAsIAAAYIgFAGgAgFAnIAAgDIAEgCIgBAJgAgEAfIAAgFIACgDIAFg1IgEA/gAADglIAAgBIABgBIAAAGgAADgqIAAgBIABAAIAAABgAAEg1IACAAIgCAGgAAGg7IABgEIAAAEgAAHhIIABgBIAAABg");
	this.shape_4.setTransform(270.8,51.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E9E9").s().p("AAAABIABAAIAAADgAAAgDIAAAAIAAADg");
	this.shape_5.setTransform(271.3,36.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAFIAAgBIABAAIAAAFgAAAAAIAAgCIAAACgAAAgHIAAgBIAAAAIAAABg");
	this.shape_6.setTransform(271.5,37.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C69E6C").s().p("Ag5B7QA/g2gDhXIANABIAngcIABAAIACADIAAA3IgCABIAAAJIgBADIgBAEIAAABIAAACIAAAGIgBACIAAACIAAABIgCAEIAAABQgdBVgsAAQgQAAgTgLgAA2g2Ig2gEIgNgsIgVgbQBHgUAQBUIABACIAAADIAAABIABACIAAADg");
	this.shape_7.setTransform(265.8,42.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EAEAEA").s().p("AgIATIAAgFIAGgFIgIgBIgBgCIAAgCIAAgDIAAgBIgBAAIAAAAIAAgDIAHgFIACgBIADgEIAKgFIADASIAAAFIgQAOg");
	this.shape_8.setTransform(272.6,36.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E5840").s().p("AgdDIQhCgYgRhnQgFADAAhTIAJg4QAjh1AygTQARAjBNgPIASAZIATAuQAhCahMBrIAAgYIAAgBIABgJIAAgBIAHhBIgIA3IgBADIAAAFIgBAFIAAADIgIApQgQAjg8AAIgIAAgAgOiEQgkASgSBCIgEAUQgRBVA0A/QBEAqAoh0IACAAIABAEIAAgGIgBABIgCAAIACgEIABAAIAAgBIAAgBIAAgDIABgGIAAgBIgBgBIABgEIABAAIAAgEIAAgJIACAAIAAgBIAAg2IAFAAIASgOIAAgFIgDgUIgKAFIgFAEIgCABIgHAFIgBAAQgNhEgzAAQgKAAgNAEgABLgwIABgBIAAABgABKg5IABAAIAAACg");
	this.shape_9.setTransform(263.8,42.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC07D").s().p("A1QCoIPEn6IUaBJQBHgDgxASIgWAPQgygJgWAPIAEAdIALABIkgC5IEHAUIgCARIgBACIlggcIFvjoIzThKItXHFIToCVIGckIIGUAjIAAAUIlpghInAEggAOWBJIAwAFIgsAcgAUUBBIhhgHIAEgUIA3ADQAcgbAGALIA3AEIABABIABAAIAIABIgGAFIgCAAIgBACIgnAcgAQ1AuIg0gDIhngJIABgLIADgJIBhAJIAMAAIAqADIAfADIgDAUg");
	this.shape_10.setTransform(136.1,33.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C49D6D").s().p("Ag5B6QBCg5gEhNIA1ADQADA7goA1QgVAegYAAQgQAAgRgLgAAPggIgLAAQgBglgPgeIgXgbQBGgeAXB8IAAADg");
	this.shape_11.setTransform(238.1,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#895E44").s().p("AgbDCQg9gXgShIIgLg5QgEgqAHglQANhWAxgzIAagUQAWAlBPgRIAZAmIAUBGIgIAjIgfgCIAAgEQgWh7hHAdQglAPgTBGIgDAJIgBALIgEAlIAEAiIAAABIgBAAIgBAAIgXANIAEAXIAYgNIgCgMIARAmIAVAWQArAeAjgwQAng2gDg6IAcACIgEAfIACA3IgBAGQgrByhJAAIgRgBg");
	this.shape_12.setTransform(235.7,40.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BD9768").s().p("AALDEIgdgRQglgggShZIABgHIgCg1IAEggIADgUIAIgjQAwiFBKAYIAMABQgyAUghB1IgJA4QAABSAFgDQAPBoBCAYg");
	this.shape_13.setTransform(253.8,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,275.7,67.9);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C7A06F").s().p("Ag5B5QBEg1gHhdIA2AFIgGA9QgUA8gKACQgWAfgYAAQgQAAgRgNgAABg5QgIgUgFgWQgGgPgSgLIAMgHIARgBQApACAUBPg");
	this.shape.setTransform(229.5,56.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BC9466").s().p("AhHAxIgBgfIADg8IAIgeQA0ibBSAlIgbAUQgkApgIAaIgRBGIgEBJIAMA/QAdBZAyAHQiDAAgMiWg");
	this.shape_1.setTransform(217.3,56.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#895E44").s().p("AgaDDQgxgHgghZIgLg/IADhJIAThGQAIgaAkgpIAbgUQATAjBSgMQARAVANAhIANAzIgCANIgogDQgUhPgrgCIgPABIgNAHQgDgEgYAaIgVAoIgJAeIgFAcIAAAfIAGAnIAIASIAJAUIASASQAqAgAmgyQAKgCATg8IAHg9IAcACIgEArIACA1IgBAGQgpBzhRAAIgKAAgAhNBjIgGAKIAHASIARgUIADgIIgHgPg");
	this.shape_2.setTransform(227.3,57.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD68B").s().p("A0gFOIMqtfIVIAzIAAAEIlJGiIgBACIEUAVIgIAeIllgfIEol1QArgjg2AKIy4gzIrQMCITkCsIFRmrIALgKIGNAjIABAeIlkggIl1HbgAN3BoIgGgnIAzAEIglA1gASQAaIAJgcIAoACQAWgpAIAMIAAABIA4AFIACAAIAIACIgFAHIgBABIAAACIgiAtIgLABgAQQAQIg2gEIhkgIIAJgcIBXAGIA2AFIAoACIgIAeg");
	this.shape_3.setTransform(131.4,53.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEFEF").s().p("AjYBSIAHgKIANgPIAHAPIgCAJIgRAUgADYhSIABgBIAAABgADUhcIAAgBIABABgADShiIAAgCIABACg");
	this.shape_4.setTransform(240.5,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C4A28").s().p("AAAAcIAEAbIgDAIgAAAAQIAAAAIAAgMIACACIAAAKgAgEgvIAAgPIACAAIAAAPg");
	this.shape_5.setTransform(263.8,65.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C543D").s().p("AAAAYIAAgDIABADgAAAgVIAAgCIAAAAIAAACg");
	this.shape_6.setTransform(263.5,61.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B4927").s().p("AAAAmIAAgMIABAAIAFAgIAAACIgDAFgAgBAOIAAgTIgBgDIAAgWIABABIACAtgAgFg2IAAgKIACAKg");
	this.shape_7.setTransform(263.9,64.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(263,47.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAEAEA").s().p("AgFAWIAAgBIAFgHIgJgCIgBgBIAAgCIgBgBIAAgBIgBgBIABAAIgBgBIgCgDIACAAIAEgFIACgBIAGgMIAAAAIAAgBIAHgEIAIAUIgQAXg");
	this.shape_9.setTransform(262.9,49.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C79E6D").s().p("Ag5B8QA8gpgBhvIALgBIAigwIAGAPIAEAiIABABIAAAOIAAAKIAAACIAAANIgLAwQgLAggQATQgUAagVAAQgRAAgTgNgAgLhdIAAgBIgOgYIgKgKQArgZAgA3IABACIAAACIABABIAAABIABABIAAACIAAABg");
	this.shape_10.setTransform(257.4,59.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E5840").s().p("AgdDIQhCgYgShnIgEhOIAJg6QAShZBDgvIAXAUIAJACIA0ADIAKgFIARAWIAMAbQAnCQgwBbIgFgfIAAgKIgDgwIgCgBIAAAXIAAACIACAAIAAAVIAAANIABAAIAAALIABAjQgcBQhRAAIgFAAgAgOiEIgZAWIgVAoIgJAeQgTB0AzAsQAsAfAhgrQAQgUAMggIALgvIABAAIAAgNIAAgDIgBgKIAAgNIgBgCIgEghIgGgPIAAgCIABAAIAEAAIARgZIgHgUIgHAEIgBABIgHAMIgCABIgFAHIgBAAQgWgmgcAAQgKAAgOAIg");
	this.shape_11.setTransform(255.3,59.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BF9566").s().p("AhJA3IABgGIgCgyIAFgtIAHggIADgMQA0iKBHAdIALABQhDAvgQBaIgJA5IAEBOQAQBoBCAYQgNADgMAAQhVAAggiWg");
	this.shape_12.setTransform(245.3,59.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,267.2,106.1);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AgMAIIANgeIAMAOIgNAfg");
	this.shape.setTransform(209.6,84.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C49F6D").s().p("Ag5B7QBFg0gJhoIA2AEQAHBJgpA7QgSAegaAAQgQAAgUgKgAgEhKIgKgaIgWgZQA3gaAdBSg");
	this.shape_1.setTransform(216.8,70.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#895E44").s().p("AgbDCQgsgFghhbIgMg3QgEggAIgxQAIhMA4g9IAbgUQASAjBQgMIAYAlQAOAcAEAjIgtgCQgehSg3AaIgRALIgYAjIgPAlIgHAzIABAaIAGAhIAQAjIAHAHIAMANQA0AbAdgvQAog7gHhJIAhACIgIA6IADAtIgBAIQgwB1hDAAQgKAAgLgCgAg6CPIALAPIAPghIgLgOg");
	this.shape_2.setTransform(214.2,71.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF9464").s().p("AhJA3IABgHIgCgtIAHg6IAKgnQAyiEBEAbIAOABQgyAUghB1IgJA4QgCA5AHAWQAPBoBCAYQgMACgLAAQhZAAgeiVg");
	this.shape_3.setTransform(232.6,73.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF9566").s().p("AhGA/IgDgoIAGhKIAKgnQAyiGBSAgIgcAUQg1A9gJBMQgIAxAEAgIAMA3QAgBbAsAFQgNACgLAAQhPAAgkiIg");
	this.shape_4.setTransform(204.5,70.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C4A28").s().p("AACALIAOApIgDAJgAgLgqIAAgDIABADgAgMgyIABAAIAAABIAAACgAgOg0IAAgDIACABIAAACgAgPg7IAAgBIABAAIAAABg");
	this.shape_5.setTransform(251.8,74.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B4927").s().p("AABASIAAgBIgEgYIgBgBIAAgEIgBgCIAAgDIgCgBIgBgJIADACIAVBMIACADIgDAGgAgMglIAAgDIAAgBIACAHgAgNgqIAAgCIAAgCIABAEgAgPg0IAAgCIABACgAgRg5IAAgCIACACg");
	this.shape_6.setTransform(251.8,73.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7D543D").s().p("AAFAZIAAgCIABACgAAEAUIAAgCIABACgAADAOIAAgBIABABgAgFgYIABAAIAAABg");
	this.shape_7.setTransform(250.7,70);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFEAA1").s().p("AzZHLIJBxrIVPAfIj0I0IElAWIgKAnIltgeIDnoRIzcglIoAP1ITeC5ID2oyIGIAiIADAoIlZgfIkGJegANPCIIgQgjIgGghIA3AEIACAEIgcBDgAS1AVIhbgIIAPglIAVAAQAMgsAIACIAEAFIA6AFIAIABIABAAIgBAFIgBAAIgBABIAAADIgZA+IgDAFgAPWACIg1gCIhigJIAPglIBKAFIA2AFIAtACIABACIAFAAIgKAkg");
	this.shape_8.setTransform(124.2,67.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBA06E").s().p("Ag5B8QA8glgCh8IAFAAIACgFIAZhAIANAUIAGAXIABABIAAAEIAAABIACABIAAACIAAACIAAABIABAEIAAADIABAAIAAACIABADIAAACIAAADIgDA/QgHAkgVAkQgXAkgaAAQgRAAgSgNgAgch5IgEgEIgDgDIASgIIAPAAIAXANIABABIAFAGg");
	this.shape_9.setTransform(244.6,73.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFAOIABAAIAAABgAADgHIABgBIAAABgAAFgNIABgBIAAABg");
	this.shape_10.setTransform(247.5,59.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E5840").s().p("AgdDIQhCgYgQhoQgIgWADg5IAJg4QAjh1AygUIAaAWQBEAGACgFIAOAUQAvBXgaB1IgXhLIgDgDIABAJIAAABIACAAIAAAEIAAABIABAAIAAAEIAAABIABAAIAGAYIAAACIAMAyIgJAhQgPAngUAYQgfAogrAAIgRgBgAgOiEIgXAUIgPAZIgPAnQgaBpA5A/QAvAhAlg4QAVgkAHgkIADg/IACAAIgCgHIAAgBIgBgEIgBgBIgBgEIABAAIAAgBIgBgCIAAgCIAAgBIgCgBIAAgEIgBgBIgGgXIgNgUIAAgCIADAAIAAgBIABgFIABAAIAMgcIgKgMIgFABIgCABIgBAFIgBABIgJAXIgBAAIgZgNIgPAAg");
	this.shape_11.setTransform(242.5,73.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EAEAEA").s().p("AgBAXIABgBIAAAAIAAABgAABAQIgBAAIgHgBIgFgGIAAgCIAIgUIACAAIAAgBIABgFIABAAIAAgBIADgBIAKAMIgLAZg");
	this.shape_12.setTransform(248.3,60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254.4,134.8);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D543D").s().p("AAGAOIAAgCIABACgAgFgJIAAgCIABAAIAAACgAgGgMIAAgBIABAAIAAABg");
	this.shape.setTransform(235,75.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C4927").s().p("AAAABIgGgKIgBgCIgEgIIAAgCIgCgBIAAgCIgBgBIgEgHIgBgCIAAgCIgBAAIAAgBIABAAIAsBHIAAAKgAgVgmIgCgCIAAgBIgBgBIAAgCIAEAGg");
	this.shape_1.setTransform(236.5,77.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C4A28").s().p("AAAgDIAZAqIgCAHgAgUgmIgBgCIABAAIACACgAgWgqIAAgBIABAAIAAABgAgYgsIAAgBIACABg");
	this.shape_2.setTransform(236.5,78.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDA26F").s().p("Ag6B8QA9gigDiFIAAgDIAAgNIAOhEIALAJIANATIABABIAAABIADAEIAAABIABADIABABIAAABIABABIAAACIAAABIACAAIAAABIAAABIABAAIAAACIABACQAXA/ghBaQgaA7gjAAQgRAAgTgLgAgSiGIASAAIAAABg");
	this.shape_3.setTransform(229.4,82.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF9666").s().p("AhJA4IABgHIgCgxIAJg7IALgsQA2h9A9AeIAOABQhDAvgQBaIgJA4IAEBPQAaB3A4AJQgMACgLAAQhZAAgeiVg");
	this.shape_4.setTransform(217.3,82.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EAEAEA").s().p("AADAUIgKgBIgBgCIgBAAIgBAAIAAgFIABgBIABgLIABAAIAAAAIACgNIABAAIAAgBIAAgFIAFAAIAKAFIgHAig");
	this.shape_5.setTransform(230.6,67.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAHIAAgBIAAABgAAAgFIABgBIAAABg");
	this.shape_6.setTransform(229.8,66.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E5840").s().p("AgdDHQg4gJgch2IgEhQIAJg4QAShZBDgvIAXAUIAaAEIAAAFIgBABIgBAMIgBACIgCAMIgBABIAAAEIgTAAQgjAAgdBLIgCAKQgbB7A3AyQA7AnAmhWQAhhbgXg+IABAAIAEAHIABABIAAACIACABIAAABIAFAJIAAABIABAAIAGANIAZAxQABBDgqBJQgmA6guAAQgKAAgJgCgABGhWIgBAAIAAgCIgEgFIgBgBIgBgCIAAgCIgDgDIAAgCIgBgBIgNgTIgLgIIAAgEIABAAIAIgkIgKgFIAbABIAKgFIASAZQAiBAgHBNg");
	this.shape_7.setTransform(227.3,82.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EEEEEE").s().p("AADAVIgMgHIAGgiIADAAIAKAGIgGAjg");
	this.shape_8.setTransform(197,95.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#895E44").s().p("AgbDDQg4gTgWhPIgMhDIAFhEQAVhoArgiIAagTQAUAjBOgNIAcAuIAOAuQgYABgYgFQgahDg3AWIgOAJIgWAcIgTApIAAABIgHAiIAAAyIAHAjIAPAdIANASIAOAIQAmAVAjgvQArhCgKhFIAAgCIAjADIgJA6IACAyIgBAHQgqB2hNAAIgRgBgAgdCmIAOAGIABAAIAGgkIgLgGIgEAAg");
	this.shape_9.setTransform(199,80.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE9A5").s().p("AyBIYIEd0LIVYASIiCKPIE5AZIgNArIl1gfIB4pkIzigaIj9SCITZC+IB8pxIF/AiIAGAsIlLgeIiFKggAMbCgIgNgRIgPgdIgHgjIBDAGIgPBGIgDAOgAQcAPIACgKQAdhJAlAAIAUABIACAAIABACIALABIAAAEIgOBBIgBAOIAAACgAOVAEIg1gEIhhgFIAAgCIATgpIBAAEIA3AFQAYAEAYAAIAKAAIgLApg");
	this.shape_10.setTransform(115.5,75.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BF9767").s().p("AhEBHIgFgsIAAgiIAIgyIAMgrQAyh7BNAfIgaATQgsAhgSBoIgFBEIALBEQAVBOA4ATQgLACgLAAQhRAAgiiAg");
	this.shape_11.setTransform(189.2,80);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C9A270").s().p("Ag1B/IADgOQBBhNgPhMIA0AEIAAABQALBFgrBDQgXAggaAAQgMAAgMgGgAgMhWIgPgdIgNgLQA3gXAaBEg");
	this.shape_12.setTransform(201.9,79.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,239.1,151.4);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5D4B28").s().p("AgLgMIABAAIABAAIAnAhIACAKgAgdgbIgBgDIACADg");
	this.shape.setTransform(223,76.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E553D").s().p("AAKAKIAAgBIABABgAgKgIIACAAIABACg");
	this.shape_1.setTransform(220.6,74.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C4A27").s().p("AgEgDIgCAAIgBgBIgIgIIgBAAIgBgBIgHgGIgCgCIgBgCIA9AsIAAAJgAgdgXIgFgGIAGAGg");
	this.shape_2.setTransform(222.5,76);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C89F6D").s().p("Ag5B8QBVhUgih0IgBgHIgBgzIACgBIAQAFIANAKIAEAFIABAAIADACIABADIAKAQIALAjQAPBPgcA5QgbA7gjAAQgRAAgSgMg");
	this.shape_3.setTransform(216.6,85.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EAEAEA").s().p("AgHgSIAHgBIAIABIAAAjIgCACIgNABg");
	this.shape_4.setTransform(215,69.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E5840").s().p("AgdDIQhBgYgShoIgEhPIAJg4QAZhmA8gjIAbAWIgHABIAAAoQgMgBgYAbIgYAwIgDAKQgaB9A3AwQA6AmAnhWQAcg4gOhPIgMgjIgKgRIABAAIAHAFIABACIABAAIAIAHIAAABIAtAtIABACIgBBMQgMBJgSAbQglBOg+AAIgQgBgAAzh4IgBAAIgGgFIgNgKIgRgFIAAglIAwACIAKgFIAdAxIANA6g");
	this.shape_5.setTransform(214.5,85.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEEEEE").s().p("AgGgQIAJgDIAEADIAAAiIgNACg");
	this.shape_6.setTransform(187.2,98.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BD9565").s().p("AhJA2IABgGIgCgwIAJg9IAAgBIAMgrQASguAMgNIAcgeIAOgIIA4ADQg8AjgXBmIgJA4IAEBPQAQBoBCAYQgNACgMAAQhVAAggiVg");
	this.shape_7.setTransform(204.6,85.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFB97B").s().p("AwWIrIgg0tIVeAOIAFKwIFJAZIgNArIl+gfIgFp7IgBgEIzngZIAeShITUC7IgFpyIF3AiIAFArIk5gcIAFKfgAL6C7IgSgKIgPgUIgQgjIgGgdIBKAHIAAAuIAAApgAPnAeIADgKIAXguQAZgbALABIAPgBIABAzIACAEIgCAigANgASIg2gDIhegJIAIgWIALgTIA+AFIA2AEIAwAEIANABIgNApIAAABg");
	this.shape_8.setTransform(108,77.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BD9666").s().p("AhFBFIgFgrIAAghIAHg0IANgrIAbg0IAmgmIAMgFIA0AFIgbARQgwAugPBcIgFBGIALBBQASBOA8AVIgSABQhbAAgdiBg");
	this.shape_9.setTransform(176.6,83);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C8A471").s().p("AgyCBIATAAIAAgpQAnhBgKhAIA0ADIAAACQAIBRgoA2QgYAigaAAQgJAAgJgEgAgPhYIgPgbIgMgLQA3gWAYBAg");
	this.shape_10.setTransform(189.4,82.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#895E44").s().p("AgZDDQg8gVgUhOIgLhBIAFhGQAPhcAyguIAbgRQARAgBOgMIAcAuIANAtIgwgEQgYhAg3AWIgNAHIgWAaIgLATIgIAYIgKAyIABAjIAGAdIAQAjIAPAUIASAKQAhAPAjgtQAog2gIhRIAAgCIAjADIgJA7IADAyIgBAGQgkB2hdAAIgGAAgAACCGIAAAmIAPgCIAAgkIgEgDg");
	this.shape_11.setTransform(186.2,83.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,226.3,154.3);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEDED").s().p("AgKgMIAMgIIAJAhIgNAIg");
	this.shape.setTransform(206.3,93.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E553D").s().p("AABABIAAgBIACABgAgCAAIAAAAIACAAg");
	this.shape_1.setTransform(233.8,68.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D4B29").s().p("AgegJIBEANIACAJgAgigJIgCgBIADAAIAAABgAgngMIABAAIAAACg");
	this.shape_2.setTransform(237.5,69.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C4A28").s().p("AgcgEIgBAAIgBgBIgDAAIgBAAIgCgCIgBAAIgCgBIBMAJIADAIg");
	this.shape_3.setTransform(237.2,68.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EBEBEB").s().p("AgEAUIgBgBIgCgTIgCAAIgBgMIAAgBIAKgHIABgCIACAAIAIAgIgDAFIgCADIgKAFg");
	this.shape_4.setTransform(228.5,67.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C69E6D").s().p("Ag5B8QBphthPiIIAAgCIgBgBIgBgCIACgFIABAAIAcgEIABABIADAAIADABIABACIABAAIABAAIACABIAZAYQANASAFAdQAPBPgcA5QgbA7gjAAQgRAAgSgMg");
	this.shape_5.setTransform(232.9,81.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E5840").s().p("AgdDIQhCgYgRhoQgFADAAhSIAJg4QAjh1AygUIAPAOIANAIIA4ADIAKgFIASAZIALAcIhNgLIgFAAIgCgCIgZAEIgBAAIgIgiIgCAAIgCACIgLAHIAAABIABANIACABIACATIABABIAAADIgVAZIgPAjIgEANQgeBYA8BSQA7AmAmhWQAcg4gOhPQgGgdgNgTIgZgYIABAAIACAAIABAAIBIAYQAdBogpBwQgmBfhKABIgLgBg");
	this.shape_6.setTransform(230.8,82);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BD9465").s().p("AALDFIgdgSQglgggShZIABgGIgCgwIAHg7IAMgoQAviBBHAbIAMABQgyATghB1IgJA4QAABTAFgDQAPBnBCAYg");
	this.shape_7.setTransform(220.8,81.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C5A170").s().p("Ag5B7IAKgIIAvAFIgLg5QAKgGAFg0IAAgrIA0AEQAIBRgnA0QgSAhgcAAQgQAAgUgJgAgEhQIgMgYIgUgVQA1gZAeBLg");
	this.shape_8.setTransform(205,79.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BE9567").s().p("AhIA7IACAAIgEgnIAAgdIAHgvIAKgnIAbg1QAKgSAcgYIANgIIA2AEIgaASQgyAwgOBZIgFBHIALBBQAKBFBEAfIgUACQhaAAgfiMg");
	this.shape_9.setTransform(192.8,79.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D48B5E").s().p("AsnICIlbzNIVkAVICQKKIFYAbIgKAlImHgeIiHpbIzsgdIE0RKITQCxIiAo3IFuAhIAEAnIgBAAIkmgbICGJdgANNC/IgUgBIgJgOIgDgbIgMgBIgHgoIBSAHIAFAYIAMA5gAQ8AzIAEgNIAPgjIAVgXIALgFIAEAAIABABIAAABIAPBRgAO2AoIg0gEIhhgHIAAgBIARglIBGAFIA1AEIAvADIAHAAIgLAog");
	this.shape_10.setTransform(115.6,71.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#895E44").s().p("AgaDEQhEgfgMhFIgLhBIAFhHQAOhZA0gwIAagSQAQAfBQgIIAaApIAQA4IgugEQgehLg1AZIgYASIgPAWIgQAnIAAABIgJAvIABAeIAIAoIAGASIAJALIAJAOIAKAIQA1AbAcgyQAog1gIhQIAhACIgHA7IACAwIgBAGQgkB2hdAAIgFAAgAAaB8IAHAjIAPgIIgJgjg");
	this.shape_11.setTransform(202.5,79.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242.7,143.4);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEDED").s().p("AgMgEIAHgJIAFgHIADAHIAKATIgNAPg");
	this.shape.setTransform(223.8,80.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4A06F").s().p("Ag5B6IAPgIIASgWIAsAEIgXg2IAHgjIAAgmIA1AFQAGBJglA0QgTAigcAAQgQAAgUgLgAAAg/QgIghgKgMIgSgSIAcgGQAvALANA+g");
	this.shape_1.setTransform(220,69.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF9566").s().p("AhJA5IABgEIgCgpIAGg7IAGghIACgGQA2iQBGAgIALABQhDAvgQBZIgJA6IAEBOQAQBnBCAYQgNADgLAAQhWAAggiUg");
	this.shape_2.setTransform(235.8,71.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#895E44").s().p("AgZDEQhCgbgRhKIgKg1QgChGAGgNIAVhHQAWgvAZgTIAXgRIAgAUQBCAIgDgJIAcAtIATBBIgBAGIgrgDQgNg+gxgLIgaAGIgaAWIgUAjIgKAfIgGAdIAAAfIAEAhIAMAnQAPAZAKADQA1AeAeg1QAlg0gGhJIAgADIgHA7IADApIgBAEQgnB3hUAAIgJAAgAA2BfIgGAIIAMAcIAOgPIgKgVIgCgIg");
	this.shape_3.setTransform(217.7,69.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(240.6,57.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EBEBEB").s().p("AgBAUIgBgCIgEgKIgBgBIgEgIIgBgBIAAgEIACgEIABgBIAFgHIACAAIAAgCIADgCIALAZIABACIgFAKIgIAIg");
	this.shape_5.setTransform(241,59.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#815940").s().p("ApUGgIp2v1IVoAmIERIcIAHAFIFfAaIgIAfImDgfIgLgEIkBnyIzugsIIuOJITMCgIjpnJIFmAgIACAfIgCAAIkUgZID2HmgAOzC4QghANgIgwIgdgCIgFghIBXAIIAFACIAEAKIAZA2gASIBMIAAgCIAGgVIAQgiIAKgIIAFACIAeBEgAQGBAIg1gFIhigHIAKgfIBSAGIA2AEIArADIgHAhg");
	this.shape_6.setTransform(122.7,59.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C09668").s().p("AhKAqIACAAIgCgfIAHg9IAIgfQAZhQAogaIAPgKIA2ADIgYARQgYATgWAvIgTBHQgHANACBGIAKA1QAPBKBCAbQgLABgKAAQhiAAgbicg");
	this.shape_7.setTransform(207.8,69.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C69F6D").s().p("Ag5B9QA2gkAFhbQAChagngjIAMgFIAAgBIADAAIAAgCIAEAAIADAAQApgIAZBVQAPBPgcA4QgbA8gjAAQgRAAgSgMg");
	this.shape_8.setTransform(247.9,71.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5D4B28").s().p("AgkAPIgBAAIBIgcIADAFIhHAXg");
	this.shape_9.setTransform(250.1,56);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7E5840").s().p("AgeDHQhBgYgShoIgEhOIAJg5QARhaBEgvIAXAUIAIADQBAAFAAgFIAFAGIhKAeIgBAAIAAABIgCAAIAAACIgDAAIAAABIgMAFIgUAPIgLgcIgFADIgBABIgFAIIgBABIgDAEIAAADIABACIAEAKIABABIAEAKIABABIACAEIgPAiIgHAVIAAABQgSB1AzAsQA6AmAnhWQAcg4gPhPQgZhVgrAIIAAgBIACAAIAFgBIBJgQQA5BfgqCXQgvBzg+AAQgKAAgLgDg");
	this.shape_10.setTransform(245.9,71.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5E4C29").s().p("AgoAMIAAgBIABAAIACAAIAAABgAAlgLIAEAGIhHAOIgFACg");
	this.shape_11.setTransform(250.3,56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.7,119.8);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDEDED").s().p("AADASIgPgQIAJgVIAQATIgIATg");
	this.shape.setTransform(237.7,60.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C59F6F").s().p("Ag5B6QATgKAMgRIATgkIAsADIglgoIAEgWIAAgVIA2AFIgGA6QgPAvgKAIQgbAlgaAAQgPAAgQgMgAADgrQgFgqgJgNIgYgcQBAggAbB3g");
	this.shape_1.setTransform(231.9,53.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#895E44").s().p("AgcDEQg0gMgchZIgKg6QgCgyAHgcQAJhMA7g9IAZgRQAPAeBNgKIAcArIATBCIgGAdIgigEQgah3hAAgQgMABgUAZIgXAyIgFAVIgEAnIABAUQAFBBAjAbQAqAgAqg5QAKgIAPgvIAHg6IAbACIgEAiIADA8QglB2hZAAIgKAAgABEBJIAQARIADABIAHgVIgRgTg");
	this.shape_2.setTransform(229.5,53.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF9768").s().p("AhKAVIAAgUIADgnIAAgBIAFgUQAoifBlAZIgZAQQg4A9gKBNQgHAbADAzIAKA5QAZBZA1AMIgIAAQh+AAgIiwg");
	this.shape_3.setTransform(219.8,53.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C79F6E").s().p("Ag5B8QAyghAIhRQAHhngsgjIADgCQA4gcAeBjIAFA4QAAAogSAoQgeA8ghAAQgRAAgRgNg");
	this.shape_4.setTransform(259.7,55.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F563E").s().p("AgHAHIADgDIAAABIgCACgAAGgEIABgCIABAAIgBACg");
	this.shape_5.setTransform(256.6,41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E4B28").s().p("AgNAOIgCAAIAagbIAFABIgYAYIgDACg");
	this.shape_6.setTransform(259,39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5E4C29").s().p("AgZAUIAAABIgCABgAgVARIALgLIABAAIACgCIACAAIgQAOgAgCACIAYgYIAGAAIgdAYg");
	this.shape_7.setTransform(258.4,40.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#382D26").s().p("AmxEOItRq5IVmBBIGAF4IFrAdIgFAUIAAABImSgiIlklZIzuhAILwJsITKCMIk5kzIFgAfIAAAUIkJgYIFLFHgAQDCjQgeAHgRggIgrgEIgCgUIBgAHIAEAEIAmAogATEBgIAAgBIAIgeIADgBIAAgBIAEgJIABgBQADgHArA3gARGBVIg2gFIhlgHIAFgWIBfAIIA1AEIAhADIgEAWg");
	this.shape_8.setTransform(128.3,42.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E5840").s().p("AgdDIQhCgYgQhnQgIgWADg6IAJg4QAjh1AygTIAXAUIAXACIgZAdIgBADIgMAKIgDADIgDADIAAABIgBAAIgGAGIgbAjIgQgRIgEAAIgCAJIgBABIgCAFIgBABIgBAFIgBABIARATIABADIgHAeIAAABQgPBmAyAvQA1ApAshYQASgoAAgoIgFg4Qgehjg4AcIgDACIgCACIAAgCIABAAIACgCIAPgOIACgCIABAAIAggZIAaABIALgEIAQAYIAOAeQANAjACAsIgEBPQghCmhkAAIgKAAg");
	this.shape_9.setTransform(257.6,55.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBEBEB").s().p("AACATIgQgTIACAAIAAAAIABgEIABgBIABgGIABAAIAAgBIADgJIAEAAIAOASIACABIgEALIgBABIgDAJIAAABIgEACg");
	this.shape_10.setTransform(250.8,47.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAGIACgBIAAABgAABgEIABgBIAAABg");
	this.shape_11.setTransform(249.6,46.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BF9667").s().p("AhIA6IgCg6IAEgkIADgWIAHgcQAyiLBHAaIAOABQgyAUghB1IgJA4QgCA5AHAWQAPBoBCAYQgMACgLAAQhaAAgciSg");
	this.shape_12.setTransform(247.7,55.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269.5,85.7);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF9768").s().p("Ag8BlIgBgGIgCgHIgCgCIgFgUIgDhHIABgHIABgPIABgIQAgi0BwAWIgWAPQguAhgVBoIgFBHQACAqAKAXQASBRA5AUIgNAAQhWAAgchfg");
	this.shape.setTransform(227.2,33);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C69D6D").s().p("Ag5B7QBth+hXh+QBEgYAUBdQAPBPgcA5QgbA7gjAAQgRAAgSgMg");
	this.shape_1.setTransform(267.1,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C69E6E").s().p("Ag5B7QAugWANhQIAsADIgqgQIAAgPIA2AFIgGAvQgIAfgQAWQgWAkgcAAQgQAAgTgLgAAGgOQgCg1gNgaIgaggQA9giAfB5IABAcg");
	this.shape_2.setTransform(239.3,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EDEDED").s().p("AAKAQIgVgJQgCgjAZAVIgBAXg");
	this.shape_3.setTransform(246.2,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#382D26").s().p("AlMBgIvYk2IVbBgIHNCmIFuAdIgBAIImWgiImliYIzohaINmEUITFB1IACAHIABAGgAISBHIAUAAIFKAdIgBAHIj/gVIECBeIAFAUgAQ1CEQgaABgagNIgxgEIAAgHIBoAKIApAQgATrB2IAAgDIADgDIABgJIA2ATgARuBrIg2gEIhngJIACgIIBmAJIA1AEIAbADIgBAHg");
	this.shape_4.setTransform(131.8,21.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAHIAAgBIAAABgAAAgFIABgBIAAABg");
	this.shape_5.setTransform(255.7,30.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAEAEA").s().p("AgMAJIgBgEIABgBIAAgEIABAAIAAAAIABgNIABAAIAAgBIABgBIATAGIABABIACAEIgCAIIgBAKIgEACg");
	this.shape_6.setTransform(256.9,31.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#80563E").s().p("AgDAGIACgBIAAABgAAAAAIAAAAIAAAAgAACgEIAAgBIACAAIAAABg");
	this.shape_7.setTransform(262.5,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF9667").s().p("AhHA8IgEgnIABgXIACAAIABgVIABgIIAKg4QA1iMBFAdIAOABQhEAvgPBZIgJA4IAEBQQAaB2A3AJQgLACgLAAQhaAAgciQg");
	this.shape_8.setTransform(255,35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#895E43").s().p("AgYDDIgEgBIgBAAQg5gUgUhRQgKgXgCgqIAFhHQAXhoAughIAWgPIAfASQBDAIgGgJIAEAEIAbAqIASA/IgKA4IgbgCIgCgcQgeh5g+AiQgvAagMBMIgCAIIgBAPIAAAFQADBgAlAWQAzAeAjg3QAPgWAIgfIAHgvIAaACIgBATIgCAAQgbgTACAjIAWAJIACAAIAEAnQgrB2hOAAIgLgBg");
	this.shape_9.setTransform(237,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E4B28").s().p("AgJASIgCAAIADgDIACAAIABABIgDACgAAIgRIADACIgRAbg");
	this.shape_10.setTransform(264,18.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F4D29").s().p("AgOATIABAAIAAgBIADgGIABAAIAAgBIACgEIACAAIAAgCIABAAIAAACIgOAWgAgCACIgBgBIAAgBIASgcIAEACIgTAcg");
	this.shape_11.setTransform(263.6,20.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E5840").s().p("AgeDIQg3gJgch3IgEhPIAJg4QARhaBEgvIAVASIgQAfIAAADIgCAAIgCADIAAACIgDAFIgBABIgCAFIgCABIgDAKIANgWIAAgCIADgCIABAAIATgfQBEAGACgFIAJAMQArBLgIBaQgdDJhpAAIgNgBgAhbg0IgBABIgBANIgCABIAAAFIgBABIABAEIAWAHIAAADQgJBlAtAkQA6AmAnhWQAcg4gPhPQgUhehEAZIgZAUIgBABIgRAhIgMAfIgUgGg");
	this.shape_12.setTransform(265.1,35.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277,55.5);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD9668").s().p("AhJgFIAAgHIAAgNIABgGIAPg7IAFgOIABgDIAFgKQAOggATgUIAcgXIAGgEIANAAIApAEIgXAPQgmASgcB3QgIAeADAwIAJA6QARBMA7AZIgJAAQiDAAABjKg");
	this.shape.setTransform(229.3,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAEAEA").s().p("AgJgKIABgBIASgCIACAAIAAANIAAALIgDABIgVADg");
	this.shape_1.setTransform(258.6,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C7A06F").s().p("Ag5B5QAZgJAWgqIAOg7IA0AEIgHAnIgVAqQgVAkgcAAQgRAAgTgLgAAEAEIABgMIAtgGIgtgFQABhDgpgoQBGgcAXBzIAAAwg");
	this.shape_2.setTransform(241.4,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F09C68").s().p("AT4BsIA2AFIg2AJgA0tgSIP2hnITOBdIgFAKIy2hfIuWBdITrB3IG3g7IGUAiIAAAIIlrggInnBBgAR4BnIg0gEIhogJIAAgHIBoAJIA2AFIAZACIAAAHgAPdBHIACgHIA0AGQAKgHAoAEIAtAFIgtAGgAIeAgIFzgvIgFAOIkNAiID+AWIgBAHgAQEgUIAKACIgLAAg");
	this.shape_3.setTransform(132.6,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EEEEEE").s().p("AgKgKIATgCIACAEIgCATIgTACg");
	this.shape_4.setTransform(248.9,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#895E44").s().p("AgZDDIgEgBIgBAAQg7gZgShMIgKg6QgDgwAIgeQAeh3AmgSIAXgPIAdASQA/AHACgFIAcAqIASA9IgIAnIgCAAIgCgEIgVADIAAAZIAVgDIgBAUIgZgDIAAgwQgXhyhGAcIgXARIgBADQgIACgRAmIgLAsIgCAGIgBAMIAAAHQgDBSAsAkQA1AeAgg3IAVgrIAHgnIAbADIABBCQgrB0hMAAIgNgBg");
	this.shape_5.setTransform(239.1,21.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#80563E").s().p("AAAACIAAgBIAAABgAAAAAIABgBIAAABg");
	this.shape_6.setTransform(263,9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C8A06F").s().p("Ag5B8QBth/hXh9QBCgbAWBgQAPBPgcA4QgbA7gjAAQgRAAgSgLg");
	this.shape_7.setTransform(269.2,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F4D2A").s().p("AgSAyIABAAIAAACgAgRAvIACAAIAAACgAgPAqIABAAIAAADgAgHAPIADAAIgKAagAgDAKIgBgBIAAgCIABAAIAAgBIAAgCIABAAIAAgBIAAgDIARgzIAEACIgVA7g");
	this.shape_8.setTransform(263.4,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BD9566").s().p("AhJA+IgBhBIAAgGIABgVIADgVIACAAIAIgnQAyiIBIAbIANABIgDADQg4AegZBoIgJA4IAFBPQAQBoBBAYQgMACgLAAQhXAAgfiOg");
	this.shape_9.setTransform(257.3,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E4B28").s().p("AgKAkIACgGIABABIgBAFgAgHAVIAOg1IACgDIACAEIgRA0g");
	this.shape_10.setTransform(263.8,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E5840").s().p("AhxBIIgEhQIAJg4QAahoA4geIgPA3IABAAIAAADIgBABIAAACIgBABIAAACIgDAGIgHAaIAKgaIABgFIABAAIAXg9IASANIAKADQA+AGgBgGIAJALQAqA9gGBqQgVDEh+ADQhBgYgShngAglB3QA6AmAnhVQAcg5gPhPQgWhghCAbQg5AmgDBcIgUACIgBABIgCAZIAWgDQALBSAcAPgAg3hbIAAgCIgBAAgAg1heIAAgCIgCAAgAg0hiIAAgDIgBAAg");
	this.shape_11.setTransform(267.2,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,279.1,43.7);


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


// stage content:



(lib.alternator1_Canvas = function(mode,startPosition,loop) {
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
			this.gotoAndStop(frameNumber);
		}
		
		this.Physclips.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("http://www.animations.physics.unsw.edu.au/", "_blank");
		}
		
		this.button_rew.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame()
		{
			this.gotoAndStop(1);
		}
		
		this.button_stop.addEventListener("click", fl_ClickToGoToAndStopAtFrame_3.bind(this));
		
		function fl_ClickToGoToAndStopAtFrame_3()
		{
			var f = this.currentFrame;
			this.gotoAndStop(f);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41));

	// Layer 25
	this.text = new cjs.Text("THE UNIVERSITY OF NEW SOUTH WALES", "11px 'Optima'");
	this.text.lineHeight = 15;
	this.text.setTransform(382.9,7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(41));

	// Physclips_logo
	this.Physclips = new lib.Symbol40();
	this.Physclips.setTransform(541.5,407.6,1,1,0,0,0,57.5,8.6);
	new cjs.ButtonHelper(this.Physclips, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Physclips).wait(41));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0000FF").ss(1,1,1).p("AnaAAIO1AA");
	this.shape.setTransform(536.1,414);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(41));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_play},{t:this.button_step},{t:this.button_stop},{t:this.button_rew}]}).wait(41));

	// Colors (Motion)
	this.instance = new lib.Symbol20("synched",0);
	this.instance.setTransform(161.8,210.4,1,1,0,0,0,139.5,21.9);

	this.instance_1 = new lib.Symbol39("synched",0);
	this.instance_1.setTransform(163.4,203.2,1,1,0,0,0,137.9,33.9);

	this.instance_2 = new lib.Symbol38("synched",0);
	this.instance_2.setTransform(167.7,205.1,1,1,0,0,0,133.6,53.1);

	this.instance_3 = new lib.Symbol37("synched",0);
	this.instance_3.setTransform(174.2,205.7,1,1,0,0,0,127.2,67.4);

	this.instance_4 = new lib.Symbol36("synched",0);
	this.instance_4.setTransform(181.7,205,1,1,0,0,0,119.6,75.7);

	this.instance_5 = new lib.Symbol35("synched",0);
	this.instance_5.setTransform(188.1,203.5,1,1,0,0,0,113.2,77.1);

	this.instance_6 = new lib.Symbol34("synched",0);
	this.instance_6.setTransform(180,201.7,1,1,0,0,0,121.4,71.7);

	this.instance_7 = new lib.Symbol33("synched",0);
	this.instance_7.setTransform(172.6,200.2,1,1,0,0,0,128.8,59.8);

	this.instance_8 = new lib.Symbol32("synched",0);
	this.instance_8.setTransform(166.4,199.2,1,1,0,0,0,134.8,42.8);

	this.instance_9 = new lib.Symbol31("synched",0);
	this.instance_9.setTransform(162.8,204.5,1,1,0,0,0,138.5,27.7);

	this.instance_10 = new lib.Symbol30("synched",0);
	this.instance_10.setTransform(161.8,210.3,1,1,0,0,0,139.2,21.9);

	this.instance_11 = new lib.Symbol29("synched",0);
	this.instance_11.setTransform(163.4,203.2,1,1,0,0,0,137.8,33.9);

	this.instance_12 = new lib.Symbol28("synched",0);
	this.instance_12.setTransform(167.7,205.1,1,1,0,0,0,133.6,53.1);

	this.instance_13 = new lib.Symbol27("synched",0);
	this.instance_13.setTransform(174.1,205.6,1,1,0,0,0,127.2,67.3);

	this.instance_14 = new lib.Symbol26("synched",0);
	this.instance_14.setTransform(181.6,205,1,1,0,0,0,119.5,75.7);

	this.instance_15 = new lib.Symbol25("synched",0);
	this.instance_15.setTransform(188,203.5,1,1,0,0,0,113.1,77.1);

	this.instance_16 = new lib.Symbol24("synched",0);
	this.instance_16.setTransform(180,201.7,1,1,0,0,0,121.4,71.7);

	this.instance_17 = new lib.Symbol23("synched",0);
	this.instance_17.setTransform(172.4,200.2,1,1,0,0,0,128.8,59.9);

	this.instance_18 = new lib.Symbol22("synched",0);
	this.instance_18.setTransform(166.6,199.2,1,1,0,0,0,134.8,42.8);

	this.instance_19 = new lib.Symbol21("synched",0);
	this.instance_19.setTransform(162.9,204.5,1,1,0,0,0,138.5,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// Colors (Stationary)
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E7E7").s().p("AgYAjQgzgPgDgwIAFgLQAuBoBqg3QgUAegsAAQgRAAgWgFg");
	this.shape_1.setTransform(136.7,378.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DADADA").s().p("AhFCGQg0gkACgwIAmgDQADAyAyAPQBMASAbgrIAAgBIADgCIAAgDIABgBIgBgdIgNgPIghgPIhVgXQhTghAuhWIAbgSQAbgPAwADIAuAMQArAOALA+IgnAFQABgsg7gOQhDgHgMAlQgqAuC0AmQAsAPACA6IAAADIgLAhQgQAWgNAFQgpASgmAAQgjAAgjgSg");
	this.shape_2.setTransform(137,370.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1E1E1").s().p("AAvgaIgugLQgvgDgbAOIgcATIARgTQBTgrBDArQAmAWgDA0QgLg8grgOg");
	this.shape_3.setTransform(138.1,359.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BABABA").s().p("AAyAEQi1gkArguIAKAZIAQAMIBdAcIAkARQAmAYgJAzQgCg6gsgRg");
	this.shape_4.setTransform(139.5,370.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B4B4B4").s().p("ABLB3IiZjoIAEgGICYDjIABAMg");
	this.shape_5.setTransform(137.4,320.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B5B5B").s().p("AgChwIADABIACAFIgCDUIgDAHg");
	this.shape_6.setTransform(129.4,327);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E5E5").s().p("AhKhJIgCgFIgFgCIAADiIgmABIABkpIAqACICYDnIAEACIgBgNIADjaIAlABIABBaIAABsIgCACIABBdIgrADg");
	this.shape_7.setTransform(137.3,323.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#525252").s().p("AgBA2IABgBIABABIgBBdgAAAiSIABgBIABBCIgCAZg");
	this.shape_8.setTransform(149.4,323.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A80000").s().p("AmNFsIlHg/IjHhlIgnh0IgKmZIACAAIAkBaQD6BxgFgVIEjAwIGnALIGfgkIFFhKIC3hgIAZhXIAAGRIgbBwIgFADIiyBuIkwBSImkAvgAjfCrIgFANQgCAwA0AkQBFAlBSglQANgFAOgWIALghIAAgDQAKgygkgZIglgTIhfgcIgQgMIgKgZQAMglBFAHQA7AOgBAsIAlgFQACg3gjgTQhFgrhUArIgQAQQguBWBTAhIBXAZIAhAPIANAPIABAdIgBABIAAADIgDACIAAABQhsA4gthrg");
	this.shape_9.setTransform(147.9,357.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AAAACIAAgDIABADg");
	this.shape_10.setTransform(50.6,324.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000BC").s().p("AmSC9IlCgpIgYgFIi/hBIgmhJQC+i4MJgSIFiAFIEoAdIDdAyIBzBEIACAHIgbBHIi7BNIk8A6Im7Aeg");
	this.shape_11.setTransform(147.4,281.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000064").s().p("AmJFXIkjgwQAFAVj6hxIgkhaIgDgFIgJmgIAmBJIC/BBIAYAFIFCApIGXAJIG7geIE8g6IC7hNIAbhJIAAGeIgZBXIi3BgIlFBKImfAkgAgXD+IApgDIAChdIgBgCIAAhuIACgaIgBg/QgwgKAKAKIgCDaIiajjIgogCIgFAHIgBEpIAmgBIAFgIIACjVg");
	this.shape_12.setTransform(147.4,313.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#575757").s().p("AAbgjQhHAYAhAvQgrgvBRgYg");
	this.shape_13.setTransform(133.4,77.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#535353").s().p("AAJgSIAAAFIgDALIgJASIgFADg");
	this.shape_14.setTransform(149.6,96.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#909090").s().p("AAJAaIgJgOIgJgOIgDgXIAFAEIAFAWIAEALIALAOg");
	this.shape_15.setTransform(130.9,94.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#696969").s().p("AAAAXIAAguIAAAvg");
	this.shape_16.setTransform(129.8,49.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgSAAIAkAAIABAAg");
	this.shape_17.setTransform(127.9,51.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5D5D5D").s().p("AgBAVIABg7IACA7IgCATg");
	this.shape_18.setTransform(150.8,38.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah7boIAmgBIgFALIgmADgABLRYQgKgKAyAKIgCABgAh8RUIAFgHIAoACIgEAHgAAGu0QhqgHgPhCIgIgkIAogDIAEAXIAJAQIALAOIAEAAIAAABIANAJIAHACQBlAXAPgxIAEgVIgFgSIgQgQQizgxAMghQgXhiBegRQBvgVAkBhIABAFIAAAFIACAFIAAACIgCACIgoABQACgrg3gQIgFgBIgIAAIgGgBIgVABQhSAYAqAwIAJAHQCaAlAIAmIAEADIAHAXIABAUIgBAKIAAABIgTAnIgBACIgEAEIgBADIgFACIgCAEIgFACIAAACIgEABIgDACIgIAEIgEADIgTAGIgBAAIgFABIgBAAIgFABIgCAAIgFACgABT2wIigj5IgCDHIgBAwIgmAAIgBlCIAqAAIChD8IAEj5IAkAAIAFAEIAACNIgDA9IACATIAABgg");
	this.shape_19.setTransform(137.9,197.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDEFB6").s().p("AAEBNQgNAFguhpIAAgBIAEg2IBrAHIgMBiQgBAVgXAdIgMACg");
	this.shape_20.setTransform(293.3,184.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#825F47").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_21.setTransform(287.6,181.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C3C31").s().p("AgOAoIgNgFIgjgjIgagtIBVAEIATgFQARAnAYAdIARARIAQAIg");
	this.shape_22.setTransform(285.4,189.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFB37C").s().p("AhEABIAcgIIBtAGIAAABIggAIg");
	this.shape_23.setTransform(280.6,181.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FEB37C").s().p("AhBACIAdgIIBnAFIgfAIg");
	this.shape_24.setTransform(252.3,180.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDECB4").s().p("Ag2gLIAAgEIAIg9IBkAGIgCAcQgLB3geAAQgYAAgphYg");
	this.shape_25.setTransform(265.4,182.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8D664B").s().p("AAAAAIAAAAIAAABg");
	this.shape_26.setTransform(259.8,180.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4B3C31").s().p("AgGApIgRgFQgagTgLgRIgagsIBOAFIATgHIABACIAeAyIAcAhIAGACIALAGg");
	this.shape_27.setTransform(257.3,187.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#88664C").s().p("Ai7CqIgKgGIgGgCIgdghIgdgzIgBgDIgVAIIgEgcIAegKIAIAJIABAEQBWDDAVjiIADgbIGjiuQAPAngUgGImSChQgOCbgjAAQgFAAgHgFg");
	this.shape_28.setTransform(284.8,175.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E7A272").s().p("ABvAUIgZgDIgDgZIBsAIIAFAZgAilACIgagBIgEgZIBoAGIAEAZg");
	this.shape_29.setTransform(265.2,182.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D20000").s().p("AvgjIIAqgUIDGgSIFNgLIHfgDIFhAHIFeAPIDIAUIAeAUIAAG5I+1ACgAjBAxIAIAkQAPBCBsAHIAZAAIAFgCIACAAIAFgBIABAAIAFgBIABAAIASgGIADgDIAIgEIADgCIAEgBIAAgCIAFgCIACgEIAFgCIABgDIAEgEIABgCIAFgDIAMgUIACgLIAAgFIAAgBIABgKIgBgUIgHgXIgEgDQgIgkiaglIgJgHQgggwBIgYIAXgBIAGABIAIAAIAFABQA1AQgCArIAogBIACgCIAAgCIgCgFIAAgFIgBgFQgkhhhvAVQheARAXBiQgMAhC1AvIAOAQIAFASIgEAVQgNAxhngXIgHgCIgNgJIAAgBIgMgOIgGgLIgFgYIgFgEg");
	this.shape_30.setTransform(144.9,86.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000081").s().p("APJEMIjJgUIlegPIlggHInfADIlNALIjGASIgqAUIgMnJIAmgpIDMgmIFegYIGzgFIGiAPIFNAgIDBApIAaApIAAG+gAATCCIAtAAIAAhgIACgTIgCg7IAAiNIgEgEIgkAAIgFD3Iigj6IgrAAIACFAIAnABIAAgxIACjFg");
	this.shape_31.setTransform(144.4,38.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F9B57E").s().p("Ah6BaIGiixIBmAGImbCygAmNBLIGlirIBlAFImjCsg");
	this.shape_32.setTransform(300.4,167.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7D5F48").s().p("Ai2CwIgQgJIgQgRQgZgfgQgnIgWAGIgFgcIAggKIABAAQAvBrAOgFIAEACIAMgCQAXgdABgUIANhlIGaiyIAEAAIAEAbImWCsQgQCeghAAQgEAAgGgDg");
	this.shape_33.setTransform(312.7,176.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(41));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgYBAgFIAA3bMAxvAAAIAAXbg");
	var mask_graphics_1 = new cjs.Graphics().p("EgXiAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_2 = new cjs.Graphics().p("EgXDAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_3 = new cjs.Graphics().p("EgWkAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_4 = new cjs.Graphics().p("EgWFAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_5 = new cjs.Graphics().p("EgVlAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_6 = new cjs.Graphics().p("EgVGAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_7 = new cjs.Graphics().p("EgUnAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_8 = new cjs.Graphics().p("EgUIAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_9 = new cjs.Graphics().p("EgTpAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_10 = new cjs.Graphics().p("EgTKAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_11 = new cjs.Graphics().p("EgSqAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_12 = new cjs.Graphics().p("EgSLAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_13 = new cjs.Graphics().p("EgRrAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_14 = new cjs.Graphics().p("EgRMAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_15 = new cjs.Graphics().p("EgQsAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_16 = new cjs.Graphics().p("EgQNAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_17 = new cjs.Graphics().p("EgPtAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_18 = new cjs.Graphics().p("EgPOAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_19 = new cjs.Graphics().p("EgOuAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_20 = new cjs.Graphics().p("EgOPAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_21 = new cjs.Graphics().p("EgNvAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_22 = new cjs.Graphics().p("EgNPAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_23 = new cjs.Graphics().p("EgMvAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_24 = new cjs.Graphics().p("EgMQAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_25 = new cjs.Graphics().p("EgLwAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_26 = new cjs.Graphics().p("EgLQAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_27 = new cjs.Graphics().p("EgKxAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_28 = new cjs.Graphics().p("EgKRAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_29 = new cjs.Graphics().p("EgJxAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_30 = new cjs.Graphics().p("EgJSAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_31 = new cjs.Graphics().p("EgIyAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_32 = new cjs.Graphics().p("EgITAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_33 = new cjs.Graphics().p("EgHzAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_34 = new cjs.Graphics().p("EgHUAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_35 = new cjs.Graphics().p("EgG0AgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_36 = new cjs.Graphics().p("EgGVAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_37 = new cjs.Graphics().p("EgF1AgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_38 = new cjs.Graphics().p("EgFWAgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_39 = new cjs.Graphics().p("EgE2AgFIAA3bMAxwAAAIAAXbg");
	var mask_graphics_40 = new cjs.Graphics().p("EgEXAgFIAA3bMAxwAAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:164.7,y:205.4}).wait(1).to({graphics:mask_graphics_1,x:167.8,y:205.4}).wait(1).to({graphics:mask_graphics_2,x:170.9,y:205.4}).wait(1).to({graphics:mask_graphics_3,x:174.1,y:205.4}).wait(1).to({graphics:mask_graphics_4,x:177.2,y:205.4}).wait(1).to({graphics:mask_graphics_5,x:180.3,y:205.4}).wait(1).to({graphics:mask_graphics_6,x:183.4,y:205.4}).wait(1).to({graphics:mask_graphics_7,x:186.5,y:205.4}).wait(1).to({graphics:mask_graphics_8,x:189.7,y:205.4}).wait(1).to({graphics:mask_graphics_9,x:192.8,y:205.4}).wait(1).to({graphics:mask_graphics_10,x:195.9,y:205.4}).wait(1).to({graphics:mask_graphics_11,x:199.1,y:205.4}).wait(1).to({graphics:mask_graphics_12,x:202.2,y:205.4}).wait(1).to({graphics:mask_graphics_13,x:205.4,y:205.4}).wait(1).to({graphics:mask_graphics_14,x:208.5,y:205.4}).wait(1).to({graphics:mask_graphics_15,x:211.7,y:205.4}).wait(1).to({graphics:mask_graphics_16,x:214.8,y:205.4}).wait(1).to({graphics:mask_graphics_17,x:218,y:205.4}).wait(1).to({graphics:mask_graphics_18,x:221.1,y:205.4}).wait(1).to({graphics:mask_graphics_19,x:224.3,y:205.4}).wait(1).to({graphics:mask_graphics_20,x:227.4,y:205.4}).wait(1).to({graphics:mask_graphics_21,x:230.6,y:205.4}).wait(1).to({graphics:mask_graphics_22,x:233.7,y:205.4}).wait(1).to({graphics:mask_graphics_23,x:236.9,y:205.4}).wait(1).to({graphics:mask_graphics_24,x:240.1,y:205.4}).wait(1).to({graphics:mask_graphics_25,x:243.2,y:205.4}).wait(1).to({graphics:mask_graphics_26,x:246.4,y:205.4}).wait(1).to({graphics:mask_graphics_27,x:249.6,y:205.4}).wait(1).to({graphics:mask_graphics_28,x:252.7,y:205.4}).wait(1).to({graphics:mask_graphics_29,x:255.9,y:205.4}).wait(1).to({graphics:mask_graphics_30,x:259.1,y:205.4}).wait(1).to({graphics:mask_graphics_31,x:262.2,y:205.4}).wait(1).to({graphics:mask_graphics_32,x:265.4,y:205.4}).wait(1).to({graphics:mask_graphics_33,x:268.5,y:205.4}).wait(1).to({graphics:mask_graphics_34,x:271.7,y:205.4}).wait(1).to({graphics:mask_graphics_35,x:274.8,y:205.4}).wait(1).to({graphics:mask_graphics_36,x:278,y:205.4}).wait(1).to({graphics:mask_graphics_37,x:281.1,y:205.4}).wait(1).to({graphics:mask_graphics_38,x:284.3,y:205.4}).wait(1).to({graphics:mask_graphics_39,x:287.4,y:205.4}).wait(1).to({graphics:mask_graphics_40,x:290.6,y:205.4}).wait(1));

	// sine
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#990000").ss(1,1,1).p("AztgDIAyjFQBBjaBIhuQBliZBkBYQB9BtB1HhAp1ACIAyDFQBBDaBIBuQBlCZBkhYQB9htB0nhAAAgBIAzjFQBBjbBIhtQBkiZBkBXQB9BtB1HiAJ4ADIAzDFQBBDbBIBtQBkCZBkhXQB9htB1ni");
	this.shape_34.setTransform(454.8,333.6);

	this.shape_34.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(41));

	// arrowheads
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000033").ss(1,1,1).p("A06llIAzgzIAxAxAUKGZIAxgxIgzgz");
	this.shape_35.setTransform(456.7,297.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(41));

	// Layer 24
	this.text_1 = new cjs.Text("+", "10px 'Verdana'");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 12;
	this.text_1.setTransform(335,113.9);

	this.text_2 = new cjs.Text("-     ", "14px 'Verdana'");
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 12;
	this.text_2.setTransform(299.5,112.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1}]}).wait(41));

	// Voltage V
	this.text_3 = new cjs.Text("V", "18px 'Verdana'");
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 13;
	this.text_3.setTransform(315.1,121.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("ACHhoIAqAAABaACQglAmg1AAQgzAAgmgmQglgjAAg1QgCgMABgGQAFgnAhghQAmglAzAAQA1AAAlAlQAlAlAAA1QAAA2glAigACwhjIAAE5AiwDTIAAk7IAsAA");
	this.shape_36.setTransform(321.5,138.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.text_3}]}).wait(41));

	// graph axis
	this.text_4 = new cjs.Text("Voltage", "11px 'Verdana'");
	this.text_4.lineHeight = 15;
	this.text_4.setTransform(280,264,1,1.002);

	this.text_5 = new cjs.Text("Time", "11px 'Verdana'");
	this.text_5.lineHeight = 15;
	this.text_5.setTransform(558,339.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000033").ss(1,1,1).p("A0cAAMAo5AAA");
	this.shape_37.setTransform(459,334);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000033").ss(1,1,1).p("AAAr+IAAMAIAAL9");
	this.shape_38.setTransform(328,333.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.text_5},{t:this.text_4}]}).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.3,217,576.7,409.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;