/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type SuperTransactionCreateArgs = {
  transactionIndex: number
  ephemeralSigners: number
  transactionMessage: Uint8Array
  memo: beet.COption<string>
}

/**
 * @category userTypes
 * @category generated
 */
export const superTransactionCreateArgsBeet =
  new beet.FixableBeetArgsStruct<SuperTransactionCreateArgs>(
    [
      ['transactionIndex', beet.u8],
      ['ephemeralSigners', beet.u8],
      ['transactionMessage', beet.bytes],
      ['memo', beet.coption(beet.utf8String)],
    ],
    'SuperTransactionCreateArgs'
  )
