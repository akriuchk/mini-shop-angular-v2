import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { api } from 'src/environments/apis';
import { Catalog } from '../model/catalog';
import { Product } from '../model/linen';

@Injectable()
export class CatalogsService {

  constructor(private http: HttpClient) {}

  public findAllFilter(onlyAvailable = true): Observable<Catalog[]> {
    const params = { "onlyAvailable": `${onlyAvailable}` }
    return this.http.get<Catalog[]>(api.categories, {
      params,
      observe: 'response'
    }).pipe(
      map((res: HttpResponse<Catalog[]>) => {
        return res.body;
      })
    )
  }

  getCategory(name: string): Observable<Catalog> {
    const url = `${api.categories}/${name}`;
    this.log(`request ${url}`)
    return this.http.get<Catalog>(url).pipe(
      tap(_ => this.log(`fetched category, name=${name}`)),
      catchError(this.handleError<Catalog>(`getCategory name=${name}`))
    );
  }

  public findProductByNamePart(namePart: string): Observable<Product[]> {
    const params = { namePart }

    return this.http.get(api.products, {
      params,
      observe: 'response'
    }).pipe(
      map((res: HttpResponse<Product[]>) => {
        return res.body;
      })
    );
  }

  public updateProduct(product: Product) {
    const url = `${api.products}/${product.id}`;
    this.log(`request ${url}`)
    return this.http.post(url, product).pipe(
      tap(_ => this.log(`updated product, name=${product.name}`)),
      catchError(this.handleError(`updateProduct name=${product.name}`))
    );
  }


  catalogs: string[] = ['Vasilisa bjaz', 'Default']

  PARSER_MAP = {
    'Vasilisa bjaz': "VASILISA_BYAZ",
    'Vasilisa satin': 'DEFAULT',
    'Disney': 'DISNEY',
    'Perkal': 'DEFAULT',
    'Poplin': 'DEFAULT',
    'Default': 'DEFAULT'
  };

  public defCatalogType(selectedCatalog: string): string {
    return this.PARSER_MAP[selectedCatalog]
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
    // this.messageService.add(`HeroService: ${message}`);
  }

}
