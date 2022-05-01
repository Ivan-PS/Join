import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MqttModule, IMqttServiceOptions, IMqttMessage } from "ngx-mqtt";
import { Geolocation } from '@ionic-native/geolocation/ngx';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'arpa.ite2002.net',
  port: 1883,
  path: '',
  protocol: 'ws'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  HttpClientModule],
  providers: [Geolocation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy } ],
  bootstrap: [AppComponent],
})
export class AppModule {}
