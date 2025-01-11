import HandlebarsApplicationMixin from "./handlebars-application.mjs";


function getPermissionsAsHtml()
{
    let message = "Permissions:";
    try {
        Object.keys(foundry.CONST.USER_PERMISSIONS).map((perm) => foundry.CONST.USER_PERMISSIONS[perm])
        .forEach((perm) => {
            message += `<br>${perm.label}: 
            ${game.i18n.localize(perm.hint)}, 
            ${perm.disableGM}, 
            ${perm.defaultRole}`;
        });
    }
    catch (error) {
        message += `<br>ERROR: ${error.message}`;
    }
    return message;
}

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

function getMany()
{
    try
    {
        // return foundry.client.Actors.createDocument({name: "test", type: "actor"}, null);
        // return foundry.client.Messages;
        // return game.Actors.createDocument({name: "test", type: "actor"}, null);
        // return Object.keys(foundry); //CONST,abstract,utils,documents,packages,config,prosemirror,grid,applications,audio,canvas,helpers,data,dice
        // return Object.keys(foundry.CONST); //ACTIVE_EFFECT_MODES,ALLOWED_HTML_ATTRIBUTES,ALL_DOCUMENT_TYPES,ASCII,AUDIO_CHANNELS,AUDIO_FILE_EXTENSIONS,BASE_DOCUMENT_TYPE,CANVAS_PERFORMANCE_MODES,CARD_DRAW_MODES,CHAT_MESSAGE_STYLES,CHAT_MESSAGE_TYPES,COMBAT_ANNOUNCEMENTS,COMPATIBILITY_MODES,COMPENDIUM_DOCUMENT_TYPES,CORE_SUPPORTED_LANGUAGES,CSS_THEMES,DEFAULT_TOKEN,DICE_ROLL_MODES,DIRECTORY_SEARCH_MODES,DOCUMENT_LINK_TYPES,DOCUMENT_META_OWNERSHIP_LEVELS,DOCUMENT_OWNERSHIP_LEVELS,DOCUMENT_TYPES,DRAWING_FILL_TYPES,EMBEDDED_DOCUMENT_TYPES,FILE_CATEGORIES,FOLDER_DOCUMENT_TYPES,FOLDER_MAX_DEPTH,FONT_FILE_EXTENSIONS,FONT_WEIGHTS,GAME_VIEWS,GRAPHICS_FILE_EXTENSIONS,GRID_DIAGONALS,GRID_MIN_SIZE,GRID_SNAPPING_MODES,GRID_TYPES,HTML_FILE_EXTENSIONS,IMAGE_FILE_EXTENSIONS,JOURNAL_ENTRY_PAGE_FORMATS,KEYBINDING_PRECEDENCE,LIGHTING_LEVELS,MACRO_SCOPES,MACRO_TYPES,MEASURED_TEMPLATE_TYPES,MEDIA_MIME_TYPES,MOVEMENT_DIRECTIONS,OCCLUSION_MODES,PACKAGE_AVAILABILITY_CODES,PACKAGE_TYPES,PASSWORD_SAFE_STRING,PLAYLIST_MODES,PLAYLIST_SORT_MODES,PRIMARY_DOCUMENT_TYPES,REGION_EVENTS,REGION_VISIBILITY,SETUP_PACKAGE_PROGRESS,SETUP_VIEWS,SHOWDOWN_OPTIONS,SOFTWARE_UPDATE_CHANNELS,SORT_INTEGER_DENSITY,SYSTEM_SPECIFIC_COMPENDIUM_TYPES,TABLE_RESULT_TYPES,TEXTURE_DATA_FIT_MODES,TEXT_ANCHOR_POINTS,TEXT_ENRICH_EMBED_MAX_DEPTH,TEXT_FILE_EXTENSIONS,TILE_OCCLUSION_MODES,TIMEOUTS,TOKEN_DISPLAY_MODES,TOKEN_DISPOSITIONS,TOKEN_HEXAGONAL_SHAPES,TOKEN_OCCLUSION_MODES,TRUSTED_IFRAME_DOMAINS,UPLOADABLE_FILE_EXTENSIONS,USER_PERMISSIONS,USER_ROLES,USER_ROLE_NAMES,VIDEO_FILE_EXTENSIONS,VTT,WALL_DIRECTIONS,WALL_DOOR_INTERACTIONS,WALL_DOOR_STATES,WALL_DOOR_TYPES,WALL_MOVEMENT_TYPES,WALL_RESTRICTION_TYPES,WALL_SENSE_TYPES,WEBSITE_API_URL,WEBSITE_URL,WORLD_DOCUMENT_TYPES,WORLD_JOIN_THEMES,vtt
        // return Object.keys(foundry.utils); //AsyncFunction,BitMask,Collection,Color,EventEmitterMixin,HttpError,IterableWeakMap,IterableWeakSet,Semaphore,StringTree,WordTree,benchmark,circleCircleIntersects,closestPointToSegment,debounce,debouncedReload,deepClone,diffObject,duplicate,encodeURL,expandObject,fetchJsonWithTimeout,fetchWithTimeout,filterObject,flattenObject,formatFileSize,getDefiningClass,getParentClasses,getProperty,getRoute,getType,hasProperty,invertObject,isEmpty,isNewerVersion,isSubclass,lineCircleIntersection,lineLineIntersection,lineSegmentIntersection,lineSegmentIntersects,logCompatibilityWarning,mergeObject,objectsEqual,orient2dFast,parseS3URL,parseUuid,pathCircleIntersects,polygonCentroid,quadraticIntersection,randomID,setProperty,threadLock,throttle,timeSince
        // return Object.keys(foundry.config); //ApplicationConfiguration,ReleaseData
        // return Object.keys(foundry.applications.sheets); // V2 sheets
        // return Object.keys(CONFIG); // debug,compatibility,compendium,DatabaseBackend,Actor,Adventure,Cards,ChatMessage,Combat,Dice,FogExploration,Folder,Item,JournalEntry,Macro,Playlist,RollTable,Scene,Setting,User,Canvas,canvasTextStyle,weatherEffects,controlIcons,fontDefinitions,defaultFontFamily,statusEffects,specialStatusEffects,sounds,supportedLanguages,i18n,time,ActiveEffect,ActorDelta,Card,TableResult,JournalEntryPage,PlaylistSound,AmbientLight,AmbientSound,Combatant,Drawing,MeasuredTemplate,Note,Region,RegionBehavior,Tile,Token,Wall,soundEffects,TinyMCE,TextEditor,WebRTC,ui
        // return Object.keys(CONFIG.Actor); // documentClass,collection,compendiumIndexFields,compendiumBanner,sidebarIcon,dataModels,typeLabels,typeIcons,trackableAttributes,sheetClasses
        // return Object.keys(game); // view,data,sessionId,socket,userId,world,system,modules,packs,documentIndex,compendiumUUIDRedirects,collections,actors,cards,combats,folders,items,journal,macros,messages,playlists,scenes,tables,users,release,debug,loading,permissions,ready,compendiumArt,audio,canvas,clipboard,i18n,issues,gamepad,keyboard,keybindings,mouse,nue,settings,time,tooltip,tours,video,workers,_documentsReady,webrtc
        // return Object.keys(game.actors); // invalidDocumentIds,apps
        // return Object.keys(game.world); //  id,title,description,authors,url,license,readme,bugs,changelog,flags,media,version,compatibility,scripts,esmodules,styles,languages,packs,packFolders,relationships,socket,manifest,download,protected,exclusive,persistentStorage,system,background,joinTheme,coreVersion,systemVersion,lastPlayed,playtime,nextSession,resetKeys,safeMode,availability,locked,owned,tags,hasStorage,favorite
        // return Object.keys(game.system);  //  strictDataCleaning,id,title,description,authors,url,license,readme,bugs,changelog,flags,media,version,compatibility,scripts,esmodules,styles,languages,packs,packFolders,relationships,socket,manifest,download,protected,exclusive,persistentStorage,background,initiative,grid,primaryTokenAttribute,secondaryTokenAttribute,availability,locked,owned,tags,hasStorage,favorite
        // return Object.keys(game.data); //  userId,release,world,system,modules,demoMode,addresses,files,options,activeUsers,model,paused,packageWarnings,template,packs,coreUpdate,systemUpdate,users,actors,messages,cards,combats,folders,items,journal,macros,playlists,tables,scenes,settings
        return Object.keys(CONFIG.Item.sheetClasses.item);
        return Object.keys(game.user);
        
    }
    catch (error)
    {
        return `${error.message}`;
    }
}

