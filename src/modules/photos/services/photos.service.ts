import { BadRequestException, Injectable } from '@nestjs/common';
import { PhotoPayloadDto } from '../dto/photo-payload.dto';
import * as crypto from 'crypto';

@Injectable()
export class PhotosService {
  constructor() {}

  async uploadEncryptedPhoto(payload: PhotoPayloadDto) {
    const { hexPhotoData, hash } = payload;
    if (!hexPhotoData || !hash) {
      throw new BadRequestException('Missing required parameters');
    }

    const computedHash = crypto
      .createHash('sha256')
      .update(hexPhotoData, 'utf8')
      .digest('hex');

    if (computedHash !== hash) {
      throw new BadRequestException(
        'Hash mismatch: File integrity check failed',
      );
    }
    // Upload the encrypted photo

    return { message: 'Photo uploaded successfully' };
  }
}
