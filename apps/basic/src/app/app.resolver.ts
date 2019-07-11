import { Controller } from '@nestjs/common';
import {
  Mutation,
  Parent,
  Query,
  ResolveProperty,
  Resolver,
  Args,
  Info
} from '@nestjs/graphql';
import { ClientOptions, GrpcMethod, Transport } from '@nestjs/microservices';
import { Int64, Magnus, Query as MagnusQuery } from '@notadd/magnus-core';
import { join } from 'path';
import { from, Observable } from 'rxjs';
import { mapTo, filter } from 'rxjs/operators';
export class User {
  username: string;
}
/**
@Magnus({
  entities: [
    User
  ]
})

export class DemoMagnus<T>{
  rep: Repository<T>
  @MagnusQuery({
    entities: [
      User
    ]
  })
  get(): Promise<T> {
    return this.rep.findOne()
  }

  @MagnusQuery({
    entities: []
  })
  add() { }

  @MagnusQuery()
  add1() { }
}
*/

export interface Author {
  username: string;
  password?: string;
  id?: Int64;
}

export interface Post {
  title: string;
  desc?: string;
}
export interface User {
  name: string;
  password: string;
  id: Int64;
}
export interface InputStr {
  value: string;
}

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'magnus',
    protoPath: join(__dirname, './assets/magnus/magnus.proto')
  }
};

@Resolver(`Author`)
@Controller()
export class DemoResolver {
  /**
   * 获取作者
   * @param username 用户名
   */
  @Query()
  async getAuthor(@Args('username') username: string): Promise<Author> {
    return {
      username: `${username}`
    };
  }

  /**
   * 添加作者
   * @param username 作者名
   */
  @Mutation()
  async addAuthor(username: string): Promise<boolean> {
    return true;
  }

  /**
   * 删除作者
   */
  @Mutation()
  async deleteAuthor(@Args('username') username: string): Promise<string> {
    return '删除成功!';
  }
  /**
   * 修改作者
   * @param username
   */
  @Mutation()
  async updateAuthor(@Args('id') id: number): Promise<boolean> {
    return true;
  }

  /**
   * 作者发布的文章
   * @param author 作者
   */
  @ResolveProperty()
  async posts(@Parent() author: Author): Promise<Post[]> {
    return [];
  }

  /**
   * 添加文章
   */
  @Mutation()
  async addPost(@Args() title: string): Promise<string> {
    return '添加成功!';
  }
  @Mutation()
  async deletePost(@Args('id') id: number): Promise<string> {
    return '删除成功!';
  }

  async testWaWa(str: InputStr): Promise<InputStr> {
    return Promise.resolve(str);
  }

  @GrpcMethod(`MagnusServer`)
  findHelloWorld(str: InputStr): Observable<InputStr> {
    return from(this.testWaWa(str))
      .pipe(mapTo({ value: 'success' }))
      .pipe(filter(res => res.value === 'success'));
  }

  @GrpcMethod(`MagnusServer`)
  async findOne(): Promise<Author> {
    return {
      username: 'username'
    };
  }

  @GrpcMethod()
  async findTwo(): Promise<Author> {
    return {
      username: 'username'
    };
  }
  /**
   * Mutation createUser(){
   *  createUser(){
   *    code
   *    message
   *    data
   *  }
   * }
   *
   * Mutation createUser($user: string){
   *  createUser(user: $user){
   *    code
   *    message
   *    data
   *  }
   * }
   *
   * variables{
   *  user: 'user'
   * }
   *
   * Mutation createUser($user: User){
   *  createUser(user: $user){
   *    code
   *    message
   *    data
   *  }
   * }
   *
   * variables{
   *  user: {
   *  username:'username'
   * }
   * }
   * @param name
   * @param password
   */
  @Mutation()
  async createUser(@Args('user') user: string): Promise<string> {
    return '';
  }
}
