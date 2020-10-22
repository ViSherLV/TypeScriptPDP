enum Role {
    Administrator,
    Moderator,
    User
}

const accountRole = Role.Administrator; //1
const accountRoleReverse = Role[1];  //Administrator

enum PeriodicTable {
    CH2 = 'Methylene',
    H2O = 'Water'
}

const Water = PeriodicTable.H2O;
