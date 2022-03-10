---
layout: post
title: "[초보자를 위한 파이썬 300제] 081~100"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 081 ~ 100
---

### 081. 별 표현식

기본적으로 데이터 언패킹은 좌변의 변수와 우변의 데이터 개수가 같아야 합니다.

하지만 star expression을 사용하면 변수의 개수가 달라도 데이터 언패킹을 할 수 있습니다.

튜플에 저장된 데이터 중에서 앞에 있는 두 개의 데이터만 필요할 경우 나머지 데이터의 언패킹 코드를 작성할 필요가 없습니다.

```python
>> a, b, *c = (0, 1, 2, 3, 4, 5)
>> a
0
>> b
1
>> c
[2, 3, 4, 5]
```

다음과 같이 10개의 값이 저장된 scores 리스트가 있을 때, start expression을 사용하여 좌측 8개의 값을 valid_score 변수에 바인딩하여라.

```python
scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
*valid_score, _, _ = scores
print(valid_score)

>>> [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5]
```

### 82. 다음과 같이 10개의 값이 저장된 scores 리스트가 있을 때, start expression을 사용하여 우측 8개의 값을 valid_score 변수에 바인딩하여라.

```python
scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
_, _, *valid_score = scores
print(valid_score)

>>> [8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
```

### 83. 다음과 같이 10개의 값이 저장된 scores 리스트가 있을 때, start expression을 사용하여 가운데 있는 8개의 값을 valid_score 변수에 바인딩하여라.

```python
scores = [8.8, 8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8, 9.4]
_, *valid_score, _ = scores
print(valid_score)

>>> [8.9, 8.7, 9.2, 9.3, 9.7, 9.9, 9.5, 7.8]
```

### 84. 빈 딕셔너리

temp 이름의 비어있는 딕셔너리를 만들어라.

```python
temp = {}
print(temp)
print(type(temp))

>>> {}
>>> <class 'dict'>
```

### 85. 다음 아이스크림 이름과 희망 가격을 딕셔너리로 구성하라.

```python
icecream = {'메로나': 1000, '폴라포': 1200, '빵빠레': 1800}
print(icecream)

>>> {'메로나': 1000, '폴라포': 1200, '빵빠레': 1800}
```

### 86. 85번의 딕셔너리에 아래 아이스크림 가격정보를 추가하라.

```python
icecream = {'메로나': 1000, '폴라포': 1200, '빵빠레': 1800}
icecream['죠스바'] = 1200
icecream['월드콘'] = 1500
print(icecream)

>>> {'메로나': 1000, '폴라포': 1200, '빵빠레': 1800, '죠스바': 1200, '월드콘': 1500}
```

### 87. 다음 딕셔너리를 사용하여 메로나 가격을 출력하라

```python
ice = {'메로나': 1000, '폴로포': 1200, '빵빠레': 1800, '죠스바': 1200, '월드콘': 1500}
print('메로나 가격:', ice['메로나'])
# key!!

>>> 메로나 가격: 1000
```

### 88. 다음 딕셔너리에서 메로나의 가격을 1300으로 수정하라.

```python
ice = {'메로나': 1000, '폴로포': 1200, '빵빠레': 1800, '죠스바': 1200, '월드콘': 1500}
ice["메로나"] = 1300
print(ice)

>>> {'메로나': 1300, '폴로포': 1200, '빵빠레': 1800, '죠스바': 1200, '월드콘': 1500}
```

### 89. 다음 딕셔너리에서 메로나를 삭제하라.

```python
ice = {'메로나': 1000, '폴로포': 1200, '빵빠레': 1800, '죠스바': 1200, '월드콘': 1500}
del ice['메로나']
print(ice)

>>> {'폴로포': 1200, '빵빠레': 1800, '죠스바': 1200, '월드콘': 1500}
```

### 90. 다음 코드에서 에러가 발생한 원인을 설명하라.

```python
>> icecream = {'폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000}
>> icecream['누가바']
Traceback (most recent call last):
  File "<pyshell#69>", line 1, in <module>
    icecream['누가바']
KeyError: '누가바'
```

딕셔너리에 없는 key를 사용해서 인덱싱을 하였기 때문에 에러가 발생하였다.

