/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

/**
 * Automatically generated by palmares on 2024-11-14T00:58:42.607Z
 */

import { models, actions } from '@palmares/databases';


export default {
  name: '002_default_auto_migration_1731545922607',
  database: 'default',
  dependsOn: 'create_palmares_migration_table',
  operations: [
    new actions.CreateModel(
      "User",
      {
        id: models.fields.AutoField.new().primaryKey(true).allowNull(true).unique(true).dbIndex(true).databaseName("id").underscored(true).setCustomAttributes({}),
        firstName: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("first_name").underscored(true).setCustomAttributes({}).allowBlank(false),
        lastName: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("last_name").underscored(true).setCustomAttributes({}).allowBlank(false),
        email: models.fields.TextField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("email").underscored(true).setCustomAttributes({}).allowBlank(false),
        isActive: models.fields.BooleanField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("is_active").underscored(true).setCustomAttributes({})
      },
      {
        abstract: false,
        underscored: true,
        tableName: "user",
        managed: true,
        ordering: [],
        indexes: [],
        databases: ["default"],
        customOptions: {}
      }
    ),
    new actions.CreateModel(
      "Shorter",
      {
        id: models.fields.AutoField.new().primaryKey(true).allowNull(true).unique(true).dbIndex(true).databaseName("id").underscored(true).setCustomAttributes({}),
        short: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("short").underscored(true).setCustomAttributes({}).allowBlank(false),
        long: models.fields.TextField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("long").underscored(true).setCustomAttributes({}).allowBlank(false),
        isActive: models.fields.BooleanField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("is_active").underscored(true).setCustomAttributes({}),
        userId: models.fields.ForeignKeyField.new({relatedTo: "User", toField: "id", onDelete: models.fields.ON_DELETE.CASCADE, relationName: "userLink", relatedName: "undefined"}).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("user_id").underscored(true).setCustomAttributes({})
      },
      {
        abstract: false,
        underscored: true,
        tableName: "shorter",
        managed: true,
        ordering: [],
        indexes: [],
        databases: ["default"],
        customOptions: {}
      }
    ),
    new actions.CreateModel(
      "Analytics",
      {
        id: models.fields.AutoField.new().primaryKey(true).allowNull(true).unique(true).dbIndex(true).databaseName("id").underscored(true).setCustomAttributes({}),
        shortId: models.fields.ForeignKeyField.new({relatedTo: "Shorter", toField: "id", onDelete: models.fields.ON_DELETE.CASCADE, relationName: "analyticsShorterLink", relatedName: "undefined"}).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("short_id").underscored(true).setCustomAttributes({}),
        ip: models.fields.TextField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("ip").underscored(true).setCustomAttributes({}).allowBlank(false),
        userAgent: models.fields.TextField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("user_agent").underscored(true).setCustomAttributes({}).allowBlank(false),
        referer: models.fields.TextField.new().primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("referer").underscored(true).setCustomAttributes({}).allowBlank(false)
      },
      {
        abstract: false,
        underscored: true,
        tableName: "analytics",
        managed: true,
        ordering: [],
        indexes: [],
        databases: ["default"],
        customOptions: {}
      }
    )
  ]
};