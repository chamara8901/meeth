# 1. [管理画面再構築](https://github.com/grrowjp/Meeth/wiki/%E7%AE%A1%E7%90%86%E7%94%BB%E9%9D%A2%E5%86%8D%E6%A7%8B%E7%AF%89-%E7%94%BB%E9%9D%A2%E4%B8%80%E8%A6%A7) - M6.1:顧客管理 検索API設計書

- [1. 管理画面再構築 - M6.1:顧客管理 検索API設計書](#1-管理画面再構築---m61顧客管理-検索api設計書)
  - [1.1. 概要](#11-概要)
  - [1.2. リクエストパラメータ(body部分)](#12-リクエストパラメータbody部分)
  - [1.3. レスポンスパラメータ(data部分)](#13-レスポンスパラメータdata部分)

## 1.1. 概要

| NO. | 名称     | 内容                                           |
| --- | -------- | ---------------------------------------------- |
| 1   | API概要  | 受け取った検索パラメータから検索結果を返却する |
| 2   | スキーマ | /api/customer/getCustomerList                  |

## 1.2. リクエストパラメータ(body部分)

| NO  | パラメータ名             | パラメータ名                              | 値(例)             | 説明                                 |
| --- | ------------------------ | ----------------------------------------- | ------------------ | ------------------------------------ |
| 1   | フリーテキスト           | free_field                                | string(aaa@b.com)  | 顧客ID・氏名・メールアドレスいずれか |
| 2   | 年代                     | age_groups                                | integer(20)        | 年代                                 |
| 3   | 誕生月                   | birth_month                               | integer(6)         | 誕生月                               |
| 4   | DM可否                   | dm_agreed                                 | boolean(true)      | DM可否                               |
| 5   | 総購入回数               | total_orders_count                        | integer(2)         | 総購入回数                           |
| 6   | 総購入回数サフィックス   | total_orders_count_suffix                 | integer(2)         | 総購入回数の以下・一致・以上選択     |
| 7   | 定期購入回数             | total_orders_of_subscription_count        | integer(2)         | 定期購入回数                         |
| 8   | 定期購入回数サフィックス | total_orders_of_subscription_count_suffix | integer(2)         | 定期購入回数の以下・一致・以上選択   |
| 9   | 総購入金額               | total_amount                              | integer(10000)     | 総購入金額                           |
| 10  | 総購入金額サフィックス   | total_amount_suffix                       | integer(2)         | 総購入金額の以下・一致・以上選択     |
| 11  | 最終購入日(開始)         | last_order_date_start                     | string(yyyy/mm/dd) | 最終購入日の検索期間開始日           |
| 12  | 最終購入日(終了)         | last_order_date_end                       | string(yyyy/mm/dd) | 最終購入日の検索期間終了日           |
| 13  | お届け先の氏名           | order_address_name                        | string(ほげ太郎)   | お届け先の氏名                       |
| 14  | お届け先の郵便番号       | order_address_zip_code                    | string(1001122)    | お届け先の郵便番号                   |
| 15  | お届け先の国             | order_address_country                     | string(日本)       | お届け先の国                         |
| 16  | お届け先の都道府県       | order_address_prefecture                  | string(東京都)     | お届け先の都道府県                   |
| 17  | お届け先のその他住所     | order_address_address                     | string(千代田区)   | お届け先のその他住所                 |
| 18  | 現在のページ             | current_page                              | integer(1)         | 現在のページ数(デフォルトは１)       |

-リクエスト例
```json
{
 "free_field":"aaa@b.com"
 "age_groups":20
 "birth_month":6
 "dm_agreed":true
 "total_orders_count":2
 "total_orders_count_suffix":2
 "total_orders_of_subscription_count":2
 "total_orders_of_subscription_count_suffix":2
 "total_amount":10000
 "total_amount_suffix":2
 "last_order_date_start":"2000/01/01"
 "last_order_date_end":"2000/01/01"
 "order_address_name":"ほげ太郎"
 "order_address_zip_code":"1001122"
 "order_address_country":"日本"
 "order_address_prefecture":"東京都"
 "order_address_address":"千代田区"
 "current_page":1
}
```

## 1.3. レスポンスパラメータ(data部分)

| NO   | パラメータ名      | パラメータ名                       | 値(例)                  | 説明               |
| ---- | ----------------- | ---------------------------------- | ----------------------- | ------------------ |
| 1  | 顧客ID            | customer_id                        | integer(1)              | 顧客ID             |
| 2  | 氏名(family_name) | family_name                        | string(ほげ)            | 氏名(苗字)         |
| 3  | 氏名(first_name)  | first_name                         | string(太郎)            | 氏名(名前)         |
| 4  | 年齢              | age                                | integer(21)             | 年齢               |
| 5  | メールアドレス    | email                              | string("hoge@hoge.com") | メールアドレス     |
| 6  | 総購入回数        | total_orders_count                 | integer(10)             | 総購入回数         |
| 7  | 総定期購入回数    | total_orders_of_subscription_count | integer(5)              | 総定期購入回数     |
| 8  | 総購入金額        | total_amount                       | integer(10000)          | 総購入金額         |
| 9 | 総定期購入金額    | total_subscription_amount          | integer(5000)           | 総定期購入金額     |
| 10 | 定期購入状況      | subscriptions_processing_status    | integer(1)              | 定期購入状況       |
| 11 | 最終購入日        | last_order_date                    | string(2020/01/01)      | 最終購入日         |

- レスポンス例
```json
{
 "result":{
   "status":"success"
   "code":0
   "message":"正常"
 }
 "data":[
  {
    "customer_id":1
    "family_name":"ほげ"
    "first_name":"太郎"
    "age":21
    "email":"hoge@hoge.com"
    "total_orders_count":10
    "total_orders_of_subscription_count":5
    "total_amount":10000
    "total_subscription_amount":5000
    "subscriptions_processing_status":1
    "last_order_date":"2020/01/01"
  }
 ]
 "access_token":"xxxx"
 "access_token_limit":"2022-12-01 12:00:00"
 "refresh_token":"xxxx"
 "refresh_token_limit":"2022-12-01 12:00:00"
}
```
