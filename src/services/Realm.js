import Realm from 'realm';
import CategorySchema from '../schemas/CategorySchema';
import EntryShema from '../schemas/EntrySchema';
import {getDefaultCategories} from '../services/Categories';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntryShema],
    schemaVersion: 2,
  });
  initDB(realm);
  return realm;
};

export const initDB = realm => {
  const categoriesLength = realm.objects('Category').Length;
  console.log(`Quantidade de categorias no DB :: iniDB : ${categoriesLength}`);

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();

    console.log('initDB :: initing db....');
    try {
      realm.write(() => {
        categories.forEach(category => {
          console.log(
            `initDB :: creating category : ${JSON.stringify(category)}`,
          );

          realm.create('Category', category, true);
        });
      });
    } catch (error) {}
  } else {
    console.log('initDB :: categories already existing...');
  }
};
