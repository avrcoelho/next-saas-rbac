import {
  createMongoAbility,
  CreateAbility,
  MongoAbility,
  AbilityBuilder,
} from '@casl/ability';
import { z } from 'zod';
import { permissions } from './permissions';
import { User } from './models/User';
import { userSubject } from './subjects/user';
import { projectSubject } from './subjects/project';
import { organizationSubject } from './subjects/organization';
import { inviteSubject } from './subjects/invite';
import { billingSubject } from './subjects/billing';

const appAbilitiesSchema = z.union([
  projectSubject,
  userSubject,
  organizationSubject,
  inviteSubject,
  billingSubject,
  z.tuple([z.literal('manage'), z.literal('all')]),
]);

type AppAbilities = z.infer<typeof appAbilitiesSchema>;

export type AppAbility = MongoAbility<AppAbilities>;
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;

export function defineAbilityFor(user: User) {
  if (typeof permissions[user.role] === 'undefined') {
    throw new Error(`No permissions defined for role ${user.role}`);
  }
  const builder = new AbilityBuilder(createAppAbility);
  permissions[user.role](user, builder);
  return builder.build({
    detectSubjectType: (subject) => {
      return subject.__typename;
    },
  });
}

export * from './models/User';
export * from './models/Organization';
export * from './models/Project';
