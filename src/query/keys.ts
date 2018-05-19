import * as ByteBuffer from 'bytebuffer';

namespace Keys {
  export const KVSTOREKEYS = {
    MainKVStoreKey: 'main',
    AccountKVStoreKey: 'account',
    PostKVStoreKey: 'post',
    ValidatorKVStoreKey: 'validator',
    GlobalKVStoreKey: 'global',
    VoteKVStoreKey: 'vote',
    InfraKVStoreKey: 'infra',
    DeveloperKVStoreKey: 'developer',
    ParamKVStoreKey: 'param',
    ProposalKVStoreKey: 'proposal'
  };
  const _KEYS: { [name: string]: ByteBuffer } = {
    // ByteBuffer: returns this if offset is omitted, else the actual number of bytes written.
    // we force it to be ByteBuffer since we don't pass in `offset`
    ValidatorListSubstore: new ByteBuffer().WriteString(
      'ValidatorList/ValidatorListKey'
    ) as ByteBuffer
  };
  export function getValidatorListKey() {
    return _KEYS.ValidatorListSubstore;
  }
}

export default Keys;
