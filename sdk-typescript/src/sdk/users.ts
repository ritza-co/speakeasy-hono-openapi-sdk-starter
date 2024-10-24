/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersGetUsers } from "../funcs/usersGetUsers.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Users extends ClientSDK {
  async getUsers(
    options?: RequestOptions,
  ): Promise<Array<components.UserSelect>> {
    return unwrapAsync(usersGetUsers(
      this,
      options,
    ));
  }
}