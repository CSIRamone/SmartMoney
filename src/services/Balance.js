import {getRealm} from './Realm';
import _ from 'lodash';
import moment from '../vendors/moment';
import { Collection } from 'realm';

export const getBalance = async (untilDays = 0) => {
  const realm = await getRealm();

  let entries = realm.objects('Entry');

  if (untilDays > 0) {
    const date = moment().subtract(untilDays, 'days').toDate();

    entries = entries.filtered('entryAt < $0', date);

    entries = _(entries);
  }
  return entries.sum('amount');
};

//Agrupar com _(lodash) por dia
//dia -8 = saldo do dia
//dia -7 = saldo do dia + dia - 8
//dia -6 = saldo do dia + dia - 7
//dia -5 = saldo do dia + dia - 6
//dia -4 = saldo do dia + dia - 5
//dia -3 = saldo do dia + dia - 4
//dia -2 = saldo do dia + dia - 3
//dia -1 = saldo do dia + dia - 2
export const getBalanceSumByDate = async days => {
  const realm = await getRealm();
  const startBalance = await getBalance(days);

  let entries = realm.objects('Entry');

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();

    entries = entries.filtered('entryAt >= $0', date);
  }

  entries = entries.sorted('entryAt');
  console.log(JSON.stringify(entries));

  entries = _(entries)
    .groupBy(({entryAt}) => moment(entryAt).format('YYYYMMDD'))
    .map(entry => _.sumBy(entry, 'amount'))
    .map((amount, index, collection) => {
      (index === 0 ? startBalance : 0) +
        _.sum(_.slice(collection, 0, index)) +
        amount;
    });

  console.log(JSON.stringify(entries));
  return entries;
};
