import { User, ROLES } from "./01-enum";

const currentUser: User = {
  username: "laureano_vera",
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  if (currentUser.role === ROLES.ADMIN) {
    return true;
  }
  return false;
};

console.log(checkAdminRole());

export const checkRole = (...roles: string[]) => {
  if (roles.includes(currentUser.role)) {
    return true;
  }
  return false;
};

console.log(checkRole(ROLES.ADMIN, ROLES.CUSTOMER));
