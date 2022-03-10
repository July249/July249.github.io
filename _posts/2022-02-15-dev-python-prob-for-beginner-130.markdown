---
layout: post
title: "[초보자를 위한 파이썬 300제] 101~130"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 101~130
---

### 101. 파이썬에서 True, False를 갖는 데이터 타입은 무엇인가?

```python
# Answer : Bool
```

### 102. 아래 코드의 출력 결과를 예상하라

```python
print(3 == 5)
# prints "False"

>>> False
```

### 103. 아래 코드의 출력 결과를 예상하라

```python
print(3 < 5)
# prints "True"

>>> True
```

### 104. 아래 코드의 결과를 예상하라

```python
x = 4
print(1< x < 5)
# prints "True"

>>> True
```

### 105. 아래 코드의 결과를 예상하라

```python
print((3 == 3) and (4 != 3))
# prints "True"

>>> True
```

### 106. 아래의 코드에서 에러가 발생하는 원인에 대해 설명하라

```python
#print(3 => 4)
# prints "invalid syntax"
print(3 >= 4)
# prints "False"

>>>False
```

### 107. 아래 코드의 출력 결과를 예상하라

```python
if 4 < 3:
  print("Hello world")

>>> # if 조건식이 False 이기 때문에 출력되는 값이 없습니다.
```

### 108. 아래 코드의 출력 결과를 예상하라

```python
if 4 < 3:
    print("Hello World.")
else:
    print("Hi, there.")
# if 조건식은 false 이므로 else 조건이 true가 된다.
# 따라서 "Hi, there."가 출력된다.

>>> Hi, there.
```

### 109. 아래 코드의 출력 결과를 예상하라

```python
if True :
    print ("1")
    print ("2")
else :
    print("3")
print("4")
# 1 2 4

>>> 1
>>> 2
>>> 4
```

### 110. 아래 코드의 출력 결과를 예상하라

```python
if True :
    if False:
        print("1")
        print("2")
    else:
        print("3")
else :
    print("4")
print("5")

>>> 3
>>> 5
```

### 111. input method

사용자로부터 입력받은 문자열을 두번 출력하라. 아래는 사용자가 "안녕하세요"를 입력한 경우의 출력 결과이다.

```python
user = input("문자를 입력하세요: ")
print(str(user) * 2)

>>> 문자를 입력하세요: 안녕하세요
>>> 안녕하세요안녕하세요
```

### 112. 사용자로부터 하나의 숫자를 입력받고, 입력 받은 숫자에 10을 더해 출력하라.

```python
user = input("숫자를 입력하세요: ")
print(10 + int(user))

>>> 숫자를 입력하세요: 8
>>> 18
```

### 113. 사용자로부터 하나의 숫자를 입력 받고 짝수, 홀수를 판별하라.

```python
user = input("숫자를 입력하세요: ")
if int(user) % 2 == 0:
  print("입력하신 숫자는 짝수입니다.")
else:
  print("입력하신 숫자는 홀수입니다.")

>>> 숫자를 입력하세요: 287839
>>> 입력하신 숫자는 홀수입니다.
```

### 114. 사용자로부터 값을 입력받은 후 해당 값에 20을 더한 값을 출력하라. 단 사용자가 입력한 값과 20을 더한 계산 값이 255를 초과하는 경우 255를 출력해야 한다.

```python
user = input("숫자를 입력하세요: ")
if int(user) + 20 <= 255:
  print(int(user) + 20)
else:
  print(255)

>>> 숫자를 입력하세요: 210
>>> 230
```

### 115. 사용자로부터 하나의 값을 입력받은 후 해당 값에 20을 뺀 값을 출력하라. 단 출력 값의 범위는 0~255이다. 예를 들어 결괏값이 0보다 작은 값이되는 경우 0을 출력하고 255보다 큰 값이 되는 경우 255를 출력해야 한다.

```python
user = input("숫자를 입력하세요: ")
a = int(user) - 20
if a < 0:
  print(0)
elif 0 < a < 255:
  print(a)
elif a > 255:
  print(255)
  
>>> 숫자를 입력하세요: 0
>>> 0
```

### 116. 사용자로부터 입력 받은 시간이 정각인지 판별하라.

```python
user_time = input("현재시간: ")
if user_time[-2:] == "00":
  print("정각 입니다.")
else:
  print("정각이 아닙니다.")

>>> 현재시간: 4:01
>>> 정각이 아닙니다.
```

### 117. 사용자로 입력받은 단어가 아래 fruit 리스트에 포함되어 있는지를 확인하라. 포함되었다면 "정답입니다"를 아닐 경우 "오답입니다" 출력하라.

