import '../database.config';
import { User, ShorterLink, Analytics } from './models';
import * as d from '../.drizzle/schema'
import { db } from 'database.config'
/**
 * YOU CAN STILL USE DRIZZLE!
 *
 * Uncomment the following Lines of Code to query the database from Drizzle.
 */
// import { db } from '../database.config';
// import * as d from '../.drizzle/schema';

(async () => {
  // await Company.default.set((qs) =>
  //   qs
  //     .join(User, 'usersOfCompany', (qs) =>
  //       qs.data(
  //         {
  //           firstName: 'Foo',
  //           lastName: 'bar',
  //           email: 'foo@bar.com'
  //         },
  //         {
  //           firstName: 'John',
  //           lastName: 'Doe',
  //           email: 'john@doe.com'
  //         }
  //       )
  //     )
  //     .data({
  //       name: 'Evil Foo',
  //       slug: 'evil-foo',
  //       isActive: true
  //     })
  // );
  await db.delete(d.Shorter)
  await db.delete(d.User)
  await User.default.set((qs) => 
    qs.join(ShorterLink, 'shorterLinks', (qs) => 
      qs.data(
        {
          short: "Teste",
          long: "TesteLong",
          isActive: true
        }
      )
    )
    .data({
      firstName: 'Caio',
      lastName: "Henrique",
      email: "cg@gm.co",
      isActive: true
    })
  )
  console.log(await db.select().from(d.User))
  /**
   * YOU CAN STILL USE DRIZZLE!
   *
   * Uncomment the following Lines of Code to query the database from Drizzle.
   */
  // const dataFromDrizzle = await db.select().from(d.User)
  // console.log('Hello from Drizzle Users:', dataFromDrizzle);
})();
