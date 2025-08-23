'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.8.1';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

const _descriptor_0 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

const _descriptor_1 = new __compactRuntime.CompactTypeBoolean();

const _descriptor_2 = new __compactRuntime.CompactTypeBytes(32);

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_2.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.bytes);
  }
}

const _descriptor_3 = new _ZswapCoinPublicKey_0();

class _ContractAddress_0 {
  alignment() {
    return _descriptor_2.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.bytes);
  }
}

const _descriptor_4 = new _ContractAddress_0();

class _Either_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_3.alignment().concat(_descriptor_4.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_1.fromValue(value_0),
      left: _descriptor_3.fromValue(value_0),
      right: _descriptor_4.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.is_left).concat(_descriptor_3.toValue(value_0.left).concat(_descriptor_4.toValue(value_0.right)));
  }
}

const _descriptor_5 = new _Either_0();

const _descriptor_6 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_7 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _CoinInfo_0 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_0.alignment()));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_2.fromValue(value_0),
      color: _descriptor_2.fromValue(value_0),
      value: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.nonce).concat(_descriptor_2.toValue(value_0.color).concat(_descriptor_0.toValue(value_0.value)));
  }
}

const _descriptor_8 = new _CoinInfo_0();

const _descriptor_9 = new __compactRuntime.CompactTypeOpaqueString();

const _descriptor_10 = new __compactRuntime.CompactTypeVector(2, _descriptor_2);

const _descriptor_11 = new __compactRuntime.CompactTypeBytes(6);

class _CoinPreimage_0 {
  alignment() {
    return _descriptor_8.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_11.alignment())));
  }
  fromValue(value_0) {
    return {
      info: _descriptor_8.fromValue(value_0),
      dataType: _descriptor_1.fromValue(value_0),
      data: _descriptor_2.fromValue(value_0),
      domain_sep: _descriptor_11.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_8.toValue(value_0.info).concat(_descriptor_1.toValue(value_0.dataType).concat(_descriptor_2.toValue(value_0.data).concat(_descriptor_11.toValue(value_0.domain_sep))));
  }
}

const _descriptor_12 = new _CoinPreimage_0();

class _QualifiedCoinInfo_0 {
  alignment() {
    return _descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_0.alignment().concat(_descriptor_7.alignment())));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_2.fromValue(value_0),
      color: _descriptor_2.fromValue(value_0),
      value: _descriptor_0.fromValue(value_0),
      mt_index: _descriptor_7.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_2.toValue(value_0.nonce).concat(_descriptor_2.toValue(value_0.color).concat(_descriptor_0.toValue(value_0.value).concat(_descriptor_7.toValue(value_0.mt_index))));
  }
}

const _descriptor_13 = new _QualifiedCoinInfo_0();

