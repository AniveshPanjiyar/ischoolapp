export class studentFeeDetails  
 {
    student_bills:studentBills;
    receipts:paymentReceipt;
    payable_amount:paymentDue;

    
  
}


export class studentBills 
{
    fee_slip_id:String;
    amount :Number;
    inst_name: String;
    installment_nos: Number;
    bill_date: Date;
    fee_type: String;
    sub_session:String;

 
}

export class paymentReceipt
{
    bill_id:String;
    receipt_id :String;
    inst_name: String;
    installment_nos: Number;
    payment_no: Number;
    paid_amount : Number;
    paymentdate: Date;
    cheque_id :Number;
    check_entry_id: Number;
    sub_session:String;
    payment_mode:String;
   
}
export class paymentDue{
    fee_slip_id:String;
    due_amount: Number;

  
 
}

