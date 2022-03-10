---
layout: post
title: "[초보자를 위한 파이썬 300제] 071~080"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 071 ~ 080
---

### 71. my_variable 이름의 비어있는 튜플을 만드시오.

```python
my_variable = ()
print(type(my_variable))

>>> <class 'tuple'>
```

### 72. 다음 영화제목을 movie_rank 이름의 튜플에 저장하라(단, 순위정보는 저장하지 않는다.)

```python
movie_rank = ('닥터 스트레인지', '스플릿', '럭키')
print(movie_rank)
print(type(movie_rank))

>>> ('닥터 스트레인지', '스플릿', '럭키')
>>> <class 'tuple'>
```

### 73. create a tuple which save 1.

```python
a = (1)
print(a)
print(type(a))
# 위와 같이 괄호와 함께 하나의 정수값만 정의하면 튜플이 정의될 것 같지만 그렇지 않습니다.
# type()을 출력해보면 파이썬은 튜플이 아닌 정수로 인식합니다.

my_tuple = (1,)
print(my_tuple)
print(type(my_tuple))
# 하나의 데이터가 저장되는 경우, 쉼표를 입력해야만 합니다.

>>> 1
>>> <class 'int'>
>>> (1,)
>>> <class 'tuple'>
```

### 74. 다음 코드를 실행해보고 오류가 발생하는 원인을 설명하시오.

```python
t = (1, 2, 3)
t[0] = 'a'
# 튜플의 원소는 수정이 불가능합니다.
```
```python
TypeError                                 Traceback (most recent call last)
<ipython-input-30-ae33e7781bd5> in <module>()
      2 # 다음 코드를 실행해보고 오류가 발생하는 원인을 설명하시오.
      3 t = (1, 2, 3)
----> 4 t[0] = 'a'
      5 # 튜플의 원소는 수정이 불가능합니다.

TypeError: 'tuple' object does not support item assignment
```

### 75. t가 바인딩하는 데이터 타입은 무엇인가?

```python
t = 1, 2, 3, 4
print(type(t))
# 원칙적으로 튜플은 괄호와 함께 데이터를 정의해야 하지만, 사용자 편의를 위하여 괄호 없이도 동작합니다.

>>> <class 'tuple'>
```

### 76. 변수 t가 ('A', 'b', 'c') 튜플을 가리키도록 수정하라.

```python
t = ('a', 'b', 'c')
l = list(t) # 튜플을 리스트 "l"로 저장
print(type(l))
l[0] = "A" # 리스트 "l"의 a를 A로 변경
t = tuple(l) # 리스트 "l"을 튜플로 변경하여 "t"에 저장
print(t)

>>> <class 'list'>
>>> ('A', 'b', 'c')
```

### 77. 다음 튜플을 리스트로 변환하라.

```python
interest = ('삼성전자', 'LG전자', 'SK Hynix')
print(list(interest))

>>> ['삼성전자', 'LG전자', 'SK Hynix']
```

### 78. 다음 리스트를 튜플로 변경하라.

```python
interest = ['삼성전자', 'LG전자', 'SK Hynix']
print(tuple(interest))

>>> ('삼성전자', 'LG전자', 'SK Hynix')
```

### 79. 튜플 언팩킹

다음 코드의 실행 결과를 예상하라.

```python
temp = ('apple', 'banana', 'cake')
a, b, c = temp
print(a, b, c)

>>> apple banana cake
```

### 80. range 함수

1부터 99까지의 정수 중 짝수만 저장된 튜플을 생성하라.

```python
data = tuple(range(2, 100, 2))
print(data)

>>> (2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98)
```
