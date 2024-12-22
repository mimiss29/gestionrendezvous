import { Component, OnInit } from '@angular/core';
import { RendezvousService } from '../services/rv/rendezvous.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rendezvous-details',
  templateUrl: './rendezvous-details.component.html',
  styleUrls: ['./rendezvous-details.component.css']
})
export class RendezvousDetailsComponent implements OnInit {
  rendezvous: any;

  constructor(private route: ActivatedRoute, private rendezvousService: RendezvousService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rendezvousService.getRendezvousById(id).subscribe(data => {
        this.rendezvous = data;
      });
    }
  }
}