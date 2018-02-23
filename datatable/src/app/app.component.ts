import { Component } from '@angular/core';
import * as workerPath from "file-loader?name=[name].js!./web.worker.table";
declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){
    $(document).ready(()=> {
       let oTable=$('#example').DataTable({
          dom: 'Bfrtip',
          buttons: [
              'copyHtml5',
              'excelHtml5',
              'csvHtml5',
              'pdfHtml5'
          ],
            "ajax": '../assets/data/table.json'
        });
        $('#example').on( 'click', 'tbody td:not(:first-child)', function (e) {
          console.log( oTable.cell( this ).data() );
          console.log($(e.target).attr({"contenteditable":true}))
        } );
        $('#example').on( 'blur', 'tbody td:not(:first-child)', function (e) {
          oTable.cell( this ).data($(e.target).text())
          console.log($(e.target).attr({"contenteditable":false}))
        } );
        //this.initWebWorker();
    });
  }
  initWebWorker(){
    const worker = new Worker(workerPath);
    console.log(workerPath, worker);
    worker.onmessage=(e)=> {
        console.log('hello from a webworker');
    };
    worker.postMessage('Send Message to worker');
  }
}
