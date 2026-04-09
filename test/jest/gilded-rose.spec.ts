import { AgedBrie, BackstagePasses, ManagedItem, Sulfuras } from '@/item-types';
import { Item, GildedRose } from '../../app/gilded-rose';

describe('Gilded Rose', () => {
  let items: Item[];
  let gildedRose: GildedRose;

  beforeEach(() => {
    items = [];
    gildedRose = new GildedRose(items);
  });

  describe('Normal Items', () => {
    it('degrades by 1 when sellin > 0', () => {
      items.push(new ManagedItem('Normal Item', 10, 20));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(19);
      expect(items[0].sellIn).toBe(9);
    });

    it('degrades by 2 when sellin == 0', () => {
      items.push(new ManagedItem('Normal Item', 0, 20));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
      expect(items[0].sellIn).toBe(-1);
    });

    it('quality never goes negative', () => {
      items.push(new ManagedItem('Normal Item', 5, 0));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(4);
    });
  });

  describe('Aged Brie', () => {
    it('increases in quality over time', () => {
      items.push(new AgedBrie('Aged Brie', 10, 20));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
      expect(items[0].sellIn).toBe(9);
    });

    it('increases twice as fast after sell date', () => {
      items.push(new AgedBrie('Aged Brie', 0, 20));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(22);
      expect(items[0].sellIn).toBe(-1);
    });

    it('never exceeds quality of 50', () => {
      items.push(new AgedBrie('Aged Brie', 5, 50));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(4);
    });
  });

  describe('Sulfuras', () => {
    it('never decreases in quality or sellIn', () => {
      items.push(new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(0);
    });
  });

  describe('Backstage passes', () => {
    it('increases by 1 when sellIn > 10', () => {
      items.push(new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 15, 20));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
      expect(items[0].sellIn).toBe(14);
    });

    it('increases by 2 when sellIn between 6 and 10 (inclusive)', () => {
      items.push(new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 10, 20));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(22);
      expect(items[0].sellIn).toBe(9);
    });

    it('increases by 3 when sellIn between 1 and 5 (inclusive)', () => {
      items.push(new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 5, 20));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(23);
      expect(items[0].sellIn).toBe(4);
    });

    it('drops to 0 after the concert', () => {
      items.push(new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 0, 20));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    it('never exceeds quality of 50', () => {
      items.push(new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 5, 49));
      gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(4);
    });
  });
});
