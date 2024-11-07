/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("puw9o8bdjfqwb3c")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "@request.auth.id=@collection.farmers.id"
  collection.updateRule = "@request.auth.id=@collection.farmers.id"
  collection.deleteRule = "@request.auth.id=@collection.farmers.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("puw9o8bdjfqwb3c")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
