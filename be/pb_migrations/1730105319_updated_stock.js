/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("puw9o8bdjfqwb3c")

  collection.createRule = "@collection.farmers.id = @request.auth.id"
  collection.updateRule = "@collection.farmers.id = @request.auth.id"
  collection.deleteRule = "@collection.farmers.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("puw9o8bdjfqwb3c")

  collection.createRule = "@request.auth.id=@collection.farmers.id"
  collection.updateRule = "@request.auth.id=@collection.farmers.id"
  collection.deleteRule = "@request.auth.id=@collection.farmers.id"

  return dao.saveCollection(collection)
})
