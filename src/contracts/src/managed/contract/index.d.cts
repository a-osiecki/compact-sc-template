import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type CoinInfo = { nonce: Uint8Array; color: Uint8Array; value: bigint };

export type QualifiedCoinInfo = { nonce: Uint8Array;
                                  color: Uint8Array;
                                  value: bigint;
                                  mt_index: bigint
                                };

export type ZswapCoinPublicKey = { bytes: Uint8Array };

export type Witnesses<T> = {
}

export type ImpureCircuits<T> = {
  doStuff(context: __compactRuntime.CircuitContext<T>,
          coin_0: CoinInfo,
          domain_sep_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
  publicKey(sk_0: Uint8Array): Uint8Array;
}

export type Circuits<T> = {
  doStuff(context: __compactRuntime.CircuitContext<T>,
          coin_0: CoinInfo,
          domain_sep_0: Uint8Array): __compactRuntime.CircuitResults<T, []>;
  publicKey(context: __compactRuntime.CircuitContext<T>, sk_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
}

export type Ledger = {
  readonly name: string;
  readonly symbol: string;
  owners: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: bigint): boolean;
    lookup(key_0: bigint): { is_left: boolean,
                             left: ZswapCoinPublicKey,
                             right: { bytes: Uint8Array }
                           };
    [Symbol.iterator](): Iterator<[bigint, { is_left: boolean, left: ZswapCoinPublicKey, right: { bytes: Uint8Array } }]>
  };
  balances: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: { is_left: boolean,
                    left: ZswapCoinPublicKey,
                    right: { bytes: Uint8Array }
                  }): boolean;
    lookup(key_0: { is_left: boolean,
                    left: ZswapCoinPublicKey,
                    right: { bytes: Uint8Array }
                  }): bigint;
    [Symbol.iterator](): Iterator<[{ is_left: boolean, left: ZswapCoinPublicKey, right: { bytes: Uint8Array } }, bigint]>
  };
  readonly price: bigint;
  readonly nonce: bigint;
  treasury: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): QualifiedCoinInfo;
    [Symbol.iterator](): Iterator<[Uint8Array, QualifiedCoinInfo]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>,
               _name_1: string,
               _symbol_1: string,
               _price_0: bigint): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
