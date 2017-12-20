import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Inject } from '@angular/core';
import { Http } from '@angular/http/src/http';
import { RouterModule, Routes } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core'; 


@Pipe({
    name: 'myfilter',
    pure: false
})  

/*export class MyFilterPipe implements PipeTransform {
    transform(Products: any, filter: Product): any {
        if (!Products || !filter) {
            return Products;
        }
        //return Products.filter(Product => Products.productName.indexOf(filter.productName) !== -1);
    } 
}*/

export class Product {
    productID: number;
    productName: string;
    productPrice: number;
    productStock: number;
    productCategory: string;
    productTag: string;
}  