```python
fruit = ["사과", "포도", "홍시"]
user_fruit = input("좋아하는 과일은? ")
if user_fruit in fruit:
  print("정답입니다.")
else:
  print("오답입니다.")

>>> 좋아하는 과일은? 포도
>>> 정답입니다.
```

### 118. 투자 경고 종목 리스트가 있을 때 사용자로부터 종목명을 입력 받은 후 해당 종목이 투자 경고 종목이라면 '투자 경고 종목입니다'를 아니면 "투자 경고 종목이 아닙니다."를 출력하는 프로그램을 작성하라.

```python
warn_investment_list = ["Microsoft", "Google", "Naver", "Kakao", "SAMSUNG", "LG"]

user_invest = input("종목명을 입력하세요. ")
if user_invest in warn_investment_list:
  print("해당 종목은 투자 경고 종목입니다.")
else:
  print("해당 종목은 투자 경고 종목이 아닙니다.")

>>> 종목명을 입력하세요. Google
>>> 해당 종목은 투자 경고 종목입니다.
```

### 119. 아래와 같이 fruit 딕셔너리가 정의되어 있다. 사용자가 입력한 값이 딕셔너리 키 (key) 값에 포함되었다면 "정답입니다"를 아닐 경우 "오답입니다" 출력하라.

```python
fruit = {"봄" : "딸기", "여름" : "토마토", "가을" : "사과"}

user_fruit = input("입력하세요. ")
if user_fruit in fruit.keys():
  print("정답입니다.")
else:
  print("오답입니다.")

print(fruit.keys())

>>> 입력하세요. 봄
>>> 정답입니다.
>>> dict_keys(['봄', '여름', '가을'])
```

### 120. 아래와 같이 fruit 딕셔너리가 정의되어 있다. 사용자가 입력한 값이 딕셔너리 값 (value)에 포함되었다면 "정답입니다"를 아닐 경우 "오답입니다" 출력하라.

```python
fruit = {"봄" : "딸기", "여름" : "토마토", "가을" : "사과"}

user = input("입력하세요. ")
if user in fruit.values():
  print("정답입니다.")
else:
  print("오답입니다.")
print(fruit.values())

>>> 입력하세요. 봄
>>> 오답입니다.
>>> dict_values(['딸기', '토마토', '사과'])
```

### 121. 사용자로부터 문자 한 개를 입력 받고, 소문자일 경우 대문자로, 대문자일 경우 소문자로 변경해서 출력하라.

```python
# My solution
"""
user = input("알파벳을 입력하세요. ")
alphabet = "abcdefghijklmnopqrstuvwxyz"
if user in alphabet:
  print("입력하신 알파벳을 대문자로 변경하였습니다.", user.upper())
elif user in alphabet.upper():
  print("입력하신 알파벳을 소문자로 변경하였습니다.", user.lower())
else:
  print("입력하신 것은 알파벳이 아닙니다.")
"""

# islower() method
user = input("")
if user.islower():
    print(user.upper())
else:
    print(user.lower())
    
>>> 알파벳을 입력하세요. 3
>>> 입력하신 것은 알파벳이 아닙니다.
```

**`islower()` method**
: `islower()` 함수는 문자의 소문자 여부를 판별합니다. 만약 소문자일 경우 `True`, 대문자일 경우 `False`를 반환합니다.


### 122. 점수 구간에 해당하는 학점이 아래와 같이 정의되어 있다. 사용자로부터 score를 입력받아 학점을 출력하라.

```python
user = input("당신의 점수를 입력하세요. ")
if int(user) > 80:
  print("your grade is A")
elif 60 < int(user) <= 80:
  print("your grade is B")
elif 40 < int(user) <= 60:
  print("your grade is C")
elif 20 < int(user) <= 40:
  print("your grade is D")
elif 0 < int(user) <= 20:
  print("your grade is F")

>>> 당신의 점수를 입력하세요. 45
>>> your grade is C
```

### 123. 사용자로부터 세 개의 숫자를 입력 받은 후 가장 큰 숫자를 출력하라.

```python
user_number1 = input("숫자를 입력하세요. ")
user_number2 = input("숫자를 입력하세요. ")
user_number3 = input("숫자를 입력하세요. ")
if user_number1 > user_number2 and user_number1 > user_number3:
  print("가장 큰 숫자는 ", user_number1)
elif user_number2 > user_number1 and user_number2 > user_number3:
  print("가장 큰 숫자는 ", user_number2)
elif user_number3 > user_number1 and user_number3 > user_number2:
  print("가장 큰 숫자는 ", user_number3)

>>> 숫자를 입력하세요. 1
>>> 숫자를 입력하세요. 2
>>> 숫자를 입력하세요. 3
>>> 가장 큰 숫자는  3
```

