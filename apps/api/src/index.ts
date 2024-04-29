import { defineAbilityFor } from '@saas/auth';

const userCanInviteSomeoneElse = ability.can('invite', 'User');
const userCanDeleteSomeoneElse = ability.can('delete', 'User');

console.log(userCanInviteSomeoneElse);
console.log(userCanDeleteSomeoneElse);
