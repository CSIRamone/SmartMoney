import {useEffect, useState} from 'react';

import {
  getAllCategories,
  getDebitCategories,
  getCreditCategories,
  getIsInitCategory,
} from '../services/Categories';

const useCategories = () => {
  const [debitCategories, setDebitCategories] = useState();
  const [creditCategories, setCreditCategories] = useState();
  const [isInitCategory, setIsInitcCategory] = useState();
  const [allCategories, setAllCategories] = useState();

  useEffect(() => {
    const loadDebitCategories = async () => {
      const data = await getDebitCategories();
      setDebitCategories(data);
    };

    const loadCreditCategories = async () => {
      const data = await getCreditCategories();
      setCreditCategories(data);
    };

    const loadIsInitCategory = async () => {
      const data = await getIsInitCategory();
      setIsInitcCategory(data);
    };

    const loadAllCategories = async () => {
      const data = await getAllCategories();
      setAllCategories(data);
    };

    loadDebitCategories();
    loadCreditCategories();
    loadIsInitCategory();
    loadAllCategories();
  }, []);
  return [debitCategories, creditCategories, isInitCategory, allCategories];
};

export default useCategories;
