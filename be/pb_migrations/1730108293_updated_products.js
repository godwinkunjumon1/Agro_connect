/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jd0szqjriyfd80k")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8re9fzz6",
    "name": "category",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Diary Product",
        "Vegetables",
        "Fruits",
        "Meat and Poultry"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jd0szqjriyfd80k")

  // remove
  collection.schema.removeField("8re9fzz6")

  return dao.saveCollection(collection)
})
