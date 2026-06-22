gdjs.niveau_32ivry_32hidden_32plateformeCode = {};
gdjs.niveau_32ivry_32hidden_32plateformeCode.localVariables = [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.idToCallbackMap = new Map();
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDjoelObjects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDjoelObjects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDjoelObjects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDNewSpriteObjects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDNewSpriteObjects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDNewSpriteObjects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDsolObjects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDsolObjects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDsolObjects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDquit_9595bonus_9595levelObjects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDquit_9595bonus_9595levelObjects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDquit_9595bonus_9595levelObjects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites1Objects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites1Objects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites1Objects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites2Objects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites2Objects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites2Objects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveauObjects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveauObjects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveauObjects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDporteObjects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDporteObjects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDporteObjects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveau_95952Objects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveau_95952Objects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveau_95952Objects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseurObjects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseurObjects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseurObjects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseur2Objects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseur2Objects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseur2Objects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDedouardObjects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDedouardObjects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDedouardObjects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDbravoObjects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDbravoObjects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDbravoObjects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDvisiteur1Objects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDvisiteur1Objects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDvisiteur1Objects3= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDicon_9595mapObjects1= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDicon_9595mapObjects2= [];
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDicon_9595mapObjects3= [];


gdjs.niveau_32ivry_32hidden_32plateformeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1);
{for(var i = 0, len = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1.length ;i < len;++i) {
    gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1[i].activateBehavior("Pathfinding", false);
}
}
{for(var i = 0, len = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1.length ;i < len;++i) {
    gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1[i].activateBehavior("TopDownMovement", false);
}
}
}

}


};gdjs.niveau_32ivry_32hidden_32plateformeCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length;i<l;++i) {
    if ( gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[k] = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i];
        ++k;
    }
}
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2 */
{for(var i = 0, len = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length ;i < len;++i) {
    gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i].getBehavior("Flippable").flipX(false);
}
}
{for(var i = 0, len = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length ;i < len;++i) {
    gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i].getBehavior("Animation").setAnimationName("walkdroite");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length;i<l;++i) {
    if ( gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[k] = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i];
        ++k;
    }
}
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2 */
{for(var i = 0, len = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length ;i < len;++i) {
    gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length ;i < len;++i) {
    gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i].getBehavior("Animation").setAnimationName("walkdroite");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length;i<l;++i) {
    if ( gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i].getBehavior("PlatformerObject").getCurrentSpeed() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[k] = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i];
        ++k;
    }
}
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2 */
{for(var i = 0, len = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length ;i < len;++i) {
    gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i].getBehavior("Flippable").flipX(true);
}
}
{for(var i = 0, len = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length ;i < len;++i) {
    gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2[i].getBehavior("Animation").setAnimationName("wait");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1.length;i<l;++i) {
    if ( gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1[k] = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1[i];
        ++k;
    }
}
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1 */
{for(var i = 0, len = gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1.length ;i < len;++i) {
    gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1[i].getBehavior("Animation").setAnimationName("assise");
}
}
}

}


};gdjs.niveau_32ivry_32hidden_32plateformeCode.eventsList2 = function(runtimeScene) {

};gdjs.niveau_32ivry_32hidden_32plateformeCode.mapOfGDgdjs_9546niveau_959532ivry_959532hidden_959532plateformeCode_9546GDpjette0Objects1Objects = Hashtable.newFrom({"pjette0": gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1});
gdjs.niveau_32ivry_32hidden_32plateformeCode.eventsList3 = function(runtimeScene) {

{


gdjs.niveau_32ivry_32hidden_32plateformeCode.eventsList0(runtimeScene);
}


{


gdjs.niveau_32ivry_32hidden_32plateformeCode.eventsList1(runtimeScene);
}


{


gdjs.niveau_32ivry_32hidden_32plateformeCode.eventsList2(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.niveau_32ivry_32hidden_32plateformeCode.mapOfGDgdjs_9546niveau_959532ivry_959532hidden_959532plateformeCode_9546GDpjette0Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveau ivry", false);
}
}

}


};

gdjs.niveau_32ivry_32hidden_32plateformeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.niveau_32ivry_32hidden_32plateformeCode.GDjoelObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDjoelObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDjoelObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDNewSpriteObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDNewSpriteObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDNewSpriteObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDsolObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDsolObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDsolObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDquit_9595bonus_9595levelObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDquit_9595bonus_9595levelObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDquit_9595bonus_9595levelObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites1Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites1Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites1Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites2Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites2Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites2Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveauObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveauObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveauObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDporteObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDporteObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDporteObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveau_95952Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveau_95952Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveau_95952Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseurObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseurObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseurObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseur2Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseur2Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseur2Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDedouardObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDedouardObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDedouardObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDbravoObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDbravoObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDbravoObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDvisiteur1Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDvisiteur1Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDvisiteur1Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDicon_9595mapObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDicon_9595mapObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDicon_9595mapObjects3.length = 0;

gdjs.niveau_32ivry_32hidden_32plateformeCode.eventsList3(runtimeScene);
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDjoelObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDjoelObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDjoelObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDNewSpriteObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDNewSpriteObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDNewSpriteObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDsolObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDsolObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDsolObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDquit_9595bonus_9595levelObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDquit_9595bonus_9595levelObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDquit_9595bonus_9595levelObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpjette0Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites1Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites1Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites1Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites2Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites2Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDlimites2Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveauObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveauObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveauObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDporteObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDporteObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDporteObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveau_95952Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveau_95952Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDpassage_9595niveau_95952Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseurObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseurObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseurObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseur2Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseur2Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDascenseur2Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDedouardObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDedouardObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDedouardObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDbravoObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDbravoObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDbravoObjects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDvisiteur1Objects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDvisiteur1Objects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDvisiteur1Objects3.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDicon_9595mapObjects1.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDicon_9595mapObjects2.length = 0;
gdjs.niveau_32ivry_32hidden_32plateformeCode.GDicon_9595mapObjects3.length = 0;


return;

}

gdjs['niveau_32ivry_32hidden_32plateformeCode'] = gdjs.niveau_32ivry_32hidden_32plateformeCode;