### 124. 사용자로부터 달러, 엔, 유로, 또는 위안 금액을 입력받은 후 이를 원으로 변환하는 프로그램을 작성하라. 각 통화별 환율은 다음과 같다. 사용자는 100 달러, 1000 엔, 13 유로, 100 위안과 같이 금액과 통화명 사이에 공백을 넣어 입력한다고 가정한다.

```python
# my solution
"""
foreign_current = input("환전하고자 하는 금액을 입력하세요. ")
unit = input("환전하고자 하는 화폐의 단위를 입력하세요. ")
current_unit = ["달러", '엔', '유료', '위안']
if unit == current_unit[0]:
  print(int(foreign_current) * 1167, "원")
elif unit == current_unit[1]:
  print(int(foreign_current) * 1.096, "원")
elif unit == current_unit[2]:
  print(int(foreign_current) * 1268, "원")
elif unit == current_unit[3]:
  print(int(foreign_current) * 171, "원")
"""

# Solution
환율 = {"달러": 1167, "엔": 1.096, "유로": 1268, "위안":171}
user = input("입력: ")
num, currency = user.split()
print(float(num) * 환율[currency], "원")

>>> 입력: 100 달러
>>> 116700.0 원
```

### 125. 휴대폰 번호 앞자리에 따라 통신사는 아래와 같이 구분된다. 사용자로부터 휴대전화 번호를 입력 받고, 통신사를 출력하는 프로그램을 작성하라.

```python
number = input("휴대전화 번호 입력: ")
num = number.split("-")[0]
if num == "011":
  com = "SKT"
elif num == "016":
  com = "KT"
elif num == "019":
  com = "LGU"
else:
  com = "알수없음"
print(f"당신은 {com} 사용자입니다.")

>>> 휴대전화 번호 입력: 011-00
>>> 당신은 SKT 사용자입니다.
```

### 126. 우편번호는 5자리로 구성되는데, 앞의 세자리는 구를 나타낸다. 예를들어, 강북구의 경우 010, 011, 012 세 자리로 시작한다.

|-	|0	|1	|2	|3	|4	|5	|6	|7	|8	|9 |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
|01	|강북구	|강북구	|강북구	|도봉구	|도봉구	|도봉구	|노원구	|노원구	|노원구	|노원구 |

사용자로부터 5자리 우편번호를 입력받고 구를 판별하라.

```python
# My Solution

zip_code = input('우편번호: ')
zip_code_dict = {"강북구": ['0', '1', '2'], "도봉구": ['3', '4', '5'], "노원구": ['6', '7', '8', '9']}
if zip_code[2] in zip_code_dict["강북구"]:
  print("강북구")
elif zip_code[2] in zip_code_dict["도봉구"]:
  print("도봉구")
else:
  print("노원구")

# Remark!! 
# [0, 1, 2] 으로 하면 list 안에 있는 숫자는 string이 아니다! 따라서 ['0', '1', '2']로 해서 문자열로 만들지 않으면
# 절대로 "도봉구"라는 결과가 나오지 않는다.
# 그 이유는 입력된 zip_code[2]가 string이기 때문이다.

"""
# Solution
zip_code = input("우편번호: ")
zip_code = zip_code[:3]
if zip_code in ["010", "011", "012"]:
  print("강북구")
elif zip_code in ["013", "014", "015"]:
  print("도봉구")
else:
  print("노원구")
"""

>>> 우편번호: 01400
>>> 도봉구
```

### 127. 주민등록번호 뒷 자리 7자리 중 첫째 자리는 성별을 나타내는데, 1, 3은 남자 2, 4는 여자를 의미한다. 사용자로부터 13자리의 주민등록번호를 입력 받은 후 성별 (남자, 여자)를 출력하는 프로그램을 작성하라.

```python
# My solution
"""
id_num = input("주민등록번호: ")
if id_num[7] in ["1", "3"]:
  print("남자")
elif id_num[7] in ["2", "4"]:
  print("여자")
"""

# Solution
주민번호 = input("주민등록번호: ")
주민번호 = 주민번호.split("-")[1]
if 주민번호[0] == "1" or 주민번호[0] == "3":
  print("남자")
else:
  print("여자")

>>> 주민등록번호: 821010-1635210
>>> 남자
```

### 128. 주민등록번호의 뒷 자리 7자리 중 두번째와 세번째는 지역코드를 의미한다. 주민 등록 번호를 입력 받은 후 출생지가 서울인지 아닌지 판단하는 코드를 작성하라

