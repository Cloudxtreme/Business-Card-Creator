function DrawControlsModuleInit () {
  var module = (function () {
    var SquareControl;

    SquareControl = (function () {
      var SquareControl = function (x, y, width, height, fill, stroke) {
        this.x = x;
        this. y = y;
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.stroke = stroke;
      }

      SquareControl.prototype.enlarge = function (endX, endY) {
        this.width = endX - this.x;
        this.height = endY - this.y;
        console.log(this.width + ' ' + this.height);
      }

      SquareControl.prototype.hi = function () {
        console.log('hi');
        console.log(this.x);
      }

      return SquareControl;
    }());

    return {
      newSquareControl: function (x, y, width, height, fill, stroke) {
        return new SquareControl(x, y, width, height, fill, stroke);
      }
    }
  }());

  return module;
}
