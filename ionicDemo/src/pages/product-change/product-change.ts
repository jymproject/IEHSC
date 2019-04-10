import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';

/**
 * Generated class for the ProductChangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-change',
  templateUrl: 'product-change.html',
})
export class ProductChangePage {
  BatchNoList: any;
  batchNo: string;
  shifId: string;
  deciveNo: string;
  MaterNo: string;
  ProductQty: string;
  objid: any;
  userName: string;
  constructor(public appService: AppService, public navCtrl: NavController, public navParams: NavParams) {
    this.getBatchNoFromDb();
    this.userName = this.navParams.data.userNamePar;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductChangePage');
  }
  getBatchNoFromDb() {
    this.appService.httpGet(AppGlobal.API.getBatchNoFromDb, null, rs => {
      if (rs != "" && rs != "[]") {
        this.BatchNoList = rs;
      }
    });
  }
  query() {
    if (this.batchNo == null) { this.appService.toast('请选择生产批次'); }
    if (this.shifId == null) { this.appService.toast('请选择生产班组'); }
    if (this.deciveNo == null) { this.appService.toast('请选择生产机台'); }
    else {
      var _that = this;
      this.appService.httpPost(AppGlobal.API.queryInfo, {
        BatchNo: this.batchNo,
        ShiftId: this.shifId,
        DeciveNo: this.deciveNo
      }, rs => {
        if (rs != "" && rs != "[]") {
          this.MaterNo = rs.MaterNo;
          this.ProductQty = rs.ProductQty;
          this.objid = rs.Obj_id;
        } else { this.objid = 0; _that.appService.toast('查询出错，请联系管理员！'); }
      });
    }
  }

  exchange() {
    if (this.objid == "0" || this.objid == null) {
      this.appService.toast('未获取到OBJID，请联系管理员');
    }
    else {
      var _that = this;
      // this.appService.httpPost(AppGlobal.API.updateBatch, { Objid: this.objid, UserName: this.userName }, rs => {
      //   _that.appService.toast(rs);
      // }); 
      this.appService.httpPost(AppGlobal.API.updateBatch, {
        //BatchNo: 123321,
        //
        //User_Name: this.userName

        Obj_id: this.objid,
        User_Name: this.userName

      }, rs => {
        _that.appService.toast(rs);
      });
    }

  }

}
