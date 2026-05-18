gdjs.motorcarsCode = {};
gdjs.motorcarsCode.localVariables = [];
gdjs.motorcarsCode.idToCallbackMap = new Map();
gdjs.motorcarsCode.GDdeskObjects1= [];
gdjs.motorcarsCode.GDdeskObjects2= [];
gdjs.motorcarsCode.GDdesk2Objects1= [];
gdjs.motorcarsCode.GDdesk2Objects2= [];
gdjs.motorcarsCode.GDecranObjects1= [];
gdjs.motorcarsCode.GDecranObjects2= [];
gdjs.motorcarsCode.GDperso1Objects1= [];
gdjs.motorcarsCode.GDperso1Objects2= [];
gdjs.motorcarsCode.GDperso2Objects1= [];
gdjs.motorcarsCode.GDperso2Objects2= [];
gdjs.motorcarsCode.GDdesk6Objects1= [];
gdjs.motorcarsCode.GDdesk6Objects2= [];
gdjs.motorcarsCode.GDpjette0Objects1= [];
gdjs.motorcarsCode.GDpjette0Objects2= [];
gdjs.motorcarsCode.GDlimites1Objects1= [];
gdjs.motorcarsCode.GDlimites1Objects2= [];
gdjs.motorcarsCode.GDlimites2Objects1= [];
gdjs.motorcarsCode.GDlimites2Objects2= [];
gdjs.motorcarsCode.GDpassage_9595niveauObjects1= [];
gdjs.motorcarsCode.GDpassage_9595niveauObjects2= [];
gdjs.motorcarsCode.GDporteObjects1= [];
gdjs.motorcarsCode.GDporteObjects2= [];
gdjs.motorcarsCode.GDpassage_9595niveau_95952Objects1= [];
gdjs.motorcarsCode.GDpassage_9595niveau_95952Objects2= [];
gdjs.motorcarsCode.GDascenseurObjects1= [];
gdjs.motorcarsCode.GDascenseurObjects2= [];
gdjs.motorcarsCode.GDascenseur2Objects1= [];
gdjs.motorcarsCode.GDascenseur2Objects2= [];
gdjs.motorcarsCode.GDedouardObjects1= [];
gdjs.motorcarsCode.GDedouardObjects2= [];
gdjs.motorcarsCode.GDbravoObjects1= [];
gdjs.motorcarsCode.GDbravoObjects2= [];
gdjs.motorcarsCode.GDvisiteur1Objects1= [];
gdjs.motorcarsCode.GDvisiteur1Objects2= [];
gdjs.motorcarsCode.GDicon_9595mapObjects1= [];
gdjs.motorcarsCode.GDicon_9595mapObjects2= [];


gdjs.motorcarsCode.mapOfGDgdjs_9546motorcarsCode_9546GDecranObjects1Objects = Hashtable.newFrom({"ecran": gdjs.motorcarsCode.GDecranObjects1});
gdjs.motorcarsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ecran"), gdjs.motorcarsCode.GDecranObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.motorcarsCode.mapOfGDgdjs_9546motorcarsCode_9546GDecranObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.motorcarsCode.GDecranObjects1.length;i<l;++i) {
    if ( gdjs.motorcarsCode.GDecranObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.motorcarsCode.GDecranObjects1[k] = gdjs.motorcarsCode.GDecranObjects1[i];
        ++k;
    }
}
gdjs.motorcarsCode.GDecranObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "exterieur rue", false);
}
}

}


};gdjs.motorcarsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.motorcarsCode.eventsList0(runtimeScene);
}


};

