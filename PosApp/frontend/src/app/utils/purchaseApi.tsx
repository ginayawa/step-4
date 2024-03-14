export const handlePurchase = async (items: any[]) => {
  if (!items.length) {
    console.error('No items to purchase.');
    return;
  }

  const toatalAmt = items.reduce((total, addedItem) => total + parseInt(addedItem.prd_price), 0);

  const purchaseData = {
    mbr_id: 1,
    emp_cd: '1234',
    store_cd: 'C01',
    pos_no: '001',
    total_amt: toatalAmt,
    ttl_amt_ex_tax: toatalAmt * 0.1,
    items: items.map((addedItem: any) => ({
      prd_cd: addedItem.prd_cd,
      prd_name: addedItem.prd_name,
      prd_price: addedItem.prd_price
    }))
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/purchase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(purchaseData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Failed to create TranDetail:', errorData);
    }

    const resData = await response.json()
    console.log(resData)
    alert(JSON.stringify(resData.message))

  } catch (error) {
    console.error('Error during purchase:', error);
  }
};
