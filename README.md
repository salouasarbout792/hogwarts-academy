# Hogwarts Academy — TypeScript Mini Project

A small terminal project to practice:

- Generics and generic constraints
- Utility types: `Pick`, `Omit`, `Partial`, `Record`, `Parameters`, `ReturnType`, `Extract`, `Exclude`
- Conditional types and `infer`
- Index signatures
- Type guards and discriminated unions
- Legacy TypeScript method decorators (`target`, `propertyKey`, `descriptor`)

## Requirements

- Node.js 18+ recommended
- npm

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

## Type-check

```bash
npm run typecheck
```

## Note about decorators

This project intentionally uses the legacy TypeScript decorator API so you can learn the three method-decorator arguments:
`target`, `propertyKey`, and `descriptor`. The project enables `experimentalDecorators` in `tsconfig.json`.

## TAF - Completed exercises

| # | Exercise | File(s) |
|---|----------|---------|
| 1 | Add a new wizard without an id (`NewWizard`) | `repository.ts` (`addNewWizard()`) |
| 2 | Find wizards by house (`Wizard["house"]`) | `repository.ts` (`findByHouse()`) |
| 3 | `Extract` for `spell-cast` events | `types.ts`, `main.ts` (`handleSpellCast()`) |
| 4 | `@ValidateSpellPower` decorator | `decorators.ts`, `repository.ts` |
| 5 | `@Cache` decorator (Map + WeakMap) | `decorators.ts`, `main.ts` (`SpellCalculator`) |
| 6 | Strict type guard `isHouse()` / `isWizard()` | `main.ts` |

The test of each exercise is at the end of `src/main.ts` (run with `npm start`).
