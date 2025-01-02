import { Module } from '@nestjs/common';
import { PhotosModule } from './modules/photos/photos.module';

@Module({
  imports: [PhotosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
