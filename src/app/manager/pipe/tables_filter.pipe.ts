import { Pipe, PipeTransform } from "@angular/core";
import { ITables } from "src/app/admin/interface/admin";

@Pipe({
  name: 'list_filter'
})

export class listFilter implements PipeTransform {

  transform(tables: any[], search: any ): any[] {
    if(!search.trim()) {
      return tables
    }
    return tables.filter( table => {
      return table.name.toLowerCase().includes(search.toLocaleLowerCase())
    })
  }
}
