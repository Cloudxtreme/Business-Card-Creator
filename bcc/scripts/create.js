//var templateJSON = '{{=it.structure}}';
dojo.require('dojox.gfx');
dojo.require('dojox.gfx.utils');

/* Set the init function to run when dojo loading and page parsing has completed. */
dojo.ready(function(){

  /* Create our surface. */
  var drawing = dojox.gfx.createSurface(dojo.byId("dojo-object"), 400, 400);

  templateEventsInit('#dojo-object', drawing);

  var controlsModule = DrawControlsModuleInit();
  var square = controlsModule.newSquareControl(10, 10, 10, 10, 'black', 'red');

  drawing.createRect(square).setFill('blue').x = 150;
  /*var rect = drawing.createRect({
   width:  100,
   height: 100,
   x: 50,
   y: 50
 }).setFill("blue").setStroke("black");*/

  /*$('#button').on('click', function(event) {
   event.preventDefault();
   var json = dojox.gfx.utils.toJson(drawing);
   console.log(json);
   dojox.gfx.utils.fromJson(copy, json);
   console.log('clicked');
  });*/

});
