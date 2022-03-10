---
layout: post
title: "[초보자를 위한 파이썬 300제] 201~240"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 201~240
---

### 201. "비트코인" 문자열을 화면에 출력하는 print_coin() 함수를 정의하라.

```python
def print_coin():
  print('비트코인')
```

### 202. 201번에서 정의한 함수를 호출하라.

```python
print_coin()

>>> 비트코인
```

### 203. 201번에서 정의한 print_coin 함수를 15번 호출하라

```python
for i in range(15):
  print_coin()

>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
>>> 비트코인
```

### 204. "비트코인" 문자열을 100번 화면에 출력하는 print_coins() 함수를 정의하라.

```python
def print_coin():
  for i in range(100):
    print('비트코인')
```

### 205. 아래의 에러가 발생하는 이유에 대해 설명하라.

```python
hello()
def hello():
    print("Hi")
```

실행 예

```python
NameError: name 'hello' is not defined
```
---

에러 발생 이유: 함수가 정의되기 전에 'hello()'로 첫문장에서 호출되었기 때문에 에러가 발생하였다.

### 206. 아래 코드의 실행 결과를 예측하라.

```python
def message() :
    print("A")
    print("B")

message()
print("C")
message()
```

---

예측 결과

```python
A
B
C
A
B
```

### 207. 아래 코드의 실행 결과를 예측하라. (읽기 어려운 코드의 예입니다.)

```python
print("A")

def message() :
    print("B")

print("C")
message()
```

---


예측 결과

```python
A
C
B
```

### 208. 아래 코드의 실행 결과를 예측하라. (읽기 어려운 코드의 예입니다.)

```python
print("A")
def message1() :
    print("B")
print("C")
def message2() :
    print("D")
message1()
print("E")
message2()
```

---


예측 결과

```python
A
C
B
E
D
```

### 209. 아래 코드의 실행 결과를 예측하라.

```python
def message1():
    print("A")

def message2():
    print("B")
    message1()

message2()
```

---


예측 결과

```python
B
A
```

### 210. 아래 코드의 실행 결과를 예측하라.

```python
def message1():
    print("A")

def message2():
    print("B")

def message3():
    for i in range (3) :
        message2()
        print("C")
    message1()

message3()
```

---


예측 결과

```python
B
C
B
C
B
C
A
```

### 211. 함수의 호출 결과를 예측하라.

```python
def 함수(문자열) :
    print(문자열)

함수("안녕")
함수("Hi")
```

---

예측 결과

```python
안녕
Hi
```

### 212. 함수의 호출 결과를 예측하라.

```python
def 함수(a, b):
  print(a+b)

함수(3,4)
함수(7,8)
```

---


예측 결과

```python
7
15
```

### 213. 아래와 같은 에러가 발생하는 원인을 설명하라.

```python
def 함수(문자열) :
    print(문자열)
함수()
```

```python
TypeError: 함수() missing 1 required positional argument: '문자열'
```

---


에러 발생 이유: argument에 parameter가 입력되지 않음.

### 214. 아래와 같은 에러가 발생하는 원인을 설명하라.

```python
def 함수(a, b) :
    print(a + b)

함수("안녕", 3)
```

```python
TypeError: must be str, not int
```

---


에러 발생 이유: 함수 호출 시, 문자열과 숫자를 입력하였기 때문에 문자열과 숫자로는 서로 더할 수 없기 때문에 str형과 int형 중 하나로 통일하라는 의미의 에러가 발생한 것입니다.
만일 함수('안녕', '3')을 입력하면 에러가 없이 "안녕3"이라는 문자열이 출력될 것입니다.

### 215. 하나의 문자를 입력받아 문자열 끝에 ":D" 스마일 문자열을 이어 붙여 출력하는 print_with_smile 함수를 정의하라.

```python
def print_with_smile(input):
  print(input,":D")
```

### 216. 215에서 정의한 함수를 호출하라. 파라미터는 "안녕하세요"로 입력하라.

```python
print_with_smile('안녕하세요')

>>> 안녕하세요 :D
```


### 217. 현재 가격을 입력 받아 상한가 (30%)를 출력하는 print_upper_price 함수를 정의하라.

```python
def print_upper_price(current_price):
  print(current_price * 1.3)
```

### 218. 두 개의 숫자를 입력받아 두 수의 합을 출력하는 print_sum 함수를 정의하라.

```python
def print_sum(a, b):
  print(a+b)
```

### 219. 두 개의 숫자를 입력받아 합/차/곱/나눗셈을 출력하는 print_arithmetic_operation 함수를 작성하라.

```python
print_arithmetic_operation(3, 4)
```

```python
3 + 4 = 7
3 - 4 = -1
3 * 4 = 12
3 / 4 = 0.75
```

---


```python
def print_arithmetic_operation(a, b):
  print(a, '+', b, '=', a+b)
  print(a, '-', b, '=', a-b)
  print(a, '*', b, '=', a*b)
  print(a, '/', b, '=', a/b)

print_arithmetic_operation(3, 4)

>>> 3 + 4 = 7
>>> 3 - 4 = -1
>>> 3 * 4 = 12
>>> 3 / 4 = 0.75
```

