gdjs.stagiaireCode = {};
gdjs.stagiaireCode.localVariables = [];
gdjs.stagiaireCode.idToCallbackMap = new Map();


gdjs.stagiaireCode.eventsList0 = function(runtimeScene) {

};

gdjs.stagiaireCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.stagiaireCode.eventsList0(runtimeScene);


return;

}

gdjs['stagiaireCode'] = gdjs.stagiaireCode;
