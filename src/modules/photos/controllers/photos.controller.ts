import { Body, Controller, Get, Post } from '@nestjs/common';
import { PhotosService } from '../services/photos.service';
import { PhotoPayloadDto } from '../dto/photo-payload.dto';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Post('upload-photo')
  async uploadPhoto(@Body() body: PhotoPayloadDto) {
    return this.photosService.uploadEncryptedPhoto(body);
  }
}
