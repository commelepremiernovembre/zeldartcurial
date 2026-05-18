gdjs.etage_322_32boiserieCode = {};
gdjs.etage_322_32boiserieCode.localVariables = [];
gdjs.etage_322_32boiserieCode.idToCallbackMap = new Map();
gdjs.etage_322_32boiserieCode.GDlustreObjects1= [];
gdjs.etage_322_32boiserieCode.GDlustreObjects2= [];
gdjs.etage_322_32boiserieCode.GDlustreObjects3= [];
gdjs.etage_322_32boiserieCode.GDmur_9595boisObjects1= [];
gdjs.etage_322_32boiserieCode.GDmur_9595boisObjects2= [];
gdjs.etage_322_32boiserieCode.GDmur_9595boisObjects3= [];
gdjs.etage_322_32boiserieCode.GDmur_9595grisObjects1= [];
gdjs.etage_322_32boiserieCode.GDmur_9595grisObjects2= [];
gdjs.etage_322_32boiserieCode.GDmur_9595grisObjects3= [];
gdjs.etage_322_32boiserieCode.GDparquetObjects1= [];
gdjs.etage_322_32boiserieCode.GDparquetObjects2= [];
gdjs.etage_322_32boiserieCode.GDparquetObjects3= [];
gdjs.etage_322_32boiserieCode.GDchemin_95233Objects1= [];
gdjs.etage_322_32boiserieCode.GDchemin_95233Objects2= [];
gdjs.etage_322_32boiserieCode.GDchemin_95233Objects3= [];
gdjs.etage_322_32boiserieCode.GDsalle_9595des_9595boiseriesObjects1= [];
gdjs.etage_322_32boiserieCode.GDsalle_9595des_9595boiseriesObjects2= [];
gdjs.etage_322_32boiserieCode.GDsalle_9595des_9595boiseriesObjects3= [];
gdjs.etage_322_32boiserieCode.GDpjette0Objects1= [];
gdjs.etage_322_32boiserieCode.GDpjette0Objects2= [];
gdjs.etage_322_32boiserieCode.GDpjette0Objects3= [];
gdjs.etage_322_32boiserieCode.GDlimites1Objects1= [];
gdjs.etage_322_32boiserieCode.GDlimites1Objects2= [];
gdjs.etage_322_32boiserieCode.GDlimites1Objects3= [];
gdjs.etage_322_32boiserieCode.GDlimites2Objects1= [];
gdjs.etage_322_32boiserieCode.GDlimites2Objects2= [];
gdjs.etage_322_32boiserieCode.GDlimites2Objects3= [];
gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects1= [];
gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects2= [];
gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects3= [];
gdjs.etage_322_32boiserieCode.GDporteObjects1= [];
gdjs.etage_322_32boiserieCode.GDporteObjects2= [];
gdjs.etage_322_32boiserieCode.GDporteObjects3= [];
gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects1= [];
gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects2= [];
gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects3= [];
gdjs.etage_322_32boiserieCode.GDascenseurObjects1= [];
gdjs.etage_322_32boiserieCode.GDascenseurObjects2= [];
gdjs.etage_322_32boiserieCode.GDascenseurObjects3= [];
gdjs.etage_322_32boiserieCode.GDascenseur2Objects1= [];
gdjs.etage_322_32boiserieCode.GDascenseur2Objects2= [];
gdjs.etage_322_32boiserieCode.GDascenseur2Objects3= [];
gdjs.etage_322_32boiserieCode.GDedouardObjects1= [];
gdjs.etage_322_32boiserieCode.GDedouardObjects2= [];
gdjs.etage_322_32boiserieCode.GDedouardObjects3= [];
gdjs.etage_322_32boiserieCode.GDbravoObjects1= [];
gdjs.etage_322_32boiserieCode.GDbravoObjects2= [];
gdjs.etage_322_32boiserieCode.GDbravoObjects3= [];
gdjs.etage_322_32boiserieCode.GDvisiteur1Objects1= [];
gdjs.etage_322_32boiserieCode.GDvisiteur1Objects2= [];
gdjs.etage_322_32boiserieCode.GDvisiteur1Objects3= [];
gdjs.etage_322_32boiserieCode.GDicon_9595mapObjects1= [];
gdjs.etage_322_32boiserieCode.GDicon_9595mapObjects2= [];
gdjs.etage_322_32boiserieCode.GDicon_9595mapObjects3= [];


