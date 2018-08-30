"use strict";

const r = require("nraw");
const Telegram = require('node-telegram-bot-api');

const Reddit = new r("Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0");

const token = "681501793:AAE5KzNwHPHqiCG0WKOG3wDEg-_6mDqPaBg";
const bot = new Telegram(token, {
  polling: true,
  channelMode: true
});

var count = 0;
var date = new Date();

var data, title, image, author;

console.log('bot server started\t' + currentTime());

bot.on('message', function (msg) {
  setInterval(() => {
    Reddit.subreddit("wtfstockphotos").random().exec(function (res) {
      data = res[0].data.children[0].data;
      title = data.title;
      author = data.author;
      image = data.url;

      console.log(count++ + "\t" + currentTime() + "\n" + title + " (" + author + ")\n" + url + "\n");
      bot.sendPhoto(msg.chat.id, image);
    });
  }, 1000 * 60);
});

function currentTime() {
  return date.getHours() + ":" + date.getMinutes() + "." + date.getSeconds();
}
