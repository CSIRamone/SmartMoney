import 'react-native-get-random-values';
import {getUUID} from '../services/UUID';
import {getRealm} from '../services/Realm';

export const getDefaultCategories = () => {
  return [
    {
      id: getUUID(),
      name: 'Alimentação',
      color: '#1abc9c',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 0,
    },
    {
      id: getUUID(),
      name: 'Restaurantes e Bares',
      color: '#2ecc71',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 1,
    },
    {
      id: getUUID(),
      name: 'Casa',
      color: '#3498db',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 2,
    },
    {
      id: getUUID(),
      name: 'Compras',
      color: '#9b59b6',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 3,
    },
    {
      id: getUUID(),
      name: 'Cuidados Pessoais',
      color: '#f1c40f',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 4,
    },
    {
      id: getUUID(),
      name: 'Dívidas e Empréstimos',
      color: '#f39c12',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 5,
    },
    {
      id: getUUID(),
      name: 'Educação',
      color: '#e67e22',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 6,
    },
    {
      id: getUUID(),
      name: 'Família e Filhos',
      color: '#d35400',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 7,
    },
    {
      id: getUUID(),
      name: 'Impostos e Taxas',
      color: '#e74c3c',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 8,
    },
    {
      id: getUUID(),
      name: 'Investimentos',
      color: '#c0392b',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 9,
    },
    {
      id: getUUID(),
      name: 'Lazer',
      color: '#ecf0f1',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 10,
    },
    {
      id: getUUID(),
      name: 'Mercado',
      color: '#bdc3c7',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 11,
    },
    {
      id: getUUID(),
      name: 'Outras Despesas',
      color: '#95a5a6',
      isInit: false,
      isDefault: false,
      isCredit: false,
      isDebit: true,
      order: 12,
    },

    {
      id: getUUID(),
      name: 'Empréstimos',
      color: '#273c75',
      isInit: false,
      isDefault: false,
      isDebit: false,
      isCredit: true,
      order: 1,
    },
    {
      id: getUUID(),
      name: 'Investimentos',
      color: '#4cd137',
      isInit: false,
      isDefault: false,
      isDebit: false,
      isCredit: true,
      order: 2,
    },
    {
      id: getUUID(),
      name: 'Salário',
      color: '#487eb0',
      isInit: false,
      isDefault: false,
      isDebit: false,
      isCredit: true,
      order: 3,
    },
    {
      id: getUUID(),
      name: 'Outras Receitas',
      color: '#8c7ae6',
      isInit: false,
      isDefault: false,
      isDebit: false,
      isCredit: true,
      order: 4,
    },
    {
      id: getUUID(),
      name: 'Saldo Inicial',
      color: '#27ae60',
      isInit: true,
      isDefault: false,
      isCredit: false,
      isDebit: false,
      order: 5,
    },
  ];
};

export const getAllCategories = async () => {
  const realm = await getRealm();
  return realm.objects('Category').sorted('order');
};

export const getDebitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isDebit = true AND isInit = false')
    .sorted('order');
};
export const getCreditCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isCredit = true AND isInit = false')
    .sorted('order');
};
export const getIsInitCategories = async () => {
  const realm = await getRealm();
  return realm.objects('Category').filtered('isInit = true').sorted('order');
};
