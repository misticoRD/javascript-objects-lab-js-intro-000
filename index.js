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
let newObject =  Object.assign(object);

delete newObject.key;
return newObject;
return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object.key;
}


