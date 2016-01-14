TODOLIST = TODOLIST || {};

UTILITIES = UTILITIES || {};

UTILITIES.checkAndRun = function (object, functionName, ...rest) {
    if (_.isFunction(object[functionName])) {
        return object[functionName].apply(object, rest);
    } else {
        throw new Error("object doesn't have " + functionName);
    }
};
