# Puzzle Battle

Puzzle Battle is a "work in progress" fork for the games section of [codenatic].

> I started this project as a personal challenge of create a real time multiplayer 
> HTML5 game. The main goal for me was to implement the use of Socket.IO in an already in use HTML5 game.


### Installation

install node.js:

go to [nodejs] and just follow the instructions according to you OS.

once that node.js gets installed
```sh
$ git clone https://github.com/FrancoAguilera/puzzle.git
```

```sh
$ cd /path/to/cloned/repo/
$ npm install
```
At this point the app is set up and ready to work, but before that 
```sh
$ cd /path/to/cloned/repo/
$ node app.js
```
Open you browser and type "localhost:5000" and there you go!

### NPM Tech

For this implementation I have use the following node.js modules:

* [express] - An MVC on the server side for node.js
* [socket.io] - node.js realtime framework server
* [jquery] - is there enything more to add ?


### Development

Want to contribute? Great!

* Clone the repo 
* make some changes 
* send a pull request


[codenatic]:http://codenatic.com/
[nodejs]:http://nodejs.org/
[express]:https://www.npmjs.com/package/express
[socket.io]:https://www.npmjs.com/package/socket.io
[jquery]:http://jquery.com/