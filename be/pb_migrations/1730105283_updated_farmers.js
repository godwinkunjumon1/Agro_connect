/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9z5sq3rty78z8m")

  collection.updateRule = "id = @request.auth.id"
  collection.deleteRule = "id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("s9z5sq3rty78z8m")

  collection.updateRule = "@request.auth.id=id"
  collection.deleteRule = "@request.auth.id=id"

  return dao.saveCollection(collection)
})
