gdjs.niveau_32ivryCode = {};
gdjs.niveau_32ivryCode.localVariables = [];
gdjs.niveau_32ivryCode.idToCallbackMap = new Map();
gdjs.niveau_32ivryCode.GDjoelObjects1= [];
gdjs.niveau_32ivryCode.GDjoelObjects2= [];
gdjs.niveau_32ivryCode.GDjoelObjects3= [];
gdjs.niveau_32ivryCode.GDNewSpriteObjects1= [];
gdjs.niveau_32ivryCode.GDNewSpriteObjects2= [];
gdjs.niveau_32ivryCode.GDNewSpriteObjects3= [];
gdjs.niveau_32ivryCode.GDpjette0Objects1= [];
gdjs.niveau_32ivryCode.GDpjette0Objects2= [];
gdjs.niveau_32ivryCode.GDpjette0Objects3= [];
gdjs.niveau_32ivryCode.GDlimites1Objects1= [];
gdjs.niveau_32ivryCode.GDlimites1Objects2= [];
gdjs.niveau_32ivryCode.GDlimites1Objects3= [];
gdjs.niveau_32ivryCode.GDlimites2Objects1= [];
gdjs.niveau_32ivryCode.GDlimites2Objects2= [];
gdjs.niveau_32ivryCode.GDlimites2Objects3= [];
gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects1= [];
gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects2= [];
gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects3= [];
gdjs.niveau_32ivryCode.GDporteObjects1= [];
gdjs.niveau_32ivryCode.GDporteObjects2= [];
gdjs.niveau_32ivryCode.GDporteObjects3= [];
gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects1= [];
gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects2= [];
gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects3= [];
gdjs.niveau_32ivryCode.GDascenseurObjects1= [];
gdjs.niveau_32ivryCode.GDascenseurObjects2= [];
gdjs.niveau_32ivryCode.GDascenseurObjects3= [];
gdjs.niveau_32ivryCode.GDascenseur2Objects1= [];
gdjs.niveau_32ivryCode.GDascenseur2Objects2= [];
gdjs.niveau_32ivryCode.GDascenseur2Objects3= [];
gdjs.niveau_32ivryCode.GDedouardObjects1= [];
gdjs.niveau_32ivryCode.GDedouardObjects2= [];
gdjs.niveau_32ivryCode.GDedouardObjects3= [];
gdjs.niveau_32ivryCode.GDbravoObjects1= [];
gdjs.niveau_32ivryCode.GDbravoObjects2= [];
gdjs.niveau_32ivryCode.GDbravoObjects3= [];
gdjs.niveau_32ivryCode.GDvisiteur1Objects1= [];
gdjs.niveau_32ivryCode.GDvisiteur1Objects2= [];
gdjs.niveau_32ivryCode.GDvisiteur1Objects3= [];
gdjs.niveau_32ivryCode.GDicon_9595mapObjects1= [];
gdjs.niveau_32ivryCode.GDicon_9595mapObjects2= [];
gdjs.niveau_32ivryCode.GDicon_9595mapObjects3= [];


gdjs.niveau_32ivryCode.mapOfGDgdjs_9546niveau_959532ivryCode_9546GDpassage_95959595niveau_959595952Objects2Objects = Hashtable.newFrom({"passage_niveau_2": gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects2});
gdjs.niveau_32ivryCode.mapOfGDgdjs_9546niveau_959532ivryCode_9546GDpassage_95959595niveauObjects1Objects = Hashtable.newFrom({"passage_niveau": gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects1});
gdjs.niveau_32ivryCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("passage_niveau_2"), gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.niveau_32ivryCode.mapOfGDgdjs_9546niveau_959532ivryCode_9546GDpassage_95959595niveau_959595952Objects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects2.length;i<l;++i) {
    if ( gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects2[k] = gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects2[i];
        ++k;
    }
}
gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(34326148);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "exterieur rue", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("passage_niveau"), gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.niveau_32ivryCode.mapOfGDgdjs_9546niveau_959532ivryCode_9546GDpassage_95959595niveauObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveau ivry hidden plateforme", false);
}
}

}


};gdjs.niveau_32ivryCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.niveau_32ivryCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.niveau_32ivryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.niveau_32ivryCode.GDjoelObjects1.length = 0;
gdjs.niveau_32ivryCode.GDjoelObjects2.length = 0;
gdjs.niveau_32ivryCode.GDjoelObjects3.length = 0;
gdjs.niveau_32ivryCode.GDNewSpriteObjects1.length = 0;
gdjs.niveau_32ivryCode.GDNewSpriteObjects2.length = 0;
gdjs.niveau_32ivryCode.GDNewSpriteObjects3.length = 0;
gdjs.niveau_32ivryCode.GDpjette0Objects1.length = 0;
gdjs.niveau_32ivryCode.GDpjette0Objects2.length = 0;
gdjs.niveau_32ivryCode.GDpjette0Objects3.length = 0;
gdjs.niveau_32ivryCode.GDlimites1Objects1.length = 0;
gdjs.niveau_32ivryCode.GDlimites1Objects2.length = 0;
gdjs.niveau_32ivryCode.GDlimites1Objects3.length = 0;
gdjs.niveau_32ivryCode.GDlimites2Objects1.length = 0;
gdjs.niveau_32ivryCode.GDlimites2Objects2.length = 0;
gdjs.niveau_32ivryCode.GDlimites2Objects3.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects1.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects2.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects3.length = 0;
gdjs.niveau_32ivryCode.GDporteObjects1.length = 0;
gdjs.niveau_32ivryCode.GDporteObjects2.length = 0;
gdjs.niveau_32ivryCode.GDporteObjects3.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects1.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects2.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects3.length = 0;
gdjs.niveau_32ivryCode.GDascenseurObjects1.length = 0;
gdjs.niveau_32ivryCode.GDascenseurObjects2.length = 0;
gdjs.niveau_32ivryCode.GDascenseurObjects3.length = 0;
gdjs.niveau_32ivryCode.GDascenseur2Objects1.length = 0;
gdjs.niveau_32ivryCode.GDascenseur2Objects2.length = 0;
gdjs.niveau_32ivryCode.GDascenseur2Objects3.length = 0;
gdjs.niveau_32ivryCode.GDedouardObjects1.length = 0;
gdjs.niveau_32ivryCode.GDedouardObjects2.length = 0;
gdjs.niveau_32ivryCode.GDedouardObjects3.length = 0;
gdjs.niveau_32ivryCode.GDbravoObjects1.length = 0;
gdjs.niveau_32ivryCode.GDbravoObjects2.length = 0;
gdjs.niveau_32ivryCode.GDbravoObjects3.length = 0;
gdjs.niveau_32ivryCode.GDvisiteur1Objects1.length = 0;
gdjs.niveau_32ivryCode.GDvisiteur1Objects2.length = 0;
gdjs.niveau_32ivryCode.GDvisiteur1Objects3.length = 0;
gdjs.niveau_32ivryCode.GDicon_9595mapObjects1.length = 0;
gdjs.niveau_32ivryCode.GDicon_9595mapObjects2.length = 0;
gdjs.niveau_32ivryCode.GDicon_9595mapObjects3.length = 0;

