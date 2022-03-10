---
layout: post
title: "[초보자를 위한 파이썬 300제] 021~050"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 021 ~ 050
---

### 21. 문자열 인덱싱

letters가 바인딩하는 문자열에서 첫번째와 세번째 문자를 출력하세요.
```python
letters = "python"
print(letters[0], letters[2])
>>> p t
```

### 22. 문자열 슬라이싱

자동차 번호가 다음과 같을 때 뒤에서 4자리까지만 출력하세요.
```python
license_plate = "24가 2210"
print(license_plate[4:])
>>> 2210
```

### 23. 문자열 인덱싱
```python
string = "홀짝홀짝홀짝"
print(string[::2])
# 슬라이싱을 할 때 [start index:end index:구간]
>>> 홀홀홀
```

### 24. 문자열 슬라이싱
```python
string = "PYTHON"
print(string[::-1])
>>> NOHTYP
```

### 25. 문자열 치환

아래의 전화번호에서 하이푼("-")을 제거하고 출력하시오.
```python
phone_number = "010-1111-2222"
new_phone_number = phone_number.replace("-", " ")
print(new_phone_number)
>>> 010 1111 2222
```

### 26. 문자열 다루기

25번의 전화번호를 모두 붙여서 출력하시오.
```python
new_phone_number2 = phone_number.replace("-", "")
print(new_phone_number2)
>>> 01011112222
```

### 27. 문자열 다루기

URL에 저장된 웹페이지 주소에서 도메인을 출력하시오.
```python
url = "http://sharebook.kr"
#print(url[-2:])
url_split = url.split(".")
print(url_split[-1])
>>> kr
```

### 28. 문자열은 immutable

```python
lang = 'python'
lang[0] = 'P'
print(lang)

# 문자열은 수정할 수 없습니다.
# 실행결과를 확인해보면 문자열이 할당(assignment) 매서드를 지원하지 않음
```

```python
TypeError                                 Traceback (most recent call last)
<ipython-input-24-0589fe1437c1> in <module>()
      1 # 028. 문자열은 immutable
      2 lang = 'python'
----> 3 lang[0] = 'P'
      4 print(lang)
      5 

TypeError: 'str' object does not support item assignment
```

### 29. replace 메서드

소문자 "a"를 대문자 "A"로 변경하시오.
```python
string = "abcdfe2a354a32a"
print(string.replace('a', 'A'))
>>> Abcdfe2A354A32A
```

### 30. replace 메서드

```python
string = 'abcd'
string.replace('b', 'B')
print(string)

# "abcd"가 그대로 출력됨
# 문자열을 변경할 수 없는 자료형이기 때문이다.
# replace 메서드를 사용하면 원본은 그대로 둔채로 변경된 새로운 문자열 객체를 return해줍니다.
>>> abcd
```

### 31. 문자열 합치기

```python
a = '3'
b = '4'
print(a + b)
# 문자열 덧셈을 하면 문자가 합쳐진다.
>>> 34
```

### 32. 문자열 곱하기

```python
print("HI" * 3)
# "HI"를 3번 연속하여 출력한다.
>>> HIHIHI
```

### 33. 문자열 곱하기

```python
print("-" * 80)
>>> --------------------------------------------------------------------------------
```

### 34. 문자열 곱하기

```python
t1 = "python"
t2 = "java"
a = t1 + " " + t2 + " "
print(a * 4)
>>> python java python java python java python java 
```

### 35. 문자열 출력

변수에 다음과 같이 문자열과 정수가 바인딩되어 있을 때 "% formatting"을 사용해서 다음과 같이 출력하시오.

```python
name1 = "김민수"
age1 = 10
name2 = "이철희"
age2 = 13
print("이름: %s  나이: %d" %(name1, age1))
print("이름: %s  나이: %d" %(name2, age2))
>>> 이름: 김민수  나이: 10
>>> 이름: 이철희  나이: 13
```

### 36. 문자열 출력

문자열의 format() 메서드를 사용해서 035번 문제를 다시 풀어보시오.

```python
print("이름: {name} 나이 : {age}".format(name=name1, age=age1))
print("이름: {name} 나이 : {age}".format(name=name2, age=age2))
>>> 이름: 김민수 나이 : 10
>>> 이름: 이철희 나이 : 13
```

### 37. 문자열 출력

f-string을 사용하여 35번 문제를 다시 풀어보시오.

