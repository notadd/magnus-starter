import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DemoResolver } from './app.resolver';
import { MagnusNest } from '@notadd/magnus-nest';
import { join } from 'path';
//import { LoggerModule } from '@nestcloud/logger';
import { MagnusGrpcClient } from './client.resolver';
@Module({
  imports: [
    MagnusNest,
    // LoggerModule.register(),
    GraphQLModule.forRoot({
      typePaths: [join(__dirname, 'assets/magnus/magnus.graphql')],
      installSubscriptionHandlers: true
    })
  ],
  controllers: [DemoResolver],
  providers: [DemoResolver, MagnusGrpcClient]
})
export class AppModule {}
