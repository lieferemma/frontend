// package: lieferemma
// file: lieferemma_api.proto

var lieferemma_api_pb = require("./lieferemma_api_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var EndCustomer = (function () {
  function EndCustomer() {}
  EndCustomer.serviceName = "lieferemma.EndCustomer";
  return EndCustomer;
}());

EndCustomer.RegisterCustomerInterest = {
  methodName: "RegisterCustomerInterest",
  service: EndCustomer,
  requestStream: false,
  responseStream: true,
  requestType: lieferemma_api_pb.CustomerInterestRequest,
  responseType: lieferemma_api_pb.MobileShop
};

EndCustomer.PlaceOrder = {
  methodName: "PlaceOrder",
  service: EndCustomer,
  requestStream: false,
  responseStream: false,
  requestType: lieferemma_api_pb.OrderRequest,
  responseType: lieferemma_api_pb.OrderReply
};

EndCustomer.AvailableProducts = {
  methodName: "AvailableProducts",
  service: EndCustomer,
  requestStream: false,
  responseStream: false,
  requestType: lieferemma_api_pb.AvailableProductRequest,
  responseType: lieferemma_api_pb.AvailableProductReply
};

EndCustomer.OrderStatus = {
  methodName: "OrderStatus",
  service: EndCustomer,
  requestStream: false,
  responseStream: false,
  requestType: lieferemma_api_pb.OrderStatusRequest,
  responseType: lieferemma_api_pb.OrderStatusReply
};

exports.EndCustomer = EndCustomer;

function EndCustomerClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

EndCustomerClient.prototype.registerCustomerInterest = function registerCustomerInterest(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(EndCustomer.RegisterCustomerInterest, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

EndCustomerClient.prototype.placeOrder = function placeOrder(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndCustomer.PlaceOrder, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndCustomerClient.prototype.availableProducts = function availableProducts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndCustomer.AvailableProducts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

EndCustomerClient.prototype.orderStatus = function orderStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(EndCustomer.OrderStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.EndCustomerClient = EndCustomerClient;

var Driver = (function () {
  function Driver() {}
  Driver.serviceName = "lieferemma.Driver";
  return Driver;
}());

Driver.GetOrders = {
  methodName: "GetOrders",
  service: Driver,
  requestStream: false,
  responseStream: false,
  requestType: lieferemma_api_pb.GetOrdersRequest,
  responseType: lieferemma_api_pb.GetOrdersReply
};

Driver.GetRoute = {
  methodName: "GetRoute",
  service: Driver,
  requestStream: false,
  responseStream: true,
  requestType: lieferemma_api_pb.GetRouteRequest,
  responseType: lieferemma_api_pb.Route
};

Driver.SendPosition = {
  methodName: "SendPosition",
  service: Driver,
  requestStream: false,
  responseStream: false,
  requestType: lieferemma_api_pb.DriverPosition,
  responseType: lieferemma_api_pb.SendPositionReply
};

Driver.ConfirmOrderDelivery = {
  methodName: "ConfirmOrderDelivery",
  service: Driver,
  requestStream: false,
  responseStream: false,
  requestType: lieferemma_api_pb.ConfirmOrderDeliveryRequest,
  responseType: lieferemma_api_pb.ConfirmOrderDeliveryReply
};

Driver.UpdateDeliveryStatus = {
  methodName: "UpdateDeliveryStatus",
  service: Driver,
  requestStream: false,
  responseStream: false,
  requestType: lieferemma_api_pb.UpdateDeliveryStatusRequest,
  responseType: lieferemma_api_pb.UpdateDeliveryStatusReply
};

exports.Driver = Driver;

function DriverClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

DriverClient.prototype.getOrders = function getOrders(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Driver.GetOrders, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DriverClient.prototype.getRoute = function getRoute(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Driver.GetRoute, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

DriverClient.prototype.sendPosition = function sendPosition(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Driver.SendPosition, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DriverClient.prototype.confirmOrderDelivery = function confirmOrderDelivery(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Driver.ConfirmOrderDelivery, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

DriverClient.prototype.updateDeliveryStatus = function updateDeliveryStatus(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Driver.UpdateDeliveryStatus, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.DriverClient = DriverClient;