### 91. 딕셔너리 생성

아래의 표에서, 아이스크림 이름을 키값으로, (가격, 재고) 리스트를 딕셔너리의 값으로 저장하라.

딕셔너리의 이름은 inventory로 한다.

```python
inventory = {"메로나": [300, 20], "비비빅": [400, 3], "죠스바": [250, 100]}
print(inventory)

>>> {'메로나': [300, 20], '비비빅': [400, 3], '죠스바': [250, 100]}
```

### 92. 딕셔너리 인덱싱

inventory 딕셔너리에서 메로나의 가격을 화면에 출력하라.

```python
inventory = {"메로나": [300, 20], "비비빅": [400, 3], "죠스바": [250, 100]}
print(inventory["메로나"][0], "원")

>>> 300 원
```

### 93. 딕셔너리 인덱싱

inventory 딕셔너리에서 메로나의 재고를 화면에 출력하라.

```python
inventory = {"메로나": [300, 20], "비비빅": [400, 3], "죠스바": [250, 100]}
print(inventory["메로나"][1], "개")

>>> 20 개
```

### 94. 딕셔너리 추가

inventory 딕셔너리에 아래 데이터를 추가하라.

```python
inventory = {"메로나": [300, 20], "비비빅": [400, 3], "죠스바": [250, 100]}
inventory["월드콘"] = [500, 7]
print(inventory)

>>> {'메로나': [300, 20], '비비빅': [400, 3], '죠스바': [250, 100], '월드콘': [500, 7]}
```

### 95. 딕셔너리 keys() method

다음 딕셔너리로부터 key 값으로만 구성된 리스트를 생성하라.

```python
icecream = {'탱크보이': 1200, '폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000}
ice = list(icecream.keys())
print(ice)

>>> ['탱크보이', '폴라포', '빵빠레', '월드콘', '메로나']
```

### 96. 딕셔너리 values() method

다음의 딕셔너리에서 values 값으로만 구성된 리스트를 생성하라.

```python
icecream = {'탱크보이': 1200, '폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000}
ice = list(icecream.values())
print(ice)

>>> [1200, 1200, 1800, 1500, 1000]
```

### 97. 딕셔너리 values() method

icecream 딕셔너리에서 아이스크림 판매 금액의 총합을 출력하라.

```python
icecream = {'탱크보이': 1200, '폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000}
ice = list(icecream.values())
print(sum(ice))

>>> 6700
```

### 98. 딕셔너리 update method

아래의 new_product 딕셔너리를 다음 icecream 딕셔너리에 추가하라.

```python
icecream = {'탱크보이': 1200, '폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000}
new_product = {'팥빙수':2700, '아맛나':1000}
icecream.update(new_product)
print(icecream)

>>>{'탱크보이': 1200, '폴라포': 1200, '빵빠레': 1800, '월드콘': 1500, '메로나': 1000, '팥빙수': 2700, '아맛나': 1000}
```

### 99. zip과 dict

아래 두 개의 튜플을 하나의 딕셔너리로 변환하라. keys를 키로, vals를 값으로 result 이름의 딕셔너리로 저장한다.

```python
keys = ("apple", "pear", "peach")
vals = (300, 250, 400)
result = dict(zip(keys, vals))
result_missing_dict = zip(keys, vals)
print(result)
print(result_missing_dict)

>>> {'apple': 300, 'pear': 250, 'peach': 400}
>>> <zip object at 0x7f737db2d5a0>
```

### 100. zip과 dict

date와 close_price 두 개의 리스트를 close_table 이름의 딕셔너리로 생성하라.

```python
date = ['09/05', '09/06', '09/07', '09/08', '09/09']
close_price = [10500, 10300, 10100, 10800, 11000]
close_table = dict(zip(date, close_price))
print(close_table)

# Dictionary Comprehension
# {key:value for factor in sequence [if 조건식]}

close_table_compre = {date:close_price for date, close_price in zip(date, close_price)}
print(close_table_compre)

>>> {'09/05': 10500, '09/06': 10300, '09/07': 10100, '09/08': 10800, '09/09': 11000}
>>> {'09/05': 10500, '09/06': 10300, '09/07': 10100, '09/08': 10800, '09/09': 11000}
```
