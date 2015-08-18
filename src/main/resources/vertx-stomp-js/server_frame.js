/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-stomp-js/server_frame */
var utils = require('vertx-js/util/utils');
var StompServerConnection = require('vertx-stomp-js/stomp_server_connection');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JServerFrame = io.vertx.ext.stomp.ServerFrame;
var Frame = io.vertx.ext.stomp.Frame;

/**

 @class
*/
var ServerFrame = function(j_val) {

  var j_serverFrame = j_val;
  var that = this;

  /**
   @return the received frame

   @public

   @return {Object}
   */
  this.frame = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnDataObject(j_serverFrame["frame()"]());
    } else utils.invalidArgs();
  };

  /**
   @return the connection

   @public

   @return {StompServerConnection}
   */
  this.connection = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(j_serverFrame["connection()"](), StompServerConnection);
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_serverFrame;
};

// We export the Constructor function
module.exports = ServerFrame;