```python
# My solution
"""
id_num = input("주민등록번호: ")
id_num = id_num.split("-")[1]
if id_num[1:3] in ["00", "01", "02", "03", "04", "05", "06", "07", "08"]:
  print("서울 입니다.")
else:
  print("서울이 아닙니다.")
"""

# Solution
id_num = input("주민등록번호: ")
id_num = id_num.split("-")[1]
if 0 <= int(id_num[1:3]) <= 8:
  print("서울 입니다.")
else:
  print("서울이 아닙니다.")

>>> 주민등록번호: 861010-1015210
>>> 서울 입니다.
```

### 129. 주민등록번호는 13자리로 구성되는데 마지막 자리수는 주민등록번호의 유효성을 체크하는데 사용된다. 먼저 앞에서부터 12자리의 숫자에 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5를 차례로 곱한 뒤 그 값을 전부 더한다. 연산 결과 값을 11로 나누면 나머지가 나오는데 11에서 나머지를 뺀 값이 주민등록번호의 마지막 번호가 된다.

```python
  8 2 1 0 1 0 - 1 6 3 5 2 1 0
x 2 3 4 5 6 7   8 9 2 3 4 5 
-----------------------------
1차 계산: (8*2 + 2*3 + 1*4 + 0*5 + 1*6 + 0*7 + 1*8 + 6*9 + 3*2 + 5*3 + 2*4 + 1*5) = (128 % 11) = 7
2차 계산: 11 -7 = 4
```

위와 같이 821010-1635210에 대해서 계산을 해보면 마지막 자리는 4가 되어야 함을 알 수 있다. 즉, 821010-1635210은 유효하지 않은 주민등록번호임을 알 수 있다.

다음과 같이 사용자로부터 주민등록번호를 입력받은 후 주민등록번호가 유효한지를 출력하는 프로그램을 작성하라.

```python
# My solution
"""
id_num = input("주민등록번호: ")
id_num1 = id_num.split("-")[0]
id_num2 = id_num.split("-")[1]

id_num1 = list(id_num1)
id_num2 = list(id_num2)

# 유효성 검사
valid_test1 = [2, 3, 4, 5, 6, 7]
valid_test2 = [8, 9, 2, 3, 4, 5]

# 초기화
first_cal = 0

# 1차 계산 - 1
for i in range(6):
  first_cal += int(id_num1[i]) * valid_test1[i]
#print(first_cal)
# 초기화
second_cal = first_cal
# 1차 계산 - 2
for j in range(6):
  second_cal += int(id_num2[j]) * valid_test2[j]
#print(second_cal)

# 1차계산 - 3
remainder = second_cal % 11

# 2차 계산
final_num = 11 - remainder

# 답
#print(final_num)

# 출력
if id_num2[-1] != final_num:
  print("유효하지 않은 주민등록번호입니다.")
else:
  print("유효한 주민등록번호입니다.")
  
"""
# Solution
num = input("주민등록번호: ")
계산1 = int(num[0]) * 2 + int(num[1]) * 3 + int(num[2]) * 4 + int(num[3]) * 5 + int(num[4]) * 6 + \
        int(num[5]) * 7 + int(num[7]) * 8 + int(num[8]) * 9 + int(num[9]) * 2 + int(num[10])* 3 + \
        int(num[11])* 4 + int(num[12]) * 5
계산2 = 11 - (계산1 % 11)
계산3 = str(계산2)

if num[-1] == 계산3[-1]:
    print("유효한 주민등록번호입니다.")
else:
    print("유효하지 않은 주민등록번호입니다.")

>>> 주민등록번호: 821010-1635210
>>> 유효하지 않은 주민등록번호입니다.
```

### 130. 아래 코드는 비트코인의 가격 정보를 딕셔너리로 가져오는 코드이다.

```python
import requests
btc = requests.get("https://api.bithumb.com/public/ticker/").json()['data']
```

btc 딕셔너리 안에는 시가, 종가, 최고가, 최저가 등이 저장되어 있다. 최고가와 최저가의 차이를 변동폭으로 정의할 때 (시가 + 변동폭)이 최고가 보다 높을 경우 "상승장", 그렇지 않은 경우 "하락장" 문자열을 출력하라.

|Key Name	|Description |
|:--:|:--:|
|opening_price	|최근 24시간 내 시작 거래금액 |
|closing_price	|최근 24시간 내 마지막 거래금액 |
|min_price	|최근 24시간 내 최저 거래금액 |
|max_price	|최근 24시간 내 최고 거래금액 |

```python
import requests
btc = requests.get("https://api.bithumb.com/public/ticker/").json()['data']

# Check the information in "btc"
#print(btc.keys())
#print(btc.values())
#print(btc)
#print(type(btc['max_price']))

# 정의에 따른 "상승장", "하락장" 구분
fluctuation = float(btc['max_price']) - float(btc['min_price'])
std = float(btc['opening_price']) + fluctuation
if std > float(btc['max_price']):
  print("상승장")
else:
  print("하락장")

>>> 상승장
```
