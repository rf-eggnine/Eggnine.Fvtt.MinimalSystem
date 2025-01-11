// Copyright 2025 RF@EggNine.com

import HandlebarsApplicationMixin from "./handlebars-application.mjs";

let v2 = false;

function getChatMessage() {
    let message = "MinSys 0.1.5 is now ready.<br/>";
    return message;
}

function logStartupMessage(message) {
    game.user.addChatMessage(
        ChatMessage.create({
            content: message,
        })
    );
}

Hooks.on('ready', () => logStartupMessage(getChatMessage()));

class MyActorSheet extends foundry.applications.sheets.ActorSheetV2
{
}

class MyItemSheet extends foundry.applications.sheets.ItemSheetV2
{

}

let error2 = null;
function initialize()
{
    try
    {
        if(v2)
        {
            DocumentSheetConfig.unregisterSheet(CONFIG.Actor.documentClass, 'core', CONFIG.Actor.sheetClasses.actor);
            DocumentSheetConfig.registerSheet(CONFIG.Actor.documentClass, 'core', HandlebarsApplicationMixin(MyActorSheet), {
                makeDefault: true,
            });
            DocumentSheetConfig.unregisterSheet(CONFIG.Item.documentClass, 'core', CONFIG.Item.sheetClasses.item);
            DocumentSheetConfig.registerSheet(CONFIG.Item.documentClass, 'core', HandlebarsApplicationMixin(MyItemSheet), {
                makeDefault: true,
            });
        }
    }
    catch (error)
    {
    error2 = error.message;
    }
}
Hooks.on('ready', initialize);
Hooks.on('ready', () => logStartupMessage(`error: ${error2}`));

