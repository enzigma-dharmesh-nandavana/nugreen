import { Pipe, PipeTransform } from '@angular/core';
import { Trade } from 'src/app/models/models';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
    transform(trades: Trade[], searchText: string): Trade[] {
        if (!searchText) {
          return trades;        // Return all trades if search text is empty
        }
    
        const query = searchText.toLowerCase();
        return trades.filter((trade: Trade) => {
          if (trade.Name) {
            const tradeName = trade.Name.toLowerCase();
            return tradeName.includes(query);
          }
          return false; // Ignore trades without a Name property
        });
      }
}
