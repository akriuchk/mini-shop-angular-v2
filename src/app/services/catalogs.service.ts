import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { api } from 'src/environments/apis';

@Injectable()
export class CatalogsService {

  constructor(private http: HttpClient) {
  }


  public findAll(): Observable<HttpResponse<any>> {
    return this.http.get(api.categories, {
      observe: 'response'
    });
  }

  public findAllFilter(onlyAvailable: string): Observable<HttpResponse<any>> {
    const params = { onlyAvailable }
    return this.http.get(api.products, {
      params,
      observe: 'response'
    });
  }

  public findLinenByNamePart(namePart: string): Observable<any> {
    const params = { namePart }

    return this.http.get(api.products, {
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
    'Disney': 'DISNEY',
    'Perkal': 'DEFAULT',
    'Poplin': 'DEFAULT'
  };

  public defCatalogType(selectedCatalog: string): string {
    return this.PARSER_MAP[selectedCatalog]
  }

}
