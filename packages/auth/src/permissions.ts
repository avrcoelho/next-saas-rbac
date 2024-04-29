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
  ADMIN: (user, { can, cannot }) => {
    can('manage', 'all');
    cannot(['transfer_ownership', 'update'], 'Organization');
    can(['transfer_ownership', 'update'], 'Organization', {
      ownerId: { $eq: user.id },
    });
  },
  MEMBER: (member, { can }) => {
    can('get', 'User');
    can(['create', 'get'], 'Project');
    can(['update', 'delete'], 'Project', { ownerId: { $eq: member.id } });
  },
  BILLING: (_, { can }) => {
    can('manage', 'Billing');
  },
};
