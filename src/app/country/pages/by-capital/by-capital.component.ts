import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  term: string = '';
  errorFound: boolean = false;
  countries: Country[] = [];

  constructor(
    private countryService: CountryService
  ) { }

  search(term: string) {
    this.errorFound = false;
    this.term = term;

    this.countryService.searchCapitalCity(this.term)
        .subscribe( (countries) => {
          this.countries = countries;
        }, (err) => {
          this.errorFound = true;
          this.countries = [];
        });
  }

}
