export const fetchItem = async (prdCd: string) => {
  console.log('aaaaaa',prdCd);
  try {
    const res = await fetch(`http://127.0.0.1:8000/items/${prdCd}`);
    const data = await res.json();
    return data;
    
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
};




