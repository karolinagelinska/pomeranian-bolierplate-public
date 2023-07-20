import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsThis } from './jsThis/router-data';
import { blockRouterMetaData as blockRouterMetaDataPrototype } from './Exercise-js-prototype/router-data';
import { blockRouterMetaData as blockRouterMetaDataTryCatchAndFinally } from './Exercsie-js-try-catch/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsStorages } from './jsStorages/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoGame } from './MemoGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataHitTheMoleGame } from './HitTheMoleGame/router-data';
import { castingAndStringsMetaData } from './CastingandStrings/router-data';
import { jsArraysBasicsMetaData } from './JsArraysBasics/router-data';
import { timeMetaData } from './Time/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsThis,
  blockRouterMetaDataPrototype,
  blockRouterMetaDataTryCatchAndFinally,
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  castingAndStringsMetaData,
  jsArraysBasicsMetaData,
  timeMetaData,
  blockRouterMetaDataHitTheMoleGame,
  blockRouterMetaDataMemoGame,
  blockRouterMetaDataJsStorages,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
