import Realm from 'realm';
import CategorySchema from '../schemas/CategorySchema';
import EntryShema from '../schemas/EntrySchema';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntryShema],
    schemaVersion: '1',
  });
  return realm;
};
