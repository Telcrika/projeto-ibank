import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  numeroConta = '';
  numeroTransferencia = '';
  transferirValor = '';
  saldo = '';

  constructor() { }

  ngOnInit(): void {
  }
  confirmarDados(){
    console.log ('Babú perdeu o Big Brother');
    /*this.http.post("http://localhost:57434/api/clientes/login", {
      Conta: this.numeroConta,
      transferencia: this.numeroTransferencia,
      valor: this.transferirValor
    }).subscribe((dados: any)=>{
      this.cliente = dados;
      console.log(this.cliente)
    });*/
     
    

  }

  valorInput = document.getElementById("valorInput");
  
  

  digitouNumero($event){
    this.numeroConta = $event.target.value;
    console.log($event.target.value);
  }

  digitouTransferencia($event){
    this.numeroTransferencia = $event.target.value;
    console.log($event.target.value);
  }

  digitouValor($event){
    this.transferirValor = $event.target.value;
    console.log($event.target.value);
  }

  transacaoUsuario() {
    var saldo = 500;
    
    var transferirValor = 300;
    var novoSaldo = saldo - transferirValor;
    console.log("seu novo saldo e: ",novoSaldo);
    alert ("A sua transferência foi feita com sucesso!")

   
 }

  



  

}



