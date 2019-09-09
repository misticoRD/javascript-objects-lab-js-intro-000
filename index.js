let recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  object.key = value
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return  Object.assign(object, { [key]: value })

}

function deleteFromObjectByKey(object, key){
  var clone = Object.assign({}, object)
  delete clone.key;
  return clone;
}

function deleteFromObjectByKey(object, key){
  var secondClone = Object.assign({}, object)
  delete secondClone.key;
  return secondClone;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object.key;
}

function  destructivelyDeleteFromObjectByKey(object, key){
   object[name: Josia];
   return object;

}
