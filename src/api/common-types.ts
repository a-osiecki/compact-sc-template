// This file is part of midnightntwrk/example-counter.
// Copyright (C) 2025 Midnight Foundation
// SPDX-License-Identifier: Apache-2.0
// Licensed under the Apache License, Version 2.0 (the "License");
// You may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Bulletin board common types and abstractions.
 *
 * @module
 */

import { type MidnightProviders } from '@midnight-ntwrk/midnight-js-types';
import { type FoundContract } from '@midnight-ntwrk/midnight-js-contracts';
import type { ContractPrivateState, Contract, Witnesses } from '../contracts/src/index';

export const contractPrivateStateKey = 'contractPrivateState';
export type PrivateStateId = typeof contractPrivateStateKey;

/**
 * The private states consumed throughout the application.
 *
 * @remarks
 * {@link PrivateStates} can be thought of as a type that describes a schema for all
 * private states for all contracts used in the application. Each key represents
 * the type of private state consumed by a particular type of contract.
 * The key is used by the deployed contract when interacting with a private state provider,
 * and the type (i.e., `typeof PrivateStates[K]`) represents the type of private state
 * expected to be returned.
 *
 * Since there is only one contract type for the bulletin board example, we only define a
 * single key/type in the schema.
 *
 * @public
 */
export type PrivateStates = {
  /**
   * Key used to provide the private state for {@link BBoardContract} deployments.
   */
  readonly bboardPrivateState: ContractPrivateState;
};

/**
 * Represents a bulletin board contract and its private state.
 *
 * @public
 */
export type ContractContract = Contract<ContractPrivateState, Witnesses<ContractPrivateState>>;

/**
 * The keys of the circuits exported from {@link BBoardContract}.
 *
 * @public
 */
export type ContractCircuitKeys = Exclude<keyof ContractContract['impureCircuits'], number | symbol>;

/**
 * The providers required by {@link BBoardContract}.
 *
 * @public
 */
export type ContractProviders = MidnightProviders<ContractCircuitKeys, PrivateStateId, ContractPrivateState>;

/**
 * A {@link BBoardContract} that has been deployed to the network.
 *
 * @public
 */
export type DeployedContractContract = FoundContract<ContractContract>;

export type ContractDerivedState = {
  readonly count: number;
};