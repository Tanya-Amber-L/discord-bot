const Discord = require('discord.js');
const cron = require('cron');
module.exports = {
    name: 'reminder',
    description: 'reminding for the break and meal times',
    execute(GeneralChan) {
        const breakMessage = new Discord.MessageEmbed()
            .setColor('#6C63FF')
            .setTitle("Break Time! :doughnut:")
            .setDescription("15 minutes break, just go take a coffee.");

        const mealMessage = new Discord.MessageEmbed()
            .setColor('#6C63FF')
            .setTitle("Meal Time! :pizza:")
            .setDescription("Nice Meal! \n Don't forget to clock on [MyBecode](https://my.becode.org/)");

        const endOfDayMessage = new Discord.MessageEmbed()
            .setColor('#6C63FF')
            .setTitle("End of the day! :partying_face:")
            .setDescription("Don't forget to clock on [MyBecode](https://my.becode.org/). \n Nice evening guys!");

        const sendBreakMessage = new cron.CronJob('00 11,16 * * 1-5', () => { 
            // From mon-fri, 11.00 & 15.00
            GeneralChan.send(breakMessage);
        });
        const sendMealMessage = new cron.CronJob('00 30 12 * * 1-5', () => {
            // From mon-fri, 12.30
            GeneralChan.send(mealMessage);
        });
        const sendEndOfDayMessage = new cron.CronJob('00 00 17 * * 1-5', () => {
            // From mon-fri, 17.00
            GeneralChan.send(endOfDayMessage);
        });

        sendBreakMessage.start();
        sendMealMessage.start();
        sendEndOfDayMessage.start();
    }
}