import { mangaSign, buyMangaService } from '@/service/manga.service';
import { logger } from '../utils/log';

export default async function mangaTask() {
  logger.info('----【漫画任务】----');
  try {
    // 漫画签到
    await mangaSign();
    // 购买漫画
    await buyMangaService();
  } catch (error) {
    logger.error(`漫画任务异常: ${error}`);
  }
}
