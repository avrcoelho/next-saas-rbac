import { type AbilityBuilder } from '@casl/ability';
import { type AppAbility } from '.';
import { User } from './models/User';
import { Role } from './roles';

type PermissionByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void;

type Permission = Record<Role, PermissionByRole>;

export const permissions: Permission = {
  ADMIN: (_, { can }) => {
    can('manage', 'all');
  },
  MEMBER: (_, { can }) => {
    // can('invite', 'User');
    can('manage', 'Project');
  },
  BILLING: (_, { can }) => {},
};
