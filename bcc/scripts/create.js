$('#background-control').on('click', function(event) {
    event.preventDefault();
    $('#add-background').css('display', 'block');
    $('#add-background-button').on('click', function(event) {
        event.preventDefault();
        $('svg').css('background-image', 'url(' + $('#add-background-input').val() + ')');
    });
});;

dojo.require('dojox.gfx');
dojo.require('dojox.gfx.utils');
dojo.require('dojox.gfx.move');
dojo.on = dojo.require("dojo/on");
dojo.require("dojo/query!css2");
//===============================================
var cardTemplate = '{{=it.template}}';
console.log(cardTemplate);
//===============================================

/* Set the init function to run when dojo loading and page parsing has completed. */
dojo.ready(function(){

  /* Create our surface. */
    var drawing = dojox.gfx.createSurface(dojo.byId("dojo-object"), 340, 210);
    drawing
        .rawNode
        .style
        .backgroundImage = 'url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCPAq1XniWl2D5Ca1-AtWRKHRRmUh4KX5SQAtgOZTL9tQeKijs_wrPnuM)';

    drawing
        .rawNode
        .style
        .backgroundRepeat = 'no-repeat';

    drawing
        .rawNode
        .style
        .backgroundSize = '100% auto';

    dojo.on(drawing, 'mousedown', scaleGroup);

    function scaleGroup(e) {
        // if shape is text - scale font
        //var group = drawing.createGroup();
        //works
        //e.gfxTarget.applyTransform({xx: 1});
        //group.add(e.gfxTarget);
        //group.applyTransform(dojox.gfx.matrix.scale({x:2, y:2}));
    }

    var controlsModule = DrawControlsModuleInit();
    drawModule.init(jQuery, dojox, drawing);

    var square = controlsModule.newSquareControl(10, 10, 10, 10, 'black', 'red');

    drawing.createImage(
        {
            width: 150,
            height: 100,
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCPAq1XniWl2D5Ca1-AtWRKHRRmUh4KX5SQAtgOZTL9tQeKijs_wrPnuM',
        });

    drawing.createRect(square)
        .setFill('blue')
        .x = 150;

    var t = drawing.createText({
        text: 'Lorem ipsum',
        align: 'start',
        x: 10,
        y: 20
    });

    t.rawNode.className = 'moveable';

    t.setFill('black');
    t.setFont({
        family: 'Arial',
        size: 15
    });

    t = new dojox.gfx.Moveable(t);


  /*var rect = drawing.createRect({
   width:  100,
   height: 100,
   x: 50,
   y: 50
 }).setFill("blue").setStroke("black");*/

    $('#button').on('click', function(event) {
        event.preventDefault();
        var json = dojox.gfx.utils.toJson(drawing);
        console.log(json);
        drawing.rawNode.innerHTML = '';
        dojox.gfx.utils.fromJson(drawing, json);
        //templateEventsInit('#dojo-object', drawing);
        console.log(drawing.children);
        for (var i = 0; i < drawing.children.length; i++) {
            new dojox.gfx.Moveable(drawing.children[i]);
        }
        console.log('clicked');
    });
});
