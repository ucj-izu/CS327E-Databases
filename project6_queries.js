printjson("****************************************************************");
printjson("1) Find weather data with qualityControlProcess = V020, callLetters are either FNUI or VCSZ, sorted ascending by air temperature value.");
printjson(db.data.find({qualityControlProcess: 'V020', '$or': [{callLetters: 'FNUI' , callLetters:'VCSZ' }]}, {qualityControlProcess:1, callLetters:1, 'airTemperature.value':1}).sort({'airTemperature.value':1}).limit(5));

printjson("****************************************************************");
printjson("2) Find weather data where callLetters are PLAT or TFBY, ceiling height value is greater than 0 and less than or equal to 750, sorted ascending by pressure value");
printjson(db.data.find({$or : [{callLetters:'PLAT'}, {callLetters:'TFBY'}],'skyCondition.ceilingHeight.value': {$gt:0,$lte:750}}, {callLetters:1,'skyCondition.ceilingHeight.value': 1,'pressure.value':1}).sort({'pressure.value':1}).limit(5));

printjson("****************************************************************");
printjson("3) Find weather data where callLetters are PLAT, pressure value is in between 1020 and 1025, inclusive, ascended sort by pressure value");
printjson(db.data.find({callLetters:'PLAT','pressure.value': {$gte:1020 , $lte:1025} },{callLetters:1,'pressure.value':1}).sort({'pressure.value':1}).limit(5));

printjson("****************************************************************");
printjson("4) Find weather data where callLetters are not PLAT and air temperature value was less than 0 using $and function for query. ascended sort by air temperature value.");
printjson(db.data.find({$and:[{'airTemperature.value':{$lt:0}},{'position.callLetters':{$ne:'PLAT'}}]}, {'airTemperature.value':1,callLetters:1}).sort({'airTemperature.value':1}).limit(5));

printjson("****************************************************************");
printjson("5) Find weather data where wave measurements have a wave period of 5 and a wave length that is not 1.");
printjson(db.data.find({$and:[{'waveMeasurement.waves.period': 5}, {'waveMeasurement.waves.height':{$ne: 1}}]}, {'waveMeasurement.waves.period':1,'waveMeasurement.waves.height':1}).limit(5));

printjson("****************************************************************");
printjson("6) Find weather data where sections array element matches 'GF1'");
printjson(db.data.find({ sections: { $elemMatch: { $eq: 'GF1' } } },
{ _id: 1,sections: 1}).limit(5));

printjson("****************************************************************");
printjson("7) Find weather data where sections array element matches 'UA1'");
printjson(db.data.find({ sections: { $elemMatch: { $eq: 'UA1' } } },
{ _id: 1,sections: 1}).limit(5));


printjson("****************************************************************");
printjson("8) Find weather data where the embedded object quality in presentWeatherObservationManual array matches '1'");
printjson(db.data.find({ presentWeatherObservationManual:{ $elemMatch: {'quality':'1'}}  },
{ _id: 1,presentWeatherObservationManual: 1}).limit(5));

printjson("****************************************************************");
printjson("9) Find weather data where the embedded object condition in presentWeatherObservationManual array matches '71'");
printjson(db.data.find({ presentWeatherObservationManual:{ $elemMatch: {'condition':'71'}}  },
{ _id: 1,presentWeatherObservationManual: 1}).limit(5));

printjson("****************************************************************");
printjson("10) Find weather data where callLetters are not CG26 and air temperature value was less than 0 using $and function for query. ascended sort by air temperature value.");
printjson(db.data.find({$and:[{'airTemperature.value':{$lt:0}},{'position.callLetters':{$ne:'CG26'}}]}, {'airTemperature.value':1,callLetters:1}).sort({'airTemperature.value':1}).limit(5));
