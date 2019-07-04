import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { TodoService } from '../servicios/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import {AlertController} from '@ionic/angular'
@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  todo: TaskI = {
    oferta: '',
    invocador: '',
    correo: ''
  };

  todoId = '';

  constructor(private route: ActivatedRoute, private nav: NavController, 
    private todoService: TodoService, private loadingController: LoadingController,
    public alertc: AlertController) { }

  ngOnInit() {
  }

  async compra() {
    const loading = await this.loadingController.create({
      message: 'Guardando.....'
    });
    await loading.present();

      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        alert('pedido realizado con exito');
      });
    
  }

  async onRemove(){
    const loading = await this.loadingController.create({
      message: 'Borrando.....'
    });
    await loading.present();

    this.todoService.removeTodo(this.todoId);
    loading.dismiss();
    alert('Se ha borrado la compra');
    console.log(this.todoId);
  }

  
}
