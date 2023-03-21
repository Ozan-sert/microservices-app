import { Publisher, OrderCreatedEvent, Subjects } from "@osticketsmod/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
