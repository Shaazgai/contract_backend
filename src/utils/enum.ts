// user
export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}
export enum UserType {
  default = 'default',
  admin = 'admin',
  system = 'system',
}
export enum UserStatus {
  checking = 'checking',
  active = 'active',
  banned = 'banned',
  returned = 'returned',
}
export enum ContractStatus {
  checking = 'checking',
  created = 'created',
  pending = 'pending',
  banned = 'banned',
  returned = 'returned',
}
export enum PartyType {
  subscriber = 'subscriber',
  executer = 'executer',
}
