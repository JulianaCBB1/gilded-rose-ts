import { Item } from './gilded-rose';

const BASE_DEGRADE_RATE = 1;
const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

export class ManagedItem extends Item {
  protected readonly DEGRADE_RATE: number = BASE_DEGRADE_RATE;

  update() {
    this.sellIn--;

    const isPastSellDate = this.sellIn < 0;
    this.quality -= isPastSellDate ? this.DEGRADE_RATE * 2 : this.DEGRADE_RATE;
    this.quality = Math.max(MIN_QUALITY, this.quality);
  }
}

export class AgedBrie extends ManagedItem {
  update() {
    this.sellIn--;

    const isPastSellDate = this.sellIn < 0;
    this.quality += isPastSellDate ? this.DEGRADE_RATE * 2 : this.DEGRADE_RATE;
    this.quality = Math.min(MAX_QUALITY, this.quality);
  }
}

export class BackstagePasses extends ManagedItem {
  private getQualityBonus(): number {
    if (this.sellIn < 5) return 3;
    if (this.sellIn < 10) return 2;
    return this.DEGRADE_RATE;
  }

  update() {
    this.sellIn--;

    const isPastSellDate = this.sellIn < 0;
    this.quality = isPastSellDate ? 0 : this.quality + this.getQualityBonus();
    this.quality = Math.min(MAX_QUALITY, this.quality);
  }
}

export class Sulfuras extends ManagedItem {
  update() {}
}

export class Conjured extends ManagedItem {
  protected readonly DEGRADE_RATE = BASE_DEGRADE_RATE * 2;
}
