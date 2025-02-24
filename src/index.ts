import "../database.config";
import { User, ShorterLink, Analytics } from "./models";
import * as d from "../.drizzle/schema";
import { db } from "database.config";
import { eq } from "@palmares/drizzle-engine/drizzle";
/**
 * YOU CAN STILL USE DRIZZLE!
 *
 * Uncomment the following Lines of Code to query the database from Drizzle.
 */
// import { db } from '../database.config';
// import * as d from '../.drizzle/schema';

(async () => {
  await db.delete(d.Shorter);
  await db.delete(d.User);
  await User.default.set((qs) =>
    qs
      .join(ShorterLink, "shorterLinks", (qs) =>
        qs.data({
          short: "Teste",
          long: "TesteLong",
          isActive: true,
        })
      )
      .data({
        firstName: "Caio",
        lastName: "Henrique",
        email: "cg@gm.co",
        isActive: true,
      })
  );
  const user = await db.select().from(d.User);
  console.log({ user });

  await db
    .update(d.User)
    .set({ firstName: "Caio 2" })
    .where(eq(d.User.id, user!.id));
  await db.insert(d.Shorter).values({
    userId: user!.id,
    short: "Teste2",
    long: "TesteLong2",
    isActive: true,
  });
  const userEdited = await User.default.get((qs) => {
    return qs.join(ShorterLink, "shorterLinks");
  });
  console.log(userEdited);
})();
