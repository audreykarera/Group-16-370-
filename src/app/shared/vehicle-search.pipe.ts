import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../models/vehicle';

@Pipe({
  name: 'vehicleSearch'
})
export class VehicleSearchPipe implements PipeTransform {

  transform(vehicleList: Vehicle[], seachedValue: string): Vehicle[] {
    if( !vehicleList || !seachedValue){
      return vehicleList;
    }
    console.log(seachedValue);
    console.log(vehicleList)
    return vehicleList.filter(item =>{
      item.VehicleModel.toLocaleLowerCase().includes(seachedValue.toLocaleLowerCase())})

  }
  

}