### 220. 세 개의 숫자를 입력받아 가장 큰수를 출력하는 print_max 함수를 정의하라. 단 if 문을 사용해서 수를 비교하라.

```python
def print_max(a, b, c):
  if (a > b and a > c):
    max_val = a
  elif (b > a and b > c):
    max_val = b
  elif (c > a and c > b):
    max_val = c
  print(max_val)
```

**max 함수**

: 입력된 수들의 대소를 비교하여 가장 큰 수를 출력하는 함수로 max 함수가 있습니다. 위 220번 문제와 같이 코드를 작성하지 않고, 간단히 max(a, b, c)로 작성하여도 동일한 결과를 출력하여 줍니다.


### 221. 입력된 문자열을 역순으로 출력하는 print_reverse 함수를 정의하라.

```python
print_reverse("python")
```

```python
nohtyp
```

---


```python
# my solution
def print_reverse(string):
  string_to_list = [] # 입력 받은 string을 list로 변환하여 저장할 빈 리스트
  for i in range(len(string)): # 입력 받은 string의 크기만큼 for문을 돌림.
    string_to_list.append(string[(len(string)-1)-i]) # 입력 받은 string을 리스트에 revese하여 저장
  reversed_string = ''.join(string_to_list) # 리스트를 문자열로 변환
  print(reversed_string) # 문자열로 변환된 결과를 출력

print_reverse('python')

>>> nohtyp
```

```python
# solution
# 슬라이싱을 사용하여 문자열을 역순으로 얻어냄
def print_reverse(string):
  print(string[::-1])

print_reverse('python')

>>> nohtyp
```

### 222. 성적 리스트를 입력 받아 평균을 출력하는 print_score 함수를 정의하라.

```python
print_score ([1, 2, 3])
```

```python
2.0
```

---


```python
# my solution
def print_score(lst):
  sum = 0
  for score in lst:
    sum += score
  avg = sum / len(lst)
  print(avg)

print_score([1, 2, 3])

>>> 2.0
```

```python
# solution
def print_score(score_list) :
    print(sum(score_list)/len(score_list))

print_score([1, 2, 3])

>>> 2.0
```

### 223. 하나의 리스트를 입력받아 짝수만 화면에 출력하는 print_even 함수를 정의하라.

```python
print_even ([1, 3, 2, 10, 12, 11, 15])
```

```python
2
10
12
```

---


```python
def print_even(lst):
  for num in lst:
    if num % 2 == 0:
      print(num)

print_even ([1, 3, 2, 10, 12, 11, 15])

>>> 2
>>> 10
>>> 12
```

### 224. 하나의 딕셔너리를 입력받아 딕셔너리의 key 값을 화면에 출력하는 print_keys 함수를 정의하라.

```python
print_keys({"이름":"김말똥", "나이":30, "성별":0})
```

```python
이름
나이
성별
```

---


```python
def print_keys(dictionary):
  for key in dictionary.keys():
    print(key)

print_keys({"이름":"김말똥", "나이":30, "성별":0})

>>> 이름
>>> 나이
>>> 성별
```

### 225. my_dict에는 날짜를 키값으로 OHLC가 리스트로 저장돼 있다.

```python
my_dict = {"10/26" : [100, 130, 100, 100],
           "10/27" : [10, 12, 10, 11]}
```

my_dict와 날짜 키값을 입력받아 OHLC 리스트를 출력하는 print_value_by_key 함수를 정의하라.

```python
print_value_by_key(my_dict, "10/26")
```

```python
[100, 130, 100, 100]
```

---


```python
my_dict = {"10/26" : [100, 130, 100, 100],
           "10/27" : [10, 12, 10, 11]}
           
def print_value_by_key(input_dict, date):
  print(input_dict[date])

print_value_by_key(my_dict, "10/26")

>>> [100, 130, 100, 100]
```

### 226. 입력 문자열을 한 줄에 다섯 글자씩 출력하는 print_5xn(string)함수를 작성하라.

```python
print_5xn("아이엠어보이유알어걸")
```

```python
아이엠어보
이유알어걸
```

---


```python
#def print_5xn(string):
  #print(string[0:5])
  #print(string[5:11])

#print_5xn("아이엠어보이유알어걸")

# Answer
def print_5xn(line):
  check_num = int(len(line) / 5)
  for x in range(check_num + 1):
    print(line[x * 5: x * 5 + 5])

print_5xn("아이엠어보이유알어걸")

>>> 아이엠어보
>>> 이유알어걸
```

### 227. 문자열과 한줄에 출력될 글자 수를 입력을 받아 한 줄에 입력된 글자 수만큼 출력하는 print_mxn(string) 함수를 작성하라.

```python
printmxn("아이엠어보이유알어걸", 3)
```

```python
아이엠
어보이
유알어
걸
```

---


```python
def print_mxn(line, i):
  check_num = int(len(line)/i)
  for x in range(check_num + 1):
    print(line[x * i : x * i + i])

print_mxn("아이엠어보이유알어걸", 3)

>>> 아이엠
>>> 어보이
>>> 유알어
>>> 걸
```

