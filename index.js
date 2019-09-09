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
  let clone = Object.assing({}, object);
  delete clone.key;
  return clone;
}
