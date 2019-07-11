import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  Client,
  ClientGrpc,
  ClientOptions,
  Transport
} from '@nestjs/microservices';
import { join } from 'path';
import { Observable } from 'rxjs';
import { Author, InputStr } from './app.resolver';
import { mapTo, map } from 'rxjs/operators';

export interface MagnusServer {
  findHelloWorld(str: InputStr): Observable<InputStr>;
  findOne({}): Observable<Author>;
}

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'magnus',
    protoPath: join(__dirname, './assets/magnus/magnus.proto')
  }
};

@Resolver('Client')
export class MagnusGrpcClient {
  private magnusServer: MagnusServer;

  @Client(grpcClientOptions)
  private readonly client: ClientGrpc;

  onModuleInit() {
    this.magnusServer = this.client.getService<MagnusServer>('MagnusServer');
  }

  @Query()
  findHelloWorld(@Args('str') str: InputStr): Observable<InputStr> {
    const result = this.magnusServer.findHelloWorld(str);
    result.subscribe(res => {
      console.log(res.value);
    });
    return result;
  }

  @Query()
  findOne(): Observable<Author> {
    const result = this.magnusServer.findOne({});
    return result;
  }
}
