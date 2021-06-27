import { Test, TestingModule } from '@nestjs/testing';
import { StoreFilesService } from './store-files.service';

describe('StoreFilesService', () => {
  let service: StoreFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreFilesService],
    }).compile();

    service = module.get<StoreFilesService>(StoreFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
