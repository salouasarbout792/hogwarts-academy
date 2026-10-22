import type { Wizard, Spell, NewWizard } from "./types";
import { Log, MeasureTime, ValidateSpellPower } from "./decorators";

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
  // Exercise 2: Wizard["house"] is an indexed access type (the House union).
  findByHouse(house: Wizard["house"]): Wizard[] {
    return this.getAll().filter(wizard => wizard.house === house);
  }

  // Exercise 1: the caller does not provide the id, the repository assigns it.
  addNewWizard(newWizard: NewWizard): Wizard {
    const nextId =
      this.getAll().reduce((max, wizard) => Math.max(max, wizard.id), 0) + 1;

    const wizard = { ...newWizard, id: nextId } as Wizard;
    this.add(wizard);
    return wizard;
  }
}
export class SpellRepository extends Repository<Spell> {
  // Exercise 4: the decorator is applied to add().
  @ValidateSpellPower
  override add(spell: Spell): void {
    super.add(spell);
  }
}
