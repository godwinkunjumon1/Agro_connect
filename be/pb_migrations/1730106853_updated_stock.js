/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("puw9o8bdjfqwb3c")

  collection.createRule = "@request.auth.id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("puw9o8bdjfqwb3c")

  collection.createRule = "farmer = @request.auth.id"

  return dao.saveCollection(collection)
})