gdjs.etage_322_32boiserieCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.etage_322_32boiserieCode.GDpjette0Objects1);
{for(var i = 0, len = gdjs.etage_322_32boiserieCode.GDpjette0Objects1.length ;i < len;++i) {
    gdjs.etage_322_32boiserieCode.GDpjette0Objects1[i].activateBehavior("PlatformerObject", false);
}
}
}

}


};gdjs.etage_322_32boiserieCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.etage_322_32boiserieCode.GDpjette0Objects2);
{for(var i = 0, len = gdjs.etage_322_32boiserieCode.GDpjette0Objects2.length ;i < len;++i) {
    gdjs.etage_322_32boiserieCode.GDpjette0Objects2[i].getBehavior("Animation").setAnimationName("walkup");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.etage_322_32boiserieCode.GDpjette0Objects2);
{for(var i = 0, len = gdjs.etage_322_32boiserieCode.GDpjette0Objects2.length ;i < len;++i) {
    gdjs.etage_322_32boiserieCode.GDpjette0Objects2[i].getBehavior("Animation").setAnimationName("walkdown");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.etage_322_32boiserieCode.GDpjette0Objects2);
{for(var i = 0, len = gdjs.etage_322_32boiserieCode.GDpjette0Objects2.length ;i < len;++i) {
    gdjs.etage_322_32boiserieCode.GDpjette0Objects2[i].getBehavior("Animation").setAnimationName("walkgauche");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.etage_322_32boiserieCode.GDpjette0Objects2);
{for(var i = 0, len = gdjs.etage_322_32boiserieCode.GDpjette0Objects2.length ;i < len;++i) {
    gdjs.etage_322_32boiserieCode.GDpjette0Objects2[i].getBehavior("Animation").setAnimationName("walkdroite");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyPressed(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.etage_322_32boiserieCode.GDpjette0Objects1);
{for(var i = 0, len = gdjs.etage_322_32boiserieCode.GDpjette0Objects1.length ;i < len;++i) {
    gdjs.etage_322_32boiserieCode.GDpjette0Objects1[i].getBehavior("Animation").setAnimationName("wait");
}
}
}

}


};gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpjette0Objects1Objects = Hashtable.newFrom({"pjette0": gdjs.etage_322_32boiserieCode.GDpjette0Objects1});
gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpassage_95959595niveauObjects1Objects = Hashtable.newFrom({"passage_niveau": gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects1});
gdjs.etage_322_32boiserieCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("passage_niveau"), gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects1);
gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.etage_322_32boiserieCode.GDpjette0Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpjette0Objects1Objects, gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpassage_95959595niveauObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "niveau 2 expo white étage_old", false);
}
}

}


};gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpjette0Objects2Objects = Hashtable.newFrom({"pjette0": gdjs.etage_322_32boiserieCode.GDpjette0Objects2});
gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpassage_95959595niveau_959595952Objects2Objects = Hashtable.newFrom({"passage_niveau_2": gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects2});
gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpjette0Objects1Objects = Hashtable.newFrom({"pjette0": gdjs.etage_322_32boiserieCode.GDpjette0Objects1});
gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpassage_95959595niveauObjects1Objects = Hashtable.newFrom({"passage_niveau": gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects1});
gdjs.etage_322_32boiserieCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("passage_niveau_2"), gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects2);
gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.etage_322_32boiserieCode.GDpjette0Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpjette0Objects2Objects, gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpassage_95959595niveau_959595952Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "etage 1 l'enchère", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("passage_niveau"), gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects1);
gdjs.copyArray(runtimeScene.getObjects("pjette0"), gdjs.etage_322_32boiserieCode.GDpjette0Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpjette0Objects1Objects, gdjs.etage_322_32boiserieCode.mapOfGDgdjs_9546etage_9595322_959532boiserieCode_9546GDpassage_95959595niveauObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "étage 3 le staff", false);
}
}

}


};gdjs.etage_322_32boiserieCode.eventsList4 = function(runtimeScene) {

{


gdjs.etage_322_32boiserieCode.eventsList0(runtimeScene);
}


{


gdjs.etage_322_32boiserieCode.eventsList1(runtimeScene);
}


{


gdjs.etage_322_32boiserieCode.eventsList2(runtimeScene);
}


{


gdjs.etage_322_32boiserieCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.etage_322_32boiserieCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.etage_322_32boiserieCode.GDlustreObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDlustreObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDlustreObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595boisObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595boisObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595boisObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595grisObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595grisObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595grisObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDparquetObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDparquetObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDparquetObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDchemin_95233Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDchemin_95233Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDchemin_95233Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDsalle_9595des_9595boiseriesObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDsalle_9595des_9595boiseriesObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDsalle_9595des_9595boiseriesObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDpjette0Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDpjette0Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDpjette0Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites1Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites1Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites1Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites2Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites2Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites2Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDporteObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDporteObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDporteObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseurObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseurObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseurObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseur2Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseur2Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseur2Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDedouardObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDedouardObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDedouardObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDbravoObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDbravoObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDbravoObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDvisiteur1Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDvisiteur1Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDvisiteur1Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDicon_9595mapObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDicon_9595mapObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDicon_9595mapObjects3.length = 0;

gdjs.etage_322_32boiserieCode.eventsList4(runtimeScene);
gdjs.etage_322_32boiserieCode.GDlustreObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDlustreObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDlustreObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595boisObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595boisObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595boisObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595grisObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595grisObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDmur_9595grisObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDparquetObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDparquetObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDparquetObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDchemin_95233Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDchemin_95233Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDchemin_95233Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDsalle_9595des_9595boiseriesObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDsalle_9595des_9595boiseriesObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDsalle_9595des_9595boiseriesObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDpjette0Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDpjette0Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDpjette0Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites1Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites1Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites1Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites2Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites2Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDlimites2Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveauObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDporteObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDporteObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDporteObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDpassage_9595niveau_95952Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseurObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseurObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseurObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseur2Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseur2Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDascenseur2Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDedouardObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDedouardObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDedouardObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDbravoObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDbravoObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDbravoObjects3.length = 0;
gdjs.etage_322_32boiserieCode.GDvisiteur1Objects1.length = 0;
gdjs.etage_322_32boiserieCode.GDvisiteur1Objects2.length = 0;
gdjs.etage_322_32boiserieCode.GDvisiteur1Objects3.length = 0;
gdjs.etage_322_32boiserieCode.GDicon_9595mapObjects1.length = 0;
gdjs.etage_322_32boiserieCode.GDicon_9595mapObjects2.length = 0;
gdjs.etage_322_32boiserieCode.GDicon_9595mapObjects3.length = 0;


return;

}

gdjs['etage_322_32boiserieCode'] = gdjs.etage_322_32boiserieCode;
