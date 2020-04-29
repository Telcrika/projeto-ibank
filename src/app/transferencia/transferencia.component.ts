import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  numeroConta = '';
  numeroTransferencia = '';
  valorTransferencia ='';
  

  cliente = {};
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  confirmarDados(){
    console.log ('Babú perdeu o Big Brother');
    this.http.post("https://ibank20200429031242.azurewebsites.net/api/transfers", {
      IdCliente: this.numeroConta,
      IdDestinatario: this.numeroTransferencia,
      ValorDeposito:this.valorTransferencia
      
    });
     
    

  }

 
  
  

  digitouNumero($event){
    this.numeroConta = $event.target.value;
    console.log($event.target.value);
  }

  digitouTransferencia($event){
    this.numeroTransferencia = $event.target.value;
     
    
  }

  digitouValor($event){
    this.valorTransferencia = $event.target.value;
    
  }

 
  



  

}



