// package: lieferemma
// file: lieferemma_api.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Position extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    latitude: number,
    longitude: number,
  }
}

export class CustomerInterestRequest extends jspb.Message {
  hasPositionOfInterest(): boolean;
  clearPositionOfInterest(): void;
  getPositionOfInterest(): Position | undefined;
  setPositionOfInterest(value?: Position): void;

  getRadiusInMeter(): number;
  setRadiusInMeter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerInterestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerInterestRequest): CustomerInterestRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerInterestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerInterestRequest;
  static deserializeBinaryFromReader(message: CustomerInterestRequest, reader: jspb.BinaryReader): CustomerInterestRequest;
}

export namespace CustomerInterestRequest {
  export type AsObject = {
    positionOfInterest?: Position.AsObject,
    radiusInMeter: number,
  }
}

export class DeliveryPoint extends jspb.Message {
  getDeliveryPointUuid(): string;
  setDeliveryPointUuid(value: string): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Position | undefined;
  setPosition(value?: Position): void;

  hasScheduledTime(): boolean;
  clearScheduledTime(): void;
  getScheduledTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setScheduledTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasDepartureTime(): boolean;
  clearDepartureTime(): void;
  getDepartureTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDepartureTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliveryPoint.AsObject;
  static toObject(includeInstance: boolean, msg: DeliveryPoint): DeliveryPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeliveryPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliveryPoint;
  static deserializeBinaryFromReader(message: DeliveryPoint, reader: jspb.BinaryReader): DeliveryPoint;
}

