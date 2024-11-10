import { Company, User } from './models';

const companies = await Company.default.get((qs) =>
  qs.join(User, 'usersOfCompany', (qs) =>
    qs.where({
      name: 'John',
    })
  )
);