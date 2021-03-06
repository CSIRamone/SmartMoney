import Realm from 'realm';
import CategorySchema from '../schemas/CategorySchema';
import EntryShema from '../schemas/EntrySchema';
import {getDefaultCategories} from '../services/Categories';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntryShema],
    schemaVersion: 2.2,
  });
  //dropDB(realm);
  initDb(realm);
  return realm;
};

export const initDb = realm => {
  const categoriesLength = realm.objects('Category').length;
  console.log(
    `Quantidade de categorias no DB :: initDB : ${JSON.stringify(
      categoriesLength,
    )}`,
  );

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();
    console.log(
      `initDB :: getDefaultCategories : categories: ${JSON.stringify(
        categories,
      )}`,
    );
    console.log('initDB :: initing db....');
    try {
      realm.write(() => {
        categories.forEach(category => {
          console.log(
            `initDB :: creating category: ${JSON.stringify(category)}`,
          );
          realm.create('Category', category, true);

          console.log(`create :: ${JSON.stringify(category)}`);
        });
      });
    } catch (error) {}
  } else {
    console.log(`initDB :: Categories already exists... Skipping`);
  }
};
export const dropDB = realm => {
  console.log('dropDB :: dropping db...');
  realm.write(() => {
    realm.deleteAll();
  });
};
