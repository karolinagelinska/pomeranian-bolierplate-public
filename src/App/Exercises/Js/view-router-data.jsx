import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { castingAndStringsMetaData } from './CastingandStrings/router-data';
import { jsArraysBasicsMetaData } from './JsArraysBasics/router-data';
import { timeMetaData } from './Time/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  castingAndStringsMetaData,
  jsArraysBasicsMetaData,
  timeMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
