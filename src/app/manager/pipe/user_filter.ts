import { Pipe, PipeTransform } from "@angular/core";
import { ITables } from "src/app/admin/interface/admin";

@Pipe({
  name: 'user_filter'
})

export class UserFilter implements PipeTransform {

  transform(str: string): string {
    return str.trim().toLocaleLowerCase();
  }
}
