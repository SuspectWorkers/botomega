const mineflayer = require('mineflayer')
const vec3 = require('vec3')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const bot = mineflayer.createBot({
  host: 'iodacdtc1xxr.aternos.me',
  port: parseInt('53829'),
  username: 'Shinshila'
})

bot.once('spawn', () => {
   bot.mcData = require('minecraft-data')(bot.version);
	
})

bot.on('chat', (username, message) => {
  if (username == 'TheMainSuspect' && message == 'lever') {
    watchLever();
  }
})


async function watchLever () {
	const id = bot.mcData.blocksByName['lever'].id
	let leverBlock = bot.findBlock({ matching: id, maxDistance: 6, count: 1, useExtraInfo: true })
	if (!leverBlock) {
		bot.chat('no lever found')
		return
	};
	const lever = await bot.activateBlock(leverBlock);
	await delay(1000);
	watchLever();
}


