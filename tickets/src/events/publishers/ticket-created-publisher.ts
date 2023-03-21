import { Publisher, Subjects, TicketCreatedEvent } from "@osticketsmod/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
