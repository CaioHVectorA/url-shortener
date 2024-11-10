import './database.config';
import { Company, User } from './models';
await Company.default.set((qs) =>
  qs
    .join(User, 'usersOfCompany', (qs) =>
      qs.data(
        {
          firstName: 'Foo',
          lastName: 'bar',
          email: 'foo@bar.com',
          isActive: true,
        },
        {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@doe.com',
          isActive: true,
        }
      )
    )
    .data({
      name: 'Evil Foo',
      slug: 'evil-foo',
      isActive: true,
    })
);