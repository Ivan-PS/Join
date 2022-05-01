# ng-mqtt
This MQTT-Service/Wrapper is a library for Angular 10.

## installation
`npm i @denherrring/ng-mqtt --save`

## Usage
```
import { Observable } from 'rxjs';

import {
  IMqttMessage,
  MqttModule,
  IMqttServiceOptions
} from 'ngx-mqtt';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 9001,
  path: '/mqtt'
};

@NgModule({
  imports: [
    ...
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS)
  ]
  ...
})

export class AppModule { }

@Component({
  template: `
    <h1></h1>
  `
})
export class ExampleComponent implements OnDestroy {
  private subscription: Subscription;
  public message: string;

  constructor(private _mqttService: MqttService) {
    this.subscription = this._mqttService.observe('my/topic').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
```

### Based on 
This Project based on [ngx-mqtt](https://github.com/sclausen/ngx-mqtt).
