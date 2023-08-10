interface UserInfo {
  id: string;
  name: string | null;
  email: string | null;
}

export interface IUser {
  accessToken: string;
  userData?: UserInfo;
}

export type UserTableDataTypes = {
  id: string;
  imageUrl: string;
  username: string;
  customer: {
    name: string;
    date: Date;
  };
  registerDate: Date;
  segment: string;
};

export interface UserTableColumnTypes {
  label: string;
  accessor: string;
  render?: (row: any) => JSX.Element;
}
