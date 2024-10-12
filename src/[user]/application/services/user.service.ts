/**
 * This file is part of Zerveros Nest Skeleton.
 *
 * (c) Zerveros S.A.C. <dev@zerveros.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserCreatedEvent } from '../../domain/events/user-created.event';

@Injectable()
export class UserService {
  private users: { id: string; email: string; createdAt: Date }[] = [];

  constructor(private eventEmitter: EventEmitter2) {}

  createUser(email: string): void {
    const userId = (this.users.length + 1).toString();
    const createdAt = new Date();

    // Agregar usuario a la "base de datos" (array simulado)
    this.users.push({ id: userId, email, createdAt });

    // Emitir evento
    const userCreatedEvent = new UserCreatedEvent(userId, email, createdAt);
    this.eventEmitter.emit('user.created', userCreatedEvent);
  }

  getUsers() {
    return this.users;
  }
}