### 228. 연봉을 입력받아 월급을 계산하는 calc_monthly_salary(annual_salary) 함수를 정의하라. 회사는 연봉을 12개월로 나누어 분할 지급하며, 이 때 1원 미만은 버림한다.

```python
calc_monthly_salary(12000000)
```

```python
1000000
```

---


```python
def calc_monthly_salary(annual_salary):
  monthly_salary = annual_salary // 12
  return monthly_salary

print(calc_monthly_salary(12000000))

>>> 1000000
```

### 229. 아래 코드의 실행 결과를 예측하라.

```python
def my_print(a, b):
    print("왼쪽:", a)
    print("오른쪽:", b)

my_print(a=100, b=200)
```

---


예측 결과

```python
왼쪽: 100
오른쪽: 200
```

### 230. 아래 코드의 실행 결과를 예측하라.

```python
def my_print (a, b) :
    print("왼쪽:", a)
    print("오른쪽:", b)

my_print(b=100, a=200)
```

---


예측 결과

```python
왼쪽: 200
오른쪽: 100
```

### 231. 아래 코드를 실행한 결과를 예상하라.

```python
def n_plus_1 (n) :
    result = n + 1

n_plus_1(3)
print (result)
```

---


예측 결과: Error

```python
NameError Traceback (most recent call last)
<ipython-input-2-78e20c8ecef0> in <module>()
3 
4 n_plus_1(3)
----> 5 print (result)
6

NameError: name 'result' is not defined
```

>>> 함수 내부에서 사용한 변수 계산값을 전달하기 위해서는 return을 사용하여야 합니다.

### 232. 문자열 하나를 입력받아 인터넷 주소를 반환하는 make_url함수를 정의하라.

```python
make_url("naver")
```

```python
www.naver.com
```

---


```python
def make_url(string):
  url = "www." + string + ".com"
  return url

print(make_url("naver"))

>>> www.naver.com
```

위의 코드를 다시 간략히 하면

```python
def make_url(string):
  return "www." + string + ".com"

print(make_url("naver"))

>>> www.naver.com
```

### 233. 문자열을 입력 받아 각 문자들로 구성된 리스트로 변환하는 make_list 함수를 정의하라.

```python
make_list('abcd')
```

```python
['a', 'b', 'c', 'd']
```

---


```python
def make_list(string):
  lst = []
  for i in range(len(string)):
    lst.append(string[i])
  return lst

print(make_list('abcd'))

>>> ['a', 'b', 'c', 'd']
```

문자열을 list로 형변환하면 쉽게 문제를 해결할 수 있다.

```python
def make_list(string):
  return list(string)

print(make_list('abcd'))

>>> ['a', 'b', 'c', 'd']
```

### 234. 숫자로 구성된 하나의 리스트를 입력 받아, 짝수들을 추출하여 리스트로 반환하는 pickup_even 함수를 구현하라.

```python
pickup_even([3, 4, 5, 6, 7, 8])
```

```python
[4, 6, 8]
```

---


```python
def pickup_even(list):
  even_num = []
  for i in range(len(list)):
    if list[i] % 2 == 0:
      even_num.append(list[i])
  return even_num

print(pickup_even([3, 4, 5, 6, 7, 8]))

>>> [4, 6, 8]
```

### 235. 콤마가 포함된 문자열 숫자를 입력받아 정수로 변환하는 convert_int 함수를 정의하라.

```python
convert_int("1,234,567")
```

```python
1234567
```

---


```python
def convert_int(string):
  str_num = string.replace(",", "")
  int_num = int(str_num)
  return int_num

print(convert_int("1,234,567"))

>>> 1234567
```

위의 함수를 다음과 같이 간략히 쓸 수 있다.

```python
def convert_int(string):
  return int(string.replace(",", ""))

print(convert_int("1,234,567"))

>>> 1234567
```

### 236. 아래 코드의 실행 결과를 예측하라

```python
def function(num) :
    return num + 4

a = function(10)
b = function(a)
c = function(b)
print(c)
```

---


예측 결과: 22

### 237. 아래 코드의 실행 결과를 예측하라.

```python
def function(num):
  return num + 4

c = function(function(function(10)))
print(c)
```

---


예측 결과: 22

### 238. 아래 코드의 실행 결과를 예측하라.

```python
def function1(num) :
    return num + 4

def function2(num) :
    return num * 10

a = function1(10)
c = function2(a)
print(c)
```

---


예측 결과: 140

### 239. 아래 코드의 실행 결과를 예측하라.

```python
def function1(num) :
    return num + 4

def function2(num) :
    num = num + 2
    return function1(num)

c = function2(10)
print(c)
```

---


예측 결과: 16

### 240. 아래 코드의 실행 결과를 예측하라.

```python
def function0(num) :
    return num * 2

def function1(num) :
    return function0(num + 2)

def function2(num) :
    num = num + 10
    return function1(num)

c = function2(2)
print(c)
```

---


예측 결과: 28

