import { Query, Resolver } from "@nestjs/graphql";
import { User } from "./graphql";

@Resolver('User')
export class UserResolver {
  @Query(() => [User], { name: 'users' })
  users() {
    return [{ name: 'Tom' }]
  }
}