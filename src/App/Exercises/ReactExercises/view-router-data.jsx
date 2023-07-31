import { getParsedRouterDataList } from '../../router-data/parseRouterData';
import { blockRouterMetaData as blockRouterMetaDataLocalDevAndFetch } from './LocalDevAndFetch/router-data';
import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { Block9MetaData } from './Block9/router-data';
import { MaterialUIMetaData } from './MaterialUIBasicElements/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataLocalDevAndFetch,
  SubRouteExampleMetaData,
  Block9MetaData,
  MaterialUIMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
