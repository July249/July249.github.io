---
layout: post
title: "[초보자를 위한 파이썬 300제] 011~020"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 011~020
---

### 11. 변수 사용하기

삼성전자라는 변수로 50,000원을 바인딩해보세요.

```python
samsung_stock = 50000
```

삼성전자 주식 10주를 보유하고 있을 때 총 평가금액을 출력하세요.

```python
print(samsung_stock * 10)
>>> 500000
```

### 12. 변수 사용하기

변수를 사용해서 시가총액, 현재가, PER 등을 바인딩해보세요.

```python
total_price_stock = 298000000000000
current_price = 50000
PER = 15.79
print(total_price_stock, type(total_price_stock))
print(current_price, type(current_price))
print(PER, type(PER))

>>> 298000000000000 <class 'int'>
>>> 50000 <class 'int'>
>>> 15.79 <class 'float'>
```

### 13. 문자열 출력

```python
s = 'hello'
t = 'python'
print(str(s) + "! " + str(t))

>>> hello! python
```

### 14. 파이썬을 이용한 값 계산

```python
2 + 2 * 3

>>> 8
```

### 15. type 함수

```python
a = 128
print(type(a))

a = "132"
print(type(a))

>>> <class 'int'>
>>> <class 'str'>
```

### 16. 문자열을 정수로 변환

```python
num_str = '720'
print(type(int(num_str)))
print(int(num_str))

>>> <class 'int'>
>>> 720
```

### 17. 정수를 문자열 100으로 변환

```python
num = 100
print(str(num))
print(type(str(100)))

>>> 100
>>> <class 'str'>
```

### 18. 문자열을 실수로 변환

```python
num_str = 15.79
num_float = float(num_str)
print(num_float)
print(type(num_float))

>>> 15.79
>>> <class 'float'>
```

### 19. 문자열을 정수로 변환

year라는 변수가 문자열 타입의 연도를 바인딩하고 있습니다. 이를 정수로 변환한 후 최근 3년의 연도를 화면에 출력 해보세요.

```python
year = '2020'
year_int = int(year)
print(year_int)
print(year_int - 1)
print(year_int - 2)

>>> 2020
>>> 2019
>>> 2018
```

### 20. 파이썬 계산

에어컨이 월 48,584원에 무이자 36개월의 조건으로 홈쇼핑에서 판매되고 있습니다.
총 금액은 계산한 후 이를 화면에 출력해보세요.(변수 사용하기)

```python
monthly_price = 48584
total_price = monthly_price * 36
print(total_price)

>>> 1749024
```