```python
name1 = "김민수"
age1 = 10
name2 = "이철희"
age2 = 13
print(f"이름: {name1} 나이: {age1}")
print(f"이름: {name2} 나이: {age2}")
# f-string은 문자열 앞에 f가 붙어있는 형태입니다.f-string을 사용하면 {변수}와 같은 형태로 문자열 사이에 타입과 상관없이 값을 출력할 수 있습니다.

>>> 이름: 김민수 나이: 10
>>> 이름: 이철희 나이: 13
```

### 38. 컴마 제거하기

삼성전자의 상장주식수가 다음과 같습니다. 컴마를 제거한 후 이를 정수 타입으로 변환해보시오.

```python
상장주식수 = "5,969,782,550"

# 정수형으로 타입을 변환하려면 int() 함수를 사용하면 됨
# 이 때 숫자 형태의 문자열에 컴마가 있는 경우 바로 변환되지 않습니다.
# 먼저 문자열의 replace 메서드로 컴마를 제거한 후 변환해야합니다.

remove_comma = 상장주식수.replace(",","")
type_transition = int(remove_comma)
print(type_transition, type(type_transition))

>>> 5969782550 <class 'int'>
```

### 39. 문자열 슬라이싱

다음과 같은 문자열에서 "2020/03"만 출력하시오.

```python
분기 = "2020/03(E) (IFRS연결)"
print(분기[:7])
>>> 2020/03
```

### 40. strip 메서드

문자열의 좌우의 공백이 있을 때 이를 제거하여보시오.

```python
data = "  삼성전자  "
print(data.strip())

# 문자열에서 strip() 메서드를 사용하면 좌우 공백을 제거할 수 있음.
# 이때 원본 문자열은 그대로 유지되고 공백이 제거된 새로운 문자열이 반환됩니다.

>>> 삼성전자
```

### 41. upper method

다음 문자열을 대문자로 변경하시오.

```python
ticker = "btc_krw"
print(ticker.upper())
>>> BTC_KRW
```

### 42. lower method

다음 문자열을 소문자로 변경하시오.

```python
ticker = "BTC_KRW"
print(ticker.lower())
>>> btc_krw
```

### 43. capitalize method

문자열 "hello"가 있을 때 이를 "Hello"로 변경하시오.

```python
string = "hello"
print(string.capitalize())
print(string.title())

>>> Hello
>>> Hello
```

### 44. endswith method

파일 이름이 문자열로 저장되어 있을 때 endswith method를 사용해서 파일이름이 "xlsx"로 끝나는지 확인하시오.

```python
file_name = "보고서.xlsx"
file_name.endswith("xlsx")

>>> True
```

### 45. endwith method

파일 이름이 문자열로 저장되어 있을 때 endswith method를 사용해서 파일 이름이 "xlsx" 또는 "xls"로 끝나는지 확인하시오.

```python
file_name = "보고서.xlsx"
file_name.endswith(("xlsx", "xls"))

>>> True
```

### 46. startwith method

파일 이름이 문자열로 저장되어 있을 때 startwith method를 사용해서 파일 이름이 '2020'로 시작하는지 확인하시오.

```python
file_name = "2020_보고서.xlsx"
file_name.startswith("2020")

>>> True
```

### 47. split method

다음과 같이 날짜를 표현하는 문자열이 있을 때 연도, 월, 일로 나눠보시오.

```python
data = "2020-05-01"
splitted_data = data.split("-")
print(splitted_data)
>>> ['2020', '05', '01']
```

### 48. 다음과 같이 문자열이 있을 때 btc와 krw로 나누어 보시오.

```python
ticker = "btc_krw"
ticker = "btc_krw"
print(ticker.split("_"))

>>> ['btc', 'krw']
```

### 49. 다음과 같이 날짜를 표현하는 문자열이 있을 때, 연도, 월, 일로 나누어 보시오.

```python
date = "2021-05-01"
date = "2021-05-01"
print(date.split("-"))

>>> ['2021', '05', '01']
```

### 50. rstrip method

문자열의 오른쪽에 공백이 있을 때 이를 제거하시오.

```python
data = "039490     "
data = "039490    "
data1 = data.rstrip()
print(data1)
print(type(data1))

# rstrip() method를 사용하면 오른쪽 공백이 제거된 새로운 문자열 객체가 반환됩니다.
# 그 값을 data라는 변수가 새로 바인딩합니다.
# 기존의 공백이 포함된 문자열은 메모리에서 자동으로 삭제됩니다.

>>> 039490
>>> <class 'str'>
```
