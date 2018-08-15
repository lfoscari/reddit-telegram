"use strict";

var subreddit = "wtfstockphotos";
var postEveryHours = 24; // one post per day

var Telegraf = require('telegraf');
var r = require("nraw");

var bot = new Telegraf('681501793:AAE5KzNwHPHqiCG0WKOG3wDEg-_6mDqPaBg', {
  channelMode: true
});

var Reddit = new r("Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0");

bot.command('start', function (message) {
  setInterval(function () {
    Reddit.subreddit(subreddit).random().exec(function (res) {
      var data = res[0].data.children[0].data;
      console.log(data.title + "\n" + data.author + "\n" + data.url + "\n");
      message.replyWithPhoto(data.url);
    });
  }, 1000 * 60 * 60 * postEveryHours); // 24 hour
});

bot.startPolling();
