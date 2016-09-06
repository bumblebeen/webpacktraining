var _ = require("lodash");
var $ = require("jquery");
class ChatBot {
    constructor (messages) {
        this.messages = messages;
    }
    talk () {
        $("h2").html(_.sample(this.messages));
    }
}

let cbot = new ChatBot(["Hello, I'm a chatbot for ads", "How are you doing today?",
	"Is it me or is it hot today?", "Welcome to Webpack Training", "Let us grab a beer"]);

setInterval(() => {
	cbot.talk();
}, 2000);