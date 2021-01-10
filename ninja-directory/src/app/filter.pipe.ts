import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term?: any): any {
    //check if search term is undefined - if its undefined we return all of the ninjas.
    if(term === undefined) return ninjas;
    //return updated ninjas array
    return ninjas.filter(function(x: any){//we return the updated ninja array for the values that pass the condition bellow
      return x.name.toLowercase().includes(term.toLowerCase()); // return true if the term is included in any of the ninja names,so the upper array will keep that result and show it to the user.
    })
  }

}
