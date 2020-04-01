// package: lieferemma
// file: lieferemma_api.proto

import * as lieferemma_api_pb from "./lieferemma_api_pb";
import {grpc} from "@improbable-eng/grpc-web";

type EndCustomerRegisterCustomerInterest = {
  readonly methodName: string;
  readonly service: typeof EndCustomer;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof lieferemma_api_pb.CustomerInterestRequest;
  readonly responseType: typeof lieferemma_api_pb.MobileShop;
};

type EndCustomerPlaceOrder = {
  readonly methodName: string;
  readonly service: typeof EndCustomer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof lieferemma_api_pb.OrderRequest;
  readonly responseType: typeof lieferemma_api_pb.OrderReply;
};

type EndCustomerAvailableProducts = {
  readonly methodName: string;
  readonly service: typeof EndCustomer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof lieferemma_api_pb.AvailableProductRequest;
  readonly responseType: typeof lieferemma_api_pb.AvailableProductReply;
};

type EndCustomerOrderStatus = {
  readonly methodName: string;
  readonly service: typeof EndCustomer;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof lieferemma_api_pb.OrderStatusRequest;
  readonly responseType: typeof lieferemma_api_pb.OrderStatusReply;
};

export class EndCustomer {
  static readonly serviceName: string;
  static readonly RegisterCustomerInterest: EndCustomerRegisterCustomerInterest;
  static readonly PlaceOrder: EndCustomerPlaceOrder;
  static readonly AvailableProducts: EndCustomerAvailableProducts;
  static readonly OrderStatus: EndCustomerOrderStatus;
}

type DriverGetOrders = {
  readonly methodName: string;
  readonly service: typeof Driver;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof lieferemma_api_pb.GetOrdersRequest;
  readonly responseType: typeof lieferemma_api_pb.GetOrdersReply;
};

type DriverGetRoute = {
  readonly methodName: string;
  readonly service: typeof Driver;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof lieferemma_api_pb.GetRouteRequest;
  readonly responseType: typeof lieferemma_api_pb.Route;
};

type DriverSendPosition = {
  readonly methodName: string;
  readonly service: typeof Driver;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof lieferemma_api_pb.DriverPosition;
  readonly responseType: typeof lieferemma_api_pb.SendPositionReply;
};

type DriverConfirmOrderDelivery = {
  readonly methodName: string;
  readonly service: typeof Driver;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof lieferemma_api_pb.ConfirmOrderDeliveryRequest;
  readonly responseType: typeof lieferemma_api_pb.ConfirmOrderDeliveryReply;
};

type DriverUpdateDeliveryStatus = {
  readonly methodName: string;
  readonly service: typeof Driver;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof lieferemma_api_pb.UpdateDeliveryStatusRequest;
  readonly responseType: typeof lieferemma_api_pb.UpdateDeliveryStatusReply;
};

export class Driver {
  static readonly serviceName: string;
  static readonly GetOrders: DriverGetOrders;
  static readonly GetRoute: DriverGetRoute;
  static readonly SendPosition: DriverSendPosition;
  static readonly ConfirmOrderDelivery: DriverConfirmOrderDelivery;
  static readonly UpdateDeliveryStatus: DriverUpdateDeliveryStatus;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class EndCustomerClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  registerCustomerInterest(requestMessage: lieferemma_api_pb.CustomerInterestRequest, metadata?: grpc.Metadata): ResponseStream<lieferemma_api_pb.MobileShop>;
  placeOrder(
    requestMessage: lieferemma_api_pb.OrderRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.OrderReply|null) => void
  ): UnaryResponse;
  placeOrder(
    requestMessage: lieferemma_api_pb.OrderRequest,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.OrderReply|null) => void
  ): UnaryResponse;
  availableProducts(
    requestMessage: lieferemma_api_pb.AvailableProductRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.AvailableProductReply|null) => void
  ): UnaryResponse;
  availableProducts(
    requestMessage: lieferemma_api_pb.AvailableProductRequest,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.AvailableProductReply|null) => void
  ): UnaryResponse;
  orderStatus(
    requestMessage: lieferemma_api_pb.OrderStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.OrderStatusReply|null) => void
  ): UnaryResponse;
  orderStatus(
    requestMessage: lieferemma_api_pb.OrderStatusRequest,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.OrderStatusReply|null) => void
  ): UnaryResponse;
}

export class DriverClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getOrders(
    requestMessage: lieferemma_api_pb.GetOrdersRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.GetOrdersReply|null) => void
  ): UnaryResponse;
  getOrders(
    requestMessage: lieferemma_api_pb.GetOrdersRequest,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.GetOrdersReply|null) => void
  ): UnaryResponse;
  getRoute(requestMessage: lieferemma_api_pb.GetRouteRequest, metadata?: grpc.Metadata): ResponseStream<lieferemma_api_pb.Route>;
  sendPosition(
    requestMessage: lieferemma_api_pb.DriverPosition,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.SendPositionReply|null) => void
  ): UnaryResponse;
  sendPosition(
    requestMessage: lieferemma_api_pb.DriverPosition,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.SendPositionReply|null) => void
  ): UnaryResponse;
  confirmOrderDelivery(
    requestMessage: lieferemma_api_pb.ConfirmOrderDeliveryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.ConfirmOrderDeliveryReply|null) => void
  ): UnaryResponse;
  confirmOrderDelivery(
    requestMessage: lieferemma_api_pb.ConfirmOrderDeliveryRequest,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.ConfirmOrderDeliveryReply|null) => void
  ): UnaryResponse;
  updateDeliveryStatus(
    requestMessage: lieferemma_api_pb.UpdateDeliveryStatusRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.UpdateDeliveryStatusReply|null) => void
  ): UnaryResponse;
  updateDeliveryStatus(
    requestMessage: lieferemma_api_pb.UpdateDeliveryStatusRequest,
    callback: (error: ServiceError|null, responseMessage: lieferemma_api_pb.UpdateDeliveryStatusReply|null) => void
  ): UnaryResponse;
}

