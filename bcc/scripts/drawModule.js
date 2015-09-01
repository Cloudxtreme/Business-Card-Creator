var drawModule = {
    init: function ($, dojox, surface) {
        $('#image-control').on('click', function(event) {
            event.preventDefault();
            $this = $(this);
            var ul = $this.parent().clone();

            $('#add-image').css('display', 'block');;

            $('#add-image-button')
                .on('click', function(event) {
                    event.preventDefault();
                    if ($('#img-src').val()) {
                        var image = surface.createImage({
                            width: $('#img-width').val() || 150,
                            height: $('#img-height').val() || 100,
                            src: $('#img-src').val()
                        });

                        new dojox.gfx.Moveable(image);
                    } else {
                        $('#img-src').css('background', '2px solid red');
                    }
                });
        });;
    }
}
