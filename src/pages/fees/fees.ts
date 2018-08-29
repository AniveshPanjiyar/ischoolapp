import { Component } from '@angular/core';
import { Http,Response } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicPage, NavController,LoadingController, NavParams,Platform } from 'ionic-angular';
import { FeeService} from './feeservice';
import { studentFeeDetails } from './feemodel';



/**
 * Generated class for the FeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fees',
  templateUrl: 'fees.html',
})
export class FeesPage {
  fee_detail:studentFeeDetails;
  billdetail;paymentdetail;payment_due;bill_ids
  studentdetail;
  paidamounts;
checksum; payment_status;
client_id;call_back_url;pay_var;url_static_var;payment_url;
  
  constructor(public navCtrl: NavController, public platform: Platform,public navParams: NavParams,public http:Http, public fees_service : FeeService,public iab: InAppBrowser,public loadingCtrl: LoadingController)
   {  this.client_id=localStorage.client_id;
    this.call_back_url='http://'+localStorage.code_url+'/include/PaytmKit/verifyChecksum.php';
    this.url_static_var="MID=CeonSo44014435746619&CHANNEL_ID=WAP&INDUSTRY_TYPE_ID=Retail&WEBSITE=APPSTAGING";
    this.payment_url="https://securegw-stage.paytm.in/theia/processTransaction?"+this.url_static_var;
    
    this.studentdetail=JSON.parse(localStorage.getItem('studentdetail'))
    
    this.fee_details();
    
  }

  fee_details()
  {
    let loading = this.loadingCtrl.create({content: 'Please wait...'});
    loading.present();
    this.fees_service.getStudentFeeReceipt().subscribe(data=>{this.fee_detail=data; 
      this.billdetail=data.student_bills;
      this.payment_due=data.payable_amount;
      this.paymentdetail=data.receipts;
      this.bill_ids=  Object.keys(data.receipts).map(key => {return key});
         
      console.log(this.paymentdetail);
      console.log(this.bill_ids)
      console.log(this.fee_detail)
    },error=>{
      if(error.status==0){
          setTimeout(() => {
              loading.dismiss();
              alert("Connection error...");
            }, 5000);
          
      }else{
      loading.dismiss();
      console.log("No Details");}
  },()=>loading.dismiss())
     }

     paytmfee(bill_id,amount)
     { 
       return  this.http.post(localStorage.urlpath+'paytmchecksum',{
        "client":localStorage.client_id,
        "ORDER_ID" : bill_id,
        "CUST_ID" : localStorage.client_id,
        "TXN_AMOUNT" : amount,
        "CHANNEL_ID": "WAP",
          }).map(res => res.json()).subscribe(data => 
          { this.checksum=data;
            var payment_variables='&ORDER_ID='+bill_id+'&CUST_ID='+localStorage.client_id+'&TXN_AMOUNT='+amount+'&CHECKSUMHASH='+this.checksum+'&CALLBACK_URL='+this.call_back_url;
 
            console.log(this.checksum);
            this.paytmTransactionUrl(bill_id,amount);
        },error=>{
          console.log(error);
        });

     }
     
     
  paytmTransactionUrl(bill_id,amount)
  { 
     // window.open("https://securegw-stage.paytm.in/theia/processTransaction?MID=CeonSo44014435746619&CHANNEL_ID=WAP&INDUSTRY_TYPE_ID=Retail&WEBSITE=APPSTAGING"+pay_var,'_blank');
     var pageContent = '<html><head></head><body><form id="frmTransaction" action="https://securegw-stage.paytm.in/theia/processTransaction" method="post">' +
     '<input type="hidden" name="ORDER_ID" value="' + bill_id + '">' +
     '<input type="hidden" name="CUST_ID" value="' + localStorage.client_id + '">' +
     '<input type="hidden" name="TXN_AMOUNT" value="' + amount + '">' +
     '<input type="hidden" name="CHECKSUMHASH" value="' + this.checksum + '">' +
     '<input type="hidden" name="CALLBACK_URL" value="' + this.call_back_url + '">' +

     '<input type="hidden" name="MID" value="' + 'CeonSo44014435746619' + '">' +
     '<input type="hidden" name="CHANNEL_ID" value="' + 'WAP' + '">' +
     '<input type="hidden" name="WEBSITE" value="' + 'APPSTAGING' + '">' +
     '<input type="hidden" name="INDUSTRY_TYPE_ID" value="' + 'Retail' + '">' +

     '</form> <script type="text/javascript">document.getElementById("frmTransaction").submit();</script></body></html>';
     var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);

     var browserRef = this.iab.create( pageContentUrl , "_new",    
       "hidden=no,location=no,clearsessioncache=yes,clearcache=yes"
      );
 

}    

paytmTransactionUrl2(payment_variables)
{ 
 this.iab.create(this.payment_url+payment_variables,'_blank');
}
paytmTransactionUrl3(bill_id,amount)
{ 
  return  this.http.post('https://cryptic-headland-94862.herokuapp.com/https://securegw-stage.paytm.in/theia/processTransaction',{
    "MID":"CeonSo44014435746619",
   "ORDER_ID":bill_id,
   "CUST_ID":localStorage.client_id,
   "TXN_AMOUNT":amount,
   "CHANNEL_ID":"WAP",
   "INDUSTRY_TYPE_ID":"Retail",
   "WEBSITE":"APP_STAGING",
   "CALLBACK_URL":'http://'+localStorage.code_url+'/include/PaytmKit/pgResponse.php',
   "CHECKSUMHASH":this.checksum,
   }).map(res => res.json()).subscribe(data => 
     { this.payment_status=data;
   },error=>{
    console.log(error);
  });

}  
  
   
   
   

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeesPage');
  }

}
