let recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  object.key = value
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object;
}

function  updateObjectWithKeyAndValue(object, key, value){
 let newO = {key: value}
  let newObject = Object.assing({},object, newO)
  return newObject;

}
