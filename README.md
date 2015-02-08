# Puzzle Battle

> I started this project as a personal challenge of create a real time multiplayer
> HTML5 game. The main goal for me was to implement the use of Socket.IO in an already in use HTML5 game.

Puzzle Battle is a "work in progress" fork for the games section of [codenatic].
The main idea is to complete the puzzle before your friends do it, for that I have created a
progress bar list of each user (where you can see your friends progress but you can't see yours),
there are still a lot of work to do but for now as an MVP this will do the job.


### Installation

install node.js:

go to [nodejs] and just follow the instructions according to your OS.

once that node.js gets installed

```sh
$ git clone https://github.com/FrancoAguilera/puzzle.git
```

```sh
$ cd /path/to/cloned/repo/
$ npm install
```
> The "npm install" command will download all the project needed packages into you local folder.

At this point the app is set up and ready to work, but before that 
```sh
$ cd /path/to/cloned/repo/
$ node app.js
```
Open you browser and type "localhost:5000" and there you go!


### Usage

- Find your local ip address. e.g.: 192.168.0.4
- Aim to the port 5000 e.g.: http://192.168.0.4:5000
- Hit that url from any computer on you local network.


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