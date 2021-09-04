import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { IonicModule } from '@ionic/angular';
import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderStatusBadgeComponent } from './order-status-badge/order-status-badge.component';
import { UserCardComponent } from './user-card/user-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LoadingComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
    MonthlySalesChartComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    NavbarComponent,
    LoadingComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
    MonthlySalesChartComponent,
    UserCardComponent,
  ]
})
export class ComponentsModule { }
