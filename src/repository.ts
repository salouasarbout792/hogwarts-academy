import type { Wizard, Spell, NewWizard } from "./types";
import { Log, MeasureTime } from "./decorators";

export class Repository<T extends { id: number }> {
  private items: T[] = [];

  @Log
  add(item: T): void {
    this.items.push(item);
  }

  @MeasureTime
  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }

  getAll(): T[] {
    return [...this.items];
  }

  update(id: number, changes: Partial<T>): boolean {
    const item = this.findById(id);

    if (!item) return false;

    Object.assign(item, changes);
    return true;
  }
}

export class WizardRepository extends Repository<Wizard> {
  // Exercice 2 : Wizard["house"] = type à accès indexé (donne l'union House).
  findByHouse(house: Wizard["house"]): Wizard[] {
    return this.getAll().filter(wizard => wizard.house === house);
  }

  // Exercice 1 : l'appelant ne fournit pas l'id, le repository l'attribue.
  addNewWizard(newWizard: NewWizard): Wizard {
    const nextId =
      this.getAll().reduce((max, wizard) => Math.max(max, wizard.id), 0) + 1;

    const wizard = { ...newWizard, id: nextId } as Wizard;
    this.add(wizard);
    return wizard;
  }
}
export class SpellRepository extends Repository<Spell> {}