gdjs.motorcarsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.motorcarsCode.GDdeskObjects1.length = 0;
gdjs.motorcarsCode.GDdeskObjects2.length = 0;
gdjs.motorcarsCode.GDdesk2Objects1.length = 0;
gdjs.motorcarsCode.GDdesk2Objects2.length = 0;
gdjs.motorcarsCode.GDecranObjects1.length = 0;
gdjs.motorcarsCode.GDecranObjects2.length = 0;
gdjs.motorcarsCode.GDperso1Objects1.length = 0;
gdjs.motorcarsCode.GDperso1Objects2.length = 0;
gdjs.motorcarsCode.GDperso2Objects1.length = 0;
gdjs.motorcarsCode.GDperso2Objects2.length = 0;
gdjs.motorcarsCode.GDdesk6Objects1.length = 0;
gdjs.motorcarsCode.GDdesk6Objects2.length = 0;
gdjs.motorcarsCode.GDpjette0Objects1.length = 0;
gdjs.motorcarsCode.GDpjette0Objects2.length = 0;
gdjs.motorcarsCode.GDlimites1Objects1.length = 0;
gdjs.motorcarsCode.GDlimites1Objects2.length = 0;
gdjs.motorcarsCode.GDlimites2Objects1.length = 0;
gdjs.motorcarsCode.GDlimites2Objects2.length = 0;
gdjs.motorcarsCode.GDpassage_9595niveauObjects1.length = 0;
gdjs.motorcarsCode.GDpassage_9595niveauObjects2.length = 0;
gdjs.motorcarsCode.GDporteObjects1.length = 0;
gdjs.motorcarsCode.GDporteObjects2.length = 0;
gdjs.motorcarsCode.GDpassage_9595niveau_95952Objects1.length = 0;
gdjs.motorcarsCode.GDpassage_9595niveau_95952Objects2.length = 0;
gdjs.motorcarsCode.GDascenseurObjects1.length = 0;
gdjs.motorcarsCode.GDascenseurObjects2.length = 0;
gdjs.motorcarsCode.GDascenseur2Objects1.length = 0;
gdjs.motorcarsCode.GDascenseur2Objects2.length = 0;
gdjs.motorcarsCode.GDedouardObjects1.length = 0;
gdjs.motorcarsCode.GDedouardObjects2.length = 0;
gdjs.motorcarsCode.GDbravoObjects1.length = 0;
gdjs.motorcarsCode.GDbravoObjects2.length = 0;
gdjs.motorcarsCode.GDvisiteur1Objects1.length = 0;
gdjs.motorcarsCode.GDvisiteur1Objects2.length = 0;
gdjs.motorcarsCode.GDicon_9595mapObjects1.length = 0;
gdjs.motorcarsCode.GDicon_9595mapObjects2.length = 0;

gdjs.motorcarsCode.eventsList1(runtimeScene);
gdjs.motorcarsCode.GDdeskObjects1.length = 0;
gdjs.motorcarsCode.GDdeskObjects2.length = 0;
gdjs.motorcarsCode.GDdesk2Objects1.length = 0;
gdjs.motorcarsCode.GDdesk2Objects2.length = 0;
gdjs.motorcarsCode.GDecranObjects1.length = 0;
gdjs.motorcarsCode.GDecranObjects2.length = 0;
gdjs.motorcarsCode.GDperso1Objects1.length = 0;
gdjs.motorcarsCode.GDperso1Objects2.length = 0;
gdjs.motorcarsCode.GDperso2Objects1.length = 0;
gdjs.motorcarsCode.GDperso2Objects2.length = 0;
gdjs.motorcarsCode.GDdesk6Objects1.length = 0;
gdjs.motorcarsCode.GDdesk6Objects2.length = 0;
gdjs.motorcarsCode.GDpjette0Objects1.length = 0;
gdjs.motorcarsCode.GDpjette0Objects2.length = 0;
gdjs.motorcarsCode.GDlimites1Objects1.length = 0;
gdjs.motorcarsCode.GDlimites1Objects2.length = 0;
gdjs.motorcarsCode.GDlimites2Objects1.length = 0;
gdjs.motorcarsCode.GDlimites2Objects2.length = 0;
gdjs.motorcarsCode.GDpassage_9595niveauObjects1.length = 0;
gdjs.motorcarsCode.GDpassage_9595niveauObjects2.length = 0;
gdjs.motorcarsCode.GDporteObjects1.length = 0;
gdjs.motorcarsCode.GDporteObjects2.length = 0;
gdjs.motorcarsCode.GDpassage_9595niveau_95952Objects1.length = 0;
gdjs.motorcarsCode.GDpassage_9595niveau_95952Objects2.length = 0;
gdjs.motorcarsCode.GDascenseurObjects1.length = 0;
gdjs.motorcarsCode.GDascenseurObjects2.length = 0;
gdjs.motorcarsCode.GDascenseur2Objects1.length = 0;
gdjs.motorcarsCode.GDascenseur2Objects2.length = 0;
gdjs.motorcarsCode.GDedouardObjects1.length = 0;
gdjs.motorcarsCode.GDedouardObjects2.length = 0;
gdjs.motorcarsCode.GDbravoObjects1.length = 0;
gdjs.motorcarsCode.GDbravoObjects2.length = 0;
gdjs.motorcarsCode.GDvisiteur1Objects1.length = 0;
gdjs.motorcarsCode.GDvisiteur1Objects2.length = 0;
gdjs.motorcarsCode.GDicon_9595mapObjects1.length = 0;
gdjs.motorcarsCode.GDicon_9595mapObjects2.length = 0;


return;

}

gdjs['motorcarsCode'] = gdjs.motorcarsCode;
