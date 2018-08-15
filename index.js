const Telegraf = require('telegraf');
const r = require("nraw");

const bot = new Telegraf('681501793:AAE5KzNwHPHqiCG0WKOG3wDEg-_6mDqPaBg', {
  channelMode: true
});

// bot.start((message) => {
//   console.log('started:', message.from.id)
//   return message.reply('Hello my friend, contact me by send /contact, or write anything');
// })

var Reddit = new r("Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0");

bot.command('start', message => {
  setInterval(function () {
    Reddit.subreddit("wtfstockphotos").random().exec(function(res){
      var data = res[0].data.children[0].data
      console.log(data.title + "\n" + data.author + "\n" + data.url + "\n");
      message.replyWithPhoto(data.url);
    })
  }, 1000 * 60 * 60); // hour
});

bot.startPolling();
