printjson(db.data.deleteMany({qualityControlProcess:'V021'}));
printjson(db.data.deleteMany({callLetters:'DEDS'}));
printjson(db.data.deleteMany({callLetters:'SECD'}));

printjson("****************************************************************");
printjson("1) Insert weather data with id '11111111112222222222333e', air temperature value of -10010.1, type FM-99, quality control process V021, call letters DEDS, and array called section AG1 .");
printjson(db.data.insertOne({
    _id:ObjectId('11111111112222222222333e') ,
    callLetters:'DEDS',
    qualityControlProcess:'V021',
    type:'FM-99',
    sections: ['AG1']}));
printjson(db.data.find({
    _id:ObjectId('11111111112222222222333e')
}));

printjson("****************************************************************");
printjson("2) Insert multiple weather data with different ids and same fields (qualityControlProcess = V022, call letters DEDS, type FM-100, and air temperature value of .60).");
doc = { 
    _id:ObjectId('653b0dca53b3c281f95e57ee') ,
    callLetters:'DEDS',
    qualityControlProcess:'V022',
    type:'FM-100',
    'airTemperature.value': .60}
printjson(db.data.insertMany([doc, { 
        
    _id:ObjectId('653b0dca53b3c281f95e57af') ,
    callLetters:'DEDS',
    qualityControlProcess:'V022',
    type:'FM-100',
    'airTemperature.value': .60},{
        
    _id:ObjectId('653b0dca53b3c281f95e57bf') ,
    callLetters:'DEDS',
    qualityControlProcess:'V022',
    type:'FM-100',
    'airTemperature.value': .60}]));

printjson(db.data.find({type:'FM-100'}));

printjson("****************************************************************");
printjson("3) Insert multiple weather data with different ids and same fields (qualityControlProcess = V000, call letters SECD, type FM-001, and air temperature value of 314).");
printjson(db.data.insertMany([{ 
    _id:ObjectId('653b0dca53b3c281f95e57fa') ,
    callLetters:'SECD',
    qualityControlProcess:'V000',
    type:'FM-001',
    'airTemperature.value': 314}, { 
        
    _id:ObjectId('653b0dca53b3c281f95e57bb') ,
    callLetters:'SECD',
    qualityControlProcess:'V000',
    type:'FM-001',
    'airTemperature.value': 314},{
        
    _id:ObjectId('653b0dca53b3c281f95e57cb') ,
    callLetters:'SECD',
    qualityControlProcess:'V000',
    type:'FM-001',
    'airTemperature.value': 314}]));

printjson("****************************************************************");
printjson("4) Update weather data with id '11111111112222222222333e' where call letters are now APYL instead of DEDS.");
printjson(db.data.updateOne({
    _id:ObjectId('11111111112222222222333e')},{$set: { callLetters: 'APYL' }}));
printjson(db.data.find({
    _id:ObjectId('11111111112222222222333e')
}));
printjson("****************************************************************");
printjson("5) Update weather data with id '11111111112222222222333e' where section AGGY is added to sections array");
printjson(db.data.updateOne({
    _id:ObjectId('11111111112222222222333e')},{$push: { sections: 'AGGY' }}));
printjson(db.data.find({
    _id:ObjectId('11111111112222222222333e')
}));

printjson("****************************************************************");
printjson("6) Update weather data with quality control process V022 where V022 process becomes N02020.");
printjson(db.data.updateMany({
    qualityControlProcess:'V022'},{$set: { qualityControlProcess: 'N02020' }}));
printjson(db.data.find({
    qualityControlProcess:'N02020'
}));

printjson("****************************************************************");
printjson("7) Update weather data with air temperature value of 314 and change the value to 300050.");
printjson(db.data.updateMany({
    type: 'FM-001' },{$set: { 'airTemperature.value': 300050 }}));
printjson(db.data.find({
    'airTemperature.value':300050
}));

printjson("****************************************************************");
printjson("8) Delete one weather data set where call letters are APYL.");
printjson(db.data.deleteOne({callLetters:'APYL'}));

printjson("****************************************************************");
printjson("9) Delete weather data where quality control process is equal to N02020.");
printjson(db.data.deleteMany({qualityControlProcess:'N02020' }));


printjson("****************************************************************");
printjson("10) Delete weather data where quality control process is equal to V000.");
printjson(db.data.deleteMany({qualityControlProcess:'V000' }));
// printjson("****************************************************************");
// printjson("3) Number of restaurants named Riviera Caterer");
// printjson(db.restaurants.countDocuments({name: "Riviera Caterer"}))

// printjson("****************************************************************");
// printjson("4) Find restaurants with borough = Brooklyn and cuisine = American");
// printjson(db.restaurants.find({borough: "Brooklyn", cuisine: "American"}, {name: 1, cuisine: 1, address: 1}).limit(1));

// printjson("****************************************************************");
// printjson("5) Find restaurants with address.zipcode = 11209");
// printjson(db.restaurants.find({"address.zipcode": "11209"}, {name: 1, cuisine: 1, address: 1}).limit(1));

// printjson("****************************************************************");
// printjson("6) Find restaurants with borough = Brooklyn or cuisine = American");
// printjson(db.restaurants.find({$or: [{borough: "Brooklyn"}, {cuisine: "American"}]}, {name: 1, cuisine: 1, address: 1}).limit(1));

// printjson("****************************************************************");
// printjson("7) Find restaurants with borough = Brooklyn and not cuisine = American");
// printjson(db.restaurants.find({borough: "Brooklyn", cuisine: {$ne: "American"}}, {name: 1, cuisine: 1, address: 1}).limit(1));

// printjson("****************************************************************");
// printjson("8) Find restaurants with an array element score = 80");
// printjson(db.restaurants.find({grades: {$elemMatch: {score: 80}}}, {grades: 1}).limit(1));

// printjson("****************************************************************");
// printjson("9) Find restaurants with an array element score between 70 and 80");
// printjson(db.restaurants.find({grades: {$elemMatch: {score: {$gt: 70, $lt: 80}}}}, {grades: 1}).limit(1));

// printjson("****************************************************************");
// printjson("10) Find the restaurants whose borough = Manhattan, whose cuisine = Pizza, and whose name is NOT Domino'S Pizza.");
// printjson(db.restaurants.find({borough: "Manhattan", cuisine:"Pizza", name: {$ne: "Domino'S Pizza"}}, {borough: 1, cuisine: 1, name: 1}).sort({name: 1}));

// printjson("****************************************************************");
// printjson("11) Count the number of restaurants whose borough = Manhattan, whose cuisine = Pizza, and whose name is NOT Domino'S Pizza.");
// printjson(db.restaurants.countDocuments({borough: "Manhattan", cuisine:"Pizza", name: {$ne: "Domino'S Pizza"}}));
