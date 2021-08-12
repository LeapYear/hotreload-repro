
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class User {
    name: string;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;
}

type Nullable<T> = T | null;
