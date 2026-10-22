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

## TAF — Exercices réalisés

| # | Exercice | Fichier(s) |
|---|----------|-----------|
| 1 | Ajouter un sorcier sans id (`NewWizard`) | `repository.ts` → `addNewWizard()` |
| 2 | Filtrer par maison (`Wizard["house"]`) | `repository.ts` → `findByHouse()` |
| 3 | `Extract` pour les événements `spell-cast` | `types.ts`, `main.ts` → `handleSpellCast()` |
| 4 | Décorateur `@ValidateSpellPower` | `decorators.ts`, `repository.ts` |
| 5 | Décorateur `@Cache` (Map + WeakMap) | `decorators.ts`, `main.ts` → `SpellCalculator` |
| 6 | Type guard strict `isHouse()` / `isWizard()` | `main.ts` |

Les tests de chaque exercice sont dans `src/main.ts` (lancer avec `npm start`).
