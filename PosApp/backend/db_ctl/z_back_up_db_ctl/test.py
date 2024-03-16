import requests
import json

def main():
  url = 'http://127.0.0.1:8000/item/'
  body = {
    # 'prd_id': 2,
    'prd_cd': '001',
    # 'prd_cd': '0002',
    'prd_name': '本',
    # 'prd_name': 'お茶',
    'prd_price': 600
  }
  res = requests.post(url,json.dumps(body))
  print(res.json())




# items =  [
#             {
#                 'prd_cd': '00000',
#                 'prd_name': 'おにぎり',
#                 'prd_price':'120',
#                 'tax_cd': 'A'
#             },
#             {
#                 'prd_cd': '00001',
#                 'prd_name': 'お茶',
#                 'prd_price':'100',
#                 'tax_cd': 'A'
#             }
#         ]

# item_prices = [int(item['prd_price']) for item in items]
# total_amt = sum(item_prices)

# def main():
#     url = 'http://127.0.0.1:8000/purchase'
#     body = {
#         # 'trd_id': 1,
#         'emp_cd':'1234',
#         'store_cd':'C01',
#         'pos_no': '001',
#         'total_amt':total_amt,
#         'ttl_amt_ex_tax':total_amt*0.1,
#         'items':items
#     }

#     headers = {'Content-Type': 'application/json'}  # Content-Type ヘッダーを手動で設定

#     res = requests.post(url, json.dumps(body), headers=headers)
#     print(res.json())


if __name__=='__main__':
  main()