gdjs.niveau_32ivryCode.eventsList1(runtimeScene);
gdjs.niveau_32ivryCode.GDjoelObjects1.length = 0;
gdjs.niveau_32ivryCode.GDjoelObjects2.length = 0;
gdjs.niveau_32ivryCode.GDjoelObjects3.length = 0;
gdjs.niveau_32ivryCode.GDNewSpriteObjects1.length = 0;
gdjs.niveau_32ivryCode.GDNewSpriteObjects2.length = 0;
gdjs.niveau_32ivryCode.GDNewSpriteObjects3.length = 0;
gdjs.niveau_32ivryCode.GDpjette0Objects1.length = 0;
gdjs.niveau_32ivryCode.GDpjette0Objects2.length = 0;
gdjs.niveau_32ivryCode.GDpjette0Objects3.length = 0;
gdjs.niveau_32ivryCode.GDlimites1Objects1.length = 0;
gdjs.niveau_32ivryCode.GDlimites1Objects2.length = 0;
gdjs.niveau_32ivryCode.GDlimites1Objects3.length = 0;
gdjs.niveau_32ivryCode.GDlimites2Objects1.length = 0;
gdjs.niveau_32ivryCode.GDlimites2Objects2.length = 0;
gdjs.niveau_32ivryCode.GDlimites2Objects3.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects1.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects2.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveauObjects3.length = 0;
gdjs.niveau_32ivryCode.GDporteObjects1.length = 0;
gdjs.niveau_32ivryCode.GDporteObjects2.length = 0;
gdjs.niveau_32ivryCode.GDporteObjects3.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects1.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects2.length = 0;
gdjs.niveau_32ivryCode.GDpassage_9595niveau_95952Objects3.length = 0;
gdjs.niveau_32ivryCode.GDascenseurObjects1.length = 0;
gdjs.niveau_32ivryCode.GDascenseurObjects2.length = 0;
gdjs.niveau_32ivryCode.GDascenseurObjects3.length = 0;
gdjs.niveau_32ivryCode.GDascenseur2Objects1.length = 0;
gdjs.niveau_32ivryCode.GDascenseur2Objects2.length = 0;
gdjs.niveau_32ivryCode.GDascenseur2Objects3.length = 0;
gdjs.niveau_32ivryCode.GDedouardObjects1.length = 0;
gdjs.niveau_32ivryCode.GDedouardObjects2.length = 0;
gdjs.niveau_32ivryCode.GDedouardObjects3.length = 0;
gdjs.niveau_32ivryCode.GDbravoObjects1.length = 0;
gdjs.niveau_32ivryCode.GDbravoObjects2.length = 0;
gdjs.niveau_32ivryCode.GDbravoObjects3.length = 0;
gdjs.niveau_32ivryCode.GDvisiteur1Objects1.length = 0;
gdjs.niveau_32ivryCode.GDvisiteur1Objects2.length = 0;
gdjs.niveau_32ivryCode.GDvisiteur1Objects3.length = 0;
gdjs.niveau_32ivryCode.GDicon_9595mapObjects1.length = 0;
gdjs.niveau_32ivryCode.GDicon_9595mapObjects2.length = 0;
gdjs.niveau_32ivryCode.GDicon_9595mapObjects3.length = 0;


return;

}

gdjs['niveau_32ivryCode'] = gdjs.niveau_32ivryCode;
