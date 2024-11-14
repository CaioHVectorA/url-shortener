import {
  Model,
  define,
  auto,
  char,
  text,
  bool,
  date,
  ON_DELETE,
  foreignKey
} from '@palmares/databases';

import type { ModelOptionsType } from '@palmares/databases'

export const User = define('User', {
  fields: {
    id: auto().primaryKey(),
    firstName: char({ maxLen: 255 }),
    lastName: char({ maxLen: 255 }),
    email: text(),
    isActive: bool(),
  },
  options: {

  }
});

export const ShorterLink = define('Shorter', {
  fields: {
    id: auto().primaryKey(),
    short: char({ maxLen: 255 }),
    long: text(),
    isActive: bool(),
    userId: foreignKey({
      relatedTo: () => User,
      toField: 'id',
      relationName: 'userLink',
      relatedName: 'shorterLinks',
      onDelete: ON_DELETE.CASCADE,
    })
  }
})

export const Analytics = define('Analytics', {
  fields: {
    id: auto().primaryKey(),
    shortId: foreignKey({
      relatedTo: () => ShorterLink,
      toField: 'id',
      relationName: 'analyticsShorterLink',
      relatedName: 'analyticsRecords',
      onDelete: ON_DELETE.CASCADE
    }),
    ip: text(),
    userAgent: text(),
    referer: text(),
    // createdAt: date().default(new Date())
  }
})