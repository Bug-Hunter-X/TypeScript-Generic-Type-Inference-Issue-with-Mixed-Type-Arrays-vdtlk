# TypeScript Generic Type Inference Issue with Mixed Type Arrays

This repository demonstrates a subtle type inference problem in TypeScript when using generics with arrays containing mixed data types.

The `combineArrays` function aims to merge two arrays of any type.  However, when presented with arrays containing a mix of types (e.g., numbers and strings), TypeScript's type inference fails and produces a type error.

The solution involves using type assertions or a more robust type definition to correctly handle mixed arrays.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the root directory.
3. Run `tsc bug.ts`.  You'll observe a TypeScript compilation error.
4. Examine the `bugSolution.ts` for a corrected implementation.

## Solution

The solution addresses the type inference issue. See `bugSolution.ts` for a functional, type-safe implementation.