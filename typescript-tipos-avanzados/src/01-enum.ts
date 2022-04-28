export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export type User = {
  username: string;
  role: ROLES;
};

const lauriPro007User: User = {
  username: "lauriPro007",
  role: ROLES.ADMIN,
};
