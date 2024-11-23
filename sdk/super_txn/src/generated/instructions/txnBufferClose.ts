/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category TxnBufferClose
 * @category generated
 */
export const txnBufferCloseStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'TxnBufferCloseInstructionArgs'
)
/**
 * Accounts required by the _txnBufferClose_ instruction
 *
 * @property [_writable_] transactionBuffer
 * @property [**signer**] creator
 * @category Instructions
 * @category TxnBufferClose
 * @category generated
 */
export type TxnBufferCloseInstructionAccounts = {
  transactionBuffer: web3.PublicKey
  creator: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const txnBufferCloseInstructionDiscriminator = [
  31, 25, 86, 202, 10, 13, 23, 28,
]

/**
 * Creates a _TxnBufferClose_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category TxnBufferClose
 * @category generated
 */
export function createTxnBufferCloseInstruction(
  accounts: TxnBufferCloseInstructionAccounts,
  programId = new web3.PublicKey('C5tcDT7wb5PGNy6owoze5KofLN4XQw4CmFAGuba7a5My')
) {
  const [data] = txnBufferCloseStruct.serialize({
    instructionDiscriminator: txnBufferCloseInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.transactionBuffer,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.creator,
      isWritable: false,
      isSigner: true,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
