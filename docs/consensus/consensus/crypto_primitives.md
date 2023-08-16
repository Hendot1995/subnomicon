---
id: crypto_primitives  
title: Cryptographic Primitives
sidebar_position: 1
description: Cryptographic Primitives used in Subspace protocol
keywords:
    - Cryptography
    - Consensus
---
The Subspace protocol uses the following cryptographic primitives:

## Hash

Hashes provide succinct commitments to arbitrary data (blocks, transactions, etc.) that cannot feasibly be reversed. The Subspace protocol uses the BLAKE2b-256 hash function.

## Digital Signature

Digital signatures secure different parts of consensus by providing a means of authentication. 

We currently use Schnorr/Ristretto x25519 (also known as sr25519) as key derivation and signing algorithm (with the [schnorrkel](https://github.com/w3f/schnorrkel) library).

- Non-canonical Schnorr signatures are used to sign rewards for a newly forged block (as defined in Substrate) and votes, as well transactions and transaction bundles.
- Canonical (deterministic) signatures are used as a verifiable random function (VRF) in the slot election among domain operators. A canonical scheme is necessary for these cases to prevent attackers from repeatedly signing until they produce an election solution that meets the threshold (as part of a grinding attack).

## Erasure Code

An erasure code allows to extend given data in a way that the original data can be recovered from a subset and protected against loss.
In Subspace, erasure code is used to encode and decode blockchain history pieces and their KZG commitments in an archived segment. This allows for distributed storage of pieces across farmers to protect against node failures. Erasure code is also used in plotting to create unique, easily recoverable plot files.

We currently use a Discrete Fourier Transform-based systematic Reed-Solomon code with a rate of 1/2 over the field $F_{r}$, where $r$ is the [size of subgroup of points](https://hackmd.io/@benjaminion/bls12-381#Curve-equation-and-parameters) BLS12-381 curve for the piece chunks and the same approach over the subgroup of points $G_1$ for commitments.

## Kate-Zaverucha-Goldberg (KZG) Polynomial Commitment

KZG polynomial commitment scheme allows for *constant-*sized inclusion proofs for arbitrary-sized data sets. Specifically:

- The commitment size is *constant* and equal to one group element of an elliptic curve group that admits pairings. 
- The witness size is *constant* and equal to one group element.
- Verification time is *constant* and requires two group multiplications and two pairings
- Proving time (commitment and witness generation) is *linear* in the length of committed data
Subspace uses BLS12-381, which has 48 bytes for group elements (commitments and witnesses).

KZG requires a one-time trusted setup of the universal reference values (public parameters), enabling commitment to polynomials of degree less than $2^{15}$. In spirit of interoperability, we use the same reference values as Ethereum, computed during distributed multi-party computation ceremony by the Ethereum Foundation.

The protocol uses the KZG commitment scheme to commit to the archived pieces of history and to segments of pieces, so that the farmers storing pieces in their plots can always succinctly prove that a particular piece is a valid part of the blockchain history and clients who request pieces can verify the proofs efficiently.
The synergy between KZG and Reed-Solomon erasure code allows us to have:

- succinct commitments to data of arbitrary size,
- succinct witness of the inclusion of data fragments in blockchain history,
- efficient verification
- provably correct erasure coding

## Merkle Tree

Merkle tree provides succinct commitments (Merkle roots) to arbitrary-sized data sets with efficient *logarithmic*-sized inclusion proofs. Current usages in Subspace include Merkle trees for:

- extrinsics sets in blocks (as defined in Substrate framework)
- state of the blockchain (as defined in Substrate framework)
- execution traces for the domain blocks

## Encoding Mapping

Encoding provides a means to make arbitrary useful data (i.e. chunks of blockchain history) look like random data, while allowing to retrieve the useful data through decoding. 

We currently use XOR as encoding function.