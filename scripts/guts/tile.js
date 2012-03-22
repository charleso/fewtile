define(function() {
  var tile = function(weight) {
    return function(passing) {
      return function(cssClass) {
        return function(text) {
          return {
            text: text,
            cssClass: cssClass,
            weight: weight,
            passing: passing
          };
        };
      };
    };
  };

  return {
    individual: {
        pass             : tile( 10)(true)("passTile")
      , passBuilding     : tile( 10)(true)("passBuildingTile")
      , fail             : tile( 50)(false)("failTile")
      , failBuilding     : tile( 50)(false)("failBuildingTile")
      , disabled         : tile(  5)(true)("disabledTile")
      , disabledBuilding : tile(  5)(true)("disabledBuildingTile")
    },
    overarching: {
        loading          : tile(100)(false)("loadingTile")("Loading...")
      , dead             : tile(100)(false)("deadTile")("&#x2620;")
      , allPassing       : tile(100)(true)("allPassingTile")("All jobs passing")
      , noJobs           : tile(100)(false)("noJobsTile")("No jobs")
    }
  };
});