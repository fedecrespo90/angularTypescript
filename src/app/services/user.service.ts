// module app.services {
//   'use strict';
//
//   export interface IUserService {
//     getById(id: string): ng.IPromise<IUser>;
//   }
//   export interface IUser {
//     id: string;
//     email: string;
//     password: string;
//     roles: string[];
//     socialNetworks: ISocialNetwork[];
//   }
//
//   export interface ISocialNetwork {
//     name: string;
//     username: string;
//   }
//
//   class UserService implements IUserService {
//       static $inject = ['http'];
//       constructor(private $http: ng.IHttpService) {
//         return this.$http.get('api/users/'+id)
//         .then((response: ng.IHttpPromiseCallbackArg<IUser>): IUser => {
//           return response.data;
//         });
//       }
//       getById(id: string): ng.IPromise<IUser> {
//
//       }
//   }
//   angular
//     .module('app.services')
//     .service('app.services.UserService', UserService);
// }
