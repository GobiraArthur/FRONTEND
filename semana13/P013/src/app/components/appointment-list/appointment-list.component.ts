import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentDataService } from '../../appointment-data.service'
import { Appointment } from '../../appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
  listaAtendimentos: Appointment[] = [];
  detailShown: string | null = null;

  constructor(private dataService: AppointmentDataService, private rota: Router) { }

  showDetails(id: string) {
    if (!this.detailShown || this.detailShown !== id)
      this.detailShown = id;
    else
      this.detailShown = null;
  }

  editAppointment(id: string) {
    this.rota.navigate(['/editar', id]);
  }

  ngOnInit() {
    // pegando os atendimentos
    this.dataService.getAtendimentos().subscribe(
      {
        next: (response) => {
          for (let key in response) {
            this.listaAtendimentos.push({ ...response[key], id: key});
          }
        },
        error: (error) => {
          console.log(error);
        }
      }
    );

  }




}
