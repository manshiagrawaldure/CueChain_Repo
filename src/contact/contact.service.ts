import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './schemas/contact.schema';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<Contact>,
  ) {}

  async create(data: CreateContactDto): Promise<Contact> {
    const contact = new this.contactModel(data);
    return await contact.save();
  }

  async findAll(): Promise<Contact[]> {
    return this.contactModel.find().exec();
  }
}
