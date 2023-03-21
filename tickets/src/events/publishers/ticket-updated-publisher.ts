import { Publisher, Subjects, TicketUpdatedEvent } from "@osticketsmod/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
