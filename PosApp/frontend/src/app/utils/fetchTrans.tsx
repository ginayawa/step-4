export const fetchTrans = async (mbrId: number) => {
  try {
    const res = await fetch(`http://127.0.0.1:8000/trans/${mbrId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
};
