/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "puw9o8bdjfqwb3c",
    "created": "2024-10-28 08:24:16.373Z",
    "updated": "2024-10-28 08:24:16.373Z",
    "name": "stock",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ms0d6xmp",
        "name": "farmer",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "s9z5sq3rty78z8m",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "mot68bme",
        "name": "product",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "jd0szqjriyfd80k",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "j9atncqr",
        "name": "stock_available",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("puw9o8bdjfqwb3c");

  return dao.deleteCollection(collection);
})
