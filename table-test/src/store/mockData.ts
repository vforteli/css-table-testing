const testRows = 1000;

export type SomeModel = {
  id: number;
  name: string;
  someData: string;
  moreData0: string;
  moreData1: string;
  moreData2: string;
  moreData3: string;
  moreData4: string;
  moreData5: string;
  moreData6: string;
  moreData7: string;
  moreData8: string;
  moreData9: string;
};

export const MockData: SomeModel[] = [...Array(testRows).keys()].map((rowIndex) => ({
  id: rowIndex,
  name: `some name ${rowIndex}`,
  someData: `some content! ${rowIndex}`,
  moreData0: `more content! ${rowIndex}`,
  moreData1: `more content! ${rowIndex}`,
  moreData2: `more content! ${rowIndex}`,
  moreData3: `more content! ${rowIndex}`,
  moreData4: `more content! ${rowIndex}`,
  moreData5: `more content! ${rowIndex}`,
  moreData6: `more content! ${rowIndex}`,
  moreData7: `more content! ${rowIndex}`,
  moreData8: `more content! ${rowIndex}`,
  moreData9: `more content! ${rowIndex}`,
}));
