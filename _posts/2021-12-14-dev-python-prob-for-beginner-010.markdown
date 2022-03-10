---
layout: post
title: "[초보자를 위한 파이썬 300제] 001~010"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 001~010
---

### 2. print 기초

화면에 `Mary's cosmetics`를 출력하시오.

```python
# solution
print("Mary's cosmetics")

# my solution
print('Mary\'s cosmetics')
```

### 3. print 기초

화면에 아래 문장을 출력하시오.
```python
신씨가 소리질렀다. "도둑이야".
```

```python
# solution
print('신씨가 소리질렀다. "도둑이야".')

# my solution
print('신씨가 소리질렀다.￦"도둑이야￦".')
```

> 2번과 3번의 문제에서 문자열 내에 큰따옴표 또는 작은따옴표가 있는 경우, 교재의 해설(solution)과 같이 작성하는 방법 이외에도 문자열 내에 있는 큰따옴표 또는 작은따옴표 앞에 backslash("\")를 같이 입력하여 출력하여도 동일한 결과를 얻을 수 있다.

### 6. print 여러 데이터의 출력

print 함수에 두 개의 단어를 입력한 예제입니다. 아래 코드의 출력 결과를 예상해봅시다.

```python
print('오늘은','일요일')
```

> 여러 값을 출력하려면 print 함수에서 쉼표로 구분해주면 됩니다. 따라서 오늘은 다음에 공백이 하나 있고 일요일이 출력됩니다.

```python
# Output: 오늘은 일요일
```

### 9. print 줄바꿈

다음 코드를 수정하여 줄바꿈이 없이 출력하세요. (힌트: end='') print 함수는 두 번 사용합니다. 세미콜론 (;)은 한줄에 여러 개의 명령을 작성하기 위해 사용합니다.

```python
print("first");print("second")
```
```python
print("first", end=" "); print("second")

>>> Output: first second
```
