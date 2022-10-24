import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class ByCapitalComponent {

  term: string = '';
  errorFound: boolean = false;
  countries: Country[] = [];

  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;

  constructor(
    private countryService: CountryService
  ) { }

  search(term: string) {
    this.errorFound = false;
    this.term = term;
    this.showSuggestions = false;

    this.countryService.searchCapitalCity(this.term)
        .subscribe( (countries) => {
          this.countries = countries;
        }, (err) => {
          this.errorFound = true;
          this.countries = [];
        });
  }

  suggestions( term: string) {
    this.errorFound = false;
    this.term = term;
    this.showSuggestions = true;

    this.countryService.searchCountry(term)
        .subscribe(
          countries => this.suggestedCountries = countries.splice(0,5),
          (err) => this.suggestedCountries = []
        );
  }



}
