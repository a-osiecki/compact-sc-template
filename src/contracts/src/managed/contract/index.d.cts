import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type CoinInfo = { nonce: Uint8Array; color: Uint8Array; value: bigint };

export type QualifiedCoinInfo = { nonce: Uint8Array;
                                  color: Uint8Array;
                                  value: bigint;
                                  mt_index: bigint
                                };

export type ZswapCoinPublicKey = { bytes: Uint8Array };

export type AssetPublicInfo = { kind: string; description: string };

export type Offer = { nullifiedOwner: Uint8Array;
                      shares: bigint;
                      pricePerShare: bigint
                    };

export type Witnesses<T> = {
  secret_key(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
  salt(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
}

export type ImpureCircuits<T> = {
  mintShare(context: __compactRuntime.CircuitContext<T>,
            amountOfShares_0: bigint,
            coin_0: CoinInfo): __compactRuntime.CircuitResults<T, []>;
  sellShares(context: __compactRuntime.CircuitContext<T>,
             amountOfShares_0: bigint,
             unitPrice_0: bigint,
             tokens_0: CoinInfo): __compactRuntime.CircuitResults<T, []>;
  buyShare(context: __compactRuntime.CircuitContext<T>,
           nullifiedOwner_0: Uint8Array,
           amountOfShares_0: bigint,
           unitPrice_0: bigint,
           coin_0: CoinInfo): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
  publicKey(sk_0: Uint8Array): Uint8Array;
  nullify(sk_0: Uint8Array, salt_0: Uint8Array): Uint8Array;
}

export type Circuits<T> = {
  mintShare(context: __compactRuntime.CircuitContext<T>,
            amountOfShares_0: bigint,
            coin_0: CoinInfo): __compactRuntime.CircuitResults<T, []>;
  sellShares(context: __compactRuntime.CircuitContext<T>,
             amountOfShares_0: bigint,
             unitPrice_0: bigint,
             tokens_0: CoinInfo): __compactRuntime.CircuitResults<T, []>;
  buyShare(context: __compactRuntime.CircuitContext<T>,
           nullifiedOwner_0: Uint8Array,
           amountOfShares_0: bigint,
           unitPrice_0: bigint,
           coin_0: CoinInfo): __compactRuntime.CircuitResults<T, []>;
  publicKey(context: __compactRuntime.CircuitContext<T>, sk_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
  nullify(context: __compactRuntime.CircuitContext<T>,
          sk_0: Uint8Array,
          salt_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
}

export type Ledger = {
  readonly assetInfo: AssetPublicInfo;
  readonly expectedCoinType: Uint8Array;
  readonly unitPrice: bigint;
  readonly availableShares: bigint;
  sells: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Offer): boolean;
    lookup(key_0: Offer): QualifiedCoinInfo;
    [Symbol.iterator](): Iterator<[Offer, QualifiedCoinInfo]>
  };
  claimables: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Offer): boolean;
    lookup(key_0: Offer): QualifiedCoinInfo;
    [Symbol.iterator](): Iterator<[Offer, QualifiedCoinInfo]>
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
               _owner_0: ZswapCoinPublicKey,
               _assetInfo_0: AssetPublicInfo,
               _coinType_0: Uint8Array,
               _unitPrice_0: bigint,
               _availableShares_0: bigint,
               _domain_sep_0: Uint8Array): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
