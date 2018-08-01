import { AnnouncementsModule } from './announcements.module';

describe('AnnouncementsModule', () => {
  let announcementsModule: AnnouncementsModule;

  beforeEach(() => {
    announcementsModule = new AnnouncementsModule();
  });

  it('should create an instance', () => {
    expect(announcementsModule).toBeTruthy();
  });
});