Hooks.on('ready', () => logStartupMessage(`many: ${getMany()}`));






// const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

//  class ActorDataModel extends foundry.abstract.TypeDataModel {
//   static defineSchema() {
//     return {
//       resources: new SchemaField({
//         health: new SchemaField({
//           min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
//           value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
//           max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
//         })
//       })
//     };
//   }
// }
// class ItemDataModel extends foundry.abstract.TypeDataModel {
//  static defineSchema() {
//    return {
//    };
//  }
// }


class MyAppSheet extends foundry.applications.api.DocumentSheetV2
{
    static #onSubmit()
    {
        return;
    }


    static DEFAULT_OPTIONS = {
        id: "actor-form",
        form: {
          handler: MyAppSheet.#onSubmit,
          closeOnSubmit: true,
        },
        position: {
          width: 640,
          height: "auto",
        },
        tag: "form",
        window: {
          icon: "fas fa-gear",
          title: "FOO.form.title"
        }
      
      }
}


class MyActorSheet extends foundry.applications.sheets.ActorSheetV2
{
    // async _prepareContext(options) {
    //     return {
    //       document: this.document,
    //       system: this.document.system,
    //       fields: this.document.schema.fields,
    //       systemFields: this.document.system.schema.fields,
    //       isEditable: this.isEditable
    //     }
    //   }
}

class MyItemSheet extends foundry.applications.sheets.ItemSheetV2
{

}

let error2 = null;
function initialize()
{
    // CONFIG.Actor.dataModels.actor = ActorDataModel;
    // CONFIG.Item.dataModels.item = ItemDataModel;
    try
    {
        
        DocumentSheetConfig.unregisterSheet(CONFIG.app.documentClass, 'core', CONFIG.Actor.sheetClasses.actor);
        DocumentSheetConfig.registerSheet(CONFIG.app.documentClass, 'core', HandlebarsApplicationMixin(MyAppSheet), {
            makeDefault: true,
        });
        
        DocumentSheetConfig.unregisterSheet(CONFIG.Actor.documentClass, 'core', CONFIG.Actor.sheetClasses.actor);
        DocumentSheetConfig.registerSheet(CONFIG.Actor.documentClass, 'core', HandlebarsApplicationMixin(MyActorSheet), {
            makeDefault: true,
        });
        DocumentSheetConfig.unregisterSheet(CONFIG.Item.documentClass, 'core', CONFIG.Item.sheetClasses.item);
        DocumentSheetConfig.registerSheet(CONFIG.Item.documentClass, 'core', HandlebarsApplicationMixin(MyItemSheet), {
            makeDefault: true,
        });
    }
    catch (error)
    {
    error2 = error.message;
    }
}
Hooks.on('ready', initialize);
Hooks.on('ready', () => logStartupMessage(`error: ${error2}`));

