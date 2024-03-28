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
export enum ContractType {
  lease = 'lease',
  performance = 'performance',
  // Хамтран ажиллах гэрээ
  partner = 'partner',

}
export enum PartyType {
  subscriber = 'subscriber',
  executer = 'executer',
}
