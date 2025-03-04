import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';

import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TextFunndamentsMetaData } from './Textfundaments/router-data';
import { GoogleFontsMetaData } from './GoogleFonts/router-data';
import { BoxModelMetaData } from './BoxModel/router-data';
import { TablesMetaData } from './Tables/router-data';
import { FloatsMetaData } from './FloatsAndPositioning/router-data';
import { FigmaDesignMetaData } from './FigmaDesign/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  SelectorsAndCascadeMetaData,
  TextFunndamentsMetaData,
  GoogleFontsMetaData,
  BoxModelMetaData,
  TablesMetaData,
  FloatsMetaData,
  FigmaDesignMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
