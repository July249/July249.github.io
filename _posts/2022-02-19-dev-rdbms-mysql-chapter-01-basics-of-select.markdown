---
layout: post
title: "[My SQL 기초] Chapter 01. SELECT 기초"
subtitle: "[Fundamentals of MySQL] Chapter 01. Basics of SELECT"
categories: dev
tags: dev rdbms beginner mysql
comments: false
published: false
---


Before Start...
===

관계형 데이터베이스 관리 시스템(RDBMS)에 대하여 제가 학습한 내용을 정리한 내용입니다. 해당 자료의 출처 및 참고자료는 얄코(얄팍한 코딩사전, <https://www.yalco.kr/lectures/sql/>)과 Codecademy(Data Scientist Career Path & Learn SQL, <https://www.codecademy.com/learn>)입니다.

아래의 코드블럭을 실습할 수 있는 공간은 w3schools.com에서 제공하는 실습 공간을 이용하시기 바랍니다.(<https://www.w3schools.com/mysql/trymysql.asp?filename=trysql_select_all>)


# 제1장. SELECT 기초 

## [SELECT - 내가 원하는 정보 가져오기]

1. 테이블의 모든 내용 확인

: `*`(asterisk)는 테이블의 모든 column을 뜻합니다.

```sql
SELECT * 
FROM Customers;
-- Customers에 저장된 모든 테이블의 정보를 불러옵니다.
```

(참고) 주석 작성 방법
```sql
-- 주석을 달 수 있습니다.
```

2. 원하는 column만 선택하여 보기

```sql
SELECT 
  CustomerName 
FROM Customers;
-- Customers에 저장된 테이블 중 CustomerName col.만 출력합니다.
```
```sql
SELECT 
  CustomerName, ContactName, Country
FROM Customers;
-- Customers에 저장된 테이블 중 CustomerName, ContactName, Country col.만 출력합니다.
```

**NOTE**: SQL 명령어는 대소문자를 구분하지 않습니다.

```sql
select Customername from Customers;
-- 정보가 저장된 위치의 항목은 대소문자 구분을 합니다.
-- 따라서 "select customername from customers"를 입력하면 오류가 발생합니다.
-- 데이터가 저장된 곳과 데이터를 가져올 곳을 찾지 못하기 때문입니다.
```

하지만, 코드의 가독성을 위하여 대문자로 쓰는 것이 기본입니다.

**NOTE**: 테이블의 column이 아닌 값도 선택할 수 있습니다.

```sql
SELECT
  CustomerName, 1, 'Hello', NULL
FROM Customers;
-- Customers에 저장되지 않은 정보 1, 'Hello', NULL을 출력하라고 명령하였기 때문에 기본값으로 모든 데이터에 출력됩니다. 단, 해당 정보가 데이터베이스에 입력되어 저장된 것은 아닙니다.
```

3. 원하는 조건의 row만 선택하여 보기

`WHERE`구분 뒤에 조건을 붙여 원하는 데이터만 가져올 수 있습니다.

```sql
SELECT * 
FROM Orders
WHERE EmployeeID = 3;
-- Orders에 저장된 정보들 중 EmployeeID가 3인 조건을 만족하는 데이터만 모두 출력합니다.
```

```sql
SELECT * 
FROM OrderDetails
WHERE Quantity < 5;
-- OrderDetails에 저장된 정보들 중 Quantity가 5보다 작은 값을 가지는 조건을 만족하는 데이터만 모두 출력합니다.
```

4. 원하는 순서로 데이터를 가져오기

`ORDER BY` 구문을 사용해서 특정 column을 기준으로 데이터를 정렬할 수 있습니다.

|구문 |기준 |기본 |
|:--:|:--:|:--:|
|ASC |오름차순 |V |
|DESC|내림차순 |  |

```sql
SELECT * 
FROM Customers
ORDER BY ContactName;
-- Customers에 저장된 데이터 정보를 출력함에 있어 ContactName col.을 기준으로 오름차순이 되게 모든 데이터를 출력합니다.
```

```sql
SELECT * 
FROM OrderDetails
ORDER BY ProductID ASC, Quantity DESC;
-- OrderDetails에 저장된 데이터 중 ProductID는 오름차순, Quantity는 내림차순을 기준으로 하여 모든 데이터 정보를 출력합니다.
```

5. 원하는 만큼만 데이터 가져오기

`LIMIT {가져올 갯수}` 또는 `LIMIT {건너뛸 갯수}, {가져올 갯수}`를 사용하여, 원하는 위치에서 원하는 만큼만 데이터를 가져올 수 있습니다.

```sql
SELECT * 
FROM Customers
LIMIT 10;
-- Customers에 저장된 모든 데이터 중 10개만 출력합니다.
```

```sql
SELECT * 
FROM Customers
LIMIT 0, 10;
-- 건너뛸 갯수가 0 이고 가져올 갯수가 10 이므로 위 코드블럭과 동일한 결과를 출력합니다.
```

```sql
SELECT * 
FROM Customers
LIMIT 30, 10;
-- Customers에 저장된 데이터 중 30개를 건너뛰고 31번째 데이터부터 40번째 데이터까지만 출력합니다.
```

7. 원하는 별명(alias)으로 데이터 가져오기

`AS`를 사용하여 column 명을 변경할 수 있습니다.

```sql
SELECT
  CustomerID AS ID,
  CustomerName AS NAME
  Address AS ADDR
FROM Customers;
-- Customers 데이터 중 CustomerID, CustomerName, Address column 명을 각각 ID, NAME, ADDR로 변경하여 해당 column의 정보만을 출력합니다.
```

```sql
SELECT
  CustomerID AS '아이디'
  CustomerName AS '고객명'
  Address AS '주소'
FROME Customers;
-- 해당 column명을 한글로 변경하여 표시할 수도 있습니다.
```

## [각종 연산자들]

1. 사칙연산

|연산자 |의미 |
|:--:|:--:|
|`+, -, *, /`|각각 더하기, 빼기, 곱하기, 나누기 |
|`%`, `MOD`| 나머지 |

```sql
SELECT 1 + 2;
-- 3이 출력됩니다.
```

```sql
SELECT 5 - 2.5 AS DIFFERENCE;
-- DIFFERENCE라는 col.명으로 2.5가 출력됩니다.
```

```sql
SELECT 3 * (2 + 4) / 2, 'Hello';
-- 9.00000과 Hello가 출력됩니다.
```

```sql
SELECT 10 % 3;
-- 나머지 값인 1이 출력됩니다.
```

**NOTE**: 문자열에 사칙연산을 가하면 해당 문자열을 '0'으로 인식합니다.

```sql
SELECT 'ABC' + 3;
-- 3이 출력됩니다.
```

```sql
SELECT 'ABC' * 3;
-- 0이 출력됩니다.
```

```sql
SELECT '1' + '002' * 3;
-- 숫자로 구성된 문자열은 숫자로 자동인식
-- 7이 출력됩니다.
```

**CAUTION!!**: 숫자로 구성된 문자열을 항상 숫자로 자동인식하는 것은 아닙니다. 이에 대해서는 후에 자세히 다루겠습니다.

```sql
SELECT
  OrderID + ProductID
FROM OrderDetails;
```

```sql
SELECT
  ProductName,
  Price / 2 AS HalfPrice
FROM Products;
```

2. 참/거짓 관련 연산자

```sql
SELECT TRUE, FALSE;
-- TRUE는 1이 저장되고, FALSE는 0이 저장됩니다. 저장된 값을 출력합니다.
```

```sql
SELECT !TRUE, NOT 1, !FALSE, NOT FALSE;
-- !는 NOT과 동일합니다.
-- 즉, !TRUE >> FALSE / NOT 1 >> 0 >> FALSE / !FALSE >> TRUE / NOT FALSE >> TRUE /
-- 0, 0, 1, 1이 출력됩니다.
```

```sql
SELECT 0 = TRUE, 1 = TRUE, 0 = FALSE, 1 = FALSE;
-- 0 = TRUE >> FALSE와 TRUE가 같지 않으므로 거짓(FALSE)입니다.
-- 1 = TRUE >> TRUE와 TRUE가 같으므로 참(TRUE)입니다.
-- 0 = FALSE >> FALSE와 FALSE가 같으므로 참(TRUE)입니다.
-- 1 = FALSE >> TRUE와 FALSE가 같지 않으므로 거짓(FALSE)입니다.
-- 따라서, 0, 1, 1, 0이 출력됩니다.
```

```sql
SELECT * 
FROM Customers WHERE TRUE;
-- Customers에 저장된 모든 데이터 중 TRUE인 경우만 출력합니다. 즉, 데이터값이 있는 경우만 출력합니다.
```

```sql
SELECT * 
FROM Customers WHERE FALSE;
-- Customers에 저장된 모든 데이터 중 FALSE인 경우만 출력합니다. 즉, 데이터값이 없는 경우만 출력합니다.
```

|연산자 |의미 |
|:--:|:--:|
|IS |양쪽이 모두 TRUE 또는 FALSE |
|IS NOT |한쪽은 TRUE, 한쪽은 FALSE |

```sql
SELECT TRUE IS TRUE;
-- 양쪽이 모두 TRUE이므로 참(TRUE)
-- 따라서 1이 출력된다.
```

```sql
SELECT FALSE IS FALSE;
-- 양쪽이 모두 FALSE 이므로 참(TRUE)
-- 따라서 1이 출력된다.
```

```sql
SELECT TRUE IS NOT FALSE;
-- IS NOT 이므로 한쪽이 TRUE, 한쪽은 FALSE 이므로 참(TRUE)
-- 따라서 1이 출력된다.
```

```sql
SELECT (TRUE IS FALSE) IS NOT TRUE;
-- 소괄호 안을 먼저 연산한다.
-- IS 이므로 양쪽 모두 TRUE 또는 FALSE 인 경우에만 참(TRUE)가 된다. 따라서 소괄호 안은 거짓(FALSE)이 된다.
-- 소괄호 밖은 IS NOT 이므로 한쪽은 FALSE, 한쪽은 TRUE 이므로 참(TRUE)가 된다.
-- 따라서 최종적으로 1이 출력된다.
```

|연산자 |의미 |
|:--:|:--:|
|AND, && |양쪽이 모두 TRUE일 때만 TRUE |
|OR, \|\| |한쪽이라도 TRUE면 TRUE |

```sql
SELECT TRUE AND FALSE, TRUE OR FALSE;
-- TRUE AND FALSE 는 FALSE
-- TRUE OR FALSE 는 TRUE
```

```sql
SELECT 2 + 3 = 6 OR 2 * 3 = 6;
-- 2 + 3 = 6은 FALSE
-- 2 * 3 = 6은 TRUE
-- 따라서 FALSE OR TRUE는 참(TRUE)
-- 1이 출력된다.
```

```sql
SELECT * 
FROM Orders
WHERE
  CustomerID = 15 AND EmployeeID = 4;
-- Orders에 있는 모든 데이터 중 CustomerID가 15 이고, EmployeeID가 4인 조건의 데이터만 출력한다.
```

```sql
SELECT * 
FROM Products 
WHERE
  ProductName = 'Tofu' OR CategoryID = 8;
-- Products에 있는 데이터 중 ProductName이 'Tofu'이거나 CategoryId가 8인 조건의 데이터만 출력한다.
```

```sql
SELECT * 
FROM OrderDetails
WHERE
  ProductID = 20
  AND (OrderID = 10514 OR Quantity = 50);
-- OrderDetails에 있는 데이터 중 ProductID가 20 이고 OrderID가 10514이거나 Quantity가 50인 경우의 데이터만 출력한다.
```

|연산자 |의미 |
|:--:|:--:|
| =	|양쪽 값이 같음 |
|!=, <>	|양쪽 값이 다름 |
|>, < |(왼쪽, 오른쪽) 값이 더 큼 |
|>=, <=	|(왼쪽, 오른쪽) 값이 같거나 더 큼 |

```sql
SELECT 1 = 1, !(1 <> 1), NOT (1 < 2), 1 > 0 IS NOT FALSE;
-- 1 = 1 은 양쪽 값이 같으므로 참(TRUE)
-- !(1 <> 1) 은 양쪽 값이 같은데 다르다고 하였으므로 거짓(FALSE)이지만 그 역(!)을 취했으므로 참(TRUE)
-- NOT(1 < 2) 에서 1은 2보다 작으므로 참(TRUE)이지만 앞에 NOT이 붙었으므로 그 역인 거짓(FALSE)
-- 1 > 0 은 참(TRUE)
-- IS NOT 은 한쪽은 TRUE, 다른 한쪽은 FALSE일 때 참(TRUE)이므로,
-- 1, 1, 0, 1 이 출력된다.
```

```sql
SELECT 'A' = 'A', 'A' != 'B', 'A' < 'B', 'A' > 'B';
-- 문자열에서의 알파벳 대소관계는 ASCII 코드로 변환된 10진수의 대소로 결정된다.
```

```sql
SELECT 'Apple' > 'Banana' OR 1 < 2 IS TRUE;
-- 'Apple'과 'Banana'는 문자열이므로 각각의 문자값에 ASCII 코드를 적용하여 대소관계를 정의한다. 따라서 'Apple'는 'Banana' 보다 작으므로('Apple' < 'Banana') 거짓(FALSE)
-- 1 < 2 는 참(TRUE)
-- FALSE OR TRUE 는 TRUE
-- IS 연산자는 양쪽이 모두 TRUE, FALSE인 경우 참이므로 참(TRUE)인 1이 출력된다.
```

**NOTE**: SQL의 기본 사칙연산자는 대소문자 구분을 하지 않는다.
```sql
SELECT 'A' = 'a';
-- 대소문자를 구분하지 않으므로 'A'와 'a'는 동일하다.
-- 따라서 참(TRUE)인 1이 출력된다.
```

**NOTE**: 테이블의 Column 값이 아닌 값으로 선택하기
```sql
SELECT
  ProductName, Price,
  Price > 20 AS EXPENSIVE 
FROM Products;
-- Products에 저장된 데이터 중 ProductName Column, Price Column, 그리고 해당 상품의 Price가 20을 초과하는 경우 'EXPENSIVE'라는 Column에 참(TRUE)인 1로 표기하고 아닌 경우 거짓(FALSE)인 0으로 표기하여 선택된 Column들을 출력한다.
```

```sql
SELECT
  ProductName, Price,
  NOT Price > 20 AS CHEAP 
FROM Products;
-- 위 'EXPENSIVE'와 같은 방법으로 'CHEAP' Column을 선택하여 출력할 수 있다.
```

|연산자 |의미 |
|:--:|:--:|
|BETWEEN {MIN} AND {MAX}	|두 값 사이에 있음 |
|NOT BETWEEN {MIN} AND {MAX}	|두 값 사이가 아닌 곳에 있음 |

```sql
SELECT 5 BETWEEN 1 AND 10;
-- 1과 10 사이에 5가 있으므로 참(TRUE)
```

```sql
SELECT 'banana' NOT BETWEEN 'apple' AND 'camera';
-- 대소관계에 따라 'apple'과 'camera' 사이에 'banana'가 있으므로 NOT BETWEEN은 거짓(FALSE)가 된다.
```

```sql
SELECT * 
FROM OrderDetails
WHERE ProductID BETWEEN 1 AND 4;
-- OrderDetails에 저장된 데이터 중 ProductID값이 1과 4 사이에 (1과 4를 포함한 1, 2, 3, 4) 있는 조건을 만족하는 데이터를 출력한다.
```

```sql
SELECT * 
FROM Customers
WHERE CustomerName BETWEEN 'b' AND 'c';
-- Customers에 저장된 데이터 중 CustomerName이 b와 c로 시작하는 (b와 c를 포함) 조건의 데이터를 모두 출력한다.
```

|연산자 |의미 |
|:--:|:--:|
|IN (...) |괄호 안의 값들 가운데 있음 |
|NOT IN (...) |괄호 안의 값들 가운데 없음 |

```sql
SELECT 1 + 2 IN (2, 3, 4);
-- 3 이 주어진 (2, 3, 4) 안에 있으므로 참(TRUE)가 출력된다.
```

```sql
SELECT 'Hello' IN (1, TRUE, 'hello');
-- 대소문자의 구분이 없음에 유의하여야 한다.
```

```sql
SELECT * 
FROM Customers
WHERE City IN ('Torino', 'Paris', 'Portland', 'Madrid');
-- Customers의 데이터 중 City column 내 ('Torino', 'Paris', 'Portland', 'Madrid')가 있는 값들만 출력한다.
```


|연산자 |의미 |
|:--:|:--:|
|LIKE '... % ...' |0~N개 문자를 가진 패턴 |
|LIKE '... _ ...'	|_ 갯수만큼의 문자를 가진 패턴 |

```sql
SELECT
  'HELLO' LIKE 'hel%',
  -- 'HELLO'는 'hel'로 시작하는 문자이므로 참(TRUE)
  'HELLO' LIKE 'H%',
  -- 'HELLO'는 'H'로 시작하는 문자이므로 참(TRUE)
  'HELLO' LIKE 'H%O',
  -- 'HELLO'는 'H'로 시작해서 'O'로 끝나는 문자이므로 참(TRUE)
  'HELLO' LIKE '%O',
  -- 'HELLO'는 'O'로 끝나는 문자이므로 참(TRUE)
  'HELLO' LIKE '%HELLO%',
  -- 'HELLO'는 'HELLO'로 시작하거나 끝나는 문자이므로 참(TRUE)
  'HELLO' LIKE '%H',
  -- 'HELLO'는 'H'로 끝나는 문자가 아니므로 거짓(FALSE)
  'HELLO' LIKE 'L%'
  -- 'HELLO'는 'L'로 시작하는 문자가 아니므로 거짓(FALSE)
```

```sql
SELECT
  'HELLO' LIKE 'HEL__',
  -- 'HELLO'는 'HEL' + 2개의 문자를 가진 패턴과 같으므로 참(TRUE)
  'HELLO' LIKE 'h___O',
  -- 'HELLO'는 'h' + 3개의 문자 + 'O'를 가진 패턴과 같으므로 참(TRUE)
  'HELLO' LIKE 'HE_LO',
  -- 'HELLO'는 'HE' + 1개의 문자 + 'LO'를 가진 패턴과 같으므로 참(TRUE)
  'HELLO' LIKE '_____',
  -- 'HELLO'는 5개의 문자를 가진 패턴과 같으므로 참(TRUE)
  'HELLO' LIKE '_HELLO',
  -- 'HELLO'는 1개의 문자 + 'HELLO'를 가진 패턴과 다르므로 거짓(FALSE)
  'HELLO' LIKE 'HEL_',
  -- 'HELLO'는 'HEL' + 1개의 문자를 가진 패턴과 다르므로 거짓(FALSE)
  'HELLO' LIKE 'H_O'
  -- 'HELLO'는 'H' + 1개의 문자 + 'O'를 가진 패턴과 다르므로 거짓(FALSE)
```

```sql
SELECT * FROM Employees
WHERE Notes LIKE '%economics%'
-- Employees의 모든 데이터 중 Notes에 'economics'가 있는 경우의 데이터 정보를 출력한다.
```

```sql
SELECT * FROM OrderDetails
WHERE OrderID LIKE '1025_'
-- OrderDetails의 모든 데이터 중 OrderID가 1025로 시작하는 조건에 해당하는 데이터 정보를 출력한다.
```

## [숫자와 문자열을 다루는 함수들]

1. 숫자 관련 함수들

|함수 |설명 |
|:--:|:--:|
|ROUND |반올림 |
|CEIL |올림 |
|FLOOR |내림 |

```sql
SELECT 
  ROUND(0.5),
  CEIL(0.4),
  FLOOR(0.6);
  -- 1, 1, 0 이 출력됨
```

```sql
SELECT 
  Price,
  ROUND(price),
  CEIL(price),
  FLOOR(price)
FROM Products;
```

|함수 |설명 |
|:--:|:--:|
|ABS |절대값 |

```sql
SELECT ABS(1), ABS(-1), ABS(3 - 10);
-- 1, 1, 7 값이 출력된다.
```

```sql
SELECT * FROM OrderDetails
WHERE ABS(Quantity - 10) < 5;
-- OrderDetails에 저장된 모든 데이터 중 Quantity 값에 10을 뺀 값들의 절대값이 5보다 작은 경우에 한하여 출력된다.
```

|함수 |설명 |
|:--:|:--:|
|GREATEST |(괄호 안에서) 가장 큰 값|
|LEAST |(괄호 안에서) 가장 작은 값|

```sql
SELECT 
  GREATEST(1, 2, 3),
  LEAST(1, 2, 3, 4, 5);
  -- 3, 1 값이 출력된다.
```

```sql
SELECT
  OrderDetailID, ProductID, Quantity,
  GREATEST(OrderDetailID, ProductID, Quantity),
  LEAST(OrderDetailID, ProductID, Quantity)
FROM OrderDetails;
```

|함수 |설명 |
|:--:|:--:|
|MAX |가장 큰 값|
|MIN |가장 작은 값 |
|COUNT |갯수(NULL값 제외) |
|SUM |총합 |
|AVG |평균값 |

```sql
SELECT
  MAX(Quantity),
  MIN(Quantity),
  COUNT(Quantity),
  SUM(Quantity),
  AVG(Quantity)
FROM OrderDetails
WHERE OrderDetailID BETWEEN 20 AND 30;
```

|함수 |설명 |
|:--:|:--:|
|POW(A,B) 또는 POWER(A,B) |A를 B만큼 제곱 |
|SQRT |제곱근 |

```sql
SELECT
  POW(2, 3),
  POWER(5, 2),
  POWER(25, 0.5),
  SQRT(16);
  -- 8, 25, 5, 4 값이 출력된다.
```

```sql
SELECT Price, POW(Price, 1/2)
FROM Products
WHERE SQRT(Price) < 4;
```

|함수 |설명 |
|:--:|:--:|
|TRUNCATE(N, n) |N을 소수점 n자리까지 선택 |

```sql
SELECT
  TRUNCATE(1234.5678, 1),
  -- 1234.5
  TRUNCATE(1234.5678, 2),
  -- 1234.56
  TRUNCATE(1234.5678, 3),
  -- 1234.567
  TRUNCATE(1234.5678, -1),
  -- 1230
  TRUNCATE(1234.5678, -2),
  -- 1200
  TRUNCATE(1234.5678, -3);
  -- 1000
```

```sql
SELECT Price FROM Products
WHERE TRUNCATE(Price, 0) = 12;
```

**CF**: 아래의 MySQL 공식 문서에서 보다 다양한 종류의 <u>숫자 함수</u>를 확인할 수 있습니다.

<https://dev.mysql.com/doc/refman/8.0/en/numeric-functions.html>

2. 문자열과 관련 함수들

|함수 |설명 |
|:--:|:--:|
|UCASE, UPPER |모두 대문자로 변환|
|LCASE, LOWER |모두 소문자로 변환|

```sql
SELECT
  UPPER('abcDEF'),
  -- 'ABCDEF'
  LOWER('abcDEF');
  -- 'abcdef'
```

```sql
SELECT
  UCASE(CustomerName),
  LCASE(ContactName)
FROM Customers;
```

|함수|설명|
|:--:|:--:|
|CONCAT(...)|괄호 안의 내용을 이어 붙임|
|CONCAT_WS(S,...)|괄호 안의 내용 S로 이어 붙임|

```sql
SELECT CONCAT('HELLO', ' ', 'THIS IS ', 2021)
-- HELLO THIS IS 2021
```

```sql
SELECT CONCAT_WS('-', 2021, 8, 15, 'AM')
-- 2021-8-15-AM
```

```sql
SELECT CONCAT('O-ID: ', OrderID) FROM Orders;
```

```sql
SELECT
  CONCAT_WS(' ', FirstName, LastName) AS FullName
FROM Employees;
```

|함수|설명|
|:--:|:--:|
|SUBSTR, SUBSTRING|주어진 값에 따라 문자열 자름|
|LEFT|왼쪽부터 N글자|
|RIGHT|오른쪽부터 N글자|

```sql
SELECT
  SUBSTR('ABCDEFG', 3),
  -- 주어진 문자열의 3번째 글자인 'C'부터 출력한다.
  -- CDEFG 가 출력된다.
  SUBSTR('ABCDEFG', 3, 2),
  -- 주어진 문자열의 3번째 글자인 'C'를 1로 한 2 글자를 출력한다.
  -- CD 가 출력된다.
  SUBSTR('ABCDEFG', -4),
  -- 주어진 문자열에서 뒤로 4번째 글자인 'D'부터 출력한다.
  -- DEFG
  SUBSTR('ABCDEFG', -4, 2);
  -- 주어진 문자열에서 뒤로 4번째 글자인 'D'를 1로 한 2글자를 출력한다.
  -- DE
```

```sql
SELECT
  LEFT('ABCDEFG', 3),
  -- 주어진 문자열의 시작점인 'A'에서 3번째 글자인 'C'까지 출력한다.
  -- ABC
  RIGHT('ABCDEFG', 3);
  -- 주어진 문자열의 끝지점인 'G'에서 역으로 3번째 글자인 'E'까지 출력한다.
  -- EFG
  -- 동일한 결과를 얻는 코드로 SUBSTR('ABCDEFG', -3) 이 있다.
```

```sql
SELECT
  OrderDate,
  LEFT(OrderDate, 4) AS Year,
  SUBSTR(OrderDate, 6, 2) AS Month,
  RIGHT(OrderDate, 2) AS Day
FROM Orders;
```

|함수|설명|
|:--:|:--:|
|LENGTH|문자열의 바이트 길이|
|CHAR_LENGTH, CHARACTER_LENGTH|문자열의 문자 길이|

```sql
SELECT
  LENGTH('ABCDE'),
  -- 5
  CHAR_LENGTH('ABCDE'),
  -- 5
  CHARACTER_LENGTH('ABCDE');
  -- 5
```

```sql
-- w3wchool 사이트에서는 한글이 제대로 동작하지 않습니다.
SELECT
  LENGTH('안녕하세요'), 
  -- 15 (바이트 수)
  CHAR_LENGTH('안녕하세요'),
  -- 5 (문자 수)
  CHARACTER_LENGTH('안녕하세요');
  -- 5 (문자 수)
```

|함수|설명|
|:--:|:--:|
|TRIM|양쪽 공백 제거|
|LTRIM|왼쪽 공백 제거|
|RTRIM|오른쪽 공백 제거|

```sql
SELECT
  CONCAT('|', ' HELLO ', '|'),
  -- | HELLO |
  CONCAT('|', LTRIM(' HELLO '), '|'),
  -- |HELLO |
  CONCAT('|', RTRIM(' HELLO '), '|'),
  -- | HELLO|
  CONCAT('|', TRIM(' HELLO '), '|');
  -- |HELLO|
```

```sql
SELECT * FROM Categories
WHERE CategoryName = ' Beverages '
```

```sql
SELECT * FROM Categories
WHERE CategoryName = TRIM(' Beverages ')
```

|함수|설명|
|:--:|:--:|
|LPAD(S, N, P)|S가 N 글자가 될 때까지 P를 이어 붙임|
|RPAD(S, N, P)|S가 N 글자가 될 떄까지 P를 이어 붙임|

```sql
SELECT
  LPAD('ABC', 5, '-'),
  -- --ABC
  RPAD('ABC', 5, '-');
  -- ABC--
```

```sql
SELECT
  LPAD(SupplierID, 5, 0),
  RPAD(Price, 6, 0)
FROM Products;
```


|함수|설명|
|:--:|:--:|
|REPLACE(S, A, B)|S 중 A를 B로 변경|

```sql
SELECT
  REPLACE('롯데타워에서 남산타워 짜장면을 먹었다.', '롯데타워', '남산타워');
  -- 남산타워에서 남산타워 짜장면을 먹었다.
```

```sql
SELECT
  REPLACE(Description, ', ', ' and ')
FROM Categories;
```

|함수|설명|
|:--:|:--:|
|INSTR(S, s)|S 중 s의 첫 위치 반환, 없을 경우 0|

```sql
SELECT
  INSTR('ABCDE', 'ABC'),
  -- 1
  INSTR('ABCDE', 'BCDE'),
  -- 2
  INSTR('ABCDE', 'C'),
  -- 3
  INSTR('ABCDE', 'DE'),
  -- 4
  INSTR('ABCDE', 'F');
  -- 0
```

```sql
SELECT * FROM Customers
WHERE INSTR(CustomerName, ' ') BETWEEN 1 AND 6;
-- < 6으로 하면?
```

|함수|설명|
|:--:|:--:|
|CAST(A, T)|A를 T 자료형으로 변환|

```sql
SELECT
  '01' = '1',
  CONVERT('01', DECIMAL) = CONVERT('1', DECIMAL);
```

**NOTE**: 앞서 사칙연산을 설명함에 있어 "숫자로 구성된 문자열을 항상 숫자로 자동인식하는 것은 아닙니다."라고 주의를 당부한 적이 있다. 그 예가 바로 위 CAST 함수 예제이다.



**CF**: 아래의 MySQL 공식 문서에서 보다 다양한 종류의 <u>문자열 함수</u>를 확인할 수 있습니다.

<https://dev.mysql.com/doc/refman/8.0/en/string-functions.html>



## [시간/날짜 관련 및 기타 함수들]

1. 시간/날짜 관련 함수들

|함수|설명|
|:--:|:--:|
|CURRENT_DATE, CURDATE|현재 날짜 반환|
|CURRNET_TIME, CURTIME|현재 시간 반환|
|CURRNET_TIMESTAMP, NOW|현재 시간과 날짜 반환|

```sql
SELECT CURDATE(), CURTIME(), NOW();
```

|함수|설명|
|:--:|:--:|
|DATE|문자열에 따라 날짜 생성|
|TIME|문자열에 따라 시간 생성|

```sql
SELECT
  '2021-6-1' = '2021-06-01',
  -- 둘은 다르다. 따라서 거짓(FALSE)인 0이 출력된다.
  DATE('2021-6-1') = DATE('2021-06-01'),
  -- 둘은 같다. 따라서 참(TRUE)인 1이 출력된다.
  '1:2:3' = '01:02:03',
  -- 둘은 다르다. 따라서 거짓(FALSE)인 0이 출력된다.
  TIME('1:2:3') = TIME('01:02:03');
  -- 둘은 같다. 따라서 참(TRUE)인 1이 출력된다.
```

```sql
SELECT
  '2021-6-1 1:2:3' = '2021-06-01 01:02:03',
  -- 둘은 다르다. 따라서 거짓(FALSE)인 0이 출력된다.
  DATE('2021-6-1 1:2:3') = DATE('2021-06-01 01:02:03'),
  -- 둘은 같다. 따라서 참(TRUE)인 1이 출력된다.
  TIME('2021-6-1 1:2:3') = TIME('2021-06-01 01:02:03'),
  -- 둘은 같다. 따라서 참(TRUE)인 1이 출력된다.
  DATE('2021-6-1 1:2:3') = TIME('2021-06-01 01:02:03'),
  -- 둘은 다르다. 따라서 거짓(FALSE)인 0이 출력된다.
  DATE('2021-6-1') = DATE('2021-06-01 01:02:03'),
  -- 둘은 같다. 따라서 참(TRUE)인 1이 출력된다. 
  TIME('2021-6-1 1:2:3') = TIME('01:02:03');
  -- 둘은 같다. 따라서 참(TRUE)인 1이 출력된다.
```

```sql
SELECT * FROM Orders
WHERE
  OrderDate BETWEEN DATE('1997-1-1') AND DATE('1997-1-31');
```



|함수|설명|
|:--:|:--:|
|YEAR|주어진 DATETIME 값의 년도 반환|
|MONTHNAME|주어진 DATETIME 값의 월(영문) 반환|
|MONTH|주어진 DATETIME 값의 월 반환|
|WEEKDAY|주어진 DATETIME 값의 요일값 반환(ex. 월요일:0)|
|DAYNAME|주어진 DATETIME 값의 요일명 반환|
|DAYOFMONTH, DAY|주어진 DATETIME 값의 날짜(일) 반환|

```sql
SELECT
  OrderDate,
  YEAR(OrderDate) AS YEAR,
  MONTHNAME(OrderDate) AS MONTHNAME,
  MONTH(OrderDate) AS MONTH,
  WEEKDAY(OrderDate) AS WEEKDAY,
  DAYNAME(OrderDate) AS DAYNAME,
  DAY(OrderDate) AS DAY
FROM Orders;
```

```sql
SELECT
  OrderDate,
  CONCAT(
    CONCAT_WS(
      '/',
      YEAR(OrderDate), MONTH(OrderDate), DAY(OrderDate)
    ),
    ' ',
    UPPER(LEFT(DAYNAME(OrderDate), 3))
  )
FROM Orders;
-- Orders에 저장된 데이터 중 OrderDate column의 정보를 '연도/월/일 영문요일명'으로 변환하여 출력한다.
```

```sql
SELECT * FROM Orders
WHERE WEEKDAY(OrderDate) = 0;
```

|함수|설명|
|:--:|:--:|
|HOUR|주어진 DATETIME 값의 시 반환|
|MINUTE|주어진 DATETIME 값의 분 반환|
|SECOND|주어진 DATETIME 값의 초 반환|

```sql
SELECT
  HOUR(NOW()), MINUTE(NOW()), SECOND(NOW());
```

|함수|설명|
|:--:|:--:|
|ADDDATE, DATE_ADD|시간/날짜 더하기|
|SUBDATE, DATE_SUB|시간/날짜 빼기|

```sql
SELECT 
  ADDDATE('2021-06-20', INTERVAL 1 YEAR),
  -- 2022-06-20
  ADDDATE('2021-06-20', INTERVAL -2 MONTH),
  -- 2021-04-20
  ADDDATE('2021-06-20', INTERVAL 3 WEEK),
  -- 2021-07-11
  ADDDATE('2021-06-20', INTERVAL -4 DAY),
  -- 2021-06-16
  ADDDATE('2021-06-20', INTERVAL -5 MINUTE),
  -- 2021-06-19 23:55:00
  ADDDATE('2021-06-20 13:01:12', INTERVAL 6 SECOND);
  -- 2021-06-20 13:01:18
```

```sql
SELECT
  OrderDate,
  ADDDATE(OrderDate, INTERVAL 1 YEAR),
  ADDDATE(OrderDate, INTERVAL -2 MONTH),
  ADDDATE(OrderDate, INTERVAL 3 WEEK),
  ADDDATE(OrderDate, INTERVAL -4 DAY),
  ADDDATE(OrderDate, INTERVAL -5 MINUTE)
FROM Orders;
```

|함수|설명|
|:--:|:--:|
|DATEDIFF|두 시간/날짜 간 일수차|
|TIMEDIFF|두 시간/날짜 간 시간차|

```sql
SELECT
  TIMEDIFF('2021-06-21 15:20:35', '2021-06-21 16:34:41');
  -- -01:14:06
```

```sql
SELECT
  OrderDate,
  NOW(),
  DATEDIFF(OrderDate, NOW())
FROM Orders;
```

```sql
SELECT * FROM Orders
WHERE
  ABS(DATEDIFF(OrderDate, '1996-10-10')) < 5;
```

|함수|설명|
|:--:|:--:|
|LAST_DAY|해당 달의 마지막 날짜|

```sql
SELECT
  OrderDate,
  LAST_DAY(OrderDate),
  DAY(LAST_DAY(OrderDate)),
  DATEDIFF(LAST_DAY(OrderDate), OrderDate)
FROM Orders;
```

|함수|설명|
|:--:|:--:|
|DATE_FORMAT|시간/날짜를 지정한 형식으로 반환|

|형식|설명|
|:--:|:--:|
|%Y |년도 4자리|
|%y |년도 2자리|
|%M |월 영문 |
|%m |월 숫자 |
|%D |일 영문(1st, 2nd, 3rd...)|
|%d, %e|일 숫자(01~31)|
|%T |hh:mm:ss|
|%r |hh:mm:ss AM/PM|
|%H, %k |시 (~23)|
|%h, %l |시 (~12)|
|%i |분 |
|%S, %s|초 |
|%p |AM/PM |

```sql
SELECT
  DATE_FORMAT(NOW(), '%M %D, %Y %T'),
  DATE_FORMAT(NOW(), '%y-%m-%d %h:%i:%s %p'),
  DATE_FORMAT(NOW(), '%Y년 %m월 %d일 %p %h시 %i분 %s초');
```

```sql
SELECT REPLACE(
  REPLACE(
    DATE_FORMAT(NOW(), '%Y년 %m월 %d일 %p %h시 %i분 %s초'),
    'AM', '오전' -- %p에서 AM 으로 출력되면 '오전'으로 REPLACE
  ),
  'PM', '오후' -- %p에서 PM 으로 출력되면 '오후'로 REPLACE
)
```

|함수|설명|
|:--:|:--:|
|STR_TO_DATE(S, F)|S를 F형식으로 해석하여 시간/날짜 생성|

```sql
SELECT
  DATEDIFF(
    STR_TO_DATE('2021-06-04 07:48:52', '%Y-%m-%d %T'),
    STR_TO_DATE('2021-06-01 12:30:05', '%Y-%m-%d %T')
  ),
  -- 3
  TIMEDIFF(
    STR_TO_DATE('2021-06-04 07:48:52', '%Y-%m-%d %T'),
    STR_TO_DATE('2021-06-01 12:30:05', '%Y-%m-%d %T')
  );
  -- 67:18:47
```

```sql
SELECT
  OrderDate,
  DATEDIFF(
    STR_TO_DATE('1997-01-01 13:24:35', '%Y-%m-%d %T'),
    OrderDate
  ),
  TIMEDIFF(
    STR_TO_DATE('1997-01-01 13:24:35', '%Y-%m-%d %T'),
    STR_TO_DATE(CONCAT(OrderDate, ' ', '00:00:00'), '%Y-%m-%d %T')
  )
FROM Orders;
```

**CF**: 아래의 MySQL 공식 문서에서 보다 다양한 종류의 <u>시간/날짜 함수</u>를 확인할 수 있습니다.

<https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html>

2. 기타 

|함수|설명|
|:--:|:--:|
|IF(조건, T, F)|조건이 참이라면 T, 거짓이면 F를 반환|

```sql
SELECT IF (1 > 2, '1는 2보다 크다.', '1은 2보다 작다.');
```

**NOTE**: 보다 복잡한 조건은 CASE문을 사용한다.

```sql
SELECT
CASE
  WHEN -1 > 0 THEN '-1은 양수다.'
  WHEN -1 = 0 THEN '-1은 0이다.'
  ELSE '-1은 음수다.'
END;
```

```sql
SELECT
  Price,
  IF (Price > 30, 'Expensive', 'Cheap'),
  CASE
    WHEN Price < 20 THEN '저가'
    WHEN Price BETWEEN 20 AND 30 THEN '일반'
    ELSE '고가'
  END
FROM Products;
```


|함수|설명|
|:--:|:--:|
|IFNULL(A, B)|A가 NULL일 경우 B 출력|

```sql
SELECT
  IFNULL('A', 'B'),
  -- A 출력
  IFNULL(NULL, 'B');
  -- NULL 출력
```


## [조건에 따라 그룹으로 묶기]


1. GROUP BY - 조건에 따라 집계된 값을 가져온다.

```sql
SELECT Country FROM Customers
GROUP BY Country;
-- Customers의 Country col.에 저장된 모든 국가명이 중복되지 않게 하나씩 GROUP BY로 묶여 하나로 나타나게 된다.
```

```sql
SELECT CategoryID FROM Products
GROUP BY CategoryID;
-- Products의 CategoryID col.에 저장된 모든 CategoryID 정보들이 중복되지 않게 하나씩 GROUP BY로 묶여 하나로 나타나게 된다.
```

**NOTE** 여러 column을 기준으로 그룹화할 수도 있다.

```sql
SELECT 
  Country, City,
  CONCAT_WS(', ', City, Country)
FROM Customers
GROUP BY Country, City;
-- Country와 City가 겹치지 않는 것들을 기준으로 GROUP BY로 묶여서 나타나게 된다.
```

**APPLICATION** 그룹 함수의 활용

```sql
SELECT
  COUNT(*), OrderDate
FROM Orders
GROUP BY OrderDate;
-- OrderDate를 기준으로 해당 일자에 몇 개의 주문이 있었는지 COUNT를 하여 나타낸다.
```

```sql
SELECT
  ProductID,
  SUM(Quantity) AS QuantitySum
FROM OrderDetails
GROUP BY ProductID
ORDER BY QuantitySum DESC;
-- OrderDetails에 저장된 데이터 중 각각의 ProductID에 해당하는 수량의 합(QuantitySum)을 내림차순으로 나타내어 준다.
```

```sql
SELECT
  CategoryID,
  MAX(Price) AS MaxPrice, 
  MIN(Price) AS MinPrice,
  TRUNCATE((MAX(Price) + MIN(Price)) / 2, 2) AS MedianPrice,
  TRUNCATE(AVG(Price), 2) AS AveragePrice
FROM Products
GROUP BY CategoryID;
-- Products에 있는 데이터 중 CategoryID col.을 GROUP BY하여 각각의 Price col. 최댓값과 최솟값, 중간값, 그리고 평균값을 나타낸다.
```


```sql
SELECT 
  CONCAT_WS(', ', City, Country) AS Location,
  COUNT(CustomerID)
FROM Customers
GROUP BY Country, City;
-- Customers에 있는 데이터 중 City와 Country를 GROUP BY로 묶어서 Location이라는 별칭에 별도 col.으로 저장하고, 해당 Location 별로 CustomerID를 COUNT하여 나타낸다.
```

**TIP**: WITH ROLLUP - 전체의 집계값

```sql
SELECT
  Country, COUNT(*)
FROM Suppliers
GROUP BY Country
WITH ROLLUP;
```

+ 집계함수의 쿼리 끝에 `WITH ROLLUP;`을 추가하여 각 col.의 합계를 나타낼 수 있다.
+ **CAUTION** `ORDER BY`와는 함께 사용할 수 없다.

**TIP** HAVING - 그룹화된 데이터 필터링

```sql
SELECT
  Country, COUNT(*) AS Count
FROM Suppliers
GROUP BY Country
HAVING Count >= 3;
-- Suppliers에 저장된 데이터 중 Country를 GROUP BY로 묶어서 그 수를 COUNT하고 그 중 COUNT한 값이 3보다 크거나 같은 경우의 국가와 Count col.을 나타낸다.
```

**NOTE**: WHERE는 그룹하기 전 데이터 선별과정에 사용, HAVING은 그룹 후 집계를 필터링 하는 과정에서 사용된다.

```sql
SELECT
  COUNT(*) AS Count, OrderDate
FROM Orders
WHERE OrderDate > DATE('1996-12-31')
GROUP BY OrderDate
HAVING Count > 2;
-- Oreders에 저장된 데이터 중 OrderDate col.에서 1996-12-31 이후인 조건을 만족하는 데이터를 선별한다.
-- 선별한 OrderDate (즉, 1996-12-31 이후 OrderDate) 중 그 Count 값이 2보다 큰 OrderDate와 그 Count를 출력한다.
```

```sql
SELECT
  CategoryID,
  MAX(Price) AS MaxPrice, 
  MIN(Price) AS MinPrice,
  TRUNCATE((MAX(Price) + MIN(Price)) / 2, 2) AS MedianPrice,
  TRUNCATE(AVG(Price), 2) AS AveragePrice
FROM Products
WHERE CategoryID > 2
GROUP BY CategoryID
HAVING
  AveragePrice BETWEEN 20 AND 30
  AND MedianPrice < 40;
```


2. DISTINCT - 중복된 값들을 제거한다.

+ GROUP BY와 달리 집계함수가 사용되지 않는다.
+ GROUP BY와 달리 정렬하지 않으므로 결과의 출력에 소요되는 시간이 적다.

```sql
SELECT DISTINCT CategoryID
FROM Products;
-- 위의 GROUP BY를 사용한 쿼리와 결과를 비교하여 그 차이를 파악할 수 있다.
```

```sql
SELECT COUNT DISTINCT CategoryID
FROM Products;
-- 오류 발생('cause DISTINCT에서는 집계함수(MAX, MIN, COUNT, AVG 등)를 사용할 수 없다.)
```

```sql
SELECT DISTINCT Country
FROM Customers
ORDER BY Country;
-- GROUP BY와 동일한 결과를 얻기 위해서는 ORDER BY를 사용하여 정렬해주어야 한다.
```

```sql
SELECT DISTINCT Country, City
FROM Customers
ORDER BY Country, City;
```

**NOTE**: GROUP BY와 DISTINCT 함께 활용하기

```sql
SELECT
  Country,
  COUNT(DISTINCT CITY)
FROM Customers
GROUP BY Country;
-- Customers에서 Country col.별 겹치지 않는 City의 숫자를 count한 뒤, 해당 Country col.을 GROUP BY로 묶어서 정렬해 나타낸다.
-- 즉, 한 국가명에 중복되는 City를 제거한 City의 갯수가 나타나게 된다.
```

