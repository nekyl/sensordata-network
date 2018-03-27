import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';


import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class AllTransactionsService {

    private SYSTEM: string = 'System';
    private Transactions;

    constructor(private transactionService: DataService<Object> ) {
    };

    //get all Residents
    public getTransactions(): Observable<Object[]> {
        return this.transactionService.transactions();
    }



}
