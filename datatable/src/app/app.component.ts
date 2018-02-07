import { Component } from '@angular/core';
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
    $(document).ready(function() {
        $('#example').DataTable( {
            "ajax": '../assets/data/table.json'
        } );
    });
  }
}
