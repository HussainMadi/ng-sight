import { Routes } from '@angular/router';
import { SectionSalesComponent } from './app/sections/section-sales/section-sales.Component';
import { SectionOrdersComponent } from './app/sections/section-orders/section-orders.Component';
import { SectionHealthComponent } from './app/sections/section-health/section-health.Component';
export const appRoutes: Routes =[
    {path :'sales', component: SectionSalesComponent},
    {path :'orders', component: SectionOrdersComponent},
    {path :'health', component: SectionHealthComponent},
    {path : '', redirectTo: '/sales',pathMatch: 'full'},


];
