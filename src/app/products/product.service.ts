import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products';

    list1Event: EventEmitter<any> = new EventEmitter();

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number) {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p._id === id))
            .subscribe((data) => this.list1Event.emit(data)); 
    }

    addProduct(product: IProduct): Observable<IProduct> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._productUrl, product, options)
            .map((response: Response) => <IProduct> response.json())
    }

    editProduct(product: IProduct): Observable<IProduct> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.put(this._productUrl, product, options)
            .map((response: Response) => <IProduct> response.json())
    }

    deleteProduct(product: IProduct): Observable<void> {
        return this._http.delete(this._productUrl + '/' + product._id, product)
               .map((response: Response) => {});
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
