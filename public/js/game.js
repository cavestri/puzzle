/*
The MIT License (MIT)

Copyright (c) 2015 Franco Cavestri

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
*/

var game = {};

game.elements = 18;
game.selected = "";
game.stage = 1;
game.success = [
                ['0px','0px'],
                ['-100px', '0px'],
                ['-200px', '0px'],
                ['-300px', '0px'],
                ['-400px', '0px'],
                ['-500px', '0px'],
                ['0px', '-100px'],
                ['-100px', '-100px'],
                ['-200px', '-100px'],
                ['-300px', '-100px'],
                ['-400px', '-100px'],
                ['-500px', '-100px'],
                ['0px', '-200px'],
                ['-100px', '-200px'],
                ['-200px', '-200px'],
                ['-300px', '-200px'],
                ['-400px', '-200px'],
                ['-500px', '-200px']
               ]
game.current = game.success.slice(0);


game.createParts = function() {
  var pic = $("#image");
  for(var i = 0; i < game.elements; i++) {
    pic.append('<div class="pics" id="img-' + i + '"></div>');
  }
}

game.updateParts = function() {
  var j = 0;
  $("#image > div").each(function () {
    $(this).css('background', 'url("img/' + game.stage + '.jpg") no-repeat');
    $(this).css('background-position', '' + game.current[j][0] + ' ' + game.current[j][1]);
    if(game.stage === 1) {
      $(this).on("click", game.changePart)
    }
    j++;
  });
}

game.shuffle = function (o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

game.changePart = function() {
  var x, y, s;
  if(game.selected === "") {
    game.selected = $(this).attr('id');
    $(this).addClass('selected');
  } else if(game.selected == $(this).attr('id')) {
      $(this).removeClass('selected');
      game.selected = "";
  } else {
    s = $("#" + game.selected);
    x = $(this).css('background-position-x');
    y = $(this).css('background-position-y');
    $(this).css('background-position-x', s.css('background-position-x'));
    $(this).css('background-position-y', s.css('background-position-y'));
    s.css('background-position-x', x);
    s.css('background-position-y', y);
    s.removeClass('selected');
    game.selected = "";
    game.checkParts();
  }
}

game.startGame = function() {
  game.createParts();
  game.loadStage();
}

game.loadStage = function() {
  $("#result").hide();
  game.current = game.shuffle(game.current);
  game.updateParts(game.stage);
}

game.checkParts = function() {
  var win = false;
  for(var i = 0; i < game.elements; i++) {
    if($("#img-" + i).css('background-position-x') == game.success[i][0] && $("#img-" + i).css('background-position-y') == game.success[i][1]) {
      win = true;
    } else {
      win = false;
      break;
    }
  }
  if(win) {
    var e = $("#end");
    e.css('background', 'url("img/' + game.stage + '.jpg") no-repeat');
    e.fadeIn();
    $('#result').delay(800).fadeIn();
    if(game.stage >= 9) {
      game.stage = 1;
    } else {
      game.stage = game.stage + 1;
    }
    setTimeout(function() {
      e.fadeOut();
      game.loadStage();
     }, 3000)
    }
}