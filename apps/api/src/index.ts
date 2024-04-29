import { defineAbilityFor } from '@saas/auth';

const ability = defineAbilityFor({ role: 'MEMBER', id: '1' });

const userCanInviteSomeoneElse = ability.can('invite', 'User');
const userCanDeleteSomeoneElse = ability.can('delete', 'User');

console.log(userCanInviteSomeoneElse);
console.log(userCanDeleteSomeoneElse);
