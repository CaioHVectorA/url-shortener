/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

/**
 * Automatically generated by palmares on 2024-11-10T14:10:11.489Z
 */

import { models, actions } from '@palmares/databases';


export default {
  name: '001_default_auto_migration_1731247811489',
  database: 'default',
  dependsOn: '',
  operations: [
    new actions.CreateModel(
      "Company",
      {
        id: models.fields.AutoField.new().primaryKey(true).allowNull(true).unique(true).dbIndex(true).databaseName("id").underscored(true).setCustomAttributes({}),
        name: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("name").underscored(true).setCustomAttributes({}).allowBlank(false),
        slug: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("slug").underscored(true).setCustomAttributes({}).allowBlank(false),
        isActive: models.fields.BooleanField.new().primaryKey(false).default(true).allowNull(false).unique(false).dbIndex(false).databaseName("is_active").underscored(true).setCustomAttributes({})
      },
      {
        abstract: false,
        underscored: true,
        tableName: "company",
        managed: true,
        ordering: [],
        indexes: [],
        databases: ["default"],
        customOptions: {}
      }
    ),
    new actions.CreateModel(
      "User",
      {
        id: models.fields.AutoField.new().primaryKey(true).allowNull(true).unique(true).dbIndex(true).databaseName("id").underscored(true).setCustomAttributes({}),
        firstName: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("first_name").underscored(true).setCustomAttributes({}).allowBlank(false),
        lastName: models.fields.CharField.new({ maxLen: 255 }).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("last_name").underscored(true).setCustomAttributes({}).allowBlank(false),
        email: models.fields.TextField.new().primaryKey(false).allowNull(true).unique(false).dbIndex(false).databaseName("email").underscored(true).setCustomAttributes({}).allowBlank(false),
        companyId: models.fields.ForeignKeyField.new({relatedTo: "Company", toField: "id", onDelete: models.fields.ON_DELETE.CASCADE, relationName: "company", relatedName: "undefined"}).primaryKey(false).allowNull(false).unique(false).dbIndex(false).databaseName("company_id").underscored(true).setCustomAttributes({})
      },
      {
        abstract: false,
        underscored: true,
        tableName: undefined,
        managed: true,
        ordering: [],
        indexes: [],
        databases: ["default"],
        customOptions: {}
      }
    )
  ]
};