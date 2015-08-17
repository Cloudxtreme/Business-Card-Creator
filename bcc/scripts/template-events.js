function templateEventsInit(gfxDomId, dojoSurface) {
  var surface = $(gfxDomId).children().first(),
      surfacePosition = surface.offset();

  var mouseSurfacePosition = {
    x: 0,
    y: 0
  };

  var currentMousePos = { x: -1, y: -1 };

  $(document).mousemove(function(event) {
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
      mouseSurfacePosition.x = currentMousePos.x - surfacePosition.left;
      mouseSurfacePosition.y = currentMousePos.y - surfacePosition.top;
  });

  /*MOVE EVENT START*/
  var isDrawnObjectSelected = false,
      selectedElement,
      isDrawingObject,
      currentlyDrawnObject,
      isDrawControlSelected;

  $('#square-control').on('click', function(event) {
    event.preventDefault();
    isDrawControlSelected = true;
  });

  $('#dojo-object')
    .children()
    .first().on('mousedown', function(event) {
      event.preventDefault();

      if (isDrawControlSelected) {
        currentlyDrawnObject = dojoSurface.createRect({
          //defaul values
        }).setFill("blue").setStroke("black");
        isDrawingObject = true;
      } else {
        isDrawnObjectSelected = true;
        selectedElement = $(event.target);
      }
    })
    .on('mousemove', function(event) {
      event.preventDefault();

      if (isDrawnObjectSelected) {
        var center = {
          x: (selectedElement.attr('x') - 0) + (selectedElement.attr('width') - 0),
          y: (selectedElement.attr('y') - 0) + (selectedElement.attr('height') - 0)
        };

        var oldPosition = {
          x: selectedElement.attr('x') - 0,
          y: selectedElement.attr('y') - 0
        };

        var changeX = mouseSurfacePosition.x - oldPosition.x,
          changeY = mouseSurfacePosition.y - oldPosition.y;

        var nextPosition = {
          x: oldPosition.x + changeX,
          y: oldPosition.y + changeY
        };


        var surfaceRightSideX = surface.attr('width') - 0,
          surfaceBotSideY = surface.attr('height') - 0;

        console.log('Surface: Right: '+ surfaceRightSideX + 'Bottom: ' + surfaceBotSideY);

        if (nextPosition.x +
          (selectedElement.attr('width') - 0) < surfaceRightSideX &&
          nextPosition.x >= 0) {
          selectedElement.attr('x', nextPosition.x);
        }

        if (nextPosition.y +
          (selectedElement.attr('height') - 0) < surfaceBotSideY &&
          nextPosition.y >= 0) {
          selectedElement.attr('y', oldPosition.y + changeY);
        }
      } else if(isDrawingObject) {
        currentlyDrawnObject.enlarge(mouseSurfacePosition.x, mouseSurfacePosition.y);
      }
    })
    .on('mouseup', function(event) {
      event.preventDefault();
      isDrawnObjectSelected = false;
      isDrawingObject = false;
    });
    /*MOVE EVENT END*/
}
