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
        $('#example').DataTable( {
            "ajax": '../assets/data/table.json'
        } );
        this.initWebWorker();
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
