# 1. [管理画面再構築](https://github.com/grrowjp/Meeth/wiki/%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89-%E7%94%BB%E9%9D%A2%E4%B8%80%E8%A6%A7) - M6.1:注文管理 検索API設計書

- [1. 管理画面再構築 - M6.1:注文管理 検索API設計書](#1-管理画面再構築---m61注文管理-検索api設計書)
  - [1.1. 概要](#11-概要)
  - [1.2. リクエストパラメータ(body部分)](#12-リクエストパラメータbody部分)
  - [1.3. レスポンスパラメータ(data部分)](#13-レスポンスパラメータdata部分)

## 1.1. 概要

| NO. | 名称     | 内容                                           |
| --- | -------- | ---------------------------------------------- |
| 1   | API概要  | 受け取った検索パラメータから検索結果を返却する |
| 2   | スキーマ | /api/order/getSearchList                  |

## 1.2. リクエストパラメータ(body部分)

| NO  | パラメータ名             | パラメータ名                              | 値(例)             | 説明                                 |
| --- | ------------------------ | ----------------------------------------- | ------------------ | ------------------------------------ |
| 1  | フリーテキスト       | free_field                 | string(aaa@b.com)                                            | 顧客ID・氏名・メールアドレスいずれか                                                                                                                                                                                            |
| 2  | 注文ID               | order_id                   | integer(1)                                                   | 注文ID                                                                                                                                                                                                                          |
| 3  | お問い合わせ番号     | tracking_number            | string(12342345)                                             | お問い合わせ番号                                                                                                                                                                                                                |
| 4  | 注文日(開始)         | order_date_start           | string(2020/01/01)                                           | 注文日(開始)                                                                                                                                                                                                                    |
| 5  | 注文日(終了)         | order_date_end             | string(2020/01/01)                                           | 注文日(終了)                                                                                                                                                                                                                    |
| 6  | 注文状況             | order_status               | integer(1)                                                   | 注文状況                                                                                                                                                                                                                        |
| 7  | 請求金額(上限)       | billing_amount_upper_limit | integer(10000)                                               | 請求金額(上限)                                                                                                                                                                                                                  |
| 8  | 請求金額(下限)       | billing_amount_lower_limit | integer(20000)                                               | 請求金額(下限)                                                                                                                                                                                                                  |
| 9  | 決済方法             | payment_method             | integer(1)                                                   | 決済方法                                                                                                                                                                                                                        |
| 10 | 決済状況             | payment_status             | integer(1)                                                   | 決済状況                                                                                                                                                                                                                        |
| 11 | 購入区分             | order_kbn                  | integer(1)                                                   | 購入区分                                                                                                                                                                                                                        |
| 12 | 現在のページ         | current_page               | integer(1)                                                   | 現在のページ                                                                                                                                                                                                                    |

-リクエスト例
```json
{
 "free_field":"aaa@b.com"
 "order_id":1
 "tracking_number":"12342345"
 "order_date_start":"2020/01/01"
 "order_date_end":"2020/01/01"
 "order_status":1
 "billing_amount_upper_limit":10000
 "billing_amount_lower_limit":20000
 "payment_method":1
 "payment_status":1
 "order_kbn":1
 "current_page":1
}
```

## 1.3. レスポンスパラメータ(data部分)

| NO   | パラメータ名      | パラメータ名                       | 値(例)                  | 説明               |
| ---- | ----------------- | ---------------------------------- | ----------------------- | ------------------ |
| 1   | 注文ID       | order_id       | integer(1)         | 注文ID                                               |
| 2   | 注文状況     | order_status   | integer(1)         | 注文状況                                             |
| 3   | 顧客氏名     | customer_name  | string(ほげ太郎)   | 顧客氏名                                             |
| 4   | 購入区分     | order_kbn      | integer(1)         | 購入区分                                             |
| 5   | 商品         | product        | array              | 紐づく商品情報を連想配列(JSONのオブジェクト型)で格納 |
| 5-1 | 商品名       | name           | string(オイル)     | 商品名                                               |
| 6   | 請求金額     | billing_amount | integer(10000)     | 請求金額                                             |
| 7   | 決済方法     | payment_method | integer(1)         | 決済方法                                             |
| 8   | 決済状況     | payment_status | integer(1)         | 決済状況                                             |
| 9   | 注文日時     | order_date     | string(2020/01/01) | 注文日時                                             |

- レスポンス例
```json
{
 "data":[
  {
    "order_id":1
    "order_status":1
    "customer_name":"ほげ太郎"
    "order_kbn":1
    "product":[
     {
      "name":"オイル"
     }
    ]
    "billing_amount":20000
    "payment_method":1
    "payment_status":1
    "order_date":"2020/01/01"
  }
 ]
}
```
