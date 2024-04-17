import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare const activepieces:any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    activepieces.configure( {
      prefix: "/",
      instanceUrl:'http://localhost:4200',
      jwtToken:"yourtoken",
      embedding: {
        containerId: "container",
        builder:{
          disableNavigation:false,
          hideLogo: false,
          hideFlowName: false
        },
        dashboard: {
          hideSidebar:false
        },
        hideFolders:false,
        navigation:{
          handler: (route:{route:string}) => {
            console.log(route)
            window.history.pushState({}, document.title, "http://localhost:1234" + route.route);
          }
        }
      },   
   })
  }
connect() {
  activepieces.connect({pieceName:'@activepieces/piece-figma'}).then((res:any)=>{
    console.log(res);
  });
}  
navigate() 
{
  activepieces.navigate({route: '/runs'});
}
}
