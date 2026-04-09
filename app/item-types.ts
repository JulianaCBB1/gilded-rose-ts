import { Item } from './gilded-rose';

export class ManagedItem extends Item {
  protected readonly DEGRADE_RATE = 1;
  protected readonly MAX_QUALITY = 50;
  protected readonly MIN_QUALITY = 0;

  update() {
    this.sellIn--;

    const isPastSellDate = this.sellIn < 0;
    this.quality -= isPastSellDate ? this.DEGRADE_RATE * 2 : this.DEGRADE_RATE;
    this.quality = Math.max(this.MIN_QUALITY, this.quality);
  }
}

export class AgedBrie extends ManagedItem {
  update() {
    this.sellIn--;

    const isPastSellDate = this.sellIn < 0;
    this.quality += isPastSellDate ? this.DEGRADE_RATE * 2 : this.DEGRADE_RATE;
    this.quality = Math.min(this.MAX_QUALITY, this.quality);
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
    this.quality = Math.min(this.MAX_QUALITY, this.quality);
  }
}

export class Sulfuras extends ManagedItem {
  update() {}
}
