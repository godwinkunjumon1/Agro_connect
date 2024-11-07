/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jd0szqjriyfd80k")

  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id != \"\""
  collection.deleteRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jd0szqjriyfd80k")

  collection.createRule = ""
  collection.updateRule = "@collection.farmers.id = @request.auth.id"
  collection.deleteRule = "@collection.farmers.id = @request.auth.id"

  return dao.saveCollection(collection)
})
