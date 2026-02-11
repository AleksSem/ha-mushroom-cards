import { CARD_VERSION } from './const';

console.info(
  `%c HA-CARDS %c v${CARD_VERSION} `,
  'color: white; background: #555; font-weight: bold; padding: 2px 6px; border-radius: 4px 0 0 4px;',
  'color: white; background: #1976d2; font-weight: bold; padding: 2px 6px; border-radius: 0 4px 4px 0;',
);

import './cards/air-purifier-card/air-purifier-card';
import './cards/light-card/light-card';
import './cards/plug-card/plug-card';
import './cards/plug-group-card/plug-group-card';
import './cards/timer-card/timer-card';
