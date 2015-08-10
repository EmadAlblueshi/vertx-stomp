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

package io.vertx.groovy.ext.stomp;
import groovy.transform.CompileStatic
import io.vertx.lang.groovy.InternalHelper
import io.vertx.ext.stomp.Frame
/**
 * Handler called by {@link io.vertx.ext.stomp.impl.FrameParser} when a STOMP frame has been parsed. STOMP client and
 * server use specialized versions passing the associated STOMP connection.
*/
@CompileStatic
public class FrameHandler {
  private final def io.vertx.ext.stomp.FrameHandler delegate;
  public FrameHandler(Object delegate) {
    this.delegate = (io.vertx.ext.stomp.FrameHandler) delegate;
  }
  public Object getDelegate() {
    return delegate;
  }
  public void onFrame(Map<String, Object> frame = [:]) {
    this.delegate.onFrame(frame != null ? new io.vertx.ext.stomp.Frame(new io.vertx.core.json.JsonObject(frame)) : null);
  }
}