const _descriptor_14 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1)
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    this.witnesses = witnesses_0;
    this.circuits = {
      doStuff: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`doStuff: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        const domain_sep_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('doStuff',
                                      'argument 1 (as invoked from Typescript)',
                                      'example.compact line 37 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('doStuff',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'example.compact line 37 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        if (!(domain_sep_0.buffer instanceof ArrayBuffer && domain_sep_0.BYTES_PER_ELEMENT === 1 && domain_sep_0.length === 32))
          __compactRuntime.type_error('doStuff',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'example.compact line 37 char 1',
                                      'Bytes<32>',
                                      domain_sep_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_8.toValue(coin_0).concat(_descriptor_2.toValue(domain_sep_0)),
            alignment: _descriptor_8.alignment().concat(_descriptor_2.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_doStuff_0(context,
                                          partialProofData,
                                          coin_0,
                                          domain_sep_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      publicKey: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`publicKey: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sk_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('publicKey',
                                      'argument 1 (as invoked from Typescript)',
                                      'example.compact line 53 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32))
          __compactRuntime.type_error('publicKey',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'example.compact line 53 char 1',
                                      'Bytes<32>',
                                      sk_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_2.toValue(sk_0),
            alignment: _descriptor_2.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_publicKey_0(context, partialProofData, sk_0);
        partialProofData.output = { value: _descriptor_2.toValue(result_0), alignment: _descriptor_2.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = { doStuff: this.circuits.doStuff };
  }
  initialState(...args_0) {
    if (args_0.length !== 4)
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 4 arguments (as invoked from Typescript), received ${args_0.length}`);
    const constructorContext_0 = args_0[0];
    const _name_1 = args_0[1];
    const _symbol_1 = args_0[2];
    const _price_0 = args_0[3];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!(typeof(_price_0) === 'bigint' && _price_0 >= 0 && _price_0 <= 340282366920938463463374607431768211455n))
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 3 (argument 4 as invoked from Typescript)',
                                  'example.compact line 30 char 1',
                                  'Uint<0..340282366920938463463374607431768211455>',
                                  _price_0)
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = stateValue_0;
    state_0.setOperation('doStuff', new __compactRuntime.ContractOperation());
    const context = {
      originalState: state_0,
      currentPrivateState: constructorContext_0.initialPrivateState,
      currentZswapLocalState: constructorContext_0.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state_0.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(''),
                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(1n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(''),
                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(2n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(3n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(4n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(5n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(6n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(7n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(false),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(8n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(''),
                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(9n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(''),
                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(10n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(11n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(12n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(13n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(14n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    this.#_initialize_0(context, partialProofData, _name_1, _symbol_1);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(12n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(_price_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_0 = this.#_name_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(8n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(tmp_0),
                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_1 = this.#_symbol_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(9n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(tmp_1),
                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  #_left_0(context, partialProofData, value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  #_persistentHash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_12, value_0);
    return result_0;
  }
  #_persistentHash_1(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_10, value_0);
    return result_0;
  }
  #_persistentCommit_0(context, partialProofData, value_0, rand_0) {
    const result_0 = __compactRuntime.persistentCommit(_descriptor_10,
                                                       value_0,
                                                       rand_0);
    return result_0;
  }
  #_ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_3.toValue(result_0),
      alignment: _descriptor_3.alignment()
    });
    return result_0;
  }
  #_createZswapOutput_0(context, partialProofData, coin_0, recipient_0) {
    const result_0 = __compactRuntime.createZswapOutput(context,
                                                        coin_0,
                                                        recipient_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  #_tokenType_0(context, partialProofData, domain_sep_0, contractAddress_0) {
    return this.#_persistentCommit_0(context,
                                     partialProofData,
                                     [domain_sep_0, contractAddress_0.bytes],
                                     new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 100, 101, 114, 105, 118, 101, 95, 116, 111, 107, 101, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  }
  #_mintToken_0(context,
                partialProofData,
                domain_sep_0,
                value_0,
                nonce_0,
                recipient_0)
  {
    const coin_0 = { nonce: nonce_0,
                     color:
                       this.#_tokenType_0(context,
                                          partialProofData,
                                          domain_sep_0,
                                          _descriptor_4.fromValue(Contract._query(context,
                                                                                  partialProofData,
                                                                                  [
                                                                                   { dup: { n: 2 } },
                                                                                   { idx: { cached: true,
                                                                                            pushPath: false,
                                                                                            path: [
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_14.toValue(0n),
                                                                                                              alignment: _descriptor_14.alignment() } }] } },
                                                                                   { popeq: { cached: true,
                                                                                              result: undefined } }]).value)),
                     value: value_0 };
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_14.toValue(4n),
                                                alignment: _descriptor_14.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(domain_sep_0),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                     { dup: { n: 1 } },
                     { dup: { n: 1 } },
                     'member',
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(value_0),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { swap: { n: 0 } },
                     'neg',
                     { branch: { skip: 4 } },
                     { dup: { n: 2 } },
                     { dup: { n: 2 } },
                     { idx: { cached: true,
                              pushPath: false,
                              path: [ { tag: 'stack' }] } },
                     'add',
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    this.#_createZswapOutput_0(context, partialProofData, coin_0, recipient_0);
    const cm_0 = this.#_coinCommitment_0(context,
                                         partialProofData,
                                         coin_0,
                                         recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_14.toValue(2n),
                                                alignment: _descriptor_14.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(cm_0),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return coin_0;
  }
  #_burnAddress_0(context, partialProofData) {
    return this.#_left_0(context,
                         partialProofData,
                         { bytes: new Uint8Array(32) });
  }
  #_coinCommitment_0(context, partialProofData, coin_0, recipient_0) {
    return this.#_persistentHash_0(context,
                                   partialProofData,
                                   { info: coin_0,
                                     dataType: recipient_0.is_left,
                                     data:
                                       recipient_0.is_left ?
                                       recipient_0.left.bytes :
                                       recipient_0.right.bytes,
                                     domain_sep:
                                       new Uint8Array([109, 100, 110, 58, 99, 99]) });
  }
  #_initialize_0(context, partialProofData, name__0, symbol__0) {
    this.#_initialize_1(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(0n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(name__0),
                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(1n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(symbol__0),
                                                                            alignment: _descriptor_9.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    return [];
  }
  #_name_0(context, partialProofData) {
    this.#_assertInitialized_0(context, partialProofData);
    return _descriptor_9.fromValue(Contract._query(context,
                                                   partialProofData,
                                                   [
                                                    { dup: { n: 0 } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_14.toValue(0n),
                                                                               alignment: _descriptor_14.alignment() } }] } },
                                                    { popeq: { cached: false,
                                                               result: undefined } }]).value);
  }
  #_symbol_0(context, partialProofData) {
    this.#_assertInitialized_0(context, partialProofData);
    return _descriptor_9.fromValue(Contract._query(context,
                                                   partialProofData,
                                                   [
                                                    { dup: { n: 0 } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_14.toValue(1n),
                                                                               alignment: _descriptor_14.alignment() } }] } },
                                                    { popeq: { cached: false,
                                                               result: undefined } }]).value);
  }
  #_isApprovedForAll_0(context, partialProofData, owner_0, operator_0) {
    this.#_assertInitialized_0(context, partialProofData);
    if (_descriptor_1.fromValue(Contract._query(context,
                                                partialProofData,
                                                [
                                                 { dup: { n: 0 } },
                                                 { idx: { cached: false,
                                                          pushPath: false,
                                                          path: [
                                                                 { tag: 'value',
                                                                   value: { value: _descriptor_14.toValue(5n),
                                                                            alignment: _descriptor_14.alignment() } }] } },
                                                 { push: { storage: false,
                                                           value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(owner_0),
                                                                                                        alignment: _descriptor_5.alignment() }).encode() } },
                                                 'member',
                                                 { popeq: { cached: true,
                                                            result: undefined } }]).value)
        &&
        _descriptor_1.fromValue(Contract._query(context,
                                                partialProofData,
                                                [
                                                 { dup: { n: 0 } },
                                                 { idx: { cached: false,
                                                          pushPath: false,
                                                          path: [
                                                                 { tag: 'value',
                                                                   value: { value: _descriptor_14.toValue(5n),
                                                                            alignment: _descriptor_14.alignment() } },
                                                                 { tag: 'value',
                                                                   value: { value: _descriptor_5.toValue(owner_0),
                                                                            alignment: _descriptor_5.alignment() } }] } },
                                                 { push: { storage: false,
                                                           value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(operator_0),
                                                                                                        alignment: _descriptor_5.alignment() }).encode() } },
                                                 'member',
                                                 { popeq: { cached: true,
                                                            result: undefined } }]).value))
    {
      return _descriptor_1.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_14.toValue(5n),
                                                                                 alignment: _descriptor_14.alignment() } },
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_5.toValue(owner_0),
                                                                                 alignment: _descriptor_5.alignment() } }] } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_5.toValue(operator_0),
                                                                                 alignment: _descriptor_5.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    } else {
      return false;
    }
  }
  #__ownerOf_0(context, partialProofData, tokenId_0) {
    this.#_assertInitialized_0(context, partialProofData);
    if (!_descriptor_1.fromValue(Contract._query(context,
                                                 partialProofData,
                                                 [
                                                  { dup: { n: 0 } },
                                                  { idx: { cached: false,
                                                           pushPath: false,
                                                           path: [
                                                                  { tag: 'value',
                                                                    value: { value: _descriptor_14.toValue(2n),
                                                                             alignment: _descriptor_14.alignment() } }] } },
                                                  { push: { storage: false,
                                                            value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tokenId_0),
                                                                                                         alignment: _descriptor_0.alignment() }).encode() } },
                                                  'member',
                                                  { popeq: { cached: true,
                                                             result: undefined } }]).value))
    {
      return this.#_burnAddress_0(context, partialProofData);
    } else {
      return _descriptor_5.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_14.toValue(2n),
                                                                                 alignment: _descriptor_14.alignment() } }] } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_0.toValue(tokenId_0),
                                                                                 alignment: _descriptor_0.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    }
  }
  #__getApproved_0(context, partialProofData, tokenId_0) {
    this.#_assertInitialized_0(context, partialProofData);
    if (!_descriptor_1.fromValue(Contract._query(context,
                                                 partialProofData,
                                                 [
                                                  { dup: { n: 0 } },
                                                  { idx: { cached: false,
                                                           pushPath: false,
                                                           path: [
                                                                  { tag: 'value',
                                                                    value: { value: _descriptor_14.toValue(4n),
                                                                             alignment: _descriptor_14.alignment() } }] } },
                                                  { push: { storage: false,
                                                            value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tokenId_0),
                                                                                                         alignment: _descriptor_0.alignment() }).encode() } },
                                                  'member',
                                                  { popeq: { cached: true,
                                                             result: undefined } }]).value))
    {
      return this.#_burnAddress_0(context, partialProofData);
    } else {
      return _descriptor_5.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_14.toValue(4n),
                                                                                 alignment: _descriptor_14.alignment() } }] } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_0.toValue(tokenId_0),
                                                                                 alignment: _descriptor_0.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    }
  }
  #__isAuthorized_0(context, partialProofData, owner_0, spender_0, tokenId_0) {
    this.#_assertInitialized_0(context, partialProofData);
    return !this.#_isKeyOrAddressZero_0(context, partialProofData, spender_0)
           &&
           (this.#_equal_0(owner_0, spender_0)
            ||
            this.#_isApprovedForAll_0(context,
                                      partialProofData,
                                      owner_0,
                                      spender_0)
            ||
            this.#_equal_1(this.#__getApproved_0(context,
                                                 partialProofData,
                                                 tokenId_0),
                           spender_0));
  }
  #__checkAuthorized_0(context, partialProofData, owner_0, spender_0, tokenId_0)
  {
    this.#_assertInitialized_0(context, partialProofData);
    if (!this.#__isAuthorized_0(context,
                                partialProofData,
                                owner_0,
                                spender_0,
                                tokenId_0))
    {
      __compactRuntime.assert(!this.#_isKeyOrAddressZero_0(context,
                                                           partialProofData,
                                                           owner_0),
                              'NonFungibleToken: Nonexistent Token');
      __compactRuntime.assert(false, 'NonFungibleToken: Insufficient Approval');
    }
    return [];
  }
  #__update_0(context, partialProofData, to_0, tokenId_0, auth_0) {
    this.#_assertInitialized_0(context, partialProofData);
    const from_0 = this.#__ownerOf_0(context, partialProofData, tokenId_0);
    if (!this.#_isKeyOrAddressZero_0(context, partialProofData, auth_0)) {
      this.#__checkAuthorized_0(context,
                                partialProofData,
                                from_0,
                                auth_0,
                                tokenId_0);
    }
    if (!this.#_isKeyOrAddressZero_0(context, partialProofData, from_0)) {
      this.#__approve_0(context,
                        partialProofData,
                        this.#_burnAddress_0(context, partialProofData),
                        tokenId_0,
                        this.#_burnAddress_0(context, partialProofData));
      let t_0;
      const newBalance_0 = (t_0 = _descriptor_0.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_14.toValue(3n),
                                                                                                      alignment: _descriptor_14.alignment() } }] } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_5.toValue(from_0),
                                                                                                      alignment: _descriptor_5.alignment() } }] } },
                                                                           { popeq: { cached: false,
                                                                                      result: undefined } }]).value),
                            (__compactRuntime.assert(!(t_0 < 1n),
                                                     'result of subtraction would be negative'),
                             t_0 - 1n));
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_14.toValue(3n),
                                                  alignment: _descriptor_14.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(from_0),
                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(newBalance_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    if (!this.#_isKeyOrAddressZero_0(context, partialProofData, to_0)) {
      if (!_descriptor_1.fromValue(Contract._query(context,
                                                   partialProofData,
                                                   [
                                                    { dup: { n: 0 } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_14.toValue(3n),
                                                                               alignment: _descriptor_14.alignment() } }] } },
                                                    { push: { storage: false,
                                                              value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(to_0),
                                                                                                           alignment: _descriptor_5.alignment() }).encode() } },
                                                    'member',
                                                    { popeq: { cached: true,
                                                               result: undefined } }]).value))
      {
        const tmp_0 = 0n;
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_14.toValue(3n),
                                                    alignment: _descriptor_14.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(to_0),
                                                                                alignment: _descriptor_5.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 1 } }]);
      }
      const newBalance_1 = ((t1) => {
                             if (t1 > 340282366920938463463374607431768211455n)
                               throw new __compactRuntime.CompactError('NonFungibleToken.compact line 563 char 26: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                             return t1;
                           })(_descriptor_0.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_14.toValue(3n),
                                                                                                  alignment: _descriptor_14.alignment() } }] } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_5.toValue(to_0),
                                                                                                  alignment: _descriptor_5.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value)
                              +
                              1n);
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_14.toValue(3n),
                                                  alignment: _descriptor_14.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(to_0),
                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(newBalance_1),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_14.toValue(2n),
                                                alignment: _descriptor_14.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tokenId_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(to_0),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return from_0;
  }
  #__mint_0(context, partialProofData, to_0, tokenId_0) {
    this.#_assertInitialized_0(context, partialProofData);
    __compactRuntime.assert(!this.#_isContractAddress_0(context,
                                                        partialProofData,
                                                        to_0),
                            'NonFungibleToken: Unsafe Transfer');
    this.#__unsafeMint_0(context, partialProofData, to_0, tokenId_0);
    return [];
  }
  #__unsafeMint_0(context, partialProofData, to_0, tokenId_0) {
    this.#_assertInitialized_0(context, partialProofData);
    __compactRuntime.assert(!this.#_isKeyOrAddressZero_0(context,
                                                         partialProofData,
                                                         to_0),
                            'NonFungibleToken: Invalid Receiver');
    const previousOwner_0 = this.#__update_0(context,
                                             partialProofData,
                                             to_0,
                                             tokenId_0,
                                             this.#_burnAddress_0(context,
                                                                  partialProofData));
    __compactRuntime.assert(this.#_isKeyOrAddressZero_0(context,
                                                        partialProofData,
                                                        previousOwner_0),
                            'NonFungibleToken: Invalid Sender');
    return [];
  }
  #__approve_0(context, partialProofData, to_0, tokenId_0, auth_0) {
    this.#_assertInitialized_0(context, partialProofData);
    if (!this.#_isKeyOrAddressZero_0(context, partialProofData, auth_0)) {
      const owner_0 = this.#__requireOwned_0(context,
                                             partialProofData,
                                             tokenId_0);
      __compactRuntime.assert(this.#_equal_2(owner_0, auth_0)
                              ||
                              this.#_isApprovedForAll_0(context,
                                                        partialProofData,
                                                        owner_0,
                                                        auth_0),
                              'NonFungibleToken: Invalid Approver');
    }
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_14.toValue(4n),
                                                alignment: _descriptor_14.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tokenId_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(to_0),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #__requireOwned_0(context, partialProofData, tokenId_0) {
    this.#_assertInitialized_0(context, partialProofData);
    const owner_0 = this.#__ownerOf_0(context, partialProofData, tokenId_0);
    __compactRuntime.assert(!this.#_isKeyOrAddressZero_0(context,
                                                         partialProofData,
                                                         owner_0),
                            'NonFungibleToken: Nonexistent Token');
    return owner_0;
  }
  #_initialize_1(context, partialProofData) {
    this.#_assertNotInitialized_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_14.toValue(7n),
                                                                            alignment: _descriptor_14.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(true),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    return [];
  }
  #_assertInitialized_0(context, partialProofData) {
    __compactRuntime.assert(_descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_14.toValue(7n),
                                                                                                alignment: _descriptor_14.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value),
                            'Initializable: contract not initialized');
    return [];
  }
  #_assertNotInitialized_0(context, partialProofData) {
    __compactRuntime.assert(!_descriptor_1.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_14.toValue(7n),
                                                                                                 alignment: _descriptor_14.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value),
                            'Initializable: contract already initialized');
    return [];
  }
  #_isKeyOrAddressZero_0(context, partialProofData, keyOrAddress_0) {
    if (this.#_isContractAddress_0(context, partialProofData, keyOrAddress_0)) {
      return this.#_equal_3({ bytes: new Uint8Array(32) }, keyOrAddress_0.right);
    } else {
      return this.#_equal_4({ bytes: new Uint8Array(32) }, keyOrAddress_0.left);
    }
  }
  #_isContractAddress_0(context, partialProofData, keyOrAddress_0) {
    return !keyOrAddress_0.is_left;
  }
  #_doStuff_0(context, partialProofData, coin_0, domain_sep_0) {
    const own_0 = this.#_left_0(context,
                                partialProofData,
                                this.#_ownPublicKey_0(context, partialProofData));
    this.#__mint_0(context,
                   partialProofData,
                   own_0,
                   _descriptor_7.fromValue(Contract._query(context,
                                                           partialProofData,
                                                           [
                                                            { dup: { n: 0 } },
                                                            { idx: { cached: false,
                                                                     pushPath: false,
                                                                     path: [
                                                                            { tag: 'value',
                                                                              value: { value: _descriptor_14.toValue(13n),
                                                                                       alignment: _descriptor_14.alignment() } }] } },
                                                            { popeq: { cached: true,
                                                                       result: undefined } }]).value));
    this.#_addToOwners_0(context,
                         partialProofData,
                         _descriptor_7.fromValue(Contract._query(context,
                                                                 partialProofData,
                                                                 [
                                                                  { dup: { n: 0 } },
                                                                  { idx: { cached: false,
                                                                           pushPath: false,
                                                                           path: [
                                                                                  { tag: 'value',
                                                                                    value: { value: _descriptor_14.toValue(13n),
                                                                                             alignment: _descriptor_14.alignment() } }] } },
                                                                  { popeq: { cached: true,
                                                                             result: undefined } }]).value),
                         own_0);
    this.#_addToBalance_0(context, partialProofData, own_0);
    const tmp_0 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_14.toValue(13n),
                                                alignment: _descriptor_14.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_6.toValue(tmp_0),
                                              alignment: _descriptor_6.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    this.#_mintToken_0(context,
                       partialProofData,
                       domain_sep_0,
                       1n,
                       domain_sep_0,
                       own_0);
    return [];
  }
  #_publicKey_0(context, partialProofData, sk_0) {
    return this.#_persistentHash_1(context,
                                   partialProofData,
                                   [new Uint8Array([99, 111, 109, 109, 105, 116, 109, 101, 110, 116, 45, 100, 111, 109, 97, 105, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                    sk_0]);
  }
  #_addToBalance_0(context, partialProofData, owner_0) {
    if (_descriptor_1.fromValue(Contract._query(context,
                                                partialProofData,
                                                [
                                                 { dup: { n: 0 } },
                                                 { idx: { cached: false,
                                                          pushPath: false,
                                                          path: [
                                                                 { tag: 'value',
                                                                   value: { value: _descriptor_14.toValue(11n),
                                                                            alignment: _descriptor_14.alignment() } }] } },
                                                 { push: { storage: false,
                                                           value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(owner_0),
                                                                                                        alignment: _descriptor_5.alignment() }).encode() } },
                                                 'member',
                                                 { popeq: { cached: true,
                                                            result: undefined } }]).value))
    {
      const oldBalance_0 = _descriptor_0.fromValue(Contract._query(context,
                                                                   partialProofData,
                                                                   [
                                                                    { dup: { n: 0 } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_14.toValue(11n),
                                                                                               alignment: _descriptor_14.alignment() } }] } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_5.toValue(owner_0),
                                                                                               alignment: _descriptor_5.alignment() } }] } },
                                                                    { popeq: { cached: false,
                                                                               result: undefined } }]).value);
      const tmp_0 = ((t1) => {
                      if (t1 > 340282366920938463463374607431768211455n)
                        throw new __compactRuntime.CompactError('example.compact line 64 char 7: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                      return t1;
                    })(oldBalance_0 + 1n);
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_14.toValue(11n),
                                                  alignment: _descriptor_14.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(owner_0),
                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    } else {
      const tmp_1 = 1n;
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_14.toValue(11n),
                                                  alignment: _descriptor_14.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(owner_0),
                                                                              alignment: _descriptor_5.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
    }
    return [];
  }
  #_addToOwners_0(context, partialProofData, tokenId_0, owner_0) {
    if (_descriptor_1.fromValue(Contract._query(context,
                                                partialProofData,
                                                [
                                                 { dup: { n: 0 } },
                                                 { idx: { cached: false,
                                                          pushPath: false,
                                                          path: [
                                                                 { tag: 'value',
                                                                   value: { value: _descriptor_14.toValue(10n),
                                                                            alignment: _descriptor_14.alignment() } }] } },
                                                 { push: { storage: false,
                                                           value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tokenId_0),
                                                                                                        alignment: _descriptor_0.alignment() }).encode() } },
                                                 'member',
                                                 { popeq: { cached: true,
                                                            result: undefined } }]).value))
    {
      __compactRuntime.assert(false, 'Token already minted');
    }
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_14.toValue(10n),
                                                alignment: _descriptor_14.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tokenId_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(owner_0),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_equal_0(x0, y0) {
    {
      let x1 = x0.is_left;
      let y1 = y0.is_left;
      if (x1 !== y1) return false;
    }
    {
      let x1 = x0.left;
      let y1 = y0.left;
      {
        let x2 = x1.bytes;
        let y2 = y1.bytes;
        if (!x2.every((x, i) => y2[i] === x)) return false;
      }
    }
    {
      let x1 = x0.right;
      let y1 = y0.right;
      {
        let x2 = x1.bytes;
        let y2 = y1.bytes;
        if (!x2.every((x, i) => y2[i] === x)) return false;
      }
    }
    return true;
  }
  #_equal_1(x0, y0) {
    {
      let x1 = x0.is_left;
      let y1 = y0.is_left;
      if (x1 !== y1) return false;
    }
    {
      let x1 = x0.left;
      let y1 = y0.left;
      {
        let x2 = x1.bytes;
        let y2 = y1.bytes;
        if (!x2.every((x, i) => y2[i] === x)) return false;
      }
    }
    {
      let x1 = x0.right;
      let y1 = y0.right;
      {
        let x2 = x1.bytes;
        let y2 = y1.bytes;
        if (!x2.every((x, i) => y2[i] === x)) return false;
      }
    }
    return true;
  }
  #_equal_2(x0, y0) {
    {
      let x1 = x0.is_left;
      let y1 = y0.is_left;
      if (x1 !== y1) return false;
    }
    {
      let x1 = x0.left;
      let y1 = y0.left;
      {
        let x2 = x1.bytes;
        let y2 = y1.bytes;
        if (!x2.every((x, i) => y2[i] === x)) return false;
      }
    }
    {
      let x1 = x0.right;
      let y1 = y0.right;
      {
        let x2 = x1.bytes;
        let y2 = y1.bytes;
        if (!x2.every((x, i) => y2[i] === x)) return false;
      }
    }
    return true;
  }
  #_equal_3(x0, y0) {
    {
      let x1 = x0.bytes;
      let y1 = y0.bytes;
      if (!x1.every((x, i) => y1[i] === x)) return false;
    }
    return true;
  }
  #_equal_4(x0, y0) {
    {
      let x1 = x0.bytes;
      let y1 = y0.bytes;
      if (!x1.every((x, i) => y1[i] === x)) return false;
    }
    return true;
  }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get name() {
      return _descriptor_9.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_14.toValue(8n),
                                                                                 alignment: _descriptor_14.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get symbol() {
      return _descriptor_9.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_14.toValue(9n),
                                                                                 alignment: _descriptor_14.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    owners: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(10n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                                               alignment: _descriptor_7.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_7.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(10n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'example.compact line 24 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(10n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'bigint' && key_0 >= 0 && key_0 <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'example.compact line 24 char 1',
                                      'Uint<0..340282366920938463463374607431768211455>',
                                      key_0)
        return _descriptor_5.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(10n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_0.toValue(key_0),
                                                                                   alignment: _descriptor_0.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[10];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_5.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    balances: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(11n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                                               alignment: _descriptor_7.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_7.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(11n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && typeof(key_0.is_left) === 'boolean' && typeof(key_0.left) === 'object' && key_0.left.bytes.buffer instanceof ArrayBuffer && key_0.left.bytes.BYTES_PER_ELEMENT === 1 && key_0.left.bytes.length === 32 && typeof(key_0.right) === 'object' && key_0.right.bytes.buffer instanceof ArrayBuffer && key_0.right.bytes.BYTES_PER_ELEMENT === 1 && key_0.right.bytes.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'example.compact line 25 char 1',
                                      'struct Either<is_left: Boolean, left: struct ZswapCoinPublicKey<bytes: Bytes<32>>, right: struct ContractAddress<bytes: Bytes<32>>>',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(11n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(key_0),
                                                                                                               alignment: _descriptor_5.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && typeof(key_0.is_left) === 'boolean' && typeof(key_0.left) === 'object' && key_0.left.bytes.buffer instanceof ArrayBuffer && key_0.left.bytes.BYTES_PER_ELEMENT === 1 && key_0.left.bytes.length === 32 && typeof(key_0.right) === 'object' && key_0.right.bytes.buffer instanceof ArrayBuffer && key_0.right.bytes.BYTES_PER_ELEMENT === 1 && key_0.right.bytes.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'example.compact line 25 char 1',
                                      'struct Either<is_left: Boolean, left: struct ZswapCoinPublicKey<bytes: Bytes<32>>, right: struct ContractAddress<bytes: Bytes<32>>>',
                                      key_0)
        return _descriptor_0.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(11n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_5.toValue(key_0),
                                                                                   alignment: _descriptor_5.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[11];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_5.fromValue(key.value),      _descriptor_0.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    get price() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_14.toValue(12n),
                                                                                 alignment: _descriptor_14.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get nonce() {
      return _descriptor_7.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_14.toValue(13n),
                                                                                 alignment: _descriptor_14.alignment() } }] } },
                                                      { popeq: { cached: true,
                                                                 result: undefined } }]).value);
    },
    treasury: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(14n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(0n),
                                                                                                               alignment: _descriptor_7.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_7.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(14n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'example.compact line 28 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_1.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_14.toValue(14n),
                                                                                   alignment: _descriptor_14.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(key_0),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'example.compact line 28 char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_13.fromValue(Contract._query(context,
                                                        partialProofData,
                                                        [
                                                         { dup: { n: 0 } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_14.toValue(14n),
                                                                                    alignment: _descriptor_14.alignment() } }] } },
                                                         { idx: { cached: false,
                                                                  pushPath: false,
                                                                  path: [
                                                                         { tag: 'value',
                                                                           value: { value: _descriptor_2.toValue(key_0),
                                                                                    alignment: _descriptor_2.alignment() } }] } },
                                                         { popeq: { cached: false,
                                                                    result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[14];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_2.fromValue(key.value),      _descriptor_13.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({ });
const pureCircuits = {
  publicKey: (...args_0) => _dummyContract.circuits.publicKey(_emptyContext, ...args_0).result
};
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
