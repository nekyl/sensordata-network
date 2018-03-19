import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { WalletComponent } from './Wallet/Wallet.component';
import { AccountComponent } from './Account/Account.component';
import { WeatherDataComponent } from './WeatherData/WeatherData.component';
import { AirPollutionDataComponent } from './AirPollutionData/AirPollutionData.component';
import { WeatherForecastComponent } from './WeatherForecast/WeatherForecast.component';
import { AirQualityDataComponent } from './AirQualityData/AirQualityData.component';

//import { SellerComponent } from './Seller/Seller.component';

import { AllTransactionsComponent } from './AllTransactions/AllTransactions.component';

const routes: Routes = [
    	//{ path: 'transaction', component: TransactionComponent },
    	{path: '', component: HomeComponent},
	//{path: 'About', component: AboutComponent},
		
		{ path: 'Wallet', component: WalletComponent},
		
		{ path: 'Account', component: AccountComponent},
		
		{ path: 'WeatherData', component: WeatherDataComponent},
		
		{ path: 'AirPollutionData', component: AirPollutionDataComponent},
		
		{ path: 'WeatherForecast', component: WeatherForecastComponent},
		
		{ path: 'AirQualityData', component: AirQualityDataComponent},

		{ path: 'AllTransactions', component: AllTransactionsComponent },
		
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }