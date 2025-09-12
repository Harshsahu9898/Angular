import { Component,signal,Signal, WritableSignal,computed} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data= signal<number | string>(10);
  // data : WritableSignal<number | string> = signal(10);
  count : Signal<number | string> = computed(()=>200);

  updateSignal(){
    this.data.set("hello");
    // this.data.update((val)=>val+1); // only works if signal value or datatype is present and not works with multiple datatypes because it is static and view only
    
  }
}
