import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';
import { Platform, Tabs, NavParams } from 'ionic-angular';
import { NewPage } from '../new/new';
import { ProductChangePage } from '../product-change/product-change';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    public receive: any;
    categories: Array<any> = [];
    //依赖注入
    constructor(public appService: AppService, public navCtrl: NavController, public navparam: NavParams) {
        this.getCategories();
        this.receive = navparam;
    }
    //获取分类
    getCategories() {
        this.appService.httpGet(AppGlobal.API.getCategories, null, rs => {
            this.categories = rs;
        })
    }
    //点击跳转页面
    goCategoryList(item) {
        switch (item.Id) {
            case 1:
                this.navCtrl.push(ProductChangePage, this.receive);
                break;
            default:
                break;
        }

    }
}
