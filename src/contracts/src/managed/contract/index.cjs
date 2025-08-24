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

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeUnsignedInteger(4294967295n, 4);

class _Offer_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment()));
  }
  fromValue(value_0) {
    return {
      nullifiedOwner: _descriptor_0.fromValue(value_0),
      shares: _descriptor_1.fromValue(value_0),
      pricePerShare: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nullifiedOwner).concat(_descriptor_1.toValue(value_0.shares).concat(_descriptor_1.toValue(value_0.pricePerShare)));
  }
}

const _descriptor_2 = new _Offer_0();

const _descriptor_3 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

const _descriptor_4 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _QualifiedCoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment().concat(_descriptor_4.alignment())));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_3.fromValue(value_0),
      mt_index: _descriptor_4.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_3.toValue(value_0.value).concat(_descriptor_4.toValue(value_0.mt_index))));
  }
}

const _descriptor_5 = new _QualifiedCoinInfo_0();

const _descriptor_6 = new __compactRuntime.CompactTypeBoolean();

class _CoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_3.alignment()));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_3.toValue(value_0.value)));
  }
}

const _descriptor_7 = new _CoinInfo_0();

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_8 = new _ZswapCoinPublicKey_0();

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_9 = new _ContractAddress_0();

class _Either_0 {
  alignment() {
    return _descriptor_6.alignment().concat(_descriptor_8.alignment().concat(_descriptor_9.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_6.fromValue(value_0),
      left: _descriptor_8.fromValue(value_0),
      right: _descriptor_9.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_6.toValue(value_0.is_left).concat(_descriptor_8.toValue(value_0.left).concat(_descriptor_9.toValue(value_0.right)));
  }
}

const _descriptor_10 = new _Either_0();

class _Maybe_0 {
  alignment() {
    return _descriptor_6.alignment().concat(_descriptor_7.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_6.fromValue(value_0),
      value: _descriptor_7.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_6.toValue(value_0.is_some).concat(_descriptor_7.toValue(value_0.value));
  }
}

const _descriptor_11 = new _Maybe_0();

class _SendResult_0 {
  alignment() {
    return _descriptor_11.alignment().concat(_descriptor_7.alignment());
  }
  fromValue(value_0) {
    return {
      change: _descriptor_11.fromValue(value_0),
      sent: _descriptor_7.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_11.toValue(value_0.change).concat(_descriptor_7.toValue(value_0.sent));
  }
}

const _descriptor_12 = new _SendResult_0();

const _descriptor_13 = new __compactRuntime.CompactTypeField();

const _descriptor_14 = new __compactRuntime.CompactTypeVector(3, _descriptor_0);

const _descriptor_15 = new __compactRuntime.CompactTypeVector(2, _descriptor_0);

const _descriptor_16 = new __compactRuntime.CompactTypeBytes(6);

class _CoinPreimage_0 {
  alignment() {
    return _descriptor_7.alignment().concat(_descriptor_6.alignment().concat(_descriptor_0.alignment().concat(_descriptor_16.alignment())));
  }
  fromValue(value_0) {
    return {
      info: _descriptor_7.fromValue(value_0),
      dataType: _descriptor_6.fromValue(value_0),
      data: _descriptor_0.fromValue(value_0),
      domain_sep: _descriptor_16.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_7.toValue(value_0.info).concat(_descriptor_6.toValue(value_0.dataType).concat(_descriptor_0.toValue(value_0.data).concat(_descriptor_16.toValue(value_0.domain_sep))));
  }
}

const _descriptor_17 = new _CoinPreimage_0();

const _descriptor_18 = new __compactRuntime.CompactTypeVector(2, _descriptor_13);

const _descriptor_19 = new __compactRuntime.CompactTypeOpaqueString();

class _AssetPublicInfo_0 {
  alignment() {
    return _descriptor_19.alignment().concat(_descriptor_19.alignment());
  }
  fromValue(value_0) {
    return {
      kind: _descriptor_19.fromValue(value_0),
      description: _descriptor_19.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_19.toValue(value_0.kind).concat(_descriptor_19.toValue(value_0.description));
  }
}

const _descriptor_20 = new _AssetPublicInfo_0();

const _descriptor_21 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class _Maybe_1 {
  alignment() {
    return _descriptor_6.alignment().concat(_descriptor_19.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_6.fromValue(value_0),
      value: _descriptor_19.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_6.toValue(value_0.is_some).concat(_descriptor_19.toValue(value_0.value));
  }
}

const _descriptor_22 = new _Maybe_1();

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    if (typeof(witnesses_0.secret_key) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named secret_key');
    }
    if (typeof(witnesses_0.salt) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named salt');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      mintShare: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`mintShare: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const amountOfShares_0 = args_1[1];
        const coin_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('mintShare',
                                      'argument 1 (as invoked from Typescript)',
                                      'example.compact line 78 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(amountOfShares_0) === 'bigint' && amountOfShares_0 >= 0n && amountOfShares_0 <= 4294967295n)) {
          __compactRuntime.type_error('mintShare',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'example.compact line 78 char 1',
                                      'Uint<0..4294967295>',
                                      amountOfShares_0)
        }
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0n && coin_0.value <= 340282366920938463463374607431768211455n)) {
          __compactRuntime.type_error('mintShare',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'example.compact line 78 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(amountOfShares_0).concat(_descriptor_7.toValue(coin_0)),
            alignment: _descriptor_1.alignment().concat(_descriptor_7.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._mintShare_0(context,
                                           partialProofData,
                                           amountOfShares_0,
                                           coin_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      sellShares: (...args_1) => {
        if (args_1.length !== 4) {
          throw new __compactRuntime.CompactError(`sellShares: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const amountOfShares_0 = args_1[1];
        const unitPrice_0 = args_1[2];
        const tokens_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('sellShares',
                                      'argument 1 (as invoked from Typescript)',
                                      'example.compact line 101 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(amountOfShares_0) === 'bigint' && amountOfShares_0 >= 0n && amountOfShares_0 <= 4294967295n)) {
          __compactRuntime.type_error('sellShares',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'example.compact line 101 char 1',
                                      'Uint<0..4294967295>',
                                      amountOfShares_0)
        }
        if (!(typeof(unitPrice_0) === 'bigint' && unitPrice_0 >= 0n && unitPrice_0 <= 4294967295n)) {
          __compactRuntime.type_error('sellShares',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'example.compact line 101 char 1',
                                      'Uint<0..4294967295>',
                                      unitPrice_0)
        }
        if (!(typeof(tokens_0) === 'object' && tokens_0.nonce.buffer instanceof ArrayBuffer && tokens_0.nonce.BYTES_PER_ELEMENT === 1 && tokens_0.nonce.length === 32 && tokens_0.color.buffer instanceof ArrayBuffer && tokens_0.color.BYTES_PER_ELEMENT === 1 && tokens_0.color.length === 32 && typeof(tokens_0.value) === 'bigint' && tokens_0.value >= 0n && tokens_0.value <= 340282366920938463463374607431768211455n)) {
          __compactRuntime.type_error('sellShares',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'example.compact line 101 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      tokens_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(amountOfShares_0).concat(_descriptor_1.toValue(unitPrice_0).concat(_descriptor_7.toValue(tokens_0))),
            alignment: _descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_7.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._sellShares_0(context,
                                            partialProofData,
                                            amountOfShares_0,
                                            unitPrice_0,
                                            tokens_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      buyShare: (...args_1) => {
        if (args_1.length !== 5) {
          throw new __compactRuntime.CompactError(`buyShare: expected 5 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const nullifiedOwner_0 = args_1[1];
        const amountOfShares_0 = args_1[2];
        const unitPrice_0 = args_1[3];
        const coin_0 = args_1[4];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('buyShare',
                                      'argument 1 (as invoked from Typescript)',
                                      'example.compact line 127 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(nullifiedOwner_0.buffer instanceof ArrayBuffer && nullifiedOwner_0.BYTES_PER_ELEMENT === 1 && nullifiedOwner_0.length === 32)) {
          __compactRuntime.type_error('buyShare',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'example.compact line 127 char 1',
                                      'Bytes<32>',
                                      nullifiedOwner_0)
        }
        if (!(typeof(amountOfShares_0) === 'bigint' && amountOfShares_0 >= 0n && amountOfShares_0 <= 4294967295n)) {
          __compactRuntime.type_error('buyShare',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'example.compact line 127 char 1',
                                      'Uint<0..4294967295>',
                                      amountOfShares_0)
        }
        if (!(typeof(unitPrice_0) === 'bigint' && unitPrice_0 >= 0n && unitPrice_0 <= 4294967295n)) {
          __compactRuntime.type_error('buyShare',
                                      'argument 3 (argument 4 as invoked from Typescript)',
                                      'example.compact line 127 char 1',
                                      'Uint<0..4294967295>',
                                      unitPrice_0)
        }
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0n && coin_0.value <= 340282366920938463463374607431768211455n)) {
          __compactRuntime.type_error('buyShare',
                                      'argument 4 (argument 5 as invoked from Typescript)',
                                      'example.compact line 127 char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(nullifiedOwner_0).concat(_descriptor_1.toValue(amountOfShares_0).concat(_descriptor_1.toValue(unitPrice_0).concat(_descriptor_7.toValue(coin_0)))),
            alignment: _descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_7.alignment())))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._buyShare_0(context,
                                          partialProofData,
                                          nullifiedOwner_0,
                                          amountOfShares_0,
                                          unitPrice_0,
                                          coin_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      publicKey(context, ...args_1) {
        return { result: pureCircuits.publicKey(...args_1), context };
      },
      nullify(context, ...args_1) {
        return { result: pureCircuits.nullify(...args_1), context };
      }
    };
    this.impureCircuits = {
      mintShare: this.circuits.mintShare,
      sellShares: this.circuits.sellShares,
      buyShare: this.circuits.buyShare
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 7) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 7 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    const _owner_0 = args_0[1];
    const _assetInfo_0 = args_0[2];
    const _coinType_0 = args_0[3];
    const _unitPrice_0 = args_0[4];
    const _availableShares_0 = args_0[5];
    const _domain_sep_0 = args_0[6];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!(typeof(_owner_0) === 'object' && _owner_0.bytes.buffer instanceof ArrayBuffer && _owner_0.bytes.BYTES_PER_ELEMENT === 1 && _owner_0.bytes.length === 32)) {
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 1 (argument 2 as invoked from Typescript)',
                                  'example.compact line 62 char 1',
                                  'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                  _owner_0)
    }
    if (!(typeof(_assetInfo_0) === 'object' && true && true)) {
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 2 (argument 3 as invoked from Typescript)',
                                  'example.compact line 62 char 1',
                                  'struct AssetPublicInfo<kind: Opaque<"string">, description: Opaque<"string">>',
                                  _assetInfo_0)
    }
    if (!(_coinType_0.buffer instanceof ArrayBuffer && _coinType_0.BYTES_PER_ELEMENT === 1 && _coinType_0.length === 32)) {
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 3 (argument 4 as invoked from Typescript)',
                                  'example.compact line 62 char 1',
                                  'Bytes<32>',
                                  _coinType_0)
    }
    if (!(typeof(_unitPrice_0) === 'bigint' && _unitPrice_0 >= 0n && _unitPrice_0 <= 4294967295n)) {
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 4 (argument 5 as invoked from Typescript)',
                                  'example.compact line 62 char 1',
                                  'Uint<0..4294967295>',
                                  _unitPrice_0)
    }
    if (!(typeof(_availableShares_0) === 'bigint' && _availableShares_0 >= 0n && _availableShares_0 <= 4294967295n)) {
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 5 (argument 6 as invoked from Typescript)',
                                  'example.compact line 62 char 1',
                                  'Uint<0..4294967295>',
                                  _availableShares_0)
    }
    if (!(_domain_sep_0.buffer instanceof ArrayBuffer && _domain_sep_0.BYTES_PER_ELEMENT === 1 && _domain_sep_0.length === 32)) {
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 6 (argument 7 as invoked from Typescript)',
                                  'example.compact line 62 char 1',
                                  'Bytes<32>',
                                  _domain_sep_0)
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    let stateValue_2 = __compactRuntime.StateValue.newArray();
    stateValue_2 = stateValue_2.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_2 = stateValue_2.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(stateValue_2);
    let stateValue_1 = __compactRuntime.StateValue.newArray();
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_1 = stateValue_1.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(stateValue_1);
    state_0.data = stateValue_0;
    state_0.setOperation('mintShare', new __compactRuntime.ContractOperation());
    state_0.setOperation('sellShares', new __compactRuntime.ContractOperation());
    state_0.setOperation('buyShare', new __compactRuntime.ContractOperation());
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
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(0n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(0n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue({ is_left: false, left: { bytes: new Uint8Array(32) }, right: { bytes: new Uint8Array(32) } }),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(0n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(1n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(false),
                                                                            alignment: _descriptor_6.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(0n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(0n),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(1n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(2n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(0n),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(3n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(4n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue({ is_some: false, value: '' }),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(5n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_22.toValue({ is_some: false, value: '' }),
                                                                            alignment: _descriptor_22.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(6n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(0n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(7n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_20.toValue({ kind: '', description: '' }),
                                                                            alignment: _descriptor_20.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(8n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(9n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(10n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(11n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(0n),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(12n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(13n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(14n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    this._initialize_0(context, partialProofData, this._left_0(_owner_0));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(7n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_20.toValue(_assetInfo_0),
                                                                            alignment: _descriptor_20.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(9n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(_unitPrice_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(11n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(_availableShares_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(8n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(_coinType_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(14n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(_domain_sep_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  _some_0(value_0) { return { is_some: true, value: value_0 }; }
  _none_0() {
    return { is_some: false,
             value:
               { nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n } };
  }
  _left_0(value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  _right_0(value_0) {
    return { is_left: false, left: { bytes: new Uint8Array(32) }, right: value_0 };
  }
  _transientHash_0(value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_18, value_0);
    return result_0;
  }
  _persistentHash_0(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_17, value_0);
    return result_0;
  }
  _persistentHash_1(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_15, value_0);
    return result_0;
  }
  _persistentHash_2(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_14, value_0);
    return result_0;
  }
  _persistentCommit_0(value_0, rand_0) {
    const result_0 = __compactRuntime.persistentCommit(_descriptor_15,
                                                       value_0,
                                                       rand_0);
    return result_0;
  }
  _degradeToTransient_0(x_0) {
    const result_0 = __compactRuntime.degradeToTransient(x_0);
    return result_0;
  }
  _upgradeFromTransient_0(x_0) {
    const result_0 = __compactRuntime.upgradeFromTransient(x_0);
    return result_0;
  }
  _ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_8.toValue(result_0),
      alignment: _descriptor_8.alignment()
    });
    return result_0;
  }
  _createZswapInput_0(context, partialProofData, coin_0) {
    const result_0 = __compactRuntime.createZswapInput(context, coin_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  _createZswapOutput_0(context, partialProofData, coin_0, recipient_0) {
    const result_0 = __compactRuntime.createZswapOutput(context,
                                                        coin_0,
                                                        recipient_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  _tokenType_0(domain_sep_0, contractAddress_0) {
    return this._persistentCommit_0([domain_sep_0, contractAddress_0.bytes],
                                    new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 100, 101, 114, 105, 118, 101, 95, 116, 111, 107, 101, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  }
  _mintToken_0(context,
               partialProofData,
               domain_sep_0,
               value_0,
               nonce_0,
               recipient_0)
  {
    const coin_0 = { nonce: nonce_0,
                     color:
                       this._tokenType_0(domain_sep_0,
                                         _descriptor_9.fromValue(Contract._query(context,
                                                                                 partialProofData,
                                                                                 [
                                                                                  { dup: { n: 2 } },
                                                                                  { idx: { cached: true,
                                                                                           pushPath: false,
                                                                                           path: [
                                                                                                  { tag: 'value',
                                                                                                    value: { value: _descriptor_21.toValue(0n),
                                                                                                             alignment: _descriptor_21.alignment() } }] } },
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
                                       value: { value: _descriptor_21.toValue(4n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(domain_sep_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { dup: { n: 1 } },
                     { dup: { n: 1 } },
                     'member',
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(value_0),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
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
    this._createZswapOutput_0(context, partialProofData, coin_0, recipient_0);
    const cm_0 = this._coinCommitment_0(coin_0, recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(2n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return coin_0;
  }
  _receive_0(context, partialProofData, coin_0) {
    const recipient_0 = this._right_0(_descriptor_9.fromValue(Contract._query(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 2 } },
                                                                               { idx: { cached: true,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_21.toValue(0n),
                                                                                                          alignment: _descriptor_21.alignment() } }] } },
                                                                               { popeq: { cached: true,
                                                                                          result: undefined } }]).value));
    this._createZswapOutput_0(context, partialProofData, coin_0, recipient_0);
    const tmp_0 = this._coinCommitment_0(coin_0, recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return [];
  }
  _send_0(context, partialProofData, input_0, recipient_0, value_0) {
    const selfAddr_0 = _descriptor_9.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 2 } },
                                                                { idx: { cached: true,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_21.toValue(0n),
                                                                                           alignment: _descriptor_21.alignment() } }] } },
                                                                { popeq: { cached: true,
                                                                           result: undefined } }]).value);
    this._createZswapInput_0(context, partialProofData, input_0);
    const tmp_0 = this._coinNullifier_0(this._downcastQualifiedCoin_0(input_0),
                                        selfAddr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(0n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    let t_0;
    const change_0 = (t_0 = input_0.value,
                      (__compactRuntime.assert(!(t_0 < value_0),
                                               'result of subtraction would be negative'),
                       t_0 - value_0));
    const output_0 = { nonce:
                         this._upgradeFromTransient_0(this._transientHash_0([__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                                           new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                             this._degradeToTransient_0(input_0.nonce)])),
                       color: input_0.color,
                       value: value_0 };
    this._createZswapOutput_0(context, partialProofData, output_0, recipient_0);
    const tmp_1 = this._coinCommitment_0(output_0, recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(2n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    if (this._equal_0(change_0, 0n)) {
      return { change: this._none_0(), sent: output_0 };
    } else {
      const changeCoin_0 = { nonce:
                               this._upgradeFromTransient_0(this._transientHash_0([__compactRuntime.convert_Uint8Array_to_bigint(30,
                                                                                                                                 new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101, 47, 50])),
                                                                                   this._degradeToTransient_0(input_0.nonce)])),
                             color: input_0.color,
                             value: change_0 };
      this._createZswapOutput_0(context,
                                partialProofData,
                                changeCoin_0,
                                this._right_0(selfAddr_0));
      const cm_0 = this._coinCommitment_0(changeCoin_0,
                                          this._right_0(selfAddr_0));
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_21.toValue(2n),
                                                  alignment: _descriptor_21.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_21.toValue(1n),
                                                  alignment: _descriptor_21.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      return { change: this._some_0(changeCoin_0), sent: output_0 };
    }
  }
  _downcastQualifiedCoin_0(coin_0) {
    return { nonce: coin_0.nonce, color: coin_0.color, value: coin_0.value };
  }
  _coinCommitment_0(coin_0, recipient_0) {
    return this._persistentHash_0({ info: coin_0,
                                    dataType: recipient_0.is_left,
                                    data:
                                      recipient_0.is_left ?
                                      recipient_0.left.bytes :
                                      recipient_0.right.bytes,
                                    domain_sep:
                                      new Uint8Array([109, 100, 110, 58, 99, 99]) });
  }
  _coinNullifier_0(coin_0, addr_0) {
    return this._persistentHash_0({ info: coin_0,
                                    dataType: false,
                                    data: addr_0.bytes,
                                    domain_sep:
                                      new Uint8Array([109, 100, 110, 58, 99, 110]) });
  }
  _initialize_0(context, partialProofData, initialOwner_0) {
    this._initialize_1(context, partialProofData);
    __compactRuntime.assert(!this._isKeyOrAddressZero_0(initialOwner_0),
                            'Ownable: invalid initial owner');
    this.__transferOwnership_0(context, partialProofData, initialOwner_0);
    return [];
  }
  __transferOwnership_0(context, partialProofData, newOwner_0) {
    this._assertInitialized_0(context, partialProofData);
    __compactRuntime.assert(!this._isContractAddress_0(newOwner_0),
                            'Ownable: unsafe ownership transfer');
    this.__unsafeUncheckedTransferOwnership_0(context,
                                              partialProofData,
                                              newOwner_0);
    return [];
  }
  __unsafeUncheckedTransferOwnership_0(context, partialProofData, newOwner_0) {
    this._assertInitialized_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(0n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(0n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_10.toValue(newOwner_0),
                                                                            alignment: _descriptor_10.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _initialize_1(context, partialProofData) {
    this._assertNotInitialized_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(0n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(1n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_6.toValue(true),
                                                                            alignment: _descriptor_6.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _assertInitialized_0(context, partialProofData) {
    __compactRuntime.assert(_descriptor_6.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_21.toValue(0n),
                                                                                                alignment: _descriptor_21.alignment() } },
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_21.toValue(1n),
                                                                                                alignment: _descriptor_21.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value),
                            'Initializable: contract not initialized');
    return [];
  }
  _assertNotInitialized_0(context, partialProofData) {
    __compactRuntime.assert(!_descriptor_6.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_21.toValue(0n),
                                                                                                 alignment: _descriptor_21.alignment() } },
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_21.toValue(1n),
                                                                                                 alignment: _descriptor_21.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value),
                            'Initializable: contract already initialized');
    return [];
  }
  _isKeyOrAddressZero_0(keyOrAddress_0) {
    if (this._isContractAddress_0(keyOrAddress_0)) {
      return this._equal_1({ bytes: new Uint8Array(32) }, keyOrAddress_0.right);
    } else {
      return this._equal_2({ bytes: new Uint8Array(32) }, keyOrAddress_0.left);
    }
  }
  _isContractAddress_0(keyOrAddress_0) { return !keyOrAddress_0.is_left; }
  _secret_key_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.secret_key(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.type_error('secret_key',
                                  'return value',
                                  'example.compact line 21 char 1',
                                  'Bytes<32>',
                                  result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _salt_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.salt(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.type_error('salt',
                                  'return value',
                                  'example.compact line 22 char 1',
                                  'Bytes<32>',
                                  result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _mintShare_0(context, partialProofData, amountOfShares_0, coin_0) {
    const disclosedCoin_0 = coin_0;
    const disclosedShares_0 = amountOfShares_0;
    __compactRuntime.assert(disclosedShares_0
                            <=
                            _descriptor_1.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_21.toValue(1n),
                                                                                                alignment: _descriptor_21.alignment() } },
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_21.toValue(11n),
                                                                                                alignment: _descriptor_21.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value),
                            'Not enough shares available');
    __compactRuntime.assert(this._equal_3(coin_0.color,
                                          _descriptor_0.fromValue(Contract._query(context,
                                                                                  partialProofData,
                                                                                  [
                                                                                   { dup: { n: 0 } },
                                                                                   { idx: { cached: false,
                                                                                            pushPath: false,
                                                                                            path: [
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_21.toValue(1n),
                                                                                                              alignment: _descriptor_21.alignment() } },
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_21.toValue(8n),
                                                                                                              alignment: _descriptor_21.alignment() } }] } },
                                                                                   { popeq: { cached: false,
                                                                                              result: undefined } }]).value)),
                            'Not the right asset provided');
    __compactRuntime.assert(this._equal_4(coin_0.value,
                                          amountOfShares_0
                                          *
                                          _descriptor_1.fromValue(Contract._query(context,
                                                                                  partialProofData,
                                                                                  [
                                                                                   { dup: { n: 0 } },
                                                                                   { idx: { cached: false,
                                                                                            pushPath: false,
                                                                                            path: [
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_21.toValue(1n),
                                                                                                              alignment: _descriptor_21.alignment() } },
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_21.toValue(9n),
                                                                                                              alignment: _descriptor_21.alignment() } }] } },
                                                                                   { popeq: { cached: false,
                                                                                              result: undefined } }]).value)),
                            'Wrong amount sent');
    this._receive_0(context, partialProofData, disclosedCoin_0);
    const own_0 = this._left_0(this._ownPublicKey_0(context, partialProofData));
    this._mintToken_0(context,
                      partialProofData,
                      _descriptor_0.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_21.toValue(1n),
                                                                                          alignment: _descriptor_21.alignment() } },
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_21.toValue(14n),
                                                                                          alignment: _descriptor_21.alignment() } }] } },
                                                               { popeq: { cached: false,
                                                                          result: undefined } }]).value),
                      disclosedShares_0,
                      _descriptor_0.fromValue(Contract._query(context,
                                                              partialProofData,
                                                              [
                                                               { dup: { n: 0 } },
                                                               { idx: { cached: false,
                                                                        pushPath: false,
                                                                        path: [
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_21.toValue(1n),
                                                                                          alignment: _descriptor_21.alignment() } },
                                                                               { tag: 'value',
                                                                                 value: { value: _descriptor_21.toValue(14n),
                                                                                          alignment: _descriptor_21.alignment() } }] } },
                                                               { popeq: { cached: false,
                                                                          result: undefined } }]).value),
                      own_0);
    let t_0;
    const tmp_0 = (t_0 = _descriptor_1.fromValue(Contract._query(context,
                                                                 partialProofData,
                                                                 [
                                                                  { dup: { n: 0 } },
                                                                  { idx: { cached: false,
                                                                           pushPath: false,
                                                                           path: [
                                                                                  { tag: 'value',
                                                                                    value: { value: _descriptor_21.toValue(1n),
                                                                                             alignment: _descriptor_21.alignment() } },
                                                                                  { tag: 'value',
                                                                                    value: { value: _descriptor_21.toValue(11n),
                                                                                             alignment: _descriptor_21.alignment() } }] } },
                                                                  { popeq: { cached: false,
                                                                             result: undefined } }]).value),
                   (__compactRuntime.assert(!(t_0 < disclosedShares_0),
                                            'result of subtraction would be negative'),
                    t_0 - disclosedShares_0));
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_21.toValue(1n),
                                                alignment: _descriptor_21.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_21.toValue(11n),
                                                                            alignment: _descriptor_21.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _sellShares_0(context,
                partialProofData,
                amountOfShares_0,
                unitPrice_0,
                tokens_0)
  {
    const disclosedShares_0 = amountOfShares_0;
    const disclosedCoin_0 = tokens_0;
    __compactRuntime.assert(this._equal_5(disclosedCoin_0.color,
                                          _descriptor_0.fromValue(Contract._query(context,
                                                                                  partialProofData,
                                                                                  [
                                                                                   { dup: { n: 0 } },
                                                                                   { idx: { cached: false,
                                                                                            pushPath: false,
                                                                                            path: [
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_21.toValue(1n),
                                                                                                              alignment: _descriptor_21.alignment() } },
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_21.toValue(8n),
                                                                                                              alignment: _descriptor_21.alignment() } }] } },
                                                                                   { popeq: { cached: false,
                                                                                              result: undefined } }]).value)),
                            'Not the right asset provided');
    __compactRuntime.assert(disclosedShares_0 > 0n,
                            'Must sell at least one share');
    this._receive_0(context, partialProofData, disclosedCoin_0);
    const thisCoinKey_0 = { nullifiedOwner:
                              this._nullify_0(this._secret_key_0(context,
                                                                 partialProofData),
                                              this._salt_0(context,
                                                           partialProofData)),
                            shares: disclosedShares_0,
                            pricePerShare: unitPrice_0 };
    return [];
  }
  _buyShare_0(context,
              partialProofData,
              nullifiedOwner_0,
              amountOfShares_0,
              unitPrice_0,
              coin_0)
  {
    const disclosedShares_0 = amountOfShares_0;
    const disclosedCoin_0 = coin_0;
    __compactRuntime.assert(disclosedShares_0 > 0n,
                            'Must buy at least one share');
    __compactRuntime.assert(this._equal_6(disclosedCoin_0.color,
                                          _descriptor_0.fromValue(Contract._query(context,
                                                                                  partialProofData,
                                                                                  [
                                                                                   { dup: { n: 0 } },
                                                                                   { idx: { cached: false,
                                                                                            pushPath: false,
                                                                                            path: [
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_21.toValue(1n),
                                                                                                              alignment: _descriptor_21.alignment() } },
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_21.toValue(8n),
                                                                                                              alignment: _descriptor_21.alignment() } }] } },
                                                                                   { popeq: { cached: false,
                                                                                              result: undefined } }]).value)),
                            'Not the right asset provided');
    this._receive_0(context, partialProofData, disclosedCoin_0);
    const thisCoinKey_0 = { nullifiedOwner: nullifiedOwner_0,
                            shares: disclosedShares_0,
                            pricePerShare: unitPrice_0 };
    const offerExists_0 = _descriptor_6.fromValue(Contract._query(context,
                                                                  partialProofData,
                                                                  [
                                                                   { dup: { n: 0 } },
                                                                   { idx: { cached: false,
                                                                            pushPath: false,
                                                                            path: [
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_21.toValue(1n),
                                                                                              alignment: _descriptor_21.alignment() } },
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_21.toValue(12n),
                                                                                              alignment: _descriptor_21.alignment() } }] } },
                                                                   { push: { storage: false,
                                                                             value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(thisCoinKey_0),
                                                                                                                          alignment: _descriptor_2.alignment() }).encode() } },
                                                                   'member',
                                                                   { popeq: { cached: true,
                                                                              result: undefined } }]).value);
    __compactRuntime.assert(offerExists_0, 'No such offer');
    const offer_0 = _descriptor_5.fromValue(Contract._query(context,
                                                            partialProofData,
                                                            [
                                                             { dup: { n: 0 } },
                                                             { idx: { cached: false,
                                                                      pushPath: false,
                                                                      path: [
                                                                             { tag: 'value',
                                                                               value: { value: _descriptor_21.toValue(1n),
                                                                                        alignment: _descriptor_21.alignment() } },
                                                                             { tag: 'value',
                                                                               value: { value: _descriptor_21.toValue(12n),
                                                                                        alignment: _descriptor_21.alignment() } }] } },
                                                             { idx: { cached: false,
                                                                      pushPath: false,
                                                                      path: [
                                                                             { tag: 'value',
                                                                               value: { value: _descriptor_2.toValue(thisCoinKey_0),
                                                                                        alignment: _descriptor_2.alignment() } }] } },
                                                             { popeq: { cached: false,
                                                                        result: undefined } }]).value);
    const totalAmount_0 = disclosedShares_0 * unitPrice_0;
    this._send_0(context,
                 partialProofData,
                 offer_0,
                 this._left_0(this._ownPublicKey_0(context, partialProofData)),
                 totalAmount_0);
    return [];
  }
  _publicKey_0(sk_0) {
    return this._persistentHash_1([new Uint8Array([112, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   sk_0]);
  }
  _nullify_0(sk_0, salt_0) {
    return this._persistentHash_2([new Uint8Array([112, 107, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   sk_0,
                                   salt_0]);
  }
  _equal_0(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
  _equal_1(x0, y0) {
    {
      let x1 = x0.bytes;
      let y1 = y0.bytes;
      if (!x1.every((x, i) => y1[i] === x)) { return false; }
    }
    return true;
  }
  _equal_2(x0, y0) {
    {
      let x1 = x0.bytes;
      let y1 = y0.bytes;
      if (!x1.every((x, i) => y1[i] === x)) { return false; }
    }
    return true;
  }
  _equal_3(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_4(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
  _equal_5(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_6(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
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
    get assetInfo() {
      return _descriptor_20.fromValue(Contract._query(context,
                                                      partialProofData,
                                                      [
                                                       { dup: { n: 0 } },
                                                       { idx: { cached: false,
                                                                pushPath: false,
                                                                path: [
                                                                       { tag: 'value',
                                                                         value: { value: _descriptor_21.toValue(1n),
                                                                                  alignment: _descriptor_21.alignment() } },
                                                                       { tag: 'value',
                                                                         value: { value: _descriptor_21.toValue(7n),
                                                                                  alignment: _descriptor_21.alignment() } }] } },
                                                       { popeq: { cached: false,
                                                                  result: undefined } }]).value);
    },
    get expectedCoinType() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_21.toValue(1n),
                                                                                 alignment: _descriptor_21.alignment() } },
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_21.toValue(8n),
                                                                                 alignment: _descriptor_21.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get unitPrice() {
      return _descriptor_1.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_21.toValue(1n),
                                                                                 alignment: _descriptor_21.alignment() } },
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_21.toValue(9n),
                                                                                 alignment: _descriptor_21.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get availableShares() {
      return _descriptor_1.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_21.toValue(1n),
                                                                                 alignment: _descriptor_21.alignment() } },
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_21.toValue(11n),
                                                                                 alignment: _descriptor_21.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    sells: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(1n),
                                                                                   alignment: _descriptor_21.alignment() } },
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(12n),
                                                                                   alignment: _descriptor_21.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(0n),
                                                                                                               alignment: _descriptor_4.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(1n),
                                                                                   alignment: _descriptor_21.alignment() } },
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(12n),
                                                                                   alignment: _descriptor_21.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.nullifiedOwner.buffer instanceof ArrayBuffer && key_0.nullifiedOwner.BYTES_PER_ELEMENT === 1 && key_0.nullifiedOwner.length === 32 && typeof(key_0.shares) === 'bigint' && key_0.shares >= 0n && key_0.shares <= 4294967295n && typeof(key_0.pricePerShare) === 'bigint' && key_0.pricePerShare >= 0n && key_0.pricePerShare <= 4294967295n)) {
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'example.compact line 57 char 1',
                                      'struct Offer<nullifiedOwner: Bytes<32>, shares: Uint<0..4294967295>, pricePerShare: Uint<0..4294967295>>',
                                      key_0)
        }
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(1n),
                                                                                   alignment: _descriptor_21.alignment() } },
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(12n),
                                                                                   alignment: _descriptor_21.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(key_0),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.nullifiedOwner.buffer instanceof ArrayBuffer && key_0.nullifiedOwner.BYTES_PER_ELEMENT === 1 && key_0.nullifiedOwner.length === 32 && typeof(key_0.shares) === 'bigint' && key_0.shares >= 0n && key_0.shares <= 4294967295n && typeof(key_0.pricePerShare) === 'bigint' && key_0.pricePerShare >= 0n && key_0.pricePerShare <= 4294967295n)) {
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'example.compact line 57 char 1',
                                      'struct Offer<nullifiedOwner: Bytes<32>, shares: Uint<0..4294967295>, pricePerShare: Uint<0..4294967295>>',
                                      key_0)
        }
        return _descriptor_5.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(1n),
                                                                                   alignment: _descriptor_21.alignment() } },
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(12n),
                                                                                   alignment: _descriptor_21.alignment() } }] } },
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
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[1].asArray()[12];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_2.fromValue(key.value),      _descriptor_5.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    claimables: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(1n),
                                                                                   alignment: _descriptor_21.alignment() } },
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(13n),
                                                                                   alignment: _descriptor_21.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(0n),
                                                                                                               alignment: _descriptor_4.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_4.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(1n),
                                                                                   alignment: _descriptor_21.alignment() } },
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(13n),
                                                                                   alignment: _descriptor_21.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.nullifiedOwner.buffer instanceof ArrayBuffer && key_0.nullifiedOwner.BYTES_PER_ELEMENT === 1 && key_0.nullifiedOwner.length === 32 && typeof(key_0.shares) === 'bigint' && key_0.shares >= 0n && key_0.shares <= 4294967295n && typeof(key_0.pricePerShare) === 'bigint' && key_0.pricePerShare >= 0n && key_0.pricePerShare <= 4294967295n)) {
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'example.compact line 58 char 1',
                                      'struct Offer<nullifiedOwner: Bytes<32>, shares: Uint<0..4294967295>, pricePerShare: Uint<0..4294967295>>',
                                      key_0)
        }
        return _descriptor_6.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(1n),
                                                                                   alignment: _descriptor_21.alignment() } },
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(13n),
                                                                                   alignment: _descriptor_21.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(key_0),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.nullifiedOwner.buffer instanceof ArrayBuffer && key_0.nullifiedOwner.BYTES_PER_ELEMENT === 1 && key_0.nullifiedOwner.length === 32 && typeof(key_0.shares) === 'bigint' && key_0.shares >= 0n && key_0.shares <= 4294967295n && typeof(key_0.pricePerShare) === 'bigint' && key_0.pricePerShare >= 0n && key_0.pricePerShare <= 4294967295n)) {
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'example.compact line 58 char 1',
                                      'struct Offer<nullifiedOwner: Bytes<32>, shares: Uint<0..4294967295>, pricePerShare: Uint<0..4294967295>>',
                                      key_0)
        }
        return _descriptor_5.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(1n),
                                                                                   alignment: _descriptor_21.alignment() } },
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_21.toValue(13n),
                                                                                   alignment: _descriptor_21.alignment() } }] } },
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
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[1].asArray()[13];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_2.fromValue(key.value),      _descriptor_5.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({
  secret_key: (...args) => undefined, salt: (...args) => undefined
});
const pureCircuits = {
  publicKey: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`publicKey: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const sk_0 = args_0[0];
    if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32)) {
      __compactRuntime.type_error('publicKey',
                                  'argument 1',
                                  'example.compact line 154 char 1',
                                  'Bytes<32>',
                                  sk_0)
    }
    return _dummyContract._publicKey_0(sk_0);
  },
  nullify: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`nullify: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const sk_0 = args_0[0];
    const salt_0 = args_0[1];
    if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32)) {
      __compactRuntime.type_error('nullify',
                                  'argument 1',
                                  'example.compact line 158 char 1',
                                  'Bytes<32>',
                                  sk_0)
    }
    if (!(salt_0.buffer instanceof ArrayBuffer && salt_0.BYTES_PER_ELEMENT === 1 && salt_0.length === 32)) {
      __compactRuntime.type_error('nullify',
                                  'argument 2',
                                  'example.compact line 158 char 1',
                                  'Bytes<32>',
                                  salt_0)
    }
    return _dummyContract._nullify_0(sk_0, salt_0);
  }
};
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