export namespace DeliveryPoint {
  export type AsObject = {
    deliveryPointUuid: string,
    position?: Position.AsObject,
    scheduledTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    departureTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Route extends jspb.Message {
  getRouteUuid(): string;
  setRouteUuid(value: string): void;

  clearDeliveryPointsList(): void;
  getDeliveryPointsList(): Array<DeliveryPoint>;
  setDeliveryPointsList(value: Array<DeliveryPoint>): void;
  addDeliveryPoints(value?: DeliveryPoint, index?: number): DeliveryPoint;

  clearRoutePointsList(): void;
  getRoutePointsList(): Array<Position>;
  setRoutePointsList(value: Array<Position>): void;
  addRoutePoints(value?: Position, index?: number): Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Route.AsObject;
  static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Route;
  static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
}

export namespace Route {
  export type AsObject = {
    routeUuid: string,
    deliveryPointsList: Array<DeliveryPoint.AsObject>,
    routePointsList: Array<Position.AsObject>,
  }
}

export class MobileShop extends jspb.Message {
  getMobileShopUuid(): string;
  setMobileShopUuid(value: string): void;

  getImageUrl(): string;
  setImageUrl(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  hasCurrentPosition(): boolean;
  clearCurrentPosition(): void;
  getCurrentPosition(): Position | undefined;
  setCurrentPosition(value?: Position): void;

  hasLastSeen(): boolean;
  clearLastSeen(): void;
  getLastSeen(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeen(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCurrentDeliveryPoint(): boolean;
  clearCurrentDeliveryPoint(): void;
  getCurrentDeliveryPoint(): DeliveryPoint | undefined;
  setCurrentDeliveryPoint(value?: DeliveryPoint): void;

  hasNextDeliveryPoint(): boolean;
  clearNextDeliveryPoint(): void;
  getNextDeliveryPoint(): DeliveryPoint | undefined;
  setNextDeliveryPoint(value?: DeliveryPoint): void;

  getDeliveryStatus(): DeliveryStatusMap[keyof DeliveryStatusMap];
  setDeliveryStatus(value: DeliveryStatusMap[keyof DeliveryStatusMap]): void;

  getNextDeliveryPointEta(): number;
  setNextDeliveryPointEta(value: number): void;

  getPickUpDeliveryPointEta(): number;
  setPickUpDeliveryPointEta(value: number): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): Route | undefined;
  setRoute(value?: Route): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileShop.AsObject;
  static toObject(includeInstance: boolean, msg: MobileShop): MobileShop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileShop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileShop;
  static deserializeBinaryFromReader(message: MobileShop, reader: jspb.BinaryReader): MobileShop;
}

export namespace MobileShop {
  export type AsObject = {
    mobileShopUuid: string,
    imageUrl: string,
    title: string,
    currentPosition?: Position.AsObject,
    lastSeen?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    currentDeliveryPoint?: DeliveryPoint.AsObject,
    nextDeliveryPoint?: DeliveryPoint.AsObject,
    deliveryStatus: DeliveryStatusMap[keyof DeliveryStatusMap],
    nextDeliveryPointEta: number,
    pickUpDeliveryPointEta: number,
    route?: Route.AsObject,
  }
}

export class Product extends jspb.Message {
  getProductUuid(): string;
  setProductUuid(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getCurrency(): CurrencyMap[keyof CurrencyMap];
  setCurrency(value: CurrencyMap[keyof CurrencyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Product.AsObject;
  static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Product;
  static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
  export type AsObject = {
    productUuid: string,
    title: string,
    description: string,
    url: string,
    price: number,
    currency: CurrencyMap[keyof CurrencyMap],
  }
}

export class DeliveryProduct extends jspb.Message {
  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): Product | undefined;
  setProduct(value?: Product): void;

  getQuantityAvailable(): number;
  setQuantityAvailable(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeliveryProduct.AsObject;
  static toObject(includeInstance: boolean, msg: DeliveryProduct): DeliveryProduct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeliveryProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeliveryProduct;
  static deserializeBinaryFromReader(message: DeliveryProduct, reader: jspb.BinaryReader): DeliveryProduct;
}

export namespace DeliveryProduct {
  export type AsObject = {
    product?: Product.AsObject,
    quantityAvailable: number,
  }
}

export class OrderedProduct extends jspb.Message {
  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): Product | undefined;
  setProduct(value?: Product): void;

  getQuantityOrdered(): number;
  setQuantityOrdered(value: number): void;

  getTotalPrice(): number;
  setTotalPrice(value: number): void;

  getCurrency(): CurrencyMap[keyof CurrencyMap];
  setCurrency(value: CurrencyMap[keyof CurrencyMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderedProduct.AsObject;
  static toObject(includeInstance: boolean, msg: OrderedProduct): OrderedProduct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderedProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderedProduct;
  static deserializeBinaryFromReader(message: OrderedProduct, reader: jspb.BinaryReader): OrderedProduct;
}

export namespace OrderedProduct {
  export type AsObject = {
    product?: Product.AsObject,
    quantityOrdered: number,
    totalPrice: number,
    currency: CurrencyMap[keyof CurrencyMap],
  }
}

export class OrderRequest extends jspb.Message {
  getShopUuid(): string;
  setShopUuid(value: string): void;

  hasPickUpPoint(): boolean;
  clearPickUpPoint(): void;
  getPickUpPoint(): DeliveryPoint | undefined;
  setPickUpPoint(value?: DeliveryPoint): void;

  getCurrency(): CurrencyMap[keyof CurrencyMap];
  setCurrency(value: CurrencyMap[keyof CurrencyMap]): void;

  clearOrderedProductsList(): void;
  getOrderedProductsList(): Array<OrderedProduct>;
  setOrderedProductsList(value: Array<OrderedProduct>): void;
  addOrderedProducts(value?: OrderedProduct, index?: number): OrderedProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderRequest): OrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderRequest;
  static deserializeBinaryFromReader(message: OrderRequest, reader: jspb.BinaryReader): OrderRequest;
}

export namespace OrderRequest {
  export type AsObject = {
    shopUuid: string,
    pickUpPoint?: DeliveryPoint.AsObject,
    currency: CurrencyMap[keyof CurrencyMap],
    orderedProductsList: Array<OrderedProduct.AsObject>,
  }
}

export class OrderReply extends jspb.Message {
  getOrderUuid(): string;
  setOrderUuid(value: string): void;

  getOrderId(): string;
  setOrderId(value: string): void;

  hasPickUpPoint(): boolean;
  clearPickUpPoint(): void;
  getPickUpPoint(): DeliveryPoint | undefined;
  setPickUpPoint(value?: DeliveryPoint): void;

  getCurrency(): CurrencyMap[keyof CurrencyMap];
  setCurrency(value: CurrencyMap[keyof CurrencyMap]): void;

  getTotal(): number;
  setTotal(value: number): void;

  clearOrderedProductsList(): void;
  getOrderedProductsList(): Array<OrderedProduct>;
  setOrderedProductsList(value: Array<OrderedProduct>): void;
  addOrderedProducts(value?: OrderedProduct, index?: number): OrderedProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderReply.AsObject;
  static toObject(includeInstance: boolean, msg: OrderReply): OrderReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderReply;
  static deserializeBinaryFromReader(message: OrderReply, reader: jspb.BinaryReader): OrderReply;
}

export namespace OrderReply {
  export type AsObject = {
    orderUuid: string,
    orderId: string,
    pickUpPoint?: DeliveryPoint.AsObject,
    currency: CurrencyMap[keyof CurrencyMap],
    total: number,
    orderedProductsList: Array<OrderedProduct.AsObject>,
  }
}

export class AvailableProductRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableProductRequest): AvailableProductRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailableProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableProductRequest;
  static deserializeBinaryFromReader(message: AvailableProductRequest, reader: jspb.BinaryReader): AvailableProductRequest;
}

export namespace AvailableProductRequest {
  export type AsObject = {
  }
}

export class AvailableProductReply extends jspb.Message {
  hasUpdated(): boolean;
  clearUpdated(): void;
  getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearDeliverableProductsList(): void;
  getDeliverableProductsList(): Array<DeliveryProduct>;
  setDeliverableProductsList(value: Array<DeliveryProduct>): void;
  addDeliverableProducts(value?: DeliveryProduct, index?: number): DeliveryProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableProductReply.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableProductReply): AvailableProductReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailableProductReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableProductReply;
  static deserializeBinaryFromReader(message: AvailableProductReply, reader: jspb.BinaryReader): AvailableProductReply;
}

export namespace AvailableProductReply {
  export type AsObject = {
    updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deliverableProductsList: Array<DeliveryProduct.AsObject>,
  }
}

export class AvailableProductQuantityReply extends jspb.Message {
  getShopUuid(): string;
  setShopUuid(value: string): void;

  getProductUuid(): string;
  setProductUuid(value: string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  hasUpdated(): boolean;
  clearUpdated(): void;
  getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AvailableProductQuantityReply.AsObject;
  static toObject(includeInstance: boolean, msg: AvailableProductQuantityReply): AvailableProductQuantityReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AvailableProductQuantityReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AvailableProductQuantityReply;
  static deserializeBinaryFromReader(message: AvailableProductQuantityReply, reader: jspb.BinaryReader): AvailableProductQuantityReply;
}

export namespace AvailableProductQuantityReply {
  export type AsObject = {
    shopUuid: string,
    productUuid: string,
    quantity: number,
    updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class OrderStatusRequest extends jspb.Message {
  getOrderUuid(): string;
  setOrderUuid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderStatusRequest): OrderStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderStatusRequest;
  static deserializeBinaryFromReader(message: OrderStatusRequest, reader: jspb.BinaryReader): OrderStatusRequest;
}

export namespace OrderStatusRequest {
  export type AsObject = {
    orderUuid: string,
  }
}

export class OrderStatusReply extends jspb.Message {
  getOrderUuid(): string;
  setOrderUuid(value: string): void;

  hasPickUpPoint(): boolean;
  clearPickUpPoint(): void;
  getPickUpPoint(): DeliveryPoint | undefined;
  setPickUpPoint(value?: DeliveryPoint): void;

  hasShopStatus(): boolean;
  clearShopStatus(): void;
  getShopStatus(): MobileShop | undefined;
  setShopStatus(value?: MobileShop): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderStatusReply.AsObject;
  static toObject(includeInstance: boolean, msg: OrderStatusReply): OrderStatusReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderStatusReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderStatusReply;
  static deserializeBinaryFromReader(message: OrderStatusReply, reader: jspb.BinaryReader): OrderStatusReply;
}

export namespace OrderStatusReply {
  export type AsObject = {
    orderUuid: string,
    pickUpPoint?: DeliveryPoint.AsObject,
    shopStatus?: MobileShop.AsObject,
  }
}

export class DriverPosition extends jspb.Message {
  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): Position | undefined;
  setPosition(value?: Position): void;

  hasUpdated(): boolean;
  clearUpdated(): void;
  getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DriverPosition.AsObject;
  static toObject(includeInstance: boolean, msg: DriverPosition): DriverPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DriverPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DriverPosition;
  static deserializeBinaryFromReader(message: DriverPosition, reader: jspb.BinaryReader): DriverPosition;
}

export namespace DriverPosition {
  export type AsObject = {
    position?: Position.AsObject,
    updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SendPositionReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendPositionReply.AsObject;
  static toObject(includeInstance: boolean, msg: SendPositionReply): SendPositionReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendPositionReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendPositionReply;
  static deserializeBinaryFromReader(message: SendPositionReply, reader: jspb.BinaryReader): SendPositionReply;
}

export namespace SendPositionReply {
  export type AsObject = {
  }
}

export class ConfirmOrderDeliveryRequest extends jspb.Message {
  getOrderUuid(): string;
  setOrderUuid(value: string): void;

  hasPickUpPoint(): boolean;
  clearPickUpPoint(): void;
  getPickUpPoint(): DeliveryPoint | undefined;
  setPickUpPoint(value?: DeliveryPoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmOrderDeliveryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmOrderDeliveryRequest): ConfirmOrderDeliveryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfirmOrderDeliveryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmOrderDeliveryRequest;
  static deserializeBinaryFromReader(message: ConfirmOrderDeliveryRequest, reader: jspb.BinaryReader): ConfirmOrderDeliveryRequest;
}

export namespace ConfirmOrderDeliveryRequest {
  export type AsObject = {
    orderUuid: string,
    pickUpPoint?: DeliveryPoint.AsObject,
  }
}

export class UpdateDeliveryStatusRequest extends jspb.Message {
  getMobileShopUuid(): string;
  setMobileShopUuid(value: string): void;

  getDeliveryStatus(): DeliveryStatusMap[keyof DeliveryStatusMap];
  setDeliveryStatus(value: DeliveryStatusMap[keyof DeliveryStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeliveryStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeliveryStatusRequest): UpdateDeliveryStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeliveryStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeliveryStatusRequest;
  static deserializeBinaryFromReader(message: UpdateDeliveryStatusRequest, reader: jspb.BinaryReader): UpdateDeliveryStatusRequest;
}

export namespace UpdateDeliveryStatusRequest {
  export type AsObject = {
    mobileShopUuid: string,
    deliveryStatus: DeliveryStatusMap[keyof DeliveryStatusMap],
  }
}

export class UpdateDeliveryStatusReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeliveryStatusReply.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeliveryStatusReply): UpdateDeliveryStatusReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeliveryStatusReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeliveryStatusReply;
  static deserializeBinaryFromReader(message: UpdateDeliveryStatusReply, reader: jspb.BinaryReader): UpdateDeliveryStatusReply;
}

export namespace UpdateDeliveryStatusReply {
  export type AsObject = {
  }
}

export class ConfirmOrderDeliveryReply extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmOrderDeliveryReply.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmOrderDeliveryReply): ConfirmOrderDeliveryReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfirmOrderDeliveryReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmOrderDeliveryReply;
  static deserializeBinaryFromReader(message: ConfirmOrderDeliveryReply, reader: jspb.BinaryReader): ConfirmOrderDeliveryReply;
}

export namespace ConfirmOrderDeliveryReply {
  export type AsObject = {
  }
}

export class GetOrdersRequest extends jspb.Message {
  getMobileShopUuid(): string;
  setMobileShopUuid(value: string): void;

  hasPickUpPoint(): boolean;
  clearPickUpPoint(): void;
  getPickUpPoint(): DeliveryPoint | undefined;
  setPickUpPoint(value?: DeliveryPoint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrdersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrdersRequest): GetOrdersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrdersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrdersRequest;
  static deserializeBinaryFromReader(message: GetOrdersRequest, reader: jspb.BinaryReader): GetOrdersRequest;
}

export namespace GetOrdersRequest {
  export type AsObject = {
    mobileShopUuid: string,
    pickUpPoint?: DeliveryPoint.AsObject,
  }
}

export class GetOrdersReply extends jspb.Message {
  clearOrdersList(): void;
  getOrdersList(): Array<OrderReply>;
  setOrdersList(value: Array<OrderReply>): void;
  addOrders(value?: OrderReply, index?: number): OrderReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrdersReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrdersReply): GetOrdersReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrdersReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrdersReply;
  static deserializeBinaryFromReader(message: GetOrdersReply, reader: jspb.BinaryReader): GetOrdersReply;
}

export namespace GetOrdersReply {
  export type AsObject = {
    ordersList: Array<OrderReply.AsObject>,
  }
}

export class GetRouteRequest extends jspb.Message {
  getRouteId(): string;
  setRouteId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRouteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRouteRequest): GetRouteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRouteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRouteRequest;
  static deserializeBinaryFromReader(message: GetRouteRequest, reader: jspb.BinaryReader): GetRouteRequest;
}

export namespace GetRouteRequest {
  export type AsObject = {
    routeId: string,
  }
}

export interface DeliveryStatusMap {
  ON_TOUR: 0;
  PARKED: 1;
}

export const DeliveryStatus: DeliveryStatusMap;

export interface CurrencyMap {
  DEFAULT: 0;
  EUR: 978;
}

export const Currency: CurrencyMap;

