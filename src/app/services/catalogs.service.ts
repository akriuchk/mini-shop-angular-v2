import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class CatalogsService {
  private readonly catalogApi: string;
  private readonly linenSearchByNameApi: string;

  constructor(private http: HttpClient) {
    this.catalogApi = environment.apiUrl + 'catalog';
    this.linenSearchByNameApi = environment.apiUrl + 'findByNameContainingIgnoreCase';
  }

  public findAll(onlyAvailable: string): Observable<HttpResponse<any>> {
    const params = { onlyAvailable }
    return this.http.get(this.catalogApi, {
      params,
      observe: 'response'
    });
  }

  public findLinenByNamePart(namePart: string): Observable<any> {
    const params = { namePart }
    return this.http.get(this.linenSearchByNameApi, {
      params,
      observe: 'response'
    }).pipe(
      map((res: HttpResponse<any>) => {
        return res.body;
      })
    );
  }


  catalogs: string[] = ['Vasilisa bjaz', 'Vasilisa satin', 'Disney', 'Perkal', 'Poplin']

  PARSER_MAP = {
    'Vasilisa bjaz': "VASILISA_BYAZ",
    'Vasilisa satin': 'DEFAULT',
    'Disney': 'DEFAULT',
    'Perkal': 'DEFAULT',
    'Poplin': 'DEFAULT'
  };

  public defCatalogType(selectedCatalog: string): string {
    return this.PARSER_MAP[selectedCatalog]
  }

}
