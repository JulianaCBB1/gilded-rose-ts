import { ManagedItem, AgedBrie, Sulfuras, Conjured, BackstagePasses } from '@/item-types';
import { GildedRose } from '../app/gilded-rose';

console.log('OMGHAI!');

const items = [
  new ManagedItem('+5 Dexterity Vest', 10, 20),
  new AgedBrie('Aged Brie', 2, 0),
  new ManagedItem('Elixir of the Mongoose', 5, 7),
  new Sulfuras('Sulfuras, Hand of Ragnaros', 0, 80),
  new Sulfuras('Sulfuras, Hand of Ragnaros', -1, 80),
  new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 10, 49),
  new BackstagePasses('Backstage passes to a TAFKAL80ETC concert', 5, 49),
  new Conjured('Conjured Mana Cake', 3, 6),
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
  days = +process.argv[2];
}

for (let i = 0; i < days + 1; i++) {
  console.log('-------- day ' + i + ' --------');
  console.log('name, sellIn, quality');
  items.forEach((element) => {
    console.log(element.name + ', ' + element.sellIn + ', ' + element.quality);
  });
  console.log();
  gildedRose.updateQuality();
}
