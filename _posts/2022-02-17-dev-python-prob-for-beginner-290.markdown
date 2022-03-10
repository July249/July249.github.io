---
layout: post
title: "[초보자를 위한 파이썬 300제] 251~290"
subtitle:
categories: dev
tags: dev python beginner
comments: true
published: true
---

## 251 ~ 290
---

### 251. 클래스, 객체, 인스턴스

클래스, 객체, 인스턴스에 대해 설명하시오.

---

**클래스와 객체** (참조: 점프 투 파이썬 5장 파이썬 날개달기 - 1 클래스<https://wikidocs.net/28>)

클래스와 객체를 설명하는 방법으로 과자를 만드는 과자 틀과 그것을 사용해 만든 과자로 설명해보자.

+ 과자 틀 >> 클래스(class)

+ 과자 틀에 의해서 만들어진 과자 >> 객체(object)

클래스(class)란 똑같은 무엇인가를 계속해서 만들어 낼 수 있는 설계 도면이고(과자 틀), 객체(object)란 클래스로 만든 피조물(과자 틀을 사용해 만든 과자)를 뜻한다.

클래스로 만든 객체에는 중요한 특징이 있다. 바로 객체마다 고유한 성격을 가진다는 것이다.

---

(ex)

```python
class Cookie:
  pass
```

위에서 만든 Cookie 클래스의 객체를 만드는 방법은 다음과 같다.

```python
a = Cookie()
b = Cookie()
```

`Cookie()`의 결과값을 돌려받은 `a`, `b`가 바로 객체이다. 마치 함수를 사용해서 그 결과값을 돌려 받는 모습과 비슷하다.

---

**[객체와 인스턴스의 차이]**

클래스로 만든 객체를 인스턴스라고도 한다. 그렇다면 객체와 인스턴스의 차이는 무엇인가? 앞서 `a = Cookie()`에서 `a`는 객체이다. 그리고 `a` 객체는 `Cookie`의 인스턴스이다. 즉, 인스턴스라는 말은 특정 객체(`a`)가 어떤 클래스(`Cookie`)의 객체인지를 관계 위주로 설명할 때 사용한다. "`a`는 인스턴스" 라는 표현보다 "`a`는 객체"라는 표현이 어울리며 "`a`는 `Cookie`의 객체" 보다는 "a는 Cookie의 인스턴스"라는 표현이 훨씬 잘 어울린다.(즉, <u>"인스턴스"는 객체가 어떤 클래스에 소속되어 있는지를 설명할 때 사용하는 표현이다!</u>)


### 252. 클래스 정의

비어있는 사람(Human) 클래스를 "정의" 하시오.

---

```python
class Human:
  pass
```

### 253. 인스턴스 생성

사람(Human) 클래스의 인스턴스를 "생성"하고 이를 areum변수로 바인딩하시오.

---

```python
class Human:
  pass

areum = Human()
```

### 254. 클래스 생성자(`__init__`) - 1

사람 (Human) 클래스에 "응애응애"를 출력하는 생성자를 추가하세요.

```python
areum = Human()

응애응애
```

---

```python
class Human:
  def __init__(self):
    print("응애응애")

areum = Human()

>>> 응애응애
```

### 255 클래스 생성자(`__init__`)-2

사람 (Human) 클래스에 (이름, 나이, 성별)을 받는 생성자를 추가하세요.

```python
areum = Human("아름", 25, "여자")
```

---

```python
class Human:
  def __init__(self, name, age, sex):
    self.name = name
    self.age = age
    self.sex = sex

areum = Human("아름", 25, "여자") 
print(areum.name)

>>> 아름
```

### 256. 인스턴스 속성에 접근

255에서 생성한 인스턴스의 이름, 나이, 성별을 출력하세요. 인스턴스 변수에 접근하여 값을 출력하면 됩니다.

```python
이름: 조아름, 나이: 25, 성별: 여자
```

인스턴스 변수에 접근하여 값을 가져오는 예

```python
areum.age
25
```

---

```python
class Human:
  def __init__(self, name, age, sex):
    self.name = name
    self.age = age
    self.sex = sex

areum = Human("조아름", 25, "여자") # Human 클래스에 직접 정보를 입력하여 "areum" 객체를 만든다.
print(areum.age) # Human의 인스턴스인 areum의 age 정보를 출력하라.

>>> 25
```

### 257. 클래스 메소드 - 1

사람 (Human) 클래스에서 이름, 나이, 성별을 출력하는 who() 메소드를 추가하세요.

```python
areum.who()
```

```python
이름: 조아름, 나이: 25, 성별: 여자
```

---

```python
class Human:
  def __init__(self, name, age, sex):
    self.name = name
    self.age = age
    self.sex = sex

  def who(self): 
    print("이름: {} 나이: {} 성별: {}".format(self.name, self.age, self.sex))

areum = Human("조아름", 25, "여자")
areum.who() # areum 객체에 저장된 정보를 who() method에 보내라.

>>> 이름: 조아름 나이: 25 성별: 여자
```

### 258 클래스 메소드 - 2

사람 (Human) 클래스에 (이름, 나이, 성별)을 받는 setInfo 메소드를 추가하세요.

```python
areum = Human("모름", 0, "모름")
areum.setInfo("아름", 25, "여자")
```

---

```python
class Human:
  def __init__(self, name, age, sex):
    self.name = name
    self.age = age
    self.sex = sex

  def who(self):
    print("이름: {} 나이: {} 성별: {}".format(self.name, self.age, self.sex))

  def setInfo(self, name, age, sex):
    self.name = name
    self.age = age
    self.sex = sex

areum = Human("불명", "미상", "모름") 
areum.who() # areum 객체를 who() method로 보내라.

areum.setInfo("아름", 25, "여자") # areum 객체를 setInfo() method로 보내라.(setInfo()는 입력된 정보를 areum 객체에 저장하는 역할을 한다.)
areum.who() # 앞서 수행한 setInfo()를 통해 저장된 areum 객체의 정보를 출력하는 who() method를 나타내준다.

>>> 이름: 불명 나이: 미상 성별: 모름
>>> 이름: 아름 나이: 25 성별: 여자
```

### 259 클래스 소멸자(`__del__`)

사람 (human) 클래스에 "나의 죽음을 알리지 말라"를 출력하는 소멸자를 추가하세요.

```python
areum = Human("아름", 25, "여자")
del areum
```

```python
나의 죽음을 알리지 말라
```

---

```python
class Human:
  def __init__(self, name, age, sex):
    self.name = name
    self.age = age
    self.sex = sex

  def __del__(self):
    print("나의 죽음을 알리지마라")

  def who(self):
    print("이름: {} 나이: {} 성별: {}".format(self.name, self.age, self.sex))

  def setInfo(self, name, age, sex):
    self.name = name
    self.age = age
    self.sex = sex
  
areum = Human("조아름", 25, "여자")
areum.who()
del(areum)
areum.who()

>>> 이름: 조아름 나이: 25 성별: 여자
>>> 나의 죽음을 알리지마라
>>> ---------------------------------------------------------------------------
>>> NameError                                 Traceback (most recent call last)
>>> <ipython-input-18-559c4349038e> in <module>()
>>>      19 areum.who()
>>>      20 del(areum)
>>> ---> 21 areum.who()
>>>
>>> NameError: name 'areum' is not defined
```

### 260. 에러의 원인

아래와 같은 에러가 발생한 원인에 대해 설명하세요.

```python
class OMG: 
    def print():
        print("Oh my god")

myStock = OMG()
myStock.print()
```

```python
TypeError Traceback (most recent call last)
<ipython-input-233-c85c04535b22> in <module>()
----> myStock.print()

TypeError: print() takes 0 positional arguments but 1 was given
```

---

에러 발생 이유: `OMG` 클래스의 `print` method를 호출하기 위해서는 적어도 하나 이상의 argument가 존재하여야 한다. 즉 `self` argument가 부재한 상태에서 객체 `myStock`을 `print` method로 보냈기 때문에 오류가 발생한 것이다.

만일 `self` argument가 부재한 상태에서 원하는 결과를 출력하고자 한다면, 객체를 이용한 호출이 아닌 클래스를 통한 호출을 진행하여야 한다. 즉, `OMG.print()`를 수행하여야 한다.

### 261. Stock 클래스 생성

주식 종목에 대한 정보를 저장하는 Stock 클래스를 정의해보세요. 클래스는 속성과 메서드를 갖고 있지 않습니다.

```python
class Stock:
  pass
```

### 262 생성자(`__init__`)

Stock 클래스의 객체가 생성될 때 종목명과 종목코드를 입력 받을 수 있도록 생성자를 정의하시오.

```python
samsung = Stock("삼성전자", "005930")
```

---

```python
class Stock:
  def __init__(self, name, code):
    self.name = name
    self.code = code

samsung = Stock("삼성전자", "005930")
print(samsung.name) # samsung 객체의 name 정보에 access
print(samsung.code) # Stock의 인스턴스인 samsung의 code 정보에 access

>>> 삼성전자
>>> 005930
```

### 263. method

객체에 종목명을 입력할 수 있는 set_name 메서드를 추가해보세요.

```python
a = Stock(None, None)
a.set_name("삼성전자")
```

---

```python
class Stock:
  def __init__(self, name, code):
    self.name = name
    self.code = code

  def set_name(self, name):
    self.name = name

a = Stock(None, None)
a.set_name("삼성전자")
print(a.name) # a 객체의 name 정보에 access

>>> 삼성전자
```

### 264 method

객체에 종목코드를 입력할 수 있는 set_code 메서드를 추가해보세요.

```python
a = Stock(None, None)
a.set_code("005930")
```

---

```python
class Stock:
  def __init__(self, name, code):
    self.name = name
    self.code = code

  def set_name(self, name):
    self.name = name

  def set_code(self, code):
    self.code = code

a = Stock(None, None)
a.set_code("005930")
print(a.code)

>>> 005930
```

### 265 method

종목명과 종목코드를 리턴하는 get_name, get_code 메서드를 추가하세요. 해당 메서드를 사용하여 종목명과 종목코드를 얻고 이를 출력해보세요.

```python
삼성 = Stock("삼성전자", "005930")
```

---

```python
class Stock:
  def __init__(self, name, code):
    self.name = name
    self.code = code

  def set_name(self, name):
    self.name = name

  def set_code(self, code):
    self.code = code

  def get_name(self):
    print(self.name)

  def get_code(self):
    print(self.code)

samsung = Stock("삼성전자", "005930")
samsung.get_name()
samsung.get_code()

>>> 삼성전자
>>> 005930
```

### 266 객체의 속성값 업데이트

생성자에서 종목명, 종목코드, PER, PBR, 배당수익률(DR)을 입력 받을 수 있도록 생성자를 수정하세요. PER, PBR, 배당수익률(DR)은 float 타입입니다.

---

```python
class Stock:
  def __init__(self, name, code, per, pbr, dr):
    self.name = name
    self.code = code
    self.per = per
    self.pbr = pbr
    self.dr = dr

  def set_name(self, name):
    self.name = name

  def set_code(self, code):
    self.code = code

  def get_name(self):
    print(self.name)

  def get_code(self):
    print(self.code)
```

### 267 객체 생성

266번에서 정의한 생성자를 통해 다음 정보를 갖는 객체를 생성해보세요.

|항목	|정보 |
|:--:|:--:|
|종목명	|삼성전자 |
|종목코드	|005930 |
|PER	|15.79 |
|PBR	|1.33 |
|배당수익률	|2.83 |

---

```python
class Stock:
  def __init__(self, name, code, per, pbr, dr):
    self.name = name
    self.code = code
    self.per = per
    self.pbr = pbr
    self.dr = dr

  def set_name(self, name):
    self.name = name

  def set_code(self, code):
    self.code = code

  def get_name(self):
    print(self.name)

  def get_code(self):
    print(self.code)

samsung = Stock("삼성전자", "005930", 15.79, 1.33, 2.83)
print(samsung.name)
print(samsung.code)
print(samsung.per)
print(samsung.pbr)
print(samsung.dr)

>>> 삼성전자
>>> 005930
>>> 15.79
>>> 1.33
>>> 2.83
```

### 268. 객체의 속성 수정

PER, PBR, 배당수익률은 변경될 수 있는 값입니다. 이 값을 변경할 때 사용하는 set_per, set_pbr, set_dividend 메서드를 추가하세요.

---

```python
class Stock:
  def __init__(self, name, code, per, pbr, dr):
    self.name = name
    self.code = code
    self.per = per
    self.pbr = pbr
    self.dr = dr

  def set_name(self, name):
    self.name = name

  def set_code(self, code):
    self.code = code

  def set_per(self, per):
    self.per = per

  def set_pbr(self, pbr):
    self.pbr = pbr

  def set_dr(self, dr):
    self.dr = dr

  def get_name(self):
    print(self.name)

  def get_code(self):
    print(self.code)
```

### 269. 객체의 속성 수정

267번에서 생성한 객체에 set_per 메서드를 호출하여 per 값을 12.75로 수정해보세요.

---

```python
class Stock:
  def __init__(self, name, code, per, pbr, dr):
    self.name = name
    self.code = code
    self.per = per
    self.pbr = pbr
    self.dr = dr

  def set_name(self, name):
    self.name = name

  def set_code(self, code):
    self.code = code

  def set_per(self, per):
    self.per = per

  def set_pbr(self, pbr):
    self.pbr = pbr

  def set_dr(self, dr):
    self.dr = dr

  def get_name(self):
    print(self.name)

  def get_code(self):
    print(self.code)

samsung = Stock("삼성전자", "005930", 15.79, 1.33, 2.83)
print(samsung.per)
samsung.set_per(12.75)
print(samsung.per)

>>> 15.79
>>> 12.75
```

### 270. 여러 종목의 객체 생성

아래의 표를 참조하여 3종목에 대해 객체를 생성하고 이를 파이썬 리스트에 저장하세요. 파이썬 리스트에 저장된 각 종목에 대해 for 루프를 통해 종목코드와 PER을 출력해보세요.

|종목명	|종목코드	|PER	|PBR	|배당수익률 |
|:--:|:--:|:--:|:--:|:--:|
|삼성전자	|005930	|15.79	|1.33	|2.83 |
|현대차	|005380	|8.70	|0.35	|4.27 |
|LG전자	|066570	|317.34	|0.69	|1.37 |

---

```python
class Stock:
  def __init__(self, name, code, per, pbr, dr):
    self.name = name
    self.code = code
    self.per = per
    self.pbr = pbr
    self.dr = dr

  def set_name(self, name):
    self.name = name

  def set_code(self, code):
    self.code = code

  def set_per(self, per):
    self.per = per

  def set_pbr(self, pbr):
    self.pbr = pbr

  def set_dr(self, dr):
    self.dr = dr

  def get_name(self):
    print(self.name)

  def get_code(self):
    print(self.code)

samsung = Stock("삼성전자", "005930", 15.79, 1.33, 2.83)
hyundai = Stock("현대차", "005380", 8.70, 0.35, 4.27)
lg = Stock("LG전자", "066570", 317.34, 0.69, 1.37)

invest_list = []
invest_list.append(samsung)
invest_list.append(hyundai)
invest_list.append(lg)

for i in invest_list:
  print(i.code, i.per) # i >> Stock 클래스의 객체를 바인딩한다!

>>> 005930 15.79
>>> 005380 8.7
>>> 066570 317.34
```

### 271. Account 클래스

은행에 가서 계좌를 개설하면 은행이름, 예금주, 계좌번호, 잔액이 설정됩니다. Account 클래스를 생성한 후 생성자를 구현해보세요. 생성자에서는 예금주와 초기 잔액만 입력 받습니다. 은행이름은 SC은행으로 계좌번호는 3자리-2자리-6자리 형태로 랜덤하게 생성됩니다.

```python
은행이름: SC은행
계좌번호: 111-11-111111
```

---

```python
import random

class Account:
  def __init__(self, name, balance):
    self.name = name
    self.balance = balance
    self.bank = "SC은행"
    num1 = random.randint(0, 999)
    num2 = random.randint(0, 99)
    num3 = random.randint(0, 999999)

    num1 = str(num1).zfill(3) # 1 >> '1' >> '001'
    num2 = str(num2).zfill(2)
    num3 = str(num3).zfill(6)
    self.account_number = num1 + '-' + num2 + '-' + num3

kim = Account("김민수", 100)
print(kim.name)
print(kim.balance)
print(kim.bank)
print(kim.account_number)

>>> 김민수
>>> 100
>>> SC은행
>>> 472-42-377976
```

### 272. 클래스 변수

클래스 변수를 사용해서 Account 클래스로부터 생성된 계좌 객체의 개수를 저장하세요.

```python
import random

class Account:
    # class variable
    account_count = 0

    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        self.bank = "SC은행"

        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)      # 1 -> '1' -> '001'
        num2 = str(num2).zfill(2)      # 1 -> '1' -> '01'
        num3 = str(num3).zfill(6)      # 1 -> '1' -> '0000001'
        self.account_number = num1 + '-' + num2 + '-' + num3  # 001-01-000001

        Account.account_count += 1


kim = Account("김민수", 100)
print(Account.account_count)
lee = Account("이민수", 100)
print(Account.account_count)

>>> 1
>>> 2
```

### 273. 클래스 변수 출력

Account 클래스로부터 생성된 계좌의 개수를 출력하는 get_account_num() 메서드를 추가하세요.

```python
import random

class Account:
    # class variable
    account_count = 0

    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        self.bank = "SC은행"

        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)      # 1 -> '1' -> '001'
        num2 = str(num2).zfill(2)      # 1 -> '1' -> '01'
        num3 = str(num3).zfill(6)      # 1 -> '1' -> '0000001'
        self.account_number = num1 + '-' + num2 + '-' + num3  # 001-01-000001

        Account.account_count += 1
    

    def get_account_num(cls):
      print(cls.account_count)



kim = Account("김민수", 100)
lee = Account("이민수", 100)
kim.get_account_num()
#lee.get_account_num()

>>> 2
```

### 274. 입금 메서드

Account 클래스에 입금을 위한 deposit 메서드를 추가하세요. 입금은 최소 1원 이상만 가능합니다.

```python
import random

class Account:
    # class variable
    account_count = 0

    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        self.bank = "SC은행"

        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)      # 1 -> '1' -> '001'
        num2 = str(num2).zfill(2)      # 1 -> '1' -> '01'
        num3 = str(num3).zfill(6)      # 1 -> '1' -> '0000001'
        self.account_number = num1 + '-' + num2 + '-' + num3  # 001-01-000001

        Account.account_count += 1
    
    def deposit(self, amount):
      if amount >= 1:
        self.balance += amount
      return self.balance

    def get_account_num(cls):
      print(cls.account_count)

kim = Account("김민수", 100)
kim.deposit(300)

>>> 400
```

### 275. 출금 메서드

Account 클래스에 출금을 위한 withdraw 메서드를 추가하세요. 출금은 계좌의 잔고 이상으로 출금할 수는 없습니다

```python
import random

class Account:
    # class variable
    account_count = 0

    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        self.bank = "SC은행"

        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)      # 1 -> '1' -> '001'
        num2 = str(num2).zfill(2)      # 1 -> '1' -> '01'
        num3 = str(num3).zfill(6)      # 1 -> '1' -> '0000001'
        self.account_number = num1 + '-' + num2 + '-' + num3  # 001-01-000001

        Account.account_count += 1
    
    def deposit(self, amount):
      if amount >= 1:
        self.balance += amount
      return self.balance

    def withdraw(self, amount):
      if self.balance > amount:
        self.balance -= amount
        print(self.balance)
      else:
        print("You're trying to withdraw over the balance")

    def get_account_num(cls):
      print(cls.account_count)

kim = Account("김민수", 100)
kim.deposit(300)
kim.withdraw(500)
kim.withdraw(300)

>>> You're trying to withdraw over the balance
>>> 100
```

### 276. 정보 출력 메서드

Account 인스턴스에 저장된 정보를 출력하는 display_info() 메서드를 추가하세요. 잔고는 세자리마다 쉼표를 출력하세요.

```python
은행이름: SC은행
예금주: 파이썬
계좌번호: 111-11-111111
잔고: 10,000원
```

---

```python
import random

class Account:
    # class variable
    account_count = 0

    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        self.bank = "SC은행"

        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)      # 1 -> '1' -> '001'
        num2 = str(num2).zfill(2)      # 1 -> '1' -> '01'
        num3 = str(num3).zfill(6)      # 1 -> '1' -> '0000001'
        self.account_num = num1 + '-' + num2 + '-' + num3  # 001-01-000001

        Account.account_count += 1
    
    def deposit(self, amount):
      if amount >= 1:
        self.balance += amount
      return self.balance

    def withdraw(self, amount):
      if self.balance > amount:
        self.balance -= amount
        print(self.balance)
      else:
        print("You're trying to withdraw over the balance")

    def display_info(self):
      self.balance = str(self.balance//1000) + "," + str(self.balance-10000).zfill(3)
      print("은행이름: {}, 예금주: {}, 계좌번호: {}, 잔고: {}".format(self.bank, self.name, self.account_num, self.balance))

    def get_account_num(cls):
      print(cls.account_count)

p = Account("파이썬", 10000)
p.display_info()

>>> 은행이름: SC은행, 예금주: 파이썬, 계좌번호: 633-29-021243, 잔고: 10,000
```

### 277. 이자 지급하기

입금 횟수가 5회가 될 때 잔고를 기준으로 1%의 이자가 잔고에 추가되도록 코드를 변경해보세요.

---

```python
import random

class Account:
    # class variable
    account_count = 0

    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        self.bank = "SC은행"
        
        self.deposit_count = 0

        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)      # 1 -> '1' -> '001'
        num2 = str(num2).zfill(2)      # 1 -> '1' -> '01'
        num3 = str(num3).zfill(6)      # 1 -> '1' -> '0000001'
        self.account_num = num1 + '-' + num2 + '-' + num3  # 001-01-000001

        Account.account_count += 1
    
    def deposit(self, amount):
      if amount >= 1:
        self.balance += amount
        
        self.deposit_count += 1
        if self.deposit_count % 5 == 0:
          # 이자 지급
          self.balance = self.balance * 1.01
      return self.balance

    def withdraw(self, amount):
      if self.balance > amount:
        self.balance -= amount
        print(self.balance)
      else:
        print("You're trying to withdraw over the balance")

    def display_info(self):
      self.balance = str(self.balance//1000) + "," + str(self.balance-10000).zfill(3)
      print("은행이름: {}, 예금주: {}, 계좌번호: {}, 잔고: {}".format(self.bank, self.name, self.account_num, self.balance))

    def get_account_num(cls):
      print(cls.account_count)

p = Account("파이썬", 10000)
p.deposit(10000)
p.deposit(10000)
p.deposit(10000)
p.deposit(10000)
p.deposit(10000)
print(p.balance)

>>> 60600.0
```

### 278. 여러 객체 생성

Account 클래스로부터 3개 이상 인스턴스를 생성하고 생성된 인스턴스를 리스트에 저장해보세요.

---

```python
import random

class Account:
    # class variable
    account_count = 0

    def __init__(self, name, balance):
        self.deposit_count = 0

        self.name = name
        self.balance = balance
        self.bank = "SC은행"

        # 3-2-6
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)  # 1 -> '1' -> '001'
        num2 = str(num2).zfill(2)  # 1 -> '1' -> '01'
        num3 = str(num3).zfill(6)  # 1 -> '1' -> '0000001'
        self.account_number = num1 + '-' + num2 + '-' + num3  # 001-01-000001
        Account.account_count += 1

    def get_account_num(cls):
        print(cls.account_count)  # Account.account_count

    def deposit(self, amount):
        if amount >= 1:
            self.balance += amount

            self.deposit_count += 1
            if self.deposit_count % 5 == 0:         # 5, 10, 15
                # 이자 지금
                self.balance = (self.balance * 1.01)


    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount

    def display_info(self):
        print("은행이름: ", self.bank)
        print("예금주: ", self.name)
        print("계좌번호: ", self.account_number)
        print("잔고: ", self.balance)

data = []
k = Account("KIM", 10000000)
l = Account("LEE", 10000)
p = Account("PARK", 10000)

data.append(k)
data.append(l)
data.append(p)

print(data)

for i in data:
  print(i.name, i.balance)
  
>>> [<__main__.Account object at 0x7f0c428c0bd0>, <__main__.Account object at 0x7f0c428c0b90>, <__main__.Account object at 0x7f0c428c0450>]
>>> KIM 10000000
>>> LEE 10000
>>> PARK 10000
```

### 279. 객체 순회

반복문을 통해 리스트에 있는 객체를 순회하면서 잔고가 100만원 이상인 고객의 정보만 출력하세요.

---

```python
import random

class Account:
    # class variable
    account_count = 0

    def __init__(self, name, balance):
        self.deposit_count = 0

        self.name = name
        self.balance = balance
        self.bank = "SC은행"

        # 3-2-6
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)  # 1 -> '1' -> '001'
        num2 = str(num2).zfill(2)  # 1 -> '1' -> '01'
        num3 = str(num3).zfill(6)  # 1 -> '1' -> '0000001'
        self.account_number = num1 + '-' + num2 + '-' + num3  # 001-01-000001
        Account.account_count += 1

    @classmethod
    def get_account_num(cls):
        print(cls.account_count)  # Account.account_count

    def deposit(self, amount):
        if amount >= 1:
            self.balance += amount

            self.deposit_count += 1
            if self.deposit_count % 5 == 0:         # 5, 10, 15
                # 이자 지금
                self.balance = (self.balance * 1.01)


    def withdraw(self, amount):
        if self.balance > amount:
            self.balance -= amount

    def display_info(self):
        print("은행이름: ", self.bank)
        print("예금주: ", self.name)
        print("계좌번호: ", self.account_number)
        print("잔고: ", self.balance)

data = []
k = Account("KIM", 10000000)
l = Account("LEE", 10000)
p = Account("PARK", 10000)
data.append(k)
data.append(l)
data.append(p)

for i in data:
    if i.balance >= 1000000:
        i.display_info()
        
>>> 은행이름:  SC은행
>>> 예금주:  KIM
>>> 계좌번호:  867-30-943568
>>> 잔고:  10000000
```

### 280. 입출금 내역

입금과 출금 내역이 기록되도록 코드를 업데이트 하세요. 입금 내역과 출금 내역을 출력하는 deposit_history와 withdraw_history 메서드를 추가하세요.

---

```python
import random

class Account:
    # class variable
    account_count = 0

    def __init__(self, name, balance):
        self.deposit_count = 0

        self.deposit_log = []
        self.withdraw_log = []

        self.name = name
        self.balance = balance
        self.bank = "SC은행"

        # 3-2-6
        num1 = random.randint(0, 999)
        num2 = random.randint(0, 99)
        num3 = random.randint(0, 999999)

        num1 = str(num1).zfill(3)  # 1 -> '1' -> '001'
        num2 = str(num2).zfill(2)  # 1 -> '1' -> '01'
        num3 = str(num3).zfill(6)  # 1 -> '1' -> '0000001'
        self.account_number = num1 + '-' + num2 + '-' + num3  # 001-01-000001
        Account.account_count += 1

    @classmethod
    def get_account_num(cls):
        print(cls.account_count)  # Account.account_count

    def deposit(self, amount):
        if amount >= 1:
            self.deposit_log.append(amount)

            self.balance += amount

            self.deposit_count += 1
            if self.deposit_count % 5 == 0:         # 5, 10, 15
                # 이자 지금
                self.balance = (self.balance * 1.01)


    def withdraw(self, amount):
        if self.balance > amount:
            self.withdraw_log.append(amount)

            self.balance -= amount

    def display_info(self):
        print("은행이름: ", self.bank)
        print("예금주: ", self.name)
        print("계좌번호: ", self.account_number)
        print("잔고: ", self.balance)

    def withdraw_history(self):
        for amount in self.withdraw_log:
            print("withdrawn", amount)

    def deposit_history(self):
        for amount in self.deposit_log:
            print("deposited", amount)


k = Account("Kim", 1000)
k.deposit(100)
k.deposit(200)
k.deposit(300)
k.deposit_history()

k.withdraw(100)
k.withdraw(200)
k.withdraw_history()

print("balance:", k.balance)

>>> deposited 100
>>> deposited 200
>>> deposited 300
>>> withdrawn 100
>>> withdrawn 200
>>> balance: 1300
```

### 281. 클래스 정의

다음 코드가 동작하도록 자동차 클래스를 정의하세요.

```python
car = car(2, 1000)
car.wheel
```

```python
>>> 2
```

```python
car.price
```

```python
1000
```

---


```python
class car:
  def __init__(self, wheel, price):
    self.wheel = wheel
    self.price = price

car = car(2, 1000)
print(car.wheel, car.price)

>>> 2 1000
```

### 282. 클래스 상속

자동차 클래스를 상속 받은 자전거 클래스를 정의하시오.

---

```python
class car:
  def __init__(self, wheel, price):
    self.wheel = wheel
    self.price = price

class bike(car):
  pass
```

---

**[클래스의 상속]**

클래스를 상속하기 위해서는 다음과 같이 클래스 이름 뒤 괄호 안에 상속할 클래스 이름을 넣어주면 된다.

```python
class `클래스 이름(상속할 클래스 이름)`
```

+ 왜 상속을 해야 할까? : 보통 상속은 기존 클래스를 변경하지 않고 기능을 추가하거나 기존 기능을 변경하려고 할 때 사용한다.

  "클래스에 기능을 추가하고 싶으면 기존 클래스를 수정하면 되는데 왜 굳이 상속을 받아서 처리해야하나?"라는 의문을 가질 수 있다. 하지만 기존 클래스가 라이브러리 형태로 제공되거나 수정이 허용되지 않는 경우라면 상속을 하여야 한다.

### 283. 클래스 상속

다음 코드가 동작하도록 자전거 클래스를 정의하세요. 단 자전거 클래스는 자동차 클래스를 상속받습니다.

```python
bike = bike(2, 100)
bike.price
```

```python
100
```

---

```python
class car:
  def __init__(self, wheel, price):
    self.wheel = wheel
    self.price = price

class bike(car):
  def __init__(self, wheel, price):
    self.wheel = wheel
    self.price = price

bike = bike(2, 100)
print(bike.wheel, bike.price)

>>> 2 100
```

### 284. 클래스 상속

다음 코드가 동작하도록 자전거 클래스를 정의하세요. 단 자전거 클래스는 자동차 클래스를 상속받습니다.

```python
bike = bike(2, 100, "시마노")
bike.chain
```

```python
시마노
```

---

```python
class car:
  def __init__(self, wheel, price):
    self.wheel = wheel
    self.price = price

class bike(car):
  def __init__(self, wheel, price, chain):
    super().__init__(wheel, price) # 부모 클래스에서 wheel, price 처리
    # car.__init__(self, wheel, price)
    self.chain = chain # 자식 클래스에서는 chain만 처리

bike = bike(2, 100, "시마노")
print(bike.chain)
print(bike.wheel)

>>> 시마노
>>> 2
```

---

**[`super().method`(self, )]** (참조: 프로그래머스, 파이썬 입문 <https://programmers.co.kr/learn/courses/2/lessons/330#>)


`super()`: 자식 클래스에서 부모 클래스의 내용을 사용하고 싶을 경우 쓴다.

```python
class Animal():
  def walk(self):
    print("걷는다")

  def eat(self):
    print("먹는다")

  def greet(self):
    print("인사한다")

class Human(Animal):
  def wave(self):
    print("손을 흔들면서")

  def greet(self): # over-write method
    self.wave()
    super().greet() # over-write method에서 부모 클래스의 method를 사용하고 싶은 경우, super().parent_method() 를 작성

person = Human()
person.greet()

>>> 손을 흔들면서
>>> 인사한다
```

보통 `super() method`는 `__init()__` method를 위해 사용된다.

```python
class Animal():
  def __init__(self, name):
    self.name = name

  def walk(self):
    print("걷는다")

  def eat(self):
    print("먹는다")

  def greet(self):
    print("{}이/가 인사한다".format(self.name))

class Human(Animal):

  def __init__(self, name, hand):
    super().__init__(name) # name은 부모 클래스(Animal)에서 처리하게 됨
    self.hand = hand

  def wave(self):
    print("{}을 흔들면서".format(self.hand))

  def greet(self): # over-write method
    self.wave()
    super().greet()

person = Human("사람", "오른손")
person.greet()

>>> 오른손을 흔들면서
>>> 사람이/가 인사한다
```

### 285. 클래스 상속

다음 코드가 동작하도록 자동차 클래스를 상속받는 자동차 클래스를 정의하세요.

```python
car = car(4, 1000)
car.info()
```

```python
num_of_wheel 4
price 1000
```

---

```python
class car:
  def __init__(self, wheel, price):
    self.wheel = wheel
    self.price = price

class bike(car):
  def __init__(self, wheel, price, chain):
    super().__init__(wheel, price) # 부모 클래스에서 wheel, price 처리
    # car.__init__(self, wheel, price)
    self.chain = chain # 자식 클래스에서는 chain만 처리

bike = bike(2, 100, "시마노")
print(bike.chain)
print(bike.wheel)

>>> 시마노
>>> 2
```

### 286. 부모 클래스 생성자 호출

다음 코드가 동작하도록 자전거 클래스를 수정하세요.

```python
bike = bike(2, 100, "시마노")
bike.info()
```

```python
wheel 2
price 100
```

---

```python
class car:
  def __init__(self, wheel, price):
    self.wheel = wheel
    self.price = price

  def info(self):
    print("wheel:", self.wheel)
    print("price:", self.price)

class car(car):
  def __init__(self, wheel, price):
    super().__init__(wheel, price)

class bike(car):
  def __init__(self, wheel, price, chain):
    super().__init__(wheel, price) # 부모 클래스에서 wheel, price 처리
    # car.__init__(self, wheel, price)
    self.chain = chain # 자식 클래스에서는 chain만 처리


bike = bike(2, 100, "시마노")
bike.info()

>>> wheel: 2
>>> price: 100
```

### 287. 부모 클래스 메서드 호출

자전거의 info() method로 chain 정보까지 출력하도록 수정해보세요.

```python
bike = bike(2, 100, "시마노")
bike.info()
```

```python
wheel 2
price 100
chain 시마노
```

--- 


```python
class car:
  def __init__(self, wheel, price):
    self.wheel = wheel
    self.price = price

  def info(self):
    print("wheel:", self.wheel)
    print("price:", self.price)

class car(car):
  def __init__(self, wheel, price):
    super().__init__(wheel, price)

class bike(car):
  def __init__(self, wheel, price, chain):
    super().__init__(wheel, price) # 부모 클래스에서 wheel, price 처리
    # car.__init__(self, wheel, price)
    self.chain = chain # 자식 클래스에서는 chain만 처리

  def info(self):
    super().info()
    print("chain:", self.chain)

bike = bike(2, 100, "시마노")
bike.info()

>>> wheel: 2
>>> price: 100
>>> chain: 시마노
```

### 288. 메서드 오버라이딩

다음 코드의 실행 결과를 예상해보세요.

```python
class 부모:
  def 호출(self):
    print("부모호출")

class 자식(부모):
  def 호출(self):
    print("자식호출")
나 = 자식()
나.호출()
```

---

예측 결과
: 자식호출

### 289. 생성자

다음 코드의 실행 결과를 예상해보세요.

```python
class 부모:
  def __init__(self):
    print("부모생성")

class 자식(부모):
  def __init__(self):
    print("자식생성")

나 = 자식()
```

---

예측 결과
: 자식생성

### 290. 부모클래스 생성자 호출

다음 코드의 실행 결과를 예상해보세요.

```python
class 부모:
  def __init__(self):
    print("부모생성")

class 자식(부모):
  def __init__(self):
    print("자식생성")
    super().__init__()

나 = 자식()
```

---

예측 결과
: 자식생성 부모생성

