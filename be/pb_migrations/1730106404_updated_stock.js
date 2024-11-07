/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("puw9o8bdjfqwb3c")

  collection.updateRule = "farmer = @request.auth.id"
  collection.deleteRule = "farmer = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("puw9o8bdjfqwb3c")

  collection.updateRule = "@collection.farmers.id = @request.auth.id"
  collection.deleteRule = "@collection.farmers.id = @request.auth.id"

  return dao.saveCollection(collection)
})
